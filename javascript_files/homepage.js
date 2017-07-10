 document.onmousedown=disableclick;

var status="Right Click Disabled";
function disableclick(event)
{
  if(event.button==2)
   {
     alert(status);
     return false;    
   }
}

jQuery(document).ready(function (){
var audioArray = document.getElementsByClassName('songs');
var i = 0;
audioArray[i].play();
for (i = 0; i < audioArray.length - 1; ++i) {
    audioArray[i].addEventListener('ended', function(e){
        var currentSong = e.target;
        var next = $(currentSong).nextAll('audio');
        if (next.length) $(next[0]).trigger('play');
    });
}
});