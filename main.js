function getName(name) {
  return name;
}

let a = false;
let b = true;

console.log(a && getName("Deva"));

//Template Literals

let name1 = "Krishna";
let name2 = "Kumar";

console.log(name1 + " " + name2, "${name1} ${name2}");

//Ternary

const showRecipieOne = true;

const movie = true;

function getMovie1Name(movieName) {
  return movieName;
}

function getMovie2Name(movieName) {
  return movieName;
}
function getRecipieOneName(recipieName) {
  return recipieName;
}

function getRecipieTwoName(recipieName) {
  return recipieName;
}

if (showRecipieOne) {
  console.log(getRecipieOneName("Pizza"));
} else {
  console.log(getRecipieTwoName("Coke"));
}

showRecipieOne
  ? console.log(getRecipieOneName("Pizza"))
  : console.log(getRecipieTwoName("Coke"));

movie
  ? console.log(getMovie1Name("Billa"))
  : console.log(getMovie2Name("Sahoo"));

const id = 1;
const productName = "Android";
const rating = 5;

const product = {
  id: id,
  productName: productName,
  rating: rating,
};
console.log(product);

const empId = 101;
const empName = "Dinga";
const sal = 40000;

const employee = {
  empId,
  empName,
  sal,
};

console.log(employee);

const product2 = {
  description: "Product 2 Description",
  id,
  productName,
  rating,
};

// const getProductTwoDescription = product2.description;

// console.log(getProductTwoDescription)

const { description } = product2;
console.log(description);

const array = [1, 2, 3];

let getArrayFirstValue = array[0];
let getArraySecondValue = array[1];

console.log(getArrayFirstValue, getArraySecondValue);

const [arrayFirstValue, arraySecondValue] = array;
console.log(arrayFirstValue, arraySecondValue);

const array2 = [2, 3, 4, 5];

const [first, second, third, four] = array2;

console.log(first, second, third, four);

function mulOfTwoNumbers(num1 = 1, num2 = 2) {
  console.log(num1, num2);
  return num1 * num2;
}

console.log(mulOfTwoNumbers(10));

const array3 = [2, 3, 4];
const array4 = [12, 13, 14];

console.log([999, 23, ...array2, ...array4, 10000]);

function getDetails(a, ...e) {
  console.log(a, e);
  return "Deva";
}
console.log(getDetails(1, 2, 3, 4, 5));

//map, filter, some, find
const personsArray = [
  {
    name: "Person 1",
    age: 30,
    country: "India",
  },
  {
    name: "Person 02",
    age: 23,
    country: "USA",
  },
  {
    name: "Person 2",
    age: 24,
    country: "USA",
  },
  {
    name: "Person 3",
    age: 34,
    country: "UK",
  },
];

let getAllNames = personsArray.map((singlePerson, index) => {
  console.log(singlePerson, index);
  return "${singlePerson.name} age is ${singlePerson.age}";
});

console.log(getAllNames);

let getPersonFromUSA = personsArray.find((singlePerson, index) => {
  return singlePerson.country == "USA";
});

let getAllPersonsFromUSA = personsArray.filter((singlePerson, index) => {
  return singlePerson.country === "USA";
});

console.log(getAllPersonsFromUSA);

console.log(getPersonFromUSA);

let checkAge = personsArray.some((singlePerson) => {
  return singlePerson.age < 40;
});

console.log(checkAge);

let checkEveryArrayMethodEx = personsArray.every((singlePerson) => {
  return singlePerson.age < 40;
});

console.log(checkEveryArrayMethodEx);

const fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("apple"), fruits.indexOf("orange"));

let getIndexOfPersonWhoIsFromRussia = personsArray.findIndex((singlePerson) => {
  singlePerson.country === "India";
});

console.log(getIndexOfPersonWhoIsFromRussia);

let getListOfProductElements = document.querySelector(".list-of-products");

function renderProducts(getProducts) {
  getListOfProductElements.innerHTML = getProducts
    .map((singleProductItem) => '<p>${singleProductItem.title}</p>')
    .join(" ");
}

async function fetchListOfProducts() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await apiResponse.json();

    console.log(result);
    if (result?.products?.length > 0) renderProducts(result?.products);
  } catch (e) {
    console.log(e);
  }
}

fetchListOfProducts();
