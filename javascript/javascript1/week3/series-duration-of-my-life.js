function logOutSeriesText() {
  const seriesDurations = [
    {
      title: 'Game of thrones',
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: 'The Walking Dead',
      days: 7,
      hours: 23,
      minutes: 18,
    },
    {
      title: 'Breaking Bad',
      days: 9,
      hours: 21,
      minutes: 48,
    },
  ];
  const averageLife = 80;
  let totalYears = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    let oneSeries =
      ((seriesDurations[i].days / 365 +
        seriesDurations[i].hours / 24 / 365 +
        seriesDurations[i].minutes / 60 / 24 / 365) *
        100) /
      averageLife;
    console.log(
      `'${seriesDurations[i].title}' took ${+oneSeries.toFixed(2)}% of my life`
    );
    totalYears += +oneSeries.toFixed(2);
  }
  return console.log(`In total that is ${totalYears}% of my life`);
}

logOutSeriesText();
