let scene, camera, renderer;
let bird, pipes = [];
let clock, deltaTime;
let gravity = -0.01, birdVelocity = 0.1;
let pipeSpeed = 0.05;
let score = 0;
let scoreDiv = document.getElementById('score');
let gameOverDiv = document.getElementById('game-over');
let restartBtn = document.getElementById('restart-btn');
let isGameOver = false;
let difficultyLevel = 1;
let baseGap = 3;

init();
animate();

function init() {
    // Initialisation de la scène
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Création de l'oiseau
    let birdGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    let birdMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    bird = new THREE.Mesh(birdGeometry, birdMaterial);
    bird.position.set(0, 0, -5);
    bird.boundingBox = new THREE.Box3().setFromObject(bird);
    scene.add(bird);

    // Création des tuyaux
    createPipes();

    // Position de la caméra
    camera.position.z = 5;

    // Horloge pour la gestion du temps
    clock = new THREE.Clock();
    window.addEventListener('keydown', onKeyDown, false);
    window.addEventListener('mousedown', onMouseDown, false);
}

function createPipes() {
    // Supprimer tous les tuyaux existants
    pipes.forEach(pipe => {
        scene.remove(pipe.top);
        scene.remove(pipe.bottom);
    });
    pipes = [];

    // Recréer les tuyaux à partir de zéro
    for (let i = 0; i < 5; i++) {
        createPipe(i * 10 + 20);
    }
}

function createPipe(x) {
    let pipeTopGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    let pipeBottomGeometry = new THREE.CylinderGeometry(1, 1, 10, 32);
    let pipeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    let pipeTop = new THREE.Mesh(pipeTopGeometry, pipeMaterial);
    let pipeBottom = new THREE.Mesh(pipeBottomGeometry, pipeMaterial);

    let gap = baseGap - (difficultyLevel * 0.2); // Réduire l'écart au fur et à mesure que la difficulté augmente
    gap = Math.max(gap, 1.5); // Assurer un écart minimum
    let offset = Math.random() * 5 - 2.5;

    pipeTop.position.set(x, offset + gap + 5, -5);
    pipeBottom.position.set(x, offset - gap - 5, -5);

    pipeTop.boundingBox = new THREE.Box3().setFromObject(pipeTop);
    pipeBottom.boundingBox = new THREE.Box3().setFromObject(pipeBottom);

    scene.add(pipeTop);
    scene.add(pipeBottom);

    pipes.push({ top: pipeTop, bottom: pipeBottom, passed: false });
}

function onKeyDown(event) {
    birdVelocity = 0.2;
}

function onMouseDown(event) {
    birdVelocity = 0.2;
}

function resetGame() {
    isGameOver = false;
    gameOverDiv.style.display = 'none';
    restartBtn.style.display = 'none';
    bird.position.set(0, 0, -5);
    birdVelocity = 0.1;
    score = 0;
    difficultyLevel = 1;
    pipeSpeed = 0.05;
    scoreDiv.textContent = "Score: " + score;
    createPipes();
}

function animate() {
    if (!isGameOver) {
        requestAnimationFrame(animate);
    }

    deltaTime = clock.getDelta();

    // Mise à jour de la position de l'oiseau
    birdVelocity += gravity;
    bird.position.y += birdVelocity;
    bird.boundingBox.setFromObject(bird);

    // Vérifier si l'oiseau est tombé en dehors de l'écran
    if (bird.position.y < -10 || bird.position.y > 10) {
        gameOver();
    }

    // Déplacement des tuyaux
    pipes.forEach(pipe => {
        pipe.top.position.x -= pipeSpeed;
        pipe.bottom.position.x -= pipeSpeed;

        pipe.top.boundingBox.setFromObject(pipe.top);
        pipe.bottom.boundingBox.setFromObject(pipe.bottom);

        if (pipe.top.position.x < -10) {
            pipe.top.position.x += 50;
            pipe.bottom.position.x += 50;
            let offset = Math.random() * 5 - 2.5;
            let gap = baseGap - (difficultyLevel * 0.2); // Réduire l'écart au fur et à mesure que la difficulté augmente
            gap = Math.max(gap, 1.5); // Assurer un écart minimum
            pipe.top.position.y = offset + gap + 5;
            pipe.bottom.position.y = offset - gap - 5;
            pipe.passed = false;
        }

        // Détection des collisions avec les boîtes englobantes
        if (bird.boundingBox.intersectsBox(pipe.top.boundingBox) || bird.boundingBox.intersectsBox(pipe.bottom.boundingBox)) {
            gameOver();
        }

        // Augmenter le score si l'oiseau passe entre les tuyaux
        if (!pipe.passed && pipe.top.position.x < bird.position.x) {
            pipe.passed = true;
            score++;
            scoreDiv.textContent = "Score: " + score;

            // Augmenter la difficulté en fonction du score
            if (score % 3 === 0) { // Augmenter la difficulté tous les 3 points
                difficultyLevel++;
                pipeSpeed += 0.01; // Augmenter la vitesse des tuyaux
            }
        }
    });

    renderer.render(scene, camera);
}

function gameOver() {
    isGameOver = true;
    gameOverDiv.style.display = 'block';
    restartBtn.style.display = 'block';
}

function restartGame() {
    resetGame();
    animate();
}
