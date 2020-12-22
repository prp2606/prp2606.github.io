function insertionSort() {
  delay = 0;
  disableActions();

  arrayBars = document.getElementsByClassName("arraybar");

  for (i = 1; i < arrayBars.length; i++) {
    let holeElement = arrayBarHeights[i];
    let hole = i;

    colorAndHeightUpdates(arrayBars[i], arrayBarHeights[i], "#fc8f22");
    colorAndHeightUpdates(arrayBars[i], 0, "#fc8f22");

    arrayBarHeights[hole] = 0;

    while (hole - 1 >= 0 && arrayBarHeights[hole - 1] > holeElement) {
      let temp = arrayBarHeights[hole];
      arrayBarHeights[hole] = arrayBarHeights[hole - 1];
      arrayBarHeights[hole - 1] = temp;

      colorAndHeightUpdates(arrayBars[hole], arrayBarHeights[hole], "#f62a00");

      colorAndHeightUpdates(
        arrayBars[hole - 1],
        arrayBarHeights[hole - 1],
        "#f62a00"
      );

      colorAndHeightUpdates(arrayBars[hole], arrayBarHeights[hole], "#ff6e40");

      colorAndHeightUpdates(
        arrayBars[hole - 1],
        arrayBarHeights[hole - 1],
        "#ff6e40"
      );

      hole--;
    }
    colorAndHeightUpdates(arrayBars[hole], holeElement, "#fc8f22");

    arrayBarHeights[hole] = holeElement;

    colorAndHeightUpdates(arrayBars[hole], holeElement, "#3b4d61");
  }

  for (let index = 0; index < arrayBars.length; index++) {
    colorAndHeightUpdates(arrayBars[index], arrayBarHeights[index], "#3b4d61");
    colorAndHeightUpdates(arrayBars[index], arrayBarHeights[index], "#5bc8ac");
  }

  enableActions();
}
