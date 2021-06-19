const [red, green, blue] = [255, 226, 199]
const section1 = document.querySelector('.section1')


window.addEventListener('scroll', () => {
  const y = 1 +  (window.scrollY || window.pageYOffset) / 550
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
