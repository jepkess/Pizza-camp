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
    $("#makeorderbtn").on("click", function () {
        $("form#myform").slideDown();
        $(this).text("Make another order");
        $("#checkoutbtn").show();
    })
    $("#cancel").on("click", function () {
        $("form#myform").slideUp();

    })
    $("#check").on("click", function () {
        $(".cart").show();
        $("form#myform").hide();



    })


});


$(document).ready(function () {
$("form#myform").submit(function (event) {
    event.preventDefault();

    var inputtedname = $("input#name").val();
    var inputtedsize = $("input#size").val();
    var inputtedtopping = $("input#topping").val();
    var inputtedcrust = $("input#crust").val();

    var fullorder = new Order(inputtedsize, inputtedtopping, inputtedcrust)




    var sizeprice, toppingprice, crustprice = 0;
    // sizeprice logic conditions
    if (inputtedsize == "large") {
        sizeprice = 2500;
    } else if (inputtedsize == "medium") {
        sizeprice = 1000;
    } else if (inputtedsize == "small") {
        sizeprice = 500;
    }
    // toppingprice logic conditions

    if (inputtedtopping == "large") {
        sizeprice = 200;
    } else if (inputtedtopping == "medium") {
        sizeprice = 150;

    } else if (inputtedtopping == "small") {
        sizeprice = 100;
    }
    // crustprice logic conditions
    if (inputtedcrust == "large") {
        sizeprice = 150;
    } else if (inputtedcrust == "medium") {
        sizeprice = 100;

    } else if (inputtedcrust == "small") {
        sizeprice = 50;
    }

    const total = sizeprice + toppingprice + crustprice;


    $("ol#fullorder").append("<li><span class='orderlist'>" + fullorder.fullorder() + "</span>" + "<span id='price'> -(" + sizeprice + "+" + toppingprice + "+" + crustprice + ")=" + total + "/=</span></li>");
    var totalcost = 0;
    var totalcost = totalcost + total;

    $("#totalcost").append(totalcost);
    $("#somename").append(inputtedname);
    // $("#place").append(inputtedlocation);
    $(".name").hide();
    $("#name").append(inputtedname).val("");
});






});