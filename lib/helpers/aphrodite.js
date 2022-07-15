"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleSheetServer = exports.css = exports.StyleSheet = void 0;
/* eslint-disable no-unused-vars */
var no_important_1 = require("aphrodite/no-important");
Object.defineProperty(exports, "StyleSheetServer", { enumerable: true, get: function () { return no_important_1.StyleSheetServer; } });
var _a = no_important_1.StyleSheet.extend([{
        selectorHandler: function (selector, baseSelector, generateSubtreeStyles) {
            var selectors = selector.split(',');
            var nestedTags = selectors.map(function (subselector, key) {
                if (subselector[0] === '&') { // create any type of css className by just adding &. eg: '& > span'
                    var tag = key === 0 ? subselector.slice(1) : subselector;
                    return generateSubtreeStyles("".concat(baseSelector, " ").concat(tag).replace(/ +(?= )/g, ''));
                }
                return null;
            }).filter(function (v) { return v; });
            return nestedTags.length === 0 ? null : (nestedTags).flat(Infinity).join(' ');
        }
    }]), StyleSheet = _a.StyleSheet, css = _a.css;
exports.StyleSheet = StyleSheet;
exports.css = css;
