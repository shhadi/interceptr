$( document ).ready(function(){

	var defaults = {
    "color": "blue"    
	};
	var settings = new Store("settings",defaults);

	init();
});



function init(){
	//Check if it has a hash code
	if(HashSearch.keyExists('token')) {
		trello_token_received();
	}
	
	if (localStorage.trello_token){
      $( '#trello_connect_btn span.header-btn-text' ).text('Connected');
      $( '#trello_connect_btn span.header-btn-text' ).off( "click", "**" );

      $('a#trello_settings').attr('href','https://trello.com/' + getUserProfileId() + '/account')

      $('#disconnect').show();
  } else {  	
  	$( '#trello_connect_btn span.header-btn-text' ).text('Connect to trello');
  	$('#disconnect').hide();
  }
}


$('#revoke_access').click(function(){
	Trello.deauthorize();
	window.location.reload();
});


$('#tab-container div').click(function(){

	//Handle css styling
	$( this ).siblings().removeClass( "active" );
	$( this ).addClass( "active" );

	//Show the applicable div while hiding rest
	$('#content div').removeClass( "show" );
	var index = $( this ).index();
	$('#content div:eq( ' + index + ' )').addClass( "show" );
});

$( '#trello_connect_btn' ).click(function(){

	Trello.setKey(APP_KEY);

  Trello.authorize(
  {
      name: "Interceptr",
      type: "redirect",
      expiration: "never",
      interactive: true,
      scope: {read: true, write: true},
      success: function () {
          // Can't do nothing, we've left the page
      },
      error: function () {
          alert("Failed to authorize with Trello.")
      }
  });
	
	//The image button does not restore to inactive state
	$( this ).blur();
});