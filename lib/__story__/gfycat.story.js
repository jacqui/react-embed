'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
var Box_1 = require('./Box');
react_1
  .storiesOf('gfycat', module)
  .add('Site link', function () {
    return React.createElement(__1.default, {url: 'https://gfycat.com/snivelingflimsyfunnelweaverspider'});
  })
  .add('Site link - 2', function () {
    return React.createElement(__1.default, {url: 'https://gfycat.com/bittervainchuckwalla-airplane-transportation'});
  })
  .add('Fitted', function () {
    return React.createElement(
      Box_1.Box,
      null,
      React.createElement(__1.default, {url: 'https://gfycat.com/snivelingflimsyfunnelweaverspider'}),
    );
  });
//# sourceMappingURL=gfycat.story.js.map
