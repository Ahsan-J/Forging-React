"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var react_1=require("react"),aphrodite_1=require("../../helpers/aphrodite");exports.default=function(e){var r=e.type,t=void 0===r?"primary":r,r=e.hasChildren,o=void 0!==r&&r;return(0,react_1.useMemo)(function(){return aphrodite_1.StyleSheet.create({container:{display:"flex",flexDirection:"row",position:"relative",alignItems:"center",justifyContent:"center",border:"1px solid var(--bs-".concat(t,")")},loader:{background:"transparent",color:"var(--bs-body-color)",position:"absolute",margin:"auto",top:0,bottom:0},icon:{marginRight:o?"0.2rem":void 0}})},[t,o])};