/*---------------------1st-Problem------------------------ */

class restaurantManger {
  //1
  restaurantList = [
    {
      //2
      id: 1,
      restaurantName: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      restaurantName: "North Wok",
      address: "Channi Himmat",
      city: "Jammu",
    },
    {
      id: 3,
      restaurantName: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      restaurantName: "Subway",
      address: "Cantonment",
      city: "Mumbai",
    },
    {
      id: 5,
      restaurantName: "famous restaurant",
      address: "Neemkheda, Madhya Pradesh 464551",
      city: "Neemkheda",
    },
    {
      id: 5,
      restaurantName: "Zamindar Dhaba",
      address: "NH-44 , Near ring-road, Samba",
      city: "Jammu",
    },
  ];

  //3
  printAllRestaurantNames = () => {
    return this.restaurantList.map((restaurant) => restaurant.restaurantName);
  };

  //4
  filterRestaurantByCity = (cityname) => {
    return this.restaurantList.filter(
      (restaurant) => restaurant.city == cityname
    );
  };
}

const restaurantObject = new restaurantManger();

const output1 = restaurantObject.printAllRestaurantNames();
console.log(output1);

console.log(restaurantObject.filterRestaurantByCity("Jammu"));

/*-----------------------------2nd- problem-------------------------*/

orderData = {
  "Below 500": 20,
  "500-1000": 29,
  "1000-1500": 30,
  "1500-2000": 44,
  "Above 2000": 76,
};

//Q2. (a)

// const values = Object.values(orderData);
// console.log(values);

// const total = values.reduce((prev, next) => prev + next);
// console.log(total);

const total = Object.values(orderData).reduce((prev, next) => prev + next);
console.log(total);

//Q2. (b)

const headers = Object.keys(orderData);
console.log(headers);

// const headers = Object.keys(orderData).length;
// console.log(headers);

//Q3. (c)
let array = [];
const response = headers.map((item, index) => {
  const obj = {
    id: index + 1,
    order: item,
    orderpercentage: ((orderData[item] / total) * 100).toFixed(2), //(20 / 199) * 100
    restaurant: "Punjabi Tadka",
  };
  array.push(obj);
});

console.log(array);
