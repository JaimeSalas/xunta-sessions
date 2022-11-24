// console.log('Playground for TS');
const city: string = 'Santiago';
const num: number = 3;

const coins: number[] = [1, 2, 0.5];
let words: Array<string> = [];

// [3, {}, new Date()]
// Tuple
const quantity: [number, string] = [5, "chunks"];
// const [, d] = quantity;

enum DayWeek {
    Mon = 0.1,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun,
}

console.log(DayWeek['Fri']);

const u: undefined = undefined;
const n: null = null;
let whatever: any = undefined;
whatever = null;

const getData = () => {};

let data: unknown = getData();
data = 'hello'; 
// (data as string).toLowerCase();
(<string>data).toLowerCase();

// interface Soldier {
//     swordType: string;
// }

// interface Ranger {
//     ammoType: string;
//     totalAmmo: number;
// }

// interface Ninja extends Soldier, Ranger {
//     smokeBombs: number;
// }

// const ninja: Ninja = {

// }

interface User {
    id: number;
    name: string;
}

interface Dog {
    id: number;
    name: string;
}

const peter: User = {
    id: 1,
    name: 'Peter',
};

const laika: Dog = {
    id: 2,
    name: 'laika'
};

function printUserName(user: User): void {
    console.log(user.name);
}

printUserName(laika);

// const shout = (text: string, upperCase: boolean): string => {
//     return (upperCase) ? (text.toUpperCase() + '!!!') : text;
// }

type ShoutFunction = (text: string, upperCase: boolean) => string;

const shout: ShoutFunction = (text, upperCase) => (
    (upperCase) ? (text.toUpperCase() + '!!!') : text
); 

function head<T>(list: T[]): T {
    return list[0];
}

const headArrow = <T>(list: T[]): T => list[0];

const r = headArrow<string>(['hola', 'adios']);
console.log(r);

const w = head([1, 2, 3, false, 's', { name: ''}]);
// const s = head({});

interface State<T> {
    value: T[];
}



