window.scrollTo(0, 0);

const text = document.getElementById('text');
console.log(text)

window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  text.innerHTML = window.scrollY;
  text.style.height = `${Math.min(10 + window.scrollY/5, 100)}vh`
});

