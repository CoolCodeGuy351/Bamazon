var mysql = require('mysql');
var inquirer = require('inquirer');
var columnify = require('columnify');
//https://www.npmjs.com/package/columnify

////////////////////////////////// CONNECT TO DATABASE//////////////////////////////////////////////////////////

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Solarstar99*",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

function newQuery(){

console.log("\n");
console.log("\n");
console.log("******************************************************************************************************");
console.log("******************************************************************************************************");

var query = "SELECT * FROM products";

connection.query(query, function(err, res) {

for(var i = 0 ; i < res.length ; i++){
if(i === 0){

	var columns = columnify([
		{
		  id: res[i].item_id,
		  name: res[i].product_name,
		  price: res[i].price,
		  department: res[i].department_name,
		  quantity_remaining: res[i].stock_quantity,
		}],
		{
		  minWidth: 20,
		  config: {
		    description: {maxWidth: 30}
		  }
		}
		); // End Comlumnify

console.log(columns);

} else {

	var columns = columnify([
		{
		  id: res[i].item_id,
		  name: res[i].product_name,
		  price: res[i].price,
		  department: res[i].department_name,
		  quantity_remaining: res[i].stock_quantity,
		}],
		{
		  minWidth: 20,
		  showHeaders: false,
		  config: {
		    description: {maxWidth: 30},
		  }
		}
		); // End Comlumnify

	console.log("\n");
	console.log(columns);

} // End Else Statement

}; // End For Loop

console.log("******************************************************************************************************");
console.log("******************************************************************************************************");
console.log("\n");
console.log("\n");

}); // End Query

setTimeout(function(){

var query = "SELECT * FROM products";

connection.query(query, function(err, res) {

	var itemHolder;

		inquirer.prompt([{
		    name: "item",
		    type: "input",
		    message: "Select your item by inputing the products unique identification number (id):",
		    validate: function(value) {
		      if (isNaN(value) === false) {
		      	for(var i = 0 ; i < res.length ; i++){
		      		if(res[i].item_id === parseInt(value)){
		      			itemHolder = res[i];
		      			console.log("\nThere are " + res[i].stock_quantity + " " + res[i].product_name + " left in stock" );
		      			return true;
		      		} else{ 
		      			console.log("\nThats not one of our availible items. Please choose again");
		      			return false;
		      		}
		      	}
		      	
		      }
		      	console.log("\nThats not a number, try again")
		     	return false;	
		    }
		  },{
		    name: "quant",
		    type: "input",
		    message: "How many would you like to purchase?",
		    validate: function(amount) {
		      if (isNaN(amount) === false){

		      	if(amount > itemHolder.stock_quantity){
		      		console.log("\nSorry we dont have that many of that item in stock right now, try ordering less.");
		      		return false;
		      	}

		      	var total = itemHolder.price * amount;
		      	var itemLeft = itemHolder.stock_quantity - amount;
		      	connection.query("UPDATE products SET ? WHERE ?", [
		      	{
		      		"stock_quantity": parseInt(itemHolder.stock_quantity) - parseInt(amount)
                },
                {  "item_id": itemHolder.item_id
            	}],function(err, res) {
                    console.log("Your purchase has been completed. The total was $"+ total + " and there are " + itemLeft + " left!")

                });

		        return true;
		    }
		      console.log("\nThats not a number, try again");
		      return false;
		    }
		  }]).then(function(answer) {

		 	
		  		setTimeout(function(){newQuery()}, 1500);


		  }); // then portion of inquirer prompt ends

}); // Connection Method Query Ends

}, 1500);

}; // End newQuery function

newQuery();


