exports = function(){
  const activeUser = context.user;

  try {
    if (activeUser.data.email && activeUser.data.email.indexOf("@merzlabs.com") > 0) {
      var collection = context.services.get("mongodb-atlas").db("finanztopf").collection("categories");
      var docs = collection.find({});
      return docs;
    } else {
      return null;
    }
  } catch(e) {
    return null;
  }
};