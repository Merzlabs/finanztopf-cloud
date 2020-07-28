exports = function(id){
  var collection = context.services.get("mongodb-atlas").db("finanztopf").collection("categories");
  var doc = collection.findOne({id: id, active: true});
  return doc;
};