function bubbleSort() {
  delay = 0;
  disableActions();

  arrayBars = document.getElementsByClassName("arraybar");

  for (i = 0; i < arrayBars.length - 1; i++) {
    for (j = 0; j < arrayBars.length - i - 1; j++) {
      colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "#fc8f22");
      colorAndHeightUpdates(
        arrayBars[j + 1],
        arrayBarHeights[j + 1],
        "#fc8f22"
      );

      if (arrayBarHeights[j] > arrayBarHeights[j + 1]) {
        colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "#1995ad");
        colorAndHeightUpdates(
          arrayBars[j + 1],
          arrayBarHeights[j + 1],
          "#f0810f"
        );

        let temp = arrayBarHeights[j];
        arrayBarHeights[j] = arrayBarHeights[j + 1];
        arrayBarHeights[j + 1] = temp;
      } else {
        colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "white");
        colorAndHeightUpdates(
          arrayBars[j + 1],
          arrayBarHeights[j + 1],
          "white"
        );
      }

      colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "#ff6e40");
      colorAndHeightUpdates(
        arrayBars[j + 1],
        arrayBarHeights[j + 1],
        "#f62a00"
      );
    }
    colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "#3b4d61");
  }
  colorAndHeightUpdates(arrayBars[0], arrayBarHeights[0], "#3b4d61");

  for (let index = 0; index < arrayBars.length; index++) {
    colorAndHeightUpdates(arrayBars[index], arrayBarHeights[index], "#5bc8ac");
  }

  enableActions();
}
