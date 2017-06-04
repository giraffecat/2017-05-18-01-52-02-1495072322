
let Person = require('./person')
function Student(){}
Student.prototype=new Person();
Student.name='pill';
Student.age='1';
Student.klass='4';
Student.introduce=function(){console.log('my name is'+Student.name+'my age is'+Student.age+'my klass is'+Student.klass)
                            }
Student.introduce();

module.exports = Student;
