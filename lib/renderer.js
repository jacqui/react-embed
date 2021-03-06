'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var renderer = function (Block, id, props, state) {
  var renderVoid = function (error) {
    return props.renderVoid(props, state, error);
  };
  return React.createElement(
    Block,
    tslib_1.__assign({}, state.url, {
      id: id,
      width: props.width,
      isDark: props.isDark,
      renderWrap: props.renderWrap,
      renderVoid: renderVoid,
    }),
  );
};
exports.default = renderer;
//# sourceMappingURL=renderer.js.map
