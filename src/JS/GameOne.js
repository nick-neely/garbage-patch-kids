const canvas = document.getElementById("myCanvas");
const context = canvas.getContext("2d");

const start = document.getElementById("start");

const speed = "200";

const randomInt = (max) => Math.floor(Math.random() * Math.floor(max));
const getInnerCanvas = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const mult = 10;
const useCanvas = {
  offset: {
    x: 10,
    y: 10
  },
  penColor: (color) => (context.fillStyle = color),
  fill: (x, y) => context.fillRect(x * mult, y * mult, mult, mult)
};

const positionMatch = (pos1, pos2) => {
  if (pos1.x == pos2.x && pos1.y == pos2.y) {
    return true;
  }
};
const arrayCheck = (array, item) => {
  for (let x of array) {
    if (x.x == item.x && x.y == item.y) {
      return true;
    }
  }
};

class Food {
  position = {};
  createFood() {
    newFood.position = {
      x: randomInt(canvas.width),
      y: randomInt(canvas.height)
    };
    if (arrayCheck(newSnake.body, newFood.position)) {
      newFood.createFood();
    } else {
      newFood.draw(newFood.position);
    }
  }
  draw(x, y) {
    useCanvas.penColor("red");
    useCanvas.fill(x, y);
  }
}

let changeAmnt;

class Snake {
  head = {
    x: 0,
    y: 0,
    getX(changeAmnt) {
      return this.x + changeAmnt;
    },
    getY() {
      return this.y + changeAmnt;
    }
  };
  tail = (x) => (x = newSnake.body[0]);
  direction = {
    current: "",
    preffix: ""
  };
  body = [];
  length = 5;
  draw({ x, y }) {
    useCanvas.penColor("green");
    newSnake.body.push({ x, y });
    useCanvas.fill(x, y);
  }
  erase({ x, y }) {
    useCanvas.penColor("white");
    newSnake.body.splice(0, 1);
    useCanvas.fill(x, y);
  }
  next = {};
}

const newSnake = new Snake();
const newFood = new Food();

let move = (_) => {
  let crash;

  switch (newSnake.direction.current) {
    case "up":
      newSnake.next = {
        x: newSnake.head.x,
        y: newSnake.head.y - 1
      };
      crash = newSnake.next.y < 0;
      newSnake.direction.preffix = "up";
      break;
    case "down":
      newSnake.next = {
        x: newSnake.head.x,
        y: newSnake.head.y + 1
      };
      crash = newSnake.next.y == canvas.height;
      newSnake.direction.preffix = "down";
      break;
    case "left":
      newSnake.next = {
        x: newSnake.head.x - 1,
        y: newSnake.head.y
      };
      crash = newSnake.next.x == 0;
      newSnake.direction.preffix = "left";
      break;
    case "right":
      newSnake.next = {
        x: newSnake.head.x + 1,
        y: newSnake.head.y
      };
      crash = newSnake.next.x == canvas.width;
      newSnake.direction.preffix = "right";
      break;
  }

  if (crash || arrayCheck(newSnake.body, newSnake.next)) {
    clearInterval(intv);
    startTransition.disabled = "";
    document.getElementById("start").style.visibility = "visible";
    return;
  }

  newSnake.draw((newSnake.head = newSnake.next));
  if (newSnake.grow) {
    newSnake.grow = false;
    score.innerText = Number(score.innerText) + 1;
    newFood.createFood();
  } else {
    newSnake.erase(newSnake.tail());
  }
};

const directional = {
  up:    newSnake.draw({ x:newSnake.head.getX(0),   y:newSnake.head.getY(-1)}),
  down:  newSnake.draw({ x:newSnake.head.getX(0),   y:newSnake.head.getY(1) }),
  left:  newSnake.draw({ x:newSnake.head.getX(-1),  y:newSnake.head.getY(0) }),
  right: newSnake.draw({ x:newSnake.head.getX(1),   y:newSnake.head.getY(0) })
};

const create = (_) => {
  if (newSnake.direction.current in directional) {
    directional[newSnake.direction.current]();
  }
};

onkeydown = (e) => {
  switch (e.keyCode) {
    case 65:
      if (newSnake.direction.preffix == "up" || newSnake.direction.preffix == "down") {
        newSnake.direction.current = "left";
      }
      break;
    case 87:
      if (newSnake.direction.preffix == "left" || newSnake.direction.preffix == "right") {
        newSnake.direction.current = "up";
      }
      break;
    case 68:
      if (newSnake.direction.preffix == "up" || newSnake.direction.preffix == "down") {
        newSnake.direction.current == "right";
      }
      break;
    case 83:
      if (newSnake.direction.preffix == "left" || newSnake.direction.preffix == "right") {
        newSnake.direction.current = "down";
      }
      break;
  }
};

let interval;

start.addEventListener("click", function(){
  console.log("clicked");
  document.getElementById("start").style.visibility = "hidden";
  useCanvas.penColor("white");
  context.fillRect(0, 0, canvas.width, canvas.height);
  newSnake.body = [];

  console.log(getInnerCanvas(0, 100))

  newSnake.head = {
    x: getInnerCanvas(useCanvas.offset.x, useCanvas.width - useCanvas.offset.x),
    y: getInnerCanvas(useCanvas.offset.y, useCanvas.height - useCanvas.offset.y)
  };

  console.log(newSnake.head)

  newSnake.direction.current = directional[randomInt(directional.length)];
  newFood.createFood();

  for (let i = 0; i < newSnake.length; i++) {
    create();
  }

  interval = setInterval(() => {
    if (positionMatch(newSnake.head, newFood.position)) {
      newSnake.grow = true;
      move();
    }
  }, speed);
});