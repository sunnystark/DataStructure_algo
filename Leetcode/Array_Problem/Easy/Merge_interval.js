let mergeIntervals = function (v) {
  let prev = v[0],
    res; // [1,5]
  for (let i = 1; i < v.length; i++) {
    //   console.log(prev, v[i])
    if (prev[1] >= v[i][0]) {
      prev = [Math.min(...prev), Math.max(...v[i])];
    } else {
      res.push(prev);
      prev = v[i];
    }
  }
  return [...res, prev];
};

merge_intervals([1, 5], [3, 7], [4, 6], [6, 8], [10, 12], [10, 15]);
//   output = [1, 8] [10, 15]
