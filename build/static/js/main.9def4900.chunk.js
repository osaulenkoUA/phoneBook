(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var r,a,c,o,u,s=n(0),i=n.n(s),l=n(18),b=n.n(l),p=n(1),f=n(35),h=n(48),m=n.n(h),g=n(3),O=n(53),d=n(7),j=n(9),v=Object(p.c)([],(r={},Object(g.a)(r,j.a.addContactSuccess,(function(e,t){var n=t.payload;return[].concat(Object(O.a)(e),[n])})),Object(g.a)(r,j.a.fetchContactsSuccess,(function(e,t){return t.payload})),Object(g.a)(r,j.a.removeContactsSuccess,(function(e,t){var n=t.payload;return e.filter((function(e){return e._id!==n}))})),r)),k=Object(p.c)("",Object(g.a)({},j.a.changeFilter,(function(e,t){return t.payload}))),E=Object(p.c)(!1,(a={},Object(g.a)(a,j.a.addContactRequest,(function(){return!0})),Object(g.a)(a,j.a.addContactSuccess,(function(){return!1})),Object(g.a)(a,j.a.addContactError,(function(){return!1})),Object(g.a)(a,j.a.fetchContactsRequest,(function(){return!0})),Object(g.a)(a,j.a.fetchContactsSuccess,(function(){return!1})),Object(g.a)(a,j.a.fetchContactsError,(function(){return!1})),Object(g.a)(a,j.a.removeContactsRequest,(function(){return!0})),Object(g.a)(a,j.a.removeContactsSuccess,(function(){return!1})),Object(g.a)(a,j.a.removeContactsError,(function(){return!1})),a)),C=Object(d.c)({items:v,filter:k,loading:E}),S=Object(p.c)("light",Object(g.a)({},j.a.changeTheme,(function(e,t){return t.payload}))),y=Object(d.c)({theme:S}),_=n(4),x={name:null,email:null},w=function(e,t){return t.payload.user},R=Object(p.c)(x,(c={},Object(g.a)(c,_.a.registerSuccess,w),Object(g.a)(c,_.a.logInSuccess,w),Object(g.a)(c,_.a.logOutSuccess,(function(){return x})),Object(g.a)(c,_.a.getCurrentUserSuccess,(function(e,t){return t.payload})),c)),q=Object(p.c)(null,(o={},Object(g.a)(o,_.a.registerSuccess,(function(e,t){return t.payload.token})),Object(g.a)(o,_.a.logInSuccess,(function(e,t){return t.payload.token})),Object(g.a)(o,_.a.logOutSuccess,(function(){return null})),o)),B=Object(p.c)(!1,(u={},Object(g.a)(u,_.a.registerRequest,(function(){return!0})),Object(g.a)(u,_.a.registerSuccess,(function(){return!1})),Object(g.a)(u,_.a.registerError,(function(){return!1})),Object(g.a)(u,_.a.logInRequest,(function(){return!0})),Object(g.a)(u,_.a.logInSuccess,(function(){return!1})),Object(g.a)(u,_.a.logInError,(function(){return!1})),u)),I=Object(d.c)({user:R,token:q,loading:B}),L={key:"auth",storage:m.a,whitelist:["token"]},U=Object(p.a)({reducer:{contacts:C,PhBookTheme:y,auth:Object(f.a)(L,I)}}),N=Object(f.b)(U),T=n(8),F=n(49),z=n(16),A=n(6),D=[{path:"/",label:"Home",exact:!0,component:Object(s.lazy)((function(){return n.e(6).then(n.bind(null,118))})),privat:!1,restricted:!1},{path:"/register",label:"Register",exact:!0,component:Object(s.lazy)((function(){return n.e(5).then(n.bind(null,120))})),privat:!1,restricted:!0},{path:"/login",label:"Login",exact:!0,component:Object(s.lazy)((function(){return n.e(4).then(n.bind(null,121))})),privat:!1,restricted:!0},{path:"/books",label:"Books",exact:!0,component:Object(s.lazy)((function(){return n.e(3).then(n.bind(null,119))})),privat:!0,restricted:!1}],M=n(26),H=function(e){return e.auth.token},P=function(e){return e.auth.user.name},J=function(e){var t=e.component,n=Object(M.a)(e,["component"]),r=Object(T.d)(H);return i.a.createElement(A.b,Object.assign({},n,{render:function(e){return r?i.a.createElement(t,e):i.a.createElement(A.a,{to:"/login"})}}))},V=function(e){var t=e.component,n=Object(M.a)(e,["component"]),r=Object(T.d)(H);return i.a.createElement(A.b,Object.assign({},n,{render:function(e){return r&&n.restricted?i.a.createElement(A.a,{to:"/books"}):i.a.createElement(t,e)}}))},W=n(107),K=n(50),Y=n.n(K),G={link:{display:"inline-block",textDecoration:"none",padding:12,fontWeight:700,color:"#2A363B"},activeLink:{color:"#E84A5F"}},Q=function(){var e=Object(T.d)(H);return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"PhoneBook"),i.a.createElement("nav",{className:Y.a.list},i.a.createElement(z.b,{exact:!0,to:"/",style:G.link,activeStyle:G.activeLink},"Home"),e&&i.a.createElement(z.b,{exact:!0,to:"/books",style:G.link,activeStyle:G.activeLink},"Books"),!e&&i.a.createElement(i.a.Fragment,null,i.a.createElement(z.b,{exact:!0,to:"/register",style:G.link,activeStyle:G.activeLink},"Register"),i.a.createElement(z.b,{exact:!0,to:"/login",style:G.link,activeStyle:G.activeLink},"Login"))))},X=n(24),Z=n(27),$=n.n(Z);var ee=function(){var e=Object(T.d)(P),t=Object(T.c)();return i.a.createElement("div",{className:$.a.wrapper},i.a.createElement("span",{className:$.a.title},"Wellcome,",e),i.a.createElement("button",{className:$.a.btn,type:"button",onClick:function(){return t(X.a.logOut())}},"Logout"))};var te=function(){var e=Object(T.d)(H);return i.a.createElement(i.a.Fragment,null,"string"===typeof e&&i.a.createElement(ee,null),i.a.createElement(Q,null))},ne=n(23),re={light:{color:"#000000",backgroundColor:"#ffffff"},dark:{color:"#ffffff",backgroundColor:"#000000"}},ae=n(34),ce=n.n(ae),oe=Object(T.b)((function(e){return{theme:ne.a.getTheme(e)}}))((function(e){var t=e.theme,n=e.title,r=e.children;return i.a.createElement("section",{className:ce.a.container,style:re[t]},i.a.createElement(W.a,{in:!0,appear:!0,timeout:1e3,classNames:ce.a,unmountOnExit:!0},i.a.createElement("h2",null,n)),i.a.createElement(te,null),r)})),ue=n(28),se=n.n(ue),ie=function(){var e=Object(T.c)();return i.a.createElement("div",{className:se.a.container},i.a.createElement("p",null,"Ligth"),i.a.createElement("input",{onChange:function(t){var n=t.target.checked;n||e(j.a.changeTheme("light")),n&&e(j.a.changeTheme("dark"))},type:"checkbox",id:"payt2",className:se.a.payt2}),i.a.createElement("label",{className:se.a.label,for:"payt2"},"ON"),i.a.createElement("p",null,"Dark"))},le=n(51),be=n.n(le),pe=(n(104),n(52)),fe=n.n(pe);function he(){return i.a.createElement("div",{className:fe.a.container},i.a.createElement(be.a,{type:"ThreeDots",color:"#563fd6e6",height:100,width:100}))}var me=function(){var e=Object(T.d)(ne.a.getLoading),t=Object(T.c)();return Object(s.useEffect)((function(){t(X.a.getCurrentUser())}),[]),i.a.createElement(z.a,null,i.a.createElement(ie,null),i.a.createElement(oe,null,e&&i.a.createElement(he,null),i.a.createElement(s.Suspense,{fallback:i.a.createElement("h1",null,"Loading...")},i.a.createElement(A.d,null,D.map((function(e){return e.privat?i.a.createElement(J,Object.assign({key:e.label},e)):i.a.createElement(V,Object.assign({key:e.label},e))}))))))};b.a.render(i.a.createElement(T.a,{store:U},i.a.createElement(F.a,{loading:null,persistor:N},i.a.createElement(me,null))),document.querySelector("#root"))},23:function(e,t,n){"use strict";var r=n(14),a=function(e){return e.contacts.items},c=function(e){return e.contacts.filter},o=Object(r.a)([a,c],(function(e,t){return e.filter((function(e){return e.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())}))}));t.a={getContacts:a,getFilter:c,getLoading:function(e){return e.contacts.loading},getTheme:function(e){return e.PhBookTheme.theme},getConatctList:o,getContactItem:function(e,t){return a(e).find((function(e){return e._id===t}))}}},24:function(e,t,n){"use strict";var r=n(17),a=n.n(r),c=n(22),o=n(19),u=n.n(o),s=n(4),i=function(e){u.a.defaults.headers.common.Authorization="Bearer ".concat(e)},l=function(){u.a.defaults.headers.common.Authorization=""};t.a={register:function(e){var t=e.name,n=e.email,r=e.password,o=e.passwordConfirm;return function(){var e=Object(c.a)(a.a.mark((function e(c){var l,b;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(s.a.registerRequest()),e.prev=1,e.next=4,u.a.post("https://fierce-plateau-20788.herokuapp.com/users/signup",{name:t,email:n,password:r,passwordConfirm:o});case 4:l=e.sent,b=l.data,i(b.token),c(s.a.registerSuccess(b)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),c(s.a.registerError(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logIn:function(e){var t=e.email,n=e.password;return function(){var e=Object(c.a)(a.a.mark((function e(r){var c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(s.a.logInRequest()),e.prev=1,e.next=4,u.a.post("https://fierce-plateau-20788.herokuapp.com/users/signin",{email:t,password:n});case 4:c=e.sent,o=c.data,i(o.token),r(s.a.logInSuccess(o)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r(s.a.logInError(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(s.a.logOutRequest()),e.prev=1,e.next=4,u.a.post("https://fierce-plateau-20788.herokuapp.com/users/logout");case 4:l(),t(s.a.logOutSuccess()),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(s.a.logOutError(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,c,o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=n(),c=r.auth.token){e.next=4;break}return e.abrupt("return");case 4:return i(c),t(s.a.getCurrentUserRequest()),e.prev=6,e.next=9,u.a.get("https://fierce-plateau-20788.herokuapp.com/users/current");case 9:o=e.sent,l=o.data,t(s.a.getCurrentUserSuccess(l)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(6),t(s.a.getCurrentUserError(e.t0));case 17:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(t,n){return e.apply(this,arguments)}}()}}},27:function(e,t,n){e.exports={title:"UserMenu_title__3BIcD",wrapper:"UserMenu_wrapper__2jT_f",btn:"UserMenu_btn__1einH"}},28:function(e,t,n){e.exports={container:"CheckBox_container__1MEhY",payt2:"CheckBox_payt2__2cbfP",label:"CheckBox_label__2VDl9"}},34:function(e,t,n){e.exports={container:"Section_container__3VywM",appear:"Section_appear__tdCv-",appearActive:"Section_appearActive__29yDB"}},4:function(e,t,n){"use strict";var r=n(1),a=Object(r.b)("auth/registerRequest"),c=Object(r.b)("auth/registerSuccess"),o=Object(r.b)("auth/registerError"),u=Object(r.b)("auth/logInRequest"),s=Object(r.b)("auth/logInSuccess"),i=Object(r.b)("auth/logInError"),l=Object(r.b)("auth/logOutRequest"),b=Object(r.b)("auth/logOutSuccess"),p=Object(r.b)("auth/logOutError"),f=Object(r.b)("auth/getCurrentUserRequest"),h=Object(r.b)("auth/getCurrentUserSuccess"),m=Object(r.b)("auth/getCurrentUserError");t.a={registerRequest:a,registerSuccess:c,registerError:o,logInRequest:u,logInSuccess:s,logInError:i,logOutRequest:l,logOutSuccess:b,logOutError:p,getCurrentUserRequest:f,getCurrentUserSuccess:h,getCurrentUserError:m}},50:function(e,t,n){e.exports={list:"Navigation_list__31_HR"}},52:function(e,t,n){e.exports={container:"Spiner_container__2qKU_"}},55:function(e,t,n){e.exports=n(105)},9:function(e,t,n){"use strict";var r=n(1),a=Object(r.b)("phoneBook/addRequest"),c=Object(r.b)("phoneBook/addSuccess"),o=Object(r.b)("phoneBook/addError"),u=Object(r.b)("phoneBook/fetchRequest"),s=Object(r.b)("phoneBook/fetchSuccess"),i=Object(r.b)("phoneBook/fetchError"),l=Object(r.b)("phoneBook/removeRequest"),b=Object(r.b)("phoneBook/removeSuccess"),p=Object(r.b)("phoneBook/removeError"),f=Object(r.b)("phoneBook/changeFilter"),h=Object(r.b)("phoneBook/changeTheme");t.a={addContactRequest:a,addContactSuccess:c,addContactError:o,fetchContactsRequest:u,fetchContactsSuccess:s,fetchContactsError:i,removeContactsRequest:l,removeContactsSuccess:b,removeContactsError:p,changeFilter:f,changeTheme:h}}},[[55,1,2]]]);
//# sourceMappingURL=main.9def4900.chunk.js.map