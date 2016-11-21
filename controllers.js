//CONTROLLER	
spotifySearch.controller('searchController', ['$scope', 'spotifySearchService', '$resource',  function($scope, spotifySearchService, $resource){

	$scope.TopListArr = [];
	$scope.TopListObj = {};
	//$scope.SpecifySearch;


   $scope.radioSelect = function (value) {
        alert(value);
     }


	$scope.submit = function(){

		//Test API
		//$scope.GetSpotifyAPI = $resource('https://api.spotify.com/v1/search',{get:{method:"JSON"}});	
	    //$scope.SpotifyArtistResults = $scope.GetSpotifyAPI.get({q:$scope.searchArtist,type:'track'});
        //console.log($scope.SpotifyArtistResults);

   $scope.SpotifyArtistResults = spotifySearchService.GetSpotifyResults($scope.searchArtist)


	};		


	$scope.addFavorite = function(result){

	  // console.log(result);
	   $scope.TopListObj = {
				name: "",
				image: "",
				genres: "",
				followers:  "",
				popularity: ""
		};
	
	   $scope.TopListObj.name = result.name;
	   $scope.TopListObj.image = result.images[0].url; 
	   $scope.TopListObj.genres = result.genres;
	   $scope.TopListObj.followers = result.followers.total;
	   $scope.TopListObj.popularity = result.popularity;
       
       $scope.TopListArr.push($scope.TopListObj);

       console.log(JSON.stringify($scope.TopListArr));
	}


      $scope.TopListResults = $scope.TopListArr;


}]);