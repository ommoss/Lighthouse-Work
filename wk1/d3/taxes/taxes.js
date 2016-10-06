var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates){

 for(var i =0; i < salesData.length; i++) {

    salesData[i]["salesPerCompany"] = 0;

    salesData[i]["totalTax"] = 0;

   for(var sales of salesData[i]["sales"]) {
     salesData[i].salesPerCompany += sales;
   }
   salesData[i].totalTax = salesData[i].salesPerCompany * taxRates[salesData[i]['province']];

 }
}

function calBird(companySalesData){
  var obj = {
  };
  for(i = 0; i < companySalesData.length; i++){

    var x = companySalesData[i].name;
    var y = companySalesData[i].salesPerCompany;
    var z = companySalesData[i].totalTax;

    //console.log(x,y,z);
    if(!obj[x]){
      obj[x] = {};
      obj[x]["sales"] = y;
      obj[x]["totalTax"] = z;
    }else{
      obj[x].sales += y;
      obj[x].totalTax += z;
      }
    }
  return obj;
}

//var results = salesTaxReport(companySalesData, salesTaxRates);
//console.log(salesTaxRates.AB);
//console.log(companySalesData[0].salesPerCompany);
//console.log(companySalesData[0].totalTax);
calculateSalesTax(companySalesData, salesTaxRates);
console.log(calBird(companySalesData));