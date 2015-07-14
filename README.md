# Meanie - Angular Geo Location

[![npm version](https://img.shields.io/npm/v/meanie-angular-geo-locate.svg)](https://www.npmjs.com/package/meanie-angular-geo-locate)
[![node dependencies](https://david-dm.org/meanie/angular-geo-locate.svg)](https://david-dm.org/meanie/angular-geo-locate)
[![github issues](https://img.shields.io/github/issues/meanie/angular-geo-locate.svg)](https://github.com/meanie/angular-geo-locate/issues)
[![codacy](https://img.shields.io/codacy/23f91e13265b412b9e8926609b839992.svg)](https://www.codacy.com/app/meanie/angular-geo-locate)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A geolocation service for Angular for [Meanie](https://github.com/meanie/meanie) projects.

## Installation
Install using the [Meanie CLI](https://www.npmjs.com/package/meanie):
```shell
meanie install angular-geo-locate
```

## Usage
Include the service as a dependency and inject it into your modules:
```js
angular.module('App.MyModule', [
  'Utility.GeoLocate.Service'
]).controller('MyController', function($geoLocate) {
  //Use the $geoLocate service
})
```
Use it in your modules:
```js
$geoLocate().then(function(position) {
  //Position obtained
}, function(reason) {
  //Geolocation failed due to reason
});
```

## Issues & feature requests
Please report any bugs, issues, suggestions and feature requests in the appropriate issue tracker:
* [Module issue tracker](https://github.com/meanie/angular-geo-locate/issues)
* [Meanie Boilerplate issue tracker](https://github.com/meanie/boilerplate/issues)
* [Meanie CLI issue tracker](https://github.com/meanie/meanie/issues)

## Contributing
If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License
(MIT License)

Copyright 2015, [Adam Buczynski](http://adambuczynski.com)
