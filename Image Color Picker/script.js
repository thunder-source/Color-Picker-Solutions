const imageInput = document.querySelector("#select-image");
const imagePreview = document.querySelector(".preview");

if (!window.EyeDropper) {
  alert("Your browser does not support this feature");
}
const eyedropper = new EyeDropper();

const pickerBtn = document.querySelector(".open-picker");
const Hex_res = document.querySelector(".res");
const rgb_res = document.querySelector(".rgb-res");

imageInput.addEventListener("change", function () {
  imagePreview.classList.add("active");
  const file = this.files[0];
  if (!file) return;
  const read = new FileReader();
  read.addEventListener("load", function () {
    //   this id conditions check only image type file must be selected
    if (this.result.includes("image")) {
      imagePreview.src = this.result;
      // console.log("PNG");
    } else {
      alert("Please select a valid image");
    }
  });
  read.readAsDataURL(file);
});

pickerBtn.addEventListener("click", function () {
  try {
    eyedropper.open().then((res) => {
      // console.log(res);
      //   result.innerHTML = `Color Picked is : <b> ${res.sRGBHex}</b>`;
      Hex_res.innerHTML = `${res.sRGBHex}`;
      document.querySelector(".rgb-res").innerHTML = `rgb(${res.sRGBHex
        .substring(1, 7)
        .convertToRGB()})`;
      document.querySelector(".hls-res").innerHTML = `${hexToHSL(res.sRGBHex)}`;
    });
  } catch (err) {
    console.log("User cancelled the selection");
  }
});

function copy(e) {
  /* Get the text field */
  let copyText;
  toastCall();
  if (e === 0) {
    copyText = document.getElementsByClassName("result-pre");
  } else if (e === 1) {
    copyText = document.getElementsByClassName("rgb-res");
  } else if (e === 2) {
    copyText = document.getElementsByClassName("hls-res");
  }
  // document.getElementsByClassName
  // let copyText;

  // if (e === 0) {
  //   copyText = Hex_res;
  // }

  /* Select the text field */
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText[0].innerHTML);

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
}

// values convertor

String.prototype.convertToRGB = function () {
  if (this.length != 6) {
    throw "Only six-digit hex colors are allowed.";
  }

  var aRgbHex = this.match(/.{1,2}/g);
  var aRgb = [
    parseInt(aRgbHex[0], 16),
    parseInt(aRgbHex[1], 16),
    parseInt(aRgbHex[2], 16),
  ];
  return aRgb;
};

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;
  if (H.length == 4) {
    r = "0x" + H[1] + H[1];
    g = "0x" + H[2] + H[2];
    b = "0x" + H[3] + H[3];
  } else if (H.length == 7) {
    r = "0x" + H[1] + H[2];
    g = "0x" + H[3] + H[4];
    b = "0x" + H[5] + H[6];
  }
  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;
  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return "hsl(" + h + "," + s + "%," + l + "%)";
}

// toast effect

// const toast_btn = document.querySelector("#toast-btn"),
toast = document.querySelector(".toast");
(closeIcon = document.querySelector(".close")),
  (progress = document.querySelector(".progress"));

let timer1, timer2;

function toastCall() {
  toast.classList.add("active");
  progress.classList.add("active");

  timer1 = setTimeout(() => {
    toast.classList.remove("active");
  }, 5000); //1s = 1000 milliseconds

  timer2 = setTimeout(() => {
    progress.classList.remove("active");
  }, 5300);
}

// toast_btn.addEventListener("click", () => {
//   toast.classList.add("active");
//   progress.classList.add("active");

//   timer1 = setTimeout(() => {
//     toast.classList.remove("active");
//   }, 5000); //1s = 1000 milliseconds

//   timer2 = setTimeout(() => {
//     progress.classList.remove("active");
//   }, 5300);
// });

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progress.classList.remove("active");
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});
