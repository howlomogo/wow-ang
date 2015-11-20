function statusChangeCallback(response) {
  if (response.status === 'connected') {
    console.log("Logged into your app and Facebook.");
    getUserDetails();
  } else if (response.status === 'not_authorized') {
    console.log("The person is logged into Facebook, but not your app.");
  } else {
    console.log("The person is not logged into Facebook, so we're not sure if, they are logged into this app or not.");
  }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function logoutFacebook() {
  FB.logout(function(response) {
    statusChangeCallback(response);
    setUserScope("","", "");
  });
}

window.fbAsyncInit = function() {
  FB.init({
    appId      : '{your-app-id}',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.2'
  });

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function getUserDetails() {
  FB.api('/me', {fields: ['first_name', 'last_name', 'picture']}, function(response) {
    setUserScope(response.first_name, response.last_name, response.picture.data.url);
  });
}

// Set controller scope from inside function
function setUserScope(firstname, lastname, picture) {
  var mainCtrl = angular.element(document.querySelector( '#mainctrl' ));
  var mainCtrlScope = mainCtrl.scope();
  mainCtrlScope.$apply(function() {
    mainCtrlScope.facebookUser.firstName = firstname;
    mainCtrlScope.facebookUser.lastName = lastname;
    mainCtrlScope.facebookUser.picture = picture;
  });
}