/**
 * meanie-angular-geo-locate - v1.0.1 - 4-10-2015
 * https://github.com/meanie/angular-geo-locate
 *
 * Copyright (c) 2015 Adam Buczynski <me@adambuczynski.com>
 * License: MIT
 */
(function(window, angular, undefined) {'use strict';

/**
 * Module definition and dependencies
 */
angular.module('GeoLocate.Service', [])

/**
 * Service definition
 */
.factory('$geoLocate', ['$q', '$window', '$location', '$rootScope', function($q, $window, $location, $rootScope) {
  return function geoLocate(options) {
    var reason;

    //Check if available
    if (!$window.navigator.geolocation) {
      reason = 'unsupportedBrowser';
    }

    //Check if on https (see https://goo.gl/rStTGz)
    else if ($location.protocol() === 'http') {
      reason = 'deprecatedOnHttp';
    }

    //If error reason present, reject
    if (reason) {
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
      $rootScope.$broadcast('geoLocation.error', reason);
      $rootScope.$apply(function() {
        deferred.reject(reason);
      });
    }, options);

    //Return promise
    return deferred.promise;
  };
}]);

})(window, window.angular);
