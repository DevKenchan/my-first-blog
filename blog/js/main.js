'use strict';
//1秒ごとに実行される関数
setInterval(function(){
    const now = new Date();

    const year = now.getFullYear();//年
    const month = zeroPadiing2(now.getMonth() + 1);//月
    const date = zeroPadiing2(now.getDate());//日
    const hour = zeroPadiing2(now.getHours());//時間
    const min = zeroPadiing2(now.getMinutes());//分
    const sec = zeroPadiing2(now.getSeconds());//秒

    const siteText = year + "/" + month + "/" + date + " " + hour + ":" + min + ":" + sec;
    $('#today').text(String(siteText).padStart(2,'0'));

    if(date % 2 == 0) {
        document.getElementById("header").style.backgroundColor = "#808000";
    } else if(date % 2 == 1) {
        document.getElementById("header").style.backgroundColor = "#800000";
    }
}, 1000);

//2桁のゼロ埋めをしてあげる関数
function zeroPadiing2(val) {
    return ('00' + val).slice(-2); //後ろからはマイナスを使う
}