"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useDebounceCallback=void 0;var react_1=require("react"),useDebounceCallback=function(r,u){void 0===u&&(u=500);var c=(0,react_1.useRef)(!1);return(0,react_1.useCallback)(function(e){!c.current&&r&&(r(e),c.current=!0,setTimeout(function(){c.current=!1},u))},[r,u])};exports.useDebounceCallback=useDebounceCallback;