function person(kame,age){
  this.kame=kame;
  this.age=age;
    console.log('My name is '+this.kame+'. I am '+this.age+' years old.');
}
module.exports = person


