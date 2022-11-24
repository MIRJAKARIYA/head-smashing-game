const holes= document.getElementsByClassName('rabbit__img');
const pointDiv = document.getElementById('point_showing_div');

let pintVar = 0;
//event listeners on every rabbit
for(const hole of holes){
    hole.addEventListener('click',()=>{
        pointCount()
    })
}



const pointCount = () =>{
    pintVar+=1;
    console.log(pointDiv)
    pointDiv.innerText = pintVar
}


setInterval(()=>{
    const rand = Math.floor(Math.random()*6)

    for(const hole of holes){
        hole.style.display = "none";
    }
    holes[rand].style.display = "block"
},1000)