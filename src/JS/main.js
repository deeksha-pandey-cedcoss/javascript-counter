var x = 0;

document.getElementById('output').innerHTML = x;
function button1() 
{
    if(x==0)
    {
        document.getElementById('output').innerHTML = 0;
    }
    else
       document.getElementById('output').innerHTML = --x;
}
function button2() 
{
  document.getElementById('output').innerHTML = ++x;
}
