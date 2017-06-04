function person(name,age){
  this.name=name;
  this.age=age;
  this.introduce=function(){
    console.log('my name is'+this.name+',my age is'+this.age)}
  person.introduce();
}

person.introduce();
  module.exports = person;
