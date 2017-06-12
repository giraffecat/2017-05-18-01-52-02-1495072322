function person(kame,age){
  this.kame=kame;
  this.age=age;}
person.prototype.introduce=function(){
  return ('my name is'+'this.name+'my age is'+this.age)
};
module.exports = person


