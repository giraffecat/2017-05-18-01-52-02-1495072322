function Person(name, age) {
    return {
        name: name,
        age: age,
        sayHi: function() {
            alert("Hi, I'm " + this.name);
        }
    };
}
