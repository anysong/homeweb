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
