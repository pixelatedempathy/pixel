;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="7a83c80b-2a99-4b57-ba58-1e7835b7cca4",e._sentryDebugIdIdentifier="sentry-dbid-7a83c80b-2a99-4b57-ba58-1e7835b7cca4")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_Cutfhivd.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { B as Button } from '../../chunks/button_QWh7Abi4.mjs';
import { I as Input } from '../../chunks/input_DnMLFOfd.mjs';
import { L as Label } from '../../chunks/label_C9ZUWvx2.mjs';
import { f as fheService } from '../../chunks/fhe_CK4zUaxh.mjs';
import { F as FHEOperation } from '../../chunks/types_2_ya51oN.mjs';
import { useState, useEffect } from 'react';
import { B as Badge } from '../../chunks/badge_B70Yne-r.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../../chunks/card_BfnhUXNW.mjs';
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from '../../chunks/tabs_C15Tyo9L.mjs';
export { renderers } from '../../renderers.mjs';

function FHEDemo({
  defaultMessage = "This is a secure message"
}) {
  const [initialized, setInitialized] = useState(false);
  const [message, setMessage] = useState(defaultMessage);
  const [encryptedMessage, setEncryptedMessage] = useState("");
  const [decryptedMessage, setDecryptedMessage] = useState("");
  const [operation, setOperation] = useState(FHEOperation.SENTIMENT);
  const [operationResult, setOperationResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [encryptionMode, setEncryptionMode] = useState("Not initialized");
  const [keyId, setKeyId] = useState("Not generated");
  useEffect(() => {
    const initializeFHE = async () => {
      try {
        await fheService.initialize({
          mode: "fhe",
          securityLevel: "tc256",
          keySize: 2048
        });
        setInitialized(true);
        try {
          if ("getEncryptionMode" in fheService) {
            const mode = fheService.getEncryptionMode();
            setEncryptionMode(mode);
          } else {
            setEncryptionMode("initialized");
          }
        } catch (modeError) {
          console.warn("Could not get encryption mode:", modeError);
          setEncryptionMode("initialized");
        }
        try {
          if ("rotateKeys" in fheService) {
            const keyRotationInfo = await fheService.rotateKeys();
            setKeyId(keyRotationInfo);
          } else {
            setKeyId("default-key");
          }
        } catch (keyError) {
          console.warn("Could not rotate keys:", keyError);
          setKeyId("default-key");
        }
      } catch (error2) {
        setError(`Failed to initialize FHE: ${error2.message}`);
      }
    };
    initializeFHE();
  }, []);
  const handleEncrypt = async () => {
    if (!message) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const encrypted = await fheService.encrypt(message);
      setEncryptedMessage(encrypted);
    } catch (error2) {
      setError(`Encryption failed: ${error2.message}`);
    } finally {
      setLoading(false);
    }
  };
  const handleDecrypt = async () => {
    if (!encryptedMessage) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const decrypted = await fheService.decrypt(encryptedMessage);
      setDecryptedMessage(decrypted);
    } catch (error2) {
      setError(`Decryption failed: ${error2.message}`);
    } finally {
      setLoading(false);
    }
  };
  const handleProcess = async () => {
    if (!encryptedMessage) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      let result = null;
      try {
        const response = await fetch("/api/fhe/process", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            encryptedData: encryptedMessage,
            operation
          })
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "API processing failed");
        }
        result = data.result;
      } catch (apiError) {
        console.warn("API processing failed, trying client-side:", apiError);
        if ("processEncrypted" in fheService) {
          result = await fheService.processEncrypted(
            encryptedMessage,
            operation
          );
        } else {
          throw new Error("No FHE processing method available");
        }
      }
      setOperationResult(result);
    } catch (error2) {
      setError(`Processing failed: ${error2.message}`);
    } finally {
      setLoading(false);
    }
  };
  const handleRotateKeys = async () => {
    setLoading(true);
    setError(null);
    try {
      let newKeyId = "";
      try {
        const response = await fetch("/api/fhe/rotate-keys", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "API key rotation failed");
        }
        newKeyId = data.keyId;
      } catch (apiError) {
        console.warn("API key rotation failed, trying client-side:", apiError);
        if ("rotateKeys" in fheService) {
          newKeyId = await fheService.rotateKeys();
        } else {
          throw new Error("No key rotation method available");
        }
      }
      setKeyId(newKeyId);
    } catch (error2) {
      setError(`Key rotation failed: ${error2.message}`);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxs(Card, { className: "w-full max-w-3xl mx-auto", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Fully Homomorphic Encryption Demo" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Explore secure data processing with FHE technology" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-2", children: [
        /* @__PURE__ */ jsx(Badge, { variant: initialized ? "default" : "destructive", children: initialized ? "FHE Initialized" : "Not Initialized" }),
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
          "Mode: ",
          encryptionMode
        ] }),
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
          "Key ID: ",
          keyId.substring(0, 8),
          "..."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { children: [
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "encrypt", className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid grid-cols-3 mb-4", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "encrypt", children: "Encrypt" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "process", children: "Process" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "decrypt", children: "Decrypt" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "encrypt", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message to Encrypt" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "message",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                placeholder: "Enter a message to encrypt"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleEncrypt,
              disabled: !initialized || loading || !message,
              className: "w-full",
              children: loading ? "Encrypting..." : "Encrypt Message"
            }
          ),
          encryptedMessage && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-muted rounded-md", children: [
            /* @__PURE__ */ jsx(Label, { children: "Encrypted Message" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs font-mono break-all mt-1", children: encryptedMessage })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "process", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { children: "Select Operation" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: operation === FHEOperation.SENTIMENT ? "default" : "outline",
                  onClick: () => setOperation(FHEOperation.SENTIMENT),
                  children: "Sentiment"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: operation === FHEOperation.CATEGORIZE ? "default" : "outline",
                  onClick: () => setOperation(FHEOperation.CATEGORIZE),
                  children: "Categorize"
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: operation === FHEOperation.SUMMARIZE ? "default" : "outline",
                  onClick: () => setOperation(FHEOperation.SUMMARIZE),
                  children: "Summarize"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleProcess,
              disabled: !initialized || loading || !encryptedMessage,
              className: "w-full",
              children: loading ? "Processing..." : `Process with ${operation}`
            }
          ),
          operationResult && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-muted rounded-md", children: [
            /* @__PURE__ */ jsx(Label, { children: "Operation Result" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs font-mono mt-1 whitespace-pre-wrap", children: JSON.stringify(operationResult, null, 2) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "decrypt", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "encryptedMessage", children: "Encrypted Message" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "encryptedMessage",
                value: encryptedMessage,
                onChange: (e) => setEncryptedMessage(e.target.value),
                placeholder: "Enter an encrypted message"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleDecrypt,
              disabled: !initialized || loading || !encryptedMessage,
              className: "w-full",
              children: loading ? "Decrypting..." : "Decrypt Message"
            }
          ),
          decryptedMessage && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-muted rounded-md", children: [
            /* @__PURE__ */ jsx(Label, { children: "Decrypted Message" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1", children: decryptedMessage })
          ] })
        ] }) })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-destructive/10 text-destructive rounded-md", children: error })
    ] }),
    /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between", children: [
      /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => window.location.reload(), children: "Reset Demo" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "secondary",
          onClick: handleRotateKeys,
          disabled: !initialized || loading,
          children: "Rotate Encryption Keys"
        }
      )
    ] })
  ] });
}

const $$Fhe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "FHE Demo | Pixelated Empathy", "description": "Explore Fully Homomorphic Encryption capabilities in Pixelated Empathy" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto py-10"> <div class="flex flex-col gap-6"> <div class="text-center"> <h1 class="text-3xl font-bold tracking-tight">
Fully Homomorphic Encryption Demo
</h1> <p class="text-muted-foreground mt-2">
Experience the power of secure computing on encrypted data
</p> </div> <div class="max-w-4xl mx-auto w-full"> ${renderComponent($$result2, "FHEDemo", FHEDemo, { "client:load": true, "defaultMessage": "Your data is protected with FHE technology", "client:component-hydration": "load", "client:component-path": "@/components/demo/FHEDemo", "client:component-export": "FHEDemo" })} </div> <div class="max-w-3xl mx-auto mt-10 px-4"> <h2 class="text-2xl font-semibold mb-4">
About Fully Homomorphic Encryption
</h2> <div class="prose prose-neutral dark:prose-invert"> <p>
Fully Homomorphic Encryption (FHE) is a revolutionary cryptographic
            technique that allows computations to be performed directly on
            encrypted data without requiring decryption first.
</p> <h3>Key Benefits</h3> <ul> <li> <strong>Complete Privacy:</strong> Data remains encrypted throughou
              the entire processing lifecycle
</li> <li> <strong>Secure Computation:</strong> Perform operations on sensitive
              data while maintaining confidentiality
</li> <li> <strong>HIPAA Compliance:</strong> Ideal for healthcare applications
              requiring the highest levels of privacy
</li> <li> <strong>Zero Knowledge:</strong> Servers can process data without ever
              seeing the actual content
</li> </ul> <h3>Use Cases in Pixelated Empathy</h3> <p>In our therapy platform, FHE enables:</p> <ul> <li>Secure sentiment analysis on therapy messages</li> <li>Privacy-preserving categorization of session content</li> <li>Confidential summarization of therapy conversations</li> <li>
Secure key rotation to maintain the highest level of protection
</li> </ul> <p>
The demo above demonstrates these capabilities in an interactive
            way, allowing you to see FHE in action without revealing the
            underlying sensitive data.
</p> </div> </div> </div> </div> ` })}`;
}, "/root/pixel/src/pages/demo/fhe.astro", void 0);

const $$file = "/root/pixel/src/pages/demo/fhe.astro";
const $$url = "/demo/fhe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Fhe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
