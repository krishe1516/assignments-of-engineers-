//Given below is a hypothetical table showing rates of Income Tax for male citizens below the age of 65 years//

let age=prompt("Enter your age")
let gender=prompt("Enter your gender")
let TI=prompt("Enter your taxable income of a person")
if(
age>=65 || gender=="F" ){
  document.write("Wrong category")
}
else if(age<=65  && gender=="M"){
  if(TI<=160000){
    document.write("Tax is not applied here")
  }


else if(TI>160000 && TI<=500000)
{
  tax=((TI-160000)*10/100)
 // document.write("your income" +tax)
}
else if(TI>500000 && TI<=800000){
    tax=((TI-500000)*(20/100))+34000
   // document.write("your income" +tax)
}
else if(TI>800000){
    tax=((TI-800000)*(30/100))+94000
   
}
document.write("Payable Income Tax :-" +tax)
}

 //document.write("Payable Income Tax :-" +tax)