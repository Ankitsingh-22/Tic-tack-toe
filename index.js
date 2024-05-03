let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let turn0 = true;
let msgcon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newbtn =document.querySelector("#new-btn");
const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
];
const newgame = () =>{
    msgcon.classList.add("hide");
    turn0 = true;
    enablebox();
};
const disablebox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
     
};
const enablebox = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

};
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        console.log("Box was clicked");
        if(turn0){
            box.innerText = "0";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkwinner();
    });
});
const showwinner = (winner) => {
    msg.innerText = `Congratulation Your winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebox();
}
const checkwinner = () => {
    for(let pattern of winpatterns){
        let postval1 = boxes [pattern[0]].innerText;
        let postval2 = boxes [pattern[1]].innerText;
        let postval3 = boxes [pattern[2]].innerText;
        if(postval1 != "" && postval2 != "" && postval3 != ""){
            if(postval1 === postval2 && postval2 === postval3){
                console.log("Winner",postval1);
                showwinner(postval1);
            }
        }

    }

};
newbtn.addEventListener("click" , newgame);
reset.addEventListener("click", newgame);