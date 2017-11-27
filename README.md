# ES6-Modules

[![dependencies Status](https://david-dm.org/barryblando/es6-modules/status.svg)](https://david-dm.org/barryblando/es6-modules)
[![devDependencies Status](https://david-dm.org/barryblando/es6-modules/dev-status.svg)](https://david-dm.org/barryblando/es6-modules?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/barryblando/es6-modules/badge.svg)](https://snyk.io/test/github/barryblando/es6-modules)

NPM ES2015+ Babel Webpack Lodash

```DependencyErrors
I use

-webpack-dev-server@2.7.1 'cause of UglifyJS Error: Unexpected Token: Name (urlParts)
 => https://github.com/webpack/webpack-dev-server/issues/1101

-UglifyJS@2.8.29 'cause of unable to process ES6 and Error after Upgrading to Webpack@3.8.1
 => https://github.com/webpack-contrib/uglifyjs-webpack-plugin/issues/31

```

```Webpack-dev-server
Kill a currently using port on localhost in windows? When Dev Server F*cks Up.

Step one: [Terminal]

netstat -ano | findstr :yourPortNumber (Sample 9000)

  TCP    127.0.0.1:9000         0.0.0.0:0              LISTENING       8920 <== PID
  TCP    127.0.0.1:58337        127.0.0.1:9000         TIME_WAIT       0
  TCP    127.0.0.1:58338        127.0.0.1:9000         TIME_WAIT       0

Step two:

taskkill //PID typeyourPIDhere //F

(double slashes are needed and //F forcefully terminates the process)

```

```Dependencies
About the outdated and insecure Dependency, I intended to do it for learning purposes. I'll just fix it sooner.
```