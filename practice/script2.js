const persons=[
    {name:'Jake',age:28},
    {name:'Jorge',age:29},
    {name:'Danny',age:20},
    {name:'Joshua',age:28},
    {name:'Andrew',age:40},
    {name:'Reese',age:25},
    {name:'Kirby',age:27},
    {name:'Paola',age:26},
]
for(var i=0;i<persons.length;i++){
    document.writenln(persons[i].name);
}

const olders = persons.length.filter(persons=>person.age>24);
console.log(olders);

const kirby=persons.find(person=>person.name=='Kirby');
console.log(kirby.age);

let total = persons.reduce((ages,person)=>{
    return ages + person.age;
},0);
console.log(total/persons.length);
document.write('<br>The mean of the ages is: ${total/persons.length}');