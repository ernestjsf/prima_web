(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},o={app:0},n={app:0},s=[];function i(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bbc5e5d1"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={about:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=new Promise((function(e,a){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"df9d360d"}[t]+".css",n=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===n))return e()}var m=document.getElementsByTagName("style");for(i=0;i<m.length;i++){c=m[i],u=c.getAttribute("data-href");if(u===r||u===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||n,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],f.parentNode.removeChild(f),a(s)},f.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var m=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;m.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",m.name="ChunkLoadError",m.type=r,m.request=o,a[1](m)}n[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var m=0;m<c.length;m++)e(c[m]);var f=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1533:function(t,e,a){},"2a5d":function(t,e,a){},"2cf6":function(t,e,a){"use strict";a("f46f")},4364:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("customFooter")],1)},n=[],s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"page-footer font-small mdb-color pt-4"},[a("div",{staticClass:"container text-center text-md-left"},[a("div",{staticClass:"row text-center text-md-left mt-3 pb-3"},[a("div",{staticClass:"col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"},[a("h6",{staticClass:"text-uppercase mb-4 font-weight-bold"},[t._v("PRIMA Future")]),a("p",[t._v("Building the future!")])]),a("hr",{staticClass:"w-100 clearfix d-md-none"}),a("div",{staticClass:"col-md-2 col-lg-2 col-xl-2 mx-auto mt-3"},[a("h6",{staticClass:"text-uppercase mb-4 font-weight-bold"},[t._v("Services")]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Academy")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Video Production")])]),a("p",[a("a",{attrs:{href:"#!"}},[t._v("Sound Production")])])]),a("hr",{staticClass:"w-100 clearfix d-md-none"}),a("hr",{staticClass:"w-100 clearfix d-md-none"}),a("div",{staticClass:"col-md-4 col-lg-3 col-xl-3 mx-auto mt-3"},[a("h6",{staticClass:"text-uppercase mb-4 font-weight-bold"},[t._v("Contact")]),a("p",[a("i",{staticClass:"fas fa-home mr-3"},[t._v("Njomzë Lipaj, no:11,/n Kosovo Prishtinë")])]),a("p",[a("i",{staticClass:"fas fa-envelope mr-3"},[a("a",{attrs:{href:"mailto:primafuture.ks@gmail.com"}},[t._v("primafuture.ks@gmail.com")])])]),a("p",[a("i",{staticClass:"fas fa-phone mr-3"},[a("a",{attrs:{href:"tel:+38349322227"}},[t._v("+383 49 322 227")])])]),a("p",[a("i",{staticClass:"fas fa-phone mr-3"},[a("a",{attrs:{href:"tel:+38349182512"}},[t._v("+383 49 182 512")])])])])])])])}],l={},c=l,u=(a("daf5"),a("2877")),m=Object(u["a"])(c,s,i,!1,null,"8c8ab178",null),f=m.exports,p={name:"App",components:{customFooter:f}},d=p,v=(a("5c0b"),a("4364")),h=a.n(v),g=Object(u["a"])(d,o,n,!1,null,null,null);"function"===typeof h.a&&h()(g);var b=g.exports,y=(a("d3b7"),a("8c4f")),x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("body",{staticClass:"splash"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row",staticStyle:{height:"500px"}},[r("img",{staticClass:"splash-logo",attrs:{src:a("cf05")}})]),r("br"),r("div",{staticClass:"row menu"},[r("div",{staticClass:"col-lg-4 col-xs-12 menuItem",attrs:{id:"video"}},[r("a",{attrs:{href:"pages/academy/academy.html"}},[t._v("Video Production")])]),r("div",{staticClass:"col-lg-4 col-xs-12 menuItem",attrs:{id:"academy"}},[r("a",{attrs:{href:"pages/academy1/academy.html"}},[t._v("Academy")])]),r("div",{staticClass:"col-lg-4 col-xs-12 menuItem",attrs:{id:"sound"}},[r("a",{attrs:{href:"pages/sound_production/academy.html"}},[t._v("Sound Production")])])])])])}],_={name:"Home",metaInfo:{title:"PRIMA Future"}},w=_,D=(a("6737"),Object(u["a"])(w,x,C,!1,null,"16387f90",null)),E=D.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"container",attrs:{id:"container"}},[t._m(0),a("h1",[t._v("Worskhop Application Form")]),a("form",{on:{submit:function(e){return e.preventDefault(),t.updateFirebase(e)}}},[a("div",{staticClass:"row justify-content-start"},[a("div",{staticClass:"form-group col-12 col-sm-5"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})]),a("div",{staticClass:"form-group col-12 col-sm-5"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Last Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.lastName,expression:"formData.lastName"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.formData.lastName},on:{input:function(e){e.target.composing||t.$set(t.formData,"lastName",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"row justify-content-start"},[a("div",{staticClass:"form-group col-12 col-sm-4"},[a("label",[t._v("Birdhdate")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.birthDate,expression:"formData.birthDate"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1"},domProps:{value:t.formData.birthDate},on:{input:function(e){e.target.composing||t.$set(t.formData,"birthDate",e.target.value)}}})]),a("div",{staticClass:"form-group col-12 col-sm-4"},[a("label",[t._v("Country")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.country,expression:"formData.country"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.formData.country},on:{input:function(e){e.target.composing||t.$set(t.formData,"country",e.target.value)}}})]),a("div",{staticClass:"form-group col-12 col-sm-4"},[a("label",[t._v("City")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.city,expression:"formData.city"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.formData.city},on:{input:function(e){e.target.composing||t.$set(t.formData,"city",e.target.value)}}})])]),a("hr"),a("div",{staticClass:"row justify-content-start"},[a("div",{staticClass:"form-group col-12 col-sm-5"},[a("div",{staticClass:"label"},[t._v("Language Preference")]),a("div",{staticClass:"form-text text-muted",attrs:{id:"english"}},[t._v(" (only English or with Albanian realtime translation) ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.language,expression:"formData.language"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1"},domProps:{value:t.formData.language},on:{input:function(e){e.target.composing||t.$set(t.formData,"language",e.target.value)}}})]),a("div",{staticClass:"form-group col-12 col-sm-5"},[a("label",[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.email,expression:"formData.email"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp"},domProps:{value:t.formData.email},on:{input:function(e){e.target.composing||t.$set(t.formData,"email",e.target.value)}}})]),a("small",{staticClass:"form-text text-muted just",staticStyle:{"margin-left":"20px"},attrs:{id:""}},[t._v("We'll never share your information with anyone else.")])]),t._m(1)])])])},j=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"splash-logo-size float-right"},[r("img",{staticClass:"splash-logo",attrs:{src:a("cf05")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-end"},[a("button",{staticClass:"btn btn-primary col-10 col-sm-6",attrs:{type:"submit",id:"submitButton"}},[t._v(" Submit ")])])}],I=(a("b0c0"),a("25f0"),a("96cf"),a("1da1")),N=a("260b"),S=(a("e71f"),N["a"].initializeApp({apiKey:"AIzaSyDLDGjGQGSvSgNOhEUG2ZP3bGMra1gZdT4",authDomain:"prima-future-db.firebaseapp.com",databaseURL:"https://prima-future-db.firebaseio.com",projectId:"prima-future-db",storageBucket:"prima-future-db.appspot.com",messagingSenderId:"646933822566",appId:"1:646933822566:web:180ce9987c7a98c93bc1a7",measurementId:"G-R7BTF2ZZCT"})),A=S.firestore(),O="contacts/",$={data:function(){return{firebaseData:null,formData:{},state:"loading"}},firestore:function(){return{firebaseData:A.doc(O)}},metaInfo:{title:"Film Workshop - Application Form"},methods:{updateFirebase:function(){var t=this;return Object(I["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.doc(O+t.formData.name+t.formData.name+"-"+Math.floor(Math.random()*Math.floor(999)).toString()).set(t.formData);case 3:t.state="synced",t.$router.push("/about"),e.next=11;break;case 7:e.prev=7,e.t0=e["catch"](0),t.errorMessage=JSON.stringify(e.t0),t.state="error";case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}},k=$,F=(a("2cf6"),Object(u["a"])(k,P,j,!1,null,null,null)),M=F.exports;r["a"].use(y["a"]);var T=[{path:"/",name:"Home",component:E},{path:"/ApplicationForm",name:"ApplicationForm",component:M},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],L=new y["a"]({mode:"hash",base:"/",routes:T}),B=L,H=a("0ff2"),G=a("58ca");a("660d");r["a"].use(H["a"]),r["a"].use(G["a"]),r["a"].config.productionTip=!1,new r["a"]({router:B,render:function(t){return t(b)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"660d":function(t,e,a){},6737:function(t,e,a){"use strict";a("2a5d")},"9c0c":function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.536ceaf1.png"},daf5:function(t,e,a){"use strict";a("1533")},f46f:function(t,e,a){}});
//# sourceMappingURL=app.2dc3cc60.js.map