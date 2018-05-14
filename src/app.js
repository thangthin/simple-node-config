// required for source map
import { install } from 'source-map-support';
install();
import 'babel-polyfill';

console.log([3,2,3].map(x => x * x));
// testing class
// import Rectangle from './rectangle';
import { Rectangle } from './rectanglePrototype';

let square = new Rectangle();
console.log(square.area);
console.log(square.calcArea());
console.log(Rectangle.getName());
// throw new Error('Test!'); // line 8