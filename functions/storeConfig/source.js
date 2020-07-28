exports = function(config){
  
    //Accessing application's values:
    //var x = context.values.get("value_name");

    //Accessing a mongodb service:
    var collection = context.services.get("mongodb-atlas").db("finanztopf").collection("userconfigs");
    var doc = collection.insertOne(config);

    //To call other named functions:
    //var result = context.functions.execute("function_name", arg1, arg2);

  return {arg: doc};
};