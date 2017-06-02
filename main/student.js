let Person = require('./person')

{
  var person={name:'王雪',age:21};
  person.class=4;
  function introduce()
  {  console.log('my name is'+person.name+'   I am'+person.age+'years old   '+'class is'+person.class)
  }
  introduce(); 
}


