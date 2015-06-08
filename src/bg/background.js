var settings = new Store("settings", {
	"sample_setting": "This is how you use Store.js to remember values"
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