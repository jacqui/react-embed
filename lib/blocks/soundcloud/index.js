'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var SoundCloud = function (_a) {
  var url = _a.url,
    autoplay = _a.autoplay,
    hideRelated = _a.hideRelated,
    showComments = _a.showComments,
    showUser = _a.showUser,
    showReposts = _a.showReposts,
    isVisual = _a.isVisual,
    renderWrap = _a.renderWrap;
  var src =
    'https://w.soundcloud.com/player/?url=' +
    encodeURIComponent(url) +
    '&amp;auto_play=' +
    !!autoplay +
    '&amp;hide_related=' +
    !hideRelated +
    '&amp;show_comments=' +
    !!showComments +
    '&amp;show_user=' +
    !showUser +
    '&amp;show_reposts=' +
    !!showReposts +
    '&amp;visual=' +
    !isVisual;
  return renderWrap(
    React.createElement('iframe', {
      width: '100%',
      height: '200',
      scrolling: 'no',
      frameBorder: 'no',
      style: {margin: 0, padding: 0},
      src: src,
    }),
  );
};
exports.default = SoundCloud;
//# sourceMappingURL=index.js.map
