// document.body.addEventListener("keydown", handleKeydown);

// function handleKeydown(event) {
//   console.log(event);
// }

/*
 ? TASK
*
* 1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body. Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
*
* 2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

// const modalWindow = document.getElementById("modalWindow");
// const overlay = document.getElementById("overlay");
// const closeBtn = document.getElementById("closeBtn");
// const openModalBtn = document.getElementById("openModalBtn");
// const modalOpenClass = "modal-open";

// openModalBtn.addEventListener("click", handleModalOpen);
// overlay.addEventListener("click", handleModalOpen);
// closeBtn.addEventListener("click", handleModalOpen);

// document.body.addEventListener("keydown",
//     handleModalCloseOnESC, {
//         capture: true,
//         once: true,
//         passive: true
//     });

// function handleModalCloseOnESC({ key }) {
//     console.log(key);
//     if (key === "Escape" &&
//         document.body.classList.contains(modalOpenClass)) {
//         handleModalOpen();
//   }
// }


// function handleModalOpen() {
//     document.body.classList.toggle(modalOpenClass);
// }
// ////////////////////////////////////////////////////

// const container = document.getElementById("container");
// console.log(container.childNodes);

// //////////////////////////////////////////////////

// const form = document.querySelector(".form");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//     event.preventDefault();
//     const { elements: { login, password } } = event.currentTarget;
//     console.log(event.currentTarget);

//     if (login.value === "" || password.value === "") {
//         return console.log("Please fill in all the fields!");
//     }
// }
// ////////////////////////////////////////////////////
//  function foo() {
//   alert(`"hello" ${this.name}`);
// }

// const params = {
//   handleEvent: foo,
//   name: "Alex",
// };

// document.body.addEventListener("click", params);

// setTimeout(() => {
//     document.body.removeEventListener("click", params);
// }, 3000);

// //////////////////////////////////////////////////////

// const link = document.getElementById("link");

// link.addEventListener("click", (e) => {
//     e.preventDefault();
// });

// ///////////////////////////////////////////////////


