const buttons= document.querySelectorAll(".button");
const body= document.querySelector("body");
buttons.forEach(function (button) {
 
    button.addEventListener('click',function(e){
body.style.backgroundColor=e.target.id;
// if (e.target.id==="grey") {
//     body.style.backgroundColor=e.target.id;
// }
// if (e.target.id==="green") {
//     body.style.backgroundColor=e.target.id;
// }
// if (e.target.id==="red") {
//     body.style.backgroundColor=e.target.id;
// }
// if (e.target.id==="orange") {
//     body.style.backgroundColor=e.target.id;
// }
    })
    
})