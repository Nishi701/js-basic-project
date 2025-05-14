const clock = document.getElementById('dclock');

let time = new Date();
// console.log(time);
// console.log(time.toLocaleTimeString());
setInterval(function(){
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
},1000)