//Adding an activity

const activities = [];

function addActivity(date, activity, duration) {
  if (
    typeof date === 'string' &&
    typeof activity === 'string' &&
    typeof duration === 'number'
  ) {
    let obj = {
      date: date,
      activity: activity,
      duration: duration,
    };
    activities.push(obj);
    return activities;
  }
  return console.log('Please enter the correct data');
}

addActivity(5, 'Youtube', 30);
addActivity('23/7-18', 'Facebook', 10);
addActivity('23/7-18', 'Twitter', 38);
console.log(activities);

//Show my status

function showStatus() {
  const limitUsage = 50;

  if (activities.length === 0) {
    return console.log('Add some activities before calling showStatus');
  }
  let sum = 0;
  for (let i = 0; i < activities.length; i++) {
    sum += activities[i].duration;
  }
  if (sum >= limitUsage) {
    return console.log(
      'You have reached your limit, no more smartphoning for you!'
    );
  }
  return console.log(
    `You have added ${activities.length} activities. They amount to ${sum} min. of usage`
  );
}

showStatus();

//TODO add Extra feature + Optional

// Lets improve the addActivity, so that we dont need to specify the date, but the function automatically figures out what the date is. Check out this link: https://stackoverflow.com/a/34015511
// Improve the showStatus function by only showing the number of actitivies for that specific day.
// Create a function for calculating the activity a user has spent the most time on.
