"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validMountainArray_1 = require("../historyProblems/validMountainArray");
// import BigNumber from "../bigNumber/bignumber";
console.log(validMountainArray_1.validMountainArray([2, 1]));
console.log(validMountainArray_1.validMountainArray([0, 3, 2, 1]));
console.log(validMountainArray_1.validMountainArray([3, 5, 5]));
console.log(validMountainArray_1.validMountainArray([0, 2, 3, 4, 5, 2, 1, 0]));
/**
 * 1 8 8 2 2
 * 1 8 8 22
 * 18 8 22
 * 18 8 2 2
 *
 * 18 8 2
 * 1 8 8 2
 *
 *
 */ 
