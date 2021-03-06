'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
var tslib_1 = require('tslib');
var React = tslib_1.__importStar(require('react'));
var p4_css_1 = require('p4-css');
var blockClass = p4_css_1.rule({
  d: 'inline-block',
  ov: 'hidden',
  bdrad: '6px',
  maxW: '600px',
  w: '100%',
  '&>iframe': {
    d: 'block',
    ov: 'hidden',
    bd: 0,
    w: '100%',
    h: '360px',
  },
});
var latlngRegex = /@([\-0-9\.]+),([\-0-9\.]+)(?:[^\-0-9\.]|$)/;
var Gmaps = function (_a) {
  var url = _a.url,
    renderWrap = _a.renderWrap,
    renderVoid = _a.renderVoid;
  var matches = url.match(latlngRegex);
  if (!matches) return renderVoid();
  var omit = matches[0],
    lat = matches[1],
    lng = matches[2];
  return renderWrap(
    React.createElement(
      'div',
      {className: blockClass},
      React.createElement('iframe', {
        allowFullScreen: true,
        src:
          'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d21948.472927059174!2d' +
          encodeURIComponent(lng) +
          '!3d' +
          encodeURIComponent(lat) +
          '!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sch!4v1551898961513',
      }),
    ),
  );
};
exports.default = Gmaps;
//# sourceMappingURL=index.js.map
