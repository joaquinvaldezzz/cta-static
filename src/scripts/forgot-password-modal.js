const forgotPasswordButton = document.querySelector('a[href="#recover"]')
const target = forgotPasswordButton.attributes.href.value
const forgotPasswordModal = document.querySelector(target)
const forgotPasswordModalCloseButton = forgotPasswordModal.querySelector('#close-button')

if (forgotPasswordModal) {
  forgotPasswordButton.addEventListener('click', () => {
    forgotPasswordModal.classList.remove('hidden')
  })

  if (forgotPasswordModalCloseButton) {
    forgotPasswordModalCloseButton.addEventListener('click', () => {
      forgotPasswordModal.classList.add('hidden')
    })
  }

  document.addEventListener('click', (event) => {
    if (event.target === forgotPasswordModal) {
      forgotPasswordModal.classList.add('hidden')
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      forgotPasswordModal.classList.add('hidden')
    }
  })
}
