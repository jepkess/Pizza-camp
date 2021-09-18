function Order(name, size, toppings, crust) {
    this.name = name;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
}
Order.prototype.fullorder = function () {
    return this.this.size + " ," + this.toppings + "," + this.crust;
}


$(document).ready(function () {
    $("form#myform").submit(function(event) {
        event.preventDefault();

        var inputtedname = $("input#new-name").val();
        var inputtedsize = $("input#new-size").val();
        var inputtedtopping = $("input#new-topping").val();
        var inputtedcrust = $("input#new-crust").val();


    }
})