function person(name,age){
  this.name='pill';
  this.age='21';
  this.introduce=function(){
    console.log('My name is '+this.name+'. I am '+this.age+' years old.')}
}
  module.exports = person;
