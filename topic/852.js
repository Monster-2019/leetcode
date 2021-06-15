/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
  let len = arr.length
  let result = -1
  for (let i = 0; i < len; i++) {
      if (arr[i] > arr[i+1]) {
          result = i
          break
      }
  }
  return result
};

// 88ms 45.68%; 39.5mb 35.09%;