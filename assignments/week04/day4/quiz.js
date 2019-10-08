//Timer
var counter = 30;
var interval = setInterval(function(){
    counter--;
    $('h2').html(counter);
    if(counter === 0) {
        alert('Time Over');
        $('button').attr('disabled',true);
        clearInterval(interval);
    }
}
,1000)
//Timer ended
//Ajax call
$.ajax({
    url: 'https://raw.githubusercontent.com/attainu/attainu-eagle/master/assignments/week-4/day-4/quiz.json',
    datatype: 'json',
    success: function(data) {
        var obj = JSON.parse(data);
        var index = Math.floor(Math.random() * obj.length);
        
        $('#Question').html(obj[index].question);

        $('button').on('click',function() {
            if($('#answer').val().toLowerCase() == obj[index].answer.toLowerCase()) {
                alert('Right Answer!... Switching To next');
                location.reload();
            } else{
                alert('Wrong Answer......Dont lose Hope Try again another Question');
            }
        })
    }
})