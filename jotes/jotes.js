

const reg = "short-title";

let y = document.getElementsByTagName('a');
for (var i = 0; i < y.length-1; i++) {
    let classNames = y[i].className;
    if (classNames.includes(reg)) {
        console.log(y[i].innerHTML);
        
    }
    else{}
}
x=document.getElementsByTagName("ins");
for (var i = 0; i < y.length-1; i++) {
    console.log(x[i].innerText);
}