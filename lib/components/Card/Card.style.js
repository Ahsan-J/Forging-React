"use strict";var __read=this&&this.__read||function(e,r){var o="function"==typeof Symbol&&e[Symbol.iterator];if(!o)return e;var t,i,a=o.call(e),d=[];try{for(;(void 0===r||0<r--)&&!(t=a.next()).done;)d.push(t.value)}catch(e){i={error:e}}finally{try{t&&!t.done&&(o=a.return)&&o.call(a)}finally{if(i)throw i.error}}return d},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.useStyles=void 0,require("react")),aphrodite_1=require("../../helpers/aphrodite"),useThemeContext_1=require("../ThemeProvider/useThemeContext"),theme_1=require("../../constant/theme"),utility_1=require("../../helpers/utility"),useStyles=function(e){var e=(e||{}).size,r=void 0===e?"base":e,o=__read((0,useThemeContext_1.useThemeContext)(),1)[0],t=(0,react_1.useMemo)(function(){return o.fontSize[r]||theme_1.FontSizes[r]},[r,o.fontSize]),i=(0,react_1.useMemo)(function(){return(0,utility_1.getHexColorAlpha)(o.borderColor.dark||theme_1.BorderColor.dark,20)},[o.borderColor.dark]);return(0,react_1.useMemo)(function(){return aphrodite_1.StyleSheet.create({container:{display:"flex",flexDirection:"column",position:"relative",minWidth:0,fontSize:t,wordWrap:"break-word",get backgroundColor(){return o.backgroundColor.light||theme_1.BackgroundColor.light},backgroundClip:"border-box",borderRadius:"0.375em",boxShadow:"0 4px 8px 0 ".concat(i),":hover":{boxShadow:"0 8px 16px 0 ".concat(i)}},body:{padding:"1em",flex:1},header:{padding:"0.5em 1em",marginBottom:0,borderBottom:"1px solid",get borderBottomColor(){return(0,utility_1.getHexColorAlpha)(o.borderColor.dark||theme_1.BorderColor.dark,15)}},footer:{padding:"0.5em 1em",marginBottom:0,borderTop:"1px solid",get borderTopColor(){return(0,utility_1.getHexColorAlpha)(o.borderColor.dark||theme_1.BorderColor.dark,15)}}})},[t,i,o.backgroundColor.light,o.borderColor.dark])};exports.useStyles=useStyles;