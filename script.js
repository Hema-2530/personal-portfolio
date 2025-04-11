function changeColor() {
  const colors = ["pink", "lightblue", "lightgreen", "lavender", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
