/// <reference path="jquery.mobile-1.2.0.js" />

$(document).bind('mobileinit',
    function () {
        //Default pages' transition effect
        $.mobile.defaultPageTransition = "slide";
       
        // Page loader Widget
        $.mobile.loader.prototype.options.textVisible = true;

        // theme
        $.mobile.page.prototype.options.theme = 'b';
        $.mobile.page.prototype.options.headerTheme = 'b';
        $.mobile.page.prototype.options.contentTheme = 'b';
        $.mobile.page.prototype.options.footerTheme = 'b';
        $.mobile.page.prototype.options.backBtnTheme = 'b';
});