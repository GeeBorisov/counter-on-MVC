import model from './model.js';
import view from './view.js';

let btnMinus = document.querySelector('#btnMinus');
let btnReset = document.querySelector('#btnReset');
let btnPlus = document.querySelector('#btnPlus');

view.updateCounter(model.counter);

btnPlus.addEventListener('click', function() {
    model.increase();
    view.updateCounter(model.counter);
});
btnMinus.addEventListener('click', function() {
    model.decrease();
    view.updateCounter(model.counter);
});
btnReset.addEventListener('click', function() {
    model.reset();
    view.updateCounter(model.counter);
});