const padZero = number => {
  return number < 10 ? "0" + number : number.toString();
}

export const displayTimeFormat = milliseconds => {
  let displayMilliseconds = Math.floor((milliseconds / 10) % 100);
  let displaySeconds = Math.floor((milliseconds / 1000) % 60);
  let displayMinutes = Math.floor((milliseconds / 1000) / 60);
  
  return `${padZero(displayMinutes)}:${padZero(displaySeconds)}.${padZero(displayMilliseconds)}`;
}
