function square()
{
    //var n = prompt ("Enter the limit 'n' to generate the table of numbers from 1 to 10");
    var msg="";
    var res="0";

    for(var x=1; x<=10; x++)
    {
        res = x*x;
        msg = msg + " " + x + " * " + x + " = " + res + "\n"; 
    }
    alert(msg);
}