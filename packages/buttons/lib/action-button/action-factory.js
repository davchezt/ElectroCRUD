var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/action-button/action-factory.tsx
var action_factory_exports = {};
__export(action_factory_exports, {
  ActionButtonType: () => ActionButtonType,
  ActionButtonsFactory: () => ActionButtonsFactory
});
module.exports = __toCommonJS(action_factory_exports);

// react-import.ts
var import_react = __toESM(require("react"));

// src/action-button/action-factory.tsx
var import_react11 = require("react");

// src/action-button/cancel-action-button.tsx
var import_react3 = require("@chakra-ui/react");
var import_react4 = require("react");
var import_md = require("react-icons/md");

// src/action-button/action-button.tsx
var import_underscore = require("underscore");

// src/ripple-button.tsx
var import_react2 = require("@chakra-ui/react");
var import_chroma_js = __toESM(require("chroma-js"));
var import_framer_motion = require("framer-motion");

// defaults.ts
var defaults = {
  size: "md",
  variant: "solid",
  bgColorScheme: "primary",
  gap: 2,
  color: "white",
  fontWeight: "medium",
  rounded: "lg",
  cursor: "pointer",
  py: 3,
  px: 4,
  shadow: "none",
  backgroundPosition: "center",
  minWidth: "fit-content",
  overflow: "hidden"
};

// src/ripple-button.tsx
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
__name(_extends, "_extends");
var pulse = (0, import_react2.keyframes)({
  "0%": {
    opacity: 0,
    transform: "scale(0)"
  },
  "33%": {
    opacity: 1,
    transform: "scale(5)"
  },
  "100%": {
    opacity: 0,
    transform: "scale(30)"
  }
});
var RippleButton = /* @__PURE__ */ __name(({ children, size = "md", bgColorScheme = "primary", bgColor = {
  step1: `${bgColorScheme}.600`,
  step2: `${bgColorScheme}.700`,
  step3: `${bgColorScheme}.800`
}, ...properties }) => {
  const [step1, step2, step3] = (0, import_react2.useToken)("colors", [
    // @ts-ignore
    bgColor.step1,
    // @ts-ignore
    bgColor.step2,
    // @ts-ignore
    bgColor.step3
  ]);
  return /* @__PURE__ */ import_react.default.createElement(import_react2.Button, _extends({}, defaults, {
    as: import_framer_motion.motion.button,
    size,
    style: {
      background: `linear-gradient(60deg, ${step1} 0%, ${(0, import_chroma_js.default)(step1).brighten(0.1).hex()} 100%)`
    },
    sx: {
      "&::before": {
        content: "' '",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(255,255,255,.4)",
        borderRadius: "50%",
        width: "10px",
        height: "10px",
        margin: "auto",
        opacity: 0
      }
    },
    whileHover: {
      background: [
        `linear-gradient(60deg, ${step2} 0%, ${(0, import_chroma_js.default)(step2).brighten(0.1).hex()} 100%)`,
        `linear-gradient(60deg, ${step2} 0%, ${(0, import_chroma_js.default)(step2).brighten(1).hex()} 100%)`,
        `linear-gradient(60deg, ${(0, import_chroma_js.default)(step2).brighten(1.3).hex()} 0%, ${step2} 100%)`,
        `linear-gradient(60deg, ${(0, import_chroma_js.default)(step2).brighten(0.1).hex()} 0%, ${step2} 100%)`
      ],
      transition: {
        duration: 3,
        type: "spring",
        repeat: Number.POSITIVE_INFINITY
      }
    },
    _active: {
      // @ts-ignore
      bgColor: `${step3}`,
      "&::before": {
        animation: `${pulse} 0.8s linear`
      }
    }
  }, properties), children);
}, "RippleButton");

// src/action-button/action-button.tsx
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
__name(_extends2, "_extends");
var ActionButton = /* @__PURE__ */ __name(({ children, ...properties }) => /* @__PURE__ */ import_react.default.createElement(RippleButton, _extends2({
  variant: "solid",
  size: "md",
  bgColorScheme: properties.colorScheme || "primary"
}, (0, import_underscore.omit)(properties, [
  "bgColor",
  "actionName"
])), children), "ActionButton");

// src/action-button/cancel-action-button.tsx
var buttonProperties = {
  bgColorScheme: "red",
  gap: 2,
  variant: "solid"
};
var ButtonContent = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_react3.Icon, {
  as: import_md.MdCancel,
  boxSize: 5
}), /* @__PURE__ */ import_react.default.createElement(import_react3.Text, null, "Cancel"));
var CancelActionButton = /* @__PURE__ */ __name((properties) => {
  const renderComponent = (0, import_react4.useCallback)((children) => ActionButton({
    ...properties,
    ...buttonProperties,
    children
  }), [
    properties
  ]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, renderComponent(ButtonContent));
}, "CancelActionButton");

// src/action-button/save-action-button.tsx
var import_react5 = require("@chakra-ui/react");
var import_react6 = require("react");
var import_md2 = require("react-icons/md");
var buttonProperties2 = {
  bgColorScheme: "primary",
  gap: 2,
  variant: "solid"
};
var ButtonContent2 = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_react5.Icon, {
  as: import_md2.MdSave,
  boxSize: 5
}), /* @__PURE__ */ import_react.default.createElement(import_react5.Text, null, "Save"));
var SaveActionButton = /* @__PURE__ */ __name((properties) => {
  const renderComponent = (0, import_react6.useCallback)((children) => ActionButton({
    ...properties,
    ...buttonProperties2,
    children
  }), [
    properties
  ]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, renderComponent(ButtonContent2));
}, "SaveActionButton");

// src/action-button/save-and-apply-filter-action-button.tsx
var import_react7 = require("@chakra-ui/react");
var import_react8 = require("react");
var import_md3 = require("react-icons/md");
var buttonProperties3 = {
  bgColorScheme: "primary",
  gap: 2,
  variant: "solid"
};
var ButtonContent3 = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_react7.Icon, {
  as: import_md3.MdSave,
  boxSize: 5
}), /* @__PURE__ */ import_react.default.createElement(import_react7.Text, null, "Save & Apply Filter"));
var SaveAndApplyFilterActionButton = /* @__PURE__ */ __name((properties) => {
  const renderComponent = (0, import_react8.useCallback)((children) => ActionButton({
    ...properties,
    ...buttonProperties3,
    children
  }), [
    properties
  ]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, renderComponent(ButtonContent3));
}, "SaveAndApplyFilterActionButton");

// src/action-button/apply-filter-action-button.tsx
var import_react9 = require("@chakra-ui/react");
var import_react10 = require("react");
var import_md4 = require("react-icons/md");
var buttonProperties4 = {
  bgColorScheme: "primary",
  gap: 2,
  variant: "solid"
};
var ButtonContent4 = /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement(import_react9.Icon, {
  as: import_md4.MdSave,
  boxSize: 5
}), /* @__PURE__ */ import_react.default.createElement(import_react9.Text, null, "Apply Filter"));
var ApplyFilterActionButton = /* @__PURE__ */ __name((properties) => {
  const renderComponent = (0, import_react10.useCallback)((children) => ActionButton({
    ...properties,
    ...buttonProperties4,
    children
  }), [
    properties
  ]);
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, renderComponent(ButtonContent4));
}, "ApplyFilterActionButton");

// src/action-button/action-factory.tsx
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
__name(_extends3, "_extends");
var ActionButtonType;
(function(ActionButtonType2) {
  ActionButtonType2["SAVE"] = "SaveActionButton";
  ActionButtonType2["CANCEL"] = "CancelActionButton";
  ActionButtonType2["APPLY_FILTER"] = "ApplyFilterActionButton";
  ActionButtonType2["SAVE_AND_APPLY_FILTER"] = "SaveAndApplyFilterActionButton";
})(ActionButtonType || (ActionButtonType = {}));
var actionButtonMapping = {
  [ActionButtonType.SAVE]: SaveActionButton,
  [ActionButtonType.CANCEL]: CancelActionButton,
  [ActionButtonType.APPLY_FILTER]: ApplyFilterActionButton,
  [ActionButtonType.SAVE_AND_APPLY_FILTER]: SaveAndApplyFilterActionButton
};
var ActionButtonsFactory = /* @__PURE__ */ __name(({ actionType, ...rest }) => {
  const TargetComponent = (0, import_react11.useMemo)(() => actionButtonMapping[actionType], [
    actionType
  ]);
  return /* @__PURE__ */ import_react.default.createElement(TargetComponent, _extends3({}, rest));
}, "ActionButtonsFactory");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ActionButtonType,
  ActionButtonsFactory
});
