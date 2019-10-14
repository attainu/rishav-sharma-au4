$(document).ready(function() {
    $('#fullscreen').on('click',function(){
        if(!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    })
});