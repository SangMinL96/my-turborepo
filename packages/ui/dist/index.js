'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

const Button = () => {
    return jsxRuntime.jsx("button", { children: "Boop" });
};

const Header = ({ text }) => {
    return jsxRuntime.jsx("h1", { children: text });
};

exports.Button = Button;
exports.Header = Header;
