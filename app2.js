const products = [
        { name: 'mobile', price: 255 },
        { name: 'mobile', price: 50 },
        { name: 'laptop', price: 25 },
        { name: 'PC', price: 20 },
        { name: 'charger', price: 10 },
        { name: 'CD', price: 10 },
        { name: 'RAM', price: 10 },
        { name: 'Cooling Fan', price: 10 },
];
// console.log(products[4].name);
// const girl = {
//         name: 'zinia',
//         dresscolor: 'black'
// }

const searchItem = products.filter(product => product.name === 'mobile');
// console.log(searchItem);

const findItem = products.find(product => product.name === 'mobile');
// console.log(findItem);

