let content = document.querySelector('.content');
let imgs = [...content.querySelectorAll('*')];
let dots = [...document.querySelectorAll('.circle')];

function moveIt(val){
    if(!checkBounds(val)){
        switch (checkBounds(val)){
            case false:
                moveIt(moveTotal=(-(imgs.length-1)*40));
            break;

            case 0:
                moveIt(moveTotal=0);
            break;
        }
    }
    else{
        content.style.marginLeft=`${val}vw`;
    }
}

function checkBounds(val){
    if(val > 0) return false;
    if(val < -(imgs.length - 1) * 40) return 0;
    return true;
}

function switchTo(dot){
    for (let i = 0; i < imgs.length; i++) {
        if(dots[i]==dot){
            moveIt(moveTotal=(-i*40));
        }
        
    }
}

function initializeDots(){
    let cont = document.querySelector('.dots')
    imgs.forEach(()=>{
        let div = document.createElement('div');
        div.classList.add('circle');
        cont.appendChild(div);
    })

    dots = [...document.querySelectorAll('.circle')];
    dots.forEach((e)=>{
        e.addEventListener('click',()=>switchTo(e));
    })
}


let moveTotal=0;

let left = document.querySelector('#left');
left.addEventListener('click',()=>{
    moveIt(moveTotal+=40)}
);
let right = document.querySelector('#right');
right.addEventListener('click',()=>moveIt(moveTotal-=40));

initializeDots();