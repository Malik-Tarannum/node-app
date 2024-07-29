const jsonString='{"name":"John", "age":30, "city":"New York"}'
const jsonObject=JSON.parse(jsonString) //converst json string into an object
console.log( jsonObject)
console.log(jsonObject.name)

//---------------------------------------------------------------------
const obj = {name: "John", age: 30, city: "New York"};
const str=JSON.stringify(obj) //converts object to string
console.log(str)