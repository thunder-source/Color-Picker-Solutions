const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ 
  filterItem.onclick = (selectedItem)=>{ 
    if(selectedItem.target.classList.contains("item")){ 
      filterItem.querySelector(".active").classList.remove("active"); 
      selectedItem.target.classList.add("active"); 
      let filterName = selectedItem.target.getAttribute("data-name"); 
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); 
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide");
          image.classList.add("show");
        }else{
          image.classList.add("hide"); 
          image.classList.remove("show");
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); 
  }
}

var color1 = document.querySelector(".color11");
var color2 = document.querySelector(".color12");
var box = document.getElementById("box");
function Gradient() {
 box.style.background = 
 "linear-gradient(to right, " 
 + color1.value 
 + ", " 
 + color2.value 
 + ")";
}
color1.addEventListener("input", Gradient);
color2.addEventListener("input", Gradient);

function gradbox(){
  color1.select();
  let color11Value = color1.value;
  color1.select();
  let color12Value = color2.value;
  navigator.clipboard.writeText(`linear-gradient(to right, ${color11Value}, ${color12Value});`);
  alert(`linear-gradient(to right, ${color11Value}, ${color12Value});`);
}

function createHex() {
  var hexCode1 = "";
  var hexValues1 = "0123456789abcdef";
  
  for ( var i = 0; i < 6; i++ ) {
    hexCode1 += hexValues1.charAt(Math.floor(Math.random() * hexValues1.length));
  }
  return hexCode1;
}
function generate() { 
  var deg = Math.floor(Math.random() *360);
  var gradient = "linear-gradient(" + deg + "deg, " + "#" + createHex() + ", " + "#" + createHex() +")";
  document.getElementById("output").innerHTML = gradient;
  document.getElementById("bg").style.background = gradient;
  //console.log(hexCode1, hexCode2);
}
document.onload = generate();

// const data = [
//   {
//     color1:"#B8A2C1",
//     color2:"#BdA5C1"
//   },
//   {
//     color1:"#B8A2C1",
//     color2:"#BdA5C1"
//   },
//   {
//     color1:"#B8A2C1",
//     color2:"#BdA5C1"
//   },
//   {
//     color1:"#B8A2C1",
//     color2:"#BdA5C1"
//   },
//   {
//     color1:"#B8A2C1",
//     color2:"#BdA5C1"
//   },
//   {
//     color1:"#B8A2C1",
//     color2:"#BdA5C1"
//   },
//   {
//     color1:"#B8A2C1",
//     color2:"#BdA5C1"
//   },
// ]

// data.map(() => {
    
// <div class="image" data-name="left"><span><div id="box" class="box1" style="background: linear-gradient(to right, #A2C1BB , #B8A2C1); "></div></span>
// <div class="inputcolor">
// <input class="color11" type="color" name="color1" value="#A2C1BB">
// <input class="color12" type="color" name="color2" value="#B8A2C1">
// <button onclick="gradbox()">Copy</button>
// </div>
//   })
