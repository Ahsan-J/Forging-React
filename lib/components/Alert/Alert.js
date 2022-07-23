"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,i){void 0===i&&(i=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,i,a)}:function(e,t,r,i){e[i=void 0===i?r:i]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),__1=require(".."),aphrodite_1=require("../../helpers/aphrodite"),Alert_styles_1=__importDefault(require("./Alert.styles")),iconMaps={success:"check-circle",danger:"x-octagon",info:"info-circle",warning:"exclamation-triangle",dark:"info-circle",light:"info-circle",link:"info-circle",primary:"info-circle",secondary:"info-circle"},Alert=react_1.default.forwardRef(function(e,t){var r=e.className,r=void 0===r?"":r,i=e.type,a=void 0===i?"primary":i,i=e.autoDismissTimeout,i=(0,Alert_styles_1.default)({autoDismissTimeout:void 0===i?6e3:i}),n=(0,react_1.useMemo)(function(){return iconMaps[a||"primary"]},[a]);return react_1.default.createElement("div",{"data-test":"AlertWrapper",ref:t,id:e.id,style:e.style,onAnimationEnd:e.onDismiss,className:"alert ".concat(e.onDismiss?"alert-dismissible":""," alert-").concat(a||"primary"," fade show ").concat((0,aphrodite_1.css)(i.container)," ").concat(r||"").trim()},e.onDismiss?react_1.default.createElement("button",{type:"button",className:"close","data-dismiss":"alert",onClick:e.onDismiss},"×"):null,react_1.default.createElement(__1.Icon,{"data-test":"AlertIcon",name:n,height:40,width:40,className:(0,aphrodite_1.css)(i.iconStyle)}),react_1.default.createElement("div",{"data-test":"AlertInnerContainer",className:(0,aphrodite_1.css)(i.innerContainer)},react_1.default.createElement("h4",{"data-test":"AlertHeading",className:"alert-heading"},e.title),e.children))});exports.default=Alert;