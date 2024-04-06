//////////////////////////////// t68

// let allProducts = [
// 	{id: 1, name: 'Laptop', price: 17000000},
// 	{id: 2, name: 'Phone', price: 7000000},
// 	{id: 3, name: 'Pen', price: 12000},
// 	{id: 4, name: 'Pencil', price: 9000},
// 	{id: 5, name: 'Eraser', price: 6000},
// 	{id: 6, name: 'Milk', price: 35000},
// ]

// let userBasket = [
// 	{id: 1, name: 'pen', price: 12000},
// 	{id: 2, name: 'pencil', price: 9000},
// ]

// let userProduct = prompt("Enter The Name Of Product: ") // 'Phone'

// let requestProduct;

// let isInShop = allProducts.some(function (product) {
// 	if (product.name === userProduct) {
// 		requestProduct = product
// 		return true
// 	}
// })


// if (isInShop === true) {
// 	let newProduct = {
// 		id: 3,
// 		name: requestProduct.name,
// 		price: requestProduct.price
// 	}
// 	userBasket.push(newProduct)

// 	let sum = 0

// 	userBasket.forEach(function (product) {
// 		sum = sum + product.price
// 	})
// 	console.log(userBasket)
// 	alert("Total Price: " + sum)
// } else {
// 	console.log("موجودی نیست")
// }

//////////////////////////////// t70

// let members = [
//     { name: "John1", age: 266, id: 123 },
//     { name: "John2", age: 26, id: 123 },
//     { name: "John3", age: 26, id: 123 },
//     { name: "John4", age: 25, id: 123 },
//     { name: "John5", age: 242, id: 123 },
//     { name: "John6", age: 32, id: 123 },
//     { name: "John7", age: 32, id: 123 },
//     { name: "John8", age: 21, id: 123 },
//     { name: "John88", age: 232, id: 123 },
// ]

// let isOk = members.every(function (member) {
//     // console.log(member);

//     if (member.age <= 17) {
//         alert('anans bache to gruohe');
//         return false;
//     } else { return true; }

// });

////////////////////////////////t73

// let allProducts = [
//     { id: 1, name: 'laptop', price: 17000000 },
//     { id: 2, name: 'phone', price: 7000000 },
//     { id: 3, name: 'pen', price: 12000 },
//     { id: 4, name: 'pencil', price: 9000 },
//     { id: 5, name: 'eraser', price: 6000 },
//     { id: 6, name: 'milk', price: 35000 },
// ]

// let userBasket = [
//     { id: 1, name: 'pen', price: 12000 },
//     { id: 2, name: 'pencil', price: 9000 },
// ]

// let requestProduct = +prompt("1. add \n 2. remove")
// switch (requestProduct) {
//     case 1:
//         {
//             let newp;
//             let product = prompt("inter name :");
//             let isinProduct = false;
//             isinProduct = allProducts.some(function (item) {
//                 if (item.name === product) {
//                     newp = item;
//                     alert(item);
//                     return true;
//                 }
//             })
//             if (isinProduct) {
//                 userBasket.push(newp);
//             } else {
//                 alert("havent Product")
//             }
//             userBasket.forEach(function (item) {
//                 console.log(item);
//             })
//             break;
//         }
//     case 2:
//         {
//             if (userBasket.length == 0) {
//                 alert('empty');
//                 break;
//             }
//             userBasket.pop()
//             userBasket.forEach(function (item) {
//                 console.log(item);
//             })
//             break;
//         }

//     default:
//         {
//             alert('ishshack');

//             break;
//         }
// }
////////////////////////////////t76
// let allProducts = [
//     { id: 1, name: 'laptop', price: 17000000 },
//     { id: 2, name: 'phone', price: 7000000 },
//     { id: 3, name: 'pen', price: 12000 },
//     { id: 4, name: 'pencil', price: 9000 },
//     { id: 5, name: 'eraser', price: 6000 },
//     { id: 6, name: 'milk', price: 35000 },
// ]

// let allprice = 0;
// let result = 0;

// allProducts.forEach(function (product) {
//     if (product.price <= 100000) {
//         result = result + 0;
//         allprice += product.price;
//     } else {
//         result = result + 1000;
//         allprice += product.price;
//     }
// })
// alert(allprice+"  "+result+'\n'+(allprice+result));

////////////////////////////////////////////////////////////////t78
// let text = prompt("Please enter a word");
// let revText = text.split("")
// let lt = Text.length;
// console.log(revText)
// for (let index = 0; index < text.length; index++) {
//     if (revText[lt--] !== text[index]) {
//         console.log("ananas")
//     }
// }
////////////////////////////////t80
// var todosArray = [
//     { id: 1, title: 'learn js', isDoing: false },
//     { id: 2, title: 'make footer', isDoing: true },
//     { id: 3, title: 'design', isDoing: false },
//     { id: 4, title: 'vue js', isDoing: false },
// ]

// var userMenu = prompt('Choose one of them: \n 1. Add Todo \n 2. Remove Todo \n 3. Do Todo')

// if (userMenu === '1') {
//     // alert('Add')
//     var newTodoName = prompt('Enter The New Todo Name: ', '')
//     var newTodoObject = {
//         id: todosArray.length + 1,
//         title: newTodoName,
//         isDoing: false
//     }
//     todosArray.push(newTodoObject)
//     console.log("Todos Array: ", todosArray)

// } else if (userMenu === '2') {
//     // alert('Remove')
//     var removeTodoName = prompt('Enter The Removable Todo Name: ', '')
//     var removableTodoIndex = todosArray.findIndex(function (todo) {
//         return todo.title === removeTodoName
//     })
//     todosArray.splice(removableTodoIndex, 1)
//     console.log("Todos Array: ", todosArray)

// } else if (userMenu === '3') {
//     // alert('Doing')
//     var editableTodoName = prompt('Enter The Editable Todo Name: ', '')
//     todosArray.forEach(function (todo) {
//         // Codes
//         // console.log(todo)
//         if (todo.title === editableTodoName) {
//             todo.isDoing = true
//         }
//     })   
//     console.log("Todos Array: ", todosArray) 
// } else {
//     alert('گزینه وارد شده معتبر نمی باشد')
// }
////////////////////////////////t81
// let number1 = +prompt('inter yuor number1');  
// let number2 = +prompt('inter yuor number2');  
// let am = prompt('inter yuor');

// switch (am) {
//     case '+':
//     {
//         alert(number1 + number2)
//         break;
//     }
//     case '-':
//     {
//         alert(number1 - number2)
//         break;
//     }
//     case '*':
//     {
//         alert(number1 * number2)
//         break;
//     }
//     case '/':
//     {
//         alert(number1 / number2)
//         break;
//     }

//     default:
//         break;
// }

////////////////////////////////////////////////////////////////
// let number1 = +prompt('inter yuor s');
// let number2 = +prompt('inter yuor m');

// let timet = setInterval(function () {
//     if (number1 === -1 && number2 >= 0) {
//         number1 = 59
//         number2--;
//         console.log(number2 + ":" + number1);
//         number1--;
//     } else if (number1 === 0 && number2 === 0) {
//         console.log(number2 + ":" + number1);
//         clearInterval(timet);
//     } 
//     else {
//         console.log(number2 + ":" + number1);
//         number1--;
//     }

// }, 1000)
//////////////////
// let check = 0
// setTimeout(function() {
//     if (!check) {
//         alert("Please enter");
//     }

// }, 5000);
//////////part 2 -1
// let img = document.getElementById("img");
// let btn = document.getElementById("btn");
// let flag = false;

// function clickk () {
//     if (flag) {
//         img.setAttribute("src","img/logo.png");
//         flag =false;
//     } else {
//         img.setAttribute("src","img/images.png");
//         flag =true;
//     }
//     console.log(false);
// }
//////////////
// let btn = document.getElementById("btn");
// let iName = document.getElementById("name");
// let iPass = document.getElementById("pass");
// let modal = document.getElementById("modal");

// function inputValidation() {
//     let userval = iName.value
//     let passval = iPass.value
//     if (userval.length < 12 || passval.length < 8) {
//         modal.style.display = "block";

//         console.log(passval.length, userval.length)
//     }
// }
//////////
// const $ = document

// let usernameInput = $.querySelector('.username')
// let passwordInput = $.querySelector('.password')

// let usernameMessage = $.querySelector('.username-validation')
// let passwordMessage = $.querySelector('.password-validation')

// function usernameValidation() {
//     // console.log('Blur')
//     if (usernameInput.value.length < 12) {
//         usernameMessage.innerHTML = 'Must Contain 12 Characters (Min)'
//         usernameMessage.style.color = 'red'
//         usernameMessage.style.display = 'block'
//     } else {
//         usernameMessage.innerHTML = 'Correct username Value'
//         usernameMessage.style.color = 'green'
//         usernameMessage.style.display = 'block'
//     }
// }

// function passwordValidation() {
//     if (passwordInput.value.length < 8) {
//         passwordMessage.innerHTML = 'Must Be 8 Characters (Min)'
//         passwordMessage.style.color = 'red'
//         passwordMessage.style.display = 'block'
//     } else {
//         passwordMessage.innerHTML = 'Correct Password Value'
//         passwordMessage.style.color = 'green'
//         passwordMessage.style.display = 'block'
//     }
// }
///html project 
// {/* <div class="login-page">
// <div class="form">
//         <input type="text" placeholder="username" class="username" onblur="usernameValidation()" />
//         <span class="username-validation">Must Contain 12 Character (Min)</span>
//         <input type="password" placeholder="password" class="password" onblur="passwordValidation()" />
//         <span class="password-validation">Must Contain 8 Character (Min)</span>
//         <button>login</button>
//         <p class="message">Not registered? <a>Create an account</a></p>
// </div>
// </div> */}


///////////////////
// let arrayColor = ['coral', 'rgb(80, 255, 168)', 'cornflowerblue', 'darkcyan']
// let conternColor = 0
// //////random color
// let r, g, b

// let timerOfBackground = setInterval(function () {
//     if (conternColor === 3) {
//         conternColor = 0
//     }

//     r = Math.floor(Math.random() * 255)
//     g = Math.floor(Math.random() * 255)
//     b = Math.floor(Math.random() * 255)    
//     console.log(r,g,b)
//     document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
//     // document.body.style.backgroundColor = arrayColor[conternColor++];


// }, 1000);
////////////////














