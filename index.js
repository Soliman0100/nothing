let btns = document.querySelectorAll("button");
let secNone = document.querySelector(".secNone");
let secBlock = document.querySelector(".secBlock");
let h3 = document.querySelector(".secBlock h3");
let submint = document.querySelector("#sub");
let nigga = document.querySelector(".nigga")
let valueB ;

btns.forEach((el)=>{
    el.onclick = function(){
        btns.forEach((el) => el.style.backgroundColor = "#ffffff1c")
        el.style.backgroundColor = "hsl(25, 97%, 53%)"
        valueB = el.value
    }
})
submint.onclick = ()=>{
   if(!valueB) return;
    if(valueB <= 3 && valueB > 2){
        nigga.innerHTML = "FR NIGGA ???"
        nigga.style.cssText = `
font-size: 2.5rem;
font-whet: bold;
color: white;
`;
    }
    if(valueB < 3) nigga.innerHTML = `<img style="width: 300px; border-radius: 10px;" src="Neo-nazi.jpg" alt="">`
    if(valueB >= 4) h3.textContent = `You selected ${valueB} out of 5 `
    secNone.classList.add("hidden");
    secBlock.classList.remove("hidden");
}
