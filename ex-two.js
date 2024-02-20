let JSONstring = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`
let data = JSON.parse(JSONstring);
let list = data.list;
for (let object of list) {
  object.age = +(object.age);
}
console.log(data)

// Выход:
// {
// 	list: [
// 	  { name: 'Petr', age: 20, prof: 'mechanic' },
// 	  { name: 'Vova', age: 60, prof: 'pilot' },
// 	]
// }