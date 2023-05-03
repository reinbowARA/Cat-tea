stockx = document.querySelector('.stockx');
isDown = false;
let startX, scrollLeft;

stockx.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - stockx.offsetLeft;
  const walk = (x - startX) * 3; // Увеличиваем скорость скролла
  stockx.scrollLeft = scrollLeft - walk;
});

stockx.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - stockx.offsetLeft;
  scrollLeft = stockx.scrollLeft;
});

stockx.addEventListener('mouseleave', () => {
  isDown = false;
});

stockx.addEventListener('mouseup', () => {
  isDown = false;
});

