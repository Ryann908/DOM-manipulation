let pSize = 16;
const green = document.getElementById("Green");
const red = document.getElementById("Red");
const yellow = document.getElementById("Yellow");
const blue = document.getElementById("Blue");
const black = document.getElementById("Black");
const rst = document.getElementById("rst");



function calc(pSize){
    return String(640/pSize)-3 + "px";
}




for(let i = 0; i < pSize; i++) {
    for(let j = 0; j < pSize; j++){
    const para = document.querySelector("p");
    const div = document.createElement("div");
    para.appendChild(div);

    div.style.width = calc(pSize);
    div.style.height = calc(pSize);
    div.style.border = "black solid 1px";  
    green.addEventListener('click', () => {
        div.addEventListener('dragover', () => {
            div.style.background = "green";
        });
    });
    red.addEventListener('click', () => {
        div.addEventListener('dragover', () => {
                div.style.background = "red";
            });
        });
    yellow.addEventListener('click', () => {
        div.addEventListener('dragover', () => {
                div.style.background = "yellow";
            });
        });
    blue.addEventListener('click', () => {
        div.addEventListener('dragover', () => {
                div.style.background = "blue";
            });
         });
         black.addEventListener('click', () => {
            div.addEventListener('dragover', () => {
                    div.style.background = "black";
                });
            }); 
         rst.addEventListener('click', () => {
            para.removeChild(div);
         });

         function size(){
            let sizeL = prompt("Type one number");
                for(i = 0; i < sizeL; i++) {
                    for(j = 0; j < sizeL; j++){
                    
                    const para = document.querySelector("p");
                    const div = document.createElement("div");
                    para.appendChild(div);

                    div.style.width = calc(sizeL);
                    div.style.height = calc(sizeL);
                    div.style.border = "black solid 1px";  
                    green.addEventListener('click', () => {
                    div.addEventListener('dragover', () => {
                            div.style.background = "green";
                        });
                    });
                    red.addEventListener('click', () => {
                        div.addEventListener('dragover', () => {
                                div.style.background = "red";
                            });
                        });
                    yellow.addEventListener('click', () => {
                        div.addEventListener('dragover', () => {
                                div.style.background = "yellow";
                            });
                        });
                    blue.addEventListener('click', () => {
                        div.addEventListener('dragover', () => {
                                div.style.background = "blue";
                            });
                         });   
                    black.addEventListener('click', () => {
                        div.addEventListener('dragover', () => {
                                div.style.background = "black";
                            });
                        });
                        rst.addEventListener('click', () => {
                            para.removeChild(div);
                         })                       
                }  
  
        }
    }
             
    }            
}












