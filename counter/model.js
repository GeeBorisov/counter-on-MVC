export default {
    counter: 0,
    increase: function() {
        this.counter = this.counter + 1;
        // this.counter += 1;
        // ++this.counter;
    },
    decrease: function() {
        this.counter = this.counter - 1;
        // this.counter -= 1;
        // --this.counter;
    },
    reset: function() {
        this.counter = 0
    },
}