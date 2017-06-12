function person(kame,age){
  this.kame=kame;
  this.age=age;
  this.introduce=function(){
    console.log('My name is '+this.kame+'. I am '+this.age+' years old.');}
}
module.exports = person


