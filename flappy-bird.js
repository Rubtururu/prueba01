// Obtener el canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Variables del juego
let frames = 0;
let pipes = [];
let score = 0;
let bird = {
  x: 50,
  y: 150,
  width: 40,
  height: 30,
  speed: 0,
  gravity: 0.25,
  jump: 4.6,
  draw: function () {
    ctx.fillStyle = "#ffce56";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  flap: function () {
    this.speed = -this.jump;
  },
  update: function () {
    // Aumentar la velocidad del pájaro
    this.speed += this.gravity;
    // Mover el pájaro
    this.y += this.speed;
    // Verificar si el pájaro ha tocado el suelo
    if (this.y + this.height > canvas.height - foreground.height) {
      this.y = canvas.height - foreground.height - this.height;
      this.speed = 0;
    }
    // Verificar si el pájaro ha tocado el techo
    if (this.y < 0) {
      this.y = 0;
      this.speed = 0;
    }
  }
};

// Objeto pipe
const pipe = {
  width: 52,
  height: 400,
  gap: 100,
  maxYPos: -150,
  dx: 2,
  draw: function () {
    // Cuerpo superior del tubo
    ctx.fillStyle = "#3cb371";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    // Cuerpo inferior del tubo
    ctx.fillRect(this.x, this.y + this.height + this.gap, this.width, -this.height);
  },
  update: function () {
    this.x -= this.dx;
    if (this.x + this.width <= 0) {
      // Eliminar el tubo cuando esté fuera del canvas
      pipes.shift();
    }
    if (this.x + this.width === bird.x) {
      // Incrementar la puntuación cuando el pájaro pase por un tubo
      score++;
    }
    if (bird.x < this.x + this.width && bird.x + bird.width > this.x && bird.y < this.y + this.height || bird.x < this.x + this.width && bird.x + bird.width > this.x && bird.y + bird.height > this.y + this.height + this.gap) {
      // Verificar si el pájaro ha chocado con un tubo
      location.reload();
    }
  }
};

// Puntuación
const scoreText = {
