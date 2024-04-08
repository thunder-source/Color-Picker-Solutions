let colorIndicator = document.getElementById('color-indicator');
let hex = document.getElementById('hex')
let rgb = document.getElementById('rgb')
let rgba = document.getElementById('rgba')
let hsl = document.getElementById('hsl')
let hsla = document.getElementById('hsla')
let scale = document.getElementById('opacity-select')

var colorPicker = new iro.ColorPicker('#picker', {
    width: 180, 
    color: "#fff"
});

colorPicker.on('color:change' , function(color) {
    colorIndicator.style.backgroundColor = color.hexString;
    
    let a = color.hexString
    hex.style.color = 'black'
    hex.style.fontWeight = 'normal'
    hex.innerHTML = `${a} <button onclick="Myfuc1()"><i class="fa-solid fa-copy"></i><span class="myclip1" id="myToolTip1"></span></button>`

    let b = color.rgbString
    rgb.style.color = 'black'
    rgb.style.fontWeight = 'normal'
    rgb.innerHTML = `${b} <button onclick="Myfuc2()"><i class="fa-solid fa-copy"></i><span class="myclip2" id="myToolTip2"></span></button>`

    let c = color.rgbaString
    rgba.style.color = 'black'
    rgba.style.fontWeight = 'normal'
    rgba.innerHTML = `${c} <button onclick="Myfuc3()"><i class="fa-solid fa-copy"></i><span class="myclip3" id="myToolTip3"></span></button>`

    let d = color.hslString
    hsl.style.color = 'black'
    hsl.style.fontWeight = 'normal'
    hsl.innerHTML = `${d} <button onclick="Myfuc4()"><i class="fa-solid fa-copy"></i><span class="myclip4" id="myToolTip4"></span></button>`

    let e = color.hslaString
    hsla.style.color = 'black'
    hsla.style.fontWeight = 'normal'
    hsla.innerHTML = `${e} <button onclick="Myfuc5()"><i class="fa-solid fa-copy"></i><span class="myclip5" id="myToolTip5"></span></button>`
})




function Myfuc1() {
     let a = hex
     navigator.clipboard.writeText(a.innerText)
     let tool1 = document.getElementById('myToolTip1')
     let tool2 = document.getElementById('myToolTip2')
     let tool3 = document.getElementById('myToolTip3')
     let tool4 = document.getElementById('myToolTip4')
     let tool5 = document.getElementById('myToolTip5')
     a.style.fontWeight = 'bolder'
     a.style.color = 'green'
     rgb.style.color = 'black'
     rgb.style.fontWeight = 'normal'
     rgba.style.color = 'black'
     rgba.style.fontWeight = 'normal'
     hsl.style.color = 'black'
     hsl.style.fontWeight = 'normal'
     hsla.style.color = 'black'
     hsla.style.fontWeight = 'normal'
     tool1.innerHTML = "Copied"
     tool2.innerHTML = ''
     tool3.innerHTML = ''
     tool4.innerHTML = ''
     tool5.innerHTML = ''
}

function Myfuc2() {
    let a = rgb
    navigator.clipboard.writeText(a.innerText)
    let tool1 = document.getElementById('myToolTip1')
    let tool2 = document.getElementById('myToolTip2')
    let tool3 = document.getElementById('myToolTip3')
    let tool4 = document.getElementById('myToolTip4')
    let tool5 = document.getElementById('myToolTip5')
    a.style.fontWeight = 'bolder'
    a.style.color = 'green'
    hex.style.color = 'black'
    hex.style.fontWeight = 'normal'
    rgba.style.color = 'black'
    rgba.style.fontWeight = 'normal'
    hsl.style.color = 'black'
    hsl.style.fontWeight = 'normal'
    hsla.style.color = 'black'
    hsla.style.fontWeight = 'normal'
    tool2.innerHTML = "Copied"
    tool1.innerHTML = ''
    tool3.innerHTML = ''
    tool4.innerHTML = ''
    tool5.innerHTML = ''
}

function Myfuc3() {
    let a = rgba
    navigator.clipboard.writeText(a.innerText)
    let tool1 = document.getElementById('myToolTip1')
    let tool2 = document.getElementById('myToolTip2')
    let tool3 = document.getElementById('myToolTip3')
    let tool4 = document.getElementById('myToolTip4')
    let tool5 = document.getElementById('myToolTip5')
    a.style.fontWeight = 'bolder'
    a.style.color = 'green'
    hex.style.color = 'black'
    hex.style.fontWeight = 'normal'
    rgb.style.color = 'black'
    rgb.style.fontWeight = 'normal'
    hsl.style.color = 'black'
    hsl.style.fontWeight = 'normal'
    hsla.style.color = 'black'
    hsla.style.fontWeight = 'normal'
    tool3.innerHTML = "Copied"
    tool1.innerHTML = ''
    tool2.innerHTML = ''
    tool4.innerHTML = ''
    tool5.innerHTML = ''
}

function Myfuc4() {
    let a = hsl
    navigator.clipboard.writeText(a.innerText)
    let tool1 = document.getElementById('myToolTip1')
    let tool2 = document.getElementById('myToolTip2')
    let tool3 = document.getElementById('myToolTip3')
    let tool4 = document.getElementById('myToolTip4')
    let tool5 = document.getElementById('myToolTip5')
    a.style.fontWeight = 'bolder'
    a.style.color = 'green'
    hex.style.color = 'black'
    hex.style.fontWeight = 'normal'
    rgb.style.color = 'black'
    rgb.style.fontWeight = 'normal'
    rgba.style.color = 'black'
    rgba.style.fontWeight = 'normal'
    hsla.style.color = 'black'
    hsla.style.fontWeight = 'normal'
    tool4.innerHTML = "Copied"
    tool1.innerHTML = ''
    tool2.innerHTML = ''
    tool3.innerHTML = ''
    tool5.innerHTML = ''
}

function Myfuc5() {
    let a = hsla
    navigator.clipboard.writeText(a.innerText)
    let tool1 = document.getElementById('myToolTip1')
    let tool2 = document.getElementById('myToolTip2')
    let tool3 = document.getElementById('myToolTip3')
    let tool4 = document.getElementById('myToolTip4')
    let tool5 = document.getElementById('myToolTip5')
    a.style.fontWeight = 'bolder'
    a.style.color = 'green'
    hex.style.color = 'black'
    hex.style.fontWeight = 'normal'
    rgb.style.color = 'black'
    rgb.style.fontWeight = 'normal'
    rgba.style.color = 'black'
    rgba.style.fontWeight = 'normal'
    hsl.style.color = 'black'
    hsl.style.fontWeight = 'normal'
    tool5.innerHTML = "Copied"
    tool1.innerHTML = ''
    tool2.innerHTML = ''
    tool3.innerHTML = ''
    tool4.innerHTML = ''
}

scale.addEventListener('change', () => {
    let val = scale.value
    let b = rgb.innerText
    let str = ''
    for(let i = 0; i < b.length - 2; i++) {
        str = str + b.charAt(i)
    }
    str = str + ',' + ' ' + val + ')'
    colorIndicator.style.backgroundColor = str
    rgba.innerHTML = `${str} <button onclick="Myfuc3()"><i class="fa-solid fa-copy"></i><span class="myclip3" id="myToolTip3"></span></button>`
    rgba.style.color = 'black'
    rgba.style.fontWeight = 'normal'

    let bh = hsl.innerText
    let strh = ''
    for(let j = 0; j < bh.length - 2; j++) {
        strh = strh + bh.charAt(j)
    }
    strh = strh + ',' + ' ' + val + ')'
    hsla.innerHTML = `${strh} <button onclick="Myfuc5()"><i class="fa-solid fa-copy"></i><span class="myclip5" id="myToolTip5"></span></button>`
    hsla.style.color = 'black'
    hsla.style.fontWeight = 'normal'

    hex.style.color = 'black'
    hex.style.fontWeight = 'normal'
    rgb.style.color = 'black'
    rgb.style.fontWeight = 'normal'
    hsl.style.color = 'black'
    hsl.style.fontWeight = 'normal'
})

 

