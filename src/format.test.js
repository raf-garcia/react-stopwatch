import {convertTimeToInt, displayTimeFormat, getMaxLapTimeIndex, getMinLapTimeIndex} from './util/format';


it('converts a time from a string to an int', () => {
  expect(convertTimeToInt("09:53.12")).toBe(95312);
});


it('returns the index of the minimum time', () => {
    let testTimeArray = ["09:53.12", "09:03.12", "00:05.02", "00:00.02"];
    
    expect(getMinLapTimeIndex(testTimeArray)).toBe(3);
});


it('returns the index of the maximum time', () => {
    let testTimeArray = ["09:53.12", "09:59.12", "00:05.02", "00:00.02"];
    
    expect(getMaxLapTimeIndex(testTimeArray)).toBe(1);
});

it('takes a time in milliseconds and returns a string in the form [minutes]:[seconds].[milliseconds]', () => {
    let testMilliseconds = 111744;
    expect(displayTimeFormat(testMilliseconds)).toBe("01:51.74");
});


