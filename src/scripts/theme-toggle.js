const html = document.documentElement
const toggle = document.getElementById('theme-toggle')

toggle.addEventListener('click', () => {
  html.classList.toggle('dark')
  toggle.innerText = html.classList.contains('dark') ? 'Dark' : 'Light'
})
