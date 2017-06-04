
function Student(name,age,klass){
this.name=name;
this.age=age;
this.klass=klass;
this.introduce=function(){console.log('my name is'+Student.name+'my age is'+Student.age+'my klass is'+Student.klass)}
    }
var Student=new Student('pill','21','4');
Student.introduce();


