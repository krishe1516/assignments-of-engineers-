
function isPrime(n)
{
    for(i=1;i<=n-1;i++)
    {
        if(n%i===0){
         return +n +":-it is a prime number";
        }
        
    }
   return +n + ":-it is not a prime number";

}
 console.log(isPrime(4));