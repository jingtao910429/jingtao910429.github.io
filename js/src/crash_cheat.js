<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/head.png");
         document.title = '你无情的离开了我~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/head.png");
         document.title = '噫你又回来了~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });