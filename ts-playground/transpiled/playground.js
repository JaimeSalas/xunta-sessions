// console.log('Playground for TS');
var city = 'Santiago';
var num = 3;
var coins = [1, 2, 0.5];
var words = [];
// [3, {}, new Date()]
// Tuple
var quantity = [5, "chunks"];
// const [, d] = quantity;
var DayWeek;
(function (DayWeek) {
    DayWeek[DayWeek["Mon"] = 0.1] = "Mon";
    DayWeek[DayWeek["Tue"] = 1.1] = "Tue";
    DayWeek[DayWeek["Wed"] = 2.1] = "Wed";
    DayWeek[DayWeek["Thu"] = 3.1] = "Thu";
    DayWeek[DayWeek["Fri"] = 4.1] = "Fri";
    DayWeek[DayWeek["Sat"] = 5.1] = "Sat";
    DayWeek[DayWeek["Sun"] = 6.1] = "Sun";
})(DayWeek || (DayWeek = {}));
console.log(DayWeek['Fri']);
var u = undefined;
var n = null;
var whatever = undefined;
whatever = null;
var getData = function () { };
var data = getData();
data = 'hello';
// (data as string).toLowerCase();
data.toLowerCase();
var peter = {
    id: 1,
    name: 'Peter',
};
var laika = {
    id: 2,
    name: 'laika'
};
function printUserName(user) {
    console.log(user.name);
}
printUserName(laika);
var shout = function (text, upperCase) { return ((upperCase) ? (text.toUpperCase() + '!!!') : text); };
function head(list) {
    return list[0];
}
var headArrow = function (list) { return list[0]; };
var r = headArrow(['hola', 'adios']);
console.log(r);
var w = head([1, 2, 3, false, 's', { name: '' }]);
