(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,n,t){},23:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t(14),s=t.n(c),i=(t(22),t(23),t(15)),u=t.n(i),o=function(e){var n,t="pending",r=e.then((function(e){t="success",n=e}),(function(e){t="error",n=e}));return{read:function(){if("pending"===t)throw r;if("error"===t)throw n;if("success"===t)return n}}},a=function(){return console.log("Fetching User..."),u.a.get("https://jsonplaceholder.typicode.com/users/").then((function(e){return e.data})).catch((function(e){return console.log(e)}))},d=t.p+"static/media/spinner.dbb22bcf.gif",j=t(0),l=function(){var e=a();return{users:o(e)}}(),f=function(e){var n=e.userId,t=l.users.read(),r=t&&t.filter((function(e){return e.id===n}));return console.log(r[0].name),Object(j.jsxs)("div",{className:"cards",children:[Object(j.jsx)("h2",{children:r[0].name}),Object(j.jsx)("h5",{children:r[0].email})]})},b=function(){return Object(j.jsx)("div",{className:"spinner-container",children:Object(j.jsx)("img",{className:"spinner",src:d,alt:"spinner"})})},h=function(e){var n=e.userId;return Object(j.jsx)(r.Suspense,{fallback:Object(j.jsx)(b,{}),children:Object(j.jsx)(f,{userId:n})})},p=function(){return Object(j.jsxs)("div",{className:"lists",children:[Object(j.jsx)(h,{userId:1}),Object(j.jsx)(h,{userId:2}),Object(j.jsx)(h,{userId:3})]})};var x=function(){return Object(j.jsx)(p,{})};s.a.createRoot(document.getElementById("root")).render(Object(j.jsx)(x,{}))}},[[42,1,2]]]);
//# sourceMappingURL=main.23c1cb7f.chunk.js.map