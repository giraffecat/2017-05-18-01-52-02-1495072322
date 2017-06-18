class person{
  constructor(name,age){
    this.name=name;
    this.age=age;}
}
  person.introduce=function(){
    console.log("my name is"+this.name+"  my age is "+this.age);
  
}
module.exports = person


