let timerId = null

const loaderConfig = {
  interval: 80,
  frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
}

const showLoader = (text) => {
  let i = 0
  timerId = setInterval(() => {
    process.stdout.write(
      `\r${loaderConfig.frames[i++ % loaderConfig.frames.length]} ${text}...`
    )
  }, loaderConfig.interval)
}

const stopLoader = () => {
  clearInterval(timerId)
  process.stdout.write(`\r`)
}

module.exports = {
  showLoader,
  stopLoader,
}
