//


let Name=prompt("Enter name")
let address=prompt("Enter address")
let amount=prompt("Enter amount of purchase")
let type=prompt("Type of purchase \n Enter L for Laptop \n D for Desktop")

let d;
    if(type=="L"){
        
        if(amount>0 && amount<=2500){
            d=0;
       
         }
        else if(amount>2500 && amount<=57000){
            d=5;
         
        } 
        else if(amount>57000 && amount<=100000){
            d=7.5;
            
           
        }
        else if(amount>100000){
            d=10;
          
        }
        else{
            document.write("Output")
           }
           let damount=(d/100)*amount;
           let netAmount=amount-damount;
           document.write("Name :-"+Name+"<br>");
           document.write("Address :-"+address+"<br>");
           document.write("Total Amount of Purchase :-" +amount+"<br>");
           document.write("Discount availed :-" +d+"%<br>")
           document.write("Net payable amount :-" +netAmount);
}

else if(type=="D"){

  
    if(amount>0 && amount<=2500){
        d=5;
        }
       else if(amount>2500 && amount<=57000){
           d=7.5;
       } 
       else if(amount>57000 && amount<=100000){
           d=10;
       }
       else if(amount>100000){
           d=15;
       }
       else{
        document.write("Output")
       }
       let damount=(d/100)*amount;
       let netAmount=amount-damount;
       document.write("Name :-"+Name+"<br>");
       document.write("Address :-"+address+"<br>");
       document.write("Total Amount of Purchase :-" +amount+"<br>");
       document.write("Discount availed :-" +d+"%<br>")
       document.write("Net payable amount :-" +netAmount);

}

let damount=(d/100)*amount;
let netAmount=amount-damount;

// doucument.write("Name :-"+Name+"<br>");
// document.write("Address :-"+address+"<br>");
// document.write("Total Amount of Purchase :-" +amount+"<br>");
// document.write("Discount availed :-" +d+"%<br>")
// document.write("Net payable amount :-" +netAmount);