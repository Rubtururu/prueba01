// Game variables
let money = 10;
let production = 1;
let productionCost = 10;
let businesses = [
    { name: "Lemonade Stand", cost: 100, rate: 0.1 },
    { name: "Gas Station", cost: 1000, rate: 1 },
    { name: "Restaurant", cost: 10000, rate: 10 },
    { name: "Hotel", cost: 100000, rate: 100 }
];
let upgrades = [
    { name: "Better Tools", cost: 1000, rate: 2 },
    { name: "Automation", cost: 10000, rate: 10 },
    { name: "Advanced Marketing", cost: 100000, rate: 100 }
];

// Load game state from local storage
function loadGameState() {
    const gameState = JSON.parse(localStorage.getItem("gameState"));
    if (gameState) {
        money = gameState.money;
        production = gameState.production;
        productionCost = gameState.productionCost;
        businesses = gameState.businesses;
        upgrades = gameState.upgrades;
    }
}

// Save game state to local storage
function saveGameState() {
    const gameState = {
        money,
        production,
        productionCost,
        businesses,
        upgrades
    };
    localStorage.setItem("gameState", JSON.stringify(gameState));
}

// Buy production function
function buyProduction() {
    if (money >=
