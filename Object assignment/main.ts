//                                     <------Object Assignments----->

//*********************************** Part 1: Employee Data ***************************************************

// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if 
// any)

type Employees = {
    name:string;
    department:string;
    role: "Manager" | "Intern" | "Engineer" ;
    skills:string[];
    contact: {
        cellNumber:string;
        email:string;
    };
};

const employee1: Employees = {
    name: "Yousra Khan",
    department: "Engineering",
    role: "Engineer",
    skills: ["Applied Mathematics" , "Statistics" , "Vector Analysis"],
    contact: {
        cellNumber: "00012001234",
        email: "whykaydigimart@gmail.com"
    },

};

const employee2: Employees = {
    name: "Shah Hassan",
    department : "Ptcl",
    role: "Intern",
    skills: ["Telecommunications Engineer"],
    contact: {
        cellNumber: "12345678908",
        email: "shah.26@gmail.com",
    },
};
console.log(employee1);
console.log(employee2);


//*********************************** Part 2: Car Details ***************************************************

//Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower.

type Car = {
    engine: {
        horsePower: number;
    }
    getHorsePower: () => void
}
const ourCar : Car = {
    engine: {
        horsePower:1200,
    },
    getHorsePower: () => {
        console.log(`Our carspeed is ${ourCar.engine.horsePower} horse power`);

    }
}
ourCar.getHorsePower()

//*********************************** Part 3: Colorful T-Shirts ***************************************************

//1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue).

type Product = {
    name: string,
    price: number,
    color: string,
 inventory: {
    stock:number,
    colorOptions?: ["Peach" , "Purple" , "Blue"]
    changeColor: (newColor : string) => any
     
    }
}
let Tshirt : Product = {
    name:"Jharna Clothing Brand",
    price: 3500,
    color:"Peach",
    inventory: {
        stock: 67,
        changeColor: (newColor : string) => {
            Tshirt.color = newColor
            if(Tshirt.color === "Peach"){
                let iPercent20 = Tshirt.price / 100 * 20 
                Tshirt.price += iPercent20
            }
            else if (Tshirt.color === "Purple"){
                let depercent10 = Tshirt.price / 100 * 10 
                Tshirt.price -= depercent10
            }
            else if (Tshirt.color === "Blue"){
                let iPercent5 = Tshirt.price / 100 * 5
                Tshirt.price += iPercent5
            }
            else{
                return null;
            }
        }
    }
}
console.log(Tshirt);
Tshirt.inventory.changeColor("Blue")
console.log(Tshirt);