const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const judgeVegetable = function (vegetables, metric) {
  let metricMax = -1;
  let submitterMax = "";
  vegetables.forEach(function(vegetable) {
    if(vegetable[metric] > metricMax) {
      metricMax = vegetable[metric];
      submitterMax = vegetable['submitter'];
    }
  });
  return submitterMax;
};

const metric = 'redness';

console.log(judgeVegetable(vegetables, metric));