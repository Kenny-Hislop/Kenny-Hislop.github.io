!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).VRView=e()}}(function(){return function e(t,n,i){function r(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){var n=t[s][1][e];return r(n||e)},d,d.exports,e,t,n,i)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<i.length;s++)r(i[s]);return r}({1:[function(e,t,n){"use strict";function i(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function r(){}var o=Object.prototype.hasOwnProperty,s="function"!=typeof Object.create&&"~";r.prototype._events=void 0,r.prototype.eventNames=function(){var e,t=this._events,n=[];if(!t)return n;for(e in t)o.call(t,e)&&n.push(s?e.slice(1):e);return Object.getOwnPropertySymbols?n.concat(Object.getOwnPropertySymbols(t)):n},r.prototype.listeners=function(e,t){var n=s?s+e:e,i=this._events&&this._events[n];if(t)return!!i;if(!i)return[];if(i.fn)return[i.fn];for(var r=0,o=i.length,a=new Array(o);r<o;r++)a[r]=i[r].fn;return a},r.prototype.emit=function(e,t,n,i,r,o){var a=s?s+e:e;if(!this._events||!this._events[a])return!1;var c,u,d=this._events[a],p=arguments.length;if("function"==typeof d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),p){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,n),!0;case 4:return d.fn.call(d.context,t,n,i),!0;case 5:return d.fn.call(d.context,t,n,i,r),!0;case 6:return d.fn.call(d.context,t,n,i,r,o),!0}for(u=1,c=new Array(p-1);u<p;u++)c[u-1]=arguments[u];d.fn.apply(d.context,c)}else{var l,f=d.length;for(u=0;u<f;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),p){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,t);break;case 3:d[u].fn.call(d[u].context,t,n);break;default:if(!c)for(l=1,c=new Array(p-1);l<p;l++)c[l-1]=arguments[l];d[u].fn.apply(d[u].context,c)}}return!0},r.prototype.on=function(e,t,n){var r=new i(t,n||this),o=s?s+e:e;return this._events||(this._events=s?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.once=function(e,t,n){var r=new i(t,n||this,!0),o=s?s+e:e;return this._events||(this._events=s?{}:Object.create(null)),this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],r]:this._events[o].push(r):this._events[o]=r,this},r.prototype.removeListener=function(e,t,n,i){var r=s?s+e:e;if(!this._events||!this._events[r])return this;var o=this._events[r],a=[];if(t)if(o.fn)(o.fn!==t||i&&!o.once||n&&o.context!==n)&&a.push(o);else for(var c=0,u=o.length;c<u;c++)(o[c].fn!==t||i&&!o[c].once||n&&o[c].context!==n)&&a.push(o[c]);return a.length?this._events[r]=1===a.length?a[0]:a:delete this._events[r],this},r.prototype.removeAllListeners=function(e){return this._events?(e?delete this._events[s?s+e:e]:this._events=s?{}:Object.create(null),this):this},r.prototype.off=r.prototype.removeListener,r.prototype.addListener=r.prototype.on,r.prototype.setMaxListeners=function(){return this},r.prefixed=s,void 0!==t&&(t.exports=r)},{}],2:[function(e,t,n){function i(e){e?(this.iframe=e,this.isIOS_()&&window.addEventListener("devicemotion",this.onDeviceMotion_.bind(this),!1)):console.error("No iframe specified")}var r=e("../message");i.prototype.send=function(e){this.iframe.contentWindow.postMessage(e,"*")},i.prototype.onDeviceMotion_=function(e){var t={type:r.DEVICE_MOTION,deviceMotionEvent:this.cloneDeviceMotionEvent_(e)};this.send(t)},i.prototype.cloneDeviceMotionEvent_=function(e){return{acceleration:{x:e.acceleration.x,y:e.acceleration.y,z:e.acceleration.z},accelerationIncludingGravity:{x:e.accelerationIncludingGravity.x,y:e.accelerationIncludingGravity.y,z:e.accelerationIncludingGravity.z},rotationRate:{alpha:e.rotationRate.alpha,beta:e.rotationRate.beta,gamma:e.rotationRate.gamma},interval:e.interval,timeStamp:e.timeStamp}},i.prototype.isIOS_=function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},t.exports=i},{"../message":5}],3:[function(e,t,n){var i={Player:e("./player")};t.exports=i},{"./player":4}],4:[function(e,t,n){function i(e,t){var n=this.createIframe_(t);this.iframe=n,document.querySelector(e).appendChild(n),this.sender=new s(n),this.saveOnMessage=this.onMessage_.bind(this),window.addEventListener("message",this.saveOnMessage,!1),this.isPaused=!1,this.isMuted=!1,void 0!==t.muted&&(this.isMuted=t.muted),this.currentTime=0,this.duration=0,this.volume=void 0!=t.volume?t.volume:1,c.isIOS()&&this.injectFullscreenStylesheet_()}function r(e){return e&&"object"==typeof e&&e.constructor===Object}var o=e("eventemitter3"),s=e("./iframe-message-sender"),a=e("../message"),c=e("../util"),u=c.getCurrentScript().src;(i.prototype=new o).batchAddObjects=function(e){e.objects.forEach(e=>{this.absolutifyPaths_(e)}),this.sender.send({type:a.BATCH_ADD,data:e})},i.prototype.addObject=function(e){var t;if(this.absolutifyPaths_(e),"hotspot"==e.type)t=a.ADD_HOTSPOT;else if("image"==e.type)t=a.ADD_IMAGE;else if("text"==e.type)t=a.ADD_TEXT;else if("question"==e.type)t=a.ADD_QUESTION;else if("video"==e.type)t=a.ADD_VIDEO;else if("audio"==e.type)t=a.ADD_AUDIO;else if("timer"==e.type)t=a.ADD_TIMER;else if("group"==e.type)t=a.ADD_GROUP;else{if("layer"!=e.type)return;t=a.ADD_LAYER}this.sender.send({type:t,data:e})},i.prototype.updateObject=function(e){var t=a.UPDATE_OBJECT;this.absolutifyPaths_(e),this.sender.send({type:t,data:e})},i.prototype.removeObject=function(e){var t={id:e};this.sender.send({type:a.REMOVE_OBJECT,data:t})},i.prototype.setVisisble=function(e,t){var n={id:e,visible:t};this.sender.send({type:a.SET_VISIBLE,data:n})},i.prototype.play=function(){this.sender.send({type:a.PLAY})},i.prototype.animate=function(e){this.sender.send({type:a.ANIMATE,data:e})},i.prototype.pause=function(){this.sender.send({type:a.PAUSE})},i.prototype.setContent=function(e){this.absolutifyPaths_(e);var t={contentInfo:e};this.sender.send({type:a.SET_CONTENT,data:t})},i.prototype.setVolume=function(e,t){var n={volumeLevel:e,id:t};this.sender.send({type:a.SET_VOLUME,data:n})},i.prototype.getVolume=function(){return this.volume},i.prototype.mute=function(e){var t={muteState:e};this.sender.send({type:a.MUTED,data:t})},i.prototype.setCurrentTime=function(e){var t={currentTime:e};this.sender.send({type:a.SET_CURRENT_TIME,data:t})},i.prototype.getCurrentTime=function(){return this.currentTime},i.prototype.getDuration=function(){return this.duration},i.prototype.setFullscreen=function(){this.sender.send({type:a.SET_FULLSCREEN})},i.prototype.createIframe_=function(e){this.absolutifyPaths_(e);var t=document.createElement("iframe");t.setAttribute("allowfullscreen",!0),t.setAttribute("scrolling","no"),t.setAttribute("allow","accelerometer; gyroscope"),t.style.border=0,e.hasOwnProperty("width")&&(t.setAttribute("width",e.width),delete e.width),e.hasOwnProperty("height")&&(t.setAttribute("height",e.height),delete e.height);var n=this.getEmbedUrl_()+c.createGetParams(e);return t.src=n,t},i.prototype.onMessage_=function(e){var t=e.data;if(t&&t.type){var n=t.type.toLowerCase(),i=t.data;switch(n){case"devicemotion":this.sender.send({type:"devicemotion",deviceMotionEvent:t.deviceMotionEvent});break;case"ready":void 0!==i&&void 0!==i.duration&&(this.duration=i.duration);case"modechange":case"error":case"click":case"focus":case"blur":case"show":case"hide":case"ended":case"objchanged":case"getposition":case"sceneloaded":case"startimagescene":case"pinch":case"ondragenter":case"ondragover":case"ondragleave":case"ondrop":case"keyevent":case"mediaended":case"timerupdate":case"apiresponse":case"selchanged":this.emit(n,i);break;case"volumechange":this.volume=i,this.emit("volumechange",i);break;case"muted":this.isMuted=i,this.emit("mute",i);break;case"timeupdate":this.currentTime=i.currentTime,this.emit("timeupdate",i);break;case"play":case"paused":this.isPaused=i,this.isPaused?this.emit("pause",i):this.emit("play",i);break;case"enter-fullscreen":case"enter-vr":this.setFakeFullscreen_(!0);break;case"exit-fullscreen":this.setFakeFullscreen_(!1);break;default:console.warn("Got unknown message of type %s from %s",t.type,t.origin)}}else console.warn("Received message with no type.")},i.prototype.setFakeFullscreen_=function(e){e?this.iframe.classList.add("vrview-fake-fullscreen"):this.iframe.classList.remove("vrview-fake-fullscreen")},i.prototype.injectFullscreenStylesheet_=function(){var e=["iframe.vrview-fake-fullscreen","{","position: fixed !important;","display: block !important;","z-index: 9999999999 !important;","top: 0 !important;","left: 0 !important;","width: 100% !important;","height: 100% !important;","margin: 0 !important;","}"].join("\n"),t=document.createElement("style");t.innerHTML=e,document.body.appendChild(t)},i.prototype.getEmbedUrl_=function(){var e=u.split("/");return e.slice(0,e.length-1).join("/")+"/frame.html"},i.prototype.getDirName_=function(){var e=window.location.pathname;return e=e.substring(0,e.lastIndexOf("/")),location.protocol+"//"+location.host+e},i.prototype.absolutifyPaths_=function(e){for(var t=this.getDirName_(),n=["image","preview","video","src"],i=0;i<n.length;i++){var o=n[i],s=e[o];if(s&&c.isPathAbsolute(s)){var a=c.relativeToAbsolutePath(t,s);e[o]=a}}for(var u in e)r(e[u])&&this.absolutifyPaths_(e[u])},i.prototype.getPosition=function(){this.sender.send({type:a.GET_POSITION,data:{}})},i.prototype.setMode=function(e){this.sender.send({type:a.SET_MODE,data:{mode:e}})},i.prototype.setSelection=function(e){this.sender.send({type:a.SET_SELECTION,data:{id:e}})},i.prototype.pan=function(e){this.sender.send({type:a.PAN_TO_OBJ,data:{id:e}})},i.prototype.lookAt=function(e,t){this.sender.send({type:a.LOOK_AT,data:{pitch:e,yaw:t}})},i.prototype.lookAtObj=function(e){this.sender.send({type:a.LOOK_AT,data:{id:e}})},i.prototype.playmedia=function(e){this.sender.send({type:a.PLAY_MEDIA,data:{id:e}})},i.prototype.stopmedia=function(e){this.sender.send({type:a.STOP_MEDIA,data:{id:e}})},i.prototype.pausemedia=function(e){this.sender.send({type:a.PAUSE_MEDIA,data:{id:e}})},i.prototype.settime=function(e,t){this.sender.send({type:a.SETTIME,data:{id:e,value:t}})},i.prototype.clearAll=function(e){this.sender.send({type:a.CLEAR_ALL,data:e})},i.prototype.objSelectionDisabled=function(e){this.sender.send({type:a.DISABLE_OBJ_SELECTION,data:e})},i.prototype.forwardEvent=function(e){this.sender.send({type:a.FORWARD_EVENT,data:e})},t.exports=i},{"../message":5,"../util":6,"./iframe-message-sender":2,eventemitter3:1}],5:[function(e,t,n){var i={PLAY:"play",PAUSE:"pause",TIMEUPDATE:"timeupdate",ADD_HOTSPOT:"addhotspot",ADD_VIDEO:"addvideo",ADD_AUDIO:"addaudio",ADD_TIMER:"addtimer",ADD_GROUP:"addgroup",ADD_LAYER:"addlayer",BATCH_ADD:"batchadd",ADD_IMAGE:"addimage",ADD_TEXT:"addtext",ADD_QUESTION:"addquestion",REMOVE_OBJECT:"removeobject",SET_VISIBLE:"setvisible",SET_CONTENT:"setimage",SET_VOLUME:"setvolume",MUTED:"muted",SET_CURRENT_TIME:"setcurrenttime",DEVICE_MOTION:"devicemotion",GET_POSITION:"getposition",SET_FULLSCREEN:"setfullscreen",SET_MODE:"setmode",SET_SELECTION:"setselection",PAN_TO_OBJ:"panto",LOOK_AT:"lookat",PLAY_MEDIA:"playmedia",STOP_MEDIA:"stopmedia",PAUSE_MEDIA:"pausemedia",SETTIME:"settime",CLEAR_ALL:"clearall",DISABLE_OBJ_SELECTION:"disable_obj_selection",UPDATE_OBJECT:"updateobject",ANIMATE:"animate",FORWARD_EVENT:"forward_event"};t.exports=i},{}],6:[function(e,t,n){var i=window.Util||{};i.isDataURI=function(e){return e&&0==e.indexOf("data:")},i.generateUUID=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},i.isMobile=function(){var e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},i.isIOS=function(){return/(iPad|iPhone|iPod)/g.test(navigator.userAgent)},i.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},i.isFirefox=function(){return-1!==navigator.userAgent.indexOf("Firefox")},i.isChrome=function(){return-1!==navigator.userAgent.indexOf("Chrome")},i.isIOS10OrLess=function(){return/(iphone|ipod|ipad).*os.(7|8|9)/i.test(navigator.userAgent)},i.cloneObject=function(e){var t={};for(key in e)t[key]=e[key];return t},i.hashCode=function(e){return e.split("").reduce(function(e,t){return(e=(e<<5)-e+t.charCodeAt(0))&e},0)},i.loadTrackSrc=function(e,t,n,i){var r=new XMLHttpRequest;r.open("GET",t,!0),r.responseType="arraybuffer",r.onload=function(){e.decodeAudioData(r.response,function(e){n(e)},function(e){console.error(e)})},i&&(r.onprogress=function(e){var t=e.loaded/e.total;i(t)}),r.send()},i.isPow2=function(e){return 0==(e&e-1)},i.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},i.isIFrame=function(){try{return window.self!==window.top}catch(e){return!0}},i.getQueryParameter=function(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))},i.isWebGLEnabled=function(){var e=document.createElement("canvas");try{window.gl=e.getContext("webgl")}catch(e){window.gl=null}if(null==gl)try{window.gl=e.getContext("experimental-webgl"),window.experimental=!0}catch(e){window.gl=null}return!!gl},i.clone=function(e){return JSON.parse(JSON.stringify(e))},i.hypot=Math.hypot||function(e,t){return Math.sqrt(e*e+t*t)},i.isIE11=function(){return navigator.userAgent.match(/Trident/)},i.getRectCenter=function(e){return new THREE.Vector2(e.x+e.width/2,e.y+e.height/2)},i.getScreenWidth=function(){return Math.max(window.screen.width,window.screen.height)*window.devicePixelRatio},i.getScreenHeight=function(){return Math.min(window.screen.width,window.screen.height)*window.devicePixelRatio},i.isIOS9OrLess=function(){if(!i.isIOS())return!1;var e=/(iPhone|iPad|iPod) OS ([\d_]+)/,t=navigator.userAgent.match(e);if(!t)return!1;var n=t[t.length-1];return parseFloat(n)<=9},i.getExtension=function(e){return e.split(".").pop().split("?")[0]},i.createGetParams=function(e){var t="?";for(var n in e)t+=n+"="+e[n]+"&";return t.substring(0,e.length-2),t},i.sendParentMessage=function(e){window.parent&&parent.postMessage(e,"*")},i.parseBoolean=function(e){return"false"!=e&&0!=e&&("true"==e||1==e||!!e)},i.relativeToAbsolutePath=function(e,t){for(var n=e.split("/"),i=t.split("/"),r=0;r<i.length;r++)"."!=i[r]&&(".."==i[r]?n.pop():n.push(i[r]));return n.join("/")},i.isPathAbsolute=function(e){return!/^(?:\/|\.|[a-z]+:\/\/)/.test(e)},i.isEmptyObject=function(e){return 0==Object.getOwnPropertyNames(e).length},i.isDebug=function(){return i.parseBoolean(i.getQueryParameter("debug"))},i.getCurrentScript=function(){return document.currentScript||console.warn("This browser does not support document.currentScript. Trying fallback."),document.currentScript||document.scripts[document.scripts.length-1]},Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(e){if(null==this)throw new TypeError('"this" is null or not defined');var t=Object(this),n=t.length>>>0;if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var i=arguments[1],r=0;r<n;){var o=t[r];if(e.call(i,o,r,t))return o;r++}}}),t.exports=i},{}]},{},[3])(3)});
