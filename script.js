const text = "Nè em...";
let index =0;

function type(){
if(index < text.length){
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(type, 120);
}
}
type();

function official(){
const response = document.getElementById("response");
const video = document.getElementById("surpriseVideo");

response.innerText = "Tụi mình chính thức rồi nha 💗";
video.classList.add("show");
video.play();
}
