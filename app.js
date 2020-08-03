function populate(){
    if(quiz.isEnded()){
        showResult();
    }
    else{
        //Questions Text
        var questionText = document.getElementById("question");
        questionText.innerHTML = quiz.getQuestionIndex().text;

        //Question options
        var getOptions = quiz.getQuestionIndex().choices;
        for(var i=0; i < getOptions.length; i++){
            var options = document.getElementById('option' + i);
            options.innerHTML = getOptions[i];
            choosen('btn' + i, getOptions[i]);
        }
        showProgress();
    }
};

function choosen(id, choose){
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(choose);
        populate();
    }
}

function showProgress(){
 var progress = document.getElementById('progress');
 progress.innerHTML = `Question ${quiz.questionIndex + 1} of ${quiz.questions.length}`;
 progress.style.textAlign = "center";
 progress.style.marginTop = "40px"
}

function showResult(){
    var quizResult = `<h1>Quiz Result </h1>`;
    quizResult += `<h2 id='score'> Weldone! You got ${quiz.score} questions correctly.</h2>`;
    var result = document.getElementById('quiz');
    result.innerHTML = quizResult;
}

var questions = [
    new Question("What is the capital of Nigeria?", ["Lagos", "Abuja", "Kano", "Cotonou"], "Abuja"),
    new Question("What is the capital of Italy?", ["Rome", "Turin", "Milan", "Madrid"], "Milan"),
    new Question("What is the capital of England?", ["London", "Cardiff", "Manchester"], "London"),
    new Question("What is the capital of Gabon?", ["Bamako", "Lome","Dakar", "Libreville"], "Libreville"),
    new Question("What is the capital of Turkey?", ["Besiktas","Ankara", "Abu Dhabi", "Istanbul"], "Ankara"),
];

var quiz = new Quiz(questions);

populate();