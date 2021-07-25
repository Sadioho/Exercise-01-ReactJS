// data

export function currentDate() {
  let arr = [];
  let dayNow = new Date();
  let nextDay = new Date();
  for (let i = 0; i < 3; i++) {
    nextDay.setDate(dayNow.getDate() + i);
    arr.push(
      nextDay.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
      })
    );
  }
  return arr;
}
// const date=currentDate()
// console.log(date);

export function currentTime() {
  let timeStart = new Date();
  let timeEnd = new Date();
  let arrTime = [];

  if (timeStart.getMinutes() < 15) {
    timeStart.setMinutes(timeStart.getMinutes() - timeStart.getMinutes() + 45);
  } else if (timeStart.getMinutes() < 30) {
    timeStart.setMinutes(timeStart.getMinutes() - timeStart.getMinutes() + 60);
  } else {
    timeStart.setMinutes(timeStart.getMinutes() - timeStart.getMinutes() + 75);
  }

  timeEnd.setHours(20);
  timeEnd.setMinutes(30);

  let timeBetween = new Date();
  timeBetween.setMinutes(
    timeBetween.getMinutes() - timeBetween.getMinutes() + 150
  );

  for (
    timeStart;
    timeStart < timeBetween;
    timeStart.setMinutes(timeStart.getMinutes() + 15)
  ) {
    arrTime.push(
      timeStart.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }

  for (
    timeStart.setMinutes(30);
    timeStart <= timeEnd;
    timeStart.setMinutes(timeStart.getMinutes() + 30)
  ) {
    arrTime.push(
      timeStart.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }
  return arrTime;
}

// const time=currentTime()
// console.log(time);

export function timeDefault() {
  let timeStart = new Date();
  let timeEnd = new Date();
  let arrTime = [];
  timeEnd.setHours(20);
  timeEnd.setMinutes(30);
  timeStart.setHours(7);
  timeStart.setMinutes(30);
  for (
    timeStart;
    timeStart <= timeEnd;
    timeStart.setMinutes(timeStart.getMinutes() + 30)
  ) {
    arrTime.push(
      timeStart.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }
  return arrTime;
}

// const timeD=timeDefault()
// console.log(timeD);
