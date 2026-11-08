const peopole =[
        {name:"ali",  age: 30, city:"mogadisho"},
        {name:"moha",  age: 20, city:"mombas"},
        {name:"alim",  age: 25, city:"marko"}
];

console.log ("properties and values each person:");

for(let person of peopole){
        for(let key in person){
        console.log(key + ": " + person[key]);
        }
        console.log("---");
}