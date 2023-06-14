export default {
    input: document.querySelector('#input'),
    updateCounter: function(counter) {
        this.input.value = counter;
    }
}