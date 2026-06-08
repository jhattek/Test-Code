const { useState, useEffect } = React;

const GRID_SIZE = 20;

function createFood(snake) {
  let food;

  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  } while (
    snake.some(
      segment =>
        segment.x === food.x &&
        segment.y === food.y
    )
  );

  return food;
}

function App() {
  const [snake, setSnake] = useState([
    { x: 10, y: 10 }
  ]);

  const [food, setFood] = useState({
    x: 5,
    y: 5
  });

  const [direction, setDirection] = useState({
    x: 0,
    y: -1
  });

  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1)
            setDirection({ x: 0, y: -1 });
          break;

        case "ArrowDown":
          if (direction.y !== -1)
            setDirection({ x: 0, y: 1 });
          break;

        case "ArrowLeft":
          if (direction.x !== 1)
            setDirection({ x: -1, y: 0 });
          break;

        case "ArrowRight":
          if (direction.x !== -1)
            setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const gameLoop = setInterval(() => {
      moveSnake();
    }, 150);

    return () => clearInterval(gameLoop);
  });

  const moveSnake = () => {
    setSnake((currentSnake) => {
      const head = currentSnake[0];

      const newHead = {
        x: head.x + direction.x,
        y: head.y + direction.y
      };

      if (
        newHead.x < 0 ||
        newHead.x >= GRID_SIZE ||
        newHead.y < 0 ||
        newHead.y >= GRID_SIZE
      ) {
        setGameOver(true);
        return currentSnake;
      }

      if (
        currentSnake.some(
          segment =>
            segment.x === newHead.x &&
            segment.y === newHead.y
        )
      ) {
        setGameOver(true);
        return currentSnake;
      }

      const newSnake = [
        newHead,
        ...currentSnake
      ];

      if (
        newHead.x === food.x &&
        newHead.y === food.y
      ) {
        setScore((s) => s + 1);
        setFood(createFood(newSnake));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  };

  const restartGame = () => {
    const startSnake = [
      { x: 10, y: 10 }
    ];

    setSnake(startSnake);
    setFood(createFood(startSnake));
    setDirection({ x: 0, y: -1 });
    setScore(0);
    setGameOver(false);
  };

  const cells = [];

  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      let className = "cell";

      if (
        snake.some(
          segment =>
            segment.x === x &&
            segment.y === y
        )
      ) {
        className += " snake";
      }

      if (
        food.x === x &&
        food.y === y
      ) {
        className += " food";
      }

      cells.push(
        <div
          key={`${x}-${y}`}
          className={className}
        />
      );
    }
  }

  return (
    <div className="container">
      <h1>🐍 Snake Game</h1>

      <h2>Punkte: {score}</h2>

      <div className="board">
        {cells}
      </div>

      {gameOver && (
        <>
          <div className="game-over">
            Game Over!
          </div>

          <button onClick={restartGame}>
            Neu starten
          </button>
        </>
      )}
    </div>
  );
}

const root =
  ReactDOM.createRoot(
    document.getElementById("root")
  );

root.render(<App />);