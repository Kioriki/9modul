
const jsonString = `
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
`;

const data = JSON.parse(jsonString);
// console.log('data', data);
const list = data.list;
let result = [];
      

for (let item of list) {
    result.push(
        {
            name: item.name,
            age: item.age,
            prof: item.prof
        }
    )
}
console.log(result)