exports = function(){
  var collection = context.services.get("mongodb-atlas").db("finanztopf").collection("categories");
  var docs = collection.find({active: true});
  return docs;
};