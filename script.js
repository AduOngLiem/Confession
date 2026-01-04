const text = "Nè em...";
let index = 0;

function type() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 120);
  }
}
type();

function official() {
  const response = document.getElementById("response");
  const video = document.getElementById("surpriseVideo");
  const final = document.getElementById("finalMessage");

  response.innerText = "Vậy là tụi mình chính thức rồi ha 💗";
  response.innerText = "Tặng em nè, nhớ xem đén cuối đó nha";

  setTimeout(() => {
    video.classList.add("show");
    video.play();
  }, 900);

  video.onended = () => {
    final.style.display = "block";
  };
}
