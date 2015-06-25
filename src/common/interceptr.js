function trello_token_received(){
	Trello.authorize(
  {
    name: "Interceptr",
    expiration: "never",
    interactive: false,
    scope: {read: true, write: true},
    success: function () {
    	chrome.extension.sendMessage({
          command: 'saveToken',
          token: localStorage.getItem('trello_token')
      }, function(data) {
          chrome.tabs.getCurrent(function (tab) {
              chrome.tabs.remove(tab.id)
          });
      });
    },
    error: function () {
        alert("Failed to authorize with Trello.")
    }
  });
}

function getUserProfileId(){

	return 'tapanchandra';
}