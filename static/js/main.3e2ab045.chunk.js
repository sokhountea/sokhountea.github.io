(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{21:function(e,s,t){},22:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var c=t(0),i=t(3),n=t.n(i),l=t(10),a=t.n(l),r=(t(21),t(11)),o=t(12),j=t(6),d=t(15),h=t(14),b=(t(22),t(5)),m=t(4),O=t(2),x=t(37),p=t(13),u=t.n(p),g=t.p+"static/media/pfp.72bdc75f.png",v=t.p+"static/media/pfp-draw.7c11f46c.png",f=t.p+"static/media/Sokhountea-Sy-CV.75cb2483.pdf",N=t.p+"static/media/ss-v2-1.ddc94ad7.png",k=t.p+"static/media/ss-v2-2.fdb57dc2.png",y=t.p+"static/media/ss-v2-3.fb237998.png",w=t.p+"static/media/ss-v2-4.71501b26.png",S=function(e){Object(d.a)(t,e);var s=Object(h.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=s.call(this,e)).state={currentNode:" ",offScroll:!1,isLandscape:!1},c.waitAndScrollToNode=c.waitAndScrollToNode.bind(Object(j.a)(c)),c.scrollToNode=c.scrollToNode.bind(Object(j.a)(c)),c.handleClickOutside=c.handleClickOutside.bind(Object(j.a)(c)),c}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"scrollToNode",value:function(e){Object(x.a)(e,{behavior:"smooth"})}},{key:"waitAndScrollToNode",value:function(e){this.closeMenu(),setTimeout((function(){Object(x.a)(e,{behavior:"smooth"})}),300)}},{key:"handleMenuClick",value:function(e){var s=document.getElementById("nav-links"),t=document.getElementById("content"),c=document.getElementById("overlay");"box2"===e.className?(e.classList.add("open"),s.classList.add("open"),t.classList.add("move-left"),c.classList.add("open")):this.closeMenu()}},{key:"handleClickOutside",value:function(e){this.collapse.contains(e.target)||this.menu.contains(e.target)||this.closeMenu()}},{key:"closeMenu",value:function(){document.getElementById("box2").classList="box2",document.getElementById("nav-links").classList="collapsible",document.getElementById("content").classList="content",document.getElementById("overlay").classList="overlay"}},{key:"render",value:function(){var e=this;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("div",{className:"overlay",id:"overlay"}),Object(c.jsxs)("div",{className:"bar",children:[Object(c.jsx)("div",{className:"box1",children:Object(c.jsxs)("div",{className:"title",onClick:function(){return e.scrollToNode(e.main)},children:["SS.",Object(c.jsx)("span",{})]})}),Object(c.jsxs)("div",{className:"box2",id:"box2",ref:function(s){return e.menu=s},onClick:function(){return e.handleMenuClick(e.menu)},children:[Object(c.jsxs)("div",{id:"hamburger",children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]}),Object(c.jsxs)("div",{id:"cross",children:[Object(c.jsx)("span",{}),Object(c.jsx)("span",{})]})]})]}),Object(c.jsx)("div",{ref:function(s){return e.collapse=s},className:"collapsible",id:"nav-links",children:Object(c.jsxs)("ul",{children:[Object(c.jsx)("li",{onClick:function(){return e.waitAndScrollToNode(e.main)},children:Object(c.jsx)("span",{children:"Home"})}),Object(c.jsx)("li",{onClick:function(){return e.waitAndScrollToNode(e.about)},children:Object(c.jsx)("span",{children:"About"})}),Object(c.jsx)("li",{onClick:function(){return e.waitAndScrollToNode(e.projects)},children:Object(c.jsx)("span",{children:"Projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"pdf-link",href:f,target:"_blank",rel:"noreferrer",children:"Resume"})}),Object(c.jsx)("li",{children:Object(c.jsxs)("div",{className:"social links",children:[Object(c.jsxs)("a",{href:"mailto:sokhountea.sy@mail.mcgill.ca",rel:"noreferrer",children:[" ",Object(c.jsx)(O.a,{className:"icon",icon:b.a})]}),Object(c.jsxs)("a",{href:"https://github.com/sokhountea",target:"_blank",rel:"noreferrer",children:[" ",Object(c.jsx)(O.a,{className:"icon",icon:m.a})]}),Object(c.jsxs)("a",{href:"https://www.linkedin.com/in/sokhountea-s-99068a180/",target:"_blank",rel:"noreferrer",children:[" ",Object(c.jsx)(O.a,{className:"icon",icon:m.b})]})]})})]})}),Object(c.jsxs)("div",{className:"content",id:"content",children:[Object(c.jsxs)("div",{ref:function(s){return e.main=s},className:"section main",id:"main",children:[Object(c.jsx)("div",{id:"section-main",children:Object(c.jsx)("div",{className:"all",children:Object(c.jsx)("div",{className:"main bio",children:Object(c.jsx)("div",{children:Object(c.jsxs)(u.a,{delay:250,children:[Object(c.jsxs)("p",{children:["Hello! I\u2019m",Object(c.jsx)("br",{}),Object(c.jsxs)("span",{className:"name",children:["Sokhountea Sy",Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:"/s\u014d-ko\u035eon-t\u0113/"})]}),Object(c.jsx)("br",{}),"and I love creating pretty things.",Object(c.jsx)("br",{})]}),Object(c.jsx)("p",{className:"bio text",children:"Full stack developer, based in QC, CAN, currently working on finding the tech stack I am the most comfortable with."}),Object(c.jsx)("button",{onClick:function(){return e.scrollToNode(e.projects)},children:"My Projects"})]})})})})}),Object(c.jsxs)("span",{className:"ocean",children:[Object(c.jsx)("div",{className:"wave"}),Object(c.jsx)("div",{className:"wave"})]})]}),Object(c.jsx)("div",{ref:function(s){return e.about=s},className:"section about",id:"about",children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"all",children:[Object(c.jsx)("h1",{children:"About Me."}),Object(c.jsxs)("div",{className:"aboutTop",children:[Object(c.jsx)("div",{className:"aboutTopLeft",children:Object(c.jsx)("div",{children:Object(c.jsxs)("p",{children:["Hello! I'm Sokhountea. I'm a student in my last year at",Object(c.jsx)("b",{children:" McGill University"})," with a major in Computer Science and a minor in Mathematics.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:Object(c.jsx)("em",{children:'"I love creating pretty things"'})}),", this sentence applies to my hobbies ever since I was young. During the early years of Tumblr, I was obsessed with editing images and drawing, and I had\xa0",Object(c.jsx)("span",{style:{display:"inline-block"},children:Object(c.jsx)("a",{href:"https://sokhountea.github.io/photography-template/#/portfolio/archive",target:"_blank",rel:"noreferrer",children:"multiple blogs"})}),"\xa0where I would publish my graphics. I would stay up all night editing my blogs' themes, even though the code looked like gibberish at that time. I spent a very big chunk of my teenager years doing that, so naturally, here I am, super into",Object(c.jsx)("b",{children:" web development"}),"!",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"I started learning HTML/CSS and JS during summer 2020. Then, from then on, as I realized how fun and satisfying designing things and making them come into real life is, I have continuously practiced by working on numerous projects and learning new technologies.",Object(c.jsx)("br",{}),Object(c.jsx)("br",{})]})})}),Object(c.jsx)("div",{className:"image-content",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"image",children:[Object(c.jsx)("img",{className:"scale",src:v,alt:"about"}),Object(c.jsx)("img",{className:"scale",src:g,alt:"about"})]}),Object(c.jsx)("div",{className:"location",children:Object(c.jsxs)("div",{children:[Object(c.jsx)(O.a,{icon:b.c}),Object(c.jsx)("span",{children:" Montreal, QC, CAN"})]})})]})})]}),Object(c.jsxs)("div",{className:"aboutBottom",children:[Object(c.jsx)("p",{children:"Here are some technologies & tools I've worked with:"}),Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsxs)("ul",{className:"list1",children:[Object(c.jsx)("li",{children:" Java"}),Object(c.jsx)("li",{children:" HTML & (S)CSS"}),Object(c.jsx)("li",{children:" JavaScript"}),Object(c.jsx)("li",{children:" React.js"}),Object(c.jsx)("li",{children:" Node.js"})]}),Object(c.jsxs)("ul",{className:"list1",children:[Object(c.jsx)("li",{children:" REST API"}),Object(c.jsx)("li",{children:" Styled Components"}),Object(c.jsx)("li",{children:" SQL "}),Object(c.jsx)("li",{children:" Git"}),Object(c.jsx)("li",{children:" Photoshop"})]})]})]})]})})}),Object(c.jsx)("div",{ref:function(s){return e.projects=s},className:"section projects",id:"projects",children:Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"all",children:[Object(c.jsx)("div",{className:"extended-heading",children:Object(c.jsx)("h1",{children:"My Projects."})}),Object(c.jsxs)("div",{className:"projects-all",children:[Object(c.jsxs)("div",{className:"project block",children:[Object(c.jsx)("img",{className:"cropped-img",src:w,alt:"proj-1"}),Object(c.jsx)("div",{className:"txt",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"project-title",children:[Object(c.jsx)("h4",{children:"Photography Portfolio"}),Object(c.jsx)("span",{})]}),Object(c.jsx)("p",{children:"Designed and developed a responsive photography portfolio website. Design is kept minimalist to let the photographs stand out. Implemented a simple backend that allows sending emails through a form. This project helped me get more comfortable when communicating with the backend."}),Object(c.jsxs)("ul",{className:"tech-list",children:[Object(c.jsx)("li",{children:"React.js"}),Object(c.jsx)("li",{children:"SCSS"}),Object(c.jsx)("li",{children:"Node.js"}),Object(c.jsx)("li",{children:"Styled Components"})]}),Object(c.jsxs)("ul",{className:"link-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/sokhountea/photography-template",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(O.a,{className:"icon",icon:m.a})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://sokhountea.github.io/photography-template/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(O.a,{className:"icon",icon:b.b})})})]})]})})]}),Object(c.jsxs)("div",{className:"project block",children:[Object(c.jsx)("img",{className:"cropped-img",src:y,alt:"proj-1"}),Object(c.jsx)("div",{className:"txt",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"project-title",children:[Object(c.jsx)("h4",{children:"My Portfolio"}),Object(c.jsx)("span",{})]}),Object(c.jsx)("p",{children:"A single page application that is responsive and interactive. This project helped me get more comfortable working with React.js and work with a CSS preprocessor for the first time."}),Object(c.jsxs)("ul",{className:"tech-list",children:[Object(c.jsx)("li",{children:"React.js"}),Object(c.jsx)("li",{children:"SCSS"})]}),Object(c.jsxs)("ul",{className:"link-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/sokhountea/my-portfolio",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(O.a,{className:"icon",icon:m.a})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://sokhountea.github.io/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(O.a,{className:"icon",icon:b.b})})})]})]})})]}),Object(c.jsxs)("div",{className:"project block",children:[Object(c.jsx)("img",{className:"cropped-img",src:k,alt:"proj-1"}),Object(c.jsx)("div",{className:"txt",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"project-title",children:[Object(c.jsx)("h4",{children:"McGill SOCS"}),Object(c.jsx)("span",{})]}),Object(c.jsx)("p",{children:"Designed a new responsive and interactive look to the current McGill's SOCS. Implemented a simple backend that allows users to dynamically modify the content of some pages, like the Events page, where they can add new listings."}),Object(c.jsxs)("ul",{className:"tech-list",children:[Object(c.jsx)("li",{children:"React.js"}),Object(c.jsx)("li",{children:"Styled Components"}),Object(c.jsx)("li",{children:"Node.js"}),Object(c.jsx)("li",{children:"MySQL"}),Object(c.jsx)("li",{children:"REST API"})]})]})})]}),Object(c.jsxs)("div",{className:"project block",children:[Object(c.jsx)("img",{className:"cropped-img",src:N,alt:"proj-1"}),Object(c.jsx)("div",{className:"txt",children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"project-title",children:[Object(c.jsx)("h4",{children:"Tic Tac Toe"}),Object(c.jsx)("span",{})]}),Object(c.jsx)("p",{children:"A simple web page that generates a board game with the same concept as Tic Tac Toe and allows two users to play against one another. This is my first web development project."}),Object(c.jsxs)("ul",{className:"tech-list",children:[Object(c.jsx)("li",{children:"JS"}),Object(c.jsx)("li",{children:"jQuery"}),Object(c.jsx)("li",{children:"HTML & CSS"})]}),Object(c.jsxs)("ul",{className:"link-list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/sokhountea/tictactoe2020",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(O.a,{className:"icon",icon:m.a})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://sokhountea.github.io/tictactoe2020/",target:"_blank",rel:"noreferrer",children:Object(c.jsx)(O.a,{className:"icon",icon:b.b})})})]})]})})]})]})]})})}),Object(c.jsx)("footer",{children:Object(c.jsxs)("div",{className:"all",children:[Object(c.jsxs)("div",{className:"social links",children:[Object(c.jsxs)("a",{href:"mailto:sokhountea.sy@mail.mcgill.ca",rel:"noreferrer",children:[" ",Object(c.jsx)(O.a,{className:"icon",icon:b.a})]}),Object(c.jsxs)("a",{href:"https://github.com/sokhountea",target:"_blank",rel:"noreferrer",children:[" ",Object(c.jsx)(O.a,{className:"icon",icon:m.a})]}),Object(c.jsxs)("a",{href:"https://www.linkedin.com/in/sokhountea-s-99068a180/",target:"_blank",rel:"noreferrer",children:[" ",Object(c.jsx)(O.a,{className:"icon",icon:m.b})]})]}),Object(c.jsx)("p",{children:"Sokhountea Sy"})]})})]})]})}}]),t}(i.Component);a.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(S,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3e2ab045.chunk.js.map