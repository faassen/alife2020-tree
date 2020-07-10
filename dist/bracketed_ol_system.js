/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry_points/bracketed_ol_system.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/p5/lib/p5.js":
/*!***********************************!*\
  !*** ./node_modules/p5/lib/p5.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/classes/physics.ts":
/*!********************************!*\
  !*** ./src/classes/physics.ts ***!
  \********************************/
/*! exports provided: Vector, Force, calculateOrbitalSpeed, calculateOrbitalVelocity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vector\", function() { return Vector; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Force\", function() { return Force; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateOrbitalSpeed\", function() { return calculateOrbitalSpeed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calculateOrbitalVelocity\", function() { return calculateOrbitalVelocity; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\n\nclass Vector {\n    constructor(x, y) {\n        this.x = x;\n        this.y = y;\n    }\n    get transposed() {\n        return new Vector(this.y, this.x);\n    }\n    get size() {\n        return Math.sqrt(this.x * this.x + this.y * this.y);\n    }\n    static zero() {\n        return new Vector(0, 0);\n    }\n    static random(max, min) {\n        return new Vector(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(max, min), Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(max, min));\n    }\n    toString() {\n        return `(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;\n    }\n    add(other) {\n        return new Vector(this.x + other.x, this.y + other.y);\n    }\n    sub(other) {\n        return new Vector(this.x - other.x, this.y - other.y);\n    }\n    mult(n) {\n        return new Vector(this.x * n, this.y * n);\n    }\n    div(n) {\n        return new Vector(this.x / n, this.y / n);\n    }\n    dist(other) {\n        return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));\n    }\n    sized(size) {\n        const mul = size / this.size;\n        return this.mult(mul);\n    }\n    rotated(radian) {\n        const x = this.x * Math.cos(radian) - this.y * Math.sin(radian);\n        const y = this.x * Math.sin(radian) + this.y * Math.cos(radian);\n        return new Vector(x, y);\n    }\n    randomized() {\n        return new Vector(Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(this.x), Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"random\"])(this.y));\n    }\n    moved(radian, length) {\n        const x = this.x + Math.cos(radian) * length;\n        const y = this.y + Math.sin(radian) * length;\n        return new Vector(x, y);\n    }\n}\nclass Force {\n    constructor(magnitude) {\n        this.magnitude = magnitude;\n    }\n    static zero() {\n        return new Force(new Vector(0, 0));\n    }\n    accelerationTo(mass) {\n        return this.magnitude.div(mass);\n    }\n    consumedEnergyWith(mass) {\n        return this.magnitude.size * mass;\n    }\n    add(other) {\n        const vector = this.magnitude.add(other.magnitude);\n        return new Force(vector);\n    }\n}\nfunction calculateOrbitalSpeed(position, gravityCenter, gravity) {\n    const distance = position.dist(gravityCenter);\n    return Math.sqrt(gravity / distance);\n}\nfunction calculateOrbitalVelocity(position, gravityCenter, gravity) {\n    const orbitalSpeed = calculateOrbitalSpeed(position, gravityCenter, gravity);\n    const tangentVector = position.sub(gravityCenter)\n        .rotated(Math.PI / 2);\n    return tangentVector.sized(orbitalSpeed);\n}\n\n\n//# sourceURL=webpack:///./src/classes/physics.ts?");

/***/ }),

/***/ "./src/entry_points/bracketed_ol_system.ts":
/*!*************************************************!*\
  !*** ./src/entry_points/bracketed_ol_system.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes_physics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/physics */ \"./src/classes/physics.ts\");\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\n\n\n\n/**\n * ?debug=1&length=5&weight=1&depth=5&rules=F:F[+F]F[-F]F&constants=+:25.7,-:-25.7&condition=F\n * ?debug=1&length=10&weight=1&depth=5&rules=F:F[+F]F[-F][F]&constants=+:20,-:-20&condition=F\n * ?debug=1&length=8&weight=1&depth=5&rules=F:FF-[-F+F+F]+[+F-F-F]&constants=+:22.5,-:-22.5&condition=F\n * ?debug=1&length=1&weight=1&depth=7&rules=X:F[+X][-X]FX,F:FF&constants=+:25.7,-:-25.7&condition=X\n */\nconst parameters = new _utilities__WEBPACK_IMPORTED_MODULE_2__[\"URLParameter\"]();\nconst DEBUG = parameters.boolean(\"debug\", false);\nconst size = parameters.int(\"size\", 1000);\nconst maxDepth = parameters.int(\"depth\", 5);\nconst rawRules = parameters.string(\"rules\", \"F:F[+F]F[-F]F\");\nconst rawConstants = parameters.string(\"constants\", \"+:25.7,-:-25.7\");\nconst initialCondition = parameters.string(\"condition\", \"F\");\nconst unitLength = parameters.int(\"length\", 100);\nconst unitWeight = parameters.float(\"weight\", 1);\nconst canvasSize = new _classes_physics__WEBPACK_IMPORTED_MODULE_1__[\"Vector\"](size, size);\nlet agent;\nconst rules = parseRules(rawRules);\nconst constants = parseConstants(rawConstants);\nfunction log(message) {\n    if (DEBUG === false) {\n        return;\n    }\n    console.log(message);\n}\nconst main = (p) => {\n    p.setup = () => {\n        const canvas = p.createCanvas(canvasSize.x, canvasSize.y);\n        canvas.id(\"canvas\");\n        canvas.parent(\"canvas-parent\");\n        const diff = new _classes_physics__WEBPACK_IMPORTED_MODULE_1__[\"Vector\"](0, size * 0.4);\n        const position = canvasSize.div(2)\n            .add(diff);\n        const lsystem = new BracketedOLSystem(rules, constants);\n        agent = new Agent(position, lsystem);\n    };\n    p.draw = () => {\n        p.background(0);\n        agent.draw(p);\n    };\n};\nfunction parseRules(raw) {\n    const map = new Map();\n    if (raw == undefined) {\n        console.log(`No rule specified`);\n        map.set(\"A\", \"-A++A\");\n        return map;\n    }\n    const rawRuleSet = raw.split(\",\");\n    rawRuleSet.forEach(line => {\n        const keyValue = line.split(\":\");\n        if (keyValue.length !== 2) {\n            console.log(`[Warning] Parameter \"rules\" line \"${line}\" should be \"<character>:<string>\"`);\n            return;\n        }\n        map.set(keyValue[0], keyValue[1]);\n    });\n    return map;\n}\nfunction parseConstants(raw) {\n    const map = new Map();\n    if (raw == undefined) {\n        console.log(`No constant specified`);\n        map.set(\"+\", 20);\n        map.set(\"-\", -20);\n        return map;\n    }\n    const rawRuleSet = raw.split(\",\");\n    rawRuleSet.forEach(line => {\n        const keyValue = line.split(\":\");\n        if (keyValue.length !== 2) {\n            console.log(`[Warning] Parameter \"constants\" line \"${line}\" should be \"<character>:<number>\"`);\n            return;\n        }\n        const angle = parseFloat(keyValue[1]);\n        if (angle === undefined) {\n            console.log(`[Warning] Parameter \"constants\" line \"${line}\" should be \"<character>:<number>\"`);\n            return;\n        }\n        map.set(keyValue[0], angle);\n    });\n    return map;\n}\nclass Coordinate {\n    constructor(direction, position) {\n        this.direction = direction;\n        this.position = position;\n    }\n}\nclass BracketedOLSystem {\n    constructor(rules, constants) {\n        this.rules = rules;\n        this.constants = constants;\n    }\n    draw(p, initialCondition, position, depth) {\n        p.noFill();\n        p.strokeWeight(unitWeight);\n        p.stroke(0xFF, 0x80);\n        const state = this.getResult(initialCondition, depth);\n        const stack = [];\n        // TODO: 文字によりlenghtを変える\n        const length = unitLength;\n        let currentPosition = position;\n        let currentDirection = -90; // 上向き\n        for (const c of state) {\n            if (c === \"[\") {\n                stack.push(new Coordinate(currentDirection, currentPosition));\n                // log(`push ${currentDirection}, ${String(currentPosition)}`)\n                continue;\n            }\n            if (c === \"]\") {\n                const coordinate = stack.pop();\n                if (coordinate == undefined) {\n                    log(`ERROR Stack is empty`);\n                    continue;\n                }\n                // log(`pop ${currentDirection} -> ${coordinate.direction}, ${String(currentPosition)} -> ${String(coordinate.position)}`)\n                currentDirection = coordinate.direction;\n                currentPosition = coordinate.position;\n                continue;\n            }\n            const directionChange = this.constants.get(c);\n            if (directionChange != undefined) {\n                // log(`direction ${currentDirection} -> ${currentDirection + directionChange}`)\n                currentDirection += directionChange;\n                continue;\n            }\n            // 文字であった場合\n            const radian = currentDirection * (Math.PI / 180);\n            const nextPosition = currentPosition.moved(radian, length);\n            p.line(currentPosition.x, currentPosition.y, nextPosition.x, nextPosition.y);\n            // log(`draw ${String(currentPosition)} -> ${String(nextPosition)}`)\n            currentPosition = nextPosition;\n        }\n        // log(`END`)\n    }\n    getResult(condition, depth) {\n        if (depth < 1) {\n            return condition;\n        }\n        let result = condition;\n        this.rules.forEach((value, key) => {\n            const components = result.split(key);\n            result = components.join(value);\n        });\n        // log(`getResult \"${condition}\" -> \"${result}\"`)\n        return this.getResult(result, depth - 1);\n    }\n}\nclass Agent {\n    constructor(position, lsystem) {\n        this.position = position;\n        this.lsystem = lsystem;\n    }\n    draw(p) {\n        const condition = initialCondition == undefined ? \"A\" : initialCondition;\n        this.lsystem.draw(p, condition, this.position, maxDepth);\n    }\n}\nconst sketch = new p5__WEBPACK_IMPORTED_MODULE_0__(main);\n\n\n//# sourceURL=webpack:///./src/entry_points/bracketed_ol_system.ts?");

/***/ }),

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/*! exports provided: random, Color, URLParameter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URLParameter\", function() { return URLParameter; });\n// export function random(max: number): number\t// not working: raises \"Expected 1 arguments, but got 2.\"\nfunction random(max, min) {\n    if (min == undefined) {\n        return Math.random() * max;\n    }\n    const range = max - min;\n    return Math.random() * range + min;\n}\nclass Color {\n    constructor(r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    }\n    p5(p, alpha) {\n        return p.color(this.r, this.g, this.b, alpha);\n    }\n}\nclass URLParameter {\n    constructor() {\n        this.parameters = new Map();\n        this.usedKeys = [];\n        const rawQuery = document.location.search;\n        const pairs = rawQuery\n            .slice(rawQuery.indexOf(\"?\") + 1)\n            .split(\"&\");\n        // tslint:disable-next-line:no-any\n        const rawParameters = {};\n        for (const query of pairs) {\n            const pair = query.split(\"=\");\n            rawParameters[pair[0]] = pair[1];\n            this.parameters.set(pair[0], pair[1]);\n        }\n        console.log(rawParameters);\n    }\n    int(key, defaultValue, shortKey) {\n        let rawValue;\n        if (shortKey != undefined) {\n            this.usedKeys.push(shortKey);\n            rawValue = this.parameters.get(shortKey);\n        }\n        this.usedKeys.push(key);\n        if (rawValue == undefined) {\n            rawValue = this.parameters.get(key);\n        }\n        if (rawValue == undefined) {\n            return defaultValue;\n        }\n        const parsedValue = parseInt(rawValue, 10);\n        if (isNaN(parsedValue)) {\n            return defaultValue;\n        }\n        return parsedValue;\n    }\n    float(key, defaultValue, shortKey) {\n        let rawValue;\n        if (shortKey != undefined) {\n            this.usedKeys.push(shortKey);\n            rawValue = this.parameters.get(shortKey);\n        }\n        this.usedKeys.push(key);\n        if (rawValue == undefined) {\n            rawValue = this.parameters.get(key);\n        }\n        if (rawValue == undefined) {\n            return defaultValue;\n        }\n        const parsedValue = parseFloat(rawValue);\n        if (isNaN(parsedValue)) {\n            return defaultValue;\n        }\n        return parsedValue;\n    }\n    boolean(key, defaultValue, shortKey) {\n        let rawValue;\n        if (shortKey != undefined) {\n            this.usedKeys.push(shortKey);\n            rawValue = this.parameters.get(shortKey);\n        }\n        this.usedKeys.push(key);\n        if (rawValue == undefined) {\n            rawValue = this.parameters.get(key);\n        }\n        if (rawValue == undefined) {\n            return defaultValue;\n        }\n        const parsedValue = parseInt(rawValue, 10);\n        if (isNaN(parsedValue)) {\n            return defaultValue;\n        }\n        return parsedValue > 0;\n    }\n    string(key, defaultValue, shortKey) {\n        let rawValue;\n        if (shortKey != undefined) {\n            this.usedKeys.push(shortKey);\n            rawValue = this.parameters.get(shortKey);\n        }\n        this.usedKeys.push(key);\n        if (rawValue == undefined) {\n            rawValue = this.parameters.get(key);\n        }\n        if (rawValue == undefined) {\n            return defaultValue;\n        }\n        return rawValue;\n    }\n    unusedKeys() {\n        const allKeys = Array.from(this.parameters.keys());\n        return allKeys.filter(k => this.usedKeys.indexOf(k) === -1);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/utilities.ts?");

/***/ })

/******/ });