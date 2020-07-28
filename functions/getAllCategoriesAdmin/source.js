exports = function(){
  const activeUser = context.user;
  try {
    if (activeUser.identities[0]?.data?.email?.indexOf("@merzlabs.com")) {
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