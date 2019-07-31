This is an example of a website that implements SimpleLogin using [OpenIDConnect.js](https://nat.sakimura.org/2014/12/10/making-a-javascript-openid-connect-client/). 

The small library is created by [Nat Sakimura](https://nat.sakimura.org), OpenID foundation chairman. 
The article about this library is on 
https://nat.sakimura.org/2014/12/10/making-a-javascript-openid-connect-client/ 

The code is deployed on https://simplelogin-openidconnect-example.nguyenkims.now.sh, feel free to check it out 🙂.

Upon successful login, you will see a popup (`alert`) containing the information that the website receives 
when you sign in with SimpleLogin.

This website can be served via any static server, for example with `http.server` python module:

> python3 -m http.server

It works immediately with SimpleLogin as SimpleLogin whitelists localhost to facilitate development.

