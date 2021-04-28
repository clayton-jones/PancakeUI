"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var react_1 = require("react");
require("./button.scss");
/**
 * Primary UI component for user interaction
 */
var Button = function (_a) {
    var _b = _a.primary, primary = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? 'medium' : _c, label = _a.label, backgroundColor = _a.backgroundColor, _d = _a.colorPrimary, colorPrimary = _d === void 0 ? '#085f70' : _d, _e = _a.colorSecondary, colorSecondary = _e === void 0 ? '#003cb5' : _e, _f = _a.rounded, rounded = _f === void 0 ? true : _f, _g = _a.onClick, onClick = _g === void 0 ? function () { return null; } : _g, props = __rest(_a, ["primary", "size", "label", "backgroundColor", "colorPrimary", "colorSecondary", "rounded", "onClick"]);
    var mode = primary ? 'primary' : 'secondary';
    var round = !rounded ? 'square' : '';
    var backgroundImage = "linear-gradient(45deg, " + colorPrimary + " 0%, " + colorSecondary + " 100%)";
    return (<button type="button" className={['pancake-btn', "" + size, mode, round].join(' ')} style={{ backgroundColor: backgroundColor, backgroundImage: backgroundImage }} onClick={onClick} {...props}>
      {label}
    </button>);
};
exports.Button = Button;
