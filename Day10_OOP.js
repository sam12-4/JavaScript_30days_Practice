// Understanding protoypes

softwareEngineer ={
    designation : "Engineer"
}

coder ={
    programming : true
}

softwareEngineer.__proto__ = coder
console.log(softwareEngineer.programming);
 

class teacher{
    constructor(name, age){
        this.name =name;
        this.age = age
    }
    study(){
        console.log("Study to Teaches")
    }

    static degree(){
        console.log("no degreee only kota system")
    } 


}

teacher1  = new teacher("mahnoor", 25)
console.log(teacher1.name);
console.log(teacher1.age);
console.log(teacher1.study());

class student extends teacher{
    constructor(name, age, qualification){
        super(name, age)
        this.qualification = qualification
    }
    study(){
        console.log("Study to give exam")
        super.study()
    }

}

student1 = new student("Sameer",19, "Intermediate")
console.log(student1.name);
console.log(student1.age);
console.log(student1.qualification);
console.log(student1.study());

// static mehods are not available for object but only belong to a class(THEY CAN BE INHERITED)
console.log(student.degree());


// getter and setter function
class User{
    constructor(name, age){
        this.name = name;
        this.age = String(age)
    }
    get name (){
        return this._name
    }
    
    get age (){
        return this._age
    }
    set name(namevalue){
        if (namevalue.length<4){
            console.log('Name is too Short');
            return
        }
        this._name= namevalue;
    }

    set age(agevalue){
        if (agevalue.length>=3){
            console.log('Age is invalid');
            return
        }
        this._age= agevalue;
    }
}

let user = new User("Johnersname", 16)
console.log(user.name);
user.name="sameer"
user.age= 20
console.log(user.name);
console.log(user.age);

//  will return true if object is an instance of the class
console.log(user instanceof User);
console.log(student1 instanceof student);
console.log(teacher1 instanceof teacher);
 



