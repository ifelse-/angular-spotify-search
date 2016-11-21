//SERVICES	
spotifySearch.service('spotifySearchService', ['$resource', function($resource){

	this.GetSpotifyResults = function(artistName){
		var spotifyAPI = $resource('https://api.spotify.com/v1/search',{get:{method:"JSON"}});
		return spotifyAPI.get({q:artistName,type: 'artist'});
	}

}]);
