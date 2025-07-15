// {
//   var z = 1;
// }
// console.log(z); // 1

// {
//   let z = 3;
// }
// console.log(z); // 1 // but if comment ^ upar wala first it gives undefined

// {
//   let z = 3;
//   console.log(z); // 3
// }

// {
//   var z = 1;
// }
// console.log(z); // 1

// {
//     let z = 3;
//   console.log(z); // 3
//   var z = 1;
//   console.log(z); // 1
// }
// console.log(z);

const x = 1;
{
  console.log(x); // ❌ ReferenceError
//   const x = 2; // 1
}


