var regcrusherApp = angular.module('regcrusherApp', ['ngRoute', 'ngAnimate', 'duScroll', 'duParallax', 'ngSanitize', 'angulartics', 'angulartics.google.analytics']);


/**
 * Route provider for regcrusher.com
 *
 * 
 * */
regcrusherApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/home', {
			controller: 'homeController',
			templateUrl: 'templates/home.html',
		}).
		when('/project/:key', {
			controller: 'projectController',
			templateUrl: 'templates/project.html'
		}).
		otherwise({
			redirectTo: '/home'
		});

	}
]);


/**
 * Angular fade directive for text effects on Project pages using
 * CSS3 transforms.
 * This is bound to the scroll event.
 */
regcrusherApp.directive("fade", ["$window", function($window) {
	return function(scope, element, attrs) {
		angular.element($window).bind("scroll", function() {
			var distance = 200;
			var top = $(element).offset().top;
			var ratio = 0.6;

			if (this.pageYOffset < distance) {
				var offset = (this.pageYOffset * ratio);
				var opacity = (distance - this.pageYOffset) / distance;
				
				element.css('opacity', opacity);
				element.css('transform', 'translateY(' + offset + 'px)');

			}

		});

	};
}]);