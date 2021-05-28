// objects literal
const person={
    name:'John',
    age:80,
    birthYear:function(){
        return new Date().getFullYear()-this.age;
    }
}

console.log(person.birthYear());

const client = {
    name:'Alex',
    type:'Premium',
    date:{
        address:{
            city:'Tijuana',
            county:'Mexico"'
        },
        account:{
            date:'12-30-2018',
            bonus:10
        }
    }
}
console.log(client.data.address.country);
// display on the console Mxico (country)