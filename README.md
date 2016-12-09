# meanie-angular-geo-locate

[![npm version](https://img.shields.io/npm/v/meanie-angular-geo-locate.svg)](https://www.npmjs.com/package/meanie-angular-geo-locate)
[![node dependencies](https://david-dm.org/meanie/angular-geo-locate.svg)](https://david-dm.org/meanie/angular-geo-locate)
[![github issues](https://img.shields.io/github/issues/meanie/angular-geo-locate.svg)](https://github.com/meanie/angular-geo-locate/issues)
[![codacy](https://img.shields.io/codacy/23f91e13265b412b9e8926609b839992.svg)](https://www.codacy.com/app/meanie/angular-geo-locate)


An Angular service for geo location

![Meanie](https://raw.githubusercontent.com/meanie/meanie/master/meanie-logo-full.png)

## Installation

You can install this package using `npm`:

```shell
npm install meanie-angular-geo-locate --save
```

Include the script `node_modules/meanie-angular-geo-locate/release/meanie-angular-geo-locate.js` in your build process, or add it via a `<script>` tag to your `index.html`:

```html
<script src="node_modules/meanie-angular-geo-locate/release/meanie-angular-geo-locate.js"></script>
```

Add `GeoLocate.Service` as a dependency for your app.

## Usage

```js
angular.module('App.MyModule', [
  'GeoLocate.Service'
]).controller('MyController', function($geoLocate) {
  $geoLocate().then(function(position) {
    //Position obtained
  }, function(reason) {
    //Geolocation failed due to given reason
  });
});
```

## Issues & feature requests

Please report any bugs, issues, suggestions and feature requests in the [meanie-angular-geo-locate issue tracker](https://github.com/meanie/angular-geo-locate/issues).

## Contributing

Pull requests are welcome! If you would like to contribute to Meanie, please check out the [Meanie contributing guidelines](https://github.com/meanie/meanie/blob/master/CONTRIBUTING.md).

## Credits

* Meanie logo designed by [Quan-Lin Sim](mailto:quan.lin.sim+meanie@gmail.com)

## License

(MIT License)

Copyright 2015-2017, [Adam Reis](http://adam.reis.nz)
