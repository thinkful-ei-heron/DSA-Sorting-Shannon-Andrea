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
