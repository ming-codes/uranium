(function(){function f(a,c){var b;if(typeof a==h){var d=a,e=c.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[c.tagName]||c.tagName:c.firstChild.tagName;b={};var f=/^<([A-Z][A-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>/i,g,i;i=0;var j;if(f.test(d)){f=f.exec(d);e=f[1];if(f[2]!=="")for(d=f[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);i<d.length;i++)j=d[i].replace(/^\s*|\s*$/g,""),j!==""&&j!==" "&&(j=j.split("="),b[j[0]]=j[1].replace(/(["']?)/g,""));d=f[3]}e=k.createElement(e);for(g in b)i=k.createAttribute(g),
i.nodeValue=b[g],e.setAttributeNode(i);e.innerHTML=d;b=e}else b=a;return b}function g(a){var c=/\S/;a.each(function(a){for(var b=a.firstChild,d=-1,s;b;)s=b.nextSibling,b.nodeType==3&&!c.test(b.nodeValue)?a.removeChild(b):b.nodeIndex=++d,b=s})}function e(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++e.id}function b(a,b){var c=o[a]=o[a]||{};return c[b]=c[b]||[]}function d(a,c,d){var h=e(a),c=b(h,c),h=function(c){d.call(a,c)===!1&&(c.preventDefault(),c.stopPropagation())};h.guid=d.guid=
d.guid||++e.id;h.handler=d;c.push(h);return h}var a,c=this,h=new String("string"),k=c.document,i=/^#?([\w-]+)$/,n=/^#/,m=/<([\w:]+)/,j=function(a){return[].slice.call(a,0)};try{j(k.documentElement.childNodes)}catch(p){j=function(a){for(var c=[],b=0;a[b];b++)c.push(a[b]);return c}}c.x$=c.xui=a=function(c,b){return new a.fn.find(c,b)};if(![].forEach)Array.prototype.forEach=function(a,c){var b=this.length||0,d=0;if(typeof a=="function")for(;d<b;d++)a.call(c,this[d],d,this)};a.fn=a.prototype={extend:function(c){for(var b in c)a.fn[b]=
c[b]},find:function(b,d){var e=[],f;if(b)if(d==void 0&&this.length)e=this.each(function(c){e=e.concat(j(a(b,c)))}).reduce(e);else if(d=d||k,typeof b==h)i.test(b)&&d.getElementById&&d.getElementsByTagName?(e=n.test(b)?[d.getElementById(b.substr(1))]:d.getElementsByTagName(b),e[0]==null&&(e=[])):m.test(b)?(f=k.createElement("i"),f.innerHTML=b,j(f.childNodes).forEach(function(a){e.push(a)})):e=c.Sizzle!==void 0?Sizzle(b,d):d.querySelectorAll(b),e=j(e);else if(b instanceof Array)e=b;else if(b.toString()==
"[object NodeList]")e=j(b);else{if(b.nodeName||b===c)e=[b]}else return this;return this.set(e)},set:function(b){var c=a();c.cache=j(this.length?this:[]);c.length=0;[].push.apply(c,b);return c},reduce:function(a,b){var c=[],a=a||j(this);a.forEach(function(a){c.indexOf(a,0,b)<0&&c.push(a)});return c},has:function(b){var c=a(b);return this.filter(function(){var a=this,b=null;c.each(function(c){b=b||c==a});return b})},filter:function(a){var b=[];return this.each(function(c,d){a.call(c,d)&&b.push(c)}).set(b)},
not:function(b){var c=j(this);return this.filter(function(d){var e;a(b).each(function(a){return e=c[d]!=a});return e})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};a.fn.find.prototype=a.fn;a.extend=a.fn.extend;a.extend({html:function(a,b){g(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var c=k.createElement("p");b.each(function(a){c.appendChild(a)});
this.each(function(a){a.innerHTML=c.innerHTML})}else{var d=this;b.each(function(b){d.html(a,b)})}return this}return this.each(function(c){var d,e=0;if(a=="inner")if(typeof b==h||typeof b=="number"){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(d=c.length;e<d;e++)eval(c[e].text)}else c.innerHTML="",c.appendChild(b);else a=="outer"?c.parentNode.replaceChild(f(b,c),c):a=="top"?c.insertBefore(f(b,c),c.firstChild):a=="bottom"?c.insertBefore(f(b,c),null):a=="remove"?c.parentNode.removeChild(c):a==
"before"?c.parentNode.insertBefore(f(b,c.parentNode),c):a=="after"&&c.parentNode.insertBefore(f(b,c.parentNode),c.nextSibling)})},attr:function(a,b){if(arguments.length==2)return this.each(function(c){a=="checked"&&(b==""||b==!1||typeof b=="undefined")?c.removeAttribute(a):c.setAttribute(a,b)});else{var c=[];this.each(function(b){b=b.getAttribute(a);b!=null&&c.push(b)});return c}}});"inner outer top bottom remove before after".split(" ").forEach(function(b){a.fn[b]=function(a){return function(b){return this.html(a,
b)}}(b)});a.events={};var o={};a.extend({on:function(c,h,f){return this.each(function(g){if(a.events[c]){var i=e(g),i=b(i,c);f=f||{};f.handler=function(b,d){a.fn.fire.call(a(this),c,d)};i.length||a.events[c].call(g,f)}g.addEventListener(c,d(g,c,h),!1)})},un:function(a,c){return this.each(function(d){for(var h=e(d),f=b(h,a),g=f.length;g--;)if(c===void 0||c.guid===f[g].guid){d.removeEventListener(a,f[g],!1);var i=o[h][a],j=g,k=i.slice(2);i.length=j<0?i.length+j:j;i.push.apply(i,k)}o[h][a].length===
0&&delete o[h][a];for(var n in o[h])return;delete o[h]})},fire:function(a,b){return this.each(function(c){if(c==k&&!c.dispatchEvent)c=k.documentElement;var d=k.createEvent("HTMLEvents");d.initEvent(a,!0,!0);d.data=b||{};d.eventName=a;c.dispatchEvent(d)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(c){a.fn[c]=function(a){return function(c){return c?this.on(a,c):this.fire(a)}}(c)});a(c).on("load",
function(){"onorientationchange"in k.body||function(b,d){a(c).on("resize",function(){var e=c.innerWidth<b&&c.innerHeight>d&&c.innerWidth<c.innerHeight,h=c.innerWidth>b&&c.innerHeight<d&&c.innerWidth>c.innerHeight;if(e||h)c.orientation=e?0:90,a("body").fire("orientationchange"),b=c.innerWidth,d=c.innerHeight})}(c.innerWidth,c.innerHeight)});var l;try{l=!!k.createEvent("TouchEvent").initTouchEvent}catch(t){l=!1}a.touch=l;e.id=1;a.extend({tween:function(a,c){a instanceof Array&&a.forEach(function(){});
var b=function(){var c={};"duration after easing".split(" ").forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])});return c}(a),d=function(a){var c=[],b;if(typeof a!=h){for(b in a)c.push(b+":"+a[b]);c=c.join(";")}else c=a;return c}(a);return this.each(function(a){emile(a,d,b,c)})}});var q=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;a.extend({setStyle:function(a,c){a=a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()});return this.each(function(b){b.style[a]=c})},getStyle:function(a,c){var b=function(a,c){return k.defaultView.getComputedStyle(a,
"").getPropertyValue(c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}))};if(c===void 0){var d=[];this.each(function(c){d.push(b(c,a))});return d}else this.each(function(d){c(b(d,a))})},addClass:function(a){return this.each(function(c){if(r(a).test(c.className)===!1)c.className=(c.className+" "+a||"").replace(q,"")})},hasClass:function(a,c){var b=this;return this.length&&function(){var d=!1;b.each(function(b){r(a).test(b.className)&&(d=!0,c&&c(b))});return d}()},removeClass:function(a){if(a===
void 0)this.each(function(a){a.className=""});else{var c=r(a);this.each(function(a){var b;b=(a.className.replace(c,"$1")||"").replace(q,"");a.className=b})}return this},css:function(a){for(var c in a)this.setStyle(c,a[c]);return this}});var u={},r=function(a){var c=u[a];c||(c=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),u[a]=c);return c};a.extend({xhr:function(a,c,b){function d(){f.readyState==4&&(delete h.xmlHttpRequest,(f.status===0||f.status==200)&&f.handleResp(),/^[45]/.test(f.status)&&f.handleError())}
/^(inner|outer|top|bottom|before|after)$/.test(a)||(b=c,c=a,a="inner");var e=b?b:{};if(typeof b=="function")e={},e.callback=b;var h=this,f=new XMLHttpRequest,b=e.method||"get",g=e.async||!1,i=e.data||null,j=0;f.queryString=i;f.open(b,c,g);if(e.headers)for(;j<e.headers.length;j++)f.setRequestHeader(e.headers[j].name,e.headers[j].value);f.handleResp=e.callback!=null?e.callback:function(){h.html(a,this.responseText)};f.handleError=e.error&&typeof e.error=="function"?e.error:function(){};if(g)f.onreadystatechange=
d,this.xmlHttpRequest=f;f.send(i);g||d();return this}});(function(a,c){function b(a,c,d){return(a+(c-a)*d).toFixed(3)}function d(a,c,b){for(var e=2,f,h,g=[],i=[];f=3,h=arguments[e-1],e--;)if(h.substr(0,1)=="r")for(h=h.match(/\d+/g);f--;)g.push(~~h[f]);else for(h.length==4&&(h="#"+h.substr(1,1)+h.substr(1,1)+h.substr(2,1)+h.substr(2,1)+h.substr(3,1)+h.substr(3,1));f--;)g.push(parseInt(h.substr(1+f*2,2),16));for(;f--;)e=~~(g[f+3]+(g[f]-g[f+3])*b),i.push(e<0?0:e>255?255:e);return"rgb("+i.join(",")+")"}
function e(a){var c=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(c)?{v:a,f:d,u:""}:{v:c,f:b,u:a}}function f(a){var c={},b=g.length,d;h.innerHTML='<div style="'+a+'"></div>';for(a=h.childNodes[0].style;b--;)if(d=a[g[b]])c[g[b]]=e(d);return c}var h=k.createElement("div"),g="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
c[a]=function(a,c,b,d){var a=typeof a=="string"?k.getElementById(a):a,b=b||{},h=f(c),c=a.currentStyle?a.currentStyle:getComputedStyle(a,null),g,i={},j=+new Date,n=b.duration||200,p=j+n,m,l=b.easing||function(a){return-Math.cos(a*Math.PI)/2+0.5};for(g in h)i[g]=e(c[g]);m=setInterval(function(){var c=+new Date,e=c>p?1:(c-j)/n;for(g in h)a.style[g]=h[g].f(i[g].v,h[g].v,l(e))+h[g].u;c>p&&(clearInterval(m),b.after&&b.after(),d&&setTimeout(d,1))},10)}})("emile",this)})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(f){Ur.initialize({type:"DOMContentLoaded"},f);Ur.loaded?Ur.initialize({type:"load"},f):window.addEventListener("load",function(g){Ur.initialize(g,f)},!1)},initialize:function(f,g){var e=f.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(g===void 0)g=document.body;for(var b in e)(new e[b]).initialize(g);if(f.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(f){f()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(f,g){if(f!==void 0){var e=f.length||0,b=0;if(typeof g=="function")for(;b<e;b++)g.call(g,f[b],b,f)}},offset:function(f){typeof(f=="undefined")&&(f=this[0]);for(cumulative_left=cumulative_top=0;f.offsetParent;)cumulative_top+=f.offsetTop,cumulative_left+=f.offsetLeft,f=f.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(f,g){return f.parentNode!=window.document?x$().find_set_ancestor(f.parentNode,g):null},find_set_ancestor:function(f,
g){var e=x$(f).attr("data-ur-set")[0];return e!==void 0?g==void 0?f:e==g?f:x$().find_next_ancestor(f,g):x$().find_next_ancestor(f,g)},get_unique_uranium_id:function(){var f=0;return function(){f+=1;return f}}(),find_elements:function(f,g){var e={};this.each(function(b,d,a){return function(){x$().helper_find(this,b,d,a)}}(f,g,e));return e},helper_find:function(f,g,e,b){x$(f).find("*[data-ur-"+g+"-component]").each(function(){var d=!0,a=x$(this).attr("data-ur-id")[0];if(a!==void 0)b[a]===void 0&&(b[a]=
{});else{var c=x$().find_set_ancestor(this,g);if(x$(c).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;c!==null?(a=x$(c).attr("data-ur-id")[0],a===void 0&&(a=x$().get_unique_uranium_id(),x$(c).attr("data-ur-id",a)),b[a]===void 0&&(b[a]={}),b[a].set=c):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),d=!1)}c=x$(this).attr("data-ur-"+g+"-component");c===void 0&&(d=!1);if(d)if(e!==void 0&&e[c]!==void 0)e[c](b[a],this,c);else b[a][c]=this});return b}};xui.extend(mixins);Ur.WindowLoaders.carousel=function(){function f(a){this.container=a.view_container;this.items=a.scroll_container;if(this.items.length==0)return console.log("Error -- carousel missing item components"),!1;this.button=a.button===void 0?{}:a.button;this.count=a.count;this.multi=x$(a.view_container).attr("data-ur-type")[0]=="multi";this.vertical_scroll=x$(a.set).attr("data-ur-vertical-scroll")[0]==="enabled";this.initialize();this.onSlideCallbacks=[]}function g(a){var a=x$(a),c=0;x$().iterate(["width",
"padding-left","padding-right","margin-left","margin-right","border-left-width","border-right-width"],function(b){c+=parseInt(a.getStyle(b))});return c}function e(a,c){a.style.webkitTransform="translate3d("+c+"px, 0px, 0px)"}function b(){}f.prototype={initialize:function(){var a=x$(this.container).attr("data-ur-touch")[0],a=a===void 0?!0:a=="enabled"?!0:!1;x$(this.container).attr("data-ur-touch",a?"enabled":"disabled");if(a)xui.touch?(this.touch=!0,x$(this.items).on("touchstart",function(a){return function(b){a.start_swipe(b)}}(this)),
x$(this.items).on("touchmove",function(a){return function(b){a.continue_swipe(b)}}(this)),x$(this.items).on("touchend",function(a){return function(b){a.finish_swipe(b)}}(this))):(this.touch=!1,x$(this.items).on("mousedown",function(a){return function(b){a.start_swipe(b)}}(this)),x$(this.items).on("mousemove",function(a){return function(b){a.continue_swipe(b)}}(this)),x$(this.items).on("mouseup",function(a){return function(b){a.finish_swipe(b)}}(this)));x$(this.button.prev).on("click",function(a){return function(){a.move_to(a.magazine_count)}}(this));
x$(this.button.next).on("click",function(a){return function(){a.move_to(-a.magazine_count)}}(this));this.item_index=0;this.magazine_count=1;this.adjust_spacing();this.update_index(0);this.jump_to_index=function(a){return function(b){a.__proto__.move_to_index.call(a,b)}}(this);window.setInterval(function(a){return function(){a.resize()}}(this),1E3)},get_transform:function(a){a=window.getComputedStyle(a).webkitTransform;return a!="none"?(a=new WebKitCSSMatrix(a),a.m41):(console.log("no webkit transform"),
0)},resize:function(){this.snap_width!=this.container.offsetWidth&&this.adjust_spacing()},adjust_spacing:function(){var a=this.container.offsetWidth;if(!(this.old_width!==void 0&&this.old_width==a)){this.old_width=a;var b=0,d=x$(this.items).find("[data-ur-carousel-component='item']");this.item_count=d.length;var f=0;x$().iterate(d,function(a){f+=g(a)});this.items.style.width=f+"px";this.snap_width=a;if(this.multi){var i=g(d[0]),n=Math.floor(a/i);this.magazine_count=n=n>this.item_count?this.item_count:
n;var m=a-n*i;this.snap_width=m/(n-1)+i;this.last_index=this.item_count-this.magazine_count}else this.last_index=this.item_count-1;this.item_index=this.last_index<this.item_index?this.last_index:this.item_index;b-=this.snap_width*this.item_index;e(this.items,b);var j=0;this.multi?(x$().iterate(d,function(a,b){var c=j;b!=0&&(c+=m/(n-1));e(a,c);j=c}),this.update_index(this.item_index)):x$().iterate(d,function(b,c){var f=j;c!=0&&(f+=a-d[c-1].offsetWidth);e(b,f);j=f})}},get_event_coordinates:function(a){if(this.touch){if(a.touches.length==
1)return{x:a.touches[0].clientX,y:a.touches[0].clientY}}else return{x:a.clientX,y:a.clientY};return null},update_buttons:function(){this.item_index==0?(x$(this.button.prev).attr("data-ur-state","disabled"),x$(this.button.next).attr("data-ur-state","enabled")):(this.item_index==this.last_index?x$(this.button.next).attr("data-ur-state","disabled"):x$(this.button.next).attr("data-ur-state","enabled"),x$(this.button.prev).attr("data-ur-state","enabled"))},get_new_index:function(a){a=this.item_index-a;
a>this.last_index?a=this.last_index:a<0&&(a=0);return a},update_index:function(a){if(a!==void 0){this.item_index=a;if(this.item_index<0)this.item_index=0;else if(this.item_index>this.last_index)this.item_index=this.last_index-1;if(this.count!==void 0)this.count.innerHTML=this.multi?this.item_index+1+" to "+(this.item_index+this.magazine_count)+" of "+this.item_count:this.item_index+1+" of "+this.item_count;x$(this.items).find("*[data-ur-carousel-component='item'][data-ur-state='active']").attr("data-ur-state",
"inactive");a=x$(this.items).find("*[data-ur-carousel-component='item']")[this.item_index];x$(a).attr("data-ur-state","active");this.update_buttons()}},start_swipe:function(a){this.touch_in_progress=!0;a=this.get_event_coordinates(a);if(a!==null){var b=this.get_transform(this.items);this.starting_offset=this.starting_offset===void 0||this.starting_offset===null?b:this.destination_offset;this.start_pos=a}this.click=!0},continue_swipe:function(a){this.vertical_scroll||(a.preventDefault(),a.stopPropagation());
if(this.touch_in_progress){a=this.get_event_coordinates(a);if(a!==null)this.end_pos=a,a=this.swipe_dist()+this.starting_offset,e(this.items,a);this.click=!1}},finish_swipe:function(a){if(!this.click)a.preventDefault(),a.stopPropagation(),this.touch_in_progress=!1,(!this.touch||a.touches.length==0)&&this.move_helper(this.get_displacement_index())},get_displacement_index:function(){var a=this.swipe_dist(),b=0;this.multi?(b=this.magazine_count,b=1/(1+Math.pow(Math.E,-1*a))*b-b/2<=0?Math.floor(1/(1+Math.pow(Math.E,
-1*a))*b-b/2):Math.ceil(1/(1+Math.pow(Math.E,-1*a))*b-b/2)):b=a/this.snap_width<=0?Math.floor(a/this.snap_width):Math.ceil(a/this.snap_width);return b},snap_to:function(a){this.destination_offset=a+this.starting_offset;a=-1*this.last_index*this.snap_width;if(this.destination_offset<a||this.destination_offset>0)this.destination_offset=Math.abs(this.destination_offset-a)<1?a:this.starting_offset;this.momentum()},move_to:function(a){if(!this.increment_flag)this.starting_offset=this.get_transform(this.items),
this.move_helper(a)},move_helper:function(a){var a=this.get_new_index(a),b=x$(this.items).find("*[data-ur-carousel-component='item']")[a],d=x$(this.items).find("*[data-ur-carousel-component='item']")[this.item_index],e=this.get_transform(d)-this.get_transform(b);this.snap_to(d.offsetLeft-b.offsetLeft+e);this.update_index(a)},move_to_index:function(a){this.move_to(this.item_index-a)},momentum:function(){if(!this.touch_in_progress){this.increment_flag=!1;var a=this.get_transform(this.items),b=this.destination_offset-
a;b-=b/1.1>=0?Math.floor(b/1.1):Math.ceil(b/1.1);Math.abs(b)<0.01&&(b=0);e(this.items,b+a);if(b!=0)this.increment_flag=!0;this.increment_flag?setTimeout(function(a){return function(){a.momentum()}}(this),16):(this.starting_offset=null,x$().iterate(this.onSlideCallbacks,function(a){a()}))}},swipe_dist:function(){if(this.end_pos===void 0)return 0;return this.end_pos.x-this.start_pos.x}};var d={button:function(a,b,d){a.button===void 0&&(a.button={});d=x$(b).attr("data-ur-carousel-button-type")[0];d===
void 0&&console.log("Uranium declaration error: Malformed carousel button type on:"+b.outerHTML);a.button[d]=b;d=="prev"?x$(b).attr("data-ur-state","disabled"):x$(b).attr("data-ur-state","enabled")}};b.prototype.initialize=function(a){a=x$(a).find_elements("carousel",d);Ur.Widgets.carousel={};for(var b in a){var e=a[b];Ur.Widgets.carousel[b]=new f(e);x$(e.set).attr("data-ur-state","enabled")}};return b}();Ur.QuickLoaders["font-resizer"]=function(){function f(e){this.increase=e.increase;this.decrease=e.decrease;this.label=e.label;this.content=e.content;this.initialize()}function g(){}f.prototype.initialize=function(){var e=x$(this.content);this.min=parseInt(e.attr("data-ur-font-resizer-min"))||100;this.max=parseInt(e.attr("data-ur-font-resizer-max"))||200;this.delta=parseInt(e.attr("data-ur-font-resizer-delta"))||20;this.size=parseInt(e.attr("data-ur-font-resizer-size"))||this.min;this.invert=e.attr("data-ur-font-resizer-invert")==
"Bam!"?!0:!1;x$(this.increase).click(function(b){return function(){b.change(1)}}(this));x$(this.decrease).click(function(b){return function(){b.change(-1)}}(this));if(this.invert)this.size=this.min,this.controlSize=this.max,this.increase.style["font-size"]=this.controlSize+"%",this.decrease.style["font-size"]=this.controlSize+"%",this.label.style["font-size"]=this.controlSize+"%";e[0].style["font-size"]=this.size+"%";x$(this.label).inner("Text Size: "+this.size+"%")};f.prototype.change=function(e){if(e==
-1&&this.size>this.min||e==1&&this.size<this.max)this.size+=e*this.delta,this.content.style["font-size"]=this.size+"%",this.label.innerText="Text Size: "+this.size+"%",this.invert&&(this.controlSize+=-e*this.delta,this.increase.style["font-size"]=this.controlSize+"%",this.decrease.style["font-size"]=this.controlSize+"%",this.label.style["font-size"]=this.controlSize+"%")};g.prototype.initialize=function(e){var e=x$(e).find_elements("font-resizer"),b;for(b in e)new f(e[b])};return g}();Ur.QuickLoaders.geocode=function(){function f(a){this.elements=a;this.callback=x$(this.elements.set).attr("data-ur-callback")[0];UrGeocode=function(a){return function(){a.setup_callbacks()}}(this);a=document.createElement("script");a.type="text/javascript";a.src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=UrGeocode";x$("head").html("bottom",a)}function g(b,d,e){var f=0,g=null,m=null,j=null;switch(b){case "rg-city":m="locality";break;case "rg-street":m="street_number";break;case "rg-zip":m=
"postal_code";break;case "rg-state":m="administrative_area_level_1";break;case "rg-country":m="country"}for(var j=d[0],p=null,o=j.address_components.length,l=0;l<o;l++)for(var t=j.address_components[l].types.length,q=0;q<t;q++)if(p=j.address_components[l].types[q],m==p){switch(p){case "street_number":f=l;g=l+1;break;case "locality":f=l;break;case "postal_code":f=l;break;case "administrative_area_level_1":f=l;break;case "country":f=l}break}if(e==="input")a.elements[b].value=g===null?d[0].address_components[f].long_name:
d[0].address_components[f].long_name+" "+d[0].address_components[g].long_name;else if(e==="select"){b=a.elements[b];d=d[0].address_components[f];f=0;for(e=b.length;f<e;f++)if(b[f].value===d.long_name||b[f].value.toUpperCase()===d.short_name)b.selectedIndex=f}}function e(){}var b,d,a;f.prototype={setup_callbacks:function(){a=this;if(this.elements["rg-button"])x$(this.elements["rg-button"]).on("click",function(a){return function(){a.geocode()}}(this));else console.warn("Ur warning -- no button for triggering reverse geocoding present"),
a.geocode()},geoSuccess:function(a){a={lat:a.coords.latitude,lng:a.coords.longitude};this.codeLatLng(a.lat,a.lng)},geoError:function(a){console.error("Ur geolocation error -- Error Getting Your Coordinates!");switch(a.code){case a.TIMEOUT:console.error("Ur geolocation error -- Timeout");break;case a.POSITION_UNAVAILABLE:console.error("Ur geolocation error -- Position unavailable");break;case a.PERMISSION_DENIED:console.error("Ur geolocation error -- Permission denied");break;case a.UNKNOWN_ERROR:console.error("Ur geolocation error -- Unknown error")}},
geoDenied:function(){console.error("Ur geolocation error -- User Denied Geolocation")},codeLatLng:function(c,e){var f=new google.maps.LatLng(c,e),i=this;b.geocode({latLng:f},function(b,c){if(c==google.maps.GeocoderStatus.OK)if(b[1]){d=b;var e=a.elements;for(elm in e)e[elm].localName==="input"?g(elm,d,"input"):g(elm,d,"select");i.callback!==void 0&&eval(i.callback);return b}else console.error("Geocoder failed due to: "+c)})},geocode:function(){navigator.geolocation&&(b=new google.maps.Geocoder,navigator.geolocation.getCurrentPosition(function(a){return function(b){a.geoSuccess(b)}}(this),
this.geoError,this.geoDenied))}};e.prototype.initialize=function(a){a=x$(a).find_elements("reverse-geocode");Ur.Widgets.geocode={};for(var b in a){Ur.Widgets.geocode[b]=new f(a[b]);break}};return e}();Ur.QuickLoaders.map=function(){function f(b,a){this.threshold=b;this.count=0;this.callbacks=[];a!==void 0&&this.callbacks.push(a)}function g(b){this.elements=b;this.fetch_map()}function e(){}f.prototype.finish=function(){this.count+=1;if(this.count==this.threshold)for(var b=this.callbacks.pop();b;)b(),b=this.callbacks.pop()};g.prototype={marker_clicked:function(b,a){x$().iterate(this.elements.descriptions,function(b,d){d==a?x$(b).attr("data-ur-state","enabled"):x$(b).attr("data-ur-state","disabled")})},
fetch_coordinates:function(){this.coordinates=[];this.center=[0,0];this.lat_range={};this.lng_range={};var b=new google.maps.Geocoder,a=this,c=new f(this.elements.addresses.length,function(a){return function(){a.setup_map()}}(this));x$(this.elements.addresses).each(function(e,f){var e=e.innerText,g=e.match(/(\S.*\S)[$\s]/m)[1];g==void 0&&(g=e);b.geocode({address:g},function(b,d){var g=null;if(d===google.maps.GeocoderStatus.OK){g=b[0].geometry.location;a.coordinates[f]=g;a.center[0]+=g.lat();a.center[1]+=
g.lng();var g=b[0].geometry.viewport.getNorthEast(),i=b[0].geometry.viewport.getSouthWest();if(a.lat_range.min&&a.lat_range.min>i.lat()||a.lat_range.min===void 0)a.lat_range.min=i.lat();if(a.lat_range.max&&a.lat_range.max<i.lat()||a.lat_range.max===void 0)a.lat_range.max=g.lat();if(a.lng_range.min&&a.lng_range.min>i.lng()||a.lng_range.min===void 0)a.lng_range.min=i.lng();if(a.lng_range.max&&a.lng_range.max<i.lng()||a.lng_range.max===void 0)a.lng_range.max=g.lng();c.finish()}else console.error("Error geocoding address: "+
e)})})},add_coordinates:function(){var b=this,a=x$(this.elements.icon).attr("data-ur-url")[0],c=x$(this.elements.icon).attr("data-ur-width")[0],e=x$(this.elements.icon).attr("data-ur-height")[0],f=null;c!==void 0&&e!==void 0&&(f=new google.maps.Size(parseInt(c),parseInt(e)));x$().iterate(b.coordinates,function(c,e){var g=null;a!==void 0&&(g=new google.maps.MarkerImage(a,null,null,null,f));g=new google.maps.Marker({position:c,map:b.map,icon:g});google.maps.event.addListener(g,"click",function(a){return function(c){b.marker_clicked(c,
a)}}(e))})},setup_user_location:function(){var b=this.elements.user_location;this.user_location_marker=null;if(b!==void 0){var a=this;x$(b).on("click",function(){a.toggle_user_location()});x$(b).attr("data-ur-state")[0]==="enabled"&&this.fetch_user_location()}},fetch_user_location:function(){var b=function(a){return function(b){a.add_user_location(b)}}(this);navigator.geolocation?navigator.geolocation.getCurrentPosition(b,function(){console.error("Ur : Error getting user location")}):console.error("Ur : Geolocation services not available")},
add_user_location:function(b){b=new google.maps.LatLng(b.coords.latitude,b.coords.longitude);this.user_location_marker=new google.maps.Marker({position:b,map:this.map,icon:"//s3.amazonaws.com/moovweb-live-resources/map/dot-blue.png"});x$(this.elements.user_location).attr("data-ur-state","enabled")},toggle_user_location:function(){this.user_location_marker===null||this.user_location_marker===void 0?this.fetch_user_location():(this.user_location_marker.setMap(null),delete this.user_location_marker,
x$(this.elements.user_location).attr("data-ur-state","disabled"))},fetch_map:function(){var b=document.createElement("script");setup_uranium_map=function(a){return function(){a.fetch_coordinates()}}(this);b.src="http://maps.googleapis.com/maps/api/js?sensor=true&callback=setup_uranium_map";this.elements.set.appendChild(b)},setup_map:function(){this.center[0]/=this.elements.addresses.length;this.center[1]/=this.elements.addresses.length;var b={center:new google.maps.LatLng(this.center[0],this.center[1]),
mapTypeId:google.maps.MapTypeId.ROADMAP};this.map=new google.maps.Map(this.elements.canvas,b);var b=new google.maps.LatLng(this.lat_range.min,this.lng_range.min),a=new google.maps.LatLng(this.lat_range.max,this.lng_range.max);this.map.fitBounds(new google.maps.LatLngBounds(b,a));this.add_coordinates();this.setup_user_location()}};var b={address:function(b,a){b.addresses===void 0&&(b.addresses=[]);b.addresses.push(a)},description:function(b,a){b.descriptions===void 0&&(b.descriptions=[]);b.descriptions.push(a)}};
e.prototype.initialize=function(d){d=x$(d).find_elements("map",b);Ur.Widgets.map={};for(var a in d){Ur.Widgets.map[a]=new g(d[a]);break}};return e}();Ur.QuickLoaders["select-buttons"]=function(){function f(e){this.select=e.select;this.increment=e.increment;this.decrement=e.decrement;this.initialize()}function g(){}f.prototype.initialize=function(){x$(this.increment).click(function(e){return function(b){e.trigger_option(b,1)}}(this));x$(this.decrement).click(function(e){return function(b){e.trigger_option(b,-1)}}(this))};f.prototype.trigger_option=function(e,b){if(x$(e.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var d={},a=this.select.value,
c={prev:null,next:null};x$().iterate(this.select.children,function(b,e){x$(b).attr("value")[0]==a&&(d={element:b,index:e});typeof d.index=="undefined"&&(c.prev=x$(b).attr("value")[0]);e==d.index+1&&(c.next=x$(b).attr("value")[0])});var f=this.select.children.length,g=d.index+b;g==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");g==f-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(g<
0||g==f)return!1;this.select.value=c[b==1?"next":"prev"];return!0};g.prototype.initialize=function(e){var e=x$(e).find_elements("select-buttons"),b;for(b in e)new f(e[b]),x$(e[b].set).attr("data-ur-state","enabled")};return g}();Ur.QuickLoaders["select-list"]=function(){function f(e,b){this.select=e;this.list=b;this.initialize()}function g(){this.SelectLists={}}f.prototype.initialize=function(){x$(this.list).click(function(e){return function(b){e.trigger_option(b)}}(this))};f.prototype.trigger_option=function(e){var b=e.target,d="";x$().iterate(this.list.children,function(a){a==b?(x$(a).attr("data-ur-state","enabled"),d=x$(a).attr("value")):x$(a).attr("data-ur-state","disabled")});this.select.value=d;return!0};g.prototype.initialize=
function(e){var e=x$(e).find_elements("select-list"),b;for(b in e){var d=e[b];this.SelectLists[b]=new f(e[b].select,e[b].content);x$(d.set).attr("data-ur-state","enabled")}};return g}();Ur.QuickLoaders.tabs=function(){function f(b){this.elements=b;this.setup_callbacks()}function g(){}f.prototype.setup_callbacks=function(){var b=null,d;for(d in this.elements.buttons){var a=this.elements.buttons[d],c=this.elements.contents[d];b===null&&(b=d);if(c===void 0){console.log("Ur error -- no matching tab content for tab button");break}c=x$(a).attr("data-ur-state")[0];c!==void 0&&c=="enabled"&&(b=-1);var e=x$(this.elements.set).attr("data-ur-closeable")[0],e=e!==void 0&&e=="true"?!0:!1;console.log("closeable? "+
e);var f=this;x$(a).on("click",function(a){var a=x$(a.target).attr("data-ur-tab-id")[0],b;for(b in f.elements.buttons){var c=f.elements.buttons[b],d=f.elements.contents[b];if(b!==a)x$(c).attr("data-ur-state","disabled"),x$(d).attr("data-ur-state","disabled");else{var g="enabled";e&&(g=x$(c).attr("data-ur-state")[0],g=g===void 0?"disabled":g,g=g=="enabled"?"disabled":"enabled");x$(c).attr("data-ur-state",g);x$(d).attr("data-ur-state",g)}}})}};var e={button:function(b,d){b.buttons===void 0&&(b.buttons=
{});var a=x$(d).attr("data-ur-tab-id")[0];a===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):b.buttons[a]=d},content:function(b,d){b.contents===void 0&&(b.contents={});var a=x$(d).attr("data-ur-tab-id")[0];a===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):b.contents[a]=d}};g.prototype.initialize=function(b){b=x$(b).find_elements("tabs",e);Ur.Widgets.tabs={};for(var d in b)Ur.Widgets.tabs[d]=new f(b[d])};return g}();Ur.QuickLoaders.toggler=function(){function f(e,b){e.content===void 0&&(e.content=[]);e.content.push(b)}function g(){this.component_constructors={content:f}}g.prototype.find=function(e){var e=x$(e).find_elements("toggler",this.component_constructors),b;for(b in e){var d=e[b];if(d.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+b);else{var a=x$(d.button).attr("data-ur-state")[0];a===void 0&&(x$(d.button).attr("data-ur-state","disabled"),a="disabled");d.content===
void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+b):x$().iterate(d.content,function(b){x$(b).attr("data-ur-state")[0]===void 0&&x$(b).attr("data-ur-state",a)})}}return e};g.prototype.construct_button_callback=function(e,b){return function(d){var d=d.currentTarget,a=x$(d).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(d).attr("data-ur-state",a);x$(b).attr("data-ur-state",a);x$().iterate(e,function(a){var b=x$(a).attr("data-ur-state")[0]==="enabled"?
"disabled":"enabled";x$(a).attr("data-ur-state",b)})}};g.prototype.initialize=function(e){var e=this.find(e),b;for(b in e){var d=e[b];x$(d.button).click(this.construct_button_callback(d.content,d.set));x$(d.set).attr("data-ur-state","enabled")}};return g}();Ur.QuickLoaders["zoom-preview"]=function(){function f(b){this.elements=b.elements;this.modifier={};if(b.modifier!==null)this.modifier=b.modifier;this.dimensions={};this.zoom=!1;this.update();this.events={start:"touchstart",move:"touchmove",end:"touchend"};this.touch=xui.touch;if(!this.touch)this.events={move:"mousemove",end:"mouseout"};this.initialize();console.log("Zoom Preview Loaded")}function g(){}f.prototype.rewrite_images=function(b,d,a){if(typeof b=="undefined")return!1;if(d===void 0&&a===
void 0)d=this.modifier.zoom_image.match,a=this.modifier.zoom_image.replace;this.elements.zoom_image.src=b.replace(d,a);d=a=null;if(this.modifier.button)d=this.modifier.button.match,a=this.modifier.button.replace;this.elements.button.src=d&&a?this.elements.zoom_image.src.replace(d,a):this.elements.zoom_image.src;var c=this;this.elements.zoom_image.style.visibility="hidden";x$(this.elements.zoom_image).on("load",function(){c.update()});x$(this.elements.button).on("load",function(){x$(c.elements.button).addClass("loaded")})};
f.prototype.update=function(){var b=this;x$().iterate(["button","zoom_image","container"],function(a){b.dimensions[a]=[b.elements[a].offsetWidth,b.elements[a].offsetHeight]});var d=x$(this.elements.button).offset(),d=[d.left,d.top];this.button_center=[this.dimensions.button[0]/2+d[0],this.dimensions.button[1]/2+d[1]];this.image_origin=[-0.5*this.dimensions.zoom_image[0],-0.5*this.dimensions.zoom_image[1]]};f.prototype.get_event_coordinates=function(b){if(this.touch){if(b.touches.length==1)return[b.touches[0].pageX,
b.touches[0].pageY]}else return[b.pageX,b.pageY]};f.prototype.initialize=function(){x$(this.elements.button).on(this.events.move,function(b){return function(d){b.scroll_zoom(d)}}(this));x$(this.elements.button).on(this.events.end,function(b){return function(d){b.scroll_end(d)}}(this));if(this.events.start)x$(this.elements.button).on("touchstart",function(){return function(b){b.preventDefault()}}(this));x$(this.elements.thumbnails).click(function(b){return function(d){if(d.target.tagName!="IMG")return!1;
b.rewrite_images(d.target.src)}}(this));this.normal_image_changed()};f.prototype.normal_image_changed=function(b){b!==void 0&&(this.elements.normal_image=b);img=x$(this.elements.normal_image);this.rewrite_images(img.attr("src")[0],this.modifier.normal_image.match,this.modifier.normal_image.replace)};f.prototype.scroll_end=function(){this.elements.zoom_image.style.visibility="hidden"};f.prototype.scroll_zoom=function(b){this.elements.zoom_image.style.visibility="visible";b=this.get_event_coordinates(b);
if(b===null)return!1;b=[(b[0]-this.button_center[0])/this.dimensions.button[0],(b[1]-this.button_center[1])/this.dimensions.button[1]];b=[this.dimensions.zoom_image[0]*b[0],this.dimensions.zoom_image[1]*b[1]];b=[this.image_origin[0]-b[0],this.image_origin[1]-b[1]];b=this.check_bounds(b);this.elements.zoom_image.style.webkitTransform="translate3d("+b[0]+"px,"+b[1]+"px,0px)"};f.prototype.check_bounds=function(b){var d=[this.dimensions.container[0]-this.dimensions.zoom_image[0],this.dimensions.container[1]-
this.dimensions.zoom_image[1]];x$().iterate([0,1],function(a){b[a]>=0&&(b[a]=0);b[a]<=d[a]&&(b[a]=d[a])});return b};var e={_modifiers:function(b,d,a,c){b.modifier===void 0&&(b.modifier={});var e=c===void 0?"src":"zoom";console.log("searching for modifier:",e,d);c=x$(d).attr("data-ur-"+e+"-modifier-match")[0];d=x$(d).attr("data-ur-"+e+"-modifier-replace")[0];typeof c!="undefined"&&typeof d!="undefined"&&(console.log("found modifiers:",c,d),b.modifier[a]={match:RegExp(c),replace:d})},_construct:function(b,
d,a,c){b.elements===void 0&&(b.elements={});b.elements[a]=d;this._modifiers(b,d,a,c)},normal_image:function(b,d,a){this._construct(b,d,a,"zoom")},zoom_image:function(b,d,a){this._construct(b,d,a)},button:function(b,d,a){this._construct(b,d,a)},container:function(b,d,a){this._construct(b,d,a)},thumbnails:function(b,d,a){this._construct(b,d,a)}};g.prototype.initialize=function(b){this.zoom_previews=x$(b).find_elements("zoom-preview",e);Ur.Widgets["zoom-preview"]={};for(var d in this.zoom_previews)Ur.Widgets["zoom-preview"][d]=
new f(this.zoom_previews[d]),x$(this.zoom_previews[d].set).attr("data-ur-state","enabled")};return g}();
