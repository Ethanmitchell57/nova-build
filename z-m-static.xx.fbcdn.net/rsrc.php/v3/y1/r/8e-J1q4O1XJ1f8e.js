;/*FB_PKG_DELIM*/

__d("MDeepCopy",[],(function(a,b,c,d,e,f){function g(a){if(Array.isArray(a))return i(a);else if(typeof a==="object"&&a!==null)return h(a);else return a}function h(a){var b={};for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(b[c]=g(a[c]));return b}function i(a){a=a.slice();for(var b=0;b<a.length;++b)a[b]=g(a[b]);return a}f["default"]=g}),66);
__d("MLiveData",["MDeepCopy","Stratcom","eventsMixinDeprecated"],(function(a,b,c,d,e,f){var g={},h={},i,j={},k,l,m=function(){"use strict";function a(a){this.$1=a}var c=a.prototype;c.getData=function(){return b("MDeepCopy")(g[this.$1]||{})};return a}();b("eventsMixinDeprecated")(m,["change"]);var n={_set:function(a,b,c){var d=g[a],e=d&&d.timestamp&&b.timestamp&&d.timestamp>b.timestamp;if(l||e)return;!d||c?g[a]=b:Object.assign(g[a]||{},b);h[a]||(h[a]=new m(a));h[a].invoke("change")},update:function(a,b){n._set(a,b,!1)},set:function(a,b){n._set(a,b,!0)},get:function(a){i||(i=b("Stratcom").listen("m:page:render:cache:start",null,function(){l=!0,b("Stratcom").listen("m:page:iui:response:complete",null,function(){l=!1,b("Stratcom").removeCurrentListener(),Object.keys(j).forEach(function(a){var b=g[a];b&&Object.keys(b).length&&h[a].invoke("change")})})}));j[a]||(j[a]=!0);k||(k=b("Stratcom").listen("m:page:unload",null,function(){j={}}));h[a]||(h[a]=new m(a));return h[a]}};e.exports=n}),null);
__d("IntlCLDRNumberType20",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a%10===1&&a%100!==11)return c("IntlVariations").NUMBER_ONE;else if(a%10>=2&&a%10<=4&&(a%100<12||a%100>14))return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType25",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else if(a>=2&&a<=4)return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType26",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else if(a%10>=2&&a%10<=4&&(a%100<12||a%100>14))return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_MANY}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType27",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a%10===1&&a%100!==11)return c("IntlVariations").NUMBER_ONE;else if(a%10>=2&&a%10<=4&&(a%100<12||a%100>14))return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_MANY}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType30",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a%10===1&&a%100!==11)return c("IntlVariations").NUMBER_ONE;else if(a%10>=2&&a%10<=4&&(a%100<12||a%100>14))return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_MANY}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType36",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===0||a===1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType37",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType38",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===0||a===1)return c("IntlVariations").NUMBER_ONE;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType39",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType43",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else if(a%10>=2&&a%10<=4&&(a%100<12||a%100>14))return c("IntlVariations").NUMBER_FEW;else return c("IntlVariations").NUMBER_MANY}};b=a;g["default"]=b}),98);
__d("IntlCLDRNumberType45",["IntlVariations"],(function(a,b,c,d,e,f,g){"use strict";a={getVariation:function(a){if(a===1)return c("IntlVariations").NUMBER_ONE;else if(a===2)return c("IntlVariations").NUMBER_TWO;else return c("IntlVariations").NUMBER_OTHER}};b=a;g["default"]=b}),98);
__d("Qe2JsExposureFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";a=c("getFalcoLogPolicy_DO_NOT_USE")("1837559");b=d("FalcoLoggerInternal").create("qe2_js_exposure",a);e=b;g["default"]=e}),98);
__d("MarketplaceReplaceState",[],(function(a,b,c,d,e,f){function a(a){window.history.replaceState({},"",a)}f.replaceState=a}),66);
__d("MessengerMarketingUtils",["cx","ge"],(function(a,b,c,d,e,f,g,h){function a(a){var b=a.link.href.split("#")[1];if(b){b=c("ge")(b);var d=b.getElementsByClassName("_2kz1")[1];if(!d){d=b.nextSibling.getElementsByClassName("_2kz1")[1];if(!d)return}a.link.addEventListener("click",function(){d.tabIndex=0,d.focus()},!1)}}g.relocateFocus=a}),98);
__d("PlatformWindowDialogCloser",[],(function(a,b,c,d,e,f){"use strict";function a(){window.close()}f.close=a}),66);
__d("QE2Logger",["Qe2JsExposureFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";var h={};function a(a,b){B(a,(a=b)!=null?a:"",9)}function b(a,b){B(a,(a=b)!=null?a:"",9,!0)}function d(a){B(a,"",4)}function e(a){B(a,"",32)}function f(a){B(a,"",32,!0)}function i(a){B(a,"",54)}function j(a,b){B(a,b,3)}function k(a){B(a,"",5)}function l(a){B(a,"",5,!0)}function m(a){B(a,"",31)}function n(a){B(a,"",98)}function o(a,b){B(a,b,7)}function p(a,b){B(a,b,55)}function q(a,b){B(a,b,17)}function r(a,b){B(a,b,25)}function s(a,b){B(a,b,8)}function t(a,b){B(a,b,22)}function u(a,b){B(a,b,27)}function v(a,b){B(a,b,0)}function w(a,b){B(a,(a=b)!=null?a:"",89)}function x(a,b){B(a,b,60)}function y(a,b){B(a,b,90)}function z(a,b,c){B(a,b,c)}function A(a,b,c){B(a,b,c,!0)}function B(a,b,d,e){var f=a+"|"+b;if(h[f])return;e===!0?c("Qe2JsExposureFalcoEvent").logImmediately(function(){return{universe:a,unit_id:b,unit_type:d}}):c("Qe2JsExposureFalcoEvent").log(function(){return{universe:a,unit_id:b,unit_type:d}});h[f]=!0}g.logExposureForUser=a;g.logExposureForUserImmediately=b;g.logExposureForIGDjangoUser=d;g.logExposureForIGUser=e;g.logExposureForIGUserImmediately=f;g.logExposureForIGWebCookie=i;g.logExposureForEmail=j;g.logExposureForDatr=k;g.logExposureForDatrImmediately=l;g.logExposureForOculusLoggedOut=m;g.logExposureForOculusLoggedOutCookieID=n;g.logExposureForPage=o;g.logExposureForPaymentAccountID=p;g.logExposureForBusiness=q;g.logExposureForGroup=r;g.logExposureForPhoneNumber=s;g.logExposureForScimCompanyID=t;g.logExposureForAnalyticsEntityID=u;g.logExposureForAdAccountID=v;g.logExposureForActingAccount=w;g.logExposureForMixedUserAndPage=x;g.logExposureForCommerceMerchantSettings=y;g.logExposure=z;g.logExposureImmediately=A}),98);
__d("QPAction",["$","DOM","ServerRedirect"],(function(a,b,c,d,e,f){a=function(a,c){window.close()||(c?g(a):b("ServerRedirect").redirectPageTo(a))};var g=function(a){window.location.replace(a)};c=function(a){b("DOM").replace(b("$")(a),"")};f.closeWindow=a;f.forceRedirect=g;f.closeDesktopWindow=c}),null);
__d("UFIReactionsUtils",[],(function(a,b,c,d,e,f){function a(a,b,c,d,e){e===void 0&&(e=null);b=parseInt(b,10);var f=!!b,g=a.reactorids?a.reactorids.slice(0):[],h=g.indexOf(c),i=0;f?h<0&&(c&&g.unshift(c),i=1):h>-1&&(g.splice(h,1),i=-1);h=Math.max(a.reactioncount+i,0);i=a.reactioncountreduced;i&&!isNaN(i)&&(d?i=d(h):i=h.toString());d=a.reactioncountmap||{};var j=a.reactioncountmapbyid||{},k,l=a.viewerreaction,m=a.viewerreactionid;l&&d[l]&&(d[l]["default"]=Math.max((d[l]["default"]||0)-1,0),k=d[l].reduced,k&&!isNaN(k)&&(d[l].reduced=d[l]["default"].toString()));m&&j[m]&&(j[m]["default"]=Math.max((j[m]["default"]||0)-1,0),k=j[m].reduced,k&&!isNaN(k)&&(j[m].reduced=j[m]["default"].toString()));f&&d[b]&&(d[b]["default"]=(d[b]["default"]||0)+1,k=d[b].reduced,k&&!isNaN(k)&&(d[b].reduced=d[b]["default"].toString()));f&&e!==null&&(j[e]||(j[e]={}),j[e]["default"]=(j[e]["default"]||0)+1,k=j[e].reduced,k&&!isNaN(k)&&(j[e].reduced=j[e]["default"].toString()));m=a.userreactions;(!m||Array.isArray(m))&&(m={});c&&(f?m[c]=b:delete m[c]);k=null;if(a.reactionsentences){f=!(l&&b);k={current:a.reactionsentences[f?"alternate":"current"],alternate:a.reactionsentences[f?"current":"alternate"]}}return{reactioncount:h,reactioncountmap:d,reactioncountmapbyid:j,reactioncountreduced:i,reactionsentences:k,reactorids:g,userreactions:m,viewerreaction:b,viewerreactionid:e}}function b(a){var b={};if(!a)return b;for(var c=0;c<a.length;c++){var d=a[c],e=d.feedback_reaction.key;b[e]={"default":d.reactors&&d.reactors.count,reduced:d.reactors&&d.reactors.display_count}}return b}f.getReactionData=a;f.getReactionCountMapFromSummary=b}),66);
__d("ReactRouterDOM",["react-router-dom"],(function(a,b,c,d,e,f){"use strict";e.exports=b("react-router-dom")}),null);
__d("abstractMethod",["invariant"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){h(0,1537,a,b)}g["default"]=a}),98);
__d("createIxElement",["invariant","DOM","coerceImageishSprited","coerceImageishURL","joinClasses"],(function(a,b,c,d,e,f,g,h){function a(a,b){var d="img",e=c("coerceImageishSprited")(a);a=c("coerceImageishURL")(a);if(e){e=c("DOM").create("i",{className:c("joinClasses")(d,e.type==="css"?e.className:void 0),style:e.type==="cssless"?e.style:void 0});b!=null&&c("DOM").setContent(e,c("DOM").create("u",null,b));return e}a||h(0,2521);e=c("DOM").create("img",{className:d,src:a.uri});b!=null&&e.setAttribute("alt",b);e.setAttribute("width",String(a.width));e.setAttribute("height",String(a.height));return e}g["default"]=a}),98);
__d("uuidv4",[],(function(a,b,c,d,e,f){"use strict";function a(){var a;a=(a=self)==null?void 0:(a=a.crypto)==null?void 0:a.randomUUID;return typeof a==="function"?self.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=Math.random()*16|0;a=a==="x"?b:b&3|8;return a.toString(16)})}f["default"]=a}),66);