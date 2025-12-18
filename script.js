const container=document.getElementById("container");
const resizeBtn=document.getElementById("resizeBtn");

function createGrid(size){
    container.innerHTML="";//clear old grid
    const squareSize=960/size;
    for(let i=0;i<size*size;i++){
        const square=document.createElement("div");
        square.classList.add("square");

        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;

        square.addEventListener("mouseover",() =>{
            square.style.backgroundColor
        });
        container.appendChild(square);
    }

}