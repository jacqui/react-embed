'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var react_instagram_embed_1 = tslib_1.__importDefault(require('react-instagram-embed'));
var Instagram = function (_a) {
  var url = _a.url,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement(react_instagram_embed_1.default, {
      url: url,
      maxWidth: 320,
      hideCaption: false,
      containerTagName: 'div',
      protocol: '',
      injectScript: true,
      onLoading: function () {},
      onSuccess: function () {},
      onAfterRender: function () {},
      onFailure: function () {},
    }),
  );
};
exports.default = Instagram;
//# sourceMappingURL=index.js.map
