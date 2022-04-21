const minute = 60
const hour = minute * 60
const day = hour * 24

export function getTimeString(seconds) {
  const times = [
    [minute, 'seg', 1],
    [hour, 'min', minute],
    [day, 'h', hour],
    [Infinity, 'd', day]
  ]

  for (const [max, timeInterval, div] of times) {
    if (seconds < max) {
      return `${Math.floor(seconds / div)} ${timeInterval}`
    }
  }
}
