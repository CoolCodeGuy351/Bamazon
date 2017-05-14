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

inquirer.prompt({

    name: "prompt",
    message: "What is the id of the item you would like to purchase?"

  }).then(function(answer) {

  	var query = "SELECT item_id FROM products";

	connection.query(query, function(err, res) {

		//https://www.w3schools.com/sql/sql_update.asp

		for(var i = 0 ; i < res.length ; i++){
			console.log('yo');
		}

	}); // Connection Method Query Ends

  }); // then portion of inquirer prompt ends
}, 1500);

}; // End newQuery function

newQuery();


