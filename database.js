let listProducts = [
  {
    id: 1,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "broccoli-and-cauliflower.jpg",
    category: "Vegetable",
    product_name: "broccoli & cauliflower",
    product_description:
      "a vegetable with a thick green stem and a tree-like dark green top, & a large round white vegetable which is eaten cooked or raw ",
    retail_price: 5000,
    measurement: "Kg",
    price_tag: "broccoli & cauliflower @USh 5,000 /Kg",
  },
  {
    id: 2,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "cabbage.jpg",
    category: "Vegetable",
    product_name: "cabbage",
    product_description:
      "a large round vegetable with large green, white or purple leaves, which can be eaten cooked or raw ",
    retail_price: 10000,
    measurement: "Kg",
    price_tag: "cabbage @USh 10,000 /Kg",
  },
  {
    id: 3,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "eggplant.jpg",
    category: "Vegetable",
    product_name: "eggplant",
    product_description:
      "an oval green vegetable which is white inside and which is usually eaten cooked ",
    retail_price: 15000,
    measurement: "Kg",
    price_tag: "eggplant @USh 15,000 /Kg",
  },
  {
    id: 4,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "goose.jpg",
    category: "Bird",
    product_name: "goose",
    product_description: "a large water bird similar to a  duck  but larger ",
    retail_price: 20000,
    measurement: "Bird",
    price_tag: "goose @USh 20,000 /Bird",
  },
  {
    id: 5,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "green-bell-pepper.jpg",
    category: "Vegetable",
    product_name: "green bell pepper",
    product_description:
      "a vegetable that is usually green, red or yellow, has a rounded shape and is hollow with seeds in the middle ",
    retail_price: 25000,
    measurement: "Kg",
    price_tag: "green bell pepper @USh 25,000 /Kg",
  },
  {
    id: 6,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "guinea-fowl.jpg",
    category: "Bird",
    product_name: "guinea fowl",
    product_description:
      "a large grey and white African bird, kept for its eggs and meat ",
    retail_price: 30000,
    measurement: "Bird",
    price_tag: "guinea fowl @USh 30,000 /Bird",
  },
  {
    id: 7,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "onions.jpg",
    category: "Vegetable",
    product_name: "onions",
    product_description:
      "a vegetable with a strong smell and flavour, made up of several layers surrounding each other tightly in a round shape, usually brown or red on the outside and white inside ",
    retail_price: 35000,
    measurement: "Kg",
    price_tag: "onions @USh 35,000 /Kg",
  },
  {
    id: 8,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "passion-fruits.jpg",
    category: "Fruit",
    product_name: "passion fruits",
    product_description:
      "a small fruit with thick purple or yellow skin and many seeds ",
    retail_price: 40000,
    measurement: "Kg",
    price_tag: "passion fruits @USh 40,000 /Kg",
    quantity_purchased: "0",
    net_purchases: "0",
    quantity_sold: "0",
    net_sales: "0",
    quantity_instock: "0",
    closing_stock: "0",
    cost_of_sales: "0",
    gross_profit_or_loss: "0",
    discontinued: "NO",
    createdAt: "2023-09-04T00:00:00.000Z",
    updatedAt: "2024-06-14T07:29:05.455Z",
  },
  {
    id: 9,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "pumpkin.jpg",
    category: "Vegetable",
    product_name: "pumpkin",
    product_description:
      "a large round vegetable with hard yellow or orange flesh ",
    retail_price: 45000,
    measurement: "Kg",
    price_tag: "pumpkin @USh 45,000 /Kg",
  },
  {
    id: 10,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "red-yellow-apples.jpg",
    category: "Fruit",
    product_name: "red yellow apples",
    product_description:
      "a round fruit with firm white flesh and a green, red or yellow skin",
    retail_price: 50000,
    measurement: "Kg",
    price_tag: "red yellow apples @USh 50,000 /Kg",
  },
  {
    id: 11,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "tomatoes.jpg",
    category: "Fruit",
    product_name: "tomatoes",
    product_description:
      "a round red sharp-tasting fruit with a lot of seeds which is eaten cooked or raw as a savoury food ",
    retail_price: 55000,
    measurement: "Kg",
    price_tag: "tomatoes @USh 55,000 /Kg",
  },
  {
    id: 12,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "turkey.jpg",
    category: "Bird",
    product_name: "turkey",
    product_description: "a large bird grown for its meat on farms ",
    retail_price: 60000,
    measurement: "Bird",
    price_tag: "turkey @USh 60,000 /Bird",
  },
  {
    id: 13,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "watermelon.jpg",
    category: "Fruit",
    product_name: "watermelon",
    product_description:
      "a large round or oval-shaped fruit with dark green skin, sweet watery pink flesh and a lot of black seeds ",
    retail_price: 65000,
    measurement: "Kg",
    price_tag: "watermelon @USh 65,000 /Kg",
  },
  {
    id: 14,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "yellow-corn.jpg",
    category: "Vegetable",
    product_name: "yellow corn",
    product_description:
      "the yellow seeds of a particular type of the  maize  plant, which is eaten as a vegetable ",
    retail_price: 70000,
    measurement: "Kg",
    price_tag: "yellow-corn @USh 70,000 /Kg",
  },
  {
    id: 15,
    supplier_id: 2,
    branch_name: "KAMPALA",
    file_name: "zucchini.jpg",
    category: "Vegetable",
    product_name: "zucchini",
    product_description: "a long thin vegetable with a dark green skin. ",
    retail_price: 75000,
    measurement: "Kg",
    price_tag: "zucchini @USh 75,000 /Kg",
  },
];

var rankRetailPrice = function (arr) {
  let result = {};
  arr.forEach((dict) => {
    if (!result[dict.category]) {
      result[dict.category] = [];
    }
    result[dict.category].push({
      category: dict.category,
      product_name: dict.product_name,
      retail_price: dict.retail_price,
    });
  });

  //
  let sortedRetailPrice = [];
  Object.values(result).forEach((arr) => {
    sortedRetailPrice.push(
      arr.sort(function (prop1, prop2) {
        return prop2.retail_price - prop1.retail_price;
      })
    );
  });

  //
  let max = [],
    min = [];
  sortedRetailPrice.forEach((arr) => {
    max.push(arr[0]);
    min.push(arr[arr.length - 1]);
  });

  return [max, min];
};
// invoke the function
console.log(rankRetailPrice(listProducts));

var aggregate = function (arr) {
  let result = {};
  arr.forEach((item) => {
    if (!result[item.category]) {
      result[item.category] = [];
    }
    result[item.category].push(item.product_name);
  });
  return result;
};
// invoke the function
console.log(aggregate(listProducts));
/*
{
    Vegetable: [
      'broccoli & cauliflower',
      'cabbage',
      'eggplant',
      'green bell pepper',
      'onions',
      'pumpkin',
      'yellow corn',
      'zucchini'
    ],
    Bird: [ 'goose', 'guinea fowl', 'turkey' ],
    Fruit: [ 'passion fruits', 'red yellow apples', 'tomatoes', 'watermelon' ]
  } */

var aggregate = function (arr) {
  let result = {};
  arr.forEach((item) => {
    if (!result[item.category]) {
      result[item.category] = [];
    }
    result[item.category].push(item.retail_price);
  });

  // helper function
  function sum(e1, e2) {
    return e1 + e2;
  }
  //
  let res = [];
  Object.entries(result).forEach((item) => {
    res.push({ category: item[0], total_retail_price: item[1].reduce(sum) });
  });

  return res;
};
// invoke the function
console.log(aggregate(listProducts));
/*
[
  { category: 'Vegetable', total_retail_price: 280000 },
  { category: 'Bird', total_retail_price: 110000 },
  { category: 'Fruit', total_retail_price: 210000 }
] */

let listPayments = [
  {
    id: 1,
    label: "Current Asset",
    amount: 1000,
  },
  {
    id: 2,
    label: "Current Liability",
    amount: 2000,
  },
  {
    id: 3,
    label: "Draw Cash",
    amount: 3000,
  },
  {
    id: 4,
    label: "Equity",
    amount: 4000,
  },
  {
    id: 5,
    label: "Expense",
    amount: 5000,
  },
  {
    id: 6,
    label: "Income",
    amount: 6000,
  },
  {
    id: 7,
    label: "Non Current Asset",
    amount: 7000,
  },
  {
    id: 8,
    label: "Non Current Liability",
    amount: 8000,
  },
  {
    id: 9,
    label: "Purchases",
    amount: 9000,
  },
  {
    id: 10,
    label: "Sales",
    amount: 10000,
  },
  {
    id: 11,
    label: "Current Asset",
    amount: 11000,
  },
  {
    id: 12,
    label: "Current Liability",
    amount: 12000,
  },
  {
    id: 13,
    label: "Draw Cash",
    amount: 13000,
  },
  {
    id: 14,
    label: "Equity",
    amount: 14000,
  },
  {
    id: 15,
    label: "Expense",
    amount: 15000,
  },
];

var aggregate = function (arr) {
  let result = [];
  arr.forEach((item) => {
    if (item.label === "Equity") {
      result.push(item.amount);
    }
  });
  return result;
};
// invoke the function
console.log(aggregate(listPayments)); // [ 4000, 14000 ]

var aggregate = function (arr) {
  let debitSum = 0,
    creditSum = 0,
    result = {};

  arr.forEach((item) => {
    if (!result[item.label]) {
      result[item.label] = [];
    }
    result[item.label].push(item.amount);
  });

  // helper function
  function sum(e1, e2) {
    return e1 + e2;
  }
  //
  let res = [];
  Object.entries(result).forEach((item) => {
    res.push({ label: item[0], amount: item[1].reduce(sum) });
    //
    if (
      item[0] === "Current Asset" ||
      item[0] === "Draw Cash" ||
      item[0] === "Expense" ||
      item[0] === "Non Current Asset" ||
      item[0] === "Purchases"
    ) {
      debitSum = debitSum + item[1].reduce(sum);
    } else creditSum = creditSum + item[1].reduce(sum);
    //
  });

  return [res, [{ label: "Net Cash Balance", amount: creditSum - debitSum }]];
};
// invoke the function
console.log(aggregate(listPayments));
