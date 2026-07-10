const Data = document.getElementById('data');
const input = document.getElementById('input');
const btn = document.getElementById('btn');

let currentvalue = "";

input.addEventListener("input", function (event) {
    currentvalue = event.target.value;
})

btn.addEventListener("click", () => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    const d = document.createElement("button");
    const c = document.createElement("button");
    const div1 = document.createElement("div");
    Data.appendChild(div);
    div.appendChild(p);
    div.appendChild(div1)
    div1.appendChild(d);
    div1.appendChild(c);
    p.textContent = currentvalue;
    d.textContent = "Delete"
    c.textContent = "Compleate"
    // data:

    Data.style.display = "flex"
    Data.style.flexDirection = "column"
    Data.style.alignItems = "center"
    Data.style.rowGap = "5px"
    Data.style.padding = "10px"

    // p
    p.style.margin = 0
    p.style.borderRadius = "4px"
    p.style.padding = "4px"
    p.style.color = "black"
    p.style.textAlign = "center"
    p.style.padding = "8px"

    // div
    div.style.display = "flex"
    div.style.flexDirection = "row"
    div.style.alignItems = "center"
    div.style.columnGap = "50px"
    div.style.padding = "15px"
    div.style.backgroundColor="burlywood"
    div.style.borderRadius="10px"


    // div1
    div1.style.display = "flex"
    div1.style.flexDirection = "row"
    div1.style.alignItems = "flex-end"
    div1.style.columnGap = "10px"


    // delete
    d.style.backgroundColor = "red"
    d.style.borderRadius = "4px"
    d.style.padding = "8px"
    d.style.color = "white"
    d.style.textAlign = "center"
    d.style.border = "none"

    // button
    c.style.backgroundColor = "green"
    c.style.borderRadius = "4px"
    c.style.padding = "8px"
    c.style.color = "white"
    c.style.textAlign = "center"
    c.style.border = "none"


    currentvalue = "";
    input.value = ""

    d.addEventListener("click", () => {
        Data.removeChild(div);
    });

    c.addEventListener("click", () => {
        p.style.textDecoration = "line-through"
    })
});




