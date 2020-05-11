var in1;
var inp;
var go;
var num;
var sym;
var nam;
var config;
var elec;
var con;
var greeting;
var index;
var wt;
var sp;
var purpose;
var info = '<i>Purpose of this Applet is to help students to explore elements in the periodic table. This connects Element Name with Symbol, Atomic Number and Electron Configuration for the Element.</i><br><br> Made by <b> Dipam Sen</b>, Class 9';
function setup() {
  
  sp = createElement('p');
  in1 = createElement();
  in1.html('Enter <b>Atomic Number, Symbol or Element Name:<br>');
  inp = createInput('');
  go = createButton('GO');
  createElement('p');
  noCanvas(120, 150);
  num = createElement('h2');
  sym = createElement('h1');
  nam = createElement('h3');
  wt = createElement('p');
  greeting = createElement('p');
  elec = createElement('p');
  purpose = createElement('p');
}

function draw() {
  background('lightblue');
  go.mousePressed(() => {
    index = undefined;
    for (var i = 0; i < symbols.length; i++) {
      if (inp.value().toLowerCase() == symbols[i].toLowerCase()) {
        index = (i + 1);
      }
    }
    if (index == undefined) {
      for (var j = 0; j < elements.length; j++) {
        if (inp.value().toLowerCase() == elements[j].toLowerCase()) {
          index = (j + 1);
        }
      }
    }
    if (inp.value() > 0 && inp.value() < 119) {
      index = inp.value();
      config = update(index);
      //con = updateCon(index);
      num.html(index);
      sym.html(symbols[index - 1]);
      nam.html(elements[index - 1].toUpperCase());
      wt.html("<b>Atm Wt: "+mass[index-1]+"</b>");
      //elec.html(con);
      greeting.html(config);
    } else if (index !== undefined) {
      config = update(index);
      //con = updateCon(index);
      num.html(index);
      sym.html(symbols[index - 1]);
      nam.html(elements[index - 1].toUpperCase());
      wt.html("<b>Atm Wt: "+mass[index-1]+"</b>");
      //elec.html(con);
      greeting.html("Elec Config: "+config);
    } else {
      greeting.html('Invalid Input');
      num.html('');
      nam.html('');
      sym.html('');
      wt.html("");
      elec.html('');
    }
  })
  purpose.html("<br><br><br><br><br>"+info);
}
//1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p 6f
function update(number) {
  if (number <= 2) { //1s2
    return "1s<sup>" + number + "</sup>";
  } else if (number <= 4) { //2s2
    return "1s<sup>2</sup> 2s<sup>" + (number - 2) + "</sup>";
  } else if (number <= 10) { //2p6
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>" + (number - 4) + "</sup>"
  } else if (number <= 12) { //3s2
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>" + (number - 10) + "</sup>";
  } else if (number <= 18) { //3p6
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>" + (number - 12) + "</sup>";
  } else if (number <= 20) { //4s2
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>" + (number - 18) + "</sup>";
  } else if (number <= 30) { //3d10
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>" + (number - 20) + "</sup>";
  } else if (number <= 36) { //4p6
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>" + (number - 30) + "</sup>";
  } else if (number <= 38) { //5s2
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>" + (number - 36) + "</sup>";
  } else if (number <= 48) { //4d10
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>" + (number - 38) + "</sup>";
  } else if (number <= 54) { //5p6
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>" + (number - 48) + "</sup>";
  } else if (number <= 56) { //6s2
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>" + (number - 54) + "</sup>";
  } else if ((number >= 59 && number <= 63) || (number >= 65 && number <= 70)) { //4f14
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>" + (number - 56) + "</sup>";
  } else if (number == 57) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 5d<sup>1</sup>";
  } else if (number == 58) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>1</sup> 5d<sup>1</sup>";
  } else if (number == 64) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>7</sup> 5d<sup>1</sup>";
  } else if (number <= 77 || number == 80) { //5d10
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>" + (number - 70) + "</sup>";
  } else if (number == 78 || number == 79) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>" + (number - 70 + 1) + "</sup>";
  } else if (number <= 86) { //6p6
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>" + (number - 80) + "</sup>";
  } else if (number <= 88) { //7s2
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>" + (number - 86) + "</sup>";
  } else if ((number >= 94 && number <= 95) || (number >= 97 && number <= 102)) { //5f14
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>" + (number - 88) + "</sup>";
  } else if (number == 89) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 6d<sup>1</sup>";
  } else if (number == 90) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 6d<sup>2</sup>";
  } else if (number >= 91 && number <= 93) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>" + (number - 89) + "</sup> 6d<sup>1</sup>";
  } else if (number == 96) { //irregular
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>7</sup> 6d<sup>1</sup>";
  } else if (number <= 112) { //6d10
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>2</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>" + (number - 102) + "</sup>";
  } else if (number <= 118) { //7p6
    return "1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>6</sup> 4s<sup>2</sup> 3d<sup>10</sup> 4p<sup>6</sup> 5s<sup>2</sup> 4d<sup>10</sup> 5p<sup>6</sup> 6s<sup>1</sup> 4f<sup>14</sup> 5d<sup>10</sup> 6p<sup>6</sup> 7s<sup>2</sup> 5f<sup>14</sup> 6d<sup>10</sup> 7p<sup>" + (number - 112) + "</sup>";
  } else { //default
    return "<i>Unavailable</i>"
  }
}
/*
function updateCon(index) {
  var K, L, M, N; //2, 
  if (index <= 2) {
    K = index;
  } else if (index <= 10) {
    K = 2;
    L = index - 2;
  } else if (index <= 18) {
    K = 2;
    L = 8;
    M = index - 10;
  } else if (index <= 20) {
    K = 2;
    L = 8;
    M = 8;
    N = index - 18;
  } else if (index <= 30) {
    K = 2;
    L = 8;
    N = 2;
    M = 8 + (index - 20);
  } else if (index <= 36) {
    K = 2;
    L = 8;
    M = 8 + (index - 20);
    N = 2 + (index - 30);
  } else if (index <= 36) {
    K = 2;
    L = 8;
    M = 8 + (index - 20);
    N = 2 + (index - 30);
  }
  var c = ", ";
  var lol;
  if (L == undefined) {
    lol = K;
  } else if (M == undefined) {
    lol = K + c + L;
  } else if (N == undefined) {
    lol = K + c + L + c + M;
  } else {
    lol = K + c + L + c + M + c + N;
  }
  return lol;
}*/