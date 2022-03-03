"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE64_VALUES = void 0;
var BASE64_KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
exports.BASE64_VALUES = new Array(123); // max char code in base64Keys
for (let i = 0; i < 123; ++i)
    exports.BASE64_VALUES[i] = 64; // fill with placeholder('=') index
for (let i = 0; i < 64; ++i)
    exports.BASE64_VALUES[BASE64_KEYS.charCodeAt(i)] = i;
