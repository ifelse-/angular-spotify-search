//ROUTES	
spotifySearch.config(function ($routeProvider) {
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'searchController'
    })
    
    .when('/searchResults', {
        templateUrl: 'partials/searchResults.html',
        controller: 'searchController'
    })
	
});