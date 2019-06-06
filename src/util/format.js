const padZero = number => {
  return number < 10 ? "0" + number : number.toString();
}

export const displayTimeFormat = milliseconds => {
  let displayMilliseconds = Math.floor((milliseconds / 10) % 100);
  let displaySeconds = Math.floor((milliseconds / 1000) % 60);
  let displayMinutes = Math.floor((milliseconds / 1000) / 60);
  
  return `${padZero(displayMinutes)}:${padZero(displaySeconds)}.${padZero(displayMilliseconds)}`;
}

export const convertTimeToInt = timeString => {
  let minutes = timeString.split(':')[0];
  let seconds = timeString.split(':')[1].split('.')[0];
  let milliseconds = timeString.split('.')[1];
  let time = minutes + seconds + milliseconds;
  return parseInt(time);
}

export const getMaxLapTimeIndex = (oldLapsArray) => {
  let newLapsArray = oldLapsArray.map((time, idx) => convertTimeToInt(time))
  return newLapsArray.indexOf(Math.max(...newLapsArray));
}

export const getMinLapTimeIndex = (oldLapsArray) => {
  let newLapsArray = oldLapsArray.map((time, idx) => convertTimeToInt(time))
  return newLapsArray.indexOf(Math.min(...newLapsArray));
}