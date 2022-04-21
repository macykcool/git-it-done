var getUserRepos = function(user) {
  //fromat the github api url
  var apiUrl = "https://api.github.com/users/" + user + "/repos";

  //make a get req to url
    fetch(apiUrl).then(function(response) {
      console.log(response);
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };


  
getUserRepos ("macykcool");

