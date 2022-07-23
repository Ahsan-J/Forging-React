"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(t,e,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(e,a);n&&("get"in n?e.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return e[a]}}),Object.defineProperty(t,r,n)}:function(t,e,a,r){t[r=void 0===r?a:r]=e[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),__importStar=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)"default"!==a&&Object.prototype.hasOwnProperty.call(t,a)&&__createBinding(e,t,a);return __setModuleDefault(e,t),e},__read=this&&this.__read||function(t,e){var a="function"==typeof Symbol&&t[Symbol.iterator];if(!a)return t;var r,n,i=a.call(t),o=[];try{for(;(void 0===e||0<e--)&&!(r=i.next()).done;)o.push(r.value)}catch(t){n={error:t}}finally{try{r&&!r.done&&(a=i.return)&&a.call(i)}finally{if(n)throw n.error}}return o},__importDefault=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}},_this=this,react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),NavBarList_1=__importDefault(require("../NavBarList")),utility_1=require("../../helpers/utility"),Tab_styles_1=__importDefault(require("./Tab.styles")),aphrodite_1=require("../../helpers/aphrodite"),Tab=react_1.default.forwardRef(function(r,t){var e=(0,Tab_styles_1.default)(r),a=__read((0,react_1.useState)(Object.keys(r.data)[0]),2),n=a[0],i=a[1],a=(0,react_1.useMemo)(function(){return Object.keys(r.data).map(function(t){return{title:t,onClick:function(t,e){e.stopPropagation(),i(t)}.bind(_this,t),id:(0,utility_1.toKebabCase)(t||"")}})},[r.data]),o=(0,react_1.useMemo)(function(){return Object.keys(r.data).map(function(t,e){var a=r.data[t];return"function"==typeof a&&(a=react_1.default.createElement(a,{"data-test":"TabComponent"})),react_1.default.createElement("div",{"data-test":"TabComponentWrapper",key:(0,utility_1.toKebabCase)(t)||e,className:"tab-pane fade ".concat(t==n?"active show":"").trim(),id:(0,utility_1.toKebabCase)(t)},a)})},[r.data,n]);return react_1.default.createElement("div",{"data-test":"TabContainer",id:r.id,style:r.style,className:"".concat((0,aphrodite_1.css)(e.container)," ").concat(r.className||"").trim(),ref:t},react_1.default.createElement(NavBarList_1.default,{data:a,type:"Tab",onClick:i,onItemClose:r.onTabClose?function(t){r.onTabClose&&r.onTabClose(t.title)}:void 0,onAddItem:r.onAddTab?function(){r.onAddTab&&r.onAddTab("New Tab ".concat(function(){for(var t=0;Object.keys(r.data).includes("New Tab ".concat(t));)t++;return t}()))}:void 0,active:n}),react_1.default.createElement("div",{"data-test":"TabContent",className:"tab-content"},o))});Tab.defaultProps={className:""},exports.default=Tab;