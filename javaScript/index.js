function logo(){
    document.write("I am a Logo");
}

function register(){
    confirm("Do you want to be the member of ReferralsZone?");
}

function login(){
    confirm("Do you want to Login?");
}

function form__submit(){
    alert("Do you want to submit the form?")
}

function addition(){
    function add(){
        var a =parseInt(prompt("Enter first Number"));
        var b = parseInt(prompt("Enter Second Number"));
        return a+b;
    }
    var sum = add();
    document.write("Sum is "+sum);
}

function subtraction(){
    function add(){
        var a =parseInt(prompt("Enter first Number"));
        var b = parseInt(prompt("Enter Second Number"));
        return a-b;
    }
    var sum = add();
    document.write("Difference is "+sum);
}

function mult(){
    function add(){
        var a =parseInt(prompt("Enter first Number"));
        var b = parseInt(prompt("Enter Second Number"));
        return a*b;
    }
    var sum = add();
    document.write("Product is "+sum);
}

function divide(){
    function add(){
        var a =parseInt(prompt("Enter first Number"));
        var b = parseInt(prompt("Enter Second Number"));
        return a/b;
    }
    var sum = add();
    document.write("Division is "+sum);
}

function para(){
    alert("You are copying paragraph")
}

function left(){
    alert("You are trying to access name")
}

function clickMouse(){
    alert("You want to click on ReferrelsZone")
}

function scroll__fun(){
    alert("You want to scroll down")
}

function resizeFun(){
    alert("You try to resize the browser size")
}

class Student{
    constructor(name,age,cls){
        this.name = name;
        this.age = age;
        this.cls = cls;
    }

    biodata(){
        return `Hi My name is ${this.name}, I am ${this.age} years old and I am in class ${this.cls}`;
    }

    static add(a,b){
        return a+b;
    }
}

class Player extends Student{
    constructor(name,age,cls,game){
        super(name,age,cls);
        this.game = game;
    }
    play_biodata(){
        return `${super.biodata()}, I am player of ${this.game}`;
    }
    static mult(a,b){
        return a*b;
    }
}

let obj1 = new Player("Abhijeet",23,"B.tech","Football");
console.log(obj1.play_biodata());
console.log(Student.add(35,4));
console.log(Player.mult(5,5));