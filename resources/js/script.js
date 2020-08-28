"use strict";
Vue.component('app-example', require('./components/ExampleComponent.vue').default);

var app = new Vue ({
    el: '#app',
    data: {
        
    }
});

$(document).ready(function(){
    console.log ('script.js started');

    //выпадающая навигационная панель
    var st = $(this).scrollTop();
    var lastScrollTop = st - 1;
    var isLinkPanelVisible = true;
    //спрятать панель, если экран уже прокручен
    if (st > 0) {
        $("nav.navbar").css('top', '-80px');
        isLinkPanelVisible = false;
    }
    $(window).scroll(function(event){
        st = $(this).scrollTop();
        if (st > lastScrollTop){
            if (isLinkPanelVisible) {
                //console.log ("Спрятать панель");
                $("nav.navbar").css('top', '-80px');
                isLinkPanelVisible = false;
            }
        } else {
            if (!isLinkPanelVisible) {
                //console.log ("Показать панель");
                $("nav.navbar").css('top', '0px');
                isLinkPanelVisible = true;
            }
        }
        lastScrollTop = st;
    });

});
