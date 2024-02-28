let width = 16;
let height = 16;
const green = document.getElementById("Green");
const red = document.getElementById("Red");
const yellow = document.getElementById("Yellow");
const blue = document.getElementById("Blue");
const black = document.getElementById("Black");
const rst = document.getElementById("rst");








for(i = 1; i <= width * height; i++) {
    const para = document.querySelector("p");
    const div = document.createElement("div");
    para.appendChild(div);
    div.style.padding = "12px";
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
            let sizeS = prompt("Type one number");
            let sizeN = sizeL * sizeS;
                for(i = 1; i <= sizeN; i++) {
                    const para = document.querySelector("p");
                    const div = document.createElement("div");
                    para.appendChild(div);
                    div.style.padding = "12px";
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
                }    
        }
             
                   
}












