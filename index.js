console.clear();
console.log("Welcome to the Utility Apps.\n");
console.log("You can choose from following Apps.\n");

console.log("Utility Apps :\n 1.\tURL Encoder/Decoder\n 2.\tBase64 Encoding/Decoding\n 3. String hashing\n 4.\tEpoch Converters\n 5.\tBinary/Decimal/Hex/Octal Converters\n 6.\tRGB<->HEX converter\n 7.\tUnit Converters\n");


// Choose what you want
const readLineSync = require('readline-sync');
let input = readLineSync.question('What do you want to do?\n');


// Menu to choose from
switch(input){
  case "1":
    urlEnDec();
    break;
  case "2":
    B64func();
    break;
  case "3":
    stringHashing();
    break;
  case "4":
    epochConverter();
    break;
  case "5":
    valueConverter();
    break;
  case "6":
    RgbHexConverter();
    break;
  case "7":
    unitConverter();
    break;
  default:
    console.log("Please choose the correct option.\n");
}



//All the Utility functions
function urlEnDec() {
  
  console.log("\nSelect:\n 1.\tURL Encoding\n 2.\tURL Decoding");
  let val1 = readLineSync.question('\nWhat do you want to do?\n');
  
  //console.log("Enter the URL:\n");
 
  let urlInput;
  switch(val1){
      
    case "1":
      urlInput= readLineSync.question("\nEnter the URL:\n");
      console.log(encodeURIComponent(urlInput));
      
      break;
    case "2":
       urlInput= readLineSync.question("\nEnter the URL:\n");
      console.log(decodeURIComponent(urlInput));
      break;
    default:
      console.log("Please choose the correct option.\n")
  }
 
}
function B64func(){
  console.log("\nSelect:\n 1.\tBase64 Encoding\n 2.\tBase64 Decoding");
  let val2 = readLineSync.question('\nWhat do you want to do?\n');
  
  //console.log("Enter the URL:\n");
 
  let baseInput;
  switch(val2){
      
    case "1":
      baseInput= readLineSync.question("\nEnter the value:\n");
      console.log(btoa(baseInput));
      
      break;
    case "2":
       baseInput= readLineSync.question("\nEnter the value:\n");
      console.log(atob(baseInput));
      break;
    default:
      console.log("Please choose the correct option.\n")
  }
  
}
function stringHashing(){
  console.log("\nSelect:\n1.\tmd5\n2.\tsha-1\n3.\tsha-256\n4.\tsha-512\n");
  
  let val3 = readLineSync.question('\nWhat do you want to do?\n');
  
  //console.log("Enter the URL:\n");

 
  let baseInput;
  switch(val3){

    
      
    case "1":
      baseInput= readLineSync.question("\nEnter the value:\n");

      //Start of operation
      const crypto = require('crypto');
      const algo = 'md5'; //could be sha1, sha256, sha512
      const hash = crypto.createHash(algo).update(baseInput).digest('hex');
      console.log(hash);
      
      
      break;
    case "2":
      baseInput= readLineSync.question("\nEnter the value:\n");

      //Start of operation
      const crypto1 = require('crypto');
      const algo1 = 'sha1'; //could be sha1, sha256, sha512
      const hash1 = crypto1.createHash(algo1).update(baseInput).digest('hex');
      console.log(hash1);
      
      break;

    case "3":
      baseInput= readLineSync.question("\nEnter the value:\n");

      //Start of operation
      const crypto2 = require('crypto');
      const algo2 = 'sha256'; //could be sha1, sha256, sha512
      const hash2 = crypto2.createHash(algo2).update(baseInput).digest('hex');
      console.log(hash2);
      
      break;

    case "4":
      baseInput= readLineSync.question("\nEnter the value:\n");

      //Start of operation
      const crypto3 = require('crypto');
      const algo3 = 'sha512'; //could be sha1, sha256, sha512
      const hash3 = crypto3.createHash(algo3).update(baseInput).digest('hex');
      console.log(hash3);
      
      break;  
    default:
      console.log("Please choose the correct option.\n")
}

} 
function epochConverter() {
  console.log("\nSelect:\n 1.\tEpoch to Human Date\n 2.\tHuman date to Epoch");
  let val1 = readLineSync.question('\nWhat do you want to do?\n');
  
  //console.log("Enter the URL:\n");
 
  let epInput;
  switch(val1){
      
    case "1":
      epInput= readLineSync.question("\nEnter the Epoch value:\n");
      epInput=parseInt(epInput);
      
      console.log(epochtoDate(epInput));
      
      break;
    case "2":
      console.log(DatetoEpoch());
      break;
    default:
      console.log("Please choose the correct option.\n")
  }
}
function valueConverter(){
  console.log("\nSelect:\n 1.\tBinaryToDecimal\n 2.\tBinaryToHex");
  let val1 = readLineSync.question('\nWhat do you want to do?\n');
  
  //console.log("Enter the URL:\n");
 
  let valueInput;
  switch(val1){
      
    case "1":
      valueInput= readLineSync.question("\nEnter the Binary Number:\n");
      console.log(parseInt(valueInput,2));
      
      break;
    case "2":
       valueInput= readLineSync.question("\nEnter the Binary Number:\n");
      console.log(parseInt(valueInput,2).toString(16).toUpperCase());
      break;
    default:
      console.log("Please choose the correct option.\n")
      
  }
}  
function RgbHexConverter() {
  console.log("\nSelect:\n 1.\tRBG to HEX\n 2.\tHEX to RGB");
  let val1 = readLineSync.question('\nWhat do you want to do?\n');
  
  //console.log("Enter the URL:\n");
 
  let urlInput;
  switch(val1){
      
    case "1":
    let r= readLineSync.question("\nEnter the value of R:\n");
    let g= readLineSync.question("\nEnter the value of G:\n");
    let b= readLineSync.question("\nEnter the value of B:\n");

    r=parseInt(r);
    g=parseInt(g);
    b=parseInt(b);  
      
    let ans= "#" + componentToHex(r) + componentToHex(g) + componentToHex(b); ; 
    console.log(ans);
      
    break;
      
    case "2":
       urlInput= readLineSync.question("\nEnter the HEX value:\n");
      console.log(hexToRgb(urlInput));
      break;
      
    default:
      console.log("Please choose the correct option.\n")
  }
  
}
function unitConverter(){
  console.log("\nSelect:\n 1.\tKilometer to meter\n 2.\tMeter to Kilometer");
  let val1 = readLineSync.question('\nWhat do you want to do?\n');
  
  //console.log("Enter the URL:\n");
 
  let Input;
  switch(val1){
      
    case "1":
      Input= readLineSync.question("\nEnter the km value:\n");
      console.log(parseInt(Input)*1000);  
      break;
      
    case "2":
       Input= readLineSync.question("\nEnter the m value:\n");
      console.log(Input/1000);
      break;
      
    default:
      console.log("Please choose the correct option.\n")
  }
}


//Sub Functions i.e that are being used within imp func.

// Used in RGB/HEX converter
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
  
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}


//Used in epoch converters
function epochtoDate(val){
  var myDate = new Date( val*1000);
  return (myDate.toGMTString());
 
}
function DatetoEpoch(){
  let year= readLineSync.question("\nEnter the value of year:\n");
  let month= readLineSync.question("\nEnter the value of month:\n");
  let day= readLineSync.question("\nEnter the value of day:\n");
  let hours= readLineSync.question("\nEnter the value of hours:\n");
  let min= readLineSync.question("\nEnter the value of min:\n");
  let seconds= readLineSync.question("\nEnter the value of seconds:\n");
  let millisec= readLineSync.question("\nEnter the value of milliseconds:\n");

  year=parseInt(year);
  month=parseInt(month);
  day=parseInt(day);
  hours=parseInt(hours);
  min=parseInt(min);
  seconds=parseInt(seconds);
  millisec=parseInt(millisec);

  var myDate=new Date(year,month,day,hours,min,seconds,millisec);

  var myEpoch=myDate.getTime()/1000.0;
  console.log(myEpoch);
  
}





