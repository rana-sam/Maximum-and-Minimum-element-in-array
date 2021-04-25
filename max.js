let array=[781,29,3,45,6,7,8,9,456,677,65,0]
let max=array[0],min=array[0]
for(var x=1;x<array.length;x++)
{
      if(array[x]>max)
        {
            max=array[x]
        }
    
}
for(var x=1;x<array.length;x++)
{
    if(array[x]<min)
    {
        min=array[x]
    }
    
}
console.log("maximum number is "+max);
console.log("minimum number is "+min);