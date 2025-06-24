const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// password between 8 to 20 characters with 1 numeric digit, 1 lowercase letter, 1 uppercase letter
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

const numberPattern = /^[0-9]*$/

const hasNumber = /^(?=.*\d).{8,20}$/

const hasSpecialChar = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,20}$/

const hasLowercase = /^(?=.*[a-z]).{8,20}$/

const hasUppercase = /^(?=.*[A-Z]).{8,20}$/

export {
  passwordPattern,
  emailPattern,
  hasNumber,
  hasSpecialChar,
  hasLowercase,
  hasUppercase,
  numberPattern,
}
