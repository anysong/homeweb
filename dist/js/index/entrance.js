(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var init = function(){
    console.log('shence_init');
};

init();

},{}],2:[function(require,module,exports){
var expandBtn,$outer;
var parseDOM = function(){
    $expandBtn = $(".js-switch-btn");
    $outer = $(".js-nav-outer");
};
var expandBtnBtnClickHandler = function() {
    $outer.toggleClass("show");
    $outer.parent().toggleClass("white");
    $outer.parent().removeClass("spec");
};
var bindListener = function(){
    $expandBtn.click(expandBtnBtnClickHandler);
};

var init = function(){
    parseDOM();
    bindListener();
};

init();

},{}],3:[function(require,module,exports){
require('../common/shence.js');
require('../common/topNav.js');

var init = function(){
    console.log('init');
};

init();

},{"../common/shence.js":1,"../common/topNav.js":2}]},{},[3])