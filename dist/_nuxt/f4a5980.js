(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{353:function(t,o,e){"use strict";e.d(o,"a",(function(){return v}));e(5),e(4),e(2),e(6),e(3),e(7);var n=e(0),r=e(39),c=(e(1),e(20),e(14),e(38),e(45),e(132)),l=e(352),f=e.n(l);function m(object,t){var o=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),o.push.apply(o,e)}return o}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(o){Object(n.a)(t,o,source[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(source,o))}))}return t}var h=document.cookie.split(";").map((function(t){return t.split("=")})).reduce((function(t,o){var e=Object(r.a)(o,2),c=e[0],l=e[1];return d(d({},t),{},Object(n.a)({},c.trim(),decodeURIComponent(l)))}),{}),v=Object(c.c)("store",{state:function(){return{nameCheck:h.USERNAME,allSessions:[],logoutUser:""}},actions:{SIGN_IN_USER:function(t){if(void 0===this.nameCheck){if(0===t.length)f.a.fire({icon:"info",title:"Username cannot be empty",showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"});else if(function(t,o,e){return!(t<o||t>e)}(t.length,3,25)){var o=t.toLowerCase();document.cookie="USERNAME=".concat(o,";expires=Thu, 19 Dec 2030 12:00:00 GMT;"),window.location="/dashboard",f.a.fire({position:"top-end",icon:"success",title:"successfully logged in",showConfirmButton:!1,timer:1500})}else f.a.fire({icon:"info",title:"Username must be between ".concat(3," and ").concat(25," characters."),showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"})}else if(this.nameCheck.toLowerCase()!==t.toLowerCase()){if(0===t.length)f.a.fire({icon:"info",title:"Username cannot be empty",showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"});else if(function(t,o,e){return!(t<o||t>e)}(t.length,3,25)){var e=t.toLowerCase();document.cookie="USERNAME=".concat(e,";expires=Thu, 19 Dec 2030 12:00:00 GMT;"),window.location="/dashboard",f.a.fire({position:"top-end",icon:"success",title:"successfully logged in",showConfirmButton:!1,timer:1500})}else f.a.fire({icon:"info",title:"Username must be between ".concat(3," and ").concat(25," characters."),showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"})}else{var n,r=function(){n.closed||n.focus()};n=window.open("/dashboard"),document.onmousedown=r,document.onkeyup=r,document.onmousemove=r}},GET_ALL_SESSION:function(){this.allSessions=document.cookie.split(";").map((function(t){return t.split("=")}))},DELETE_SESSION:function(t){f.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(o){o.isConfirmed&&(document.cookie="".concat(t,"=;expires=Thu, 19 Dec 1920 12:00:00 GMT;path=/;"),window.location="/")}))},LOGOUT:function(){document.cookie="USERNAME=;expires=Thu, 19 Dec 1920 12:00:00 GMT;path=/;",window.location="/",f.a.fire({position:"top-end",icon:"success",title:"successfully logged out",showConfirmButton:!1,timer:1500})}}})},355:function(t,o,e){var content=e(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(113).default)("46ec2240",content,!0,{sourceMap:!1})},359:function(t,o,e){"use strict";e(355)},360:function(t,o,e){var n=e(112)(!1);n.push([t.i,".form-group[data-v-b67a7462]{position:relative;margin-bottom:1.25rem}.form-control-input[data-v-b67a7462],.form-control-textarea[data-v-b67a7462]{width:100%;padding-top:.875rem;padding-bottom:.875rem;padding-left:1.5rem;border:1px solid #cbcbd1;border-radius:8px;background-color:#fff;font-size:.875rem;line-height:1.5rem;-webkit-appearance:none}.form-control-textarea[data-v-b67a7462]{display:block;height:14rem}.form-control-input[data-v-b67a7462]:focus,.form-control-textarea[data-v-b67a7462]:focus{border:1px solid #a1a1a1;outline:none}.form-control-input[data-v-b67a7462]:hover,.form-control-textarea[data-v-b67a7462]:hover{border:1px solid #a1a1a1}.form-control-submit-button[data-v-b67a7462]{display:inline-block;width:80%;height:3.25rem;border:1px solid #004360;border-radius:30px;background-color:#004360;color:#fff;font-weight:600;font-size:.875rem;line-height:0;cursor:pointer;transition:all .2s}.form-control-submit-button[data-v-b67a7462]:hover{border:1px solid #004360;background-color:transparent;color:#004360}",""]),t.exports=n},364:function(t,o,e){"use strict";e.r(o);e(44),e(1);var n=e(352),r=e.n(n),c=e(134),l=e(353),f={name:"IndexPage",setup:function(){var t,o,e=Object(c.b)(""),n=Object(l.a)();return(o=function(){t&&clearTimeout(t),t=setTimeout((function(){return r.a.fire({icon:"warning",title:"This page is idle",showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"})}),6e4)})(),["click","touchstart","mousemove"].forEach((function(t){return document.addEventListener(t,o,!1)})),{username:e,signin:function(){return n.SIGN_IN_USER(e.value)}}}},m=(e(359),e(74)),component=Object(m.a)(f,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"container-lg mt-5"},[e("div",{},[e("div",{staticClass:"row align-items-center justify-content-around"},[e("div",{staticClass:"col-12 col-lg-6 col-sm-6"},[e("div",{staticClass:"text-center h2 pb-3"},[t._v("Sign In")]),t._v(" "),e("label",{attrs:{for:"username"}},[t._v("Username")]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control-input mt-2",attrs:{id:"username",type:"text",placeholder:"Username"},domProps:{value:t.username},on:{input:function(o){o.target.composing||(t.username=o.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"form-control-submit-button",on:{click:t.signin}},[t._v("\n              Login\n            ")])])])])])])])}),[],!1,null,"b67a7462",null);o.default=component.exports}}]);