(this["webpackJsonpweb-deploy-example"]=this["webpackJsonpweb-deploy-example"]||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var a,r,c=t(4),i=t(26),s=t.n(i),o=t(11),u=t(58),b=t(7),p=t(9),j=t(32),l=t(31),m=t(1),d=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(n){var t=n.getCLS,a=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),a(e),r(e),c(e),i(e)}))},O=(t(38),t(20)),f=t.n(O),h=t(29),x=t(23),g=(t.p,t(40),t(21)),v=t(16),w=t(57),k=t.n(w),y=k()(a||(a=Object(v.a)(["\n  query getNames{\n    getNames\n  }\n"]))),N=k()(r||(r=Object(v.a)(["\n  mutation submitName(\n    $name: String!\n  ){\n    submitName(\n      name: $name\n    )\n  }\n"]))),S=t(8);var C=function(){var e=Object(g.b)(y),n=e.loading,t=e.error,a=e.data,r=e.refetch,i=Object(g.a)(N),s=Object(x.a)(i,1)[0],o=Object(c.useState)(""),u=Object(x.a)(o,2),b=u[0],p=u[1],j=function(){var e=Object(h.a)(f.a.mark((function e(n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!new RegExp("^[a-zA-Z0-9]*$").test(b)){e.next=10;break}return e.next=5,s({variables:{name:b}});case 5:e.sent,p(""),r(),e.next=11;break;case 10:alert("please enter a valid name(with only letters and numbers).");case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsxs)("form",{onSubmit:j,children:[Object(S.jsx)("span",{children:"enter a name"}),Object(S.jsx)("br",{}),Object(S.jsx)("input",{type:"text",value:b,onChange:function(e){p(e.target.value)}}),Object(S.jsx)("input",{type:"submit",value:"Submit"})]}),Object(S.jsx)("div",{children:n?Object(S.jsx)("span",{children:"Loading..."}):t?Object(S.jsx)("span",{children:"Error..."}):a.getNames.map((function(e,n){return Object(S.jsxs)("span",{children:[e,Object(S.jsx)("br",{})]},n)}))})]})};t(43).config();var F=new j.a({uri:"http://test-front-back.herokuapp.com/"}),D=new l.a({uri:"ws://test-front-back.herokuapp.com/",options:{reconnect:!0}}),E=Object(p.d)((function(e){var n=e.query,t=Object(m.l)(n);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),D,F),L=new o.a({link:E,cache:(new u.a).restore({})}),$=Object(S.jsx)(b.a,{client:L,children:Object(S.jsx)(C,{})});s.a.render($,document.getElementById("root")),d()}},[[55,1,2]]]);
//# sourceMappingURL=main.79ac8ae2.chunk.js.map