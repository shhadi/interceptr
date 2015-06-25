var settings = new Store("settings", {
	"sample_setting": "This is how you use Store.js to remember values"
});

chrome.extension.onMessage.addListener(
	function (request, sender, sendResponse) {
	    chrome.pageAction.show(sender.tab.id);

	    //Auto - Setting should be when browser_action is loaded
	  //   if (!request.command && !localStorage.getItem('trello_token')) {
			//     chrome.tabs.create({url: chrome.extension.getURL('src/settings/index.html')});
			//     sendResponse();
			//     return true;
			// }

	    // Now we have a token saved locally, as fetched from the settings page after authorization.
	    if (request.command == 'saveToken') {
	        localStorage.setItem('trello_token', request.token);
	        sendResponse();
	        return true;
	    }

});

// console.log(settings);

var callback = function(details){
	console.log('test');
	console.log(details);
	console.log(details.data);
	console.log(details.status);
}
var filter = {urls: ["<all_urls>"],types:["main_frame"]};
var opt_extraInfoSpec = [];

chrome.webRequest.onResponseStarted.addListener(callback,filter,opt_extraInfoSpec);



//example of using a message handler from the inject scripts
// chrome.extension.onMessage.addListener(
//   function(request, sender, sendResponse) {
//   	chrome.pageAction.show(sender.tab.id);
//     sendResponse();
//   });