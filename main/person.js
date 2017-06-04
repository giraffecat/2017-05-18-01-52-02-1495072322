function person(name,age){
  this.name=name;
  this.age=age;
  this.introduce=function(){
    console.log('My name is '+this.name+'. I am '+this.age+' years old.')}
}
var person=new person('pill','21');
person.introduce();
  module.exports = person;
