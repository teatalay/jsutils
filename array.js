function changeElementsByIndex(arr, firstIndex, secondIndex) {
  if (!arr?.length || firstIndex >= arr.length || secondIndex >= arr.length)
    return arr;
  [arr[secondIndex], arr[firstIndex]] = [arr[firstIndex], arr[secondIndex]];
  return arr; //arr is already changed by reference
}
