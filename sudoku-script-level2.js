let sudoku1 = [
  [3, 8, 7, 4, 9, 1, 6, 2, 5],
  [2, 4, 1, 5, 6, 8, 3, 7, 9],
  [5, 6, 9, 3, 2, 7, 4, 1, 8],
  [7, 5, 8, 6, 1, 9, 2, 3, 4],
  [1, 2, 3, 7, 8, 4, 5, 9, 6],
  [4, 9, 6, 2, 5, 3, 1, 8, 7],
  [9, 3, 4, 1, 7, 6, 8, 5, 2],
  [6, 7, 5, 8, 3, 2, 9, 4, 1],
  [8, 1, 2, 9, 4, 5, 7, 6, 3],
];

let sudoku2 = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
];

let sudoku3 = [
  [7, 3, 5, 6, 1, 4, 8, 9, 2],
  [8, 4, 2, 9, 7, 3, 5, 6, 1],
  [9, 6, 1, 2, 8, 5, 3, 7, 4],
  [2, 8, 6, 3, 4, 9, 1, 5, 7],
  [4, 1, 3, 8, 5, 7, 9, 2, 6],
  [5, 7, 9, 1, 2, 6, 4, 3, 8],
  [1, 5, 7, 4, 9, 2, 6, 8, 3],
  [6, 9, 4, 7, 3, 8, 2, 1, 5],
  [3, 2, 8, 5, 6, 1, 7, 4, 9],
];

let sudoku4 = [
  [8, 6, 1, 7, 9, 4, 3, 5, 2],
  [3, 5, 2, 1, 6, 8, 7, 4, 9],
  [4, 9, 7, 2, 5, 3, 1, 8, 6],
  [2, 1, 8, 9, 7, 5, 6, 3, 4],
  [6, 7, 5, 3, 4, 1, 9, 2, 8],
  [9, 3, 4, 6, 8, 2, 5, 1, 7],
  [5, 2, 6, 8, 1, 9, 4, 7, 3],
  [7, 4, 3, 5, 2, 6, 8, 9, 1],
  [1, 8, 9, 4, 3, 7, 2, 6, 5],
];
let sudokuId;
let pass;
let pass2 = [];

window.onload = function () {
  pickRandomSudoku();
  random(40, sudoku);
  fillEmptySudoku(sudoku);
};

//remove numbers from table
const random = (notVisible, sudoku) => {
  for (let i = 0; i < notVisible; i++) {
    let row = Math.floor(Math.random() * 9);
    let col = Math.floor(Math.random() * 9);

    if (sudoku[row][col] !== null) {
      sudoku[row][col] = null;
    } else {
      notVisible++;
    }
  }
  sudoku;
};

//map the matrix values into the html table
const fillEmptySudoku = (sudoku) => {
  let table = document.getElementById("table");

  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      if (sudoku[i][j] === null) {
        table.rows[i].cells[j].setAttribute("contenteditable", "true");
      } else {
        table.rows[i].cells[j].innerHTML = sudoku[i][j];
      }
    }
  }
  //restrict inputs to one number only
  table.addEventListener("input", function (e) {
    e.target.value = e.data;
  });
};

//Pick random table between sudoku1, sudoku2,sudoku3
const pickRandomSudoku = () => {
  let sudokuBoards = [sudoku1, sudoku2, sudoku3, sudoku4];

  // get a random number in the length of the array
  num = Math.floor(Math.random() * sudokuBoards.length);
  sudoku = sudokuBoards[num]; //choose element at random index inside the array

  //To identify which randomly choosen sudoku is:
  if (sudoku == sudoku1) sudokuId = "sudoku1";
  if (sudoku == sudoku2) sudokuId = "sudoku2";
  if (sudoku == sudoku3) sudokuId = "sudoku3";
  if (sudoku == sudoku4) sudokuId = "sudoku4";
  // console.log(sudokuId);
  sudoku;
};

//check if final board filled by user is valid
const checkGame = () => {
  let sudoku1 = [
    [3, 8, 7, 4, 9, 1, 6, 2, 5],
    [2, 4, 1, 5, 6, 8, 3, 7, 9],
    [5, 6, 9, 3, 2, 7, 4, 1, 8],
    [7, 5, 8, 6, 1, 9, 2, 3, 4],
    [1, 2, 3, 7, 8, 4, 5, 9, 6],
    [4, 9, 6, 2, 5, 3, 1, 8, 7],
    [9, 3, 4, 1, 7, 6, 8, 5, 2],
    [6, 7, 5, 8, 3, 2, 9, 4, 1],
    [8, 1, 2, 9, 4, 5, 7, 6, 3],
  ];

  let sudoku2 = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  let sudoku3 = [
    [7, 3, 5, 6, 1, 4, 8, 9, 2],
    [8, 4, 2, 9, 7, 3, 5, 6, 1],
    [9, 6, 1, 2, 8, 5, 3, 7, 4],
    [2, 8, 6, 3, 4, 9, 1, 5, 7],
    [4, 1, 3, 8, 5, 7, 9, 2, 6],
    [5, 7, 9, 1, 2, 6, 4, 3, 8],
    [1, 5, 7, 4, 9, 2, 6, 8, 3],
    [6, 9, 4, 7, 3, 8, 2, 1, 5],
    [3, 2, 8, 5, 6, 1, 7, 4, 9],
  ];
  let sudoku4 = [
    [8, 6, 1, 7, 9, 4, 3, 5, 2],
    [3, 5, 2, 1, 6, 8, 7, 4, 9],
    [4, 9, 7, 2, 5, 3, 1, 8, 6],
    [2, 1, 8, 9, 7, 5, 6, 3, 4],
    [6, 7, 5, 3, 4, 1, 9, 2, 8],
    [9, 3, 4, 6, 8, 2, 5, 1, 7],
    [5, 2, 6, 8, 1, 9, 4, 7, 3],
    [7, 4, 3, 5, 2, 6, 8, 9, 1],
    [1, 8, 9, 4, 3, 7, 2, 6, 5],
  ];
  let table = document.getElementById("table");
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      let cellContent = table.rows[i].cells[j].innerHTML;
      if (table.rows[i].cells[j].querySelector("input")) {
        cellContent = table.rows[i].cells[j].querySelector("input").value;
      }

      if (sudokuId == "sudoku1") {
        if (cellContent == sudoku1[i][j]) {
          pass = true;
        } else pass = false;
      }
      if (sudokuId == "sudoku2") {
        if (cellContent == sudoku2[i][j]) {
          pass = true;
        } else pass = false;
      }

      if (sudokuId == "sudoku3") {
        if (cellContent == sudoku3[i][j]) {
          pass = true;
        } else pass = false;
      }
      if (sudokuId == "sudoku4") {
        if (cellContent == sudoku4[i][j]) {
          pass = true;
        } else pass = false;
      }
      pass2.push(pass);
    }
  }
  //to print the final message: win/fail
  if (pass2.includes(false)) {
    failMsg = document.getElementById("fail-msg");
    failMsg.style.display = "inline";
    winMsg = document.getElementById("win-msg");
    winMsg.style.display = "none";
  } else {
    winMsg = document.getElementById("win-msg");
    winMsg.style.display = "inline";
    failMsg = document.getElementById("fail-msg");
    failMsg.style.display = "none";

    //to redirect to the levels page with delay
    window.setTimeout(function () {
      window.open("levels.html", "_blank");
    }, 5000);
  }
};

const clearSudoku = () => {
  let table = document.getElementById("table");
  for (let i = 0; i < table.rows.length; i++) {
    for (let j = 0; j < table.rows[i].cells.length; j++) {
      if (sudoku[i][j] === null) {
        table.rows[i].cells[j].innerHTML =
          '<input type="number" min="1" max="9" step="1" class="inp">';
      }
    }
  }
};

const newGame = () => {
  window.location.href = "sudoku-level2.html";
};
