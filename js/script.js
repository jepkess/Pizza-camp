function Order(name, size, toppings, crust) {
    this.name = name;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
}
Order.prototype.fullorder = function () {
    return this.this.size + " ," + this.toppings + "," + this.crust;
}