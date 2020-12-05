const a = document.getElementsByClassName('section')[0]
const b = document.getElementsByClassName('section')[1]
var counter = document.getElementsByClassName('counter');
var arrBtn = [document.getElementsByClassName('section')];
var arrName = [];
var arrVal = [];
var n1, n2, n3, n4, n5, n6;
var clicks = [n1, n2, n3, n4, n5, n6]; 


/*for(let i = 0; i < arrBtn[0].length; i++){
    arrName.push(arrBtn[0].item(i).attributes[1].nodeValue);
    arrVal.push(arrBtn[0].item(i).childNodes[1].innerText);
    localStorage.setItem(arrName[i], arrVal[i]);  
}*/

var count = (elem) => {  
    let i = checkElem(elem);
    if(i % 2 == 0){
        clicks[i]++;
        StoreClicks(clicks, i);
        total = clicks[i] + clicks[i+1];
        total = (clicks[i] / total) * 100;
        elem.childNodes[1].innerText =  Math.floor(total) + "%";
        Store(elem);
        
        total = clicks[i] + clicks[i+1];
        total = (clicks[i+1] / total) * 100;
        var next = elem.nextElementSibling;
        next.childNodes[1].innerText = Math.floor(total) + "%";
        Store(next, clicks[i+1], i);
    } 
    else if(i % 2 != 0){
        clicks[i]++;
        StoreClicks(clicks, i);
        total = clicks[i] + clicks[i-1];
        total = (clicks[i] / total) * 100;
        elem.childNodes[1].innerText =  Math.floor(total) + "%";
        Store(elem);

        var prev = elem.previousElementSibling;
        total = clicks[i] + clicks[i-1];
        total = (clicks[i-1] / total) * 100;
        prev.children[1].innerText = Math.floor(total) + "%";      
        Store(prev);
    }

}

var checkElem = (elem) =>{
    let i = 0;
    for(i = 0; i < arrBtn[0].length-1; i++){
        if(elem == arrBtn[0].item(i)){
            return i;
        }
    }   
}



var StoreClicks = (c, i) =>{
    if( i % 2 == 0){
        localStorage.setItem(i, c[i]);
        localStorage.setItem(i+1, c[i+1]);
    }else if( i % 2 != 0){
        localStorage.setItem(i, c[i]);
        localStorage.setItem(i-1, c[i-1]);
    }
}

var Store = (elem) =>{
    var name = elem.attributes[1].nodeValue;
    var value = elem.childNodes[1].innerText;
    
    if(name == localStorage.getItem(name)){
        localStorage.removeItem(name);
        localStorage.setItem(name, value);
    }else{
        localStorage.setItem(name, value);
    } 
}

/*var viewValue = (elem) =>{
    for(let i = 7; i < localStorage.length){    
        localStorage.getItem(i);
    }
}*/

var viewValue = () => {
    var j = 1;
    for(let i = 0; i < arrBtn[0].length; i++){
        if(localStorage.getItem("s"+(j) == null)){
            localStorage.setItem("s"+(j), arrBtn[0].item(i).children[1].innerText);
            j++; 
        }
        localStorage.setItem(i, clicks[i]);
        arrBtn[0].item(i).childNodes[1].innerText = localStorage.getItem(arrBtn[0].item(i).attributes[1].nodeValue)     
    }
}

window.addEventListener('load', viewValue());