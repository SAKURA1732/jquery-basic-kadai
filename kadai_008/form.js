
  $(function() {
    // クリックしたら「クリックしました！」と表示する
    $('.btn').on('click', function () {
        $('.text-box').val('クリックしました！');
    });
});