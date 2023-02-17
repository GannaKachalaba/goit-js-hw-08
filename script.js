
function getStone(stoneName) {
    const stones = {
        Смарагд: {
            price: 1300,
            quantity: 4,
        },
        Діамант: {
            price: 2700,
            quantity: 3,
        },
        Сапфір: {
            price: 400,
            quantity: 7,
        },
        Щебінь: {
            price: 200,
            quantity: 2,
        },
    };
    return new Promise((resolve) => 
        setTimeout(() => resolve(stones[stoneName]), 500)
        );
    
}
// getStone("Діамант").then((stone) => console.log(stone));

function getStonesSeq() {
    const emerald = getStone("Смарагд");

    emerald.then(stone => {
        console.log(stone)
        getStone("Сапфір").then(console.log);
    }); 
}

// getStonesSeq();

// ********************
// 1. await можна використовувати тільки всередині асинхронної функції
// 2. await заморожує виконання асинхронної функції до тих пір,
// поки Проміс не перейде у стан Rejected або Fullfilled
// (ми імітуємо синхронність у виконанні асинхронного коду)
// 3. await повертає не Promise а його результат
// 4. асинхронна функція повертає Promise

// *********************



// async function asyncGetStonesSeq() {
//   const emerald = await getStone("Смарагд");
//   console.log(emerald);
//   const sapphire = await getStone("Сапфір");
//   console.log(sapphire);
// }

// asyncGetStonesSeq();

async function asyncGetStonesSeqAll() {
  const emerald = getStone("Смарагд");
  const sapphire = getStone("Сапфір");
    const stones = await Promise.all([emerald, sapphire]);
    console.log("~stones", stones);
    return stones;
}

asyncGetStonesSeqAll();






