class Card {
    constructor (name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name,cost,power,res) {
        super(name, cost);
        this.power = power;
        this.res = res;

    }

    attack( target ) {
        target.res -= this.power;
    }

}

class Effect extends Card{
    constructor(name,cost,magnitude,action,stat) {
        super(name, cost);
        this.magnitude = magnitude;
        this.action = action;
        this.stat = stat;
        this.text = `${this.action} the target's ${this.stat} by ${this.magnitude}`;
    }

    use( target ) {
        if( target instanceof Unit ) {
            if (this.stat == "power") {
                if (this.action == "Increase") {
                    target.power += this.magnitude;
                } else { //action is Decrease
                    target.power -= this.magnitude;
                }
            } else { // stat is resilience
                if (this.action == "Increase") {
                    target.res += this.magnitude;
                } else { //action is Decrease
                    target.res -= this.magnitude;
                }
    
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
        
    }

}

// play( target ) {
//     if( target instanceof Unit ) {
//         console.log("Target is an instance of unit");
//     } else {
//         throw new Error( "Target must be a unit!" );
//     }
// }

// const algo = new Effect("Hyabusa", 2, 10, "Increase", "res");
// console.log(algo.text);

const red = new Unit("RedBeltNinja", 3, 3, 4);
const hard = new Effect("Hard Algorithm", 2, 3, "Increase", "resilience");
console.log("red" + red);
hard.use(red);
const black = new Unit("BlackBeltNinja", 4, 5, 4);
console.log("black" + black);
const unhandled = new Effect("Unhandled Promise Rejection", 1, 2, "Decrease", "resilience");
unhandled.use(red);
const pair = new Effect("Pair Programming", 3, 2, "Increase", "power");
pair.use(red);
red.attack(black);
console.log("red after" + red);
console.log("black after" + black);





