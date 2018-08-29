window.onload =  function(){
    //var nowTime  = new Date();
    ////console.log(date);
    //var targetTime  = new Date('2018/8/29 10:00:00');
    //var chaTime = targetTime - nowTime;
    //var hour = chaTime/1000/60/60;
    //var minute = (chaTime-hour*60*60*1000)/1000/60;
    //var second = (chaTime-minute*60*1000)/1000;
    //console.log(hour,minute,second)

        var box = document.getElementById('cc_footer');
        var divBox = box.getElementsByTagName('div');
        function know(){
            var nowTime = new Date(),
                targetTime = new Date('2018/08/29 10:02:00');
            var chabieTime = targetTime - nowTime;
            //console.log(chabieTime);
            //if(chabieTime<=0){
            //    spanBox.innerHTML = '我们见面啦';
            //    clearInterval(setIntervalId);
            //    return;
            //}
            //var day = Math.floor(chabieTime/(1000*60*60*24));
            //chabieTime-=day*24*60*60*1000;
            var hour = Math.floor(chabieTime/(1000*60*60));
            chabieTime-=hour*60*60*1000;
            var minutes = Math.floor(chabieTime/(1000*60));
            chabieTime -= (minutes*60*1000);
            var seconds=  Math.floor(chabieTime/1000);
            hour<10?hour='0'+hour:null;
            minutes<10?minutes='0'+minutes:null;
            seconds<10?seconds='0'+seconds:null;
            divBox[0].innerHTML = hour;
            divBox[1].innerHTML = minutes;
            divBox[2].innerHTML = seconds;

        }
        know();
        var setIntervalId = setInterval(know,1000);

}
