// --- Lógica de Autenticación y Seguridad ---
document.addEventListener('DOMContentLoaded', () => {
    const token = localStorage.getItem('token');
    if (!token) {
        window.location.href = '/login';
        return;
    }

    // Función para decodificar el token JWT (simplificada)
    const parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };

    const user = parseJwt(token);
    if (!user) {
        localStorage.removeItem('token');
        window.location.href = '/login';
        return;
    }

    // Mostrar enlace al panel de admin si el rol es 'admin'
    const adminPanelLink = document.getElementById('admin-panel-link');
    if (user.role === 'admin') {
        adminPanelLink.style.display = 'block';
    }

    // Funcionalidad de cerrar sesión
    const logoutBtn = document.getElementById('logout-btn');
    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    });

    // Si todo está bien, mostrar los módulos
    showModules();
});


// --- Lógica de la Aplicación de Quiz ---

const modules = {
    "General": {
        category: "Fármaco",
        description: "Incluye todas las preguntas de todos los módulos para un estudio completo.",
        questions: [
            { question: "Pregunta de ejemplo de Generalidades 1", answers: [{ text: "Respuesta A", correct: true }, { text: "Respuesta B", correct: false }] },
            { question: "Pregunta de ejemplo de Generalidades 2", answers: [{ text: "Respuesta A", correct: true }, { text: "Respuesta B", correct: false }] },
            { question: "Pregunta de ejemplo del Modulo 1", answers: [{ text: "Correcta", correct: true }, { text: "Incorrecta", correct: false }] },
        ]
    },
    // ... (resto de módulos como estaban)
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

    Array.from(answerButtonsElement.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

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
