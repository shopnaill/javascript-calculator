//
var plus     = document.getElementById('plus');
var minus    = document.getElementById('minus');
var times    = document.getElementById('times');
var devid    = document.getElementById('devid');
var root     = document.getElementById('root');
var result   = document.getElementById('result');
var screen   = document.getElementById('screen');
var power    = document.getElementById('power');
var prsentage = document.getElementById('prsentage');
var clear    = document.getElementById('clear');
var dot    = document.getElementById('dot');
var hash    = document.getElementById('hash');


var n1,n2,res;
option = '';

clear.addEventListener('click',clear_screen);
dot.addEventListener('click',add_dot);

plus.addEventListener('click',addition);
minus.addEventListener('click',subtraction);
times.addEventListener('click',multi);
devid.addEventListener('click',devidation);
root.addEventListener('click',root2);
power.addEventListener('click',power2);


result.addEventListener('click',equal2);

function add_numbers(e)
{
    screen.value = screen.value + e.innerText ;
}

function clear_screen()
{
    screen.value = '' ;
    hash.innerText = '' ;
    n1='';
    n2='';
    res='';
    option='';
}

function add_dot()
{
    if (screen.value !='')
    {
        screen.value = screen.value + '.';
    }
}

function addition()
{
   option= '+';
   n1 = screen.value;
   hash.innerText = hash.innerText + screen.value + option;
   screen.value= '';
}

function subtraction()
{
   option= '-';
   n1 = screen.value;
   hash.innerText = hash.innerText + screen.value + option;
   screen.value= '';
}

function multi()
{
   option= '*';
   n1 = screen.value;
   hash.innerText = hash.innerText + screen.value + option;
   screen.value= '';
}

function devidation()
{
   option= '/';
   n1 = screen.value;
   hash.innerText = hash.innerText + screen.value + option;
   screen.value= '';
}

function root2()
{
   option= '√';
   n1 = screen.value;
   hash.innerText = hash.innerText + screen.value + option;
   screen.value= '';
}

function power2()
{
   option= '^';
   n1 = screen.value;
   hash.innerText =  hash.innerText + screen.value + option;
   screen.value= '';
}

function equal2()
{
    n2 = screen.value;
    hash.innerText = hash.innerText + screen.value;

    screen.value = '';

    switch (option) {
        case '+':
            res = Number(n1) + Number(n2);
            screen.value = res;
            break;
        case '-':
            res = Number(n1) - Number(n2);
            screen.value = res;
            break;
        case '*':
            res = Number(n1) * Number(n2);
            screen.value = res;
            break;
        case '/':
            res = Number(n1) / Number(n2);
            screen.value = res;    
            break;
        case '^':
            res = Math.pow(n1,n2);
            screen.value = res;    
            break;
        case '√':
            res = Math.sqrt(n1);
            screen.value = res;    
            break;
        
        default:

            break;
    }
}