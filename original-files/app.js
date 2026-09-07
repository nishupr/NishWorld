document.addEventListener("DOMContentLoaded", function () {
   
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 1.5s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);

    
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let stars = Array.from({ length: 100 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2,
        speed: Math.random() * 0.5 + 0.2,
    }));

    function animateStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        stars.forEach((star) => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > canvas.height) star.y = 0;
        });
        requestAnimationFrame(animateStars);
    }
    animateStars();

    
    const goAheadButton = document.getElementById("goAheadButton");
    if (goAheadButton) {
        goAheadButton.addEventListener("click", function () {
            window.location.href = "nextpage.html";
        });
    }
    const gobackButton = document.getElementById("gobackButton");
    if (gobackButton) {
        gobackButton.addEventListener("click", function () {
            window.location.href = "index.html";
        });
    } 
    const gobackkButton = document.getElementById("gobackkButton");
    if (gobackkButton) {
        gobackkButton.addEventListener("click", function () {
            window.location.href = "nextpage.html";
    });
} 
const girlquizButton = document.getElementById("girlquizButton");
    if (girlquizButton) {
        girlquizButton.addEventListener("click", function () {
            window.location.href = "girlquiz.html";
        });
    }
    const boyquizButton = document.getElementById("boyquizButton");
    if (boyquizButton) {
        boyquizButton.addEventListener("click", function () {
            window.location.href = "boyquiz.html";
        });
    }
});