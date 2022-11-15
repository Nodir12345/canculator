let amal = "+"
while(amal == "+" || amal == "-" || amal == "*" || amal == "/"){
  let son1 = prompt("1-son kiriting")*1
  amal = prompt("amal kiriting")
  let son2 = prompt("2-son kiriting")*1
  if(amal == "+"){
  console.log(son1 + son2);
  document.write(`sonlar qo'shilmasi : ${ son1 + son2}`);
  }
  else if(amal == "-")
  { console.log(son1 - son2);
    document.write(`sonlar ayrilmasi : ${ son1 - son2}`);
  }
  else if(amal == "*")
  { console.log(son1 * son2);
    document.write(`sonlar ko'paymasi : ${ son1 * son2}`);
  }
  else if(amal == "/")
  { console.log(son1 / son2);
  document.write(`sonlar bo'linmasi : ${ son1 / son2}`);
}
}