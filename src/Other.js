const text=document.querySelector('#editor');

export function download(){  
    var printContent=text.innerHTML
    var printWindow = window.open('', '', 'height=200,width=400');
    printWindow.document.write('<html><head><title>Print DIV Content</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}

export function bold(){
    document.execCommand('bold')
    return;
}

export function italic(){
    document.execCommand('italic')
}

export function underline(){
    document.execCommand('underline')
}


export function setFontFamily(){
    let font=document.querySelector('#font-family').value
    document.execCommand('fontName',false,font)
    console.log("Font change to ",font)
}

export function setFontSize(){
    let size=document.querySelector('#font-size').value
    document.execCommand("fontSize",false,size)
}

export function setFontColor(){
    let color=document.querySelector('#font-color').value
    color=color.replace("#","");
    document.execCommand('foreColor',false,color)
    console.log("Font color set to ",color)
}

export function hlt(){
    let color=document.querySelector('#font-hlt').value
    color=color.replace("#","");
    document.execCommand('HiliteColor',false,color)
    console.log("Hilite color set to ",color)
}

export function bulleting(cmd){
    document.execCommand(cmd);
}

export function addImage(){
    let imgPath= document.querySelector("#upload-image").value.split("\\")[2];
    document.querySelector("#editor").innerHTML+=`<img src="./images/${imgPath}">`
    document.querySelector("#upload-image").value=""
}

export function intend(cmd){
    document.execCommand(cmd)
}


export function changeDoc(cmd,value=null){
    if(value){
        document.execCommand(cmd,false,value)
    }
    else{
        document.execCommand(cmd)
    }
}