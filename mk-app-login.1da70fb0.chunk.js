webpackJsonp([12],{1616:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,u,i=n(2),a=o(i),f=n(59),c=o(f),s=n(4),d=o(s),l=n(9),p=o(l),h=n(6),g=o(h),m=n(7),v=o(m),_=n(0),w=(o(_),n(274)),b=n(626),A=o(b),x=(r=(0,w.wrapper)(A.default))(u=function(e){function t(){return(0,d.default)(this,t),(0,g.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){return this.props.monkeyKing((0,a.default)({},this.props,{path:"root"}))}}]),t}(_.Component))||u;t.default=x,e.exports=t.default},1617:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new h.action(e),n=new v((0,i.default)({},e,{metaAction:t})),o=(0,i.default)({},t,n);return t.config({metaHandlers:o}),o}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),i=o(u),a=n(275),f=o(a),c=n(276),s=o(c),d=n(4),l=o(d);t.default=r;var p=n(0),h=(o(p),n(274)),g=n(609),m=o(g),v=function e(t){var n=this;(0,l.default)(this,e),this.onInit=function(e){var t=e.component,o=e.injections;n.component=t,n.injections=o,o.reduce("init")},this.getLogo=function(){return n.config.logo},this.login=(0,s.default)(f.default.mark(function e(){var t,o;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.metaAction.gf("data.form").toJS(),e.next=3,n.webapi.user.login(t);case 3:o=e.sent,n.metaAction.context.set("user",o.user),n.component.props.onRedirect&&n.config.goAfterLogin&&n.component.props.onRedirect(n.config.goAfterLogin);case 6:case"end":return e.stop()}},e,n)})),this.metaAction=t.metaAction,this.config=m.default.current,this.webapi=this.config.webapi};e.exports=t.default},1618:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new c.reducer(e),n=new l((0,i.default)({},e,{metaReducer:t}));return(0,i.default)({},t,n)}Object.defineProperty(t,"__esModule",{value:!0});var u=n(2),i=o(u),a=n(4),f=o(a);t.default=r;var c=(n(80),n(274)),s=n(609),d=(o(s),n(627)),l=function e(t){var n=this;(0,f.default)(this,e),this.init=function(e,t){return n.metaReducer.init(e,(0,d.getInitState)())},this.metaReducer=t.metaReducer};e.exports=t.default}});