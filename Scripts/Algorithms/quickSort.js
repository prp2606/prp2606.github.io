function quickSort() {
  delay = 0;
  disableActions();

  arrayBars = Array.from(document.getElementsByClassName("arraybar"));

  let length = arrayBars.length;
  let low = 0;
  let high = length;

  quickSortHelper(arrayBarHeights, low, high - 1);

  enableActions();
}

function quickSortHelper(arrayBarHeights, start, end) {
  if (start < end) {
    let pivotIndex = partition(arrayBarHeights, start, end);

    quickSortHelper(arrayBarHeights, start, pivotIndex - 1);
    quickSortHelper(arrayBarHeights, pivotIndex + 1, end);
  }
}

function partition(arrayBarHeights, start, end) {
  let pivotElement = arrayBarHeights[start];

  // colorAndHieghtUpdates(arrayBars[end], arrayBarHeights[end], "yellow");

  let pivotIndex = start + 1;
  for (i = start + 1; i <= end; i++) {
    if (arrayBarHeights[i] < pivotElement) {
      // colorAndHieghtUpdates(arrayBars[i], arrayBarHeights[i], "green");

      let temp = arrayBarHeights[pivotIndex];
      arrayBarHeights[pivotIndex] = arrayBarHeights[i];
      arrayBarHeights[i] = temp;

      // colorAndHieghtUpdates(arrayBars[i], arrayBarHeights[i], "purple");

      pivotIndex++;
    }
    // colorAndHieghtUpdates(arrayBars[end], arrayBarHeights[end], "red");

    let temp = arrayBarHeights[pivotIndex - 1];
    arrayBarHeights[pivotIndex - 1] = arrayBarHeights[start];
    arrayBarHeights[start] = temp;

    // colorAndHieghtUpdates(arrayBars[end], arrayBarHeights[end], "red");
  }

  return pivotIndex - 1;
}
