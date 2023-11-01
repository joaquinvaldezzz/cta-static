const html = document.documentElement
const toggle = document.getElementById('theme-toggle')

if (toggle) {
  toggle.addEventListener('click', () => {
    html.classList.toggle('dark')
    toggle.innerText = html.classList.contains('dark') ? 'Dark' : 'Light'
  })
}
