import "./style.css"
import {hlt,intend,addImage,bulleting,download,bold,italic,underline,setFontFamily,setFontSize,setFontColor} from './Other'
let ele=localStorage.getItem("text-editor-item");

if(ele){
    document.querySelector("#editor").innerHTML=ele
}
document.querySelector("#editor").focus()
document.querySelector("#bullets").classList.remove("on")

//elements
const downloadBtn=document.querySelector("#download")
const boldBtn=document.querySelector("#bold")
const italicBtn=document.querySelector("#italic")
const underlineBtn=document.querySelector("#underline")
const fontFamBtn=document.querySelector("#font-family")
const fontSizeBtn=document.querySelector("#font-size")
const fontColorBtn=document.querySelector("#font-color")
const bulletBtn=document.querySelector("#bullets")
const olbulletBtn=document.querySelector("#bullets-ol")
const imgBtn=document.querySelector("#upload-image")
const leftJustify=document.querySelector("#justify-left")
const rightJustify=document.querySelector("#justify-right")
const middleJustify=document.querySelector("#justify-middle")
const fullJustify=document.querySelector("#justify-full")
const hilite=document.querySelector("#font-hlt")
//elements


//actions

// document.querySelector("#editor").
downloadBtn.addEventListener('click',()=>download())
boldBtn.addEventListener('click',()=>bold())
italicBtn.addEventListener('click',()=>italic())
underlineBtn.addEventListener('click',()=>underline())
fontFamBtn.addEventListener('change',()=>setFontFamily())
fontSizeBtn.addEventListener('change',()=>setFontSize())
fontColorBtn.addEventListener('change',()=>setFontColor())
bulletBtn.addEventListener('click',()=>bulleting('insertUnorderedList'))
olbulletBtn.addEventListener('click',()=>bulleting('insertOrderedList'))
imgBtn.addEventListener('change',()=>addImage())
leftJustify.addEventListener('click',()=>intend('justifyLeft'))
rightJustify.addEventListener('click',()=>intend('justifyRight'))
middleJustify.addEventListener('click',()=>intend('justifyCenter'))
fullJustify.addEventListener('click',()=>intend('justifyFull'))
hilite.addEventListener('change',()=>hlt())

//actions


setInterval(()=>{
    let txt=document.querySelector("#editor").innerHTML
    localStorage.setItem("text-editor-item",txt)
},1000)