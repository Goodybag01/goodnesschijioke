import{g as k}from"./index-7127c1b0.js";var E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function L(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var v={exports:{}},p={exports:{}},y;function b(){return y||(y=1,function(c){(function(f,a){c.exports?c.exports=a():f.EvEmitter=a()})(typeof window<"u"?window:E,function(){function f(){}let a=f.prototype;return a.on=function(o,r){if(!o||!r)return this;let s=this._events=this._events||{},d=s[o]=s[o]||[];return d.includes(r)||d.push(r),this},a.once=function(o,r){if(!o||!r)return this;this.on(o,r);let s=this._onceEvents=this._onceEvents||{},d=s[o]=s[o]||{};return d[r]=!0,this},a.off=function(o,r){let s=this._events&&this._events[o];if(!s||!s.length)return this;let d=s.indexOf(r);return d!=-1&&s.splice(d,1),this},a.emitEvent=function(o,r){let s=this._events&&this._events[o];if(!s||!s.length)return this;s=s.slice(0),r=r||[];let d=this._onceEvents&&this._onceEvents[o];for(let n of s)d&&d[n]&&(this.off(o,n),delete d[n]),n.apply(this,r);return this},a.allOff=function(){return delete this._events,delete this._onceEvents,this},f})}(p)),p.exports}/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */(function(c){(function(f,a){c.exports?c.exports=a(f,b()):f.imagesLoaded=a(f,f.EvEmitter)})(typeof window<"u"?window:E,function(a,o){let r=a.jQuery,s=a.console;function d(t){return Array.isArray(t)?t:typeof t=="object"&&typeof t.length=="number"?[...t]:[t]}function n(t,e,i){if(!(this instanceof n))return new n(t,e,i);let h=t;if(typeof t=="string"&&(h=document.querySelectorAll(t)),!h){s.error(`Bad element for imagesLoaded ${h||t}`);return}this.elements=d(h),this.options={},typeof e=="function"?i=e:Object.assign(this.options,e),i&&this.on("always",i),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))}n.prototype=Object.create(o.prototype),n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const g=[1,9,11];n.prototype.addElementImages=function(t){t.nodeName==="IMG"&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);let{nodeType:e}=t;if(!e||!g.includes(e))return;let i=t.querySelectorAll("img");for(let h of i)this.addImage(h);if(typeof this.options.background=="string"){let h=t.querySelectorAll(this.options.background);for(let I of h)this.addElementBackgroundImages(I)}};const m=/url\((['"])?(.*?)\1\)/gi;n.prototype.addElementBackgroundImages=function(t){let e=getComputedStyle(t);if(!e)return;let i=m.exec(e.backgroundImage);for(;i!==null;){let h=i&&i[2];h&&this.addBackground(h,t),i=m.exec(e.backgroundImage)}},n.prototype.addImage=function(t){let e=new u(t);this.images.push(e)},n.prototype.addBackground=function(t,e){let i=new l(t,e);this.images.push(i)},n.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let t=(e,i,h)=>{setTimeout(()=>{this.progress(e,i,h)})};this.images.forEach(function(e){e.once("progress",t),e.check()})},n.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${i}`,t,e)},n.prototype.complete=function(){let t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){let e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}};function u(t){this.img=t}u.prototype=Object.create(o.prototype),u.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(t,e){this.isLoaded=t;let{parentNode:i}=this.img,h=i.nodeName==="PICTURE"?i:this.img;this.emitEvent("progress",[this,h,e])},u.prototype.handleEvent=function(t){let e="on"+t.type;this[e]&&this[e](t)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function l(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype=Object.create(u.prototype),l.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},l.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},n.makeJQueryPlugin=function(t){t=t||a.jQuery,t&&(r=t,r.fn.imagesLoaded=function(e,i){return new n(this,e,i).jqDeferred.promise(r(this))})},n.makeJQueryPlugin(),n})})(v);var x=v.exports;const q=L(x),C=document.querySelector("main");q(C);const _=k.timeline();_.to([".mask"],{scale:1,stagger:.3,duration:2,ease:"power4.out"});
