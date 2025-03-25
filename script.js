
        const questions = [
            {
                clue: "A Membrane-bound sacs that aid in storage and transport of materials such as lipid droplets in adipose cells (fat cells).",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/cn56514926_1200x.webp",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/images%20(30).jfif",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/Kelvin-Color_scale_Farrey_s_Lighting__Bath.webp",

                ],
                answers: ["vesicles", "vesicle"],
                trivia: "Vesicles act like tiny delivery trucks in a cell, transporting proteins and other molecules. Neurons use vesicles to send neurotransmitters across synapses to communicate with other cells!"
            },
            {
                clue: "This organelle is mainly responsible for protein synthesis.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/1e2b4287bc35a116f2d6a0267c2304b9.jpg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/screenshot-1-4.webp",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/mathematics-19-512.webp",
                ],
                answers: ["ribosome", "ribosomes"],
                trivia: "Ribosomes are so small that thousands can fit inside a single human cell. Despite their size, they are essential for making all the proteins in your body!"
            },
            {
                clue: "A cell that has a large vacuole.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/C28-4893_LOL_preset_ftd-mx-tile-wide-lv-new.jpeg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/articles_41122_359885800020882_1x.jpg",
                ],
                answers: ["plant cell"],
                trivia: "Some plant cells have chloroplasts that allow them to photosynthesize, but did you know not all plant cells do? Root cells lack chloroplasts because they don’t need to perform photosynthesis underground!"
            },
            {
                clue: "A large spherical structure that houses the DNA of the cell.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/nuclear.jpg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/1000_F_931941845_oMEA3OJ6u40L4RkAh54ltarKPK5V5KGL.jpg",

                ],
                answers: ["nucleus"],
                trivia: "The nucleus is like the 'control center' of the cell, but did you know some cells, like red blood cells, eject their nuclei to make room for more oxygen?"
            },
            {
                clue: "This is a protein element of the cytoskeleton that provides rigidity and shape to the cell and facilitates cellular movements.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/images%20(31).jfif",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/istockphoto-1064310652-612x612.jpg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/images%20(32).jfif",

                ],
                answers: ["microtubules"],
                trivia: "Microtubules work like a highway system inside the cell, guiding vesicles and organelles where they need to go. They also form the spindle fibers that help divide chromosomes during mitosis!"
            },

            {
                clue: "A gel-like substance inside the cell that suspends organelles, supports cellular processes, enables transport, and serves as the site for many biochemical reactions.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/images%20(28).jfif",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/istockphoto-1064310652-612x612.jpg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/Plasma_ball.jpeg.webp",

                ],
                answers: ["cytoplasm"],
                trivia: "The cytoplasm is mostly water, but it also contains salts, proteins, and organelles floating inside it!"
            },

            {
                clue: "It is composed of a daughter and mother centriole.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/2009phil10centobv.jpg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/raw%20steak.jfif",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/mathematics-19-512%20(1).webp",

                ],
                answers: ["centrosome", "centrosomes"],
                trivia: "Centrosomes are key for cell division, but interestingly, plant cells don’t have them! Instead, they use other structures to organize their microtubules."
            },

            {
                clue: "It is a rigid structure that provides structural support and shape to the cell.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/jail.jpg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/images%20(29).jfif",

                ],
                answers: ["cell wall"],
                trivia: "The cell wall of some plants is so strong that it can support trees over 300 feet tall! It's made mostly of cellulose, the same material that gives paper its structure."
            },

            {
                clue: "A phospholipid bilayer that separates the cell from its environment and controls the passage of molecules, ions, water, and oxygen into and out of the cell.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/jail.jpg",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/images%20(27).jfif",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/istockphoto-484757150-612x612%20(1).jpg",

                ],
                answers: ["cell membrane", "plasma membrane"],
                trivia: "The cell membrane is so thin (about 5 nanometers) that you’d need around 10,000 of them stacked to match the thickness of a sheet of paper!"
            },

            {
                clue: " A type of cell that does NOT contain chloroplasts and cell walls.",
                images: [
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/A17Q2pxhfnL.png",
                    "https://assets.onecompiler.app/435c94h45/43a58s49j/articles_41122_359885800020882_1x.jpg",

                ],
                answers: ["animal cell"],
                trivia: "Unlike plant cells, animal cells can change shape more easily because they don’t have a rigid cell wall. This flexibility allows immune cells to squeeze through tiny spaces to fight infections!"
            }
        ];
        
        // Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Shuffle questions before starting
shuffleArray(questions);
let currentQuestionIndex = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("clue").textContent = question.clue;
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = '';
    
    question.images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.className = "image";
        imageContainer.appendChild(img);
    });

    document.getElementById("answer-input").value = '';
    document.getElementById("next-btn").disabled = true;
}

function checkAnswer() {
    const question = questions[currentQuestionIndex];
    const userAnswer = document.getElementById("answer-input").value.trim().toLowerCase();
    
    if (question.answers.includes(userAnswer)) {
        document.getElementById("trivia").textContent = question.trivia;
        document.getElementById("overlay-correct").style.display = "flex";
        document.getElementById("next-btn").disabled = false;
    } else {
        document.getElementById("overlay-wrong").style.display = "flex";
    }
}

function closePopup(overlayId) {
    document.getElementById(overlayId).style.display = "none";
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

document.getElementById("answer-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAnswer();
    }
});

// Shuffle and load the first question
shuffleArray(questions);
loadQuestion();


