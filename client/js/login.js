function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    // $('')
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log('Token: ' + googleUser.getAuthResponse().id_token);
    localStorage.setItem('token' , googleUser.getAuthResponse().id_token)
    // WhenUserHasLogin()
    AddToDB(googleUser.getAuthResponse().id_token)
}

function AddToDB(token){
  event.preventDefault();
  $.ajax({
    url: 'http://localhost:3000/user/login',
    method: 'POST',
    data: {
      id_token : token,
    },
  })
  .done(function(token1) {
    // con
    localStorage.setItem('token' , token1.token)
    console.log(token1.token , ' ini token dia')
    WhenUserHasLogin()

  })
  .fail(function(jqXHR, textStatus) {
    console.log('Error:', textStatus);
  });
}