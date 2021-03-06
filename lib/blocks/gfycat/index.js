'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var Gfycat = function (_a) {
  var id = _a.id,
    renderWrap = _a.renderWrap;
  return renderWrap(
    React.createElement('iframe', {
      src: 'https://gfycat.com/ifr/' + id,
      width: '100%',
      height: '500px',
      frameBorder: '0',
      scrolling: 'no',
      allowFullScreen: true,
    }),
  );
};
exports.default = Gfycat;
//# sourceMappingURL=index.js.map
