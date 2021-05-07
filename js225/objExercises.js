function makeCar(rate=0, brakeRate=0) {
  return {
    speed: 0,
    rate,
    brakeRate,

    accelerate() {
      this.speed += this.rate
    },

    brake() {
      this.speed - this.brakeRate < 0 ?
        this.speed = 0 :
        this.speed -= this.brakeRate
    },
  }
}

// let hatchback = makeCar(9, 6);
// hatchback.accelerate();
// console.log(hatchback.speed)
// hatchback.brake();
// console.log(hatchback.speed)
// hatchback.brake();
// console.log(hatchback.speed)

const createCountry = (name="", continent="", visited=false) => {
  return {
    name,
    continent,
    visited,

    getDescription() {
      return this.visited ?
        this.name + ' is located in ' + this.continent + '. I have visited' + this.name + '.' :
        this.name + ' is located in ' + this.continent + '. I haven\'t visted' + this.name + '.'
      // lschool solution:
      // return this.name + ' is located in ' + this.continent + '. I ' +
      // (this.visited ? 'have' : "haven't") +
      // ' visited ' + this.name + '.';
    },

    visitedCountry() {
      this.visited = true;
    }

  }
}

// keep track of inventory
let scissorsId = 0;
let scissorsName = 'Scissors';
let scissorsStock = 8;
let scissorsPrice = 10;

let drillId = 1;
let drillName = 'Cordless Drill';
let drillStock = 15;
let drillPrice = 45;

// organize code into more manageable objects
let scissors = {
  id: 0,
  name: 'Scissors',
  stock: 8,
  price: 10,

  setPrice(newPrice) {
    newPrice < 0 ?
      console.log('Entered price is invalid!') :
      this.price = newPrice;
  
  },

  productDescription() {
    console.log(`
      Name: ${this.name}
      ID: ${this.id}
      Price: ${this.price}
      Stock: ${this.qty}
    `);
  }
};

// let drill = {
//   id: 1,
//   name: 'Cordless Drill',
//   stock: 15,
//   price: 45,

//   setPrice(newPrice) {
//     newPrice < 0 ?
//       console.log('Entered price is invalid!') :
//       this.price = newPrice;
  
//   },

//   productDescription() {
//     console.log(`
//       Name: ${this.name}
//       ID: ${this.id}
//       Price: ${this.price}
//       Stock: ${this.qty}
//     `);
//   }
// };

// create a function that takes a product as an arg and set it's price to a non-negative num
// if the num is negative, alert the user that the new price is invalid

function setPrice(product, price) {
  price < 0 ?
    console.log('Entered price is invalid!') :
    product.price = price;

}

// implement descriptions for the product
function productDescription(product) {
  console.log(`
    Name: ${product.name}
    ID: ${product.id}
    Price: ${product.price}
    Stock: ${product.qty}
  `);
}

// remove from objs above from code and create a factory fn
const createProduct = (id, name, qty, price) => {
  return {
    id,
    name,
    qty, 
    price,

    setPrice(newPrice) {
      newPrice < 0 ?
        console.log('Entered price is invalid!') :
        this.price = newPrice;
    
    },
  
    productDescription() {
      console.log(`
        Name: ${this.name}
        ID: ${this.id}
        Price: ${this.price}
        Stock: ${this.qty}
      `);
    }

  }
}

const drill = createProduct(1, 'Drill', 10, 75.99);
console.log(drill.productDescription());

