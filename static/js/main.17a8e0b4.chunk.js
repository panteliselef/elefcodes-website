(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/instagram.c853076d.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/twitter.80ed8867.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram.a3810163.svg"},,,function(e,t,a){e.exports=a.p+"static/media/link-variant.3dd6c0e8.svg"},,,,,function(e,t,a){e.exports=a.p+"static/media/programmer3.ddf9074c.svg"},,function(e,t,a){e.exports=a.p+"static/media/loading.a50dc2aa.svg"},function(e,t,a){e.exports=a.p+"static/media/projects-page-image.1b8ae65c.svg"},function(e,t,a){e.exports=a.p+"static/media/progress-clock.ca3b4251.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram-page-image2.a08ef9a6.png"},function(e,t,a){e.exports=a.p+"static/media/heart.be90b5cc.svg"},function(e,t,a){e.exports=a.p+"static/media/open-in-new.5963e410.svg"},,function(e,t,a){e.exports=a(61)},,,,,function(e,t,a){},,function(e,t,a){},,,,,function(e,t,a){},,,,,,,function(e,t){},function(e,t,a){e.exports=a.p+"static/media/programmer1.c2597013.svg"},function(e,t,a){e.exports=a.p+"static/media/instagram-page-image.2918dc92.png"},function(e,t,a){e.exports=a.p+"static/media/test.888ca05e.jpg"},,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),c=a.n(s),l=(a(40),a(42),a(6)),o=a(7),i=a(9),m=a(8),u=a(10),d=a(14),p=a(12),f=a.n(p),g=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"welcome"},r.a.createElement("div",{className:"photo"}),r.a.createElement("div",{className:"title"},r.a.createElement("span",{className:"blue-box"},"New "),"Website is coming soon ...")),r.a.createElement("div",{className:"object"},r.a.createElement("div",null,"Scan this nametag on Instagram to ",r.a.createElement("span",null," follow")," me"),r.a.createElement("img",{src:f.a,alt:""})))}}]),t}(n.Component),E=function(e){var t=e.text,a=e.coloredText;return r.a.createElement("div",{className:"title"},t[0]," ",r.a.createElement("span",{className:"blue-box"},a)," ",t[1])},h=a(26),b=a.n(h),v=a(17),y=a.n(v),x=a(18),w=a.n(x),R=a(63),O=function(e){var t=e.url;return r.a.createElement(R.a,{className:"rounded-button",to:t},"Recent Posts")},N=(a(47),function(e){var t=e.toggleBurger,a=e.opened;return r.a.createElement("div",{className:"burger",onClick:t},r.a.createElement("div",{id:"bar1",className:a?"change line":"line"}),r.a.createElement("div",{id:"bar2",className:a?"change line":"line"}),r.a.createElement("div",{id:"bar3",className:a?"change line":"line"}))}),j=r.a.forwardRef(function(e,t){e.visible;var a=e.doOnClick;return r.a.createElement("div",{ref:t,className:"menu-container disabled"},r.a.createElement("div",{className:"container"},r.a.createElement(E,{text:["Menu"]}),r.a.createElement("ul",null,r.a.createElement("li",{className:"title",onClick:a},r.a.createElement(R.a,{to:"/"},"Home")),r.a.createElement("li",{className:"title",onClick:a},r.a.createElement(R.a,{to:"/instagram"},"Instagram")),r.a.createElement("li",{className:"title",onClick:a},r.a.createElement(R.a,{to:"/projects"},"Projects")))),r.a.createElement("div",{className:"object"},r.a.createElement("div",null,"Scan this nametag on Instagram to ",r.a.createElement("span",null," follow")," me"),r.a.createElement("img",{src:f.a,alt:""})))}),k=a(2),M=function(e){var t=e.top;return r.a.createElement("div",{style:{height:t}})},C=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).toggleBurger=function(){e.setState({burgerMenuOpened:!e.state.burgerMenuOpened})},e.closeMenu=function(t){e.props.location.pathname===t.target.getAttribute("href")&&(e.setState({burgerMenuOpened:!e.state.burgerMenuOpened}),e.menuRef.current.classList.add("disabled"),setTimeout(function(){e.menuRef.current.style.display="none"},500),document.body.style.overflowY="scroll")},e.toggleBurger=function(){e.setState({burgerMenuOpened:!e.state.burgerMenuOpened}),console.log(e.menuRef.current.classList),e.state.burgerMenuOpened?(document.body.style.overflowY="scroll",e.menuRef.current.classList.add("disabled"),setTimeout(function(){e.menuRef.current.style.display="none"},400)):(document.body.style.overflowY="hidden",e.menuRef.current.style.display="block",setTimeout(function(){e.menuRef.current.classList.remove("disabled")},50))},e.componentDidMount=function(){e.menuRef.current.classList.add("disabled"),document.body.style.overflowY="scroll",setTimeout(function(){e.menuRef.current.style.display="none"},500)},e.menuRef=r.a.createRef(),e.state={burgerMenuOpened:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k.Grid,{fluid:!0},r.a.createElement(k.Row,null,r.a.createElement(k.Col,{xs:8,md:7},r.a.createElement(E,{text:["Read about the stuff","doing"],coloredText:"I am"}))),r.a.createElement(k.Row,null,r.a.createElement(k.Col,{xs:12,className:"no-padding"},r.a.createElement(k.Row,{center:"xs"},r.a.createElement(k.Col,{xs:12,className:"no-padding"},r.a.createElement("img",{className:"main-photo",src:b.a,alt:""}))))),r.a.createElement(M,{top:"1em"}),r.a.createElement("div",{style:{maxWidth:"1200px",margin:"auto"}},r.a.createElement(k.Row,{between:"xs",middle:"xs"},r.a.createElement(k.Col,{xsOffset:4,mdOffset:0,xs:4,md:2,className:"padding-1"},r.a.createElement(k.Row,{center:"xs"},r.a.createElement(k.Col,{xs:6,md:4},r.a.createElement("a",{href:"https://twitter.com/elefcodes"},r.a.createElement("img",{src:y.a,width:"auto",height:"28px",style:{zIndex:"1"},alt:""}))),r.a.createElement(k.Col,{xs:6,md:2},r.a.createElement("a",{href:"https://instagram.com/elefcodes"},r.a.createElement("img",{src:w.a,width:"auto",height:"28px",style:{zIndex:"1"},alt:""}))))),r.a.createElement(k.Col,{xs:12,md:4,className:"padding-1"},r.a.createElement(O,{url:"/instagram"})),r.a.createElement(k.Col,{xsOffset:0,xs:12,md:4,className:"padding-1"},r.a.createElement("div",{id:"some-text",style:{maxWidth:"20em",fontWeight:"bold",lineHeight:"1.5em",margin:"auto"}},"I am a Web Developer and a CS student with a lot of experience on creating awesome UIs and UXs")))),r.a.createElement(M,{top:"20px"})),r.a.createElement(N,{toggleBurger:this.toggleBurger,opened:this.state.burgerMenuOpened}),r.a.createElement(j,{doOnClick:this.closeMenu,ref:this.menuRef}))}}]),t}(n.Component),L=(a(54),a(65)),S=a(64),T=a(62),D=(a(55),a(28)),I=a.n(D),Y=a(21),B=a.n(Y),A=function(e){var t=e.projectName,a=e.descrition,n=e.url;return r.a.createElement("div",{className:"project-card"},r.a.createElement("div",{className:"top-section"},r.a.createElement("img",{src:I.a,style:{transform:"translateY(-0.4em)",width:"50%"}}),r.a.createElement("div",{className:"top-section-image"})),r.a.createElement("div",{className:"bottom-section"},r.a.createElement(k.Grid,{fluid:!0},r.a.createElement(k.Row,{between:"xs"},r.a.createElement(k.Col,{xs:10},r.a.createElement("div",{className:"subtitle"},t)),r.a.createElement(k.Col,{xs:1},r.a.createElement("a",{href:n},r.a.createElement("img",{src:B.a})))),r.a.createElement(k.Row,null,r.a.createElement("div",{className:"details"},a||"Description of the project. Description of the project. Description of the project")))))},W=a(29),z=a.n(W),P=a(30),G=a.n(P),V=function(){return r.a.createElement("div",{className:"loading-div shadow"},r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0.7em"}},r.a.createElement("div",{className:"loading-div-text"},"Loading"),r.a.createElement("img",{src:G.a})),r.a.createElement("div",{className:"animated-bar"}))},H=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState({selectedValue:t.target.value})},e.closeMenu=function(t){e.props.location.pathname===t.target.getAttribute("href")&&(e.setState({burgerMenuOpened:!e.state.burgerMenuOpened}),e.menuRef.current.classList.add("disabled"),setTimeout(function(){e.menuRef.current.style.display="none"},500),document.body.style.overflowY="scroll")},e.toggleBurger=function(){e.setState({burgerMenuOpened:!e.state.burgerMenuOpened}),console.log(e.menuRef.current.classList),e.state.burgerMenuOpened?(document.body.style.overflowY="scroll",e.menuRef.current.classList.add("disabled"),setTimeout(function(){e.menuRef.current.style.display="none"},400)):(document.body.style.overflowY="hidden",e.menuRef.current.style.display="block",setTimeout(function(){e.menuRef.current.classList.remove("disabled")},50))},e.componentDidMount=function(){e.menuRef.current.classList.add("disabled"),document.body.style.overflowY="scroll",setTimeout(function(){e.menuRef.current.style.display="none"},500),fetch("https://api.github.com/users/panteliselef/repos").then(function(e){return e.json()}).then(function(t){console.log(t),e.setState({repos:t,isLoading:!1})})},e.menuRef=r.a.createRef(),e.state={repos:[],selectedValue:"Recent Projects",isLoading:!0,burgerMenuOpened:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k.Grid,{fluid:!0},r.a.createElement(k.Row,null,r.a.createElement(k.Col,{xs:8,md:7},r.a.createElement(E,{text:["Projects"],coloredText:""}))),r.a.createElement(k.Row,null,r.a.createElement("select",{style:{marginTop:"2em"},name:"fruit",value:this.state.selectedValue,onChange:this.handleChange},r.a.createElement("option",{disabled:!0},"Recent Projects"),r.a.createElement("option",null,"github"))),r.a.createElement(k.Row,null,r.a.createElement("div",{className:"project-cards-container"},this.state.isLoading?r.a.createElement(V,null):this.state.repos.map(function(e){return r.a.createElement(A,{key:e.id,projectName:e.name,description:e.description,url:e.clone_url})})))),r.a.createElement("div",{className:"cover-photo cover-photo-large",style:{backgroundImage:"url(".concat(z.a,")")}}),r.a.createElement(N,{toggleBurger:this.toggleBurger,opened:this.state.burgerMenuOpened}),r.a.createElement(j,{doOnClick:this.closeMenu,ref:this.menuRef}))}}]),t}(n.Component),U=(a(56),a(31)),_=a.n(U),J=(a(57),a(32)),X=a.n(J),$=a(33),q=a.n($),F=function(e){var t=e.post;return r.a.createElement("div",{className:"post-card"},r.a.createElement("div",{className:"top-section",style:{padding:"0.8em"}},r.a.createElement(k.Grid,{fluid:!0},r.a.createElement(k.Row,{between:"xs",middle:"xs"},r.a.createElement(k.Col,{xs:4},"@elefcodes"),r.a.createElement(k.Col,{xs:4,style:{textAlign:"right"}}," ",t.likes.count," ",r.a.createElement("img",{src:X.a,style:{transform:"translateY(2px)"},height:"15px"}))))),r.a.createElement("div",{className:"image-frame",style:{backgroundImage:"url(".concat(t.images.standard_resolution.url,")")}}),r.a.createElement("div",{className:"bottom-section",style:{padding:"0.8em"}},r.a.createElement(k.Row,{center:"xs"},r.a.createElement(k.Col,{xs:12},r.a.createElement("a",{target:"blank",style:{textDecoration:"none",color:"initial"},href:t.link},"VIEW ON INSTAGRAM ",r.a.createElement("img",{src:q.a,style:{transform:"translateY(2px)",marginLeft:"1em"},height:"15px"}))))))},K=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).closeMenu=function(t){e.props.location.pathname===t.target.getAttribute("href")&&(e.setState({burgerMenuOpened:!e.state.burgerMenuOpened}),e.menuRef.current.classList.add("disabled"),setTimeout(function(){e.menuRef.current.style.display="none"},500),document.body.style.overflowY="scroll")},e.toggleBurger=function(){e.setState({burgerMenuOpened:!e.state.burgerMenuOpened}),console.log(e.menuRef.current.classList),e.state.burgerMenuOpened?(document.body.style.overflowY="scroll",e.menuRef.current.classList.add("disabled"),setTimeout(function(){e.menuRef.current.style.display="none"},400)):(document.body.style.overflowY="hidden",e.menuRef.current.style.display="block",setTimeout(function(){e.menuRef.current.classList.remove("disabled")},50))},e.menuRef=r.a.createRef(),e.state={images:[],burgerMenuOpened:!1,profileData:{}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.menuRef.current.classList.add("disabled"),document.body.style.overflowY="scroll",setTimeout(function(){e.menuRef.current.style.display="none"},500),fetch("https://elefcodes-website-api.herokuapp.com/instagramProfile").then(function(e){return e.json()}).then(function(t){e.setState({profileData:t.data})}).catch(function(t){console.log(t),e.setState({profileData:{}})}),fetch("https://elefcodes-website-api.herokuapp.com/instagramPosts").then(function(e){return e.json()}).then(function(t){e.setState({images:t.data}),console.log(t.data)}).catch(function(t){console.log(t),e.setState({images:[]})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(k.Grid,{fluid:!0},r.a.createElement(k.Row,null,r.a.createElement(k.Col,{xs:8,md:7},r.a.createElement(E,{text:["Instagram"],coloredText:""}))),r.a.createElement(k.Row,{style:{marginTop:"2em"}},r.a.createElement(k.Col,{xs:12,style:{display:"flex",flexWrap:"wrap"}},r.a.createElement("div",{className:"title",style:{fontSize:"2em"}},"@elefcodes"),r.a.createElement("div",null,r.a.createElement("div",{className:"title",style:{fontSize:"2em",marginLeft:"1em",display:"inline-block"}},this.state.profileData.counts?this.state.profileData.counts.media:"",r.a.createElement("span",{style:{fontSize:"0.9rem"}},"posts")),r.a.createElement("div",{className:"title",style:{fontSize:"2em",marginLeft:"1em",display:"inline-block"}},this.state.profileData.counts?this.state.profileData.counts.followed_by:"",r.a.createElement("span",{style:{fontSize:"0.9rem"}},"followers"))))),r.a.createElement(k.Row,null,r.a.createElement("div",{className:"project-cards-container",style:{maxHeight:"10em"}},void 0===this.state.images||0===this.state.images.length?r.a.createElement(V,null):this.state.images.map(function(e){return r.a.createElement(F,{key:e.id,post:e})})))),r.a.createElement("div",{className:"cover-photo",style:{backgroundImage:"url(".concat(_.a,")")}}),r.a.createElement(N,{toggleBurger:this.toggleBurger,opened:this.state.burgerMenuOpened}),r.a.createElement(j,{doOnClick:this.closeMenu,ref:this.menuRef}))}}]),t}(n.Component),Q=a(34),Z=a.n(Q)()();Z.listen(function(e,t){d.a.pageview(e.pathname),console.log(t,e.pathname,e.state)});var ee=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){d.a.initialize("UA-81492469-1"),d.a.pageview("/")}},{key:"render",value:function(){return r.a.createElement(L.a,{history:Z},r.a.createElement("div",{className:"App"},r.a.createElement(S.a,null,r.a.createElement(T.a,{exact:!0,path:"/",component:C}),r.a.createElement(T.a,{exact:!0,path:"/soon",component:g}),r.a.createElement(T.a,{exact:!0,path:"/projects",component:H}),r.a.createElement(T.a,{exact:!0,path:"/instagram",component:K}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[35,2,1]]]);
//# sourceMappingURL=main.17a8e0b4.chunk.js.map