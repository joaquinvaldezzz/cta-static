const html = document.documentElement
const toggle = document.getElementById('theme-toggle')

// if (toggle) {
//   toggle.addEventListener('click', () => {
//     html.classList.toggle('dark')
//     toggle.innerText = html.classList.contains('dark') ? 'Dark' : 'Light'
//   })
// }

// Check if the system is in dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // The system is in dark mode
  console.log('Dark mode is on')
} else {
  // The system is in light mode or doesn't support this feature
  console.log('Light mode is on')
}
