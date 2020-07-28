exports = function(id){
  var collection = context.services.get("mongodb-atlas").db("finanztopf").collection("userconfigs");
  var doc = collection.findOne({owner: id});
  return doc;
};