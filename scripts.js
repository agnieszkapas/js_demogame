// creating level
let levelWidth = 600;
let levelHeight = 600;
let level = document.getElementById('level');
level.style.width = levelWidth + 'px';
level.style.height = levelHeight + 'px';

// creating ship
let shipX = 300;
let shipY = 500;
let ship = document.createElement('img');
ship.classList.add('ship');
ship.setAttribute('src', 'ship.png');
ship.style.left = shipX + 'px';
ship.style.top = shipY + 'px';
level.appendChild(ship);

// creating star #1
let star1X = 100;
let star1Y = 300;
let star1 = document.createElement('span');
star1.classList.add('star');
star1.style.left = star1X + 'px';
star1.style.top = star1Y + 'px';
level.appendChild(star1);
// creating star #2
let star2X = 300;
let star2Y = 400;
let star2 = document.createElement('span');
star2.classList.add('star');
star2.style.left = star2X + 'px';
star2.style.top = star2Y + 'px';
level.appendChild(star2);
// creating star #3
let star3X = 500;
let star3Y = 500;
let star3 = document.createElement('span');
star3.classList.add('star');
star3.style.left = star3X + 'px';
star3.style.top = star3Y + 'px';
level.appendChild(star3);

// creating enemy
let enemyX = 300;
let enemyY = 60;
let enemy = document.createElement('img');
enemy.classList.add('enemy');
enemy.setAttribute('src', 'enemy-1.png');
enemy.style.left = enemyX + 'px';
enemy.style.top = enemyY + 'px';
level.appendChild(enemy);

// animating objects
setInterval(() => {
    // star
    star1Y += 2;
    star1Y = star1Y >= levelHeight ? 0 : star1Y;
    star1.style.top = star1Y + 'px';
    // star
    star2Y += 2;
    star2Y = star2Y >= levelHeight ? 0 : star2Y;
    star2.style.top = star2Y + 'px';
    // star
    star3Y += 2;
    star3Y = star3Y >= levelHeight ? 0 : star3Y;
    star3.style.top = star3Y + 'px';

    // enemy
    enemyY += 1;
    enemyY = enemyY >= levelHeight - 40 ? 0 : enemyY;
    enemy.style.top = enemyY + 'px';
}, 16);

// handling keyboard
document.addEventListener('keydown', (e) => {
    
    // updating ship position
    if (e.keyCode === 37) {
        shipX -= 20;
    } else if (e.keyCode === 39) {
        shipX += 20;
    } else if (e.keyCode === 38) {
        shipY -= 20;
    } else if (e.keyCode === 40) {
        shipY += 20;
    }

    // checking if ship didn't go out of level
    shipX = shipX <= 0 ? 0 : shipX;
    shipX = shipX >= levelWidth - 40 ? levelWidth - 40 : shipX;
    shipY = shipY <= 0 ? 0 : shipY;
    shipY = shipY >= levelHeight - 40 ? levelHeight - 40 : shipY;

    // updating ship picture
    ship.style.left = shipX + 'px';
    ship.style.top = shipY + 'px';
});





