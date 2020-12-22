function heapSort() {
  delay = 0;
  disableActions();

  arrayBars = Array.from(document.getElementsByClassName("arraybar"));

  let length = arrayBarHeights.length;
  heapSortHelper(arrayBarHeights, length);

  for (let index = 0; index < arrayBars.length; index++) {
    colorAndHeightUpdates(arrayBars[index], arrayBarHeights[index], "#5bc8ac");
  }

  enableActions();
}

function heapSortHelper(arrayBarHeights, length) {
  for (i = length / 2 - 1; i >= 0; i--) {
    colorAndHeightUpdates(arrayBars[i], arrayBarHeights[i], "#1995ad");

    heapify(arrayBarHeights, length, i);
  }
  for (j = length - 1; j >= 0; j--) {
    colorAndHeightUpdates(arrayBars[0], arrayBarHeights[0], "#fc8f22");
    colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "#fc8f22");

    let temp = arrayBarHeights[0];
    arrayBarHeights[0] = arrayBarHeights[j];
    arrayBarHeights[j] = temp;

    colorAndHeightUpdates(arrayBars[0], arrayBarHeights[0], "#3b4d61");
    colorAndHeightUpdates(arrayBars[j], arrayBarHeights[j], "#3b4d61");

    heapify(arrayBarHeights, j, 0);
  }
}

function heapify(arrayBarHeights, length, variable) {
  let maximum = variable;
  let left = 2 * variable + 1;
  let right = 2 * variable + 2;

  if (left < length && arrayBarHeights[left] > arrayBarHeights[maximum]) {
    maximum = left;
  }

  if (right < length && arrayBarHeights[right] > arrayBarHeights[maximum]) {
    maximum = right;
  }

  if (maximum != variable) {
    colorAndHeightUpdates(
      arrayBars[variable],
      arrayBarHeights[variable],
      "#fc8f22"
    );
    colorAndHeightUpdates(
      arrayBars[maximum],
      arrayBarHeights[maximum],
      "#fc8f22"
    );

    let temp = arrayBarHeights[maximum];
    arrayBarHeights[maximum] = arrayBarHeights[variable];
    arrayBarHeights[variable] = temp;

    colorAndHeightUpdates(
      arrayBars[variable],
      arrayBarHeights[variable],
      "#f62a00"
    );
    colorAndHeightUpdates(
      arrayBars[maximum],
      arrayBarHeights[maximum],
      "#f62a00"
    );

    heapify(arrayBarHeights, length, maximum);
  }
}
