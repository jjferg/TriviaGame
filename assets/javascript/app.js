$(document).ready(function () {
// hidding the form befor start so user cannot see the questions.
    $("form").hide()
    $("#title").hide()

 // declaring variable for time, sound and answers.
    var time = 60;

    var inCorrect = 0;

    var correct = 0;

    var noAnswer = 6;
   
    var gameSound = document.createElement("audio");
    gameSound.setAttribute("src", "assets/images/Sound Effect (20).wav");

    var Image = document.createElement("img");
    Image.setAttribute("img", "assets/images/metroid-samus-returns-wallpaper-18.png")

// these function stops the user form picking multiple answers for the same quedtion
    $('.check').click(function () {
        $('.check').not(this).prop('checked', false);
        $('input[type=checkbox]').prop('checked');
    });

    $('.check1').click(function () {
        $('.check1').not(this).prop('checked', false);
        $('input[type=checkbox]').prop('checked');
    });

    $('.check2').click(function () {
        $('.check2').not(this).prop('checked', false);
        $('input[type=checkbox]').prop('checked');
    });
   
    $('.check3').click(function () {
        $('.check3').not(this).prop('checked', false);
        $('input[type=checkbox]').prop('checked');
    });

    $('.check4').click(function () {
        $('.check4').not(this).prop('checked', false);
        $('input[type=checkbox]').prop('checked');

    });

    $('.check5').click(function () {
        $('.check5').not(this).prop('checked', false);
        $('input[type=checkbox]').prop('checked');

    });

    $('input[type=checkbox]').prop('checked').length;

// start game function. 
    $('#start').one("click", function () {
        gameSound.play();
    
// shows/displays the question form.
        $("form").delay(500).show(1500);;
        $("#title").show();
        $("#start").hide();
        $("#title").animate({ right: '450px' });
        
// checking for right and wrong answers and tally them up
        $('input[name="correct"]').change(function () {
         if ($(this).prop("checked") ) {
                correct++; }
                else{($(!this).prop('checked'))
                correct--;
                   
                }
                // if ($(this).prop("checked"))
                // correct--;
        })
        $('input[name="answer"]').click(function () {
            if ($(this).prop("checked") ) 
                inCorrect++;
           })
   
// Submit button form and results
        $("form").submit(function (event) {
            event.preventDefault()
            clearInterval(timeCounter)
            $('form').hide()
            $('#img').hide()
            $(".container").html("<div>" + Image + "<div>");
            noAnswer = 6 - (correct + inCorrect);
            $('body').html("<h1>" + "Correct Answers: " + correct + " " + "Wrong Answers: " + inCorrect
                + " " + "No answer: " + noAnswer + "<h1>")
        })
            
// Time counter expiration and results
        var timeCounter = setInterval(twoMinutes, 1000);

        function twoMinutes() {
            console.log(timeCounter)

            time--;

            $("#time").text("Time: " + time + " " + "seconds ");
             if (time <= 0) {
                clearInterval(timeCounter);
                console.log(timeCounter)
                $('input[type="checkbox[]"]').filter('checked').length
                $('form').hide()
                $('body').append("<body>" + Image + "<body>");
                $('body').html("<h1>" + "Correct Answers: " + correct + " " + "Wrong Answers: " + inCorrect
                    + " " + "No answer: " + noAnswer + "<h1>");
                }
            }
        })






















});


