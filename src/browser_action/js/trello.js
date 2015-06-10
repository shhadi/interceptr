
//Trello Logout functionality
// $("#trello_logout").click(function () {
//     Trello.deauthorize();
//     location.reload();
// });


$('#trello_connect_btn').click(function(){

	//Authorize
	Trello.setKey(APP_KEY);
  Trello.authorize(
      {
          name: "Trello Helper Extension",
          type: "redirect",
          expiration: "never",
          interactive: true,
          scope: {read: true, write: false},
          success: function () {
              // Can't do nothing, we've left the page
          },
          error: function () {
              alert("Failed to authorize with Trello.")
          }
      });

});