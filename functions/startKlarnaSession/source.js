exports = function(){
  const ip = context.request.remoteIPAddress;
  const userAgent = context.request.httpUserAgent;
  const headers = {"Authorization": `Bearer ${context.values.get("KLARNA_TOKEN")}`}

  const response = await context.http.put({
    url: "https://api.playground.openbanking.klarna.com/xs2a/v1/sessions",
    body: { psu: {ip_address: ip, user_agent: userAgent} },
    encodeBodyAsJSON: true,
    headers: headers
  })
  // The response body is a BSON.Binary object. Parse it and return.
  return EJSON.parse(response.body.text());
};