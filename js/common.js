(function($) {

    function startLazyLoad($imgList) {
        $imgList.each(function() {
            var $target = $(this);
            var imgUrl = $target.attr('alt');

            $target.on('load', function() {
                $target.removeClass('lazyLoad');
                $target.parent().find('.fa-spinner').css('display', 'none');
            });
            $target.attr('src', imgUrl);
        })
    }

    $('#content').infinitescroll({
        navSelector: ".navigation",
        nextSelector: ".navigation a",
        itemSelector: ".article",
        animate: true,
        extraScrollPx: 400,
        loading: {
            finishedMsg: "",
            msgText: "",
            img: "",
        }
    }, function() {
        startLazyLoad($('img.lazyLoad'));
    });

    $(function() {
        startLazyLoad($('img.lazyLoad'));
    });

})($);
