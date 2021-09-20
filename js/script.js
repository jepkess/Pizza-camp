function Order(name, size, toppings, crust) {
    this.name = name;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
}
Order.prototype.fullorder = function () {
    return this.size + " ," + this.toppings + "," + this.crust;
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


// var inputtedsize = document.getElementById("inputtedsize").value;
// console.log("inputtedsize")

$(document).ready(function () {
    $("form#myform").submit(function (event) {
        event.preventDefault();

        var inputtedname = $("input#name").val();
        var inputtedsize = $("#size").find(":selected").val();
        var inputtedtopping = $("#topping").val();
        var inputtedcrust = $("#crust").val();

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

        if (inputtedtopping == "green peppers") {
            toppingprice = 200;
        } else if (inputtedtopping == "spinach") {
            toppingprice = 150;

        } else if (inputtedtopping == "pineapple") {
            toppingprice = 100;
        }
        // crustprice logic conditions
        if (inputtedcrust == "cheese-Stuffed Crust") {
            crustprice = 150;
        } else if (inputtedcrust == "flatbread") {
            crustprice = 100;

        } else if (inputtedcrust == "sicilian Style") {
            crustprice = 50;
        }

        const total = sizeprice + toppingprice + crustprice;
        console.log(total)



        $("ol#fullorder").append("<li><span class='orderlist'>" + fullorder.fullorder() + "</span>" + "<span id='price'> -(" + sizeprice + "+" + toppingprice + "+" + crustprice + ")=" + total + "/=</span></li>");
        var totalcost = 0;
        var totalcost = totalcost + total;

        var inputtedlocation = $("#location").val();
        console.log(inputtedlocation)
        

  
        $("#totalcost").append(totalcost);
        $("#somename").append(inputtedname);
        $("#location").append(inputtedlocation);
        $(".name").show();
        $("#name").append(inputtedname).val("");
        $("form#myform").slideUp();
        $(".cart").show();
        $("#complete").on("click", function () {
            $("#successtext").show();
             $("#location").append(inputtedlocation).val();
             $("#location").show();
            $("#sname").append(inputtedname).val();

        })

    });
});