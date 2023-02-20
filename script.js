// *//* Example 1 - Коллбек функції
// Напишіть наступні функції:

//? createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

//? logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//? logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль*

// const productList = [
//   {
//     name: "banana",
//     amount: 5,
//     price: 10,
//   },
//   {
//     name: "apple",
//     amount: 10,
//     price: 8,
//   },
//   {
//     name: "cherry",
//     amount: 15,
//     price: 13,
//   },
// ]; 

// function createProduct(obj, callback) {
  // // 1. приймає обʼєкт і приймає колбек
  // // 2. створення нового обʼєкту і додавання властивості айді
  // // 3. виклик колбек функції з передачою
  //        туди новостворенного 
    
    // console.log(callback);

// let callback = function logTotalPrice(product) {
// console.log(product.amount * product.price);
//  }


//   const newObj = { ...obj, id: Date.now() };
//   callback(newObj);
// }

// function logProduct(product){  
//     console.log(product);
// }

// logProduct(productList[0]);


// function logTotalPrice(product) {
//     console.log(product.amount * product.price);
// }

// createProduct(productList[2], logProduct);
// createProduct(productList[2], logTotalPrice);
// createProduct(productList[1], logTotalPrice);

// /////////////////////////////////////////////////////////
//* Example 2 - Коллбек функції

//? Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

//? Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

//? Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//     username: "Alex",
//     balance: 2000,
//     withdraw(amount, onSuccess, onError) {
//         if (amount > this.balance) {
//             onError(
//               `На жаль, на вашому балансі недостатньо коштів! Поточний баланс: ${this.balance}`
//             );
//         } else if (amount >= TRANSACTION_LIMIT) {
//             onError(
//               `На жаль, ви перевищили ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`
//             );
//         } else {
//             this.balance -= amount;
//             onSuccess(`Гроші знято! Поточний баланс: ${this.balance}`);
//         }
//     },
//     deposit(amount, onSuccess, onError) {
//         if (amount <= 0) {
//           onError("Сума транзакції повинна бути більша нуля!");
//         } else if (amount >= TRANSACTION_LIMIT) {
//           onError(
//             `На жаль, ви перевищили ліміт! Поточний ліміт: ${TRANSACTION_LIMIT}`
//           );
//         } else {
//           this.balance += amount;
//           onSuccess(
//             `Гроші покладено на рахунок! Поточний баланс: ${this.balance}`
//           );
//         }
//     },
// }




// function onSuccess(message) {
//    console.log(`Успішна операція! ${message}`); 
// }
    
// function onError(message) {
//   console.log(`Помилка! ${message}`);
// }

// account.withdraw(5000, onSuccess, onError);
// account.withdraw(1500, onSuccess, onError);
// account.withdraw(950, onSuccess, onError);
// account.deposit(10000, onSuccess, onError);
// account.deposit(-5, onSuccess, onError);
// account.deposit(300, onSuccess, onError);


// /////////////////////////////////////////////////////////////////////////////////////////

//* Example 3 - Коллбек функції
// Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// function each(array, callback) {
//   //1. Створимо новий масив
//   //2. перебрати массив array за допомогою циклу
//   //3. виклик колбек функції на кожному елементі масиву array
//   //4. додоємо видозмінений елемент в новий масив
//   //5. повернути новий масив
    
//     const modifiedArr = [];

//     for (const el of array) {
//         const modifiedEl = callback(el);  
//         modifiedArr.push(modifiedEl);
//     }
//     return modifiedArr;
// }


// const arr = [1, 2, 3, 4, 5];

// console.log(each(arr, pow));
// console.log(each(arr, addOne));
// console.log(each(arr, (num) => num / 2));

// function pow(num) {
//     return num ** 2;
// }

// function addOne(num) {
//   return num + 1;
// }

// //////////////////////////////////////////////

//* Example 4 - Стрілочні функції
// Виконайте рефакторинг коду за допомогою стрілочних функцій.

// const productList = [
//   {
//     name: "Banana",
//     amount: 5,
//     price: 10,
//   },
//   {
//     name: "Apple",
//     amount: 10,
//     price: 8,
//   },
//   {
//     name: "Cherry",
//     amount: 15,
//     price: 13,
//   },
// ];

// //   function createProduct(obj, callback) {
// //   const newObj = { ...obj, id: Date.now() };
// //   callback(newObj);
// // }

// const createProduct = (obj, callback) => {
//     const newObj = { ...obj, id: Date.now() };
//     callback(newObj);
// };

// // const createProduct = (obj, callback) => callback({...obj, id:
// // Date.now()});

// const logProduct = (product) => console.log(product);
// const logTotalPrice = (product) => console.log(product.amount * product.price);

// createProduct(productList[2], logProduct);
// createProduct(productList[2], logTotalPrice);
// createProduct(productList[1], logTotalPrice);

// ////////////////////////////////////////////////////////////////////////////////////

// function showArgs() {
//     console.log(arguments);
// }

// showArgs(1, 5, 8, 13, 2);

// ///////////////////////////////////////////////////////////////////////////////////

//* Example 9 - Метод forEach
// Виконайте рефакторинг коду за допомогою методу forEach та стрілочні функції.

function calсulateAverage(...args) {
  let total = 0;
    // for (let i = 0; i < args.length; i++) {
    //   total += args[i];
    // }

    args.forEach(el => (total += el));
 
  return total / args.length;
}

console.log(calсulateAverage(1, 2, 3, 4)); // 2.5
console.log(calсulateAverage(14, 8, 2)); // 8
console.log(calсulateAverage(27, 43, 2, 8, 36)); // 23.2









