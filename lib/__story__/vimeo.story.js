'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
var Box_1 = require('./Box');
react_1
  .storiesOf('vimeo', module)
  .add('Default', function () {
    return React.createElement(__1.default, {url: 'https://vimeo.com/54763818'});
  })
  .add('"The music scene"', function () {
    return React.createElement(__1.default, {url: 'https://vimeo.com/12622016'});
  })
  .add('Fitted', function () {
    return React.createElement(Box_1.Box, null, React.createElement(__1.default, {url: 'https://vimeo.com/12622016'}));
  });
//# sourceMappingURL=vimeo.story.js.map
