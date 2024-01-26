$(document).ready(function(){
    let isExpanded = false;

    $('.search-icon').click(function(){
        if (!isExpanded) {
            $('.search-bar').animate({width: 'toggle'});
            $('.search-icon').animate({width: 'toggle'});
            isExpanded = true;
        } else {
            $('.search-bar').animate({width: 'toggle'});
            $('.search-icon').animate({width: 'toggle'});
            isExpanded = false;
        }
    });
});