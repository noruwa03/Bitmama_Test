(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{353:function(t,e,o){"use strict";o.d(e,"a",(function(){return h}));o(5),o(4),o(2),o(6),o(3),o(7);var n=o(0),r=o(39),c=(o(1),o(20),o(14),o(38),o(45),o(19),o(132)),f=o(352),l=o.n(f);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=document.cookie.split(";").map((function(t){return t.split("=")})).reduce((function(t,e){var o=Object(r.a)(e,2),c=o[0],f=o[1];return m(m({},t),{},Object(n.a)({},c.trim(),decodeURIComponent(f)))}),{}),h=Object(c.c)("store",{state:function(){return{nameCheck:v.USERNAME,allSessions:[],logoutUser:""}},actions:{SIGN_IN_USER:function(t){if(void 0===this.nameCheck){if(0===t.length)l.a.fire({icon:"info",title:"Username cannot be empty",showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"});else if(function(t,e,o){return!(t<e||t>o)}(t.length,3,25)){var e=t.toLowerCase();document.cookie="USERNAME=".concat(e,";expires=Thu, 19 Dec 2030 12:00:00 GMT;"),window.location="/dashboard",l.a.fire({position:"top-end",icon:"success",title:"successfully logged in",showConfirmButton:!1,timer:1500})}else l.a.fire({icon:"info",title:"Username must be between ".concat(3," and ").concat(25," characters."),showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"})}else if(this.nameCheck.toLowerCase()!==t.toLowerCase()){if(0===t.length)l.a.fire({icon:"info",title:"Username cannot be empty",showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"});else if(function(t,e,o){return!(t<e||t>o)}(t.length,3,25)){var o=t.toLowerCase();document.cookie="USERNAME=".concat(o,";expires=Thu, 19 Dec 2030 12:00:00 GMT;"),window.location="/dashboard",l.a.fire({position:"top-end",icon:"success",title:"successfully logged in",showConfirmButton:!1,timer:1500})}else l.a.fire({icon:"info",title:"Username must be between ".concat(3," and ").concat(25," characters."),showConfirmButton:!0,confirmButtonColor:"#004360",confirmButtonText:"Ok"})}else{var n,r=function(){n.closed||n.focus()};n=window.open("/dashboard"),document.onmousedown=r,document.onkeyup=r,document.onmousemove=r}},GET_ALL_SESSION:function(){this.allSessions=document.cookie.split(";").map((function(t){return t.split("=")}))},DELETE_SESSION:function(t,e){l.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(o){o.isConfirmed&&(document.cookie="".concat(t,"=").concat(e,";domain=bitmama-task.netlify.app;path=/;expires=Thu, 19 Dec 1920 12:00:00 GMT;"),window.location="/dashboard")}))},LOGOUT:function(){document.cookie="USERNAME=".concat(v.USERNAME,";domain=bitmama-task.netlify.app;path=/;expires=Thu, 19 Dec 1920 12:00:00 GMT;"),window.location="/",l.a.fire({position:"top-end",icon:"success",title:"successfully logged out",showConfirmButton:!1,timer:1500})}}})},354:function(t,e,o){var content=o(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(113).default)("200672c1",content,!0,{sourceMap:!1})},357:function(t,e,o){"use strict";o(354)},358:function(t,e,o){var n=o(112)(!1);n.push([t.i,'h4 span[data-v-2ff5a5ef]{text-transform:capitalize;color:var(--gray);font-weight:400}.customCard[data-v-2ff5a5ef]{background:var(--white);box-shadow:0 25px 35px rgba(0,0,0,.1)}.navigation[data-v-2ff5a5ef]{position:fixed;padding:0 1rem;top:20px;right:20px;justify-content:space-between;border-radius:5px;background:var(--white);box-shadow:0 25px 35px rgba(0,0,0,.1);transition:height .5s,width .5s;transition-delay:0s,.75s;z-index:100}.navigation[data-v-2ff5a5ef],.navigation .user-box[data-v-2ff5a5ef]{height:60px;display:flex;overflow:hidden}.navigation .user-box[data-v-2ff5a5ef]{position:relative;align-items:center;transition:.5s;transition-delay:.5s}.navigation .user-box .username[data-v-2ff5a5ef]{font-size:1.2rem;white-space:nowrap;text-transform:capitalize;color:var(--gray)}.navigation .user-box .image-box[data-v-2ff5a5ef]{position:relative;min-width:60px;height:60px;background:var(--white);border-radius:50%;overflow:hidden;border:10px solid var(--white)}.navigation .user-box .image-box img[data-v-2ff5a5ef]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.navigation .menu-toggle[data-v-2ff5a5ef]{position:relative;width:60px;height:60px;display:flex;justify-content:center;align-items:center;cursor:pointer}.navigation .menu-toggle[data-v-2ff5a5ef]:before{transform:translateY(-10px);box-shadow:0 10px var(--gray)}.navigation .menu-toggle[data-v-2ff5a5ef]:after,.navigation .menu-toggle[data-v-2ff5a5ef]:before{content:"";position:absolute;width:32px;height:2px;background:var(--gray);transition:.5s}.navigation .menu-toggle[data-v-2ff5a5ef]:after{transform:translateY(10px)}.menu[data-v-2ff5a5ef]{position:absolute;width:100%;height:calc(100% - 60px);margin-top:60px;padding:20px;border-top:1px solid rgba(0,0,0,.1)}.menu li[data-v-2ff5a5ef]{list-style:none}.menu li a[data-v-2ff5a5ef]{display:flex;align-items:center;grid-gap:10px;gap:10px;font-size:1rem;text-decoration:none;color:var(--gray)}.menu li a i[data-v-2ff5a5ef]{font-size:1.3em}.menu li a[data-v-2ff5a5ef]:hover{color:var(--purple)}.navigation.active .menu-toggle[data-v-2ff5a5ef]:before{transform:translateY(0) rotate(45deg);box-shadow:none}.navigation.active .menu-toggle[data-v-2ff5a5ef]:after{transform:translateY(0) rotate(-45deg)}.navigation.active[data-v-2ff5a5ef]{height:10rem;transition:width .5s,height .5s;transition-delay:0s,.75s}.navigation.active .user-box[data-v-2ff5a5ef]{width:calc(100% - 60px);transition-delay:0s}.form-control-submit-button[data-v-2ff5a5ef]{display:inline-block;width:80%;height:3.25rem;border:1px solid var(--purple);border-radius:30px;background-color:var(--purple);color:#fff;font-weight:600;font-size:.875rem;line-height:0;cursor:pointer;transition:all .2s}.form-control-submit-button[data-v-2ff5a5ef]:hover{border:1px solid var(--purple);background-color:transparent;color:var(--purple)}',""]),t.exports=n},363:function(t,e,o){"use strict";o.r(e);o(44),o(1);var n=o(352),r=o.n(n),c=o(353),f={name:"MyDashboard",middleware:function(t){var e=t.redirect;if(null==Object(c.a)().nameCheck)return e("/")},setup:function(){var t=Object(c.a)();t.GET_ALL_SESSION();var e,o;(o=function(){e&&clearTimeout(e),e=setTimeout((function(){return r.a.fire({icon:"warning",title:"This page is idle",showConfirmButton:!0,confirmButtonColor:"#6f42c1;",confirmButtonText:"Ok"})}),6e4)})(),["click","touchstart","mousemove"].forEach((function(t){return document.addEventListener(t,o,!1)}));return{currentUser:t,deleteSession:function(e,o){return t.DELETE_SESSION(e,o)},logout:function(){return t.LOGOUT()},menuToggle:function(){document.querySelector(".navigation").classList.toggle("active")}}}},l=(o(357),o(74)),component=Object(l.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-lg"},[o("div",{staticClass:"navigation"},[o("div",{staticClass:"user-box"},[o("p",{staticClass:"ms-2 username"},[t._v(t._s(t.currentUser.nameCheck))])]),t._v(" "),o("div",{staticClass:"menu-toggle",on:{click:t.menuToggle}}),t._v(" "),o("ul",{staticClass:"menu"},[o("li",[o("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout "),o("i",{staticClass:"bi bi-box-arrow-right"})])]),t._v(" "),o("li",[o("nuxt-link",{staticClass:"mt-2",attrs:{to:"/"}},[t._v("Sign in")])],1)])]),t._v(" "),o("div",{staticClass:"mt-5 pt-5"},[o("div",{staticClass:"text-center mt-3 mb-4"},[o("h4",[t._v("\n        Admin: "),o("span",[t._v(t._s(t.currentUser.nameCheck))])])]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"row align-items-center justify-content-center"},t._l(t.currentUser.allSessions,(function(e){return o("div",{key:e[0],staticClass:"col-sm-4 col-12 my-2"},[o("div",{staticClass:"customCard p-2"},[o("div",{staticClass:"card-header text-center"},[o("span",{staticClass:"fw-bold h5"},[t._v("Key:")]),t._v(" "+t._s(e[0])+"\n          ")]),t._v(" "),o("p",{staticClass:"my-3 text-center"},[o("span",{staticClass:"fw-bold h5"},[t._v("Value:")]),t._v(" "+t._s(e[1])+"\n          ")]),t._v(" "),o("div",{staticClass:"form-group text-center"},[o("button",{staticClass:"form-control-submit-button",on:{click:function(o){return t.deleteSession(e[0],e[1])}}},[t._v("\n              Logout session\n            ")])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"text-center mt-3 mb-4"},[o("h4",[t._v("Cookie Session Management")])])}],!1,null,"2ff5a5ef",null);e.default=component.exports}}]);