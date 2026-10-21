const square = n => n * n;
const greet = name => `Hello, ${name}!`;
const multiply = (a, b) => a * b;

const getFullName = (firstName, lastName) => `${firstName} ${lastName}`;
const student = { name: "Amaka", age: 22, course: "Frontend Development", city: "Abuja" };
const scores = [88, 72, 95, 60, 45];
const { name, course } = student;
const { age: studentAge } = student;
const [firstScore, secondScore] = scores;
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express", "MongoDB"];
const userProfile = { username: "coder_ade", email: "ade@example.com" };

const fullStack = [...frontend, ...backend];

const updatedProfile = { ...userProfile, email: "newemail@example.com" };

console.log("Original Profile:", userProfile);
console.log("Updated Profile:", updatedProfile);

const name2 = "Fatima";
const age = 24;

const intro = `My name is ${name2} and I am ${age} years old.`;

const width = 8;
const height = 5;
const areaMessage = `The area of the rectangle is ${width * height}`;
console.log(areaMessage); 

const products = [
  { name: "Laptop", price: 450000, inStock: true },
  { name: "Mouse", price: 8000, inStock: true },
  { name: "Monitor", price: 120000, inStock: false },
  { name: "Keyboard", price: 15000, inStock: true },
];
const productNames = products.map(product => product.name);

const inStockProducts = products.filter(product => product.inStock);

const inStockNamesUppercase = products
  .filter(product => product.inStock)
  .map(product => product.name.toUpperCase());

const role = "editor";
const cartItems = 0;

const accessLevel = 
  role === "admin" ? "Full Access" :
  role === "editor" ? "Edit Access" :
  role === "viewer" ? "Read Only" : 
  "No Access";

console.log(cartItems && "View Cart"); 

const cartDisplay = cartItems > 0 && "View Cart";
console.log(cartDisplay);