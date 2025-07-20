import fs from 'node:fs';
import path from 'node:path';

// Path to the project's package.json
const packageJsonPath = path.resolve(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// Get the Astro version from dependencies
let astroVersion = packageJson.dependencies?.astro || packageJson.devDependencies?.astro;

// Clean the version string to remove characters like '^' or '~'
if (astroVersion) {
  astroVersion = astroVersion.replace(/^[^\d]*/, '');
}

if (!astroVersion) {
  console.error('Error: Astro version not found in package.json dependencies.');
  process.exit(1);
}

// Define the structure for deploy-manifest.json
const deployManifest = {
  version: 1,
  routes: [
    {
      path: '/_astro/*',
      target: {
        kind: 'static',
      },
      fallback: {
        kind: 'compute',
        src: 'default',
      },
    },
    {
      path: '/*',
      target: {
        kind: 'compute',
        src: 'default',
      },
    },
  ],
  computeResources: [
    {
      name: 'default',
      runtime: 'nodejs22.x',
      entrypoint: 'server/entry.mjs',
    },
  ],
  framework: {
    name: 'astro',
    version: astroVersion,
  },
};

// Define the output path for the manifest
const outputPath = path.resolve(process.cwd(), '.amplify-hosting', 'deploy-manifest.json');

// Ensure the directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write the file
fs.writeFileSync(outputPath, JSON.stringify(deployManifest, null, 2));

console.log(`✅ Successfully created deploy-manifest.json at ${outputPath}`);
