var readlineSync = require("readline-sync");

const s = new Array(5);
class studentReport {
  constructor() {
    this.name = readlineSync.question("What's your name? ");
    this.unitTest = readlineSync.question("What's your unit Test? ");
    this.preFinal = readlineSync.question("What's your pre Final? ");
    this.final = readlineSync.question("What's your Final? ");
  }
  get total() {
    return  parseInt(this.unitTest) + parseInt(this.preFinal) + parseInt(this.final);
  }
  get individualAvg() {
    return (parseInt(this.unitTest) + parseInt(this.preFinal) + parseInt(this.final))/3;
  }
}

function setResults() {
  var total = 0;
  var highest = 0;
  var name;
  for(var i=0; i<s.length; i++){
    s[i] = new studentReport();
    console.log(s[i].name+" Your avg marks are: "+s[i].individualAvg);
    total += s[i].total;
    if(s[i].total>highest){
      highest = s[i].total;
      name = s[i].name;
    }
  }
  console.log("Congrats " + name + " you have have scored highest marks: " + highest);
  console.log("avg =" + total/s.length);
}


setResults();