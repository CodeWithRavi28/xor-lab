let userscore = 0;
let computerscore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector(".msg-container")
userscore = document.querySelector("#user-score");
computerscore = document.querySelector("#computer-score");


const gencompchoice = () => {
    const copmoption = ["Rock","Paper","Scissors"];
   const randomno = Math.floor(Math.random() * 3);
   return copmoption[randomno];

};
const drawgame = (userchoice , computerchoice) => {
    msg.innerText = (`Game is Draw 😅 ${userchoice} can't beats ${computerchoice}`);
    msg.style.backgroundColor = ("yellow");


};

const showwinner = (userwin , userchoice , computerchoice) => {
    if(userwin ){
        msg.innerText = (`You Win 😉!  Your ${userchoice} beats ${computerchoice}`);
        msg.style.backgroundColor = "green";
        userscore.innerText ++;
    }else {
        msg.innerText = (`You Loose Baby 😢! Your ${userchoice} defeated By ${computerchoice}`);
        msg.style.backgroundColor = ("red");
        computerscore.innerText ++;
    }
};

const clickedoption = (userchoice) => {
    console.log("user choose :" , userchoice);
    const computerchoice = gencompchoice();
    console.log("computer choose :",computerchoice);

    if (userchoice === computerchoice) {
        drawgame(userchoice , computerchoice);
    } else {
        let userwin = true;
    if(userchoice === "Rock"){
        userwin = computerchoice === "Paper" ? false : true ;
    }else if(userchoice === "Paper"){
        userwin = computerchoice === "Scissors" ? false : true;
    }else {
        userwin = computerchoice === "Rock" ? false : true;
    }
    showwinner(userwin , userchoice , computerchoice);
    }
};



options.forEach((option) => {
    option.addEventListener("click" , () => {
        const userchoice = option.getAttribute("id");
        clickedoption(userchoice);
    })

});