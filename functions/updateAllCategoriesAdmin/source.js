exports = function(docs){
  const activeUser = context.user;

  try {
    if (activeUser.data.email && activeUser.data.email.indexOf("@merzlabs.com") > 0) {
      var collection = context.services.get("mongodb-atlas").db("finanztopf").collection("categories");
      
      for(let i = 0; i < docs.length; i++) {
        const doc = docs[i];
        delete doc._id;
        collection.updateOne({id: doc.id}, {"$set": doc});
      }

      return "Done";
    } else {
      throw Error("This user is not allowed to execute the system function")
    }
  } catch(e) {
    throw e;
  }
};