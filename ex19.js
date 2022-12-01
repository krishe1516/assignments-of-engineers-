//lucas series - 1to 10

function fun(){

    let a=1;
    let b=0;
    let c=1;
    let sum=0;

    for(let i=1;i<=10;i++){

        c=a+b;
        a=b;
        b=c;
        sum=sum+c;
    }
    console.log("sum is =" +sum)
    
}

fun();
// console.log("sum is" +sum);