function calculate() {
    var bill = document.getElementById("RS").value;
    var tip = document.getElementById("tip").value;
    var people = document.getElementById("people").value;
  
    if(bill==="" || tip==0){
      alert("please enter values");
      return;
      
    }
    if(people===""||people<=1){
      alert("Enter values more than 1");
      return;
    }
    var total=(bill*tip)/people;
    total=Math.round(total*100)/100;
    document.getElementById("result").innerHTML="Tip amount per person is RS  "  +total;
  }.