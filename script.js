let boxs=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newBtn=document.querySelector("#new-game");
let msgContainer=document.querySelector("#msg-container");
let winMsg=document.querySelector("#msg");
 let turnO=true;

const winPattern=[[0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]];

 boxs.forEach((box) => {    
        box.addEventListener("click",()=>{
            if(turnO){
            box.innerText="X";
            box.style.color="blue";
                turnO=false;
        }
            else{

                 box.innerText="O";
                  box.style.color="rgb(221, 47, 41)";
                turnO=true;
            }
            box.disabled=true;
            checkWinner();
        });
       
    });

    const disableBtn=()=>{
        for(let box of boxs){
            box.disabled=true;
        }
    }
    
        const showWinner=(winner)=>{
      if(winner!=""){
             if(winner==="X"){
             winMsg.innerText=`Congratulation! Winner is Player1.`;
             }
           else{
               winMsg.innerText=`Congratulation! Winner is Player2.`;

             }}
       else{
         winMsg.innerText=`Draw`;
       }

        msgContainer.classList.remove("hide");
        disableBtn();
    }
    

    const checkWinner=()=>{
        for(let pattern of winPattern){
            let val1=boxs[pattern[0]].innerText;
            let val2=boxs[pattern[1]].innerText;
            let val3=boxs[pattern[2]].innerText;

            if(val1!=""&&val2!=""&&val3!=""){
                if(val1===val2&&val2===val3){
                    showWinner(val1);

                }  
            }
            
        }
        let isDraw = true;
    for (let box of boxs) {
        if (box.innerText === "") {
            isDraw = false;
            break;
        }
    }
    if (isDraw) {
        showWinner(""); // Show draw message
    }
    }
    

    
    
    const resetGame=()=>{
        turnO=true;
        enableBtn();
        msgContainer.classList.add("hide");
    }

    const enableBtn=()=>{
        for(let box of boxs){
            box.disabled=false;
            box.innerText="";
        }
    }

    reset.addEventListener("click",resetGame);
    newBtn.addEventListener("click",resetGame);