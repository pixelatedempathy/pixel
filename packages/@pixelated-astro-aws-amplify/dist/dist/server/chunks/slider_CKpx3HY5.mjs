;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="db3272fd-0ba4-449d-a601-2bf8dfe11e6c",e._sentryDebugIdIdentifier="sentry-dbid-db3272fd-0ba4-449d-a601-2bf8dfe11e6c")}catch(e){}}();import { jsx } from 'react/jsx-runtime';
import React__default from 'react';
import './astro/server_DzSu7Vuv.mjs';

const Slider = ({
  value,
  defaultValue = [0],
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = "horizontal",
  onValueChange,
  className = ""
}) => {
  const [internalValue, setInternalValue] = React__default.useState(value || defaultValue);
  const currentValue = value || internalValue;
  const sliderValue = currentValue[0] || 0;
  const handleChange = (e) => {
    const newValue = [Number(e.target.value)];
    if (!value) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };
  const isVertical = orientation === "vertical";
  return /* @__PURE__ */ jsx("div", { className: `relative ${isVertical ? "h-32 w-6" : "w-full h-6"} ${className}`, children: /* @__PURE__ */ jsx(
    "input",
    {
      type: "range",
      min,
      max,
      step,
      value: sliderValue,
      disabled,
      onChange: handleChange,
      className: `
          appearance-none bg-transparent cursor-pointer slider-input
          ${isVertical ? "slider-vertical" : "w-full h-2"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `,
      style: {
        background: `linear-gradient(to ${isVertical ? "top" : "right"}, 
            #3b82f6 0%, #3b82f6 ${(sliderValue - min) / (max - min) * 100}%, 
            #e5e7eb ${(sliderValue - min) / (max - min) * 100}%, #e5e7eb 100%)`
      }
    }
  ) });
};

export { Slider as S };
//# sourceMappingURL=slider_CKpx3HY5.mjs.map
