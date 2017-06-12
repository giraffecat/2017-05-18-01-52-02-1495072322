let Student = require('./person')
Student.klass=4;
Student.introduce=function(){
  console.log("wo shi"+this.name+"wo yiji"+this.age+"wode"+this.klass);}


module.exports = Student
