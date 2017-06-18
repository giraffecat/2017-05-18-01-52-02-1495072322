class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
}
introduce=function(){
  console.log("my name is"+person.name+"my age is"+person.age)
}
module.exports = person
