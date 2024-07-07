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
    const quizContainer = document.getElementById('ques');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `Question ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionText);

        const form = document.createElement('form');

        q.options.forEach(option => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            form.appendChild(label);
            form.appendChild(document.createElement('br'));
        });

        questionDiv.appendChild(form);

        const result = document.createElement('p');
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
        resultElement.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', () => {
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

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});
/*function loadQuiz() {
    const quizContainer = document.getElementById('ques');

    questions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');

        const questionText = document.createElement('p');
        questionText.textContent = `Question ${index + 1}: ${q.question}`;
        questionDiv.appendChild(questionText);

        q.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.onclick = () => checkAnswer(index, option);
            questionDiv.appendChild(button);
        });

        const result = document.createElement('p');
        result.classList.add('result');
        result.id = `result-${index}`;
        questionDiv.appendChild(result);

        quizContainer.appendChild(questionDiv);
    });
}

function checkAnswer(questionIndex, answer) {
    const resultElement = document.getElementById(`result-${questionIndex}`);
    if (answer === questions[questionIndex].answer) {
        resultElement.textContent = 'You are a baller';
        resultElement.style.color = 'green';
    } else {
        resultElement.textContent = 'Missed the goal';
        resultElement.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('open');
});*/