(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/ProfilePicture.1861e83f.png"},function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),i=n.n(c),o=(n(16),n(1)),l=n(2),s=n(4),u=n(3),m=n(5),p=n(6),f=(n(17),n(18),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={currentPage:"about"},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getPageClass",value:function(e){return e===this.state.currentPage?"active":""}},{key:"handlePageChange",value:function(e){this.setState({currentPage:e}),this.props.setPage(e)}},{key:"renderPageOptions",value:function(){var e=this;return Object.keys(this.props.pages).map(function(t){var n=e.props.pages[t];return r.a.createElement("li",{className:e.getPageClass(n),onClick:e.handlePageChange.bind(e,n),key:n}," ",t," ")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"NavBar"},r.a.createElement("div",{className:"NavBar-nav-options"},r.a.createElement("ul",null,this.renderPageOptions())))}}]),t}(r.a.Component)),b=(n(19),n(9)),d=n.n(b),h=(n(20),{color:"#6b727f",fontSize:"250%"}),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"profile-container"},r.a.createElement("img",{className:"profile-pic",src:d.a,alt:""}),r.a.createElement("ul",{className:"icon-container"},r.a.createElement("li",{className:"links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/pablo-imeri"},r.a.createElement("i",{className:"fab fa-linkedin",style:h}))),r.a.createElement("li",{className:"links"},r.a.createElement("a",{href:"https://www.github.com/pimeri"},r.a.createElement("i",{className:"fab fa-github-square",style:h})))))}}]),t}(r.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-div"},r.a.createElement(g,null),r.a.createElement("p",null,"New Graduate from UC Santa Cruz with a bachelors in Computer Science located in San Francisco.",r.a.createElement("br",null)," Experienced in backend and frontend development, Looking for Software Engineering opportunities in the Bay Area."))}}]),t}(r.a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null," ",r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/f/f9/Road-under-construction.png",alt:""})," ")}}]),t}(r.a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{width:"40%",src:"http://pngimg.com/uploads/under_construction/under_construction_PNG46.png",alt:""}))}}]),t}(r.a.Component),v=(n(21),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{className:"my-image",alt:"some stuff",src:"http://pngimg.com/uploads/under_construction/under_construction_PNG42.png"}))}}]),t}(r.a.Component)),k={ABOUT:"about",SKILLS:"skills",PROJECTS:"projects",CONTACT:"contact"},P=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={currentPage:"about"},n.setPage=n.setPage.bind(Object(p.a)(Object(p.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"setPage",value:function(e){this.setState({currentPage:e})}},{key:"renderCurrentPage",value:function(){switch(this.state.currentPage){case"about":return r.a.createElement(O,null);case"skills":return r.a.createElement(v,null);case"projects":return r.a.createElement(E,null);case"contact":return r.a.createElement(j,null);default:return r.a.createElement(O,null)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Pablo Imeri "),r.a.createElement(f,{setPage:this.setPage,pages:k}),r.a.createElement("div",{className:"CurrentPage"},this.renderCurrentPage()))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.a9ce36e4.chunk.js.map