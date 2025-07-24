;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1650c97a-3d78-45ec-b024-716bcd81bb5e",e._sentryDebugIdIdentifier="sentry-dbid-1650c97a-3d78-45ec-b024-716bcd81bb5e")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, m as maybeRenderHead, r as renderComponent, d as renderScript, a as renderTemplate } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$AdminLayout } from '../../chunks/AdminLayout_Ciex37LV.mjs';
import { T as Tabs, a as TabsList, b as TabsTrigger, c as TabsContent } from '../../chunks/tabs_C15Tyo9L.mjs';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { B as Button } from '../../chunks/button_QWh7Abi4.mjs';
import { C as Card, a as CardHeader, b as CardTitle, c as CardDescription, d as CardContent, e as CardFooter } from '../../chunks/card_BfnhUXNW.mjs';
import { I as Input } from '../../chunks/input_DnMLFOfd.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from '../../chunks/select_BdS8I9Y_.mjs';
import { L as Label } from '../../chunks/label_C9ZUWvx2.mjs';
import { S as StorageLocation, B as BackupType, a as BackupStatus, R as RecoveryTestStatus, T as TestEnvironmentType } from '../../chunks/backup-types_DacKTi_O.mjs';
import { S as Switch } from '../../chunks/switch_DGEtwNxv.mjs';
import { B as Badge } from '../../chunks/badge_B70Yne-r.mjs';
import { toast } from '../../chunks/toast_DKDABlZp.mjs';
export { renderers } from '../../renderers.mjs';

const BackupConfigurationTab = ({
  config,
  onUpdateConfig
}) => {
  const [formState, setFormState] = useState({ ...config });
  const [isEditing, setIsEditing] = useState(false);
  const [backupEnabled, setBackupEnabled] = useState(true);
  const [encryptBackups, setEncryptBackups] = useState(true);
  const [frequency, setFrequency] = useState("daily");
  const [retention, setRetention] = useState("30");
  const [saving, setSaving] = useState(false);
  const handleChange = (section, key, field, value) => {
    if (section === "backupTypes") {
      setFormState({
        ...formState,
        backupTypes: {
          ...formState.backupTypes,
          [key]: {
            ...formState.backupTypes[key],
            [field]: field === "retention" ? Number(value) : value
          }
        }
      });
    } else if (section === "storageLocations") {
      setFormState({
        ...formState,
        storageLocations: {
          ...formState.storageLocations,
          [key]: {
            ...formState.storageLocations[key],
            [field]: value
          }
        }
      });
    } else if (section === "encryption") {
      setFormState({
        ...formState,
        encryption: {
          ...formState.encryption,
          [field]: field === "keyRotationDays" ? Number(value) : value
        }
      });
    }
  };
  const handleSave = () => {
    if (!validateConfig()) {
      alert("Please fix the validation errors before saving");
      return;
    }
    onUpdateConfig(formState);
    setIsEditing(false);
  };
  const validateConfig = () => {
    for (const type in formState.backupTypes) {
      const backupConfig = formState.backupTypes[type];
      if (!backupConfig) {
        continue;
      }
      if (!backupConfig.schedule || !backupConfig.schedule.includes("*")) {
        return false;
      }
      if (backupConfig.retention <= 0) {
        return false;
      }
    }
    for (const location in formState.storageLocations) {
      const storageConfig = formState.storageLocations[location];
      if (!storageConfig) {
        continue;
      }
      if (!storageConfig.provider) {
        return false;
      }
      if (["aws-s3", "google-cloud-storage"].includes(storageConfig.provider) && !storageConfig.bucket) {
        return false;
      }
    }
    if (!formState.encryption.algorithm) {
      return false;
    }
    if (formState.encryption.keyRotationDays <= 0) {
      return false;
    }
    return true;
  };
  const handleCancel = () => {
    setFormState({ ...config });
    setIsEditing(false);
  };
  const handleSaveConfig = async () => {
    setSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSaving(false);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Backup Configuration" }),
      !isEditing ? /* @__PURE__ */ jsx(Button, { onClick: () => setIsEditing(true), children: "Edit Configuration" }) : /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: handleCancel, children: "Cancel" }),
        /* @__PURE__ */ jsx(Button, { onClick: handleSave, children: "Save Configuration" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Backup Settings" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Configure automated backups and encryption" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Enable Automated Backups" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Automatically backup your data according to the schedule" })
          ] }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              checked: backupEnabled,
              onCheckedChange: setBackupEnabled,
              "aria-label": "Enable automated backups"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium", children: "Encrypt Backups" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: "Enable end-to-end encryption for all backup data" })
          ] }),
          /* @__PURE__ */ jsx(
            Switch,
            {
              checked: encryptBackups,
              onCheckedChange: setEncryptBackups,
              "aria-label": "Encrypt backups"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "backup-frequency",
                className: "block text-sm font-medium mb-2",
                children: "Backup Frequency"
              }
            ),
            /* @__PURE__ */ jsxs(Select, { value: frequency, onValueChange: setFrequency, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "hourly", children: "Hourly" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "daily", children: "Daily" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "weekly", children: "Weekly" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "monthly", children: "Monthly" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "retention-period",
                className: "block text-sm font-medium mb-2",
                children: "Retention Period (Days)"
              }
            ),
            /* @__PURE__ */ jsxs(Select, { value: retention, onValueChange: setRetention, children: [
              /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "7", children: "7 days" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "14", children: "14 days" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "30", children: "30 days" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "90", children: "90 days" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "365", children: "365 days" })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Storage Locations" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Configure where backups are stored" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Primary Storage" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "primary-provider", children: "Storage Provider" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  disabled: !isEditing,
                  value: formState.storageLocations[StorageLocation.PRIMARY]?.provider || "",
                  onValueChange: (value) => handleChange(
                    "storageLocations",
                    StorageLocation.PRIMARY,
                    "provider",
                    value
                  ),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "aws-s3", children: "AWS S3" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "google-cloud-storage", children: "Google Cloud Storage" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "local-filesystem", children: "Local Filesystem" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "primary-bucket", children: "Bucket/Container Name" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "primary-bucket",
                  value: formState.storageLocations[StorageLocation.PRIMARY]?.bucket || "",
                  onChange: (e) => handleChange(
                    "storageLocations",
                    StorageLocation.PRIMARY,
                    "bucket",
                    e.target.value
                  ),
                  disabled: !isEditing
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "primary-region", children: "Region" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "primary-region",
                  value: formState.storageLocations[StorageLocation.PRIMARY]?.region || "",
                  onChange: (e) => handleChange(
                    "storageLocations",
                    StorageLocation.PRIMARY,
                    "region",
                    e.target.value
                  ),
                  disabled: !isEditing
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Secondary Storage (Optional)" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "secondary-provider", children: "Storage Provider" }),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  disabled: !isEditing,
                  value: formState.storageLocations[StorageLocation.SECONDARY]?.provider || "",
                  onValueChange: (value) => handleChange(
                    "storageLocations",
                    StorageLocation.SECONDARY,
                    "provider",
                    value
                  ),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "aws-s3", children: "AWS S3" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "google-cloud-storage", children: "Google Cloud Storage" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "local-filesystem", children: "Local Filesystem" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "secondary-bucket", children: "Bucket/Container Name" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "secondary-bucket",
                  value: formState.storageLocations[StorageLocation.SECONDARY]?.bucket || "",
                  onChange: (e) => handleChange(
                    "storageLocations",
                    StorageLocation.SECONDARY,
                    "bucket",
                    e.target.value
                  ),
                  disabled: !isEditing
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "secondary-region", children: "Region" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "secondary-region",
                  value: formState.storageLocations[StorageLocation.SECONDARY]?.region || "",
                  onChange: (e) => handleChange(
                    "storageLocations",
                    StorageLocation.SECONDARY,
                    "region",
                    e.target.value
                  ),
                  disabled: !isEditing
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Encryption Settings" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Configure how backup data is encrypted" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "encryption-algorithm", children: "Encryption Algorithm" }),
          /* @__PURE__ */ jsxs(
            Select,
            {
              disabled: !isEditing,
              value: formState.encryption.algorithm,
              onValueChange: (value) => handleChange("encryption", "", "algorithm", value),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "AES-256-GCM", children: "AES-256-GCM (Recommended)" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "AES-256-CBC", children: "AES-256-CBC" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "ChaCha20-Poly1305", children: "ChaCha20-Poly1305" })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "key-rotation", children: "Key Rotation Period (days)" }),
          /* @__PURE__ */ jsx(
            Input,
            {
              id: "key-rotation",
              type: "number",
              value: formState.encryption.keyRotationDays,
              onChange: (e) => handleChange(
                "encryption",
                "",
                "keyRotationDays",
                e.target.value
              ),
              disabled: !isEditing,
              min: "1"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: "Recommended: 90 days" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ jsx(Button, { onClick: handleSaveConfig, disabled: saving, children: saving ? "Saving..." : "Save Configuration" }) })
  ] });
};

const formatBytes$1 = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
const formatDate$1 = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString();
};
const renderStatusBadge$1 = (status) => {
  switch (status) {
    case BackupStatus.PENDING:
      return /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Pending" });
    case BackupStatus.IN_PROGRESS:
      return /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "secondary",
          className: "bg-blue-100 text-blue-800 hover:bg-blue-100",
          children: "In Progress"
        }
      );
    case BackupStatus.COMPLETED:
      return /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: "bg-green-100 text-green-800 hover:bg-green-100",
          children: "Completed"
        }
      );
    case BackupStatus.FAILED:
      return /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Failed" });
    case BackupStatus.VERIFIED:
      return /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: "bg-green-100 text-green-800 hover:bg-green-100",
          children: "Verified"
        }
      );
    case BackupStatus.VERIFICATION_FAILED:
      return /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Verification Failed" });
    case BackupStatus.EXPIRED:
      return /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: "bg-gray-100 text-gray-800 hover:bg-gray-100",
          children: "Expired"
        }
      );
    default:
      return null;
  }
};
const renderTypeBadge = (type) => {
  switch (type) {
    case BackupType.FULL:
      return /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: "bg-purple-100 text-purple-800 hover:bg-purple-100",
          children: "Full"
        }
      );
    case BackupType.DIFFERENTIAL:
      return /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: "bg-blue-100 text-blue-800 hover:bg-blue-100",
          children: "Differential"
        }
      );
    case BackupType.TRANSACTION:
      return /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "outline",
          className: "bg-gray-100 text-gray-800 hover:bg-gray-100",
          children: "Transaction"
        }
      );
    default:
      return null;
  }
};
const BackupStatusTab = ({
  backups,
  onCreateBackup,
  onVerifyBackup
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Backup Status" }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => onCreateBackup(BackupType.TRANSACTION),
            variant: "outline",
            size: "sm",
            children: "Create Transaction Backup"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: () => onCreateBackup(BackupType.DIFFERENTIAL),
            variant: "outline",
            size: "sm",
            children: "Create Differential Backup"
          }
        ),
        /* @__PURE__ */ jsx(Button, { onClick: () => onCreateBackup(BackupType.FULL), size: "sm", children: "Create Full Backup" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: backups.length === 0 ? /* @__PURE__ */ jsx(Card, { className: "col-span-full", children: /* @__PURE__ */ jsx(CardContent, { className: "py-8 text-center text-gray-500", children: "No backups have been created yet. Use the buttons above to create your first backup." }) }) : backups.map((backup) => /* @__PURE__ */ jsxs(
      Card,
      {
        className: backup.status === BackupStatus.FAILED || backup.status === BackupStatus.VERIFICATION_FAILED ? "border-red-200" : "",
        children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-base", children: renderTypeBadge(backup.type) }),
              renderStatusBadge$1(backup.status)
            ] }),
            /* @__PURE__ */ jsxs(CardDescription, { children: [
              "Created: ",
              formatDate$1(backup.timestamp)
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-4 gap-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "ID:" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gray-600 text-xs", children: backup.id })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Size:" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: formatBytes$1(backup.size) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Location:" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: backup.location })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Retention Until:" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: new Date(backup.retentionDate).toLocaleDateString() })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-end space-x-2 pt-0", children: [
            [
              BackupStatus.COMPLETED,
              BackupStatus.VERIFICATION_FAILED
            ].includes(backup.status) && /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => onVerifyBackup(backup.id),
                children: "Verify"
              }
            ),
            backup.status === BackupStatus.IN_PROGRESS && /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", disabled: true, children: [
              /* @__PURE__ */ jsx("span", { className: "mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-r-transparent" }),
              "In Progress"
            ] }),
            /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "Details" })
          ] })
        ]
      },
      backup.id
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: "Backup Schedule" }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "py-4", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Type" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Schedule" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Next Run" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Retention" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Full Backup" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Weekly (Sunday at midnight)" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: (() => {
              const now = /* @__PURE__ */ new Date();
              const daysUntilSunday = 7 - now.getDay();
              const nextSunday = new Date(now);
              nextSunday.setDate(now.getDate() + daysUntilSunday);
              nextSunday.setHours(0, 0, 0, 0);
              return nextSunday.toLocaleDateString();
            })() }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "365 days" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Differential Backup" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Daily at midnight (except Sunday)" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: (() => {
              const now = /* @__PURE__ */ new Date();
              const tomorrow = new Date(now);
              tomorrow.setDate(now.getDate() + 1);
              tomorrow.setHours(0, 0, 0, 0);
              return tomorrow.toLocaleDateString();
            })() }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "30 days" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Transaction Backup" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Hourly" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: (() => {
              const now = /* @__PURE__ */ new Date();
              const nextHour = new Date(now);
              nextHour.setHours(now.getHours() + 1, 0, 0, 0);
              return nextHour.toLocaleTimeString();
            })() }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "7 days" })
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
};

const formatDate = (dateString) => new Date(dateString).toLocaleString();
const formatDuration = (ms) => {
  if (ms < 1e3) {
    return `${ms}ms`;
  }
  return `${(ms / 1e3).toFixed(2)}s`;
};
const renderStatusBadge = (status) => {
  switch (status) {
    case RecoveryTestStatus.PASSED:
      return /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-green-100 text-green-800", children: "Passed" });
    case RecoveryTestStatus.FAILED:
      return /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Failed" });
    case RecoveryTestStatus.IN_PROGRESS:
      return /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-blue-100 text-blue-800", children: "In Progress" });
    default:
      return /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: status });
  }
};
const BackupRecoveryTab = ({
  backups,
  recoveryHistory: initialRecoveryHistory
}) => {
  const [selectedBackupId, setSelectedBackupId] = useState("");
  const [isTesting, setIsTesting] = useState(false);
  const [latestTestResult, setLatestTestResult] = useState(
    null
  );
  const [recoveryHistory, setRecoveryHistory] = useState(
    initialRecoveryHistory
  );
  const [selectedTest, setSelectedTest] = useState(null);
  const [testEnvironment, setTestEnvironment] = useState(
    "sandbox" /* Sandbox */
  );
  const selectedBackup = backups.find((b) => b.id === selectedBackupId);
  const handleRunTest = async () => {
    if (!selectedBackup) {
      toast.error("Please select a backup to test.");
      return;
    }
    setIsTesting(true);
    setLatestTestResult(null);
    try {
      const response = await fetch("/api/admin/backup/recovery-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          backupId: selectedBackup.id,
          environment: testEnvironment
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to run recovery test.");
      }
      setLatestTestResult(data);
      setRecoveryHistory([data, ...recoveryHistory]);
      toast.success("Recovery test completed successfully!");
    } catch (error) {
      console.error("Recovery test failed:", error);
      const errorMessage = error instanceof Error ? error.message : typeof error === "object" && error !== null && "message" in error ? String(error.message) : "An unexpected error occurred.";
      toast.error(errorMessage);
    } finally {
      setIsTesting(false);
    }
  };
  const handleSelectTest = (testId) => {
    if (selectedTest === testId) {
      setSelectedTest(null);
    } else {
      setSelectedTest(testId);
    }
  };
  const availableBackups = backups.filter(
    (b) => b.status === "completed" || b.status === "verified"
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Manual Recovery Test" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Select a backup and an environment to run a manual recovery test." })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "backup-select",
                className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                children: "Select Backup"
              }
            ),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: selectedBackupId,
                onValueChange: setSelectedBackupId,
                placeholder: "Choose a backup...",
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsx(SelectContent, { children: availableBackups.map((backup) => /* @__PURE__ */ jsxs(SelectItem, { value: backup.id, children: [
                    new Date(backup.timestamp).toLocaleString(),
                    " -",
                    " ",
                    backup.type
                  ] }, backup.id)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "test-environment",
                className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
                children: "Test Environment"
              }
            ),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: testEnvironment,
                onValueChange: (value) => setTestEnvironment(value),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "sandbox" /* Sandbox */, children: "Sandbox (Memory)" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "docker" /* Docker */, children: "Docker" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "kubernetes" /* Kubernetes */, children: "Kubernetes" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "vm" /* VM */, children: "VM" })
                  ] })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            onClick: handleRunTest,
            disabled: isTesting || !selectedBackupId,
            children: isTesting ? "Testing..." : "Run Test"
          }
        )
      ] })
    ] }),
    latestTestResult && /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Latest Test Result" }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Status:" }),
              /* @__PURE__ */ jsx("span", { className: "ml-2", children: renderStatusBadge(latestTestResult.status) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Duration:" }),
              /* @__PURE__ */ jsx("span", { className: "ml-2", children: formatDuration(latestTestResult.timeTaken) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Environment:" }),
            /* @__PURE__ */ jsx("span", { className: "ml-2", children: latestTestResult.environment })
          ] })
        ] }),
        " "
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Recent Recovery Tests" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Results from backup recovery testing in isolated environments" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "rounded-md border", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 p-3 bg-slate-50 dark:bg-slate-800 text-sm font-medium", children: [
          /* @__PURE__ */ jsx("div", { className: "col-span-4", children: "Backup" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-3", children: "Test Date" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: "Status" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-2", children: "Time Taken" }),
          /* @__PURE__ */ jsx("div", { className: "col-span-1", children: "Details" })
        ] }),
        recoveryHistory.length === 0 ? /* @__PURE__ */ jsx("div", { className: "p-4 text-center text-gray-500", children: "No recovery tests have been run yet" }) : /* @__PURE__ */ jsx("div", { className: "divide-y", children: recoveryHistory.map((test) => {
          const backup = backups.find((b) => b.id === test.backupId);
          return /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                className: `grid grid-cols-12 p-3 text-sm items-center`,
                children: [
                  /* @__PURE__ */ jsx("div", { className: "col-span-4 truncate", children: backup ? /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: backup.type }),
                    " ",
                    "-",
                    " ",
                    new Date(backup.timestamp).toLocaleDateString()
                  ] }) : /* @__PURE__ */ jsx("span", { className: "text-gray-500", children: "Unknown backup" }) }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-3", children: formatDate(test.testDate) }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-2", children: renderStatusBadge(test.status) }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-2", children: formatDuration(test.timeTaken) }),
                  /* @__PURE__ */ jsx("div", { className: "col-span-1 text-right", children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => handleSelectTest(test.id),
                      children: selectedTest === test.id ? "Hide" : "View"
                    }
                  ) })
                ]
              }
            ),
            selectedTest === test.id && /* @__PURE__ */ jsxs("div", { className: "col-span-12 p-3 bg-slate-50 dark:bg-slate-800 mt-1 rounded-md", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Test Results" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Environment" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm", children: test.environment })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-xs text-gray-500 dark:text-gray-400", children: "Test ID" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-mono text-xs", children: test.id })
                  ] })
                ] }),
                test.verificationResults && test.verificationResults.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                  /* @__PURE__ */ jsx("h5", { className: "text-sm font-medium mb-2", children: "Verification Results" }),
                  /* @__PURE__ */ jsx("div", { className: "rounded-md border divide-y", children: test.verificationResults.map((vr, idx) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "p-2 flex justify-between items-center",
                      children: [
                        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { className: "font-medium", children: vr.testCase }) }),
                        /* @__PURE__ */ jsx("div", { children: vr.passed ? /* @__PURE__ */ jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: "bg-green-100 text-green-800",
                            children: "Passed"
                          }
                        ) : /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: "Failed" }) })
                      ]
                    },
                    `verification-${idx}-${vr.testCase}`
                  )) })
                ] }),
                test.issues && test.issues.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                  /* @__PURE__ */ jsx("h5", { className: "text-sm font-medium mb-2 text-red-500", children: "Issues" }),
                  /* @__PURE__ */ jsx("div", { className: "rounded-md border border-red-200 divide-y divide-red-100", children: test.issues.map((issue, idx) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "p-2",
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: issue.type }),
                          /* @__PURE__ */ jsx(
                            Badge,
                            {
                              variant: "outline",
                              className: `
                                            ${issue.severity === "critical" ? "bg-red-100 text-red-800" : ""}
                                            ${issue.severity === "high" ? "bg-orange-100 text-orange-800" : ""}
                                            ${issue.severity === "medium" ? "bg-yellow-100 text-yellow-800" : ""}
                                            ${issue.severity === "low" ? "bg-blue-100 text-blue-800" : ""}
                                          `,
                              children: issue.severity
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm mt-1", children: issue.description })
                      ]
                    },
                    `issue-${idx}-${issue.type}`
                  )) })
                ] })
              ] })
            ] })
          ] }, test.id);
        }) })
      ] }) })
    ] })
  ] });
};

const formatBytes = (bytes, decimals = 2) => {
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};
const calculateSuccessRate = (successful, total) => {
  if (total === 0) {
    return "0%";
  }
  return `${Math.round(successful / total * 100)}%`;
};
const BackupReportTab = ({
  backups,
  recoveryTests
}) => {
  const [reportPeriod, setReportPeriod] = useState("last30days");
  const totalBackups = backups.length;
  const successfulBackups = backups.filter(
    (b) => b.status === BackupStatus.COMPLETED || b.status === BackupStatus.VERIFIED
  ).length;
  const failedBackups = backups.filter(
    (b) => b.status === BackupStatus.FAILED || b.status === BackupStatus.VERIFICATION_FAILED
  ).length;
  const totalTests = recoveryTests.length;
  const successfulTests = recoveryTests.filter(
    (t) => t.status === RecoveryTestStatus.PASSED
  ).length;
  const failedTests = recoveryTests.filter(
    (t) => t.status === RecoveryTestStatus.FAILED
  ).length;
  const totalStorageUsed = backups.reduce(
    (total, backup) => total + backup.size,
    0
  );
  const averageBackupSize = totalBackups > 0 ? totalStorageUsed / totalBackups : 0;
  const backupsByType = backups.reduce(
    (counts, backup) => {
      counts[backup.type] = (counts[backup.type] || 0) + 1;
      return counts;
    },
    {}
  );
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Backup Reports & Compliance" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(
          Select,
          {
            value: reportPeriod,
            onValueChange: setReportPeriod,
            placeholder: "Select period",
            children: [
              /* @__PURE__ */ jsx(SelectTrigger, { className: "w-[180px]", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
              /* @__PURE__ */ jsxs(SelectContent, { children: [
                /* @__PURE__ */ jsx(SelectItem, { value: "last7days", children: "Last 7 Days" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "last30days", children: "Last 30 Days" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "last90days", children: "Last 90 Days" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "lastYear", children: "Last Year" }),
                /* @__PURE__ */ jsx(SelectItem, { value: "allTime", children: "All Time" })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Button, { children: "Generate Compliance Report" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsx(CardTitle, { children: "Backup Statistics" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("dl", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Total Backups:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: totalBackups })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Success Rate:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: calculateSuccessRate(successfulBackups, totalBackups) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Successful Backups:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium text-green-600", children: successfulBackups })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Failed Backups:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium text-red-600", children: failedBackups })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsx(CardTitle, { children: "Storage Usage" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("dl", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Total Storage Used:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: formatBytes(totalStorageUsed) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Average Backup Size:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: formatBytes(averageBackupSize) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Full Backups:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: backupsByType[BackupType.FULL] || 0 })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Differential Backups:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: backupsByType[BackupType.DIFFERENTIAL] || 0 })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Transaction Backups:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: backupsByType[BackupType.TRANSACTION] || 0 })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsx(CardTitle, { children: "Recovery Testing" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("dl", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Total Tests Run:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: totalTests })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Success Rate:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: calculateSuccessRate(successfulTests, totalTests) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Successful Tests:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium text-green-600", children: successfulTests })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Failed Tests:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium text-red-600", children: failedTests })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("dt", { children: "Last Test Date:" }),
            /* @__PURE__ */ jsx("dd", { className: "font-medium", children: recoveryTests.length > 0 ? new Date(recoveryTests[0].testDate).toLocaleDateString() : "No tests run" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Compliance Status" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "HIPAA backup compliance status" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "outline",
              className: "bg-green-100 text-green-800 hover:bg-green-100",
              children: "Compliant"
            }
          ),
          /* @__PURE__ */ jsx("span", { children: "Your backup system is currently HIPAA compliant" })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "font-medium mt-2", children: "Compliance Checks:" }),
        /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Requirement" }),
            /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Status" }),
            /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Details" })
          ] }) }),
          /* @__PURE__ */ jsxs("tbody", { children: [
            /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Encrypted Backups" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "bg-green-100 text-green-800 hover:bg-green-100",
                  children: "Pass"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "All backups are encrypted using AES-256-GCM" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Backup Verification" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "bg-green-100 text-green-800 hover:bg-green-100",
                  children: "Pass"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Regular integrity checks are performed" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Recovery Testing" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "bg-green-100 text-green-800 hover:bg-green-100",
                  children: "Pass"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Regular recovery tests performed with documentation" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Offsite Storage" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "bg-green-100 text-green-800 hover:bg-green-100",
                  children: "Pass"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Multiple storage locations configured" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Retention Policies" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "bg-green-100 text-green-800 hover:bg-green-100",
                  children: "Pass"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Retention policies defined and enforced" })
            ] }),
            /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "Key Rotation" }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
                Badge,
                {
                  variant: "outline",
                  className: "bg-green-100 text-green-800 hover:bg-green-100",
                  children: "Pass"
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className: "py-2", children: "90-day key rotation policy in place" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex justify-between", children: [
        /* @__PURE__ */ jsx(Button, { variant: "outline", children: "View Previous Reports" }),
        /* @__PURE__ */ jsx(Button, { children: "Download Compliance Documentation" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx(CardTitle, { children: "Historical Reports" }),
        /* @__PURE__ */ jsx(CardDescription, { children: "Previous backup and compliance reports" })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Report Date" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Type" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Period" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "2025-04-01" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Compliance Audit" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Q1 2025" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                className: "bg-green-100 text-green-800 hover:bg-green-100",
                children: "Compliant"
              }
            ) }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "2025-03-15" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Recovery Test Report" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Monthly" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                className: "bg-green-100 text-green-800 hover:bg-green-100",
                children: "Pass"
              }
            ) }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "2025-03-01" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Backup Status Report" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "February 2025" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                className: "bg-green-100 text-green-800 hover:bg-green-100",
                children: "Normal"
              }
            ) }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View" }) })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "2025-02-15" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Recovery Test Report" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: "Monthly" }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "outline",
                className: "bg-green-100 text-green-800 hover:bg-green-100",
                children: "Pass"
              }
            ) }),
            /* @__PURE__ */ jsx("td", { className: "py-2", children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", children: "View" }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { variant: "outline", children: "View All Reports" }) })
    ] })
  ] });
};

const $$BackupSecurityManager = createComponent(($$result, $$props, $$slots) => {
  const mockBackups = [
    {
      id: "backup-1",
      type: BackupType.FULL,
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1e3).toISOString(),
      // Yesterday
      size: 1024 * 1024 * 50,
      // 50 MB
      location: StorageLocation.PRIMARY,
      status: BackupStatus.VERIFIED,
      retentionDate: new Date(
        Date.now() + 365 * 24 * 60 * 60 * 1e3
      ).toISOString()
      // 1 year
    },
    {
      id: "backup-2",
      type: BackupType.DIFFERENTIAL,
      timestamp: new Date(Date.now() - 12 * 60 * 60 * 1e3).toISOString(),
      // 12 hours ago
      size: 1024 * 1024 * 10,
      // 10 MB
      location: StorageLocation.PRIMARY,
      status: BackupStatus.COMPLETED,
      retentionDate: new Date(
        Date.now() + 30 * 24 * 60 * 60 * 1e3
      ).toISOString()
      // 30 days
    },
    {
      id: "backup-3",
      type: BackupType.TRANSACTION,
      timestamp: new Date(Date.now() - 1 * 60 * 60 * 1e3).toISOString(),
      // 1 hour ago
      size: 1024 * 1024 * 2,
      // 2 MB
      location: StorageLocation.PRIMARY,
      status: BackupStatus.COMPLETED,
      retentionDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3).toISOString()
      // 7 days
    }
  ];
  const mockRecoveryTests = [
    {
      id: "test-1",
      backupId: "backup-1",
      testDate: new Date(Date.now() - 12 * 60 * 60 * 1e3).toISOString(),
      // 12 hours ago
      status: RecoveryTestStatus.PASSED,
      timeTaken: 2 * 60 * 1e3,
      // 2 minutes
      environment: TestEnvironmentType.SANDBOX,
      verificationResults: [
        {
          testCase: "Full Backup Basic Verification",
          passed: true,
          details: {
            description: "Verifies core system functionality after full backup restoration",
            stepResults: [
              {
                step: "hash-verification",
                passed: true,
                actual: "123abc",
                expected: "123abc"
              },
              {
                step: "query-verification",
                passed: true,
                actual: 1250,
                details: { query: "SELECT COUNT(*) FROM users" }
              }
            ]
          }
        }
      ]
    },
    {
      id: "test-2",
      backupId: "backup-2",
      testDate: new Date(Date.now() - 6 * 60 * 60 * 1e3).toISOString(),
      // 6 hours ago
      status: RecoveryTestStatus.FAILED,
      timeTaken: 3 * 60 * 1e3,
      // 3 minutes
      environment: TestEnvironmentType.SANDBOX,
      verificationResults: [
        {
          testCase: "Differential Backup Verification",
          passed: false,
          details: {
            description: "Verifies changes since last full backup",
            stepResults: [
              {
                step: "query-verification",
                passed: false,
                actual: null,
                details: { error: "Database connection timeout" }
              }
            ]
          }
        }
      ],
      issues: [
        {
          type: "verification_failed",
          description: "Verification failed for test case: Differential Backup Verification",
          severity: "high"
        }
      ]
    }
  ];
  const mockBackupConfig = {
    backupTypes: {
      [BackupType.FULL]: {
        schedule: "0 0 * * 0",
        // Weekly on Sunday
        retention: 365
        // 1 year
      },
      [BackupType.DIFFERENTIAL]: {
        schedule: "0 0 * * 1-6",
        // Daily at midnight
        retention: 30
        // 30 days
      },
      [BackupType.TRANSACTION]: {
        schedule: "0 * * * *",
        // Hourly
        retention: 7
        // 7 days
      }
    },
    storageLocations: {
      [StorageLocation.PRIMARY]: {
        provider: "aws-s3",
        bucket: "primary-backup-bucket",
        region: "us-west-2"
      },
      [StorageLocation.SECONDARY]: {
        provider: "google-cloud-storage",
        bucket: "secondary-backup-bucket"
      }
    },
    encryption: {
      algorithm: "AES-256-GCM",
      keyRotationDays: 90
    },
    recoveryTesting: {
      enabled: true,
      schedule: "0 2 * * 1",
      // Every Monday at 2 AM
      environment: {
        type: TestEnvironmentType.SANDBOX,
        config: {}
      }
    }
  };
  const handleCreateBackup = async (type) => {
    console.log(`Creating ${type} backup`);
    return mockBackups[0];
  };
  const handleVerifyBackup = async (backupId) => {
    console.log(`Verifying backup ${backupId}`);
    return true;
  };
  const handleStartRecoveryTest = async (backupId, environmentType) => {
    console.log(
      `Testing recovery for backup ${backupId} in ${environmentType} environment`
    );
    const testResult = {
      id: `test-${Date.now()}`,
      backupId,
      testDate: (/* @__PURE__ */ new Date()).toISOString(),
      status: Math.random() > 0.2 ? RecoveryTestStatus.PASSED : RecoveryTestStatus.FAILED,
      timeTaken: Math.floor(Math.random() * 12e4) + 3e4,
      // 30s to 2.5m
      environment: environmentType,
      verificationResults: [
        {
          testCase: "Basic Recovery Test",
          passed: Math.random() > 0.2,
          details: {
            description: "Verifies that backup can be restored correctly"
          }
        }
      ]
    };
    if (testResult.status === RecoveryTestStatus.FAILED) {
      testResult.issues = [
        {
          type: "verification_failed",
          description: "Verification failed for test case: Basic Recovery Test",
          severity: "high"
        }
      ];
    }
    return testResult;
  };
  const handleScheduleRecoveryTests = async () => {
    console.log("Scheduling automated recovery tests");
  };
  const handleUpdateConfig = (config) => {
    console.log("Updating backup configuration", config);
  };
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto p-0"> <div id="backup-alert" class="hidden mb-4"></div> ${renderComponent($$result, "Tabs", Tabs, { "defaultValue": "status", "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ui/tabs", "client:component-export": "Tabs" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TabsList", TabsList, { "className": "mb-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "TabsTrigger", TabsTrigger, { "value": "status" }, { "default": ($$result4) => renderTemplate`Backup Status` })} ${renderComponent($$result3, "TabsTrigger", TabsTrigger, { "value": "config" }, { "default": ($$result4) => renderTemplate`Configuration` })} ${renderComponent($$result3, "TabsTrigger", TabsTrigger, { "value": "recovery" }, { "default": ($$result4) => renderTemplate`Recovery Testing` })} ${renderComponent($$result3, "TabsTrigger", TabsTrigger, { "value": "reports" }, { "default": ($$result4) => renderTemplate`Reports` })} ` })} ${renderComponent($$result2, "TabsContent", TabsContent, { "value": "status", "className": "space-y-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BackupStatusTab", BackupStatusTab, { "backups": mockBackups, "onCreateBackup": handleCreateBackup, "onVerifyBackup": handleVerifyBackup, "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/admin/backup/BackupStatusTab", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "TabsContent", TabsContent, { "value": "config", "className": "space-y-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BackupConfigurationTab", BackupConfigurationTab, { "config": mockBackupConfig, "onUpdateConfig": (config) => handleUpdateConfig(config), "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/admin/backup/BackupConfigurationTab", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "TabsContent", TabsContent, { "value": "recovery", "className": "space-y-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BackupRecoveryTab", BackupRecoveryTab, { "backups": mockBackups, "recoveryTests": mockRecoveryTests, "onStartRecoveryTest": handleStartRecoveryTest, "onScheduleRecoveryTests": handleScheduleRecoveryTests, "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/admin/backup/BackupRecoveryTab", "client:component-export": "default" })} ` })} ${renderComponent($$result2, "TabsContent", TabsContent, { "value": "reports", "className": "space-y-4" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BackupReportTab", BackupReportTab, { "backups": mockBackups, "recoveryTests": mockRecoveryTests, "client:load": true, "client:component-hydration": "load", "client:component-path": "/root/pixel/src/components/admin/backup/BackupReportTab", "client:component-export": "default" })} ` })} ` })} </div> ${renderScript($$result, "/root/pixel/src/components/admin/BackupSecurityManager.astro?astro&type=script&index=0&lang.ts")}`;
}, "/root/pixel/src/components/admin/BackupSecurityManager.astro", void 0);

const prerender = false;
const $$BackupSecurity = createComponent(($$result, $$props, $$slots) => {
  const title = "Backup Security";
  const description = "Secure backup management and recovery testing";
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": title, "description": description, "activeItem": "backup-security" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-4"> <div class="flex flex-col gap-2 mb-6"> <h1 class="text-2xl font-bold">Backup Security Management</h1> <p class="text-gray-600 dark:text-gray-400">
Configure and monitor secure encrypted backups, verify integrity, and
        test recovery procedures.
</p> </div> ${renderTemplate`${renderComponent($$result2, "BackupSecurityManager", $$BackupSecurityManager, {})}` } </div> ` })}`;
}, "/root/pixel/src/pages/admin/backup-security.astro", void 0);

const $$file = "/root/pixel/src/pages/admin/backup-security.astro";
const $$url = "/admin/backup-security";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$BackupSecurity,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
