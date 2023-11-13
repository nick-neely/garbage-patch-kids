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
    Food.position = {
      x: randomInt(canvas.width),
      y: randomInt(canvas.height)
    };
    if (arrayCheck(Snake.body, Food.position)) {
      Food.createFood();
    } else {
      Food.draw(Food.position);
    }
  }
  draw(x, y) {
    useCanvas.penColor("red");
    useCanvas.fill(x, y);
  }
}

class Snake {
  head = {
    x: 0,
    y: 0,
    getX() {
      return this.x;
    },
    getY() {
      return this.y;
    }
  };
  tail = (x) => (x = Snake.body[0]);
  direction = {
    current: "",
    preffix: ""
  };
  body = [];
  length = 5;
  draw({ x, y }) {
    useCanvas.penColor("green");
    Snake.body.push({ x, y });
    useCanvas.fill(x, y);
  }
  erase({ x, y }) {
    useCanvas.penColor("white");
    Snake.body.splice(0, 1);
    useCanvas.fill(x, y);
  }
  next = {};
}

let move = (_) => {
  let crash;

  switch (Snake.direction.current) {
    case "up":
      Snake.next = {
        x: Snake.head.x,
        y: Snake.head.y - 1
      };
      crash = Snake.next.y < 0;
      Snake.direction.preffix = "up";
      break;
    case "down":
      Snake.next = {
        x: Snake.head.x,
        y: Snake.head.y + 1
      };
      crash = Snake.next.y == canvas.height;
      Snake.direction.preffix = "down";
      break;
    case "left":
      Snake.next = {
        x: Snake.head.x - 1,
        y: Snake.head.y
      };
      crash = Snake.next.x == 0;
      Snake.direction.preffix = "left";
      break;
    case "right":
      Snake.next = {
        x: Snake.head.x + 1,
        y: Snake.head.y
      };
      crash = Snake.next.x == canvas.width;
      Snake.direction.preffix = "right";
      break;
  }

  if (crash || arrayCheck(Snake.body, Snake.next)) {
    clearInterval(intv);
    startTransition.disabled = "";
    document.getElementById("start").style.visibility = "visible";
    return;
  }

  Snake.draw((Snake.head = Snake.next));
  if (Snake.grow) {
    Snake.grow = false;
    score.innerText = Number(score.innerText) + 1;
    Food.createFood();
  } else {
    Snake.erase(Snake.tail());
  }
};

const directional = {
  up:    Snake.draw({ x:Snake.head.getX(),   y:--Snake.head.getY() }),
  down:  Snake.draw({ x:Snake.head.getX(),   y:++Snake.head.getY() }),
  left:  Snake.draw({ x:--Snake.head.getX(), y:Snake.head.getY()   }),
  right: Snake.draw({ x:++Snake.head.getX(), y:Snake.head.getY()   })
};

const create = (_) => {
  if (Snake.direction.current in directional) {
    directional[Snake.direction.current]();
  }
};

onkeydown = (e) => {
  switch (e.keyCode) {
    case 65:
      if (Snake.direction.preffix == "up" || Snake.direction.preffix == "down") {
        Snake.direction.current = "left";
      }
      break;
    case 87:
      if (Snake.direction.preffix == "left" || Snake.direction.preffix == "right") {
        Snake.direction.current = "up";
      }
      break;
    case 68:
      if (Snake.direction.preffix == "up" || Snake.direction.preffix == "down") {
        Snake.direction.current == "right";
      }
      break;
    case 83:
      if (Snake.direction.preffix == "left" || Snake.direction.preffix == "right") {
        Snake.direction.current = "down";
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
  Snake.body = [];

  console.log(getInnerCanvas(0, 100))

  Snake.head = {
    x: getInnerCanvas(useCanvas.offset.x, useCanvas.width - useCanvas.offset.x),
    y: getInnerCanvas(useCanvas.offset.y, useCanvas.height - useCanvas.offset.y)
  };

  Snake.direction.current = directional[randomInt(directional.length)];
  Food.createFood();

  for (let i = 0; i < Snake.length; i++) {
    create();
  }

  interval = setInterval(() => {
    if (positionMatch(Snake.head, Food.position)) {
      Snake.grow = true;
      move();
    }
  }, speed);
});