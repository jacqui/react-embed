'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
tslib_1.__exportStar(require('./ReactEmbed'), exports);
var Resource = React.lazy(function () {
  return Promise.resolve().then(function () {
    return tslib_1.__importStar(require('./ReactEmbed'));
  });
});
var Embed = function (props) {
  return React.createElement(
    React.Suspense,
    {fallback: props.fallback || null},
    React.createElement(Resource, tslib_1.__assign({}, props)),
  );
};
exports.default = Embed;
//# sourceMappingURL=index.js.map
