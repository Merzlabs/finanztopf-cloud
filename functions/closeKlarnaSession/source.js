exports = async function(url){
  const headers = {"Authorization": [`Bearer ${context.values.get("KLARNA_TOKEN")}`]}

  const response = await context.http.delete({
    url: url,
    encodeBodyAsJSON: true,
    headers: headers
  })
  // The response body is a BSON.Binary object. Parse it and return.
  return EJSON.parse(response.body.text());
};