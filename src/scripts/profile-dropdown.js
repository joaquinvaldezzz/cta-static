const dropdown = document.getElementById('profile-dropdown')
const menu = document.getElementById('profile-dropdown-menu')

if (dropdown && menu) {
  dropdown.addEventListener('click', () => {
    menu.classList.toggle('hidden')
  })
} else {
  console.log('profile-dropdown.js: dropdown and menu not found')
}
