//pell series -1 to 15 

function fun(n)
{
    let a,b,c;
    a=1;
    b=2;


    for(let i=1;i<=n;i++){
        c=a+2*b;
        console.log(a)
        a=b;
        b=c;
    }
    
}
fun(15);