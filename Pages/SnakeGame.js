import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const SnakeGame = () => {
  const generateFoodPosition = () => {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return { x, y };
  };
  const [snake, setSnake] = useState([{ x: 0, y: 0 }]);
  const [food, setFood] = useState(generateFoodPosition());
  const [direction, setDirection] = useState("RIGHT");
  const [score, setScore] = useState(0);
  const gridSize = 10;
  const cellSize = Dimensions.get("window").width / gridSize;

  // Define the function before using it

  const updateGame = useCallback(() => {
    // Update snake position based on the current direction
    const newSnake = snake.map((segment) => ({ ...segment }));
    const head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.y -= 1;
        break;
      case "DOWN":
        head.y += 1;
        break;
      case "LEFT":
        head.x -= 1;
        break;
      case "RIGHT":
        head.x += 1;
        break;
    }

    newSnake.unshift(head);

    if (
      head.x < 0 ||
      head.x >= gridSize ||
      head.y < 0 ||
      head.y >= gridSize ||
      isSnakeCollidingWithItself(newSnake)
    ) {
      resetGame();
      return;
    }

    if (head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setFood(generateFoodPosition());
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  }, [snake, food, direction, score]);

  useEffect(() => {
    const gameInterval = setInterval(updateGame, 200);

    return () => clearInterval(gameInterval);
  }, [updateGame]);

  const handleDirectionChange = (newDirection) => {
    // Avoid reversing the snake into itself
    if (
      (newDirection === "UP" && direction !== "DOWN") ||
      (newDirection === "DOWN" && direction !== "UP") ||
      (newDirection === "LEFT" && direction !== "RIGHT") ||
      (newDirection === "RIGHT" && direction !== "LEFT")
    ) {
      setDirection(newDirection);
    }
  };

  const isSnakeCollidingWithItself = (snake) => {
    const head = snake[0];
    return snake
      .slice(1)
      .some((segment) => segment.x === head.x && segment.y === head.y);
  };

  const resetGame = () => {
    setSnake([{ x: 0, y: 0 }]);
    setFood(generateFoodPosition());
    setDirection("RIGHT");
    setScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <View style={styles.grid}>
        {Array.from({ length: gridSize }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {Array.from({ length: gridSize }).map((_, colIndex) => (
              <View
                key={colIndex}
                style={[
                  styles.cell,
                  snake.some(
                    (segment) =>
                      segment.x === colIndex && segment.y === rowIndex
                  )
                    ? styles.snakeSegment
                    : null,
                  food.x === colIndex && food.y === rowIndex
                    ? styles.food
                    : null,
                ]}
              />
            ))}
          </View>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.verticalButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleDirectionChange("UP")}
          >
            <FontAwesomeIcon icon={faArrowUp} size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.horizontalButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleDirectionChange("LEFT")}
          >
            <FontAwesomeIcon icon={faArrowLeft} size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.emptySpace} />
          {/* Gap between left and right buttons */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleDirectionChange("RIGHT")}
          >
            <FontAwesomeIcon icon={faArrowRight} size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.verticalButtons}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => handleDirectionChange("DOWN")}
          >
            <FontAwesomeIcon icon={faArrowDown} size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  scoreText: {
    fontSize: 20,
    marginBottom: 10,
    color: "white",
  },
  grid: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    width: Dimensions.get("window").width / 40,
    height: Dimensions.get("window").width / 40,
    borderWidth: 1,
  },
  snakeSegment: {
    backgroundColor: "green",
  },
  food: {
    backgroundColor: "red",
  },
  button: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 5,
  },
  horizontalButtons: {
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  verticalButtons: {
    flexDirection: "column",
    alignItems: "center",
  },
  iconButton: {
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 5,
  },
  emptySpace: {
    width: 24,
  },
});

export default SnakeGame;
