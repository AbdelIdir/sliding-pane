!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("prop-types"),require("react-modal")):"function"==typeof define&&define.amd?define("ReactSlidingPane",["react","prop-types","react-modal"],t):"object"==typeof exports?exports.ReactSlidingPane=t(require("react"),require("prop-types"),require("react-modal")):e.ReactSlidingPane=t(e.React,e[void 0],e.ReactModal)}("undefined"!=typeof self?self:this,function(e,t,n){return function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){"use strict";function a(e){var t=e.isOpen,n=e.title,a=e.subtitle,r=e.onRequestClose,l=e.onAfterOpen,i=e.children,s=e.className,u=e.overlayClassName,d=e.from,f=void 0===d?"right":d,m=e.width,v="slide-pane_from_"+f;return o.a.createElement(c.a,{className:"slide-pane "+v+" "+(s||""),style:{content:{width:m||"80%"}},overlayClassName:"slide-pane__overlay "+(u||""),closeTimeoutMS:p,isOpen:t,onAfterOpen:l,onRequestClose:r,contentLabel:'Modal "'+(n||"")+'"'},o.a.createElement("div",{className:"slide-pane__header"},o.a.createElement("div",{className:"slide-pane__close",onClick:r},o.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 22"},o.a.createElement("path",{fill:"currentColor",fillRule:"evenodd",d:"M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"}))),o.a.createElement("div",{className:"slide-pane__title-wrapper"},o.a.createElement("h2",{className:"slide-pane__title"},n),o.a.createElement("div",{className:"slide-pane__subtitle"},a))),o.a.createElement("div",{className:"slide-pane__content"},i))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=n(1),o=n.n(r),l=n(2),i=n.n(l),s=n(3),c=n.n(s),u=n(4),p=(n.n(u),500);a.propTypes={isOpen:i.a.bool.isRequired,title:i.a.any,subtitle:i.a.any,onRequestClose:i.a.func,onAfterOpen:i.a.func,children:i.a.any.isRequired,className:i.a.string,overlayClassName:i.a.string,from:i.a.oneOf(["left","right","bottom"]),width:i.a.string}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){}])});