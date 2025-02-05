let gameArea = document.getElementById("game-area");
let gameHeader = document.getElementById("game-header");

function startGame(gameNumber) {
  gameArea.innerHTML = "";

  switch (gameNumber) {
    case 1:
      setupValentinesQuiz();
      break;
    case 2:
      setupHeartTap();
      break;
    case 3:
      setupMemoryGame();
      break;

    case 4:
      setupMazeRunner();
      break;

    case 5:
      setupDragAndDrop();
      break;
    case 6:
      setupValentinesQuestion();
      break;
  }
}
function setupValentinesQuestion() {
  gameHeader.innerHTML = "";
  const art = document.getElementsByClassName("art");
  art.innerHTML = "";
  dialogue(
    [
      { line: "ONE LAST GAME OKAY???", duration: 3 },
      { line: "ARE YOU READY??", duration: 6 },
      { line: "THIS ONE IS REALLY HARD", duration: 9 },
      { line: "PROBABLY THE HARDEST THING YOU'LL HAVE TO DO", duration: 12 },
      { line: "OKAAaaaAAAAaaY", duration: 15 },
      { line: "HERE WE GOOO", duration: 18 },
      { line: "🥁", duration: 21 },
    ],
    gameArea
  );
  setTimeout(() => {
    let count = 0;
    gameArea.innerHTML = `
      
      <p>Will you be my Valentine?</p>
                <button id="yes-btn" class="game-btn" onclick="completeGame(6)">Yes</button>
                <button id="no-btn"class="game-btn"">No</button><p id="lol-she-said-no"></p>
      `;
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    noButton.onclick = () => {
      const lines = [
        "",
        "",
        "",
        "",
        "how did you even find...",
        "nvm",
        "lol what are you doing",
        "...",
        "are you color blind??",
        "how about this?",
        "is this better?",
        "okaaaay",
        "i'll just wait..",
        "...",
        "...",
        "...",
        "cmonnnnn",
        "plzzz",
        "plzzzzzzzzzzzzz",
      ];
      console.log({ count });
      if (count === 1) {
        noButton.style.width = "90%";
      }
      if (count === 2) {
        noButton.style.width = "10%";
      }
      if (count === 3) {
        noButton.style.position = "fixed";
        noButton.style.left = "-10px";
        noButton.style.top = "-10px";
      }
      if (count === 4) {
        noButton.style.position = "relative";
        noButton.style.width = "100%";
        noButton.style.left = "0px";
        noButton.style.top = "0px";
      }
      if (count === 9) {
        yesButton.style.background = "green";
      }
      if (count > 3 && count < lines.length) {
        const comment = document.getElementById("lol-she-said-no");
        comment.innerHTML = lines[count];
      }

      count++;
    };
  }, 25000);
}

function setupValentinesQuiz() {
  gameHeader.innerHTML = "";
  dialogue(
    [
      { line: "loading...", duration: 0 },
      {
        line: "You must complete a series of challenges in order to unlock your SPECIAL prize at the end",
        duration: 2,
      },
      { line: "If you don't complete them you'll...", duration: 6 },
      { line: "DIEEEEEEEEEEEEEE", duration: 9 },
      { line: "", duration: 12 },
      { line: "jk you'll just have to start over", duration: 15 },
      { line: "anywayssss get ready!", duration: 18 },
    ],
    gameArea
  );
  renderAfterDelay(intro, 20);
  function intro() {
    let count = 0;
    const lines = [
      "are you ready?",
      "are you sure?",
      "okay Jaz get ready",
      "here's your first and most difficult challenge!",
    ];
    gameArea.innerHTML = `
    <p id="game-instr">${lines[count]}</p>
    <button id="yes-btn" class="game-btn">Yes</button>
    <button id="no-btn" class="game-btn">No</button>
    <p id="comment"></p>
    `;
    const gameInstr = document.getElementById("game-instr");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    noButton.onclick = () => {
      const comment = document.getElementById("comment");
      comment.innerHTML = "lol nice try";
    };
    yesButton.onclick = () => {
      count++;
      gameInstr.innerHTML = lines[count];
      if (count > 3) {
        game();
      }
    };
  }
  function game() {
    gameHeader.innerHTML = "";
    gameArea.innerHTML = `<p>What day is Valentine's Day?</p>
                <button class="game-btn" onclick="completeGame(1)">Feb 14</button>
                <button id="jaz-bday" class="game-btn">Feb 19</button>
                <button id="nicky-bday" class="game-btn" >April 11</button>
                <button id="wrong-day" class="game-btn" >March 14</button>
                <p id="comment"></>
                
                `;
    const jazBdayAnswer = document.getElementById("jaz-bday");
    const nickyBdayAnswer = document.getElementById("nicky-bday");
    const wrongDayAnswer = document.getElementById("wrong-day");
    const comment = document.getElementById("comment");
    jazBdayAnswer.onclick = () => {
      comment.innerHTML = "noooo that's your birhday";
    };
    nickyBdayAnswer.onclick = () => {
      comment.innerHTML = "noooooo that's Nicky's birthday";
    };
    wrongDayAnswer.onclick = () => {
      comment.innerHTML = "are you even trying??";
    };
  }
}
function setupHeartTap() {
  gameArea.innerHTML = `<p id="heart-tap-instr">Tap the heart as many times as you can!</p><div  id="heart"/>`;
  let count = 0;
  const heartTapInstr = document.getElementById("heart-tap-instr");
  const heartButton = document.getElementById("heart");
  heartButton.onclick = function () {
    count++;
    heartButton.style.width = `${10 * count + 10}px`;

    if (count >= 100) completeGame(2);
    if (count === 5) heartTapInstr.innerHTML = "Go on keep going";
    if (count === 10) heartTapInstr.innerHTML = "You can do better than that";
    if (count === 20) heartTapInstr.innerHTML = "CMON KEEP GOING";
    if (count === 30) heartTapInstr.innerHTML = "GOOOO";
    if (count === 40) {
      heartTapInstr.innerHTML = "TAP TAP TAP";
    }
    if (count === 45) {
      heartTapInstr.innerHTML = "lol im over here now";
      heartTapInstr.style.position = "absolute";
      heartTapInstr.style.zIndex = 10;
      heartTapInstr.style.color = "aliceblue";
    }
    if (count === 50) heartTapInstr.innerHTML = "wow this is pretty long...";
    if (count === 60) heartTapInstr.innerHTML = "is there an end to this";
    if (count === 70) heartTapInstr.innerHTML = "...";
    if (count === 80) heartTapInstr.innerHTML = "yeahhhh this looks...";
    if (count === 85) heartTapInstr.innerHTML = "oh wait..";
    if (count === 90) heartTapInstr.innerHTML = "GO GO GO";
  };
}
function setupMemoryGame() {
  dialogue(
    [
      { line: "wow that was a lot", duration: 3 },
      { line: "lets hope the next game is easier??", duration: 6 },
    ],
    gameArea
  );
  setTimeout(() => {
    gameArea.innerHTML = `<p>Find the matching hearts!</p>
                                  <div id="memory-game" class="grid"></div>`;
    let gameBoard = document.getElementById("memory-game");
    let icons = ["❤️", "💖", "💘", "💝"];
    let cards = [...icons, ...icons]; // Duplicate for matching pairs
    cards.sort(() => Math.random() - 0.5); // Shuffle

    let flippedCards = [];
    let matchedPairs = 0;

    cards.forEach((icon, index) => {
      let card = document.createElement("div");
      card.classList.add("card");
      card.dataset.icon = icon;
      card.innerHTML = "❓";
      card.onclick = function () {
        if (flippedCards.length < 2 && !this.classList.contains("matched")) {
          this.innerHTML = this.dataset.icon;
          flippedCards.push(this);

          if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
          }
        }
      };
      gameBoard.appendChild(card);
    });
    function checkMatch() {
      if (flippedCards[0].dataset.icon === flippedCards[1].dataset.icon) {
        flippedCards.forEach((card) => card.classList.add("matched"));
        matchedPairs++;
        if (matchedPairs === icons.length) completeGame(3);
      } else {
        flippedCards.forEach((card) => (card.innerHTML = "❓"));
      }
      flippedCards = [];
    }
  }, 10000);
}

function setupDragAndDrop() {
  gameArea.innerHTML = `
                <p>Hmmm looks like this key opens up the treasure chest..</p>
                <div id="treasure-box" class="treasure-box"> 💗</div>
                <div id="draggable-heart" class="draggable">🔑</div>
            `;
  const draggable = document.getElementById("draggable-heart");
  const droppable = document.getElementById("treasure-box");

  let startX, startY;

  draggable.addEventListener("touchstart", (e) => {
    // Get initial touch coordinates
    startX = e.targetTouches[0].pageX - draggable.offsetLeft;
    startY = e.targetTouches[0].pageY - draggable.offsetTop;
    draggable.style.position = "absolute";
  });
  draggable.addEventListener("touchmove", (e) => {
    var touchLocation = e.targetTouches[0];
    // assign box new coordinates based on the touch.
    draggable.style.left = touchLocation.pageX - startX + "px";
    draggable.style.top = touchLocation.pageY - startY + "px";
  });

  draggable.addEventListener("touchend", (e) => {
    var x = parseInt(draggable.style.left);
    var y = parseInt(draggable.style.top);

    // // Check if dropped over the droppable area
    const dropRect = droppable.getBoundingClientRect();
    const draggableRect = draggable.getBoundingClientRect();

    if (
      draggableRect.right > dropRect.left &&
      draggableRect.left < dropRect.right &&
      draggableRect.bottom > dropRect.top &&
      draggableRect.top < dropRect.bottom
    ) {
      // Handle drop action here
      droppable.innerHTML = "💖 Opened!";
      droppable.classList.add("success");
      setTimeout(() => {
        completeGame(5);
      }, 2000);
    }
  });
}

function setupMazeRunner() {
  dialogue(
    [
      { line: "nice! you're good at this", duration: 2 },
      { line: "here's a key 🔑.. ", duration: 4 },
      { line: "...to uhhh...", duration: 6 },
      { line: "...somewhere???", duration: 8 },
      { line: "OH!!", duration: 10 },
      { line: "take it to that treasure chest 🎁 over there! ", duration: 12 },
    ],
    gameArea
  );
  setTimeout(() => {
    // Maze data structure: 0 = free space, 1 = wall, 2 = goal
    gameArea.innerHTML = `<p>Swipe to navigate through the maze!</p><div id="maze"/>`;
    const mazeArray = [
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0],
      [1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 0],
      [1, 0, 0, 0, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 2], // 2 represents the goal
    ];

    let playerPosition = { x: 0, y: 0 }; // Player starts at the top-left corner

    // Select the maze container from the DOM
    const maze = document.getElementById("maze");
    const player = document.createElement("div");
    player.classList.add("player"); // Player element
    player.textContent = "🔑";
    createMaze();
    // Create the maze HTML structure
    function createMaze() {
      maze.innerHTML = ""; // Reset the maze before drawing
      for (let row = 0; row < mazeArray.length; row++) {
        for (let col = 0; col < mazeArray[row].length; col++) {
          const cell = document.createElement("div");
          cell.classList.add("maze-cell");
          if (mazeArray[row][col] === 1) cell.classList.add("wall"); // Wall
          if (mazeArray[row][col] === 2) {
            cell.classList.add("goal");
            cell.textContent = "🎁";
          } // Goal
          maze.appendChild(cell);
        }
      }
    }

    // Update the player's position in the maze
    function updatePlayerPosition() {
      const playerCell =
        maze.children[
          playerPosition.y * mazeArray[0].length + playerPosition.x
        ];
      playerCell.appendChild(player); // Place player in the corresponding cell
    }

    // Function to move the player based on the direction
    function movePlayer(direction) {
      let newX = playerPosition.x;
      let newY = playerPosition.y;

      switch (direction) {
        case "up":
          newY -= 1;
          break;
        case "down":
          newY += 1;
          break;
        case "left":
          newX -= 1;
          break;
        case "right":
          newX += 1;
          break;
      }

      // Ensure the new position is within bounds and not a wall
      if (
        newX >= 0 &&
        newX < mazeArray[0].length &&
        newY >= 0 &&
        newY < mazeArray.length &&
        mazeArray[newY][newX] !== 1
      ) {
        playerPosition.x = newX;
        playerPosition.y = newY;
        updatePlayerPosition(); // Update the player's position in the maze
      }

      // Check if the player has reached the goal
      if (mazeArray[playerPosition.y][playerPosition.x] === 2) {
        alert("You reached the goal!"); // Display win message
        completeGame(4);
      }
    }

    // Touch events for swipe gestures (mobile)
    let touchStartX = 0;
    let touchStartY = 0;

    maze.addEventListener("touchstart", (event) => {
      touchStartX = event.touches[0].pageX;
      touchStartY = event.touches[0].pageY;
    });

    maze.addEventListener("touchmove", (event) => {
      const touchEndX = event.touches[0].pageX;
      const touchEndY = event.touches[0].pageY;
      const diffX = touchEndX - touchStartX;
      const diffY = touchEndY - touchStartY;

      // Swipe detection logic (horizontal vs vertical swipes)
      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          movePlayer("right"); // Swipe right
        } else {
          movePlayer("left"); // Swipe left
        }
      } else {
        if (diffY > 0) {
          movePlayer("down"); // Swipe down
        } else {
          movePlayer("up"); // Swipe up
        }
      }

      // Prevent default to avoid scrolling during swipe
      event.preventDefault();
    });

    // Create the maze and place the player
    updatePlayerPosition(); // Place the player in the initial cell
  }, 15000);
}

/* Track Completed Games & Unlock Surprise */
function completeGame(gameNumber) {
  if (gameNumber === 6) {
    gameArea.style.display = "none";
    document.getElementById("surprise").style.display = "block";
  } else {
    startGame(gameNumber + 1);
  }
}
function dialogue(lines, element) {
  for (const line of lines) {
    setTimeout(() => {
      element.innerHTML = line.line;
    }, line.duration * 1000);
  }
}

function renderAfterDelay(func, delay) {
  setTimeout(() => {
    func();
  }, delay * 1000);
}
