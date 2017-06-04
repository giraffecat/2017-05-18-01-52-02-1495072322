function person(name,age){
  this.name=name;
  this.age=age;
  this.introduce=function(){
    console.log('My name is '+this.name+',My age is '+this.age+' years old!')}
}


  module.exports = person;
