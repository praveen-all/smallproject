let nam=document.getElementById("nam");
nam.addEventListener('mouseenter',function(e){
    let namImage=document.getElementById("namImage");
    namImage.style.display="none";
    nam.style.background="linear-gradient(orange,white,green)";
})
nam.addEventListener('mouseleave',function(e){
    let namImage=document.getElementById("namImage");
    namImage.style.display="block";
    nam.style.background=" transparent";
})


let body=document.querySelector(".body");
let close=document.getElementById("close");
let container=document.querySelector(".container")
let samsung=document.getElementById("samsung");
let boody=document.getElementsByTagName('body');
samsung.addEventListener('click',function(){
   
container.style.display="flex";
container.style.position="relative";

body.replaceWith(container);


})

close.addEventListener('click',function (e) {
    console.log("u clicked")
   
    container.style.display="none";
    container.style.position="absolute";
    body.style.opacity="1";
    container.replaceWith(body);
    

})



let close1=document.querySelector(".close1");
let container1=document.querySelector("#container1")
let redmi=document.getElementById("redmi");
redmi.addEventListener('click',function(){
   
container1.style.display="flex";
container1.style.position="relative";

body.replaceWith(container1);


})

close1.addEventListener('click',function (e) {
    console.log("u clicked")
   
    container1.style.display="none";
    container1.style.position="absolute";
    body.style.opacity="1";
    container1.replaceWith(body);
    

})



let close2=document.querySelector(".close2");
let container2=document.querySelector("#container2")
let iphone=document.getElementById("iphone");
iphone.addEventListener('click',function(){
   
container2.style.display="flex";
container2.style.position="relative";

body.replaceWith(container1);


})

close2.addEventListener('click',function (e) {
    console.log("u clicked")
   
    container2.style.display="none";
    container2.style.position="absolute";
    body.style.opacity="1";
    container2.replaceWith(body);
    

})
// 
let close3=document.querySelector(".close3");
let container3=document.querySelector("#container3")
let sony=document.getElementById("sony");
sony.addEventListener('click',function(){
   
container3.style.display="flex";
container3.style.position="relative";

body.replaceWith(container1);


})

close3.addEventListener('click',function (e) {
    console.log("u clicked")
   
    container3.style.display="none";
    container3.style.position="absolute";
    body.style.opacity="1";
    container3.replaceWith(body);
    

})
// 
let close4=document.querySelector(".close4");
let container4=document.querySelector("#container4")
let lg=document.getElementById("lg");
lg.addEventListener('click',function(){
   
container4.style.display="flex";
container4.style.position="relative";

body.replaceWith(container4);


})

close4.addEventListener('click',function (e) {
    console.log("u clicked")
   
    container4.style.display="none";
    container4.style.position="absolute";
    body.style.opacity="1";
    container4.replaceWith(body);
    

})


let close5=document.querySelector(".close5");
let container5=document.querySelector("#container5")
let oneplus=document.getElementById("oneplus");
oneplus.addEventListener('click',function(){
   
container5.style.display="flex";
container5.style.position="relative";

body.replaceWith(container5);


})

close5.addEventListener('click',function (e) {
    console.log("u clicked")
   
    container5.style.display="none";
    container5.style.position="absolute";
    body.style.opacity="1";
    container5.replaceWith(body);
    

})


// for(let i=1;i<=5;i++){i
//     let closei=document.querySelector(".closei");
// let containeri=document.querySelector("#containeri")
// let oneplus=document.getElementById("onei");
// oneplus.addEventListener('click',function(){
   
// containeri.style.display="flex";
// containeri.style.position="relative";

// body.replaceWith(containeri);


// })

// closei.addEventListener('click',function (e) {
//     console.log("u clicked")
   
//     containeri.style.display="none";
//     containeri.style.position="absolute";
//     body.style.opacity="1";
//     containeri.replaceWith(body);
    

// })
// }


