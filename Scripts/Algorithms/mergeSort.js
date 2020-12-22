function mergeSort() {
  delay = 0;
  disableActions();

  arrayBars = Array.from(document.getElementsByClassName("arraybar"));

  let length = arrayBars.length;
  let low = 0;
  let high = length - 1;

  mergeSortHelper(low, high);

  for (let index = 0; index < arrayBars.length; index++) {
    colorAndHeightUpdates(arrayBars[index], arrayBarHeights[index], "#3b4d61");
    colorAndHeightUpdates(arrayBars[index], arrayBarHeights[index], "#5bc8ac");
  }

  enableActions();
}

function mergeSortHelper(start, end) {
  if (start < end) {
    let middleIndex = Math.floor((start + end) / 2);

    colorAndHeightUpdates(
      arrayBars[middleIndex],
      arrayBarHeights[middleIndex],
      "#1995ad"
    );

    mergeSortHelper(start, middleIndex);
    mergeSortHelper(middleIndex + 1, end);

    merge(start, middleIndex, end);
  }
}

function merge(start, middleIndex, end) {
  let temp1 = start;
  let temp2 = middleIndex + 1;
  let temp3 = 0;

  let array = [];

  for (i = start; i <= end; i++) {
    if (temp1 > middleIndex) {
      array[temp3] = arrayBarHeights[temp2];

      colorAndHeightUpdates(
        arrayBars[temp2],
        arrayBarHeights[temp2],
        "#fc8f22"
      );

      temp3++;
      temp2++;
    } else if (temp2 > end) {
      array[temp3] = arrayBarHeights[temp1];

      colorAndHeightUpdates(
        arrayBars[temp1],
        arrayBarHeights[temp1],
        "#fc8f22"
      );

      temp3++;
      temp1++;
    } else if (arrayBarHeights[temp1] < arrayBarHeights[temp2]) {
      array[temp3] = arrayBarHeights[temp1];

      colorAndHeightUpdates(
        arrayBars[temp1],
        arrayBarHeights[temp1],
        "#fc8f22"
      );

      temp3++;
      temp1++;
    } else {
      array[temp3] = arrayBarHeights[temp2];

      colorAndHeightUpdates(
        arrayBars[temp2],
        arrayBarHeights[temp2],
        "#fc8f22"
      );

      temp3++;
      temp2++;
    }
  }

  for (j = 0; j < temp3; j++) {
    arrayBarHeights[start] = array[j];

    colorAndHeightUpdates(arrayBars[start], arrayBarHeights[start], "#3b4d61");

    start++;
  }
}
