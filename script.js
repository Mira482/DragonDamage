var wrap = document.body.querySelector(".wrapper");
var dragonDamage= 0
var type=[fire=3,ice=1,poison=4];
function boxMaker(clicked,type){
  var box = document.createElement("div");
  if(fire){
    dragonDamage=dragonDamage+fire-1
  }
  box.innerHTML="Dragon Damage: "+dragonDamage
  wrap.appendChild(box);
}

document.body.querySelector(".a").addEventListener("click",function(){
  boxMaker()
})

document.body.querySelector(".b").addEventListener("click",function(){
  boxMaker()
})

document.body.querySelector(".c").addEventListener("click",function(){
  boxMaker()
})