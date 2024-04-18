$(function () {
    console.log('test');
    $('.btn').on('click', function () {
        $('[class="text-box"]').val('クリックしました！');
    });
});