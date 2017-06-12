function person(kame,age){
  this.kame=kame;
  this.age=age;
  this.introduce=function(){
 console.log('我的名字 '+this.kame+'. 我已经'+this.age+' 岁.');}
}
module.exports = person


