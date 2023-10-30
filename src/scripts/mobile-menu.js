const button = document.getElementById('nav-menu-button')
const menu = document.getElementById('nav-menu')

if (button && menu) {
  button.addEventListener('click', () => {
    menu.classList.toggle('hidden')
  })
} else {
  throw new Error('No `nav-menu-button` or `nav-menu` found')
}
