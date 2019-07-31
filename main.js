const providerInfo = OIDC.discover('https://app.simplelogin.io');

OIDC.setProviderInfo(providerInfo);

// OAuth2 client info. Please replace "client-id" here by your SimpleLogin OAuth2 client-id
const clientInfo = {
  client_id: 'client-id',
  redirect_uri: location.href
};
OIDC.storeInfo(providerInfo, clientInfo);

OIDC.setClientInfo(clientInfo);

// Restore configuration information.
OIDC.restoreInfo();

// Get Access Token
let token = OIDC.getAccessToken();

// Make userinfo request using access_token.
if (token !== null) {
  getUserData(token);
}

// Make an authorization request if the user click the login button.
function login() {
  OIDC.login({
    scope: 'openid profile email',
    response_type: 'id_token token'
  });
}


function getUserData(token) {
  fetch('https://app.simplelogin.io/oauth2/userinfo/?access_token=' + token)
    .then(response => response.json())
    .then(res => {
      alert(JSON.stringify(res));

      // clear all params in url
      location.href = "/";
    })
}