let arrayContainer = document.getElementById("array-container");
let btns = Array.from(document.getElementsByClassName("btn"));
let arraySizeHandler = document.getElementById("sze");
let startAlgo = document.getElementById("start");
let speed = document.getElementById("spd");
let algoName = "";

let arraySize = arraySizeHandler.value * 2 + 2;

let sortSpeed;
let arrayBarHeights = [];
let arrayBars;
let delay = 0;
let i, j;

window.onload = () => {
  generateArray();
};

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateArray() {
  arrayContainer.innerHTML = "";
  arrayBarHeights = [];

  for (let index = 0; index < arraySize; index++) {
    arrayBarHeights.push(randomIntFromInterval(10, 600));

    arrayBars = document.createElement("div");
    arrayBars.style.height = `${arrayBarHeights[index]}px`;
    arrayBars.style.width = `100px`;
    arrayBars.style.margin = `0px 1px`;
    arrayBars.style.backgroundColor = `#ff6e40`;
    arrayBars.classList.add("arraybar");

    arrayContainer.appendChild(arrayBars);
  }
}

function disableActions() {
  btns.forEach((element) => {
    element.classList.add("disabled");
    element.disabled = true;
  });

  arraySizeHandler.disabled = true;
  arraySizeHandler.classList.add("disabled");

  speed.disabled = true;
  speed.classList.add("disabled");

  startAlgo.disabled = true;
  startAlgo.classList.add("disabled");
}

btns.forEach((element) => {
  element.addEventListener("click", (event) => {
    algoName = event.target.innerText;
  });
});

startAlgo.addEventListener("click", () => {
  initialState();

  switch (algoName) {
    case "Bubble Sort":
      bubbleSort();
      break;

    case "Selection Sort":
      selectionSort();
      break;

    case "Insertion Sort":
      insertionSort();
      break;

    case "Merge Sort":
      mergeSort();
      break;

    case "Quick Sort":
      // quickSort();
      alert("Quick Sort is under consrtuction!");
      break;

    case "Heap Sort":
      heapSort();
      break;

    default:
      alert("First, Select algorithm to visualize!");
      break;
  }
});
