"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,l=r.call(e),o=[];try{for(;(void 0===t||0<t--)&&!(n=l.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return o},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_this=this,react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),autocomplete_style_1=__importDefault(require("./autocomplete.style")),__1=require(".."),Icon_1=__importDefault(require("../Icon")),Badge_1=__importDefault(require("../Badge")),Highlighter_1=__importDefault(require("../Highlighter")),AutoComplete=react_1.default.memo(function(r){var e=__read((0,react_1.useState)(!1),2),t=e[0],n=e[1],e=__read((0,react_1.useState)(""),2),a=e[0],l=e[1],e=r.label,o=r.onItemClick,u=r.options,c=r.renderDropdownItem,i=r.className,s=r.multiple,_=void 0===s||s,s=r.placeholder,d=__read((0,react_1.useState)(),2),f=d[0],m=d[1],d=__read((0,react_1.useState)(""),2),p=d[0],v=d[1],d=(0,autocomplete_style_1.default)({errorText:p,hasPlaceholder:!!s}),h=(0,react_1.useRef)(null),g=(0,react_1.useRef)(null),b=(0,react_1.useId)(),y=(0,react_1.useMemo)(function(){return Object.keys(f||{})},[f]),E=(0,react_1.useCallback)(function(t,e){e.stopPropagation(),h.current&&(h.current.value=""),t&&null!=u&&u[t]&&m(_?function(e){return __assign(__assign({},e),((e={})[t]=null==u?void 0:u[t],e))}:((e={})[t]=null==u?void 0:u[t],e)),o&&null!=u&&u[t]&&o(t,null==u?void 0:u[t]),n(!1),v("")},[o,u,_]),C=((0,react_1.useEffect)(function(){function e(e){var t;e.target instanceof HTMLElement&&(null==(t=g.current)||!t.contains(e.target))&&(n(!1),h.current&&(h.current.value=""))}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}},[]),(0,react_1.useMemo)(function(){return y.map(function(e){var t=null==f?void 0:f[e];return react_1.default.createElement(Badge_1.default,{className:r.badgeClass,type:r.type,onRemove:function(e){var t=Object.assign({},f);delete t[e],m(t)}.bind(_this,e),text:(null==t?void 0:t.label)||"",key:e})})},[f,y,r.type,r.badgeClass])),O=(0,react_1.useMemo)(function(){return Object.keys(u||{}).filter(function(e){var t=null==u?void 0:u[e];return!y.includes(e)&&(null==(t=null==(e=null==t?void 0:t.label)?void 0:e.toLowerCase())?void 0:t.includes(a.toLowerCase()))}).map(function(e){var t=null==u?void 0:u[e];return c&&t?c(t,e):react_1.default.createElement("li",{key:e,onClick:E.bind(_this,e)},null!=t&&t.icon?react_1.default.createElement(Icon_1.default,{name:t.icon}):null,react_1.default.createElement(Highlighter_1.default,{color:r.highlightColor,text:(null==t?void 0:t.label)||"",searchText:a}))})},[E,y,u,c,a,r.highlightColor]);return(0,react_1.useEffect)(function(){var e,t;if(g.current)return(e=g.current).addEventListener("field-error",t=function(e){return v(null==(e=e.detail)?void 0:e.error)}),function(){e.removeEventListener("field-error",t)}},[]),react_1.default.createElement("div",{ref:g,"data-name":"".concat(r.name).concat(_?"[]":""),className:"".concat((0,__1.css)(d.container)," ").concat(i||"")},r.name&&y.length?y.map(function(e){return react_1.default.createElement("input",{readOnly:!0,key:e,value:e,type:"hidden",name:"".concat(r.name).concat(_?"[]":"")})}):null,react_1.default.createElement("label",{className:(0,__1.css)(d.floatInput__label),htmlFor:b},react_1.default.createElement("div",{style:p?{borderColor:"var(--bs-danger)"}:void 0,className:(0,__1.css)(d.inputContainer)},C,react_1.default.createElement("span",{style:y.length?{transform:"translate(0)",padding:0}:void 0},e),react_1.default.createElement("input",{onChange:function(e){e.stopPropagation(),l(e.target.value),v(""),r.onChange&&r.onChange(e)},onFocus:function(e){e.stopPropagation(),n(!0),r.onFocus&&r.onFocus(e)},ref:h,className:"".concat((0,__1.css)(d.floatInput__input)," ").concat(i||""),id:b,placeholder:s||e}))),react_1.default.createElement("span",{className:"invalid-feedback",style:p?{display:"block"}:void 0},p),react_1.default.createElement("ul",{className:(0,__1.css)(d["dropdown-content"],t?d.show:void 0)},O))});exports.default=AutoComplete;