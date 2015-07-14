
/**
 * Module definition and dependencies
 */
angular.module('Utility.GeoLocate.Service', [])

/**
 * Service definition
 */
.factory('$geoLocate', function($q, $window, $rootScope) {
  return function geoLocate(options) {

    //Check if available
    if (!$window.navigator.geolocation) {
      var reason = 'unsupportedBrowser';
      $rootScope.$broadcast('geoLocation.error', reason);
      return $q.reject(reason);
    }

    //Create deferred
    var deferred = $q.defer();

    //Geolocate
    $window.navigator.geolocation.getCurrentPosition(function(position) {

      //Broadcast position and resolve promise
      $rootScope.$broadcast('geoLocation.position', position);
      $rootScope.$apply(function() {
        deferred.resolve(position);
      });
    }, function(error) {

      //Determine reason
      var reason;
      switch (error.code) {
        case 1:
          reason = 'permissionDenied';
          break;
        case 2:
          reason = 'positionUnavailable';
          break;
        case 3:
          reason = 'timeout';
          break;
      }

      //Broadcast error and reject promise
      $rootScope.$broadcast('geoLocation.error', reason, error);
      $rootScope.$apply(function() {
        deferred.reject(reason);
      });
    }, options);

    //Return promise
    return deferred.promise;
  };
});
