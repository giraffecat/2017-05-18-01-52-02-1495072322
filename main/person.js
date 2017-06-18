class person{
  constructor(name,age){
    this.name=name;
    this.age=age;
    this.introduce=function(){
  console.log("My name is "+this.name+"."+"my age is "+this.age+".")}
}
}
module.exports = person
