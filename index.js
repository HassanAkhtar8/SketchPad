let main = document.querySelector('main');
let number = document.getElementById('inputs');
let btn = document.querySelector(".submit");
let body = document.querySelector(".body");
let footer = document.querySelector(".footer");
let red,green,blue,white,black;
red = document.querySelector(".red");
green = document.querySelector(".green");
blue = document.querySelector(".blue");
white = document.querySelector(".white");
black = document.querySelector(".black");
let boxes, amount, relod;
let color = 'orange';
let spans = document.querySelectorAll(".span")


let button1 = document.createElement("button");
button1.className='reset';
button1.innerText="Clean Pad";
let button = document.createElement("button");
button.className = 'relod';
button.innerText = "Reload";


spans.forEach((span) => {
   
    span.addEventListener("click", (e) => {
        color = e.target.dataset.colour;

    })
})

const resetBtn =()=>{
    footer.appendChild(button1);
    button1.addEventListener("click",()=>{
        boxes.forEach((box)=>{
            box.style.backgroundColor="white";
        })
    })
}

const reloadBtn = () => {
    footer.appendChild(button);
    relod = document.querySelector('.relod');
    relod.addEventListener("click", () => {
        window.location.reload();
    })

}


const boxColor = () => {

    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = color;
        })
    })

}

const boxer = (amount) => {
    main.innerHTML = ``;
    for (let i = 1; i <= amount; i++) {
        let div = document.createElement("div");
        div.className = `box ${i}`;
        main.appendChild(div);

    }
    reloadBtn();
    resetBtn();
    boxColor();
    
}


btn.addEventListener("click", (e) => {
    e.preventDefault();
    amount = number.value;
    boxer(amount);
})
