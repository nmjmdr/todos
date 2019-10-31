const success = (message) => {
  return {
    ok: true,
    message: message
  }
}

const failure = (message, err) => {
  return {
    ok: false,
    message: message,
    error: err
  }
}

module.exports = {
  success,
  failure
}
