document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    
    let dino = { x: 50, y: 150, width: 40, height: 40, velocityY: 0, jumping: false };
    let gravity = 1.5;
    let obstacles = [];
    let score = 0;
    let gameOver = false;

    function drawDino() {
        ctx.fillStyle = "green";
        ctx.fillRect(dino.x, dino.y, dino.width, dino.height);
    }

    function drawObstacles() {
        ctx.fillStyle = "red";
        obstacles.forEach(obs => ctx.fillRect(obs.x, obs.y, obs.width, obs.height));
    }

    function update() {
        if (gameOver) return;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawDino();
        drawObstacles();
        dino.y += dino.velocityY;
        dino.velocityY += gravity;
        
        if (dino.y >= 150) {
            dino.y = 150;
            dino.jumping = false;
        }
        
        obstacles.forEach((obs, index) => {
            obs.x -= 5;
            if (obs.x + obs.width < 0) {
                obstacles.splice(index, 1);
                score++;
            }
            
            if (dino.x < obs.x + obs.width && dino.x + dino.width > obs.x && dino.y < obs.y + obs.height && dino.y + dino.height > obs.y) {
                gameOver = true;
                sendScore(score);
                alert("Game Over! Score: " + score);
            }
        });
    }
    
    function jump() {
        if (!dino.jumping) {
            dino.velocityY = -20;
            dino.jumping = true;
        }
    }
    
    function spawnObstacle() {
        obstacles.push({ x: canvas.width, y: 160, width: 20, height: 30 });
    }
    
    function sendScore(score) {
        fetch("http://localhost:3001/save-score", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ score })
        })
        .then(response => response.json())
        .then(data => console.log("Score saved:", data))
        .catch(error => console.error("Error saving score:", error));
    }
    
    document.addEventListener("keydown", (e) => {
        if (e.code === "Space") jump();
    });
    
    setInterval(update, 30);
    setInterval(spawnObstacle, 2000);
});
