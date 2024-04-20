import React from "react";
import { useHistory } from "react-router-dom";
import BlogCard from "./BlogCard";
import "./blog.css";

const Blog = () => {
  const history = useHistory();

  const navigateToGame = (gameRoute) => {
    if (gameRoute === "game1") {
      // If the game is Legal Legends Quiz Show, navigate to its route
      history.push(`/games/${gameRoute}`);
    } else {
      // For other games, open the respective external website links
      switch (gameRoute) {
        case "game2":
          window.open("https://ambitious29.github.io/MemoryGame/", "_blank");
          break;
        case "game3":
          window.open("https://ambitious29.github.io/crossUpdate/", "_blank");
          break;
        case "game4":
          window.open("https://drive.google.com/file/d/1itHiXtKNtJ0oUUYJmmzc4Ac4ky1zTr55/view?usp=drivesdk", "_blank");
          break;
        case "game5":
          window.open("https://drive.google.com/file/d/1dllUqpGJFONbgXB4Q9cHYz046P0nyXH3/view?usp=drivesdk", "_blank");
          break;
        case "game6":
          window.open("https://drive.google.com/file/d/1HdjhHizTw6IcgauEnfMMXfcw-lBk4Onf/view?usp=sharing", "_blank");
          break;
        default:
          break;
      }
    }
  };


  return (
    <>
      <div className="game-options">
        {/* First Game */}
        <BlogCard
          title="Legal Legends Quiz Show"
          onClick={() => navigateToGame("game1")}
        />

        {/* Other Games - External Links */}
        <BlogCard
          title="Memory Match Game"
          onClick={() => navigateToGame("game2")}
        />

        <BlogCard title="Crossword" onClick={() => navigateToGame("game3")} />

        <BlogCard
          title="Interactive India"
          onClick={() => navigateToGame("game4")}
        />
        <BlogCard
          title="Understanding Farmer's Laws"
          onClick={() => navigateToGame("game5")}
        />
        <BlogCard
          title="Equality Explorers"
          onClick={() => navigateToGame("game6")}
        />
      </div>
    </>
  );
};

export default Blog;
