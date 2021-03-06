'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var blockStyle = {
  width: 350,
  overflow: 'hidden',
  borderRadius: '6px',
  display: 'block',
};
var iframeStyle = {
  width: '100%',
  display: 'block',
  overflow: 'hidden',
  borderRadius: '8px',
};
var Imgur = (function (_super) {
  tslib_1.__extends(Imgur, _super);
  function Imgur() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {
      height: 0,
    };
    _this.mounted = false;
    _this.onMessage = function (_a) {
      var data = _a.data;
      if (!_this.mounted) return;
      if (typeof data !== 'string') return;
      try {
        var json = JSON.parse(data);
        if (json.message !== 'resize_imgur') return;
        if (typeof json.href !== 'string') return;
        if (json.href !== _this.src()) return;
        if (typeof json.height !== 'number') return;
        _this.setState({height: json.height});
      } catch (_b) {}
    };
    return _this;
  }
  Imgur.prototype.componentDidMount = function () {
    this.mounted = true;
    window.addEventListener('message', this.onMessage);
  };
  Imgur.prototype.componentWillUnmount = function () {
    this.mounted = false;
    window.removeEventListener('message', this.onMessage);
  };
  Imgur.prototype.src = function () {
    return 'https://imgur.com/a/' + this.props.id + '/embed?pub=true&w=340';
  };
  Imgur.prototype.render = function () {
    var state = this.state;
    var height = state.height || 0;
    return this.props.renderWrap(
      React.createElement(
        'div',
        {style: tslib_1.__assign(tslib_1.__assign({}, blockStyle), {border: height ? '1px solid #E5E9F2' : ''})},
        React.createElement('iframe', {
          scrolling: 'no',
          frameBorder: '0',
          src: this.src(),
          style: tslib_1.__assign(tslib_1.__assign({}, iframeStyle), {height: height}),
        }),
      ),
    );
  };
  return Imgur;
})(React.Component);
exports.default = Imgur;
//# sourceMappingURL=index.js.map
