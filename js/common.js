$(function() {

    // lazyLoadがclassに指定されているimg要素の画像読込を開始する
    var $imgList = $('img.lazyLoad');
    $imgList.each(function() {
        var $target = $(this);

        // 画像の指定がない場合はNoImage画像を設定
        var imgUrl = $target.attr('alt');

        // 画像の読み込み時のイベントに処理を設定
        $target.on('load', function() {
            $target.removeClass('lazyLoad');
            $target.parent().find('.fa-spinner').css('display', 'none');
        });

        // 画像の読み込みを開始
        $target.attr('src', imgUrl);
    })

    $('#content').infinitescroll({
        navSelector: ".navigation",
        nextSelector: ".navigation a",
        itemSelector: ".article",
        animate: true,
        extraScrollPx: 400,
        loading: {
            finishedMsg: "",
            msgText: "",
        }
    });
});
