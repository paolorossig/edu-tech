const minute = 60
const hour = minute * 60
const day = hour * 24

export function getTimeString(miliseconds) {
  const times = [
    [minute, 'seg', 1],
    [hour, 'min', minute],
    [day, 'h', hour],
    [Infinity, 'd', day]
  ]
  const number = miliseconds / 1000

  for (const [max, timeInterval, div] of times) {
    if (number < max) {
      return `${Math.floor(number / div)} ${timeInterval}`
    }
  }
}
