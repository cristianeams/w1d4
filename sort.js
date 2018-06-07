var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
//http://www.javascriptkit.com/javatutors/arraysort.shtml
console.log(
  students.sort(function (a, b){
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      // IF names must be equal, sort by descending age
      return b.age - a.age;
    }
  })
);