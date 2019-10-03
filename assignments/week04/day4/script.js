//Declaration Gloabally
var counter = 30;
var globalIndex = null;
var answerKey = null;
var intervalTimer = null;
$('.alert-danger').hide();
$('.alert-success').hide();
$('.alert-warning').hide();
$('#inputError').hide();
$('#loaderDiv').hide();

$(document).ready(function(){
    
    //Start the countdown timer from 30 to 0
    intervalTimer = setInterval(function(){
        counter--;
        if (counter === 0) {
            clearInterval(intervalTimer);
            $('#ranOutOfTimeError').show();
            $('#submitBtn').prop('disabled',true);
            setTimeout(function(){
                $('#ranOutOfTimeError').hide();
            },20000);
        }
        $('.timer').text(counter);
    },1000);

    //Get the Questions Data from JSON file
    $.ajax({
        method: "GET",
        url: "quiz.json",
        success: function(response){
            answerKey = response;
            displayQuestionToUser(answerKey)
        },
        error: function(error){
            console.log("Error: ",error);
        }
    });

    //Submit the Answer
    $('#submitBtn').on('click',function(){
        //Get the Answer Value
        var userAnswer = $('#userInput').val();
        checkAnswerToTheQuestion(userAnswer);
    });
});

function generateRandomNumber(len) {
    var random = Math.floor( Math.random() * len );
    return random;
}

function displayQuestionToUser(questionData) {
    var len = questionData.length;
    globalIndex = generateRandomNumber(len);
    var selected = questionData[globalIndex];
    $('.question-list').text(selected.question);
}

function checkAnswerToTheQuestion(userAnswer) {
    if (userAnswer !== "" && userAnswer !== null && userAnswer !== undefined) {
        $('#submitDiv').hide();
        $('#loaderDiv').show();
        //Convert user answer and actual answer to lowercase to remove errors due to case sensitivity
        if (answerKey[globalIndex].answer.toLowerCase() === userAnswer.toLowerCase()) {
            clearInterval(intervalTimer);
            $('.alert-success').show();
            setTimeout(function(){
                $('.alert-success').hide();
                $('#userInput').val("");
                location.reload();
            },5000);
            $('#loaderDiv').hide();
            $('#submitDiv').show();
        } else {
            //To save two messages Timeout error msg and wrong answer msg conflict at last moment.
            if (!(counter <= 3 && counter >= 0)) {
                $('.alert-danger').show();
                setTimeout(function(){
                    $('.alert-danger').hide();
                },4000);
            } else {
                $('.alert-danger').show();
                setTimeout(function(){
                    $('.alert-danger').hide();
                },500);
            }
            $('#loaderDiv').hide();
            $('#submitDiv').show();
        }
    } else {
        $('#inputError').show();
        setTimeout(function(){
            $('#inputError').hide();
        },2000);
    }
}