(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var s,a,i,c,r,o,l=n(1),b=n.n(l),j=n(20),d=n.n(j),h=n(2),m=(n(29),n(13)),u=[{id:1,title:"Andriod App Development",category:"Projects",shortDescription:"I never maintain hydrated, yet I always have my phone on me. Let me create a reminder app that becomes a lovable, nuisance!",description:"Test ",authorName:"Jesus Valencia Calvillo",authorAvatar:"./Portfolio-Website/assets/images/Bugdriod.gif",createdAt:"April 28 2022",cover:"/Portfolio-Website/assets/images/designer-1.jpg"},{id:2,title:"My Struggles of the CCNA Exam",category:"Networking",shortDescription:"I reflect on my strengths and weaknesses of the CCNA exam, my first step that introduced me to the problem solving world of IT.",description:"",authorName:"Jesus Valencia Calvillo",authorAvatar:"./Portfolio-Website/assets/images/Bugdriod.gif",createdAt:"March 13, 2022",cover:"/Portfolio-Website/assets/images/CiscoCCNA.jpg"},{id:3,title:"Developing my first Website",category:"Projects",shortDescription:"To prevent my brain and resume from overflowing, I needed a way to centralize all my skills and knowledge. That solution is my own website.",description:"Designing the blueprints to my website was the most difficult as I had to describe myself through visuals. I find myself to be relax and always listen to music when I work. The theme of lofi perfectly suits this, yet I had to present this in a colors. The",authorName:"Jesus Valencia Calvillo",authorAvatar:"./Portfolio-Website/assets/images/Bugdriod.gif",createdAt:"January 17, 2022",cover:"/Portfolio-Website/assets/images/html.gif"},{id:4,title:"Simple, popular Python",category:"Programming",shortDescription:"The ability to print Hello World in one line, an abundance of frameworks for web development, and automating tasks! Python is boundless!",description:"After finishing my first fibonacci sequence program, I compared it to my Java version of it. Needless to say, I have experimented more with python rather than any other language.",authorName:"Jesus Valencia Calvillo",authorAvatar:"./Portfolio-Website/assets/images/Bugdriod.gif",createdAt:"January 7, 2022",cover:"/Portfolio-Website/assets/images/Simple-Python.gif"}],x=(n(30),n(0)),g=function(e){var t=e.label;return Object(x.jsx)("p",{className:"chip",children:t})},f=(n(32),function(){return Object(x.jsx)("div",{className:"emptyList-wrap",children:Object(x.jsx)("img",{src:"./Portfolio-Website/assets/images/13525-empty.gif",alt:"empty"})})}),p=(n(33),n(7)),O=function(){var e=Object(h.g)().id,t=Object(l.useState)(null),n=Object(m.a)(t,2),s=n[0],a=n[1];return Object(l.useEffect)((function(){var t=u.find((function(t){return t.id===parseInt(e)}));t&&a(t)}),[]),Object(x.jsx)(x.Fragment,{children:s?Object(x.jsxs)("div",{className:"blog-wrap",children:[Object(x.jsx)("header",{children:Object(x.jsx)("h1",{children:s.title})}),Object(x.jsxs)(p.b,{className:"blog-goBack",to:"/",children:[Object(x.jsx)("span",{children:" \u2190"}),Object(x.jsx)("span",{children:"Go Back"})]}),Object(x.jsxs)("div",{className:"infocontainer",children:[Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"blogItem-wrap",children:Object(x.jsx)("img",{className:"blogItem-cover",src:s.cover,alt:"cover"})}),Object(x.jsxs)("p",{className:"blog-date",children:["Published ",s.createdAt]}),Object(x.jsx)("p",{className:"blog-desc",children:s.description})]})]}):Object(x.jsx)(f,{})})},v=(n(42),function(e){var t=e.blog,n=t.shortDescription,s=(t.description,t.title),a=t.createdAt,i=t.authorName,c=t.authorAvatar,r=t.cover,o=t.category,l=t.id;return Object(x.jsxs)("div",{className:"blogItem-wrap",children:[Object(x.jsx)("img",{className:"blogItem-cover",src:r,alt:"cover"}),Object(x.jsx)(g,{label:o}),Object(x.jsx)("h3",{children:s}),Object(x.jsxs)("p",{className:"blogItem-desc",children:[n,Object(x.jsx)("br",{})]}),Object(x.jsxs)("footer",{children:[Object(x.jsxs)("div",{className:"blogItem-author",children:[Object(x.jsx)("img",{src:c,alt:"avatar"}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h6",{children:i}),Object(x.jsx)("p",{children:a})]})]}),Object(x.jsx)(p.b,{className:"blogItem-link",to:"/blog/".concat(l),children:"Read More \u279d"})]})]})}),y=(n(43),function(e){var t=e.blogs;return Object(x.jsx)("div",{className:"blogContainer",children:Object(x.jsx)("div",{className:"blogList-wrap",children:t.map((function(e){return Object(x.jsx)(v,{blog:e})}))})})}),w=(n(44),function(){return Object(x.jsxs)("header",{className:"home-header",children:[Object(x.jsx)("h2",{children:"Welcome to my Blog"}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{children:["Use the search bar below to filter posts by category. ",Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),"Try Programming, Networking, or Pixel Art."]})]})}),N=(n(45),function(e){var t=e.formSubmit,n=e.value,s=e.handleSearchKey,a=e.clearSearch;return Object(x.jsx)("div",{className:"searchBar-wrap",children:Object(x.jsxs)("form",{onSubmit:t,children:[Object(x.jsx)("input",{type:"text",placeholder:"Search By Category",value:n,onChange:s}),n&&Object(x.jsx)("span",{onClick:a,children:"X"}),Object(x.jsx)("button",{children:"Go"})]})})}),C=function(){var e=Object(l.useState)(u),t=Object(m.a)(e,2),n=t[0],s=t[1],a=Object(l.useState)(""),i=Object(m.a)(a,2),c=i[0],r=i[1],o=function(){var e=u.filter((function(e){return e.category.toLowerCase().includes(c.toLowerCase().trim())}));s(e)};return Object(x.jsxs)("div",{children:[Object(x.jsx)(w,{}),Object(x.jsx)(N,{value:c,clearSearch:function(){s(u),r("")},formSubmit:function(e){e.preventDefault(),o()},handleSearchKey:function(e){return r(e.target.value)}}),n.length?Object(x.jsx)(y,{blogs:n}):Object(x.jsx)(f,{})]})},I=n(9),A=n(24),S=n(10),k=S.a.nav(s||(s=Object(I.a)(["\n  background: #3c408c;\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem calc((100vw - 1000px) / 2);\n  z-index: 10;\n  border-style: hidden hidden solid hidden;\n  border-color: #92a8d1;\n"]))),P=Object(S.a)(p.c)(a||(a=Object(I.a)(["\n  color: #fff;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  padding: 0 2rem;\n  height: 100%;\n  cursor: pointer;\n  color: #885ca4;\n  font-weight: bold;\n  font-size: 25px;\n  text-decoration: underline;\n"]))),W=Object(S.a)(A.a)(i||(i=Object(I.a)(["\n  display: none;\n  color: #fff;\n  @media screen and (max-width: 768px) {\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    transform: translate(-100%, 75%);\n    font-size: 1.8rem;\n    cursor: pointer;\n  }\n"]))),J=S.a.div(c||(c=Object(I.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: -24px;\n  /* Second Nav */\n  /* margin-right: 24px; */\n  /* Third Nav */\n  /* width: 100vw;\n  white-space: nowrap; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),B=S.a.nav(r||(r=Object(I.a)(["\n  display: flex;\n  align-items: center;\n  margin-right: 24px;\n  /* Third Nav */\n  /* justify-content: flex-end;\n  width: 100vw; */\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),T=(Object(S.a)(p.c)(o||(o=Object(I.a)(["\n  border-radius: 4px;\n  background: #256ce1;\n  padding: 10px 22px;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;s\n  transition: all 0.2s ease-in-out;\n  text-decoration: none;\n  /* Second Nav */\n  margin-left: 24px;\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: #fff;\n    color: #010606;\n  }\n"]))),function(){return Object(x.jsxs)(k,{children:[Object(x.jsx)(P,{to:"/",children:Object(x.jsx)("img",{src:"/Portfolio-Website/assets/images/home.png",width:"40",height:"40",alt:"home icon"})}),Object(x.jsx)(W,{}),Object(x.jsxs)(J,{children:[Object(x.jsx)(P,{to:"/About",activeStyle:!0,children:"About"}),Object(x.jsx)(P,{to:"/",activeStyle:!0,children:"Blog"}),Object(x.jsx)(P,{to:"/contact",activeStyle:!0,children:"Contact"})]}),Object(x.jsx)(B,{children:Object(x.jsx)("a",{href:"https://github.com/JesusCValencia",children:Object(x.jsx)("img",{src:"/Portfolio-Website/assets/images/github.png",width:"40",height:"40"})})})]})}),D=(n(48),function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("header",{className:"home-header",children:[Object(x.jsx)("h2",{children:"Contact Information"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"infocontainer",children:[Object(x.jsx)("br",{}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:["Email: ",Object(x.jsx)("a",{href:"mailto: jesuscalvalencia@gmail.com",children:"jesuscalvalencia@gmail.com"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("li",{children:["Github: ",Object(x.jsx)("a",{href:"https://github.com/JesusCValencia",children:"JesusCValencia"})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})]})]})})}),V=(n(49),function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("header",{className:"home-header",children:[Object(x.jsx)("h2",{children:"Who Am I?"}),Object(x.jsx)("br",{}),Object(x.jsxs)("div",{className:"infocontainer",children:[Object(x.jsx)("br",{}),Object(x.jsx)("div",{className:"blogItem-wrap",children:Object(x.jsx)("img",{className:"blogItem-coverAbout",src:"Portfolio-Website/assets/images/lofi.gif",alt:"about-coverImage"})}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)("p",{class:"thick",children:["Caffeine free coder, pixel drawing enthusiast with a nature of a calm tech practilist. Currently finishing my bachelor's degree in Computer Information Systems at USC Upstate, with an end goal as a SWE.",Object(x.jsx)("br",{}),Object(x.jsx)("br",{})," My ideal vacation... in my room with blackout curtains and a dimly lit workstation. Feel free to test out my lofi themed portfolio website!"]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})]})})}),E=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(T,{}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(h.d,{children:[Object(x.jsx)(h.b,{path:"/",exact:!0,component:C}),Object(x.jsx)(h.b,{path:"/blog/:id",component:O}),Object(x.jsx)(h.b,{path:"/contact",component:D}),Object(x.jsx)(h.b,{path:"/about",component:V}),Object(x.jsx)(h.a,{to:"/"})]})})]})};d.a.render(Object(x.jsx)(b.a.StrictMode,{children:Object(x.jsx)(p.a,{children:Object(x.jsx)(E,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.a7771704.chunk.js.map