let count = 0;

const root = document.getElementById("root");

let h1 = document.createElement("h1");

h1.textContent = `Counter : ${count}`;

let btn = document.createElement("button")

btn.textContent = "Increment"

btn.addEventListener("click",()=>{
    count++;
    h1.textContent = `Counter : ${count}`
    console.log(count);
    
})
root.append(h1)
root.append(btn)