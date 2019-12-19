/* #1
[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
[21, 1, 26, 45, 29, 28, 2, 9] 
[21, 1, 26, 45] 
[21, 1] 

 Resulting list after 3 recursive calls would be [21, 1]
 [16, 49, 39, 27, 43, 34, 46, 40] would be the result of the 16th recursive call to mergeSort()
 First two lists to be merged would be [21] and [1]
 [1, 21, 26, 45] and [2, 9, 28,29] would be merged on the 7th merge
*/

/* 
#2.1
3 9 1 14 17 24 22 20
a) False, because either one could be the pivot
b) True, the values before 14 and 17 are less in value and the values after 14 and 17 are greater in value
c) False, both could be the pivot
d) False, because either one could be the pivot

#2.2
14, 17, 13, 15, 19, 10, 3, 16, 9, 12
10 , 17, 13, 15, 19, 14, 3, 16, 9, 12
10, 3, 13, 15, 19, 14, 17, 16, 9, 12
10, 3, 9, 15, 19,14, 17, 16, 13, 12
10, 3, 9, 12, 19, 14, 17, 16, 13, 15
3, 10, 9, 12
3, 9, 10, 12 //runs but doesn't change


Last Item as pivot
1st partition: 10, 3, 9, 12, 19, 14, 17, 16, 13, 15
2nd partition: 3, 9, 10, 12, 19, 14, 17, 16, 13, 15

14, 17, 13, 15, 19, 10, 3, 16, 9, 12
14, 12, 13, 15, 19, 10, 3, 16, 9, 17
14, 12, 13, 15, 19, 10, 3, 16, 9, 17
14, 12, 13, 9, 19, 10, 3, 16, 15, 17
14, 12, 13, 9, 3, 10, 19, 16, 15, 17
10, 12, 13, 9, 3, 14, 19, 16, 15, 17
3, 12, 13, 9, 10, 14, 19, 16, 15, 17
3, 9, 13, 12, 10, 14, 19, 16, 15, 17
3, 9, 10, 12, 13, 14, 19, 16, 15, 17




First Item as pivot
1st partition: 10, 12, 13, 9, 3, 14, 19, 16, 15, 17
2nd partition: 3, 9, 10, 12, 13, 14, 19, 16, 15, 17
*/

const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'.split(' ')
const integerData = data.map(num => Number(num));

function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
      return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
};

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
      if (array[i] <= pivot) {
          swap(array, i, j);
          j++;
      }
  }
  swap(array, end-1, j);
  return j;
};

//console.log(quickSort(integerData));