const form = document.querySelector('#set-new-password')
const newPasswordInput = document.querySelector(
  '#set-new-password input[name="customer[password]"]',
)
const confirmPasswordInput = document.querySelector(
  '#set-new-password input[name="customer[password_confirmation]"]',
)
const passwordLengthChecker = document.querySelector('[aria-label="Must be at least 8 characters"]')
const samePasswordChecker = document.querySelector('[aria-label="Password are the same"]')
const specialCharacterChecker = document.querySelector(
  '[aria-label="Must contain one special character"]',
)
const submitButton = document.querySelector('#set-new-password button[type="submit"]')

function handlePasswordLength() {
  const newPasswordInputLength = newPasswordInput.value.length
  const confirmPasswordInputLength = confirmPasswordInput.value.length
  const icon = passwordLengthChecker.children[0]

  if (newPasswordInputLength >= 8 || confirmPasswordInputLength >= 8) {
    icon.setAttribute('data-status', 'true')
  } else {
    icon.setAttribute('data-status', 'false')
  }
}

function handlePassword() {
  const newPasswordValue = newPasswordInput.value
  const confirmPasswordValue = confirmPasswordInput.value
  const icon = samePasswordChecker.children[0]

  if (newPasswordValue === confirmPasswordValue && newPasswordValue !== '') {
    icon.setAttribute('data-status', 'true')
  } else {
    icon.setAttribute('data-status', 'false')
  }
}

function handleSpecialCharacters() {
  const specialCharactersRegEx = /\W|_/g
  const newPasswordValue = newPasswordInput.value
  const confirmPasswordValue = confirmPasswordInput.value
  const icon = specialCharacterChecker.children[0]

  if (
    specialCharactersRegEx.test(newPasswordValue) &&
    specialCharactersRegEx.test(confirmPasswordValue)
  ) {
    icon.setAttribute('data-status', 'true')
  } else {
    icon.setAttribute('data-status', 'false')
  }
}

// Checks if the passwords are at least 8 characters long
newPasswordInput.addEventListener('input', handlePasswordLength)
confirmPasswordInput.addEventListener('input', handlePasswordLength)

// Checks if the passwords are the same
newPasswordInput.addEventListener('input', handlePassword)
confirmPasswordInput.addEventListener('input', handlePassword)

// Checks if the passwords contain special characters
newPasswordInput.addEventListener('input', handleSpecialCharacters)
confirmPasswordInput.addEventListener('input', handleSpecialCharacters)

// Checks
const newPasswordLength = newPasswordInput.value.length
const confirmPasswordLength = confirmPasswordInput.value.length
const regularExpression = /\W|_/g
const newPasswordValue = newPasswordInput.value
const confirmPasswordValue = confirmPasswordInput.value

confirmPasswordInput.addEventListener('focusout', () => {
  if (
    (newPasswordLength >= 8 || confirmPasswordLength >= 8) &&
    newPasswordValue === confirmPasswordValue &&
    regularExpression.test(newPasswordValue) &&
    regularExpression.test(confirmPasswordValue)
  ) {
    // console.log('wala na')
    submitButton.attributes.setNamedItem('disabled')
  } else {
    submitButton.attributes.removeNamedItem('disabled')
    // console.log('meron pa')
  }
})
