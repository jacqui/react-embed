'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.ReactEmbed = void 0;
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var routeToBlock_1 = tslib_1.__importDefault(require('./routeToBlock'));
var renderer_1 = tslib_1.__importDefault(require('./renderer'));
var IS_BROWSER = typeof window === 'object';
var defaultBlocks = {
  figma: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/figma'));
    });
  }),
  gist: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/gist'));
    });
  }),
  gmaps: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/gmaps'));
    });
  }),
  imgur: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/imgur'));
    });
  }),
  instagram: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/instagram'));
    });
  }),
  jsfiddle: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/jsfiddle'));
    });
  }),
  simplePlayer: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/react-simple-player'));
    });
  }),
  reactPlayer: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/react-player'));
    });
  }),
  replit: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/replit'));
    });
  }),
  soundcloud: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/soundcloud'));
    });
  }),
  tweet: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/tweet'));
    });
  }),
  youtube: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/youtube'));
    });
  }),
  gfycat: React.lazy(function () {
    return Promise.resolve().then(function () {
      return tslib_1.__importStar(require('./blocks/gfycat'));
    });
  }),
};
var renderNull = function () {
  return null;
};
var renderWrap = function (children) {
  return children;
};
var ReactEmbed = (function (_super) {
  tslib_1.__extends(ReactEmbed, _super);
  function ReactEmbed() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.state = {};
    return _this;
  }
  ReactEmbed.getDerivedStateFromProps = function (props) {
    if (!IS_BROWSER) return null;
    if (typeof props.url === 'string') {
      try {
        var url = new URL(props.url);
        var hostname = url.hostname,
          pathname = url.pathname,
          search = url.search,
          hash = url.hash;
        return {
          url: {
            url: props.url,
            hostname: hostname,
            pathname: pathname,
            search: search,
            hash: hash,
          },
        };
      } catch (error) {
        return {error: error};
      }
    } else {
      return undefined;
    }
  };
  ReactEmbed.getDerivedStateFromError = function (error) {
    return {error: error};
  };
  ReactEmbed.prototype.render = function () {
    if (!IS_BROWSER) return null;
    var _a = this,
      props = _a.props,
      state = _a.state;
    if (state.error) return props.renderVoid(props, state, state.error);
    var result;
    try {
      result = props.router(props.blocks, state.url);
    } catch (error) {
      console.error('Could not route block:', error);
      return props.renderVoid(props, state, error);
    }
    if (!result || !result[0]) return props.renderVoid(props, state);
    var _b = result,
      Block = _b[0],
      id = _b[1];
    return props.render(Block, id, props, state);
  };
  ReactEmbed.defaultProps = {
    width: typeof window === 'object' ? window.innerWidth : 0,
    isDark: false,
    blocks: defaultBlocks,
    router: routeToBlock_1.default,
    render: renderer_1.default,
    renderVoid: renderNull,
    renderWrap: renderWrap,
  };
  return ReactEmbed;
})(React.PureComponent);
exports.ReactEmbed = ReactEmbed;
exports.default = ReactEmbed;
//# sourceMappingURL=ReactEmbed.js.map
