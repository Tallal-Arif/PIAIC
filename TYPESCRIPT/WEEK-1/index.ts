//QUestion 1
// var arr = [1,2,3,4,5,6,7,8,9,10]
// var index = 5
// function insertion(array:number[], ind:number)
// {
//     array.splice(ind, 0, 69)
//     return array
// }
// console.log(insertion(arr, index))

//Question 2
// var cart = ["item1", "item2", "item3", "item4", "item5", "item6"]
// var ind = 5
// function addition(cart:string[], index:number)
// {
//     cart.splice(index, 0, "item69")
// }
// addition(cart, ind)
// console.log("After addition: " + cart)
// function updation(cart:string[], index:number)
// {
//     cart.splice(index, 1)
//     cart.splice(index, 0 , "item88")
// }
// updation(cart, ind)
// console.log("After updation: " + cart)
// function subtraction(cart:string[], index:number)
// {
//     cart.splice(index, 1)
// }
// subtraction(cart, ind)
// console.log("After subtraction: " + cart)

//Question 3
// var count = 0;
// function display()
// {
//     while (count < 25)
//     {
//         console.log(count);
//         count++;
//     }
// }
// display();

//Question 4
// var count = 0;
// var num = 0;
// function display()
// {
//     while (count < 10)
//     {
//         if(num % 2 == 0)
//         {
//             console.log(num);
//             count++;
//         }
//         num++;
//     }
// }
// display();

//Question 5
// var num = 10
// function fact(num)
// {
//     var factorial = 1
//     while(num > 1)
//     {
//         factorial = num * factorial
//         num--
//     }
//     return factorial
// }
// console.log("Factorial = " + fact(num))

//Question 6
// var array = [1,2,3,4,-6,-7,-45,5,6,7,8,9,10]
// function remover(array:number[])
// {
//     var l
//     l = array.length;
//     for(var i = 0; i < l; ++i)
//     {
//         if(array[i] < 0)
//         {
//             array.splice(i,1)
//             i--
//         }
//     }
// }
// remover(array);
// console.log(array);

//Question 7
// var array = [1,2,3,4,5,6,7,8,9,10]
// function addition(array:number[])
// {
//     var sum = 0
//     var l = array.length;
//     for(var i = 0; i < l; ++i)
//     {
//         sum += array[i];
//     }
//     return sum;
// }
// console.log("SUM = " + addition(array))

//Question 8
// var array =[1.0, 10.0, 12.5, 18.7, 90.0]
// function temperature(array:number[])
// {
//     var l = array.length;
//     var i = 0
//     while(i < l)
//     {
//         var F = 0;
//         F = ((9/5)*array[i]) + 32;
//         array.splice(i,1)
//         array.splice(i,0, F);
//         ++i
//     }
// }
// temperature(array)
// console.log("COnverted array = " + array)