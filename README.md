# meanie-angular-geo-locate

[![npm version](https://img.shields.io/npm/v/meanie-angular-geo-locate.svg)](https://www.npmjs.com/package/meanie-angular-geo-locate)
[![node dependencies](https://david-dm.org/meanie/angular-geo-locate.svg)](https://david-dm.org/meanie/angular-geo-locate)
[![github issues](https://img.shields.io/github/issues/meanie/angular-geo-locate.svg)](https://github.com/meanie/angular-geo-locate/issues)
[![codacy](https://img.shields.io/codacy/23f91e13265b412b9e8926609b839992.svg)](https://www.codacy.com/app/meanie/angular-geo-locate)
[![Join the chat at https://gitter.im/meanie/meanie](https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg)](https://gitter.im/meanie/meanie?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

AngularJS module for geolocation

## Installation

You can install this package using `meanie`, `npm` or `bower`.

### meanie

```shell
meanie install angular-geo-locate
```

Then add `GeoLocate.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['GeoLocate.Service']);
```

### npm

```shell
npm install meanie-angular-geo-locate
```

Then add as a dependency for your app:

```js
angular.module('App.MyModule', [require('meanie-angular-geo-locate')]);
```

### bower

```shell
bower install meanie-angular-geo-locate
```

Add a `<script>` to your `index.html`:

```html
<script src="/bower_components/meanie-angular-geo-locate/release/meanie-angular-geo-locate.js"></script>
```

Then add `GeoLocate.Service` as a dependency for your app:

```js
angular.module('App.MyModule', ['GeoLocate.Service']);
```

## Usage

```js
angular.module('App.MyModule').controller('MyController', function($geoLocate) {
  $geoLocate().then(function(position) {
    //Position obtained
  }, function(reason) {
    //Geolocation failed due to reason
  });
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-angular-geo-locate issue tracker](https://github.com/meanie/angular-geo-locate/issues).

## Contributing

Pull requests are welcome! Please create them against the [dev branch](https://github.com/meanie/angular-geo-locate/tree/dev) of the repository.

If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## License

(MIT License)

Copyright 2015, [Adam Buczynski](http://adambuczynski.com)
