$(function () {
    //文字色変化を押すと
    $('#change-color').on('click', function () {
        //こんにちは！が文字色が変化
        $('#target').css("color", "red");
    });

    //文字内容変化を押すと
    $('#change-text').on('click', function () {
        //文字内容が変化
        $('#target').text('Hellow!');
    });

    //フェードアウトを押すと
    $('#fade-out'). on('click', function () {
        //文字がフェードアウト
        $('#target').fadeOut();
    });

    //フェードインを押すと
    $('#fade-in').on('click', function () {
        //文字がフェーイン
        $('#target').fadeIn();
    });
});