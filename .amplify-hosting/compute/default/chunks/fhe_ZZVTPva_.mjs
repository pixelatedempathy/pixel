;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="9eed7b10-fe3b-48de-8678-e5968992c470",e._sentryDebugIdIdentifier="sentry-dbid-9eed7b10-fe3b-48de-8678-e5968992c470")}catch(e){}}();import SEAL from 'node-seal';
import { c as createBuildSafeLogger } from './build-safe-logger_TXSN-RsD.mjs';
import './astro/server_bjkJ-nhl.mjs';

const logger = createBuildSafeLogger("default");
class RealFHEService {
  seal = null;
  context = null;
  publicKey = null;
  secretKey = null;
  encryptor = null;
  decryptor = null;
  encoder = null;
  evaluator = null;
  isInitialized = false;
  encryptionMode = "secure";
  config = {
    mode: "secure",
    keySize: 2048,
    securityLevel: "tc128"
  };
  async initialize(config) {
    try {
      this.config = config;
      this.encryptionMode = config.mode;
      this.seal = await SEAL();
      const schemeType = this.seal.SchemeType.bfv;
      const securityLevel = this.seal.SecurityLevel.tc128;
      const polyModulusDegree = this.encryptionMode === "secure" ? 8192 : 4096;
      const bitSizes = this.encryptionMode === "secure" ? [60, 40, 40, 60] : [60, 40, 40];
      const encParams = this.seal.EncryptionParameters(
        schemeType
      );
      encParams.setPolyModulusDegree(polyModulusDegree);
      const coeffModulus = this.seal.CoeffModulus.Create(
        polyModulusDegree,
        Int32Array.from(bitSizes)
      );
      encParams.setCoeffModulus(coeffModulus);
      const plainModulus = this.seal.PlainModulus.Batching(
        polyModulusDegree,
        20
      );
      encParams.setPlainModulus(plainModulus);
      this.context = this.seal.Context(
        encParams,
        true,
        securityLevel
      );
      if (!this.context.parametersSet()) {
        throw new Error("Parameters are not set correctly");
      }
      const keyGenerator = this.seal.KeyGenerator(
        this.context
      );
      this.publicKey = keyGenerator.createPublicKey();
      this.secretKey = keyGenerator.secretKey();
      this.encoder = this.seal.BatchEncoder(
        this.context
      );
      this.encryptor = this.seal.Encryptor(
        this.context,
        this.publicKey
      );
      this.decryptor = this.seal.Decryptor(
        this.context,
        this.secretKey
      );
      this.evaluator = this.seal.Evaluator(
        this.context
      );
      this.isInitialized = true;
      logger.info("FHE service initialized successfully");
    } catch (error) {
      logger.error("Failed to initialize FHE service", {
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }
  setEncryptionMode(mode) {
    this.encryptionMode = mode;
    this.config = { ...this.config, mode };
    if (this.isInitialized) {
      logger.warn(
        "Encryption mode changed after initialization. Re-initialization required."
      );
      this.isInitialized = false;
    }
  }
  async ensureInitialized() {
    if (!this.isInitialized) {
      await this.initialize(this.config);
    }
  }
  textToUint32Array(text) {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(text);
    const result = new Uint32Array(Math.ceil(bytes.length / 4));
    for (let i = 0; i < bytes.length; i += 4) {
      let value = 0;
      for (let j = 0; j < 4 && i + j < bytes.length; j++) {
        value |= bytes[i + j] << 8 * j;
      }
      result[i / 4] = value;
    }
    return result;
  }
  uint32ArrayToText(array) {
    const bytes = new Uint8Array(array.length * 4);
    for (let i = 0; i < array.length; i++) {
      const value = array[i];
      for (let j = 0; j < 4; j++) {
        bytes[i * 4 + j] = value >> 8 * j & 255;
      }
    }
    let lastNonZero = bytes.length - 1;
    while (lastNonZero >= 0 && bytes[lastNonZero] === 0) {
      lastNonZero--;
    }
    const decoder = new TextDecoder();
    return decoder.decode(bytes.slice(0, lastNonZero + 1));
  }
  async encrypt(data) {
    try {
      await this.ensureInitialized();
      const dataArray = this.textToUint32Array(data);
      const plaintext = this.seal.PlainText();
      this.encoder.encode(
        Int32Array.from(dataArray),
        plaintext
      );
      const ciphertext = this.seal.CipherText();
      this.encryptor.encrypt(plaintext, ciphertext);
      const serialized = ciphertext.save();
      plaintext.delete();
      return serialized;
    } catch (error) {
      logger.error("Encryption failed", {
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }
  async decrypt(data) {
    try {
      await this.ensureInitialized();
      const ciphertext = this.seal.CipherText();
      ciphertext.load(this.context, data);
      const plaintext = this.seal.PlainText();
      this.decryptor.decrypt(ciphertext, plaintext);
      const decodedArray = this.encoder.decode(plaintext);
      const finalDecodedArray = decodedArray instanceof Uint32Array ? decodedArray : new Uint32Array(decodedArray);
      const result = this.uint32ArrayToText(finalDecodedArray);
      plaintext.delete();
      ciphertext.delete();
      return result;
    } catch (error) {
      logger.error("Decryption failed", {
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }
  async encryptText(text) {
    return this.encrypt(text);
  }
  async decryptText(text) {
    return this.decrypt(text);
  }
  async generateHash(data) {
    try {
      const encoder = new TextEncoder();
      const dataBuffer = encoder.encode(data);
      const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    } catch (error) {
      logger.error("Hash generation failed", {
        error: error instanceof Error ? error.message : String(error)
      });
      throw error;
    }
  }
}
const fheService = new RealFHEService();

export { fheService as f };
