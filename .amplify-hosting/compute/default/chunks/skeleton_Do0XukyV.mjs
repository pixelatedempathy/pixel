;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="dc426faa-3638-4aaf-97ff-19f2ddf5a7dd",e._sentryDebugIdIdentifier="sentry-dbid-dc426faa-3638-4aaf-97ff-19f2ddf5a7dd")}catch(e){}}();import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { c as cn } from './utils_Cq1Cukkb.mjs';
import './astro/server_jchCCyc7.mjs';

function Skeleton({
  width,
  height,
  count = 1,
  rounded = true,
  circle = false,
  animate = true,
  pulse = true,
  wave = false,
  className,
  ...props
}) {
  const baseClasses = "inline-block bg-gray-200 dark:bg-gray-700";
  const animationClasses = animate ? pulse ? "animate-pulse" : wave ? "animate-skeleton-wave" : "" : "";
  const shapeClasses = circle ? "rounded-full" : rounded ? "rounded" : "";
  const items = [];
  const style = {
    ...width !== void 0 && {
      width: typeof width === "number" ? `${width}px` : width
    },
    ...height !== void 0 && {
      height: typeof height === "number" ? `${height}px` : height
    }
  };
  for (let i = 0; i < count; i++) {
    items.push(
      /* @__PURE__ */ jsx(
        "span",
        {
          className: cn(baseClasses, animationClasses, shapeClasses, className),
          style,
          ...props
        },
        `skeleton-${i}`
      )
    );
    if (i < count - 1) {
      items.push(/* @__PURE__ */ jsx("br", {}, `br-${i}`));
    }
  }
  return /* @__PURE__ */ jsx(Fragment, { children: items });
}
function SkeletonAvatar({
  size = 40,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Skeleton,
    {
      width: size,
      height: size,
      circle: true,
      className: cn("inline-block", className),
      ...props
    }
  );
}
function SkeletonProfile({ className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-8", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex-shrink-0 flex flex-col items-center", children: [
        /* @__PURE__ */ jsx(SkeletonAvatar, { size: 96 }),
        /* @__PURE__ */ jsx(Skeleton, { className: "mt-4", height: 4, width: 20 })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex-grow space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx(Skeleton, { height: 4, width: 24 }),
            /* @__PURE__ */ jsx(Skeleton, { height: 6, width: "100%" })
          ] }, `profile-field-${i}`)),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1 md:col-span-2", children: [
            /* @__PURE__ */ jsx(Skeleton, { height: 4, width: 24 }),
            /* @__PURE__ */ jsx(Skeleton, { height: 20, width: "100%" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Skeleton, { height: 10, width: 32 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "pt-6 mt-6 space-y-4", children: [
      /* @__PURE__ */ jsx(Skeleton, { height: 6, width: 40, className: "mx-auto" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsx(Skeleton, { height: 4, width: 24 }),
        /* @__PURE__ */ jsx(Skeleton, { height: 6, width: "100%" })
      ] }, `profile-detail-${i}`)) })
    ] })
  ] });
}

export { Skeleton as S, SkeletonProfile as a };
