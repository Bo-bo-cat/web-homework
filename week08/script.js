// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }



// for (let i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 1; j <= 5; j++) {
//     row += (i * j) + "\t"; // \t = табуляція
//   }
//   console.log(row);
// }

 

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) continue;

//   let row = "";
//   for (let j = 1; j <= 10; j++) {
//     if (j % 2 !== 0) continue;

//     row += (i * j) + "\t";
//   }
//   console.log(row);
// }
//  абооооо

//  for (let i = 2; i <= 10; i += 2) {
//   let row = "";
//   for (let j = 2; j <= 10; j += 2) {
//     row += (i * j) + "\t";
//   }
//   console.log(row);
// }


for (let i = 1; i <= 10; i++) {
  let row = "";

  for (let j = 1; j <= 10; j++) {
    if ((i * j) % 2 !== 0) {
      row += (i * j) + "\t";
    }
  }

  if (row !== "") {
    console.log(row);
  }
}

