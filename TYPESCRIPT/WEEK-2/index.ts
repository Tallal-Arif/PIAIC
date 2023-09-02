//Question 1
// var count = 20
// function additon(count:number)
// {
//     var sum = 0
//     var num = 0;
//     for(var i = 0; i < count;)
//     {
//         if(num % 2 == 0)
//         {
//             sum += num;
//             ++i
//         }
//         ++num;
//     }
//     return sum;
// }
// console.log("SUM = " + additon(count))

//Question 2
// var array = [1,2,3,4,5,6,7,8,9,10]
// function display(array:number[])
// {
//     var l = array.length
//     for(var i = 0; i < l; ++i)
//     {
//         if(array[i] % 2 == 0)
//         {
//             console.log(array[i])
//         }
//     }
// }
// display(array)

//Question 3
//var array = [1,2,3,4,5,6,7,8,9,10]
// function remover(array:number[])
// {
//     var l = array.length
//     for(var i = 0; i < l; ++i)
//     {
//         if(array[i] % 2 == 0)
//         {
//             array.splice(i,1)
//             --i;
//         }
//     }
// }
// remover(array)
// console.log(array)

//Question 4
// var rad = 23.4
// function area(rad:number)
// {
//     return 3.14 * rad * rad
// }
// console.log(area(rad))

//Question 5
// var array = [50,23,45,60,70,64,31,90,81]
// function remover(array:number[])
// {
//     var l = array.length
//     for(var i = 0; i < l; ++i)
//     {
//         if(array[i] < 50)
//         {
//             array.splice(i,1)
//             --i;
//         }
//     }
// }
// remover(array)
// console.log(array)

//Question 6
var array = [50,23,45,60,70,64,31,90,81] 
function largest(array:number[])
{
    var max = array[0]
    var l = array.length
    for(var i = 0;i < l; ++i)
    {
        if(array[i]>max)
        {
            max = array[i]
        }
    }
    return max
}
console.log("MAX = " + largest(array))