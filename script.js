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
            square.style.backgroundColor="black";
        });
        container.appendChild(square);
    }

}
createGrid(16);//default grid size
resizeBtn.addEventListener("click",()=>{
    let newSize=prompt("Enter grid size (max 100):");

    if (newSize>100){
        alert("Size too large! Please enter a number less than or equal to 100.");
        return;
    }
    createGrid(newSize);
})