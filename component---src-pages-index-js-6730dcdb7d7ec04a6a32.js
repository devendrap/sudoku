(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3niX":function(e,t,r){"use strict";r("AqHK"),r("pS08"),t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var n,i=r("q1tI");var o=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),s=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).prevProps={},r}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.dynamic=function(e){return e.map((function(e){var t=e[0],r=e[1];return o.computeId(t,r)})).join(" ")};var i=n.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},n}(i.Component);t.default=s},"8oxB":function(e,t){var r,n,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var a,l=[],c=!1,f=-1;function h(){c&&a&&(c=!1,a.length?l=a.concat(l):f=-1,l.length&&d())}function d(){if(!c){var e=u(h);c=!0;for(var t=l.length;t;){for(a=l,l=[];++f<t;)a&&a[f].run();f=-1,t=l.length}a=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||u(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},HXzo:function(e,t,r){"use strict";r("EU/P")("trim",(function(e){return function(){return e(this,3)}}))},MX0m:function(e,t,r){e.exports=r("3niX")},RXBc:function(e,t,r){"use strict";r.r(t);r("Ll4R"),r("sPse"),r("sC2a"),r("n0hJ");var n=r("MX0m"),i=r.n(n),o=r("q1tI"),s=r.n(o),u=r("Bl7J"),a=r("vrFN");t.default=function(){var e=Object(o.useState)(Array(9).fill().map((function(){return Array(9).fill(0)}))),t=e[0],r=e[1],n=Object(o.useState)("Click a cell and press number key to fill number in that cell. Use Space or Escape to remove."),l=n[0],c=n[1],f=Object(o.useState)(!1),h=f[0],d=(f[1],Object(o.useState)(1)),p=d[0],m=d[1],v={type:"",num:0,count:0},y={row:-1,col:-1,value:0,seq:p,auto:h},_=new Array(10),g=new Array(10),w=new Array(10),S=0,x=0,b=0,k=0,R=0,A=0,C=0,F=0,T=0,j=0,z=0,E=new Array(200),I=new Array(200),N=new Array(200),O=new Array(85),B=0,M=0,q=Array(9).fill().map((function(){return Array(9).fill(0)}));function P(e){var t=parseInt(e.target.parentNode.getAttribute("name").replace("row",""));return parseInt(t-1)}function J(e){var t=parseInt(e.target.getAttribute("name").replace("col",""));return parseInt(t-1)}function L(e){var t=P(e),r=J(e);t,r}function H(){var e;S=0,x=0,b=0,k=0,R=0,A=0,C=0,F=0;var t=0;do{_[t]=0,g[t]=0,w[t]=0,t+=1}while(t<10);var r=1;do{var n=1;do{var i=Z(n,r);""!=W(n,r)&&(_[n]=_[n]+1,g[r]=g[r]+1,w[i]=w[i]+1),n+=1}while(n<10);r+=1}while(r<10);n=0;do{9!=_[n]&&_[n]>S&&(S=_[n],x=n),9!=g[n]&&g[n]>b&&(b=g[n],k=n),9!=w[n]&&w[n]>R&&(R=w[n],A=n),n+=1}while(n<9);if(F=0,S>(C=0)&&(C=S,F=1),b>C&&(C=b,F=2),R>C&&(C=R,F=3),0==C&&(C=0,F=0,M=1),1==F){r=0;do{if(""==W(x,r)){e=1;do{if("1"==X(e)&&""==D(x,r,e))return E[z+=1]=x,I[z]=r,N[z]=e,K(x,r,e),B+=1,"";if(9==e)return U(),"";e+=1}while(e<10)}r+=1}while(r<10)}if(2==F){n=0;do{if(""==W(n,k)){e=1;do{if("1"==X(e)&&""==D(n,k,e))return E[z+=1]=n,I[z]=k,N[z]=e,K(n,k,e),B+=1,"";if(9==e){U();return""}e+=1}while(e<10)}n+=1}while(n<10)}if(3==F){var o=1;do{if(e=G(A,o),""==W(T,j)){e=1;do{if("1"==X(e)&&""==D(T,j,e))return E[z+=1]=T,I[z]=j,N[z]=e,K(T,j,e),B+=1,"";if(9==e)return U(),"";e+=1}while(e<10)}o+=1}while(o<10)}return""}function U(){K(E[z],I[z],""),1==isNaN(O[z])&&(O[z]=0),""==O[z]&&(O[z]=0),O[z]=10*O[z]+N[z];var e=1;do{O[z+e]=0,e+=1}while(e<85-z);E[z]="",I[z]="",N[z]="",z,z-=1}function X(e){if(1==isNaN(O[z+1]))return"1";var t=String(O[z+1]),r=String(e);return-1==t.search(r)?"1":"0"}function G(e,t){var r,n,i;return T=0,j=0,n=e-3*(r=Math.ceil(e/3)-1)-1,i=Math.ceil(t/3)-1,T=3*r+i+1,j=3*n+(t-3*i-1)+1,""}function Z(e,t){return 1==e&&1==t||1==e&&2==t||1==e&&3==t?"1":1==e&&4==t||1==e&&5==t||1==e&&6==t?"2":1==e&&7==t||1==e&&8==t||1==e&&9==t?"3":2==e&&1==t||2==e&&2==t||2==e&&3==t?"1":2==e&&4==t||2==e&&5==t||2==e&&6==t?"2":2==e&&7==t||2==e&&8==t||2==e&&9==t?"3":3==e&&1==t||3==e&&2==t||3==e&&3==t?"1":3==e&&4==t||3==e&&5==t||3==e&&6==t?"2":3==e&&7==t||3==e&&8==t||3==e&&9==t?"3":4==e&&1==t||4==e&&2==t||4==e&&3==t?"4":4==e&&4==t||4==e&&5==t||4==e&&6==t?"5":4==e&&7==t||4==e&&8==t||4==e&&9==t?"6":5==e&&1==t||5==e&&2==t||5==e&&3==t?"4":5==e&&4==t||5==e&&5==t||5==e&&6==t?"5":5==e&&7==t||5==e&&8==t||5==e&&9==t?"6":6==e&&1==t||6==e&&2==t||6==e&&3==t?"4":6==e&&4==t||6==e&&5==t||6==e&&6==t?"5":6==e&&7==t||6==e&&8==t||6==e&&9==t?"6":7==e&&1==t||7==e&&2==t||7==e&&3==t?"7":7==e&&4==t||7==e&&5==t||7==e&&6==t?"8":7==e&&7==t||7==e&&8==t||7==e&&9==t?"9":8==e&&1==t||8==e&&2==t||8==e&&3==t?"7":8==e&&4==t||8==e&&5==t||8==e&&6==t?"8":8==e&&7==t||8==e&&8==t||8==e&&9==t?"9":9==e&&1==t||9==e&&2==t||9==e&&3==t?"7":9==e&&4==t||9==e&&5==t||9==e&&6==t?"8":9==e&&7==t||9==e&&8==t||9==e&&9==t?"9":void 0}function D(e,t,r){var n="";if(""==n&&""==(n=function(e,t,r){var n=1,i=1;do{if(i!=t&&W(e,i)==r){n=0;break}i+=1}while(i<10);return 1==n?"":"0"}(e,t,r))&&""==(n=function(e,t,r){var n=1,i=1;do{if(i!=e&&W(i,t)==r){n=0;break}i+=1}while(i<10);return 1==n?"":"0"}(e,t,r))&&(n=function(e,t,r){var n,i,o,s,u,a,l;1!=e&&2!=e&&3!=e||(n=1),4!=e&&5!=e&&6!=e||(n=4),7!=e&&8!=e&&9!=e||(n=7),1!=t&&2!=t&&3!=t||(i=1),4!=t&&5!=t&&6!=t||(i=4),7!=t&&8!=t&&9!=t||(i=7),o=1,s=0;do{a=n+s,u=0;do{if((l=i+u)!=t&&a!=e&&W(a,l)==r){o=0;break}u+=1}while(u<3);s+=1}while(s<3);return 1==o?"":"0"}(e,t,r)),""==n)return n}function K(e,t,r){e>0&&e<10&&t>0&&t<10&&(q[e-1][t-1]=r)}function W(e,t){if(e>0&&e<10&&t>0&&t<10)return q[e-1][t-1]}function V(e,r,n){var i=!0;if(i&&(-1!==t[e].indexOf(n)&&(i=!1),i&&(-1!==t[0].map((function(e,r){return t.map((function(e){return e[r]}))})).slice()[r].indexOf(n)&&(i=!1),i)))for(var o=3*Math.floor(e/3),s=o+2,u=3*Math.floor(r/3),a=u+2,l=o;l<=s;l++)for(var c=u;c<=a;c++)if(t[l][c]===n){i=!1;break}return i}function Y(){var e={r:y.row,c:y.col,value:y.value,auto:h,seq:p};m((function(e){return e+1})),r((function(t){return t[e.r][e.c]=e.value,t}))}function $(e,t,r){var n=!1,i=0;if("Escape"===e||" "===e?n=!0:null!==e.match(/^[1-9]$/)&&(n=!0,i=parseInt(e)),n){var o=!0;0!==i&&(o=V(t,r,i)),o||(i=0,c((function(t){return"Invalid key entered: "+e})),setTimeout((function(){c((function(e){return"None"}))}),1e3)),y.row=t,y.col=r,y.value=i,h||Y()}}function Q(){for(var e=["flex-container flex-container-top","flex-container flex-container-middle","flex-container flex-container-middle","flex-container flex-container-middle-top","flex-container flex-container-middle","flex-container flex-container-middle","flex-container flex-container-middle-top","flex-container flex-container-middle","flex-container flex-container-bottom"],r=["double-left","","single-right","","","single-right","","","double-right"],n=[],i=0;i<9;i++){for(var o=[],u=0;u<9;u++){var a=0===t[i][u]?s.a.createElement(s.a.Fragment,null," "):t[i][u];o.push(s.a.createElement("div",{key:i+" "+(u+1),name:"col"+(u+1),tabIndex:"0",onClick:function(e){return L(e)},onKeyDown:function(e){return $(e.key,P(e),J(e))},className:r[u]},a))}n.push(s.a.createElement("div",{key:"row"+(i+1),name:"row"+(i+1),className:e[i]},o))}return n}return Object(o.useEffect)((function(){h&&p<45&&(console.log("----------- START "+p+" -----------"),function(){v={type:"",num:0,count:0};for(var e=Array(9).fill(0),r=Array(9).fill(0),n=Array(9).fill(0),i=0;i<9;i++)for(var o=0;o<9;o++){e[i]+=0!==t[i][o]?1:0,r[o]+=0!==t[i][o]?1:0;var s=3*Math.floor(i/3)+Math.floor(o/3);n[s]+=0!==t[i][o]?1:0}for(var u=0;u<9;u++)e[u]>v.count&&e[u]<9&&(v={type:"row",num:u,count:e[u]}),r[u]>v.count&&r[u]<9&&(v={type:"col",num:u,count:r[u]}),n[u]>v.count&&n[u]<9&&(v={type:"square",num:u,count:n[u]});console.log("seq: "+p+",  max: "+JSON.stringify(v))}(),function(){(function(){for(var e=!1,r=0;r<9;r++)if("row"===v.type){if(0===t[v.num][r]){y.row=v.num,y.col=r,e=!0;break}}else if("col"===v.type){if(0===t[r][v.num]){y.row=r,y.col=v.num,e=!0;break}}else if("square"===v.type){var n=3*Math.floor(v.num/3)+Math.floor(r/3),i=v.num%3*3+r%3;if(0===t[n][i]){y.row=n,y.col=i,e=!0;break}}})(),y.value=0;for(var e=[],r=1;r<=9;r++)V(y.row,y.col,r)&&(e.push(r),0===y.value&&(y.value=r));0!==y.value?console.log("Filling",y.value,"in row col:",JSON.stringify(y)):(console.log("%cNo values can be filled. Need to go back.","color: red"),console.log("emptyRowCol: "+JSON.stringify(y),"possible",e))}(),Y())})),s.a.createElement(u.a,null,s.a.createElement(a.a,{title:"Home"}),s.a.createElement("div",{className:"jsx-2616218593"},s.a.createElement("div",{style:{float:"left",fontSize:"30px"},className:"jsx-2616218593"},s.a.createElement(Q,{className:"jsx-2616218593"})),s.a.createElement("div",{style:{marginTop:"1vw",marginLeft:"50vw"},className:"jsx-2616218593"},"Message: ",l),s.a.createElement("button",{style:{marginTop:"1vw",marginLeft:"5vw"},onClick:function(){return $("8",0,0),$("3",1,2),$("6",1,3),$("7",2,1),$("9",2,4),$("2",2,6),$("5",3,1),$("7",3,5),$("4",4,4),$("5",4,5),$("7",4,6),$("1",5,3),$("3",5,7),$("1",6,2),$("6",6,7),$("8",6,8),$("8",7,2),$("5",7,3),$("1",7,7),$("9",8,1),void $("4",8,6)},className:"jsx-2616218593"},"Load Sample"),s.a.createElement("button",{style:{marginTop:"1vw",marginLeft:"5vw"},onClick:function(){return function(){q=[];for(var e=0;e<t.length;e++)q[e]=t[e].slice();do{H(),1}while(1!=M);if(0===q[8][8])for(e=1;e<10;e++)if(-1===q[8].indexOf(e)){q[8][8]=e;break}return r((function(e){return q})),c((function(e){return"It took "+B+" iterations to solve the problem"})),""}()},className:"jsx-2616218593"},"Solve"),s.a.createElement("button",{style:{marginTop:"1vw",marginLeft:"5vw"},onClick:function(){return M=0,B=0,q=Array(9).fill().map((function(){return Array(9).fill(0)})),r((function(e){return q})),void c((function(e){return""}))},className:"jsx-2616218593"},"Reset"),s.a.createElement(i.a,{id:"3697373088"},[]),s.a.createElement(i.a,{id:"2118994088"},[".flex-container{width:45vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;background-color:black;cursor:pointer;}",".flex-container>div:hover{background-color:lightcyan;}",".flex-container>div{background-color:#f1f1f1;width:33vw;text-align:center;line-height:5vw;}",".test{fontSizeAdjust:2;font-size:30px;}",".flex-container>div:focus{color:blue;background-color:yellow;}",".flex-container-top>div{margin:2px 0.5px 0.5px 0.5px;}",".flex-container-middle-top>div{margin:1.5px 0.5px 0.5px 0.5px;}",".flex-container-middle>div{margin:0.5px;}",".flex-container-bottom>div{margin:0.5px 0.5px 2px 0.5px;}",".double-left{margin-left:2px !important;}",".double-right{margin-right:2px !important;}",".single-right{margin-right:1.5px !important;}",".double-bottom{margin-bottom:2px !important;}"])),s.a.createElement("br",null))}},SevZ:function(e,t,r){"use strict";r("JHok"),r("AqHK"),r("OeI1"),r("rzGZ"),r("Dq+y"),r("8npG"),r("Ggvi"),r("U6Bt"),r("MIFh"),r("sC2a"),t.__esModule=!0,t.default=void 0;var n=o(r("9kyW")),i=o(r("bVZc"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,r=t.styleSheet,n=void 0===r?null:r,o=t.optimizeForSpeed,s=void 0!==o&&o,u=t.isBrowser,a=void 0===u?"undefined"!=typeof window:u;this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=o,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(r in this._instancesCounts,"styleId: `"+r+"` not found"),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[r]),delete this._instancesCounts[r]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return r[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,r){if(!r)return"jsx-"+t;var i=String(r),o=t+i;return e[o]||(e[o]="jsx-"+(0,n.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}},t.getIdAndRules=function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var o=this.computeId(i,n);return{styleId:o,rules:Array.isArray(r)?r.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},"Y++M":function(e,t,r){"use strict";var n=r("DFzH"),i=r("dTG6"),o=r("kiRH");e.exports=function(e){for(var t=n(this),r=o(t.length),s=arguments.length,u=i(s>1?arguments[1]:void 0,r),a=s>2?arguments[2]:void 0,l=void 0===a?r:i(a,r);l>u;)t[u++]=e;return t}},bVZc:function(e,t,r){"use strict";(function(e){function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}r("AqHK"),r("U6Bt"),r("JHok"),r("HXzo"),r("pJf4"),r("q8oJ"),r("C9fy"),r("8npG"),r("R48M"),t.__esModule=!0,t.default=void 0;var i=void 0!==e&&{}&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,r=t.name,n=void 0===r?"stylesheet":r,s=t.optimizeForSpeed,a=void 0===s?i:s,l=t.isBrowser,c=void 0===l?"undefined"!=typeof window:l;u(o(n),"`name` must be a string"),this._name=n,this._deletedRulePlaceholder="#"+n+"-deleted-rule____{}",u("boolean"==typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,r,s,a=e.prototype;return a.setOptimizeForSpeed=function(e){u("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(u(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(s){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var n=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,n))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),r.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];u(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,r){return r?t=t.concat(Array.prototype.map.call(e.getSheetForTag(r).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,r){t&&u(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return r?i.insertBefore(n,r):i.appendChild(n),n},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,r),s&&n(t,s),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,r("8oxB"))},n0hJ:function(e,t,r){var n=r("P8UN");n(n.P,"Array",{fill:r("Y++M")}),r("Dq1/")("fill")}}]);
//# sourceMappingURL=component---src-pages-index-js-6730dcdb7d7ec04a6a32.js.map