// Dom - Document object model
// - Everything we view in then page is written in body tag, so dom is basically manipulationg html tag andd it's control in the page

//eg. 
// var btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     btn.textContent("Starting...");
// })


//Selection
    // document.getElementById              _
    // document.getElementsByClassName      _|- document.querySelector
    // document.getElementsByTagName        _|
//Note: If we have multiple h3 tags and used one queryselector for h3 then it by default selects first h3 and remaing will be unaccessed , for accesing all we will use querySelectorAll
// Save

// var btm = document.querySelector("button");

//Modifying Contents   - innerHTML, textContent
// let txt = document.querySelector("h3");
// txt.textContent += " Aniket"
// txt.innerHTML += " <h1>Aniket</h1>"

// Manipulating Style and Classes
// Style
// var x = document.querySelector("h1");
// x.style.color = "red"; - using Style Tag
// x.classList.add("makeitred");

// Creating and Deleting Elements - createElement(), appendChild(), removeChild()

// let h1 = document.createElement("h1");
// h1.textContent = "Hey";

// document.querySelector("body").appendChild(h1);

// document.querySelector("button").addEventListener("click",function(){
//     document.querySelector("body").removeChild(h1);
// })

//Event Handling    -   addEventListener(event, callback) event = even to occcur, callback - funtion ehich is need to perform

let btn = document.querySelector("button");
btn.addEventListener("mouseover",function(){
    btn.textContent = "Starting...";
    btn.style.backgroundColor = "red";
})

btn.addEventListener("mouseleave",function(){
    btn.textContent = "Ended...";
    btn.style.backgroundColor = "lightblue";
})
// Events - click, dblclick, mouseover,mouseleave

