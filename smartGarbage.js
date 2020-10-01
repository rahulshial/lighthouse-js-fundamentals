const bins = {
  waste: 0,
  recycling: 0,
  compost: 0
};


const smartGarbage = function (trash, bins) {
  bins[trash] += 1;
  console.log(bins);
  return bins;
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });

console.log(bins);