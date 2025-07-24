;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="a74ff6dd-4a52-4b04-886d-8bac1f28bfe9",e._sentryDebugIdIdentifier="sentry-dbid-a74ff6dd-4a52-4b04-886d-8bac1f28bfe9")}catch(e){}}();/* empty css                                             */
/* empty css                                    */
import '../../chunks/sentry.server.config_gtrRxMPl.mjs';
import { c as createComponent, r as renderComponent, a as renderTemplate } from '../../chunks/astro/server_t-wqd6mp.mjs';
import { $ as $$DashboardLayout } from '../../chunks/DashboardLayout_CuwLqWXq.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useEffect, useCallback, useId } from 'react';
import { b as buttonVariants, B as Button } from '../../chunks/button_QWh7Abi4.mjs';
import { e as Table, T as TableHeader, a as TableRow, b as TableHead, c as TableBody, d as TableCell } from '../../chunks/table_Cxoal68L.mjs';
import { X, Trash2, PlusCircle } from 'lucide-react';
import { c as cn } from '../../chunks/utils_C7j64O8V.mjs';
import { I as Input } from '../../chunks/input_DnMLFOfd.mjs';
import { T as Textarea } from '../../chunks/textarea_M3mWTFlw.mjs';
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from '../../chunks/select_BdS8I9Y_.mjs';
import { toast } from 'sonner';
export { renderers } from '../../renderers.mjs';

const DialogContext = React__default.createContext({
  open: false,
  onOpenChange: () => void 0
});
const Dialog = ({ open = false, onOpenChange, children }) => {
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const handleOpenChange = useCallback(
    (newOpen) => {
      setIsOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange]
  );
  return /* @__PURE__ */ jsx(DialogContext.Provider, { value: { open: isOpen, onOpenChange: handleOpenChange }, children });
};
const DialogTrigger = React__default.forwardRef(
  ({ children, ...props }, ref) => {
    const { onOpenChange } = React__default.useContext(DialogContext);
    return /* @__PURE__ */ jsx("button", { ref, onClick: () => onOpenChange(true), ...props, children });
  }
);
DialogTrigger.displayName = "DialogTrigger";
const DialogPortal = ({ children }) => {
  const { open } = React__default.useContext(DialogContext);
  if (!open) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50", children });
};
const DialogOverlay = React__default.forwardRef(
  ({ className, ...props }, ref) => {
    const { onOpenChange } = React__default.useContext(DialogContext);
    const handleKeyDown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpenChange(false);
      }
    };
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className: cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0 border-0 p-0",
          className
        ),
        onClick: () => onOpenChange(false),
        onKeyDown: handleKeyDown,
        "aria-label": "Close dialog",
        ...props
      }
    );
  }
);
DialogOverlay.displayName = "DialogOverlay";
const DialogContent = React__default.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { open, onOpenChange } = React__default.useContext(DialogContext);
    if (!open) {
      return null;
    }
    return /* @__PURE__ */ jsxs(DialogPortal, { children: [
      /* @__PURE__ */ jsx(DialogOverlay, {}),
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg",
            className
          ),
          onClick: (e) => e.stopPropagation(),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
            }
          },
          role: "dialog",
          "aria-modal": "true",
          tabIndex: -1,
          ...props,
          children: [
            children,
            /* @__PURE__ */ jsxs(
              "button",
              {
                className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
                onClick: () => onOpenChange(false),
                "aria-label": "Close dialog",
                children: [
                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
                ]
              }
            )
          ]
        }
      )
    ] });
  }
);
DialogContent.displayName = "DialogContent";
const DialogHeader = React__default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex flex-col space-y-1.5 text-center sm:text-left",
        className
      ),
      ...props
    }
  )
);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = React__default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      ),
      ...props
    }
  )
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = React__default.forwardRef(
  ({ className, children, ...props }, ref) => {
    if (!children) {
      return null;
    }
    return /* @__PURE__ */ jsx(
      "h2",
      {
        ref,
        className: cn(
          "text-lg font-semibold leading-none tracking-tight",
          className
        ),
        ...props,
        children
      }
    );
  }
);
DialogTitle.displayName = "DialogTitle";
const DialogDescription = React__default.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  )
);
DialogDescription.displayName = "DialogDescription";

const AlertDialogContext = React.createContext({ open: false, onOpenChange: () => {
} });
function AlertDialog({ open = false, onOpenChange, children }) {
  const [isOpen, setIsOpen] = React.useState(open);
  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);
  const handleOpenChange = React.useCallback((newOpen) => {
    setIsOpen(newOpen);
    onOpenChange?.(newOpen);
  }, [onOpenChange]);
  return /* @__PURE__ */ jsx(AlertDialogContext.Provider, { value: { open: isOpen, onOpenChange: handleOpenChange }, children });
}
function AlertDialogTrigger({ className, children, onClick, ...props }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);
  const handleClick = () => {
    onClick?.();
    onOpenChange(true);
  };
  return /* @__PURE__ */ jsx("button", { className, onClick: handleClick, ...props, children });
}
function AlertDialogPortal({ children }) {
  const { open } = React.useContext(AlertDialogContext);
  if (!open) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50", children });
}
function AlertDialogOverlay({ className, ...props }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      className: cn(
        "fixed inset-0 z-50 bg-black/50 animate-in fade-in-0",
        className
      ),
      onClick: () => onOpenChange(false),
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === "Space") {
          e.preventDefault();
          onOpenChange(false);
        }
      },
      ...props
    }
  );
}
function AlertDialogContent({ className, children, ...props }) {
  const { open } = React.useContext(AlertDialogContext);
  if (!open) {
    return null;
  }
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx(
      "dialog",
      {
        className: cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%]",
          className
        ),
        onClick: (e) => e.stopPropagation(),
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === "Space") {
            e.preventDefault();
            e.stopPropagation();
          }
        },
        "aria-modal": "true",
        "aria-labelledby": "alert-dialog-title",
        "aria-describedby": "alert-dialog-description",
        open: true,
        ...props,
        children
      }
    )
  ] });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex flex-col space-y-2 text-center sm:text-left",
        className
      ),
      ...props
    }
  );
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({ className, children, ...props }) {
  if (!children) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "h2",
    {
      className: cn("text-lg font-semibold", className),
      ...props,
      children
    }
  );
}
function AlertDialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function AlertDialogAction({ className, onClick, ...props }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);
  const handleClick = (e) => {
    onClick?.(e);
    onOpenChange(false);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(buttonVariants(), className),
      onClick: handleClick,
      ...props
    }
  );
}
function AlertDialogCancel({ className, onClick, ...props }) {
  const { onOpenChange } = React.useContext(AlertDialogContext);
  const handleClick = (e) => {
    onClick?.(e);
    onOpenChange(false);
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(
        buttonVariants({ variant: "outline" }),
        "mt-2 sm:mt-0",
        className
      ),
      onClick: handleClick,
      ...props
    }
  );
}

const formatDate = (dateString) => {
  if (!dateString) {
    return "N/A";
  }
  try {
    if (typeof dateString === "string" && /^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return (/* @__PURE__ */ new Date(dateString + "T00:00:00")).toLocaleDateString();
    }
    return new Date(dateString).toLocaleDateString();
  } catch {
    return String(dateString);
  }
};
const initialNewPlanData = {
  title: "",
  clientId: "",
  userId: "",
  status: "Draft",
  startDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
  goals: []
};
const TreatmentPlanManager = () => {
  const [plans, setPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [newPlanData, setNewPlanData] = useState(
    JSON.parse(JSON.stringify(initialNewPlanData))
  );
  const [planToDelete, setPlanToDelete] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingPlanData, setEditingPlanData] = useState(null);
  const formId = useId();
  const fetchPlans = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/treatment-plans");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch treatment plans");
      }
      const data = await response.json();
      setPlans(data);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      setError(errorMessage);
      toast.error(`Failed to load plans: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchPlans();
  }, [fetchPlans]);
  const handleInputChange = (e, isEdit = false) => {
    const target = e.target;
    const { name, value } = target;
    if (isEdit && editingPlanData) {
      setEditingPlanData(
        (prev) => prev ? { ...prev, [name]: value } : null
      );
    } else {
      setNewPlanData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleSelectChange = (name, value, isEdit = false) => {
    if (isEdit && editingPlanData) {
      setEditingPlanData(
        (prev) => prev ? { ...prev, [name]: value } : null
      );
    } else {
      setNewPlanData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const addGoal = (isEdit = false) => {
    const newGoal = {
      description: "",
      status: "Not Started",
      objectives: [],
      tempId: `goal-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    };
    if (isEdit && editingPlanData) {
      setEditingPlanData((prev) => {
        if (!prev) {
          return null;
        }
        const currentGoals = prev.goals || [];
        return { ...prev, goals: [...currentGoals, newGoal] };
      });
    } else {
      setNewPlanData((prev) => ({
        ...prev,
        goals: [...prev.goals, newGoal]
      }));
    }
  };
  const handleGoalChange = (index, field, value, isEdit = false) => {
    if (isEdit && editingPlanData) {
      const updatedGoals = [...editingPlanData.goals || []];
      if (updatedGoals[index]) {
        updatedGoals[index][field] = value;
        setEditingPlanData(
          (prev) => prev ? { ...prev, goals: updatedGoals } : null
        );
      }
    } else {
      const updatedGoals = [...newPlanData.goals];
      if (updatedGoals[index]) {
        updatedGoals[index][field] = value;
        setNewPlanData((prev) => ({
          ...prev,
          goals: updatedGoals
        }));
      }
    }
  };
  const removeGoal = (index, isEdit = false) => {
    if (isEdit && editingPlanData) {
      const updatedGoals = [...editingPlanData.goals || []];
      updatedGoals.splice(index, 1);
      setEditingPlanData(
        (prev) => prev ? { ...prev, goals: updatedGoals } : null
      );
    } else {
      const updatedGoals = [...newPlanData.goals];
      updatedGoals.splice(index, 1);
      setNewPlanData((prev) => ({
        ...prev,
        goals: updatedGoals
      }));
    }
  };
  const addObjective = (goalIndex, isEdit = false) => {
    const newObjective = {
      description: "",
      status: "Not Started",
      tempId: `obj-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
    };
    if (isEdit && editingPlanData) {
      const updatedGoals = JSON.parse(
        JSON.stringify(editingPlanData.goals || [])
      );
      if (updatedGoals[goalIndex]) {
        updatedGoals[goalIndex].objectives = [
          ...updatedGoals[goalIndex].objectives || [],
          newObjective
        ];
        setEditingPlanData(
          (prev) => prev ? { ...prev, goals: updatedGoals } : null
        );
      }
    } else {
      const updatedGoals = JSON.parse(
        JSON.stringify(newPlanData.goals)
      );
      if (updatedGoals[goalIndex]) {
        updatedGoals[goalIndex].objectives = [
          ...updatedGoals[goalIndex].objectives,
          newObjective
        ];
        setNewPlanData((prev) => ({
          ...prev,
          goals: updatedGoals
        }));
      }
    }
  };
  const handleObjectiveChange = (goalIndex, objIndex, field, value, isEdit = false) => {
    if (isEdit && editingPlanData) {
      const updatedGoals = JSON.parse(
        JSON.stringify(editingPlanData.goals || [])
      );
      if (updatedGoals[goalIndex] && updatedGoals[goalIndex].objectives[objIndex]) {
        updatedGoals[goalIndex].objectives[objIndex][field] = value;
        setEditingPlanData(
          (prev) => prev ? { ...prev, goals: updatedGoals } : null
        );
      }
    } else {
      const updatedNewGoals = JSON.parse(
        JSON.stringify(newPlanData.goals)
      );
      if (updatedNewGoals[goalIndex] && updatedNewGoals[goalIndex].objectives[objIndex]) {
        updatedNewGoals[goalIndex].objectives[objIndex][field] = value;
        setNewPlanData((prev) => ({
          ...prev,
          goals: updatedNewGoals
        }));
      }
    }
  };
  const removeObjective = (goalIndex, objIndex, isEdit = false) => {
    if (isEdit && editingPlanData) {
      const updatedGoals = JSON.parse(
        JSON.stringify(editingPlanData.goals || [])
      );
      if (updatedGoals[goalIndex] && updatedGoals[goalIndex].objectives) {
        updatedGoals[goalIndex].objectives.splice(objIndex, 1);
        setEditingPlanData(
          (prev) => prev ? { ...prev, goals: updatedGoals } : null
        );
      }
    } else {
      const updatedNewGoals = JSON.parse(
        JSON.stringify(newPlanData.goals)
      );
      if (updatedNewGoals[goalIndex] && updatedNewGoals[goalIndex].objectives) {
        updatedNewGoals[goalIndex].objectives.splice(objIndex, 1);
        setNewPlanData((prev) => ({
          ...prev,
          goals: updatedNewGoals
        }));
      }
    }
  };
  const stripTempIds = (goals) => {
    return goals.map((g) => {
      const { objectives, ...goalDetails } = g;
      return {
        ...goalDetails,
        objectives: (objectives || []).map(
          (obj) => {
            const { ...objDetails } = obj;
            return objDetails;
          }
        )
      };
    });
  };
  const handleCreatePlan = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const payload = {
      ...newPlanData,
      goals: stripTempIds(newPlanData.goals || [])
      // Ensure goals is an array
    };
    try {
      const response = await fetch("/api/treatment-plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to create treatment plan");
      }
      await fetchPlans();
      setIsCreateModalOpen(false);
      setNewPlanData(JSON.parse(JSON.stringify(initialNewPlanData)));
      toast.success("Treatment plan created successfully!");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(`Failed to create plan: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeletePlan = async () => {
    if (!planToDelete) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`/api/treatment-plans/${planToDelete.id}`, {
        method: "DELETE"
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to delete treatment plan");
      }
      await fetchPlans();
      setPlanToDelete(null);
      toast.success("Treatment plan deleted successfully!");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(`Failed to delete plan: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  const handleUpdatePlan = async (e) => {
    e.preventDefault();
    if (!editingPlanData || !editingPlanData.id) {
      return;
    }
    setIsLoading(true);
    const payload = {
      ...editingPlanData,
      goals: stripTempIds(editingPlanData.goals || [])
      // Ensure goals is an array
    };
    try {
      const { id, ...updateData } = payload;
      if (updateData.startDate && typeof updateData.startDate === "string") {
        updateData.startDate = (/* @__PURE__ */ new Date(updateData.startDate + "T00:00:00")).toISOString().split("T")[0];
      }
      const response = await fetch(`/api/treatment-plans/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update treatment plan");
      }
      await fetchPlans();
      setIsEditModalOpen(false);
      setEditingPlanData(null);
      toast.success("Treatment plan updated successfully!");
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      toast.error(`Failed to update plan: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };
  const openEditModal = (plan) => {
    setEditingPlanData({
      ...plan,
      id: plan.id,
      // ensure id is explicitly passed
      startDate: plan.startDate ? new Date(plan.startDate).toISOString().split("T")[0] : "",
      goals: plan.goals ? JSON.parse(
        JSON.stringify(
          plan.goals.map((g) => ({ ...g, objectives: g.objectives || [] }))
        )
      ) : []
      // Deep copy goals, ensure objectives is array
    });
    setIsEditModalOpen(true);
  };
  const openCreateModal = () => {
    setNewPlanData(JSON.parse(JSON.stringify(initialNewPlanData)));
    setIsCreateModalOpen(true);
  };
  if (isLoading && plans.length === 0) {
    return /* @__PURE__ */ jsx("p", { children: "Loading treatment plans..." });
  }
  if (error) {
    return /* @__PURE__ */ jsxs("p", { className: "text-red-500", children: [
      "Error: ",
      error
    ] });
  }
  const renderObjectivesSection = (goalIndex, objectives, isEdit = false) => /* @__PURE__ */ jsxs("div", { className: "mt-3 ml-4 pl-4 border-l border-slate-300 dark:border-slate-700", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-md font-medium text-slate-700 dark:text-slate-300", children: "Objectives" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => addObjective(goalIndex, isEdit),
          className: "py-1 px-2 h-auto text-xs",
          children: [
            /* @__PURE__ */ jsx(PlusCircle, { className: "h-3 w-3 mr-1" }),
            " Add Objective"
          ]
        }
      )
    ] }),
    objectives.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "No objectives added for this goal." }),
    objectives.map((obj, objIndex) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "p-2 mb-2 border rounded-md bg-slate-100 dark:bg-slate-700/50",
        children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-2 items-center", children: [
          /* @__PURE__ */ jsx(
            Textarea,
            {
              placeholder: `Objective ${objIndex + 1} description`,
              value: obj.description,
              onChange: (e) => handleObjectiveChange(
                goalIndex,
                objIndex,
                "description",
                e.target.value,
                isEdit
              ),
              className: "md:col-span-4 min-h-[40px] text-sm",
              required: true
            }
          ),
          /* @__PURE__ */ jsxs(
            Select,
            {
              value: obj.status,
              onValueChange: (value) => handleObjectiveChange(
                goalIndex,
                objIndex,
                "status",
                value,
                isEdit
              ),
              children: [
                /* @__PURE__ */ jsx(SelectTrigger, { className: "md:col-span-1 h-9 text-sm", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                /* @__PURE__ */ jsxs(SelectContent, { children: [
                  /* @__PURE__ */ jsx(SelectItem, { value: "Not Started", children: "Not Started" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "In Progress", children: "In Progress" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Completed", children: "Completed" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "On Hold", children: "On Hold" }),
                  /* @__PURE__ */ jsx(SelectItem, { value: "Cancelled", children: "Cancelled" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "icon",
              onClick: () => removeObjective(goalIndex, objIndex, isEdit),
              className: "text-red-500 hover:text-red-700 md:col-span-1 place-self-center md:place-self-auto h-9 w-9",
              children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] })
      },
      obj.tempId || obj.id || `obj-${objIndex}`
    ))
  ] });
  const renderGoalsSection = (goals, isEdit = false) => /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium", children: "Goals" }),
      /* @__PURE__ */ jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => addGoal(isEdit),
          children: [
            /* @__PURE__ */ jsx(PlusCircle, { className: "h-4 w-4 mr-2" }),
            " Add Goal"
          ]
        }
      )
    ] }),
    goals.length === 0 && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "No goals added yet." }),
    goals.map((goal, index) => /* @__PURE__ */ jsxs(
      "div",
      {
        className: "p-3 mb-3 border rounded-md bg-background dark:bg-slate-800 shadow-sm",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-2 items-center", children: [
            /* @__PURE__ */ jsx(
              Textarea,
              {
                placeholder: "Goal description",
                name: `goal-description-${index}`,
                value: goal.description,
                onChange: (e) => handleGoalChange(index, "description", e.target.value, isEdit),
                className: "md:col-span-4 min-h-[60px]",
                required: true
              }
            ),
            /* @__PURE__ */ jsxs(
              Select,
              {
                value: goal.status,
                onValueChange: (value) => handleGoalChange(index, "status", value, isEdit),
                children: [
                  /* @__PURE__ */ jsx(SelectTrigger, { className: "md:col-span-1", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                  /* @__PURE__ */ jsxs(SelectContent, { children: [
                    /* @__PURE__ */ jsx(SelectItem, { value: "Not Started", children: "Not Started" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "In Progress", children: "In Progress" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "Completed", children: "Completed" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "On Hold", children: "On Hold" }),
                    /* @__PURE__ */ jsx(SelectItem, { value: "Cancelled", children: "Cancelled" })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "ghost",
                size: "icon",
                onClick: () => removeGoal(index, isEdit),
                className: "text-red-500 hover:text-red-700 md:col-span-1 place-self-center md:place-self-auto",
                children: /* @__PURE__ */ jsx(Trash2, { className: "h-5 w-5" })
              }
            )
          ] }),
          renderObjectivesSection(index, goal.objectives || [], isEdit)
        ]
      },
      goal.tempId || goal.id || `goal-${index}`
    ))
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "p-4 md:p-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold", children: "Treatment Plan Management" }),
      /* @__PURE__ */ jsx(Button, { onClick: openCreateModal, children: "Create New Plan" })
    ] }),
    plans.length === 0 && !isLoading && /* @__PURE__ */ jsx("p", { children: "No treatment plans found. Get started by creating a new one!" }),
    plans.length > 0 && /* @__PURE__ */ jsxs(Table, { children: [
      /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableHead, { children: "Title" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Client ID" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Status" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Start Date" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Last Updated" }),
        /* @__PURE__ */ jsx(TableHead, { children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsx(TableBody, { children: plans.map((plan) => /* @__PURE__ */ jsxs(TableRow, { children: [
        /* @__PURE__ */ jsx(TableCell, { children: plan.title }),
        /* @__PURE__ */ jsx(TableCell, { children: plan.clientId }),
        /* @__PURE__ */ jsx(TableCell, { children: plan.status }),
        /* @__PURE__ */ jsx(TableCell, { children: formatDate(plan.startDate) }),
        /* @__PURE__ */ jsx(TableCell, { children: formatDate(plan.updatedAt) }),
        /* @__PURE__ */ jsxs(TableCell, { children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "mr-2", children: "View" }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "mr-2",
              onClick: () => openEditModal(plan),
              children: "Edit"
            }
          ),
          /* @__PURE__ */ jsx(AlertDialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "destructive",
              size: "sm",
              onClick: () => setPlanToDelete(plan),
              children: [
                /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 mr-1 md:mr-2" }),
                " Delete"
              ]
            }
          ) })
        ] })
      ] }, plan.id)) })
    ] }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        isOpen: isCreateModalOpen,
        onClose: () => setIsCreateModalOpen(false),
        title: "Create New Treatment Plan",
        showCloseButton: true,
        className: "sm:max-w-[700px] max-h-[90vh] overflow-y-auto",
        footer: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => setIsCreateModalOpen(false),
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              form: `create-plan-form-${formId}`,
              type: "submit",
              disabled: isLoading,
              children: isLoading ? "Saving..." : "Save Plan"
            }
          )
        ] }),
        children: /* @__PURE__ */ jsxs("form", { id: `create-plan-form-${formId}`, onSubmit: handleCreatePlan, children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Fill in the details below to create a new treatment plan." }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `title-${formId}`,
                  className: "text-right col-span-1",
                  children: "Title"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: `title-${formId}`,
                  name: "title",
                  value: newPlanData.title,
                  onChange: (e) => handleInputChange(e),
                  className: "col-span-3",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `clientId-${formId}`,
                  className: "text-right col-span-1",
                  children: "Client ID"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: `clientId-${formId}`,
                  name: "clientId",
                  value: newPlanData.clientId || "",
                  onChange: (e) => handleInputChange(e),
                  className: "col-span-3",
                  placeholder: "e.g., user_xyz123 or numerical ID",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `status-${formId}`,
                  className: "text-right col-span-1",
                  children: "Status"
                }
              ),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  value: newPlanData.status,
                  onValueChange: (value) => handleSelectChange("status", value),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { className: "col-span-3", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "Draft", children: "Draft" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Active", children: "Active" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Completed", children: "Completed" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "On Hold", children: "On Hold" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Cancelled", children: "Cancelled" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `startDate-${formId}`,
                  className: "text-right col-span-1",
                  children: "Start Date"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: `startDate-${formId}`,
                  name: "startDate",
                  type: "date",
                  value: newPlanData.startDate,
                  onChange: (e) => handleInputChange(e),
                  className: "col-span-3",
                  required: true
                }
              )
            ] }),
            renderGoalsSection(newPlanData.goals, false)
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      AlertDialog,
      {
        open: !!planToDelete,
        onOpenChange: (isOpen) => !isOpen && setPlanToDelete(null),
        children: /* @__PURE__ */ jsxs(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxs(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsx(AlertDialogTitle, { children: "Are you absolutely sure?" }),
            /* @__PURE__ */ jsxs(AlertDialogDescription, { children: [
              'This action cannot be undone. This will permanently delete the treatment plan titled "',
              /* @__PURE__ */ jsx("strong", { children: planToDelete?.title }),
              '" and all its associated goals and objectives.'
            ] })
          ] }),
          /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsx(
              AlertDialogCancel,
              {
                onClick: () => setPlanToDelete(null),
                disabled: isLoading,
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ jsx(
              AlertDialogAction,
              {
                onClick: handleDeletePlan,
                disabled: isLoading,
                className: "bg-destructive hover:bg-destructive/90",
                children: isLoading ? "Deleting..." : "Yes, delete plan"
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        isOpen: isEditModalOpen,
        onClose: () => {
          setIsEditModalOpen(false);
          setEditingPlanData(null);
        },
        title: "Edit Treatment Plan",
        showCloseButton: true,
        className: "sm:max-w-[700px] max-h-[90vh] overflow-y-auto",
        footer: /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              variant: "outline",
              onClick: () => {
                setIsEditModalOpen(false);
                setEditingPlanData(null);
              },
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              form: `edit-plan-form-${formId}`,
              type: "submit",
              disabled: isLoading,
              children: isLoading ? "Saving..." : "Save Changes"
            }
          )
        ] }),
        children: editingPlanData && /* @__PURE__ */ jsxs("form", { id: `edit-plan-form-${formId}`, onSubmit: handleUpdatePlan, children: [
          /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground mb-4", children: [
            'Update the details for "',
            editingPlanData.title,
            '".'
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `edit-title-${formId}`,
                  className: "text-right col-span-1",
                  children: "Title"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: `edit-title-${formId}`,
                  name: "title",
                  value: editingPlanData.title || "",
                  onChange: (e) => handleInputChange(e, true),
                  className: "col-span-3",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `edit-clientId-${formId}`,
                  className: "text-right col-span-1",
                  children: "Client ID"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: `edit-clientId-${formId}`,
                  name: "clientId",
                  value: editingPlanData.clientId || "",
                  onChange: (e) => handleInputChange(e, true),
                  className: "col-span-3",
                  placeholder: "e.g., user_xyz123 or numerical ID",
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `edit-status-${formId}`,
                  className: "text-right col-span-1",
                  children: "Status"
                }
              ),
              /* @__PURE__ */ jsxs(
                Select,
                {
                  value: editingPlanData.status,
                  onValueChange: (value) => handleSelectChange("status", value, true),
                  children: [
                    /* @__PURE__ */ jsx(SelectTrigger, { className: "col-span-3", children: /* @__PURE__ */ jsx(SelectValue, {}) }),
                    /* @__PURE__ */ jsxs(SelectContent, { children: [
                      /* @__PURE__ */ jsx(SelectItem, { value: "Draft", children: "Draft" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Active", children: "Active" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Completed", children: "Completed" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "On Hold", children: "On Hold" }),
                      /* @__PURE__ */ jsx(SelectItem, { value: "Cancelled", children: "Cancelled" })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 items-center gap-4", children: [
              /* @__PURE__ */ jsx(
                "label",
                {
                  htmlFor: `edit-startDate-${formId}`,
                  className: "text-right col-span-1",
                  children: "Start Date"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: `edit-startDate-${formId}`,
                  name: "startDate",
                  type: "date",
                  value: editingPlanData.startDate ? editingPlanData.startDate.toString().split("T")[0] : "",
                  onChange: (e) => handleInputChange(e, true),
                  className: "col-span-3",
                  required: true
                }
              )
            ] }),
            renderGoalsSection(editingPlanData.goals || [], true)
          ] })
        ] })
      }
    )
  ] });
};

const $$TreatmentPlans = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DashboardLayout", $$DashboardLayout, { "title": "Treatment Plans | Pixelated Empathy Health" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TreatmentPlanManager", TreatmentPlanManager, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/therapy/TreatmentPlanManager.tsx", "client:component-export": "default" })} ` })}`;
}, "/root/pixel/src/pages/dashboard/treatment-plans.astro", void 0);

const $$file = "/root/pixel/src/pages/dashboard/treatment-plans.astro";
const $$url = "/dashboard/treatment-plans";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TreatmentPlans,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
