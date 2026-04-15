let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');

let turnX = true ;

const winpatterns =[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

]

boxes.forEach((box) => {
    box.addEventListener('click', () => {

    if(turnX){
        box.innerText = "X";
        turnX = false ;
    }else{
        box.innerText = "O" ;
        turnX = true ;
    }
    checkwinner();

     });
});

const resetgame = () => {
    enableboxes();
    for(let box of boxes){
        box.innerText = "" ;
    }
}

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true ;
    }
}
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false ;
        
    }
}

const checkwinner = () => {
    for(let pattern of winpatterns){
             let position1value = boxes[pattern[0]].innerText;
             let position2value = boxes[pattern[1]].innerText;
             let position3value = boxes[pattern[2]].innerText;

if(position1value != "" && position2value != "" && position3value != ""){
    if(position1value == position2value && position2value == position3value){
        alert(`${position1value} is the Winner!`);
        disableboxes();
        
     }
   }
 }
} 
resetbtn.addEventListener('click',resetgame);