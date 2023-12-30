"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_this=this,jsx_runtime_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react/jsx-runtime")),react_1=__importDefault(require("react")),Tab_styles_1=require("./Tab.styles"),important_1=require("../../helpers/aphrodite/important"),TabHead=react_1.default.memo(function(t){var e=t.type,e=(0,Tab_styles_1.useStyles)({type:void 0===e?"primary":e});return(0,jsx_runtime_1.jsx)("div",{role:"tab","aria-selected":t.active,"data-active":t.active,"aria-controls":t.name,onKeyUp:function(e){"tab"!==e.key.toLocaleLowerCase()||t.active||(e.preventDefault(),t.onTabClick&&t.onTabClick(t.name))},tabIndex:0,"data-tab-target":t.name,className:"".concat((0,important_1.css)(e.tabHead)," ").concat(t.active?(0,important_1.css)(e.tabHeadActive):""," ").concat(t.className||""),style:t.style,"data-testid":t.id,id:t.id,onClick:null==(e=t.onTabClick)?void 0:e.bind(_this,t.name),children:t.children})});exports.default=TabHead;