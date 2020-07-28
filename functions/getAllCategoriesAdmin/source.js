exports = function(){
  const activeUser = context.user;

  const ids = activeUser.identities[0];
  try {
    if (ids && ids.data.email.indexOf("@merzlabs.com")) {
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