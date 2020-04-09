//"use strict"

var hasDecimal=false;

var txt="";

var total="";

//function percent(){
//}

function GetTotal(){
//  console.log("total = " + txt);
  total=calculate(txt);
  hasDecimal=false;
  document.getElementById("myList").innerHTML=total;
}

function ClearTotal(){
  txt="";
  hasDecimal=false;
  document.getElementById("myList").innerHTML="0";
}

function AddNumbers(){
  var ans = document.getElementById("myList").innerHTML;
//  console.log(txt);
  document.getElementById("myList").innerHTML="0";
}

function appendNumbers(num){
  var ans = document.getElementById("myList").innerHTML;
  var temp;

  temp=ans+num.toString();
  txt=temp;
//  console.log(txt);
  document.getElementById("myList").innerHTML=temp;
}

function appendPlus(){
  var ans = document.getElementById("myList").innerHTML;
  var temp;

  temp=ans +" + ";
  hasDecimal=false;
  txt=temp;
//  console.log(txt);
  document.getElementById("myList").innerHTML=temp;
}

function appendMinus(){
  var ans = document.getElementById("myList").innerHTML;
  var temp;

  temp=ans +" - ";
  hasDecimal=false;
  txt=temp;
  //console.log(txt);
  document.getElementById("myList").innerHTML=temp;
}

function appendDivision(){
  var ans = document.getElementById("myList").innerHTML;
  var temp;

  temp=ans +" / ";
  txt=temp;
  hasDecimal=false;
  //console.log(txt);
  document.getElementById("myList").innerHTML=temp;
}

function appendMultiply(){
  var ans = document.getElementById("myList").innerHTML;
  var temp;

  temp=ans +" * ";
  txt=temp;
  hasDecimal=false;
  //console.log(txt);
  document.getElementById("myList").innerHTML=temp;
}

function appendOpenBracket(){
  var ans = document.getElementById("myList").innerHTML;
  var temp;

  temp=ans +" ( ";
  txt=temp;
  //console.log(txt);
  document.getElementById("myList").innerHTML=temp;
}

function appendCloseBracket(){
  var ans = document.getElementById("myList").innerHTML;
  var temp;

  temp=ans +" ) ";
  txt=temp;
  //console.log(txt);
  document.getElementById("myList").innerHTML=temp;
}

function appendDecimal(){
  if (!hasDecimal) {
    var ans = document.getElementById("myList").innerHTML;
    var temp=ans+".";
    hasDecimal=true;
    document.getElementById("myList").innerHTML=temp;
  }
}

//function SquareRoot(){
//  var ans = document.getElementById("myList").innerHTML.value;
//    var temp;

//  temp=Math.sqrt(ans);
//  txt=temp;
//  console.log(txt);
//  document.getElementById("myList").innerHTML=Math.sqrt(ans);
//}

function removeCharacter(){
  var tmp;
  if (document.getElementById("myList").innerHTML.length>=1){
    tmp=document.getElementById("myList").innerHTML.substring(0,document.getElementById("myList").innerHTML.length-1);
    document.getElementById("myList").innerHTML=tmp;
  } else {
    document.getElementById("myList").innerHTML="0";
  }

}

// not my function. grabbed it from stackover flow
function calculate(input) {

  var f = {
    add: '+',
    sub: '-',
    div: '/',
    mlt: '*',
    mod: '%',
    exp: '^'
  };

  // Create array for Order of Operation and precedence
  f.ooo = [
    [
      [f.mlt],
      [f.div],
      [f.mod],
      [f.exp]
    ],
    [
      [f.add],
      [f.sub]
    ]
  ];

  input = input.replace(/[^0-9%^*\/()\-+.]/g, ''); // clean up unnecessary characters

  var output;
  for (var i = 0, n = f.ooo.length; i < n; i++) {

    // Regular Expression to look for operators between floating numbers or integers
    var re = new RegExp('(\\d+\\.?\\d*)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*)');
    re.lastIndex = 0; // take precautions and reset re starting pos

    // Loop while there is still calculation for level of precedence
    while (re.test(input)) {
      output = _calculate(RegExp.$1, RegExp.$2, RegExp.$3);
      if (isNaN(output) || !isFinite(output))
        return output; // exit early if not a number
      input = input.replace(re, output);
    }
  }

  return output;

  function _calculate(a, op, b) {
    a = a * 1;
    b = b * 1;
    switch (op) {
      case f.add:
        return a + b;
        break;
      case f.sub:
        return a - b;
        break;
      case f.div:
        return a / b;
        break;
      case f.mlt:
        return a * b;
        break;
      case f.mod:
        return a % b;
        break;
      case f.exp:
        return Math.pow(a, b);
        break;
      default:
        null;
    }
  }
}
