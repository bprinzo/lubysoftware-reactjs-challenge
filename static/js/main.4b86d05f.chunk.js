(this["webpackJsonpreactjs-challenge"]=this["webpackJsonpreactjs-challenge"]||[]).push([[0],{224:function(n,t,e){"use strict";e.r(t);var r=e(1),o=e(2),i=e.n(o),a=e(89),c=e.n(a),s=e(6),l=e(3),u=e(4);function b(){var n=Object(l.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    outline: 0;\n  }\n\n  body {\n    background: #292929;\n    color: #ffffff;\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font-family: 'Roboto', sans-serif;\n    font-size: 20pt;\n  }\n\n  h1, h2, h3, h4, h5, h6, strong {\n    font-weight: 500;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return b=function(){return n},n}var d=Object(u.a)(b()),j=e(8),f=e(18),p=e.n(f),h=e(31),x=e(7),g=e(93),O=e(43),v=e(9),m=e(97),A=e.n(m).a.create({baseURL:"https://api.github.com/users"}),w=Object(o.createContext)({}),k=function(n){var t=n.children,e=Object(o.useState)({message:"Usu\xe1rio n\xe3o encontrado"}),i=Object(v.a)(e,1)[0],a=Object(o.useState)((function(){var n=localStorage.getItem("@GithubProject:FollowerUserData");return n?JSON.parse(n).followerUser:{}})),c=Object(v.a)(a,2),s=c[0],l=c[1],u=Object(o.useState)((function(){var n=localStorage.getItem("@GithubProject:userData"),t=localStorage.getItem("@GithubProject:followersData"),e=localStorage.getItem("@GithubProject:followingData"),r=localStorage.getItem("@GithubProject:reposData");return n&&t&&e&&r?{userData:JSON.parse(n).userData,followersData:JSON.parse(t).followersData,followingData:JSON.parse(e).followingData,reposData:JSON.parse(r).reposData}:{}})),b=Object(v.a)(u,2),d=b[0],j=b[1],f=Object(o.useCallback)((function(n){return{login:n.data.login,name:n.data.name,email:n.data.email,location:n.data.location,company:n.data.company,bio:n.data.bio,avatar_url:n.data.avatar_url,followers_url:n.data.followers_url,following_url:n.data.following_url,organizations_url:n.data.organizations_url,starred_url:n.data.starred_url,public_repos:n.data.public_repos,public_gists:n.data.public_gists,followers:n.data.followers,following:n.data.following,html_url:n.data.html_url}}),[]),x=Object(o.useCallback)((function(n){return n.data.map((function(n){return{login:n.login,avatar_url:n.avatar_url}}))}),[]),g=Object(o.useCallback)((function(n){return n.data.map((function(n){return{login:n.login,avatar_url:n.avatar_url}}))}),[]),O=Object(o.useCallback)((function(n){return n.data.map((function(n){return{name:n.name,description:n.description,html_url:n.html_url,fork:n.fork,private:n.private,stargazers_count:n.stargazers_count}}))}),[]),m=Object(o.useCallback)((function(n,t,e,r){localStorage.setItem("@GithubProject:userData",JSON.stringify({userData:n})),localStorage.setItem("@GithubProject:followersData",JSON.stringify({followersData:t})),localStorage.setItem("@GithubProject:followingData",JSON.stringify({followingData:e})),localStorage.setItem("@GithubProject:reposData",JSON.stringify({reposData:r}))}),[]),k=Object(o.useCallback)(function(){var n=Object(h.a)(p.a.mark((function n(t){var e,r;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.get("".concat(t));case 2:e=n.sent,r=f(e),localStorage.setItem("@GithubProject:FollowerUserData",JSON.stringify({followerUser:r})),l(r);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[f]),y=Object(o.useCallback)(function(){var n=Object(h.a)(p.a.mark((function n(t){var e,r,o,i,a,c,s,l,u,b,d;return p.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.loginName,n.next=3,Promise.all([A.get("".concat(e)),A.get("".concat(e,"/followers")),A.get("".concat(e,"/following")),A.get("".concat(e,"/repos"))]);case 3:r=n.sent,o=Object(v.a)(r,4),i=o[0],a=o[1],c=o[2],s=o[3],l=f(i),u=x(a),b=g(c),d=O(s),m(l,u,b,d),j({userData:l,followersData:u,followingData:b,reposData:d});case 15:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),[f,x,g,O,m]),z=Object(o.useCallback)((function(){localStorage.removeItem("@GithubProject:userData"),localStorage.removeItem("@GithubProject:followersData"),localStorage.removeItem("@GithubProject:followingData"),localStorage.removeItem("@GithubProject:reposData"),j({})}),[]);return Object(r.jsx)(w.Provider,{value:{data:d,error:i,followerUserData:s,signIn:y,signOut:z,showFollowerUser:k},children:t})};function y(){var n=Object(o.useContext)(w);if(!n)throw new Error("useData must be used within a DataProvider");return n}function z(n){var t={};return n.inner.forEach((function(n){n.path&&(t[n.path]=n.message)})),t}var S=e.p+"static/media/logo.5e057ae1.svg",D=e(34),F=e(42),C=e(32);function P(){var n=Object(l.a)(["\n  position: relative;\n\n  span {\n    width: 160px;\n    background: #ffce00;\n    padding: 8px;\n    border-radius: 4px;\n    font-size: 14px;\n    font-weight: 500;\n    opacity: 0;\n    transition: opacity 0.4s;\n    visibility: hidden;\n\n    position: absolute;\n    bottom: calc(100% + 12px);\n    right: 20%;\n\n    color: #312e38;\n\n    &::before {\n      content: '';\n      border-style: solid;\n      border-color: #ffce00 transparent;\n      border-width: 6px 6px 0 6px;\n      bottom: 20px;\n      top: 100%;\n      position: absolute;\n\n      right: 0;\n    }\n  }\n\n  &:hover span {\n    opacity: 1;\n    visibility: visible;\n  }\n"]);return P=function(){return n},n}var U=u.c.div(P()),J=function(n){var t=n.title,e=n.className,o=n.children;return Object(r.jsxs)(U,{className:e,children:[o,Object(r.jsx)("span",{children:t})]})};function I(){var n=Object(l.a)(["\n  margin-right: 16px;\n  svg {\n    margin: 0;\n  }\n\n  span {\n    background-color: #c53030;\n    color: #fff;\n\n    &::before {\n      border-color: #c53030 transparent;\n    }\n  }\n"]);return I=function(){return n},n}function N(){var n=Object(l.a)(["\n      color: #ffce00;\n    "]);return N=function(){return n},n}function R(){var n=Object(l.a)(["\n      color: #ffce00;\n      border-color: #ffce00;\n    "]);return R=function(){return n},n}function E(){var n=Object(l.a)(["\n      border-color: #c53030;\n    "]);return E=function(){return n},n}function L(){var n=Object(l.a)(["\n  border-radius: 12px;\n  width: 100%;\n  height: 56px;\n  padding: 8px;\n\n  border: 2px solid #292929;\n  color: #535353;\n  background-color: #fff;\n  display: flex;\n  align-items: center;\n\n  margin: 40px 0 15px 0;\n\n  ","\n\n  ","\n\n  ","\n\n\n  input {\n    background-color: transparent;\n    flex: 1;\n    border: none;\n    font-size: 20px;\n\n    &::placeholder {\n      font-weight: regular;\n      color: #535353;\n      font-size: 20px;\n    }\n  }\n  svg {\n    margin-right: 16px;\n  }\n"]);return L=function(){return n},n}var B=u.c.div(L(),(function(n){return n.isErrored&&Object(u.b)(E())}),(function(n){return n.isFocused&&Object(u.b)(R())}),(function(n){return n.isFilled&&Object(u.b)(N())})),G=Object(u.c)(J)(I()),q=function(n){var t=n.name,e=n.icon,i=Object(F.a)(n,["name","icon"]),a=Object(o.useRef)(null),c=Object(o.useState)(!1),s=Object(v.a)(c,2),l=s[0],u=s[1],b=Object(o.useState)(!1),d=Object(v.a)(b,2),j=d[0],f=d[1],p=Object(C.c)(t),h=p.fieldName,g=p.defaultValue,O=p.error,m=p.registerField,A=Object(o.useCallback)((function(){u(!0)}),[]),w=Object(o.useCallback)((function(){var n;u(!1),f(!!(null===(n=a.current)||void 0===n?void 0:n.value))}),[]);return Object(o.useEffect)((function(){m({name:h,ref:a.current,path:"value"})}),[h,m]),Object(r.jsxs)(B,{isErrored:!!O,isFilled:j,isFocused:l,children:[e&&Object(r.jsx)(e,{size:20}),Object(r.jsx)("input",Object(D.a)({onFocus:A,onBlur:w,defaultValue:g,ref:a},i)),O&&Object(r.jsx)(G,{title:O,children:Object(r.jsx)(x.a,{color:"#c53030",size:20})})]})},T=e(22);function X(){var n=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  place-content: center;\n  width: 100%;\n\n  img {\n    height: 98px;\n  }\n\n  form {\n    width: 340px;\n    text-align: center;\n\n    button {\n      border-radius: 12px;\n      height: 56px;\n      width: 100%;\n      color: #030202;\n      font-weight: bold;\n      border: 0;\n      font-size: 20px;\n\n      background: #ffce00;\n      transition: background-color 0.2s;\n\n      svg {\n        margin-left: 8px;\n        position: relative;\n        top: 0.15em;\n      }\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n"]);return X=function(){return n},n}function Z(){var n=Object(l.a)(["\n  height: 100vh;\n\n  display: flex;\n  align-items: stretch;\n"]);return Z=function(){return n},n}var _=u.c.div(Z()),Q=u.c.div(X(),Object(T.a)(.2,"#ffce00")),K=function(){var n=Object(o.useRef)(null),t=Object(j.g)(),e=y(),i=e.signIn,a=e.error,c=Object(o.useCallback)(function(){var e=Object(h.a)(p.a.mark((function e(r){var o,c,s,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=O.b().shape({user:O.c().required("Campo obrigat\xf3rio")}),e.next=4,o.validate(r,{abortEarly:!1});case 4:if(i({loginName:r.user}),!a){e.next=8;break}return null===(c=n.current)||void 0===c||c.setErrors({user:a.message}),e.abrupt("return");case 8:t.push("/user"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0 instanceof O.a&&(l=z(e.t0),null===(s=n.current)||void 0===s||s.setErrors(l));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),[i,a,t]);return Object(r.jsx)(_,{children:Object(r.jsxs)(Q,{children:[Object(r.jsx)("img",{src:S,alt:"Github Logo"}),Object(r.jsxs)(g.a,{ref:n,onSubmit:c,children:[Object(r.jsx)(q,{name:"user",icon:x.k,type:"text",placeholder:"Usu\xe1rio"}),Object(r.jsxs)("button",{type:"submit",children:["ENTRAR",Object(r.jsx)(x.c,{size:24})]})]})]})})},V=e(19);function W(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: space-between;\n  padding: 0 20px 0px 20px;\n  background-color: #5252525d;\n  margin-bottom: 25px;\n  height: 97px;\n\n  a {\n    text-decoration: none;\n    color: #fff;\n    transition: color 0.2s;\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n  h1 {\n    font-size: 40px;\n  }\n  p {\n    font-weight: lighter;\n    font-size: 17px;\n  }\n"]);return W=function(){return n},n}function H(){var n=Object(l.a)(["\n  margin: 0 0 25px 30px;\n  padding-top: 8px;\n\n  p {\n    font-weight: lighter;\n    font-size: 18px;\n    line-height: 1.6;\n  }\n\n  &:last-child {\n    padding-bottom: 100px;\n  }\n"]);return H=function(){return n},n}function M(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 126px;\n  padding-top: 25px;\n  background-color: #1f1f1f;\n  margin-bottom: 80px;\n\n  h1 {\n    margin-left: 12px;\n    font-size: 17px;\n  }\n\n  a {\n    display: flex;\n    text-decoration: none;\n    color: #fff;\n    font-size: 17px;\n    font-weight: lighter;\n    transition: color 0.2s;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin: 0 20px 0 12px;\n    }\n  }\n"]);return M=function(){return n},n}function Y(){var n=Object(l.a)(["\n  height: 100vh;\n\n  svg {\n    margin-right: 8px;\n  }\n\n  img {\n    height: 115px;\n    border-radius: 50%;\n    border: 3px solid #fff;\n    position: absolute;\n    top: 68.5px;\n\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]);return Y=function(){return n},n}var $=u.c.div(Y()),nn=u.c.div(M(),Object(T.a)(.2,"#fff")),tn=u.c.div(H()),en=u.c.div(W(),Object(T.a)(.2,"#fff"));function rn(){var n=Object(l.a)(["\n  float: left;\n  background-color: #ffce00;\n  border-radius: 0 20px 20px 0;\n  height: 42px;\n  width: 10px;\n  margin-right: 20px;\n"]);return rn=function(){return n},n}function on(){var n=Object(l.a)(["\n      h1 {\n        text-transform: uppercase;\n      }\n    "]);return on=function(){return n},n}function an(){var n=Object(l.a)(["\n    h1 {\n      font-size: ","px;\n    }\n  "]);return an=function(){return n},n}function cn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n\n  overflow-x: hidden;\n  word-break: break-all;\n\n  img {\n    height: 64px;\n    border: 3px solid #fff;\n    border-radius: 50%;\n    margin-right: 20px;\n  }\n\n  h1 {\n    color: #fff;\n  }\n\n  ",";\n\n  ",";\n"]);return cn=function(){return n},n}var sn=u.c.div(cn(),(function(n){return Object(u.b)(an(),n.h1size)}),(function(n){return n.isTitleUppercase&&Object(u.b)(on())})),ln=u.c.div(rn()),un=function(n){var t=n.title,e=n.image,o=n.titleSize,i=n.isTitleUppercase,a=void 0!==i&&i;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(sn,{h1size:o,isTitleUppercase:a,children:[Object(r.jsx)(ln,{}),!!e&&Object(r.jsx)("img",{src:e,alt:"avatar"}),Object(r.jsx)("h1",{children:t})]})})},bn=Object(o.createContext)({}),dn=function(n){var t=n.children,e=Object(j.h)(),i=Object(o.useState)(e.pathname),a=Object(v.a)(i,2),c=a[0],s=a[1],l=Object(o.useCallback)((function(){s(e.pathname)}),[e.pathname]);return Object(r.jsx)(bn.Provider,{value:{path:c,activateTab:l},children:t})};function jn(){var n=Object(l.a)(["\n    a:nth-child(4) {\n      svg {\n        color: #000000;\n      }\n      p {\n        color: #3e3e3e;\n      }\n    "]);return jn=function(){return n},n}function fn(){var n=Object(l.a)(["\n    a:nth-child(3) {\n      svg {\n        color: #000000;\n      }\n      p {\n        color: #3e3e3e;\n      }\n    "]);return fn=function(){return n},n}function pn(){var n=Object(l.a)(["\n    a:nth-child(2) {\n      svg {\n        color: #000000;\n      }\n      p {\n        color: #3e3e3e;\n      }\n    "]);return pn=function(){return n},n}function hn(){var n=Object(l.a)(["\n    a:nth-child(1) {\n      svg {\n        color: #000000;\n      }\n      p {\n        color: #3e3e3e;\n      }\n    "]);return hn=function(){return n},n}function xn(){var n=Object(l.a)(["\n  display: flex;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  left: 0;\n\n  justify-content: space-between;\n  background-color: #fff;\n  align-items: center;\n  text-align: center;\n\n  height: 80px;\n\n  margin-top: 50px;\n  border-radius: 10px 10px 0 0;\n  padding: 0 15px 0 15px;\n\n  svg {\n    color: #a5a5a5;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  p {\n    font-size: 15px;\n    color: #969696;\n    font-weight: medium;\n  }\n\n  ","\n  ","\n  ","\n  ","\n"]);return xn=function(){return n},n}var gn=u.c.div(xn(),(function(n){return"/user"===n.path&&Object(u.b)(hn())}),(function(n){return"/repos"===n.path&&Object(u.b)(pn())}),(function(n){return"/followers"===n.path&&Object(u.b)(fn())}),(function(n){return"/following"===n.path&&Object(u.b)(jn())})),On=function(){var n=function(){var n=Object(o.useContext)(bn);if(!n)throw new Error("useTab must be used within a TabProvider");return n}(),t=n.path,e=n.activateTab;return Object(o.useEffect)((function(){e()}),[e]),Object(r.jsxs)(gn,{path:t,children:[Object(r.jsxs)(s.b,{to:"user",children:[Object(r.jsx)(x.e,{size:25}),Object(r.jsx)("p",{children:"Home"})]}),Object(r.jsxs)(s.b,{to:"repos",children:[Object(r.jsx)(x.d,{size:25}),Object(r.jsx)("p",{children:"Repos"})]}),Object(r.jsxs)(s.b,{to:"followers",children:[Object(r.jsx)(x.l,{size:25}),Object(r.jsx)("p",{children:"Seguidores"})]}),Object(r.jsxs)(s.b,{to:"following",children:[Object(r.jsx)(x.l,{size:25}),Object(r.jsx)("p",{children:"Seguindo"})]})]})};function vn(){var n=Object(l.a)(["\n  position: absolute;\n  left: 50%;\n  bottom: 50%;\n  animation: rotate 2s linear infinite;\n  margin: -25px 0 0 -25px;\n  width: 50px;\n  height: 50px;\n\n  & .path {\n    stroke: #5652bf;\n    stroke-linecap: round;\n    animation: dash 1.5s ease-in-out infinite;\n  }\n\n  @keyframes rotate {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes dash {\n    0% {\n      stroke-dasharray: 1, 150;\n      stroke-dashoffset: 0;\n    }\n    50% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -35;\n    }\n    100% {\n      stroke-dasharray: 90, 150;\n      stroke-dashoffset: -124;\n    }\n  }\n"]);return vn=function(){return n},n}var mn=u.c.svg(vn()),An=function(n){var t=n.children,e=Object(o.useState)(!0),i=Object(v.a)(e,2),a=i[0],c=i[1];return Object(o.useEffect)((function(){setTimeout((function(){c(!1)}),1e3)}),[]),Object(r.jsx)(r.Fragment,{children:a?Object(r.jsx)(mn,{viewBox:"0 0 50 50",children:Object(r.jsx)("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})}):Object(r.jsx)("div",{children:t})})},wn=function(){var n=y(),t=n.data,e=n.signOut,i=Object(o.useCallback)((function(){e()}),[e]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(An,{children:Object(r.jsxs)($,{children:[Object(r.jsxs)(nn,{children:[Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:t.userData.html_url,children:Object(r.jsx)("h1",{children:"#".concat(t.userData.login)})}),Object(r.jsxs)(s.b,{to:"/",onClick:i,children:["Sair ",Object(r.jsx)(x.h,{size:20,color:"#D03434"})]})]}),Object(r.jsx)("img",{src:t.userData.avatar_url,alt:"Avatar Logo"}),Object(r.jsx)(un,{title:t.userData.name?t.userData.name:"-",titleSize:26,isTitleUppercase:!0}),Object(r.jsxs)(tn,{children:[Object(r.jsxs)("p",{children:[t.userData.email&&Object(r.jsx)(V.c,{}),t.userData.email]}),Object(r.jsxs)("p",{children:[t.userData.location&&Object(r.jsx)(V.b,{}),t.userData.location]}),Object(r.jsxs)("p",{children:[t.userData.company&&Object(r.jsx)(V.a,{}),t.userData.company]})]}),Object(r.jsxs)(en,{children:[Object(r.jsxs)(s.b,{to:"followers",children:[Object(r.jsx)("h1",{children:t.userData.followers}),Object(r.jsx)("p",{children:"Seguidores"})]}),Object(r.jsxs)(s.b,{to:"following",children:[Object(r.jsx)("h1",{children:t.userData.following}),Object(r.jsx)("p",{children:"Seguindo"})]}),Object(r.jsxs)(s.b,{to:"repos",children:[Object(r.jsx)("h1",{children:t.userData.public_repos}),Object(r.jsx)("p",{children:"Repos"})]})]}),t.userData.bio&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(un,{title:"Bio",titleSize:26,isTitleUppercase:!0}),Object(r.jsx)(tn,{children:Object(r.jsx)("p",{children:t.userData.bio})})]})]})}),Object(r.jsx)(On,{})]})},kn=e(98);function yn(){var n=Object(l.a)(["\n  margin-left: 30px;\n  p {\n    font-size: 15px;\n    font-weight: lighter;\n    max-width: 80%;\n    line-height: 1.6;\n  }\n  div {\n    margin: 8px 30px 0 0;\n    display: flex;\n  }\n"]);return yn=function(){return n},n}function zn(){var n=Object(l.a)(["\n  margin-right: 16px;\n\n  svg {\n    margin-right: 8px;\n\n    /* LockIcon */\n    &:nth-child(3) {\n      position: absolute;\n      margin-left: 70%;\n    }\n\n    /* ForkIcon */\n    &:nth-child(4) {\n      position: absolute;\n      margin-left: 80%;\n    }\n  }\n\n  a {\n    text-decoration: none;\n    color: #fff;\n  }\n\n  border-bottom: 1px solid #7070705a;\n  padding: 25px 0 25px 0;\n\n  &:nth-child(2) {\n    padding-top: 80px;\n  }\n\n  &:last-child {\n    padding-bottom: 100px;\n  }\n"]);return zn=function(){return n},n}function Sn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 10;\n\n  position: fixed;\n\n  width: 100%;\n  height: 68px;\n  background-color: #1f1f1f;\n\n  margin-bottom: 100px;\n  color: #fff;\n\n  svg {\n    margin-left: 20px;\n    transition: color 0.2;\n    color: #fff;\n  }\n\n  h1 {\n    font-size: 17px;\n    margin-right: 50%;\n    transform: translateX(50%);\n    color: #fff;\n  }\n"]);return Sn=function(){return n},n}function Dn(){var n=Object(l.a)(["\n  height: 100vh;\n\n  a {\n    text-decoration: none;\n  }\n\n  div:last-child {\n    border-bottom: 0;\n  }\n  p {\n    word-wrap: break-word;\n  }\n"]);return Dn=function(){return n},n}var Fn=u.c.div(Dn()),Cn=u.c.div(Sn()),Pn=u.c.div(zn()),Un=u.c.div(yn()),Jn=function(){var n=y().data;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(Fn,{children:[Object(r.jsx)(s.b,{to:"user",children:Object(r.jsxs)(Cn,{children:[Object(r.jsx)(x.b,{size:22,color:"#fff"}),Object(r.jsxs)("h1",{children:["".concat(1===n.userData.public_repos?"".concat(n.userData.public_repos," Reposit\xf3rio"):"".concat(n.userData.public_repos,"  Reposit\xf3rios"))," "]})]})}),n.reposData.map((function(n){return Object(r.jsx)(Pn,{children:Object(r.jsxs)("a",{href:n.html_url,target:"_blank",rel:"noreferrer",children:[Object(r.jsx)(un,{title:n.name,titleSize:20}),Object(r.jsxs)(Un,{children:[Object(r.jsx)("p",{children:n.description}),Object(r.jsxs)("div",{children:[Object(r.jsx)(x.i,{size:20,color:"#FFCE00"}),Object(r.jsx)("p",{children:n.stargazers_count}),n.private?Object(r.jsx)(x.f,{size:20,color:"#CC042A"}):Object(r.jsx)(x.j,{size:20,color:"#63BF1F"}),n.fork&&Object(r.jsx)(kn.a,{size:20,color:"#8B949E"})]})]})]})},n.name)}))]}),Object(r.jsx)(On,{})]})};function In(){var n=Object(l.a)(["\n  border-bottom: 1px solid #7070705a;\n  padding: 25px 0 25px 0;\n\n  &:nth-child(2) {\n    padding-top: 80px;\n  }\n\n  &:last-child {\n    padding-bottom: 100px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  svg {\n    position: absolute;\n    left: 90%;\n    transform: translateY(-170%);\n  }\n"]);return In=function(){return n},n}function Nn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n\n  width: 100%;\n  height: 68px;\n  background-color: #1f1f1f;\n\n  margin-bottom: 25px;\n\n  svg {\n    margin-left: 20px;\n  }\n\n  h1 {\n    font-size: 17px;\n    margin-right: 50%;\n    transform: translateX(50%);\n    color: #fff;\n  }\n"]);return Nn=function(){return n},n}function Rn(){var n=Object(l.a)(["\n  height: 100vh;\n\n  a {\n    text-decoration: none;\n  }\n\n  div:last-child {\n    border-bottom: 0;\n  }\n"]);return Rn=function(){return n},n}var En=u.c.div(Rn()),Ln=u.c.div(Nn()),Bn=u.c.div(In()),Gn=function(){var n,t=y(),e=t.data,i=t.showFollowerUser,a=Object(o.useCallback)((function(n){i(n)}),[i]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(En,{children:[Object(r.jsx)(s.b,{to:"user",children:Object(r.jsxs)(Ln,{children:[Object(r.jsx)(x.b,{size:22,color:"#FFF"}),Object(r.jsx)("h1",{children:"".concat(1===e.userData.followers)?"".concat(e.userData.followers," Seguidores"):"".concat(e.userData.followers," Seguidor")})]})}),null===(n=e.followersData)||void 0===n?void 0:n.map((function(n){return Object(r.jsx)(Bn,{children:Object(r.jsxs)(s.b,{to:"userfollower",onClick:function(){return a(n.login)},children:[Object(r.jsx)(un,{title:n.login,titleSize:16,image:n.avatar_url}),Object(r.jsx)(x.c,{size:25,color:"#fff"})]})},n.login)}))]}),Object(r.jsx)(On,{})]})},qn=function(n){var t=n.isPrivate,e=void 0!==t&&t,o=n.component,i=Object(F.a)(n,["isPrivate","component"]),a=y().data;return Object(r.jsx)(j.b,Object(D.a)(Object(D.a)({},i),{},{render:function(){return e===!!a.userData?Object(r.jsx)(o,{}):Object(r.jsx)(j.a,{to:{pathname:e?"/":"/user"}})}}))};function Tn(){var n=Object(l.a)(["\n  border-bottom: 1px solid #7070705a;\n  padding: 25px 0 25px 0;\n\n  &:nth-child(2) {\n    padding-top: 80px;\n  }\n\n  &:last-child {\n    padding-bottom: 100px;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  svg {\n    position: absolute;\n    left: 90%;\n    transform: translateY(-170%);\n  }\n"]);return Tn=function(){return n},n}function Xn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  z-index: 1;\n\n  width: 100%;\n  height: 68px;\n  background-color: #1f1f1f;\n\n  margin-bottom: 25px;\n\n  svg {\n    margin-left: 20px;\n  }\n\n  h1 {\n    font-size: 17px;\n    margin-right: 50%;\n    transform: translateX(50%);\n    color: #fff;\n  }\n"]);return Xn=function(){return n},n}function Zn(){var n=Object(l.a)(["\n  height: 100vh;\n\n  a {\n    text-decoration: none;\n  }\n\n  div:last-child {\n    border-bottom: 0;\n  }\n"]);return Zn=function(){return n},n}var _n=u.c.div(Zn()),Qn=u.c.div(Xn()),Kn=u.c.div(Tn()),Vn=function(){var n,t=y(),e=t.data,i=t.showFollowerUser,a=Object(o.useCallback)((function(n){i(n)}),[i]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(_n,{children:[Object(r.jsx)(s.b,{to:"user",children:Object(r.jsxs)(Qn,{children:[Object(r.jsx)(x.b,{size:22,color:"#FFF"}),Object(r.jsx)("h1",{children:"".concat(1===e.userData.following)?"".concat(e.userData.following," Seguidores"):"".concat(e.userData.following," Seguidor")})]})}),null===(n=e.followingData)||void 0===n?void 0:n.map((function(n){return Object(r.jsx)(Kn,{children:Object(r.jsxs)(s.b,{to:"userFollower",onClick:function(){return a(n.login)},children:[Object(r.jsx)(un,{title:n.login,titleSize:16,image:n.avatar_url?n.avatar_url:"data:image/png;base64,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"}),Object(r.jsx)(x.c,{size:25,color:"#fff"})]})},n.login)}))]}),Object(r.jsx)(On,{})]})};function Wn(){var n=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  text-align: center;\n  justify-content: space-between;\n  padding: 0 20px 0px 20px;\n  background-color: #5252525d;\n  margin-bottom: 25px;\n  height: 97px;\n\n  a {\n    text-decoration: none;\n    color: #fff;\n  }\n\n  h1 {\n    font-size: 40px;\n  }\n  p {\n    font-weight: lighter;\n    font-size: 17px;\n  }\n"]);return Wn=function(){return n},n}function Hn(){var n=Object(l.a)(["\n  margin: 0 0 25px 30px;\n  padding-top: 8px;\n\n  p {\n    font-weight: lighter;\n    font-size: 18px;\n    line-height: 1.6;\n  }\n\n  &:last-child {\n    padding-bottom: 100px;\n  }\n"]);return Hn=function(){return n},n}function Mn(){var n=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 126px;\n  padding-bottom: 65px;\n  background-color: #1f1f1f;\n  margin-bottom: 80px;\n\n  h1 {\n    font-size: 17px;\n    position: absolute;\n    top: 2.5%;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n\n  a {\n    display: flex;\n    text-decoration: none;\n    color: #fff;\n    font-size: 17px;\n    font-weight: lighter;\n    transition: color 0.2s;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin: 0 20px 0px 12px;\n    }\n  }\n"]);return Mn=function(){return n},n}function Yn(){var n=Object(l.a)(["\n  height: 100vh;\n\n  svg {\n    margin-right: 8px;\n  }\n\n  img {\n    height: 115px;\n    border-radius: 50%;\n    border: 3px solid #fff;\n    position: absolute;\n    top: 68.5px;\n\n    left: 50%;\n    transform: translateX(-50%);\n  }\n"]);return Yn=function(){return n},n}var $n=u.c.div(Yn()),nt=u.c.div(Mn(),Object(T.a)(.2,"#fff")),tt=u.c.div(Hn()),et=u.c.div(Wn()),rt=function(){var n=y(),t=n.followerUserData,e=n.signIn,i=Object(o.useCallback)((function(n){e({loginName:n})}),[e]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(An,{children:Object(r.jsxs)($n,{children:[Object(r.jsxs)(nt,{children:[Object(r.jsx)(s.b,{to:"user",children:Object(r.jsx)(x.b,{size:24})}),Object(r.jsx)("a",{target:"_blank",rel:"noreferrer",href:null===t||void 0===t?void 0:t.html_url,children:Object(r.jsx)("h1",{children:"#".concat(null===t||void 0===t?void 0:t.login)})}),Object(r.jsxs)(s.b,{to:"/",onClick:function(){return i(null===t||void 0===t?void 0:t.login)},children:["Salvar ",Object(r.jsx)(x.g,{size:20,color:"#5CBC29"})]})]}),Object(r.jsx)("img",{src:null===t||void 0===t?void 0:t.avatar_url,alt:"Avatar Logo"}),Object(r.jsx)(un,{title:(null===t||void 0===t?void 0:t.name)?null===t||void 0===t?void 0:t.name:"-",titleSize:26,isTitleUppercase:!0}),Object(r.jsxs)(tt,{children:[Object(r.jsxs)("p",{children:[(null===t||void 0===t?void 0:t.email)&&Object(r.jsx)(V.c,{}),null===t||void 0===t?void 0:t.email]}),Object(r.jsxs)("p",{children:[(null===t||void 0===t?void 0:t.location)&&Object(r.jsx)(V.b,{}),null===t||void 0===t?void 0:t.location]}),Object(r.jsxs)("p",{children:[(null===t||void 0===t?void 0:t.company)&&Object(r.jsx)(V.a,{}),null===t||void 0===t?void 0:t.company]})]}),Object(r.jsxs)(et,{children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:null===t||void 0===t?void 0:t.followers}),Object(r.jsx)("p",{children:"Seguidores"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:null===t||void 0===t?void 0:t.following}),Object(r.jsx)("p",{children:"Seguindo"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:null===t||void 0===t?void 0:t.public_repos}),Object(r.jsx)("p",{children:"Repos"})]})]}),(null===t||void 0===t?void 0:t.bio)&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(un,{title:"Bio",titleSize:26,isTitleUppercase:!0}),Object(r.jsx)(tt,{children:Object(r.jsx)("p",{children:null===t||void 0===t?void 0:t.bio})})]})]})}),Object(r.jsx)(On,{})]})},ot=function(){return Object(r.jsxs)(j.d,{children:[Object(r.jsx)(qn,{path:"/",exact:!0,component:K}),Object(r.jsx)(qn,{path:"/user",component:wn,isPrivate:!0}),Object(r.jsx)(qn,{path:"/repos",component:Jn,isPrivate:!0}),Object(r.jsx)(qn,{path:"/followers",component:Gn,isPrivate:!0}),Object(r.jsx)(qn,{path:"/following",component:Vn,isPrivate:!0}),Object(r.jsx)(qn,{path:"/userFollower",component:rt,isPrivate:!0})]})},it=function(n){var t=n.children;return Object(r.jsx)(k,{children:Object(r.jsx)(dn,{children:t})})},at=function(){return Object(r.jsxs)(s.a,{children:[Object(r.jsx)(it,{children:Object(r.jsx)(ot,{})}),Object(r.jsx)(d,{})]})};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(at,{})}),document.getElementById("root"))}},[[224,1,2]]]);
//# sourceMappingURL=main.4b86d05f.chunk.js.map