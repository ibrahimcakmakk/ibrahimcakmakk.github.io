const container = document.getElementById("container");
const color = ["#056CF2", "#05AFF2", "#F2E205", "#F28705", "#A62103"];
const SQUARES = 1400;

for(i=0;i<SQUARES;i++){
  const square = document.createElement("div");
  square.classList.add('square');
  square.addEventListener('mouseover', ()=>{
    setColor(square)});
  square.addEventListener('mouseover', ()=>{
    removeColor(square)});

  container.appendChild(square);

}

function setColor(element){
  const color = getRandomColor();
  element.style.background = color;
  `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(element){
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000'
  }

  const getRandomColor=()=> color[Math.floor(Math.random()*color.length)] 
  
  
  


