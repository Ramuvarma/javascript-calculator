var container = document.querySelector(".container");
//class for Creating element
class CustomElement {
  constructor(tag) {
    this.tag = tag;  
  }
  create(props) {
    var elem = document.createElement(this.tag);
    this.elem = elem;

    if (props) {
      if (props.class) {
        elem.classList.add(props.class);
      }
      if (props.label) {
        elem.innerText = props.label;
      }
     
    }
  }
  render(parent) {
    if (parent && parent.appendChild) {
      parent.appendChild(this.elem);
    }
  }
}

//class for creating button
class CustomButton extends CustomElement {
  constructor() {
    super("button");
  }
}

document.addEventListener("DOMContentLoaded", init);

//buttons and inner text
var arr = [" ","one","two","three","four","five","six","seven","eight","nine","zero","add","sub","mul","div","eq","clr","del"];
var arrinner = [" ", 1,2,3,4,5,6,7,8,9,"0","+","-","*","/","=","c","del"];

function init() {
  //loop for buttons and props
  for (let i = 1; i < arr.length; i++) {
    let label = arr[i];
    arr[i] = new CustomButton();
    arr[i].create({
      class: "btn" + i,
      label: arrinner[i]
    });
    arr[i].render(container);
  }
}


document.body.addEventListener("click", event => {
  if (event.target.nodeName == "BUTTON") {
   
    var check = event.target.textContent;
    if(check == '='){
      eq();
    }
    else if(check == 'c'){
    clr();
    }
    else if(check == 'history'){
      history();
 
    }
    else if(check == 'del'){
      del();
      // console.log("iam in delete");
    }
    else{
    numb(check);
    }
   
  }
  });

var exp = "",
  number,
  operator,
  equal = true;
var hstry = [];
var textview = document.forms["myform"]["textview"];
function numb(num) {
  if (equal) {
    textview.value = exp;
    number = true;
    equal = false;
  } else {
    exp = textview.value + num;
    textview.value = exp;
    number = true;
  }
}

function eq() {
  if (exp) {
    var sam = exp;
    exp = eval(exp);
    sam = sam + "=" + exp;
    hstry.push(sam);
    textview.value = exp;
    equal = true;
    number = false;
  } else {
    var x = textview.value;
    x = eval(x);
    textview.value = x;
  }
}

function clr() {
  exp = "";
  textview.value = exp;
}
function history() {
  for (var i = 0; i < hstry.length; i++) {
    alert(hstry[i]);
    console.log(hstry[i]);
  }
}
var del = ()=>{
  exp = exp.slice(0,-1);
  textview.value = exp;
}