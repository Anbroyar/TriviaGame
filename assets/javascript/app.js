$(document).ready(function() {
	var index = 0;
	var countdown = {
		time : 30,
		reset: function() {
			countdown.time = 30;
			$('#timer').html('<h3>' + countdown.time + ' seconds</h3>');
		},
		start: function() {
			counter = setInterval(countdown.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdown.time--;
				
			if (countdown.time >= 0) {
				$('#timer').html('<h3>' + countdown.time + ' seconds</h3>');
			}
			else {
				index++;
				Wrong();
				countdown.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".choice").hide();
					Score();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var question1 = {
	question : 'Which planet is nearest to the Earth?',
	Answers : ['A. Jupiter',
				 'B. Venus',
				 'C. Mercury',
				 'D. Mars'],
	flags : [false, false, true, false],
	answer : 'C. Mercury'
};

var question2 = {
	question: 'Name the worlds biggest island.',
	Answers: ['A. Borneo',
				 'B. Greenland',
				 'C. Madagascar',
				 'D. New Guinea'],
	flags : [false, true, false, false],
	answer : 'B. Greenland'
};

var question3 = {
	question : 'What is the diameter of Earth?',
	Answers : ['A. 8657.2mi',
				 'B. 7917.5mi',
				 'C. 4212.9mi',
				 'D. 7324.7mi'],
	flags : [false, true, false, false],
	answer : 'B. 7917.5mi'
};

var question4 = {
	question : 'Which country is Prague in?',
	Answers : ['A. Czech Republic',
				 'B. Belgium',
				 'C. Norway',
				 'D. Croatia'],
	flags : [true, false, false, false],
	answer : 'A. Czech Republic'
};

var question5 = {
	question : 'Name the worlds largest ocean',
	Answers : ['A. Indian',
				 'B. Pacific',
				 'C. Arctic',
				 'D. Atlantic'],
	flags : [false, true, false, false],
	answer : 'B. Pacific'
};

var question6 = {
	question : 'The great Victoria Desert is located in',
	Answers : ['A. Australia',
				 'B. Canada',
				 'C. North America',
				 'D. Africa'],
	flags : [true, false, false, false],
	answer : 'A. Australia'
};

var question7 = {
	question : 'Which of the following is tropical grassland?',
	Answers : ['A. Taiga',
				 'B. Prairies',
				 'C. Savannah',
				 'D. Pampas'],
	flags : [false, false, true, false],
	answer : 'C. Savannah'
};

var questionArray = [question1, question2, question3, question4, question5, question6, question7];

function loadQuestion(selectqn) {
	countdown.reset();
  $("#question").html("<h3>" + questionArray[selectqn].question + "</h3>");
  $("#buttonA").text(questionArray[selectqn].Answers[0]).show();
  $("#buttonB").text(questionArray[selectqn].Answers[1]).show();
  $("#buttonC").text(questionArray[selectqn].Answers[2]).show();
  $("#buttonD").text(questionArray[selectqn].Answers[3]).show();

}


function setup() {
	index = 0;
	$('#question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$('#startButton').hide();
		countdown.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$('.choice').on('click', function() {
		index++;
		$("#question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function Correct() {
	correct++;
	alert("Congratulations! It is correct!");
}

function Wrong() {
	wrong++;
	alert("Sorry, that is wrong!");
}

function Score() {
	$('#question').empty();
	$('#question').append("<h2>" + correct + " correct</h2>");
	$('#question').append("<h2>" + wrong + " wrong</h2>");
	countdown.stop();
	$('#timer').empty();

}

setup();
$('.choice').on('click', function() {
 
 if(this.id == 'buttonA') {
 	var chosen = 'A';
 } else if(this.id == 'buttonB') {
 	var chosen = 'B';
 } else if (this.id == 'buttonC') {
 	var chosen = 'C';
 } else if (this.id == 'buttonD') {
 	var chosen = 'D';
 } 
 if ((chosen == 'A') && (questionArray[index].flags[0] == true)) {
 	Correct();
 } else if (chosen == 'A') {
 	Wrong();
 }
 if ((chosen == 'B') && (questionArray[index].flags[1] == true)) {
 	Correct();
 } else if (chosen == 'B') {
 	Wrong();
 }
if ((chosen == 'C') && (questionArray[index].flags[2] == true)) {
 	Correct();
 } else if (chosen == 'C') {
 	Wrong();
 }
if ((chosen == 'D') && (questionArray[index].flags[3] == true)) {
 	Correct();
 } else if (chosen == 'D') {
 	Wrong();
 }

 $("#question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".choice").hide();
 	Score();
 }
});

});