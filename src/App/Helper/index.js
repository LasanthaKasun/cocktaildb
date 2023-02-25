export const getRendomItems = (data, n) => {
  var shuffled = data.sort(function () {
    return 0.5 - Math.random();
  });

  var selected = shuffled.slice(0, n);

  return selected;
};
