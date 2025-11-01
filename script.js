const modules = {
    "General": {
        category: "Fármaco",
        description: "Incluye todas las preguntas de todos los módulos para un estudio completo.",
        questions: [
            { question: "Pregunta de ejemplo de Generalidades 1", answers: [{ text: "Respuesta A", correct: true }, { text: "Respuesta B", correct: false }] },
            { question: "Pregunta de ejemplo de Generalidades 2", answers: [{ text: "Respuesta A", correct: true }, { text: "Respuesta B", correct: false }] },
            { question: "Pregunta de ejemplo del Modulo 1", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo del Modulo 2", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo del Modulo 3", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo del Modulo 4", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo del Modulo 5", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo del Modulo 6", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Farmacocinética", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Neumonía", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de IVU", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Piel", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Malaria", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Dolor", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Dolor Crónico", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Migraña", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de HTA", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Cardiopatía", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Falla Cardiaca", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Diabetes", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de EPOC", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
            { question: "Pregunta de ejemplo de Exposición", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Modulo 1 (Generalidades y Hemático)": {
        category: "Fármaco",
        description: "Conceptos básicos de farmacología y sistema hemático.",
        questions: [
            { question: "Pregunta de ejemplo del Modulo 1", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Antibióticos 101": {
        category: "Fármaco",
        description: "Coberturas básicas, familias y reglas mnemotécnicas.",
        questions: [
            { question: "Pregunta de ejemplo del Modulo 2", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Antimicrobianos II": {
        category: "Fármaco",
        description: "Segunda parte de antimicrobianos, farmacos especiales y más.",
        questions: [
            { question: "Pregunta de ejemplo del Modulo 3", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Dolor y SNC": {
        category: "Fármaco",
        description: "Manejo del dolor y farmacología del Sistema Nervioso Central.",
        questions: [
            { question: "Pregunta de ejemplo del Modulo 4", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "SNA y Cardiovascular": {
        category: "Fármaco",
        description: "Farmacología del Sistema Nervioso Autónomo y Cardiovascular.",
        questions: [
            { question: "Pregunta de ejemplo del Modulo 5", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Endocrino y más": {
        category: "Fármaco",
        description: "Farmacología de Endocrino, Respiratorio y Digestivo.",
        questions: [
            { question: "Pregunta de ejemplo del Modulo 6", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Farmacocinética": {
        category: "Fármaco",
        description: "Caso clínico sobre los principios de la farmacocinética.",
        questions: [
            { question: "Pregunta de ejemplo de Farmacocinética", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Neumonía": {
        category: "Fármaco",
        description: "Caso clínico: Neumonía adquirida en la comunidad.",
        questions: [
            { question: "Pregunta de ejemplo de Neumonía", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Infección Urinaria": {
        category: "Fármaco",
        description: "Caso clínico: Infección de vías urinarias.",
        questions: [
            { question: "Pregunta de ejemplo de IVU", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Infección de Piel": {
        category: "Fármaco",
        description: "Caso clínico: Infección de piel y tejidos blandos.",
        questions: [
            { question: "Pregunta de ejemplo de Piel", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Malaria": {
        category: "Fármaco",
        description: "Caso clínico: Malaria.",
        questions: [
            { question: "Pregunta de ejemplo de Malaria", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Dolor": {
        category: "Fármaco",
        description: "Caso clínico: Dolor.",
        questions: [
            { question: "Pregunta de ejemplo de Dolor", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Dolor Crónico": {
        category: "Fármaco",
        description: "Caso clínico: Dolor crónico.",
        questions: [
            { question: "Pregunta de ejemplo de Dolor Crónico", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Migraña": {
        category: "Fármaco",
        description: "Caso clínico: Migraña.",
        questions: [
            { question: "Pregunta de ejemplo de Migraña", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Hipertensión": {
        category: "Fármaco",
        description: "Caso Clínico: Hipertensión arterial.",
        questions: [
            { question: "Pregunta de ejemplo de HTA", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Cardiopatía Isquémica": {
        category: "Fármaco",
        description: "Caso Clínico: Cardiopatía isquémica.",
        questions: [
            { question: "Pregunta de ejemplo de Cardiopatía", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Falla Cardiaca": {
        category: "Fármaco",
        description: "Caso Clínico: Falla cardiaca.",
        questions: [
            { question: "Pregunta de ejemplo de Falla Cardiaca", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Diabetes Mellitus": {
        category: "Fármaco",
        description: "Caso Clínico: Diabetes mellitus.",
        questions: [
            { question: "Pregunta de ejemplo de Diabetes", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "EPOC": {
        category: "Fármaco",
        description: "Caso Clínico: Enfermedad pulmonar obstructiva crónica.",
        questions: [
            { question: "Pregunta de ejemplo de EPOC", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    },
    "Club de Revistas": {
        category: "Fármaco",
        description: "Exposición 2 (Club de revistas - artículo científico) (IdC) (M-activa).",
        questions: [
            { question: "Pregunta de ejemplo de Exposición", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] }
        ]
    }
};

const moduleSelectionContainer = document.getElementById("module-selection-container");
const moduleListElement = document.getElementById("module-list");
const quizContainer = document.querySelector(".quiz-container");
const quizTitleElement = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const backToModulesButton = document.getElementById("back-to-modules-btn");

let currentQuestions = [];
let currentQuestionIndex = 0;

function showModules() {
    quizContainer.classList.add("hidden");
    moduleSelectionContainer.classList.remove("hidden");
    moduleListElement.innerHTML = "";

    for (const moduleName in modules) {
        const module = modules[moduleName];
        const card = document.createElement("div");
        card.classList.add("module-card");
        card.innerHTML = `
            <div class="module-category">${module.category}</div>
            <h3>${moduleName}</h3>
            <p>${module.description}</p>
            <button class="open-btn">Abrir</button>
        `;
        card.addEventListener("click", () => selectModule(moduleName));
        moduleListElement.appendChild(card);
    }
}

function selectModule(moduleName) {
    currentQuestions = modules[moduleName].questions;
    moduleSelectionContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    quizTitleElement.innerText = moduleName;
    startQuiz();
}

function startQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("answer-btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    // Itera sobre todos los botones para deshabilitarlos y mostrar la respuesta correcta
    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    // Añade la clase 'incorrect' solo si el botón seleccionado no es el correcto
    if (!isCorrect) {
        selectedBtn.classList.add("incorrect");
    }

    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
    } else {
        alert("¡Has terminado el cuestionario!");
        showModules();
    }
}

nextButton.addEventListener("click", handleNextButton);
backToModulesButton.addEventListener("click", showModules);

showModules();
