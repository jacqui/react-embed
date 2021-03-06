'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
var Box_1 = require('./Box');
react_1
  .storiesOf('react-player', module)
  .add('Facebook', function () {
    return React.createElement(__1.default, {url: 'https://www.facebook.com/OddCouplesDodo/videos/2002998246626642/'});
  })
  .add('Twitch', function () {
    return React.createElement(__1.default, {url: 'https://www.twitch.tv/videos/290187802'});
  })
  .add('Twitch Fitted', function () {
    return React.createElement(
      Box_1.Box,
      null,
      React.createElement(__1.default, {url: 'https://www.twitch.tv/videos/290187802'}),
    );
  })
  .add('DailyMotion', function () {
    return React.createElement(__1.default, {url: 'https://www.dailymotion.com/video/x75y5s2?playlist=x63vyg'});
  })
  .add('Vimeo', function () {
    return React.createElement(__1.default, {url: 'https://vimeo.com/54763818'});
  })
  .add('Vimeo Fitted', function () {
    return React.createElement(Box_1.Box, null, React.createElement(__1.default, {url: 'https://vimeo.com/54763818'}));
  });
//# sourceMappingURL=react-player.story.js.map
