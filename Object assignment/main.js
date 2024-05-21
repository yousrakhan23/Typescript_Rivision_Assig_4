//                                     <------Object Assignments----->
var employee1 = {
    name: "Yousra Khan",
    department: "Engineering",
    role: "Engineer",
    skills: ["Applied Mathematics", "Statistics", "Vector Analysis"],
    contact: {
        cellNumber: "00012001234",
        email: "whykaydigimart@gmail.com"
    },
};
var employee2 = {
    name: "Shah Hassan",
    department: "Ptcl",
    role: "Intern",
    skills: ["Telecommunications Engineer"],
    contact: {
        cellNumber: "12345678908",
        email: "shah.26@gmail.com",
    },
};
console.log(employee1);
console.log(employee2);
var ourCar = {
    engine: {
        horsePower: 1200,
    },
    getHorsePower: function () {
        console.log("Our carspeed is ".concat(ourCar.engine.horsePower, " horse power"));
    }
};
ourCar.getHorsePower();
var Tshirt = {
    name: "Jharna Clothing Brand",
    price: 3500,
    color: "Peach",
    inventory: {
        stock: 67,
        changeColor: function (newColor) {
            Tshirt.color = newColor;
            if (Tshirt.color === "Peach") {
                var iPercent20 = Tshirt.price / 100 * 20;
                Tshirt.price += iPercent20;
            }
            else if (Tshirt.color === "Purple") {
                var depercent10 = Tshirt.price / 100 * 10;
                Tshirt.price -= depercent10;
            }
            else if (Tshirt.color === "Blue") {
                var iPercent5 = Tshirt.price / 100 * 5;
                Tshirt.price += iPercent5;
            }
            else {
                return null;
            }
        }
    }
};
console.log(Tshirt);
Tshirt.inventory.changeColor("Blue");
console.log(Tshirt);
