exports = function({ token, tokenId, username }){
  if (username.indexOf('@merzlabs.com') > 0) {
    return {status: 'pending'}
  } else {
    return {status: 'fail'}
  }
};