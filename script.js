function calculateRetirement() {
    var salary = document.getElementById('currentSalary').value;
    var socSec = document.getElementById('socialSec').value;

    var retirementAmount = (salary - socSec)/0.04;

    retirementAmount = retirementAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    document.getElementById('totalRetirement').innerHTML = "Total required Retirement amount: $"+retirementAmount;
}


//document.getElementById('totalRetirement').innerHTML = "changing text";

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
  }