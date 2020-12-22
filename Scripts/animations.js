sortSpeed = 10;

arraySizeHandler.addEventListener("input", (event) => {
  arraySize = event.target.value * 2 + 2;
  generateArray();
});

speed.addEventListener("input", () => {
  switch (speed.value) {
    case "1":
      sortSpeed = 500;
      break;

    case "2":
      sortSpeed = 100;
      break;

    case "3":
      sortSpeed = 10;
      break;

    case "4":
      sortSpeed = 3;
      break;

    case "5":
      sortSpeed = 1;
      break;

    default:
      break;
  }
});

function colorAndHeightUpdates(element, height, color) {
  window.setTimeout(function () {
    element.style.height = `${height}px`;
    element.style.backgroundColor = color;
  }, (delay += sortSpeed));
}

function initialState() {
  let arrayBars = Array.from(document.getElementsByClassName("arraybar"));

  arrayBars.forEach((element) => {
    element.style.backgroundColor = "#ff6e40";
  });
}

function enableActions() {
  setTimeout(() => {
    let btns = Array.from(document.getElementsByClassName("btn"));

    btns.forEach((element) => {
      element.disabled = false;
      element.classList.remove("disabled");
    });

    arraySizeHandler.disabled = false;
    arraySizeHandler.classList.remove("disabled");

    speed.disabled = false;
    speed.classList.remove("disabled");

    startAlgo.disabled = false;
    startAlgo.classList.remove("disabled");
  }, (delay += sortSpeed));

  setTimeout(() => {
    location.reload();
  }, (delay += 2000));
}
