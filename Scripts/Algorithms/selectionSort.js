function selectionSort() {
  delay = 0;
  disableActions();

  arrayBars = document.getElementsByClassName("arraybar");

  for (i = 0; i < arrayBars.length; i++) {
    let minElement = arrayBarHeights[i];
    let minElementIndex = i;

    colorAndHeightUpdates(
      arrayBars[minElementIndex],
      arrayBarHeights[minElementIndex],
      "#fc8f22"
    );

    for (j = i + 1; j < arrayBars.length; j++) {
      colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "red");

      if (arrayBarHeights[j] < minElement) {
        minElement = arrayBarHeights[j];
        minElementIndex = j;
      }

      colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "#ff6e40");
    }

    colorAndHeightUpdates(
      arrayBars[minElementIndex],
      arrayBarHeights[minElementIndex],
      "#fc8f22"
    );

    if (minElementIndex !== i) {
      let temp = arrayBarHeights[i];
      arrayBarHeights[i] = arrayBarHeights[minElementIndex];
      arrayBarHeights[minElementIndex] = temp;
    }

    colorAndHeightUpdates(arrayBars[i], arrayBarHeights[i], "#f62a00");
    colorAndHeightUpdates(
      arrayBars[minElementIndex],
      arrayBarHeights[minElementIndex],
      "#f62a00"
    );

    if (minElementIndex !== i) {
      colorAndHeightUpdates(
        arrayBars[minElementIndex],
        arrayBarHeights[minElementIndex],
        "#ff6e40"
      );
    }

    colorAndHeightUpdates(arrayBars[i], arrayBarHeights[i], "#3b4d61");
  }

  for (let index = 0; index < arrayBars.length; index++) {
    colorAndHeightUpdates(arrayBars[index], arrayBarHeights[index], "#5bc8ac");
  }

  enableActions();
}
