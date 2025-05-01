


var side=document.getElementById("side-navbar")
var menuicon=document.getElementById("menu")
var closenav=document.getElementById("close-nav")

var closeBtn = document.getElementById("close");
  var adBox = document.getElementById("adBox");

  closeBtn.addEventListener("click", function() {
      adBox.style.display = "none"; 
  });

menuicon.addEventListener("click",function(){
        side.style.right=0;
    })
closenav.addEventListener("click",function(){
  side.style.right="-50%";
})




// party--------------------------------------------------------------------
const checkbox1=document.getElementById("toggleCheckbox1")
const par=document.getElementById("Party")
const par1=document.getElementById("Party1")
const par2=document.getElementById("Party2")

checkbox1.addEventListener("click",function(){

  if (checkbox1.checked) {

  sum.style.display='none';
  par.style.display='inline';
  bea.style.display='none'
  par1.style.display = 'inline'
  sum1.style.display='none'
  bea1.style.display='none'
  par2.style.display = 'inline'
  sum2.style.display='none'
  bea2.style.display='none'
  }
  else {
    par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'

  }

});
// ----------------------------------------------------------------

// Beach dress------------------------------------------------
const checkbox2=document.getElementById("toggleCheckbox2")

const bea=document.getElementById("beach")
const bea1=document.getElementById("beach1")
const bea2=document.getElementById("beach2")
checkbox2.addEventListener("click",function(){

  if (checkbox2.checked) {
    sum.style.display='none';
  par.style.display='none';
  bea.style.display='inline'
  par1.style.display = 'none'
  sum1.style.display='none'
  bea1.style.display='inline'
  par2.style.display = 'none'
  sum2.style.display='none'
  bea2.style.display='inline'
  }
  else {
    par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'

  }
})
// --------------Summer--------------------------------------------------
const checkbox=document.getElementById("toggleCheckbox")

const sum=document.getElementById("summer")
const sum1=document.getElementById("summer1")
const sum2=document.getElementById("summer2")

checkbox.addEventListener("click",function(){

  if (checkbox.checked) {
    sum.style.display='inline';
  par.style.display='none';
  bea.style.display='none'
  par1.style.display = 'none'
  sum1.style.display='inline'
  bea1.style.display='none'
  par2.style.display = 'none'
  sum2.style.display='inline'
  bea2.style.display='none'
  }
   else {
    par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'

  }
})
// RED-------------------------------------------------
var check=document.getElementById("togglered")



check.addEventListener("click",function(){

  if (check.checked) {
    sum.style.display='none';
  par.style.display='none';
  bea.style.display='inline'
  par1.style.display = 'none'
  sum1.style.display='none'
  bea1.style.display='none'
  par2.style.display = 'none'
  sum2.style.display='none'
  bea2.style.display='none'
  }
  
else{
  par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'
}
})


// BLUE----------------------------
var check1=document.getElementById("toggleblue")

check1.addEventListener("click",function(){

if (check1.checked) {
  sum.style.display='none';
  par.style.display='none';
  bea.style.display='none'
  par1.style.display = 'inline'
  sum1.style.display='inline'
  bea1.style.display='none'
  par2.style.display = 'none'
  sum2.style.display='none'
  bea2.style.display='none'
}
else{
  par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'
}
})
// Green-----------------------------------
var check2=document.getElementById("togglegreen")


check2.addEventListener("click",function(){

if (check2.checked) {
  sum.style.display='none';
  par.style.display='none';
  bea.style.display='none'
  par1.style.display = 'none'
  sum1.style.display='none'
  bea1.style.display='none'
  par2.style.display = 'inline'
  sum2.style.display='inline'
  bea2.style.display='inline'
}
else{
  par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'
}
})

// yellow-----------------------------------------------
var check3=document.getElementById("toggleyellow")

check3.addEventListener("click",function(){


  if (check3.checked) {

sum.style.display='inline';
  par.style.display='inline';
  bea.style.display='none'
  par1.style.display = 'none'
  sum1.style.display='none'
  bea1.style.display='none'
  par2.style.display = 'none'
  sum2.style.display='none'
  bea2.style.display='none'

}
else{
 
  par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'
 
}

})

// All------------------------------------
var check4=document.getElementById("toggleCheckbox3")


check4.addEventListener("click",function(){


if (check4.unchecked) {
sum.style.display='inline';
par.style.display='inline';

}
else{
par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'

}

})
// Arrival new-----------------------------------
var check5=document.getElementById("togglenew")


check5.addEventListener("click",function(){


if (check5.checked) {

  sum.style.display='none';
  par.style.display='none';
  bea.style.display='inline'
  par1.style.display = 'none'
  sum1.style.display='inlinee'
  bea1.style.display='none'
  par2.style.display = 'inline'
  sum2.style.display='none'
  bea2.style.display='none'
}
else{
par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'

bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'

}

})

// Arrival old----------------------------------------------

var check6=document.getElementById("toggleold")


check6.addEventListener("click",function(){


if (check6.checked) {

  sum.style.display='inline';
  par.style.display='inline';
  bea.style.display='none'
  par1.style.display = 'inline'
  sum1.style.display='none'
  bea1.style.display='inline'
  par2.style.display = 'none'
  sum2.style.display='inline'
  bea2.style.display='inline'
}
else{
par.style.display = 'inline'
sum.style.display='inline'
bea.style.display='inline'
par1.style.display = 'inline'
sum1.style.display='inline'
bea1.style.display='inline'
par2.style.display ='inline'
sum2.style.display='inline'
bea2.style.display='inline'

}

})

