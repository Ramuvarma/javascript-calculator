
var container = document.querySelector('.container');

var display = document.createElement('form');
display.setAttribute('name','myform');
var input=document.createElement("input");
input.setAttribute('type','text');
//input.setAttribute('placeholder','0');
input.setAttribute('name','textview');

display.append(input);

var b1 = document.createElement('button');
var b2 = document.createElement('button');
var b3 = document.createElement('button');
var b4 = document.createElement('button');
var b5 = document.createElement('button');
var b6 = document.createElement('button');
var b7 = document.createElement('button');
var b8 = document.createElement('button');
var b9 = document.createElement('button');
var b0 = document.createElement('button');
var bmul = document.createElement('button');
var bhash = document.createElement('button');
var bcall = document.createElement('button');
var bc = document.createElement('button');
var bdel = document.createElement('button');



b1.setAttribute('onclick','insertnum(1)');
b2.setAttribute('onclick','insertnum(2)');
b3.setAttribute('onclick','insertnum(3)');
b4.setAttribute('onclick','insertnum(4)');
b5.setAttribute('onclick','insertnum(5)');
b6.setAttribute('onclick','insertnum(6)');
b7.setAttribute('onclick','insertnum(7)');
b8.setAttribute('onclick','insertnum(8)');
b9.setAttribute('onclick','insertnum(9)');
b0.setAttribute('onclick','insertnum(0)');
bmul.setAttribute('onclick','star("*")');
bhash.setAttribute('onclick','hash("#")');
bcall.setAttribute('onclick','call()');
bc.setAttribute('onclick','clean()');
bdel.setAttribute('onclick','del()');


b1.innerText = '1';
b2.innerText = '2';
b3.innerText = '3';
b4.innerText = '4';
b5.innerText = '5';
b6.innerText = '6';
b7.innerText = '7';
b8.innerText = '8';
b9.innerText = '9';
b0.innerText = '0';
bmul.innerText = '*';
bhash.innerText = '#';
bcall.innerText = 'call';
bc.innerText = 'clear';
bdel.innerText = '×';


container.style.cssText ='';
container.style.cssText ='position:absolute;top:80px;left:500px;width:35%;background-color: #d7b6f2;padding: 8px;display: grid;grid-template-columns:1fr 1fr 1fr ;grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;text-align: center;'
b1.style.cssText = '  padding: 10px;font-size: 30px; grid-column: 1/2;grid-row:2/3;';
b2.style.cssText = ' padding: 20px;font-size: 30px; grid-column: 2/3;grid-row:2/3;';
b3.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 3/4;grid-row:2/3;';
b4.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 1/2;grid-row:3/4;';
b5.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 2/3;grid-row:3/4;';
b6.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 3/4;grid-row:3/4;';
b7.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 1/2;grid-row:4/5;';
b8.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 2/3;grid-row:4/5;';
b9.style.cssText = ' padding: 20px;font-size: 30px; grid-column: 3/4;grid-row:4/5;';
b0.style.cssText = '  padding: 20px;font-size: 30px;grid-column: 2/3;grid-row:5/6;';
bmul.style.cssText = ' padding: 20px;font-size: 30px;grid-column: 1/2;grid-row:5/6;';
bhash.style.cssText = 'padding: 20px;font-size: 30px;grid-column: 3/4;grid-row:5/6;';
bcall.style.cssText = 'padding: 20px;font-size: 30px; background-color:green; grid-column: 2/3;grid-row:6/7;';
bc.style.cssText = 'padding: 20px;font-size: 20px; grid-column: 1/2;grid-row:6/7';
bdel.style.cssText = ' padding: 20px;font-size: 20px; grid-column: 3/4;grid-row:6/7;';
display.style.cssText = 'grid-column: 1/4;grid-row:1/2;';
input.style.cssText = 'height:80%;font-size: 30px;color: transparent;text-shadow: 0 0 0 #2196f3;width:98%';
container.append(b1,b2,b3,b4,b5,b6,b7,b8,b9,b0,bmul,bhash,bcall,bc,bdel,display);

var res = '',number,operator,equal=true ;
var textview = document.forms['myform']['textview'];
function insertnum(num){
    if(equal){
    res = num;
    textview.value = res;
    number = true;
    equal = false ;
    }
    else{
        res = textview.value+num;
        textview.value = res;
        number = true ;
    }
}

function star(st){
res = res + st;
textview.value=res;
equal = false;

}

function del(){
res = res.slice(0,-1);
textview.value = res;
}

function clean()
{
    res = '';
    textview.value = res;
}

function hash(hs)
{
    res = res + hs;
    textview.value = res;
    
}