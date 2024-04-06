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
// let $ = document

// const firstValue = $.querySelector('.C')
// const secondValue = $.querySelector('.F')
// const converter = $.querySelector('#converter')
// const result = $.querySelector('.result')
// const convertButton = $.querySelector('.convertButton')
// const resetButton = $.querySelector('.resetButton')
// const changeButton = $.querySelector('.changeButton')

// function convert () {
//     // console.log('Convert')
//     if (converter.value === '') {
//         result.innerHTML = 'insert correct value'
//         result.style.color = '#993300'
//     } else {
//         if (firstValue.innerHTML === '°C') { // C  to F
//             let resultValue = (converter.value  * 1.8) + 32
//             result.style.color = 'rgb(255, 255, 102)'
//             result.innerHTML = converter.value + '°C To ' + resultValue + '°F'
//         } else {
//             let resultValue = (converter.value -32) * 5 / 9
//             result.style.color = 'rgb(255, 255, 102)'
//             result.innerHTML = converter.value + '°F To ' + resultValue.toFixed(2) + '°C'
//         }
//     }
// }

// function reset () {
//     // console.log('Reset')
//     result.innerHTML = ''
//     // converter.setAttribute('value', '') // converter.value = ''
//     // console.log(converter.getAttribute('value'))
//     converter.value = ''
// }

// function swap () {
//     // console.log('Change')
//     if (firstValue.innerHTML === '°C') {
//         firstValue.innerHTML = '°F'
//         secondValue.innerHTML = '°C'
//         converter.setAttribute('placeholder', '°F')
//         document.title = 'SalzLearn| Js | °F to °C'
//     } else {
//         firstValue.innerHTML = '°C'
//         secondValue.innerHTML = '°F'
//         converter.setAttribute('placeholder', '°C')
//         document.title = 'SalzLearn| Js | °C to °F'

//     } 
// }

// convertButton.addEventListener('click', convert)
// resetButton.addEventListener('click', reset)
// changeButton.addEventListener('click', swap)
// {/* <header>
// <label for="converter">Converter <span class="C">°C</span> to <span class="F">°F</span></label>
// </header>

// <div>
// <input type="text" id="converter" placeholder="°C">
// </div>

// <p class="result"></p>

// <div id="buttons">
// <button class="convertButton">Convert</button>
// <button class="resetButton">Reset</button>
// <button class="changeButton">Change</button>
// </div> */}
////////////////
// let $ = document
// let locationKey = $.querySelector('#location')
// let title = $.querySelector('title')

// let keyCodeElem = $.getElementById('keyCode')
// let keyElem = $.getElementById('key')
// let locationElem = $.getElementById('location')
// let whichElem = $.getElementById('which')
// let codeElem = $.getElementById('code')

// document.body.addEventListener('keydown', function (event) {

// 	event.preventDefault()

// 	starter.style.display = 'none'
// 	heading.style.display = 'flex'
// 	ascii.style.display = 'flex'
// 	infos.style.display = 'flex'

// 	let eventKeyCode = event.keyCode
// 	let eventKey = event.key
// 	let eventLocation = event.location
// 	let eventWhich = event.which
// 	let eventCode = event.code

// 	keyCodeElem.innerHTML = eventKeyCode
// 	keyElem.innerHTML = eventKey
// 	locationElem.innerHTML = eventLocation
// 	whichElem.innerHTML = eventWhich
// 	codeElem.innerHTML = eventCode

// })

// <section id="starter">
// <div id="starter-text">
//     Press any key to get the JavaScript event keycode
// </div>
// </section>

// <div id="heading">
// <h1>SabzLearn KeyCode</h1>
// </div>

// <div id="ascii">
// <h1 id="keyCode"></h1>
// </div>

// <div id="infos">
// <div class="info-box">
//     <h3>event.key</p>
//         <h2 id="key"></h2>
// </div>

// <div class="info-box">
//     <h3>event.location</p>
//         <h2 id="location"></h2>
// </div>

// <div class="info-box">
//     <h3>event.which</p>
//         <h2 id="which"></h2>
// </div>

// <div class="info-box">
//     <h3>event.code</p>
//         <h2 id="code"></h2>
// </div>
// </div>

////////////
// let $ = document;
// let inputElem = $.querySelector("input");
// let addTodoForm = $.querySelector(".add");
// let todoUlElem = $.querySelector(".todos");

// function addNewTodo(newTodoValue) {

//   let newTodoLi = $.createElement("li");

//   newTodoLi.className =
//     "list-group-item d-flex justify-content-between align-items-center";

//   let newTodoTitleSpan = $.createElement("span");

//   newTodoTitleSpan.innerHTML = newTodoValue;

//   let newTodoTrash = $.createElement("i");

//   newTodoTrash.className = "fa fa-trash-o delete";

//   newTodoTrash.addEventListener("click", function (event) {
//     event.target.parentElement.remove();
//   });

//   newTodoLi.append(newTodoTitleSpan, newTodoTrash);

//   todoUlElem.append(newTodoLi);

//   console.log(newTodoLi);
// }

// addTodoForm.addEventListener("submit", function (event) {
//   event.preventDefault();
// });

// inputElem.addEventListener("keydown", function (event) {
//   let newTodoValue = event.target.value.trim();

//   if (event.keyCode === 13) {
//     if (newTodoValue) {
//       inputElem.value = "";
//       addNewTodo(newTodoValue);
//     }
//   }
// });
// {/* <div class="container">

// <ul class="list-group todos mx-auto text-light">

// </ul>

// <form class="add text-center my-4" autocomplete="off">
//     <label class="text-light">
//         Add New Todo...
//     </label>
//     <input type="text" class="form-control m-auto" name="add" />
// </form>
// </div> */}

/////////////////////////////////
// Functions for select elems with id & class
//  var $ = document;
//  function _id(id_name) {
//    return $.getElementById(id_name);
//  }

//  function _class(class_name) {
//    return $.getElementsByClassName(class_name);
//  }

//  // Select Elems
//  var togglePassword = _class("toggle-password");
//  var passwordField = _id("password-field");

//  // Fire click event on eye icon
//  togglePassword[0].addEventListener("click", function () {
//    if (passwordField.type == "text") {
//      passwordField.type = "password";
//      togglePassword[0].classList.remove("active");
//    } else {
//      passwordField.type = "text";
//      togglePassword[0].classList.add("active");
//    }
//  })
// {/* <div class="center">
// <div class="form">
//     <div class="form-element">
//         <input type="password" id="password-field" />
//         <div class="toggle-password">
//             <i class="fa fa-eye"></i>
//             <i class="fa fa-eye-slash"></i>
//         </div>
//     </div>
// </div>
// </div> */}

////////////////////////////////
// let menu = document.getElementById('contextMenu');

// document.body.addEventListener("contextmenu", function (event) {
//   event.preventDefault();

//   let x= event.pageXx;
//   let y= event.pageYy;
//   menu.style.position = "fixed";
//   menu.style.left =x+'px';
//   menu.style.top = y+'px';
//   menu.style.display = "block";

// })

// const contextMenu = document.getElementById('contextMenu')

// function contextHandler(event) {
//   event.preventDefault()

//   if (contextMenu.style.display === 'none') {

//     contextMenu.style.left = event.pageX + 'px'
//     contextMenu.style.top = event.pageY + 'px'
//     contextMenu.style.display = 'block'
//   } else {
//     contextMenu.style.left = event.pageX + 'px'
//     contextMenu.style.top = event.pageY + 'px'
//   }

//   console.log(event);
// }

// function clickContextMenu() {
//   contextMenu.style.display = 'none'
// }

// function keyDownHandler(event) {
//   if (event.keyCode === 27)
//     contextMenu.style.display = 'none'
// }


// document.body.addEventListener('contextmenu', contextHandler)
// document.body.addEventListener('click', clickContextMenu)
// document.body.addEventListener('keydown', keyDownHandler)

// {/* <div id="contextMenu" class="context-menu" style="display: none;"> 
//     <ul class="menu"> 
//         <li class="share"><a href="#"><i class="fa fa-share" aria-hidden="true"></i> Share</a></li> 
//         <li class="rename"><a href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Rename</a></li> 
//         <li class="link"><a href="#"><i class="fa fa-link" aria-hidden="true"></i> Copy Link Address</a></li> 
//         <li class="copy"><a href="#"><i class="fa fa-copy" aria-hidden="true"></i> Copy to</a></li> 
//         <li class="paste"><a href="#"><i class="fa fa-paste" aria-hidden="true"></i> Move to</a></li> 
//         <li class="download"><a href="#"><i class="fa fa-download" aria-hidden="true"></i> Download</a></li> 
//         <li class="trash"><a href="#"><i class="fa fa-trash" aria-hidden="true"></i> Delete</a></li> 
//     </ul> 
// </div>  */}

//////////////////////////////
// let loadd = document.querySelector(".loader");

// window.addEventListener("load", function (event) {
//   console.log(event);

//   loadd.className +='hidden'; 
// //   <div class="loader">
// //   <img src="images/loading.gif" alt="Loading..." />
// // </div>
// // <h2 id="title">Custom Loader - SabzLearn</h2>
// // <div class="content">
// //   <img src="images/image1.jpg" class="thumb" />
// //   <img src="images/image2.jpg" class="thumb" />
// //   <img src="images/image3.jpg" class="thumb" />
// // </div>


// })

////////////////////////////
// let time = new Date();
// console.log(time);
// ///////////////////
// let time = new Date();
// let huors = time.getHours();
// let minutes = time.getMinutes();
// let seconds = time.getSeconds();

// console.log(huors, minutes, seconds);

// let texth = document.getElementById('h');
// let textm = document.getElementById('m');
// let texts = document.getElementById('s');

// texth.innerHTML = huors;
// textm.innerHTML = minutes;
// texts.innerHTML = seconds;

// setInterval(function timer() {
// }, 1000);

// <div class="divcon1">
// <p id="h"></p>
// <p>:</p>
// <p id="m"></p>
// <p>:</p>
// <p id="s"></p>
// </div>

/////////////////////217

// const dummyText = [
//     'Sweet roll tiramisu sugar plum halvah cupcake topping wafer tootsie roll. Caramels croissant chocolate cake cotton candy. Jelly chocolate cake macaroon brownie pastry gummies cheesecake. Gingerbread pie croissant sugar plum oat cake tart tootsie roll. Chupa chups cake wafer danish. Biscuit donut candy canes gummies candy topping marshmallow jujubes. Chocolate cake cupcake topping. Chupa chups soufflé candy canes pudding brownie gummi bears. Dessert cotton candy jelly oat cake sweet roll cookie macaroon sweet roll. Jelly-o icing halvah.',
//     'Sugar plum gummies cupcake gingerbread sweet. Pastry topping cake candy canes marshmallow caramels chupa chups. Halvah dessert tiramisu brownie lemon drops tootsie roll carrot cake. Cake soufflé oat cake cotton candy. Lollipop cake sweet roll croissant danish. Cake dessert tootsie roll cake liquorice sugar plum biscuit macaroon pie. Bonbon cookie cotton candy bear claw wafer.',
//     'Marshmallow candy canes marshmallow caramels chocolate cake liquorice jelly. Gummies caramels jelly beans chupa chups brownie bonbon. Jujubes jujubes sesame snaps powder. Macaroon sesame snaps muffin cake marzipan topping muffin powder pastry. Macaroon sesame snaps topping. Sweet apple pie jelly tart. Cookie apple pie sweet roll pastry. Cookie chocolate chocolate bar sweet gummies.',
//     'Chocolate sugar plum jelly-o sweet roll gummi bears oat cake powder pastry macaroon. Soufflé cheesecake apple pie jelly beans donut candy canes sweet macaroon. Gingerbread topping dessert bonbon sweet roll oat cake oat cake halvah. Cake chocolate cake chocolate sugar plum candy. Marshmallow brownie sweet dessert croissant chocolate fruitcake sweet donut. Cupcake muffin halvah.',
//     'Cupcake ice cream gummies dessert tiramisu. Cupcake pie cake apple pie jelly-o brownie oat cake soufflé. Candy canes chocolate cake candy canes jelly beans lollipop. Dragée candy canes jujubes pastry cheesecake. Candy canes apple pie powder. Caramels dessert caramels sweet roll danish jelly-o jelly-o powder liquorice. Biscuit pie sugar plum. Oat cake jelly-o marshmallow pastry dragée gummi bears topping. Bear claw ice cream lollipop danish candy jelly-o jelly-o.',
//     'Powder candy fruitcake. Bear claw sweet roll cake lollipop. Apple pie chupa chups cookie soufflé dessert topping gummi bears. Dragée gummi bears candy canes powder chupa chups. Cotton candy dragée lollipop. Sweet roll muffin oat cake marshmallow macaroon sugar plum muffin. Tart chupa chups candy. Fruitcake jujubes halvah marshmallow bonbon marshmallow. Croissant powder cheesecake donut bonbon. Caramels macaroon donut.',
//     'Tiramisu halvah pastry jujubes chocolate bar sugar plum gummies candy. Chocolate chupa chups icing dessert muffin jelly-o oat cake. Powder dessert powder tart tart. Pie powder lemon drops sweet tart icing cake tootsie roll biscuit. Jelly jelly-o sweet roll. Biscuit jelly beans chocolate cake pudding. Sesame snaps wafer apple pie lemon drops cupcake oat cake pie.',
//     'Gingerbread bonbon pudding biscuit sugar plum. Donut caramels cake danish lollipop. Chocolate bar jelly dessert candy canes. Sweet sesame snaps cookie. Croissant bear claw chocolate powder jelly beans ice cream. Bear claw brownie icing apple pie. Ice cream marshmallow tiramisu cotton candy brownie tiramisu jujubes. Croissant cheesecake tiramisu wafer powder pie macaroon.',
//     'Powder cake croissant tootsie roll tart lollipop jelly beans. Cake lemon drops wafer muffin biscuit marshmallow brownie. Cotton candy jelly-o cotton candy gummies. Cake sesame snaps macaroon tootsie roll. Pie wafer topping tootsie roll apple pie marzipan sweet. Bonbon tootsie roll candy canes pastry brownie bear claw.',
//   ];

//   let $ = document
//   const amountInputElem = $.querySelector('#amount')
//   const generateBtnElem = $.querySelector('button')
//   const resultElem = $.querySelector('#result')

//   generateBtnElem.addEventListener('click', function (e) {
//     e.preventDefault()

//     let amountElemValue = amountInputElem.value // 
//     let randomTextIndex = Math.floor(Math.random() * dummyText.length)

//     if (amountElemValue < 0 || amountElemValue > 9 || amountElemValue === '' || isNaN(amountElemValue)) {
//       resultElem.innerHTML = dummyText[randomTextIndex]
//     } else {
//       let slicedArray = dummyText.slice(0, amountElemValue)

//       let finalTextsArray = slicedArray.map(function (item) {
//         return '<p>'+ item + '</p>'
//       }).join('')

//       resultElem.innerHTML = finalTextsArray

//       console.log(finalTextsArray);
//     }

//     console.log('Click');
//   })



//   <div class="container">
//   <div class="row">
//     <!--Form Section-->
//     <div class="col-xl-6 mt-4 mt-xl-0">
//       <form class="form-inline" action="" id="form">
//         <label for="amount">Paragraph Number: </label>
//         <input type="number" class="form-control mr-1 mb-1 mb-sm-0 ml-sm-2" name="amount" id="amount" placeholder="5" />
//         <button class="btn btn-primary">Generate</button>
//       </form>
//     </div>

//     <!--Result Section-->
//     <div class="col-xl-6">
//       <article class="mt-4 mt-xl-0" id="result"></article>
//     </div>
//   </div>
// </div>

//////////////////////////////

// window.addEventListener('resize', function(){
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
// });

////////////////////////220


// const listItems = [
//     { id: 1, name: 'Amin', family: 'Saeedi Rad' },
//     { id: 2, name: 'Amir', family: 'Zehtab' },
//     { id: 3, name: 'Qadir', family: 'Yolme' },
//     { id: 4, name: 'Babak', family: 'Mohammadi' },
//     { id: 5, name: 'Hasan', family: 'Ghahreman Zadeh' },

//     { id: 6, name: 'Amin', family: 'Saeedi Rad' },
//     { id: 7, name: 'Amir', family: 'Zehtab' },
//     { id: 8, name: 'Qadir', family: 'Yolme' },
//     { id: 9, name: 'Babak', family: 'Mohammadi' },
//     { id: 10, name: 'Hasan', family: 'Ghahreman Zadeh' },

//     { id: 11, name: 'Saeed', family: 'Ehsani' },
//     { id: 12, name: 'Siamak', family: 'Modiri' },
//     { id: 13, name: 'Mohsen', family: 'Ansari' },
//     { id: 14, name: 'Mehran', family: 'Ali Pour' },
//     { id: 15, name: 'Amir Hossein', family: 'Mahtabi' },

//     { id: 16, name: 'Hossein', family: 'Amino' },
//     { id: 17, name: 'Melika', family: 'Ehsani' },
//     { id: 18, name: 'Qadir', family: 'Yolme' },
//     { id: 19, name: 'Fatemeh', family: 'Alilou' },
//     { id: 20, name: 'Ehsan', family: 'Tayyebi' },

//     { id: 21, name: 'Zahra', family: 'Gholami' },
//     { id: 22, name: 'Matin', family: 'Sahebi' },

// ];

// let userListContainer = document.querySelector('#list')
// let paginationContainer = document.querySelector('#pagination')

// let currentPage = 1
// let rowsCount = 5

// function displayUesrsList (allUesrsArray, usersContainer, rowsCount, currentPage) {
//     usersContainer.innerHTML = ''

//     let endIndex = rowsCount * currentPage
//     let startIndex = endIndex - rowsCount

//     let paginatedUsers = allUesrsArray.slice(startIndex, endIndex)

//     paginatedUsers.forEach(function (user) {
//         let userElement = document.createElement('div')
//         userElement.classList.add('item')
//         userElement.innerHTML = user.name + ' ' + user.family

//         usersContainer.appendChild(userElement)
//     })

// }

// function setupPagination (allUesrsArray, pagesContainer, rowsCount) {
//     // Codes

//     pagesContainer.innerHTML = ''

//     let pageCount = Math.ceil(allUesrsArray.length / rowsCount)

//     for (let i = 1 ; i < pageCount + 1 ; i++) {
//         let btn = paginationButtonGenerator(i, allUesrsArray)
//         pagesContainer.appendChild(btn)
//     }

// }

// function paginationButtonGenerator (page, allUesrsArray) {
//     let button = document.createElement('button')
//     button.innerHTML = page

//     if (page === currentPage) {
//         button.classList.add('active')
//     }

//     button.addEventListener('click', function () {
//         currentPage = page
//         displayUesrsList(allUesrsArray, userListContainer, rowsCount, currentPage)

//         let prevPage = document.querySelector('button.active')
//         prevPage.classList.remove('active')

//         button.classList.add('active')


//     })

//     return button
// }

// displayUesrsList(listItems, userListContainer, rowsCount, currentPage)
// setupPagination(listItems, paginationContainer, rowsCount)

// <main>
// <div class="list" id="list"></div>
// <div class="pagenumbers" id="pagination"></div>
// </main>

///////////////////////////224
// let allProducts = [
//     { id: 1, title: 'Album 1', price: 5, img: 'Images/Album 1.png', count: 1 },
//     { id: 2, title: 'Album 2', price: 15, img: 'Images/Album 2.png', count: 1 },
//     { id: 3, title: 'Album 3', price: 20, img: 'Images/Album 3.png', count: 1 },
//     { id: 4, title: 'Album 4', price: 100, img: 'Images/Album 4.png', count: 1 },
//     { id: 5, title: 'Coffee', price: 5, img: 'Images/Cofee.png', count: 1 },
//     { id: 6, title: 'Shirt', price: 50, img: 'Images/Shirt.png', count: 1 },
// ]

// let userBasket = []

// let $ = document
// const shopItemsContainer = $.querySelector('.shop-items')
// const bastekProductsContainer = $.querySelector('.cart-items')
// const removeAllProductsBtn = $.querySelector('#remove-all-products')
// const cartTotalPriceElem = $.querySelector('.cart-total-price')

// allProducts.forEach(function (product) {
//     let productContainer = $.createElement('div')
//     productContainer.classList.add('shop-item')

//     let productTitleSpan = $.createElement('span')
//     productTitleSpan.classList.add('shop-item-title')
//     productTitleSpan.innerHTML = product.title

//     let productImageElem = $.createElement('img')
//     productImageElem.classList.add('shop-item-image')
//     productImageElem.setAttribute('src', product.img)

//     let productDetailsContainer = $.createElement('div')
//     productDetailsContainer.classList.add('shop-item-details')

//     let productPriceSpan = $.createElement('span')
//     productPriceSpan.innerHTML = product.price
//     productPriceSpan.classList.add('shop-item-price')

//     let prodcutAddButton = $.createElement('button')
//     prodcutAddButton.innerHTML = 'ADD TO CART'
//     prodcutAddButton.className = 'btn btn-primary shop-item-button'
//     prodcutAddButton.addEventListener('click', function () {
//         addProductToBasketArray(product.id)
//     })

//     productDetailsContainer.append(productPriceSpan, prodcutAddButton)
//     productContainer.append(productTitleSpan, productImageElem, productDetailsContainer)
//     shopItemsContainer.append(productContainer)

// })



// function addProductToBasketArray (productId) {

//     let mainProduct = allProducts.find(function (product) {
//         return product.id === productId
//     })

//     userBasket.push(mainProduct)

//     basketProductsGenerator(userBasket)
//     calcTotalPrice(userBasket)

//     console.log(userBasket);
// }

// function basketProductsGenerator (userBasketArray) {
//     bastekProductsContainer.innerHTML = ''

//     userBasketArray.forEach (function (product) {

//         let basketProductContainer = $.createElement('div')
//         basketProductContainer.classList.add('cart-row')

//         let basketProductDetailsContainer = $.createElement('div')
//         basketProductDetailsContainer.className = 'cart-item cart-column'

//         let basketProductImg = $.createElement('img')
//         basketProductImg.setAttribute('src', product.img)
//         basketProductImg.setAttribute('width', "100")
//         basketProductImg.setAttribute('height', "100")
//         basketProductImg.classList.add('cart-item-image')

//         let basketProductTitleSpan = $.createElement('span')
//         basketProductTitleSpan.classList.add('cart-item-title')
//         basketProductTitleSpan.innerHTML = product.title

//         basketProductDetailsContainer.append(basketProductImg, basketProductTitleSpan)

//         let basketProductPriceSpan = $.createElement('span')
//         basketProductPriceSpan.className = 'cart-price cart-column'
//         basketProductPriceSpan.innerHTML = product.price

//         let basketProductInputsContainer = $.createElement('div')
//         basketProductInputsContainer.className = 'cart-quantity cart-column'

//         let basketProductInput = $.createElement('input')
//         basketProductInput.className = 'cart-quantity-input'
//         basketProductInput.value = product.count
//         basketProductInput.setAttribute('type', 'number')
//         basketProductInput.addEventListener('change', function () {
//             updateProductCount(product.id, basketProductInput.value)
//         })

//         let basketProductRemoveBtn = $.createElement('button')
//         basketProductRemoveBtn.className = 'btn btn-danger'
//         basketProductRemoveBtn.innerHTML = 'Remove'
//         basketProductRemoveBtn.addEventListener('click', function () {
//             removeProductFromBasket(product.id)
//         })

//         basketProductInputsContainer.append(basketProductInput, basketProductRemoveBtn)

//         basketProductContainer.append(basketProductDetailsContainer, basketProductPriceSpan, basketProductInputsContainer)

//         bastekProductsContainer.append(basketProductContainer)

//     })
// }

// function removeProductFromBasket (productId) {

//     userBasket = userBasket.filter (function (product) {
//         return product.id !== productId
//     })

//     basketProductsGenerator(userBasket)
// }

// removeAllProductsBtn.addEventListener('click', function () {
//     userBasket = []
//     basketProductsGenerator(userBasket)
// })

// function calcTotalPrice (userBasketArray) {
//     let totalPriceValue = 0

//     userBasketArray.forEach(function (product) {
//         totalPriceValue += product.count * product.price
//     })

//     cartTotalPriceElem.innerHTML = totalPriceValue
// }

// function updateProductCount (productId, newCount) {
//     console.log("product id: " + productId + ' new count: ' + newCount);

//     userBasket.forEach(function (product) {
//         if (product.id === productId) {
//             product.count = newCount
//         }
//     })
//     calcTotalPrice(userBasket)
// }


// <nav class="main-nav nav">
// <ul>
//   <li><a href="#">HOME</a></li>
//   <li><a href="#">STORE</a></li>
//   <li><a href="#">ABOUT</a></li>
// </ul>
// </nav>
// <h1 class="band-name band-name-large">SabzLearn Shop</h1>
// </header>
// <section class="container content-section">
// <div class="shop-items"></div>
// </section>
// <section class="container content-section">
// <h2 class="section-header">CART</h2>
// <div class="cart-row">
// <span class="cart-item cart-header cart-column">ITEM</span>
// <span class="cart-price cart-header cart-column">PRICE</span>
// <span class="cart-quantity cart-header cart-column">QUANTITY</span>
// </div>
// <div class="cart-items">

// </div>
// <div class="cart-total">
// <strong class="cart-total-title">Total</strong>
// <span class="cart-total-price">$0</span>
// </div>
// <button class="btn btn-primary btn-purchase" id="remove-all-products" type="button">
// PURCHASE
// </button>
// </section>
// <footer class="main-footer">
// <div class="container main-footer-container">
// <h3 class="band-name">The Generics</h3>
// <ul class="nav footer-nav">
//   <li>
//     <a href="https://www.youtube.com" target="_blank">
//       <img src="Images/YouTube Logo.png" />
//     </a>
//   </li>
//   <li>
//     <a href="https://www.spotify.com" target="_blank">
//       <img src="Images/Spotify Logo.png" />
//     </a>
//   </li>
//   <li>
//     <a href="https://www.facebook.com" target="_blank">
//       <img src="Images/Facebook Logo.png" />
//     </a>
//   </li>
// </ul>
// </div>
// </footer>


//////////////////////////////
// function mouseDownHandler () {
//     console.log('Mouse Down');
// }

// function mouseUpHandler () {
//     console.log('Mouse Up');
// }

// function mouseEnterHandler () {
//     console.log('Mouse Enter');
// }

// function mouseLeaveHandler () {
//     console.log('Mouse Leave');
// }

// function mouseOverHandler () {
//     console.log('Mouse Over');
// }

// function mouseOutHandler () {
//     console.log('Mouse Out');
// }

// function mouseMoveHandler (event) {
//     // console.log('Mouse Move');
//     console.log(event);
// }

// <!-- <button onmousedown="mouseDownHandler()" onmouseup="mouseUpHandler()">Mouse Events :)</button> -->
// <!-- <button onmouseenter="mouseEnterHandler()" onmouseleave="mouseLeaveHandler()">Mouse Events :)</button> -->
// <!-- <button onmouseover="mouseOverHandler()" onmouseout="mouseOutHandler()">Mouse Events :)</button> -->
// <button onmousemove="mouseMoveHandler(event)">Mouse Events :)</button>
///////////////////////////////////234
// let arr = ['ali', 'ali', 'ali', 'ali', 'ali', 'ali'];

// let listuser = document.querySelector('.ul');

// let fragmentt = document.createDocumentFragment();

// arr.forEach(function (user) {
//     let item = document.createElement('li');
//     item.innerHTML = user;
//     fragmentt.appendChild(item);
// })

// listuser.appendChild(fragmentt);


//    <ul class="ul"></ul>
////////////////////////////////
// let arr = ['ali', 'ali', 'ali', 'ali', 'ali', 'ali'];

// let listuser = document.querySelector('.ul');

// let fragmentt = document.createDocumentFragment();

// arr.forEach(function (user) {
//     // let item = document.createElement('li');
//     // item.innerHTML = user;
//     // fragmentt.appendChild(item);
//     // listuser.insertAdjacentHTML("beforeend", '<li>' + user + '</li>');
// })

// listuser.appendChild(fragmentt);
//////////////////////////////////////////


// let customScroll = document.querySelector('#scroll')

// window.addEventListener('scroll', function () {

//     let scrollTop = window.scrollY

//     let documentHeight = document.body.clientHeight

//     let windowHeight = window.innerHeight

//     let scrollPercent = scrollTop / (documentHeight - windowHeight)

//     let scrollPercentRounded = Math.round(scrollPercent * 100)

//     customScroll.style.width = scrollPercentRounded + '%'

//     console.log(scrollPercentRounded);
// })


// <div id="scroll"></div>
// <div class="gray"></div>
// <div class="blue"></div>
// <div class="gray"></div>
// <div class="blue"></div>
// <div class="gray"></div>
// <div class="blue"></div>
// <div class="gray"></div>
// <div class="blue"></div>
// <div class="gray"></div>
// <div class="blue"></div>

///////////////////////////244


// let userInfo = document.querySelector('h1')

// let users = [
//     {id: 1, name: 'Amin', age: 21},
//     {id: 2, name: 'Amir', age: 23},
//     {id: 3, name: 'Ali', age: 24},
//     {id: 4, name: 'Hasan', age: 19},
//     {id: 5, name: 'Babak', age: 29},
//     {id: 6, name: 'Reza', age: 32},
// ]

// let locationSearch = location.search

// // Bad Way
// // location.search.slice(1).split('=')[1]

// // Good Way
// let locationSearchParams = new URLSearchParams(locationSearch)
// let userIDParam = locationSearchParams.get('id')

// let mainUser = users.find(function (user) {
//     return user.id == userIDParam
// })

// if (mainUser) {
//     userInfo.innerHTML = 'Name: ' + mainUser.name + ' | Age: ' + mainUser.age
// } else {
//     userInfo.innerHTML = 'User Is Not Defined :('
// }

// console.log(mainUser);


////////////////////////////////245-247

// let productsContainer = document.querySelector('.container')

// let productsArray = [
//     { id: 1, title: 'Sport Shoe', price: 53, img: 'images/1.png' },
//     { id: 2, title: 'Women Shoe', price: 81, img: 'images/2.png' },
//     { id: 3, title: 'Boots', price: 34, img: 'images/3.png' },
// ]

// productsArray.forEach(function (product) {
//     productsContainer.insertAdjacentHTML('beforeend', '<div class="product-card"><h1>' + product.title + '</h1><p>Lorem ipsum, or lipsum as it is sometimes known</p><div class="product-pic" style="background-image: url(' + product.img + ');"></div><div class="product-info"><div class="product-price">$' + product.price + '</div><a href="product.html?id=' + product.id + '" class="product-button">See More</a></div></div>')
// })



// <div class="container">



// </div>

//////////////////////////////پایان بخش دوم 
///////////////////شروع بخش پیشترفته 

// let textElem = document.getElementsByClassName('text')[0]


// title.style.color = 'green'

// console.log(console);



// <p class="text">Js Pro Course</p>

// <h1 id="title">I am h1 tag :)</h1>

// <h3 id="content">H3</h3>

// <div id="console"></div>
/////////////////// this is not standard
/////////////////////////

// <ul id="menu">
// <li class="menu-item">Home</li>
// <li class="menu-item">About</li>
// <li class="menu-item">Contact</li>
// <li class="menu-item">Products</li>
// </ul>
/////////////moror


// alert(confirm("aliakbar"));
// let str = "ali akb ar";
// str = str.concat(" gh asem poor")
// alert();

// /////////////258
// let $ = document
// let autoCompleteWrapper = $.querySelector('.search-input')
// let searchInpueElem = $.querySelector('input')
// let autoCompleteBox = $.querySelector('.autocom-box')
// // alert(autoCompleteWrapper.className)
// searchInpueElem.addEventListener('keyup', function () {
//     let searchValue = searchInpueElem.value

//     if (searchValue) {
//         autoCompleteWrapper.classList.add('active')

//         let filteredWords = suggestions.filter(function (word) {
//             // return word.toLowerCase().startsWith(searchValue.toLowerCase())
//             return word.toLowerCase().includes(searchValue.toLowerCase())
//         })

//         suggestionWordsGenerator(filteredWords)

//     } else {
//         autoCompleteWrapper.classList.remove('active')
//     }
// })

// function suggestionWordsGenerator(wordsArray) {
//     let listItemsArray = wordsArray.map(function (word) {
//         return '<li>' + word + '</li>'
//     })

//     let customListItem
//     if (!listItemsArray.length) {
//         customListItem = '<li>' + searchInpueElem.value + '</li>'
//     } else {
//         customListItem = listItemsArray.join('')
//     }

//     autoCompleteBox.innerHTML = customListItem
//     select()
// }

// function select () {
//     let allListItems = autoCompleteBox.querySelectorAll('li')
//     allListItems.forEach(function (wordItem) {
//         wordItem.addEventListener('click', function (event) {
//             searchInpueElem.value = event.target.textContent
//             autoCompleteWrapper.classList.remove('active')
//         })
//     })

// }

//   <div class="wrapper">
//     <div class="search-input">
//       <a href="" target="_blank" hidden></a>
//       <input type="text" placeholder="Type to search...">
//       <div class="autocom-box">
//         <!-- here list are inserted from javascript -->
//       </div>
//       <div class="icon">
//         <i class="fas fa-search">

//         </i>
//       </div>
//     </div>
//   </div>
//   <script src="js/suggestions.js"></script>

//////////////////////////259 configurations once 
// let btn = document.querySelector('button');
// btn.addEventListener('click',function() {
//     console.log('btn clicked');
// } , {once:true}) ;
// <button class="button">click me</button>
  ////////////////////////////////260-62
// let allDiv = document.querySelectorAll('div')
// allDiv.forEach(function(div , index) {
//     div.addEventListener('click', function(event) {
//       event.stopPropagation();
//     console.log(div.className , (index+1));
//      event.target.style.backgroundColor = 'blue';   
// } ,);
// } );


//   <div class="div1">div1
//     <div class="div2">div2
//       <div class="div3">div3
//         <div class="div4">div4
          
//         </div>
//       </div>
//     </div>
//   </div>
  

  ////////////////////////263
  
  

//   const listItems = document.querySelectorAll('li')
//   const inputElem = document.querySelector('input')
//   const languagesContainer = document.querySelector('.list')
  
//   // listItems.forEach(function (listItem) {
//   //     listItem.addEventListener('click', function (event) {
//   //         console.log(event.target);
//   //         event.target.remove()
//   //     })
//   // })
  
//   languagesContainer.addEventListener('click', function (event) {
  
//       if (event.target.tagName === 'LI') {
//           event.target.remove()
//       }
      
//   })
  
//   inputElem.addEventListener('keypress', function (event) {
//       if (event.keyCode === 13) {
//           let newLanguageLi = document.createElement('li')
//           newLanguageLi.innerHTML = event.target.value
  
//           languagesContainer.append(newLanguageLi)
  
//           console.log(listItems);
  
//           inputElem.value = ''
//       }
//   })
  
//   <ul class="list">
//     <li>Html</li>
//     <li>Css</li>
//     <li>Js</li>
//     <li>BootStrap</li>
//     <li>Npm</li>
//   </ul>
  
// <input type="text">
  
// //////////////
// const btn = document.querySelector('button')

// function clickHandler () {
//     console.log('Clicked');
//     //  return undefined
// }

// btn.addEventListener('click', clickHandler)


// function logger (callbackFunc) {
//     // console.log(func);
//     console.log('logged (1)');
//     callbackFunc
// }

// function logger2 () {
//     console.log('Logged (2)');
// }

// logger(logger2)

// // let numbers = [1, 2, 3, 4, 5, 6]

// // numbers.map(function (item) {
// //     console.log(item);
// // })

// <button type="button">click me</button>

// //////////////////////۲۷۰ 
// const todoInputElem = document.querySelector('.todo-input')
// const todolist = document.querySelector('.todolist')

// function trim (val) {
//     return val.trim()
// }

// function toLowerCase (val) {
//     return val.toLowerCase()
// }

// function insertToLi (todoVal) {
//     return '<li>' + todoVal + '</li>'
// }

// function addTodo (event) {
//     if (event.charCode === 13) {
//         todolist.insertAdjacentHTML('beforeend', insertToLi(toLowerCase(trim(todoInputElem.value))))
//         todoInputElem.value = ''
//     }
// }

// todoInputElem.addEventListener('keypress', addTodo)


//   <input type="text" class="todo-input" />
  
//   <ul class="todolist">
//     <!-- Todos -->
//   </ul>


///////////////////////////275
'use strict'
// Arrow Function

// function sum (num1, num2) {
//     let addNumbers = num1 + num2
//     return addNumbers
// }

// const sum = (num1, num2) => {
//     let addNumbers = num1 + num2
//     return addNumbers
// }

// const pow = (num1, num2) => {
//     return num1 ** num2
// }

// const pow = (num1, num2) => num1 ** num2

// const logger = val => console.log(val)

// const generateUser = (id, name, age = 18) => ({id: id, name: name, age: age})

// // console.log(sum(8, 12)) // 20
// // console.log(pow(3, 2)); // 9
// // logger('Test Text')

// console.log(generateUser(1, 'Ali', 22));


// // Spread Syntax Es6

// let nums = [2, 4, 1]

// function sum (a, b, c) {
//     console.log('a: ', a);
//     console.log('b: ', b);
//     console.log('c: ', c);
//     return a + b + c
// }

// // console.log(sum(2, 4, 1 ));
// console.log(sum(...nums))


// /////////////////////////////////////////////////////////////////////

// // Spread Syntax Es6

// let user = {
//   id: 1,
//   name: 'Ali',
//   age: 22
// }

// let newUser = { ...user }

// newUser.age = 24

// console.log('User', user);
// console.log('New User', newUser);





// function sum (a, b, c) {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('c', c);
//   console.log(arguments);

//   let sumAllArgs = 0

//   let arrayArgs = Array.from(arguments)

//   arrayArgs.forEach(item => sumAllArgs += item)

//   return sumAllArgs
// }

// console.log(sum(2, 1, 4, 5, 2, 10));


// // Rest Operator

// const sum = (a, ...args) => {
//   console.log('a', a);
//   // console.log('b', b);
//   // console.log('c', c);
//   console.log('args', args);
//   // console.log(arguments);

//   let sumAllArgs = 0

//   args.forEach(item => sumAllArgs += item)

//   return sumAllArgs
// }

// console.log(sum(2, 1, 4, 5, 2, 10));

// // Array Dest

// let user = [1, 'Ali', 12]

// // let userID = user[0]
// // let userName = user[1]
// // let userAge = user[2]

// let [userID, userName, userAge] = user

// // console.log('userID', userID);
// // console.log('userName', userName);
// // console.log('userAge', userAge);

// const showNumbers = () => [1, 3, 4, 2, 7, 8]

// let [firstNum, , , secondNum, thirdNum] = showNumbers()

// console.log(firstNum);
// console.log(secondNum);
// console.log(thirdNum);


///////////////////////////282
// Obj Dest


// let user = [1, 'ali', 21, 'Tehran']


// let [userID, userName, userAge, userCity = 'Tabriz'] = user

// console.log(userID);
// console.log(userName);
// console.log(userAge);
// console.log(userCity);

/////////////////////////////////////////////////////////////////////

// let user = {
//   id: 1,
//   // name: 'Ali',
//   age: 22
// }

// // let id = user.id
// // let name = user.name
// // let age = user.age

// let { age, name = 'amin', id: userID } = user

// // console.log(userID);
// // console.log(name);
// // console.log(age);

// /////////////////////////////////////////////////////

// let users = [
//   { id: 1, name: 'ali', age: 22, email: 'ali@gmail.com' },
//   { id: 2, name: 'amin', age: 20, email: 'amin@gmail.com' },
//   { id: 3, name: 'qadir', age: 18, email: 'qadir@gmail.com' },
//   { id: 4, name: 'sasan', age: 32, email: 'sasan@gmail.com' },
// ]

// const getUser = userID => {

//   let mainUser = users.find(user => user.id == userID)

//   return mainUser
// }

// // let {name: userName, email: userEmail} = getUser(4)

// // console.log("UserName:", userName);
// // console.log("UserEmail:", userEmail);


// /////////////////////////////////////////////////////////////////////


// const userIDInput = document.querySelector('#user-id')

// userIDInput.addEventListener('keypress', event => {
//   let { keyCode, target: input } = event

//   if (keyCode === 13) {
//       let { name, email } = getUser(input.value)

//       console.log("UserName:", name);
//       console.log("UserEmail:", email);
//   }

// })
// // let type = 'fake'

// // let txt = 'Lorem Ipsum is ' + type

// // let names = 'ali ' 
// // + 'amin'

// // console.log(names);

// //////////////////////////////////////////////////////////////////

// // Tmeplate String (Literal)

// let type = 'fake'

// let txt = `Lorem Ipsum is ${type} => ${Math.pow(2, 4)}`

// let names = `ali
// amin
// mohammad`

// console.log(names);

// // document.body.insertAdjacentHTML = `${}`

// String Padding

// let username = 'amin'
// console.log(username.padStart(10));
// console.log(username.padEnd(6, '?'));

//////////////////////////////////////////////////////

// let size = '6' // 1 01 2 02
// console.log(size.padStart(2, '0'));

/////////////////////////////////////////////////////

// let phoneNumber = '09921558293'
// let last4Digits = phoneNumber.slice(-4)
// let finalPhoneNumber = last4Digits.padStart(phoneNumber.length, '*')

// console.log(finalPhoneNumber);
// // Numeric Separator = جدا کننده اعداد

// let productPrice = 7_000_000 // 7000000
// let postCost = 5_000 // 5000

// console.log('Total Price: ', productPrice + postCost);

// let products = [
//     {id: 1, name: 'LapTop', price: 10_000_000}
// ]


// // && (AND)   || (OR)

// let userage = 19

// // if (userAge > 18) {
// //     alert('You Logged In Successfully :)')
// // }

// userage > 18 && alert('You Logged In Successfully :)')

// userage < 18 && console.log('You are not regestered');

// // true && true => true
// // true && false => false
// // false && true => false
// // false && false => false


// // && (AND)   || (OR)

// let userAge = 18

// let userType = ''

// // userAge === 18 || alert('Ye Dataye Fake')

// let userToken = userType || 'user'

// console.log(userToken);


// // true || true => true
// // true || false => true
// // false || true => true
// // false || false => false

// // true && true => true
// // true && false => false
// // false && true => false
// // false && false => false
/////////////////////////////////291
// import { isLogin, userRegister, usersCount as usersLength } from './funcs.js'


// let newUserName = prompt('Enter User Name: ')
// let newUserAge = prompt('Enter User Age: ')

// console.log('Users Count:', usersLength);

// console.log(userRegister(newUserName, newUserAge));

// console.log(isLogin(41));


//////////////////////////////////////////////////////////////////////



// import mohammad from './funcs.js'
// import * as funcs from './funcs.js'

// console.log(funcs.isLogin(29));

// // console.log('Users Count:', mohammad);
////////////////////////////295

// window.addEventListener('load', () => {
//   let DBOpenReq = indexedDB.open('SabzLearn', 3)

//   DBOpenReq.addEventListener('error', (err) => {
//       console.warn('Error', err);
//   })
  
//   DBOpenReq.addEventListener('success', (event) => {
//       console.log('Success', event.target.result);
//   })

//   DBOpenReq.addEventListener('upgradeneeded', (event) => {

//       console.log('Old V:', event.oldVersion);
//       console.log('upgrade', event);
//       console.log('New V:', event.newVersion);
//   })

// })


// <div class="login-page">
// <div class="form">
//   <form class="login-form">
//     <input type="text" placeholder="username" />
//     <input type="password" placeholder="password" />
//     <button>login</button>
//     <p class="message">
//       Not registered? <a href="register.html">Create an account</a>
//     </p>
//   </form>
// </div>
// </div>
///////////////////////

// let db = null
// let objectStore = null

// window.addEventListener('load', () => {
//     let DBOpenReq = indexedDB.open('SabzLearn', 12)

//     DBOpenReq.addEventListener('error', (err) => {
//         console.warn('Error', err);
//     })
    
//     DBOpenReq.addEventListener('success', (event) => {
//         console.log('Success', event.target.result);
//     })

//     DBOpenReq.addEventListener('upgradeneeded', (event) => {

//         db = event.target.result

//         console.log('Old V:', event.oldVersion);
//         console.log('New V:', event.newVersion);
        
//         if (!db.objectStoreNames.contains('users')) {
//             objectStore = db.createObjectStore('users')
//         }

//         if (db.objectStoreNames.contains('courses')) {
//             db.deleteObjectStore('courses')
//         }

//         // db.createObjectStore('courses')

//         console.log('upgrade', db.objectStoreNames);

//     })

// })
//   <div class="login-page">
//     <div class="form">
//       <form class="login-form">
//         <input type="text" placeholder="username" />
//         <input type="password" placeholder="password" />
//         <button>login</button>
//         <p class="message">
//           Not registered? <a href="register.html">Create an account</a>
//         </p>
//       </form>
//     </div>
//   </div>
/////////////////////////////
// let $ = document
// const registerForm = $.querySelector('.register-form')
// const nameInput = $.querySelector('.name-input')
// const passwordInput = $.querySelector('.password-input')
// const emailInput = $.querySelector('.email-input')

// let db = null
// let objectStore = null

// window.addEventListener('load', () => {
//     let DBOpenReq = indexedDB.open('SabzLearn', 16)

//     DBOpenReq.addEventListener('error', (err) => {
//         console.warn('Error', err);
//     })
    
//     DBOpenReq.addEventListener('success', (event) => {
//         db = event.target.result
//         console.log('Success', event.target.result);
//     })

//     DBOpenReq.addEventListener('upgradeneeded', (event) => {

//         db = event.target.result

//         console.log('Old V:', event.oldVersion);
//         console.log('New V:', event.newVersion);
        
//         if (!db.objectStoreNames.contains('users')) {
//             objectStore = db.createObjectStore('users', {
//                 keyPath: 'userID'
//             })
//         }

//         if (db.objectStoreNames.contains('courses')) {
//             db.deleteObjectStore('courses')
//         }

//         // db.createObjectStore('courses')

//         console.log('upgrade', db.objectStoreNames);

//     })
// })


// registerForm.addEventListener('submit', event => {
//     event.preventDefault()

//     let newUser = {
//         userID: Math.floor(Math.random() * 9999),
//         name: nameInput.value,
//         password: passwordInput.value,
//         email: emailInput.value,
//     }

//     let tx = db.transaction('users', 'readwrite')

//     tx.addEventListener('error', (err) => {
//         console.warn('Tx Error:', err)
//     })

//     tx.addEventListener('Tx Success', (event) => {
//         console.log(event)
//     })

//     let store = tx.objectStore('users')
//     let request = store.add(newUser)
//     clearInputs()

//     request.addEventListener('error', (err) => {
//         console.warn('Request Error:', err)
//     })

//     request.addEventListener('Request Success', (event) => {
//         console.log(event)
//     })

// })

// function clearInputs () {
//     nameInput.value = ''
//     passwordInput.value = ''
//     emailInput.value = ''
// }

// <div class="login-page">
//     <div class="form">
//       <form class="register-form" style="display: inline-block">
//         <input type="text" class="name-input" placeholder="name" />
//         <input type="password" class="password-input" placeholder="password" />
//         <input type="email" class="email-input" placeholder="email address" />
//         <button>create</button>
//         <p class="message">
//           Already registered? <a href="login.html">Sign In</a>
//         </p>
//       </form>
//     </div>
//   </div>


////////////////////////////////298-299
// let $ = document
// const registerForm = $.querySelector('.register-form')
// const nameInput = $.querySelector('.name-input')
// const passwordInput = $.querySelector('.password-input')
// const emailInput = $.querySelector('.email-input')
// const usersTableElem = $.querySelector('table')

// let db = null
// let objectStore = null

// window.addEventListener('load', () => {

//     let DBOpenReq = indexedDB.open('SabzLearn', 18)

//     DBOpenReq.addEventListener('error', (err) => {
//         console.warn('Error', err);
//     })

//     DBOpenReq.addEventListener('success', (event) => {
//         db = event.target.result
//         getUsers()
//         console.log('Success', event.target.result);
//     })

//     DBOpenReq.addEventListener('upgradeneeded', (event) => {

//         db = event.target.result

//         console.log('Old V:', event.oldVersion);
//         console.log('New V:', event.newVersion);

//         if (!db.objectStoreNames.contains('users')) {
//             objectStore = db.createObjectStore('users', {
//                 keyPath: 'userID'
//             })
//         }

//         if (db.objectStoreNames.contains('courses')) {
//             db.deleteObjectStore('courses')
//         }

//         // db.createObjectStore('courses')

//         console.log('upgrade', db.objectStoreNames);

//     })


// })


// registerForm.addEventListener('submit', event => {
//     event.preventDefault()

//     let newUser = {
//         userID: Math.floor(Math.random() * 9999),
//         name: nameInput.value,
//         password: passwordInput.value,
//         email: emailInput.value,
//     }

//     let tx = createTX('users', 'readwrite')

//     tx.addEventListener('complete', (event) => {
//         console.log('Tx', event)
//     })

//     let store = tx.objectStore('users')
//     let request = store.add(newUser)

//     request.addEventListener('error', (err) => {
//         console.warn('Request Error:', err)
//     })

//     request.addEventListener('success', (event) => {

//         console.log('Request', event)
//         clearInputs()
//         getUsers()
//     })



// })

// function clearInputs() {
//     nameInput.value = ''
//     passwordInput.value = ''
//     emailInput.value = ''
// }

// function getUsers() {

//     let tx = createTX('users', 'readonly')

//     tx.addEventListener('complete', (event) => {
//         console.log('Tx', event)
//     })

//     let store = tx.objectStore('users')
//     let request = store.getAll()

//     request.addEventListener('error', (err) => {
//         console.warn('Get Request Error:', err)
//     })

//     request.addEventListener('success', (event) => {

//         let allUsers = event.target.result

//         usersTableElem.innerHTML = `<tr>
//                                         <th>ID</th>
//                                         <th>Name</th>
//                                         <th>Password</th>
//                                         <th>Email</th>
//                                         <th>Actions</th>
//                                     </tr>`

//         usersTableElem.innerHTML += allUsers.map(user => {
//             return `<tr>
//                         <td>${user.userID}</td>
//                         <td>${user.name}</td>
//                         <td>${user.password}</td>
//                         <td>${user.email}</td>
//                         <td><a href="#" onclick="removeUser(${user.userID})">Remove</a></td>
//                     </tr>`
//         }).join('')

//         // console.log(usersTemplateArray);

//     })

// }

// function removeUser (userID) {
//     event.preventDefault()

//     console.log(userID);

//     let tx = createTX('users', 'readwrite')

//     tx.addEventListener('complete', (event) => {
//         console.log('Delete Tx', event)
//     })

//     let store = tx.objectStore('users')
//     let request = store.delete(userID)

//     request.addEventListener('error', (err) => {
//         console.warn('Delete Request Error:', err)
//     })

//     request.addEventListener('success', (event) => {

//         console.log('Delete Request Success', event)
//         getUsers()
//     })
// }

// function createTX (storeName, mode) {
//     let tx = db.transaction(storeName, mode)

//     tx.addEventListener('error', (err) => {
//         console.warn('Tx Error:', err)
//     })

//     return tx
// }

// // DRY => Don't Repeat Yourself


// <div class="login-page">
// <div class="form">
//   <form class="register-form" style="display: inline-block">
//     <input type="text" class="name-input" placeholder="name" />
//     <input type="password" class="password-input" placeholder="password" />
//     <input type="email" class="email-input" placeholder="email address" />
//     <button>create</button>
//     <p class="message">
//       Already registered? <a href="login.html">Sign In</a>
//     </p>
//   </form>
// </div>
// </div>
// <h2 class="text-center">Users List</h2>
// <table>
// <tr>
//   <th>ID</th>
//   <th>Name</th>
//   <th>Password</th>
//   <th>Email</th>
//   <th>Actions</th>
// </tr>
// </table>
////////////////////////////


