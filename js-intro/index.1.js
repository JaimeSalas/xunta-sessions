// function foo() {
//     // const let
//     var a = 3; 

//     for (var index = 0; index < array.length; index++) {
//         const element = array[index];
//     }
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
//     if (i < 4) {
//         const t = 'foo';
//     }

//     const t = 5;
// }

// foo();

// const, let

// == ===

// class - Prototype Pattern - React + funcional -> Hooks

// JS
// function m(c) {
//     c();
// }

// // var self = this;
// [].map((s) => { this })

// const person = {
//     name: '',
//     showName1: function() {
//         console.log(this);
//         console.log(this.name);
//     },
//     showName2: () => {
//         console.log(this);
//         console.log(this.name);
//     }
// }; // new Obj + ptr
// person.name = 'Jai';
// person.showName1();
// person.showName2();

// const tOld = function t() {
//     return 5;
// };
// const t = () => 5;

// clousure

const getDate = () => {
    const date = new Date();
    // console.log(pepe);
    
    return () => {
        // const pepe = 'pepe';
        // console.log(date);
        return date;
    };
};

const doGetDate1 = getDate();

setTimeout(() => {
    console.log(getDate()(), doGetDate1());
}, 2_000);

const t = () => () => {}; // currying
// func (x, y) -> (x)(y), (x, y)
// func (x, y, z) -> (x)(y)(z), (x)(y, z), (x, y)(z)
// composition - Free point style programming - reduce
// Redux - recompose
// console.log(doGetDate());
