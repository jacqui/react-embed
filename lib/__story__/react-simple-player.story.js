'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_1 = require('@storybook/react');
var __1 = tslib_1.__importDefault(require('..'));
react_1
  .storiesOf('react-simple-player/format', module)
  .add('.mp3', function () {
    return React.createElement(__1.default, {
      url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
    });
  })
  .add('.wav', function () {
    return React.createElement(__1.default, {
      url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_WAV_1MG.wav',
    });
  })
  .add('.aac', function () {
    return React.createElement(__1.default, {url: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.aac'});
  })
  .add('.m4a', function () {
    return React.createElement(__1.default, {url: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.m4a'});
  })
  .add('.mp4', function () {
    return React.createElement(__1.default, {url: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp4'});
  })
  .add('.ogg', function () {
    return React.createElement(__1.default, {url: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.ogg'});
  })
  .add('.opus', function () {
    return React.createElement(__1.default, {url: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.opus'});
  })
  .add('.wma', function () {
    return React.createElement(__1.default, {url: 'https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.wma'});
  })
  .add('.mpga', function () {
    return React.createElement(__1.default, {url: 'https://example-files.online-convert.com/audio/mpga/example.mpga'});
  })
  .add('.mp2', function () {
    return React.createElement(__1.default, {url: 'https://filesamples.com/samples/audio/mp2/sample1.mp2'});
  });
react_1
  .storiesOf('react-simple-player/widths', module)
  .add('300px', function () {
    return React.createElement(
      'div',
      {style: {width: 300}},
      React.createElement(__1.default, {
        url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
        width: 300,
      }),
    );
  })
  .add('500px', function () {
    return React.createElement(
      'div',
      {style: {width: 500}},
      React.createElement(__1.default, {
        url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
        width: 500,
      }),
    );
  });
react_1.storiesOf('react-simple-player', module).add('dark mode', function () {
  return React.createElement(__1.default, {
    isDark: true,
    url: 'https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3',
  });
});
//# sourceMappingURL=react-simple-player.story.js.map
