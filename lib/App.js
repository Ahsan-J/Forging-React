"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},jsx_runtime_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react/jsx-runtime")),react_1=__importDefault(require("react")),components_1=require("./components"),Tab_1=require("./components/Tab"),paneTestIds=["tab_pane-1","tab_pane-2","tab_pane-3","tab_pane-4","tab_pane-5"],App=react_1.default.memo(function(){return(0,jsx_runtime_1.jsx)(components_1.Tab,{strategy:"hide",children:paneTestIds.map(function(e){return(0,jsx_runtime_1.jsx)(Tab_1.TabPane,{name:e,id:e,children:e},e)})})});exports.default=App;