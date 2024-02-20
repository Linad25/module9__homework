const XMLString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parser = new DOMParser;
const parsingXML = parser.parseFromString(XMLString, ("text/xml"));

const listNode = parsingXML.querySelector("list");
const students = listNode.querySelectorAll("student");

let listStudent = []

for (let objStudent of students) {
    const first = objStudent.querySelector("first").textContent;
    const second = objStudent.querySelector("second").textContent;
    const age = objStudent.querySelector("age");
    const prof = objStudent.querySelector("prof");
    objStudent.name = `${first} ${second}`;
    objStudent.age = +(age.textContent);
    objStudent.prof = prof.textContent;
    objStudent.lang = objStudent.querySelector("name").getAttribute("lang")
    listStudent.push(objStudent);
}

let result = {
};
result.list = listStudent

console.log(result)

// ВЫХОД:
// {
// 	list: [
// 	  { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
// 	  { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
// 	]
// }