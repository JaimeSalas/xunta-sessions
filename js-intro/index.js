// const message = `${Date.now()}`;

// const text = `
// Hola mundo,cruel
//     ¿o no?
// `;

// const array = [1, { name: 'foo' }, 3];
// const array = [1, 2, 3];
// const copy = [...array];

// console.log(text);
// TEMPLATE FUNCTIONS
const data = {
    description: 'phone device',
    image: '/assets/device.jpg',
    price: 100
};

// ({}, 'hola', 'adios') => { [] }  - Rest operator "..."
const createTemplate = (chunks, ...properties) => (data) => {
    console.log(chunks, properties);
    const replaced = [...chunks];
    properties.forEach((prop, index) => {
        replaced[index] += data[prop];
    });

    return replaced.join(''); // ['hola', 'adios'].join('') -> holaadios
};

const articleTemplate = createTemplate`
<article>
    <h2>${"description"}</h2>
    <img src="${"image"}">
    <span>${"price"} €</span>
</article>
`;

// articleTemplate([], description, image, price)
// articleTemplate([], [description, image, price])

const article = articleTemplate(data);
console.log(article);