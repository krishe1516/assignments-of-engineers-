function main()
{
    let tc,d,ap;

    document.write("Enter the total cost of the items:")

    tc=prompt('Enter Cost');
    
    if(tc<=2000)
        d=(5/100(f*tc));
    

else if(tc>=2001 && tc<=5000)
    d='25/100f*tc';

else if(tc>=5001 && tc<=10000)
    d='35/100f*tc';

else
    d='50/100f*tc';
    ap=tc-d;
document.write("Amount Payable:" +ap)



}
main();
