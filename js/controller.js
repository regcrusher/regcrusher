var controllers = {};


/*
	regcrusher.com Home Page controller
	- Assigns a CSS class to the ng-view element
	- Loads project data (projects.json into a projects object)
 */
controllers.homeController =
	function($scope, $location, $http, $animate, parallaxHelper) {
		$scope.pageClass = 'page-home';
		$scope.projects = [];

		$scope.init = function() {
			$http.get('projects.json')
				.then(function(resp) {
					$scope.projects = resp.data.projects;
				});
		};

		$scope.init();
};

// Inject these services (used to keep them intact for minification)
controllers.homeController.$inject = ['$scope', '$location', '$http', '$animate', 'parallaxHelper'];



/*
	regcrusher.com Project controller 
 */
controllers.projectController =
	function($scope, $location, $http, $routeParams, parallaxHelper) {
		$scope.speed1 = parallaxHelper.createAnimator(-0.5);
		
		// Add CSS class to ng-view
		$scope.pageClass = 'page-project';

		// Define a key for the scope using the current URL parameter
		$scope.key = $routeParams.key;
		$scope.project = {};

		$scope.htmlfile = '';

		// Retrieve element from projects.json that has the same key as defined
		// in the URL
		$scope.init = function() {
			$http.get('projects.json')
				.then(function(resp) {
					$scope.project = _.findWhere(resp.data.projects, {
						key: $scope.key
					});

					// Grab the HTML file name to dynamically load
					$scope.htmlfile = $scope.project.html;
				});
		};

		$scope.init();

		$scope.getPartial = function() {
			var file = '/partials/project/' + $scope.htmlfile + '?v=2';
			return file;
		};

		// Returns a bool. Determines if link to external site is shown.
		// (Not all projects have links to external sites)
		$scope.urlExists = function() {
			return ($scope.project.url !== "");
		};
};
// Inject these services (used to keep them intact for minification)
controllers.projectController.$inject = ['$scope', '$location', '$http', '$routeParams', 'parallaxHelper'];

regcrusherApp.controller('homeController', controllers.homeController);
regcrusherApp.controller('projectController', controllers.projectController);