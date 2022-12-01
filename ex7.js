function main()
{
    let p,r,t,si;
     
    console.log("Enter the principal,rate and time");
    p=prompt('Enter the Principal');
    r=prompt('Enter the Rate');
    t=prompt('Enter the dureation');

    si=(p*r*t)/100;

    document.write('simple interest='+si);

}
(main());