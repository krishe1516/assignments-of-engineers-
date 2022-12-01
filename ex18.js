function main()
{
    let i,n,f=1;
    n=prompt('Enter an integer:');

    for(i=1;i<=n;i++)
    {
        f=f*i;
    }
    document.write("Factorial:" +f);
}
main();