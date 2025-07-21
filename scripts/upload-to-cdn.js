const fs = require('fs');
const path = require('path');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { fromIni } = require('@aws-sdk/credential-provider-ini');

// Configuration - Replace these with your actual values
const BUCKET_NAME = process.env.CDN_BUCKET_NAME || 'your-cdn-bucket';
const CDN_URL = process.env.CDN_URL || 'https://your-cdn-url.com';
const ASSETS_DIR = path.join(__dirname, '../public');

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: fromIni({
    profile: process.env.AWS_PROFILE || 'default',
  }),
});

async function uploadFile(filePath, key) {
  const fileStream = fs.createReadStream(filePath);
  
  const uploadParams = {
    Bucket: BUCKET_NAME,
    Key: key,
    Body: fileStream,
    ACL: 'public-read',
    ContentType: getContentType(filePath),
  };

  try {
    await s3Client.send(new PutObjectCommand(uploadParams));
    console.log(`Uploaded: ${key}`);
    return `${CDN_URL}/${key}`;
  } catch (err) {
    console.error(`Error uploading ${key}:`, err);
    throw err;
  }
}

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject',
    '.ico': 'image/x-icon',
  };
  return types[ext] || 'application/octet-stream';
}

async function walkDir(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await walkDir(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function main() {
  try {
    const files = await walkDir(ASSETS_DIR);
    const assetMap = {};
    
    for (const filePath of files) {
      const relativePath = path.relative(ASSETS_DIR, filePath);
      const cdnUrl = await uploadFile(filePath, relativePath);
      assetMap[`/public/${relativePath}`.replace(/\\/g, '/')] = cdnUrl;
    }
    
    // Save the asset map for reference
    fs.writeFileSync(
      path.join(__dirname, '../src/cdn-asset-map.json'),
      JSON.stringify(assetMap, null, 2)
    );
    
    console.log('CDN upload complete!');
  } catch (error) {
    console.error('Error during CDN upload:', error);
    process.exit(1);
  }
}

main();
