function person(name,age){
  this.name=name;
  this.age=age;}
person.prototype.introduce=function(){
  return '('my name is'+this.name+'my age is'+this.age)'
};
module.exports = person


