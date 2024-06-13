const name ="hitesh"
const repoCount = 50

// console.log(name +repoCount+ "value");

//console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh')
//console.log(gameName[0]);
// console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0,4)
console.log(newString)

const anotherString =gameName.slice(-7,4)
console.log(anotherString);

const newStringOne = "  hhitesh "
console.log(newStringOne);
console.log(newStringOne.trim());// extra white space  ko remove kar deta hai

const url ="https////////////sdsjdsduisdhsuidsu.com"
console.log(url.replace('com','---'))