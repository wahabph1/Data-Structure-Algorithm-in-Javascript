let array =[1,2,3,5,6];
let insertelement= 555;
let position = 4;

for (let i=array.length; i>=0; i--)
{
    console.log("lenth of array is " +array.length-1)
    console.log(array[i]);
    array[i+1] = array[i];
    console.log(array);


}
