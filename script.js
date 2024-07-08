//Initialising the questions present in my quiz, along with their corresponding options and correct answers
const questions=[
    {
        question:"Whose is the Cover Athlete of EAFC-24?",
        options:["Lionel Messi", "Cristiano Ronaldo", "Erling Haaland", "Kylian Mbappe"],
        answer: "Erling Haaland"
    },
    {
        question:"Which legendary player featured in the Icons section of EAFC-24?",
        options:["Diego Maradona", "Pelé", "Zinedine Zidane", "Franz Beckenbauer"],
        answer: "Zinedine Zidane"
    },
    {
        question:"Who is declared to be the 12th man in the game's Ultimate Team of the Year?",
        options:["N'Golo Kante", "Cristiano Ronaldo", "Bernardo Silva", "Mohammed Salah"],
        answer: "Cristiano Ronaldo"
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('ques');//Obtains the Quiz section from my HTML file
    //Iterates through each question
    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        const questionText = document.createElement('p');
        questionText.textContent = `Question ${index + 1}: ${q.question}`;//To display the question text along with its index
        questionDiv.appendChild(questionText);
        const form = document.createElement('form');//To display the options. For each option I used a radio-button before it.
        q.options.forEach(option => {
            label = document.createElement('label');
            input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            form.appendChild(label);
            form.appendChild(document.createElement('br'));
        });

        questionDiv.appendChild(form);

        const result = document.createElement('p');//To display the result after I select an option
        result.classList.add('result');
        result.id = `result-${index}`;
        questionDiv.appendChild(result);

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(questionIndex, answer) {
    const resultElement = document.getElementById(`result-${questionIndex}`);
    if (answer === questions[questionIndex].answer) {
        resultElement.textContent = 'You are a baller!';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Missed the goal!';
        resultElement.style.color = 'darkred';
    }
}

document.addEventListener('DOMContentLoaded', () => {//Ensures that this code runs only after the HTML document has been fully loaded
    loadQuiz();

    document.querySelectorAll('form').forEach((form, index) => {
        form.addEventListener('change', () => {
            const selectedOption = form.querySelector('input[type="radio"]:checked');
            if (selectedOption) {
                checkAnswer(index, selectedOption.value);
            }
        });
    });
});

const euros = document.getElementById('euros');
const nav = document.querySelector('nav');

euros.addEventListener('click', () => {
    nav.classList.toggle('open');
    euros.classList.toggle('open');
});