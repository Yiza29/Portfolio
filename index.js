// const bars = document.getElementById('nav-menu')
// const menu = document.getElementById('nav-bar')
// let hire = document.getElementById("hire")
// let connect = document.getElementById("connect")


// if (bar) {
    // bars.addEventListener ( "click", function() {
    //     bars.classList.toggle('is-active');
    //     // bar.classList.toggle('active');
    // })


// function employ () {
//     hire = "I am seeking for a job"
//     hire.innerHTML = hire
//     console.log(hire)
// }


// window.alert("Welcome User!!!")

let openBarEl = document.getElementById("dropdown")
const sidebarEl = document.getElementById("openbar")
const closeSidebarEl = document.getElementById("closebar")

// openBarEl.addEventListener ("click", ()=>{
//     openBarEl.style.display = "block";
// })

// closeSidebarEl.addEventListener ("click", ()=>{
//     closeSidebarEl.style.display = "none";
// })

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }