(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],Array(22).concat([function(e,t,n){e.exports=n(50)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/portrait.9d53f3e5.png"},function(e,t,n){e.exports=n.p+"static/media/Timothy_Wang_Resume.ac452317.pdf"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/theadmiral.ce041b7f.gif"},function(e,t,n){e.exports=n.p+"static/media/giveyourtwocentslogo1.e508ad04.png"},function(e,t,n){e.exports=n.p+"static/media/cube.c4c8c641.gif"},function(e,t,n){e.exports=n.p+"static/media/rhymetime-model.d00862e0.png"},function(e,t,n){e.exports=n.p+"static/media/text-editor.1fb27376.gif"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),o=n(20),s=n.n(o);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(14),c=n(6),l=n(2),u=n(3),d=n(8),h=n(4),m=n(5),p=(n(27),n(11)),w=n(12),g=(n(28),n(29),n(30),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={redirect:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return this.state.redirect?(this.setState({redirect:!1}),i.a.createElement(c.a,{to:this.props.navigation})):i.a.createElement("div",{className:"button-wrapper"+(this.props.active?" nav-button-active":""),onClick:function(){return e.setState({redirect:!0})}},this.props.buttonText)}}]),n}(i.a.Component)),v=(n(36),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={open:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"dropdown-wrapper"},i.a.createElement("div",{className:"dropdown"},i.a.createElement("div",{className:"dropdown-icon"},i.a.createElement(p.b,{onClick:function(){return e.setState({open:!e.state.open})}})),this.state.open&&i.a.createElement("div",{className:"dropdown-choices"},this.props.children)))}}]),n}(i.a.Component)),f=[{name:"Home",navigation:"/home"},{name:"Experiences",navigation:"/experiences"},{name:"Projects",navigation:"/projects"},{name:"Skills",navigation:"/skills"}],b=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],y=["January","February","March","April","May","June","July","August","September","October","November","December"],k=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderNavButtons",value:function(e,t){var n=this;return t||(t=e),f.map((function(a,o){return o>=e&&o<=t&&i.a.createElement("div",{className:"nav-button"+(n.props.shortened?" button-in-dropdown":"")},i.a.createElement(g,{navigation:a.navigation,buttonText:a.name.toUpperCase(),active:n.props.active===a.name}))}))}},{key:"render",value:function(){var e=new Date,t=b[e.getDay()],n=e.getDate(),a=y[e.getMonth()],o=e.getFullYear(),s=t.toUpperCase()+", "+a.toUpperCase()+" "+n+", "+o,r={height:this.props.height};return i.a.createElement("div",{className:"header-wrapper",style:r},i.a.createElement("div",{className:"header-text"},this.props.headerText),i.a.createElement("hr",{className:"thick-horz-line"}),i.a.createElement("div",{className:"bar-wrapper"},this.props.shortened?[i.a.createElement("div",{className:"date-wrapper"},s),i.a.createElement("div",{className:"right-nav-buttons"},i.a.createElement(v,null,this.renderNavButtons(0,3)))]:[i.a.createElement("div",{className:"left-nav-buttons"},this.renderNavButtons(0,1)),i.a.createElement("div",{className:"date-wrapper"},s),i.a.createElement("div",{className:"right-nav-buttons"},this.renderNavButtons(2,3))]),i.a.createElement("hr",{className:"thick-horz-line"}))}}]),n}(i.a.Component);k.defaultProps={height:"15vh"};var E=k,C=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={shortenedHeader:!1},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var e=!1;window.innerWidth<window.innerHeight&&(e=!0),this.setState({shortenedHeader:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"page page-wrapper"},i.a.createElement("div",{className:"page-header"},i.a.createElement(E,{headerText:"TimothyWang",active:this.props.active,shortened:this.state.shortenedHeader,height:this.props.headerHeight})),i.a.createElement("div",{className:"page-content-wrapper"},this.props.children))}}]),n}(i.a.Component);C.defaultProps={headerHeight:"15vh"};var O=C,j=(n(37),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.horizontalOrientation?{gridTemplateColumns:"1fr 3fr"}:{gridTemplateRows:"auto"},t=this.props.horizontalOrientation?{width:"25vw",height:"auto"}:{width:"70%",height:"auto",paddingBottom:"2em"},n=this.props.horizontalOrientation?{paddingLeft:"1em",fontSize:"calc(min(1.3vw, 1.4em))"}:{paddingLeft:"0em",fontSize:"1.2em"},a={textAlign:this.props.horizontalOrientation?"left":"center"};return i.a.createElement("div",{className:"article-card-wrapper",style:e},this.props.image&&i.a.createElement("img",{src:this.props.image,alt:"portrait",className:"picture",style:t}),i.a.createElement("div",{className:"article-wrapper"+(this.props.image?"":" no-image"),style:n},i.a.createElement("h1",{className:"article-title",style:a},this.props.title),i.a.createElement("hr",{className:"thin-horz-line"}),this.props.children))}}]),n}(i.a.Component)),N=function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={horizontalOrientation:!0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(d.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var e=!0;window.innerWidth<window.innerHeight&&(e=!1),this.setState({horizontalOrientation:e})}},{key:"render",value:function(){var e=this.state.horizontalOrientation?{width:"75%"}:{width:"95%"};return i.a.createElement(O,{active:"Home",headerHeight:"15vh"},i.a.createElement("div",{className:"home-wrapper disable-scrollbar",style:{padding:"5vh"}},i.a.createElement("div",{style:e},i.a.createElement(j,{title:"About Me",image:n(38),horizontalOrientation:this.state.horizontalOrientation},'Hey there, and welcome to my website! I\'m a rising junior at Brown University studying Applied Mathematics and Computer Science. In my free time, I really enjoy watching shows, playing board games, and solving puzzles. Since coming home during the pandemic, my friends and I have been playing a lot of online Catan, so definitely hit me up if you love to play as well! One of my biggest hobbies growing up was speed-solving Rubik\'s cubes. I used to attend competitions as well, and while I\'m not quite as addicted as I used to be, I still keep my cubes near my desk for whenever I need a break from what I\'m doing. More recently, I\'ve been getting really into crossword puzzles, and I have been solving the NYT crossword everyday since February with a group of friends. A really cool variant of crossword puzzles that I recently discovered is cryptic crosswords. Here\'s an example of a cryptic clue: "really large bird I can stew" (7). The answer is titanic. Here\'s why: titanic means "really large", a tit is a "bird", and anic is "I can" stewed - in other words, the letters in "I can" mixed up. Really neat right?',i.a.createElement("div",{className:"icon-bar"},i.a.createElement("a",{href:n(39),target:"_blank",rel:"noopener noreferrer",className:"icon"},i.a.createElement(p.a,{size:"2.5em",title:"resume"})),i.a.createElement("a",{href:"mailto:timothywang56@gmail.com",target:"_blank",rel:"noopener noreferrer",className:"icon"},i.a.createElement(w.a,{size:"2.5em",title:"email"})),i.a.createElement("a",{href:"https://linkedin.com/in/timothywang56",target:"_blank",rel:"noopener noreferrer",className:"icon"},i.a.createElement(w.c,{size:"2.5em",title:"linkedin"})),i.a.createElement("a",{href:"https://github.com/TimothyWang56",target:"_blank",rel:"noopener noreferrer",className:"icon"},i.a.createElement(w.b,{size:"2.5em",title:"github"})))))))}}]),a}(i.a.Component),z=(n(40),n(41),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={width:window.innerWidth,height:window.innerHeight,squareLength:Math.max(a.props.crossword.length,a.props.crossword[0].length)},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"renderCrossword",value:function(){var e,t,n=this,a=!1,o=!1,s={height:"calc(100% / "+this.state.squareLength+")"};return this.props.crossword.map((function(r,c){return i.a.createElement("div",{className:"crossword-row",style:s},r.map((function(s,r){var l={width:"calc(100% / "+n.state.squareLength+")",height:"100%",border:","!==s.contents?"0.5px solid black":"none",outline:","!==s.contents?"0.5px solid black":"none"};","===s.contents&&(l.border="none",l.outline="none");return o||(a?n.props.row?","===s.contents||e!==c?o=!0:l.backgroundColor="pink":","===s.contents&&t===r?o=!0:t===r&&(l.backgroundColor="pink"):s.num&&s.num===n.props.activeClue&&(a=!0,n.props.row?e=c:t=r,l.backgroundColor="pink")),i.a.createElement("div",{className:"crossword-square",style:l,onClick:function(){return n.props.onSquareClick(c,r)}},s.num&&i.a.createElement("div",{className:"corner-number"},s.num),","!==s.contents&&i.a.createElement("div",{className:"square-content"},s.contents))})))}))}},{key:"render",value:function(){var e={height:this.props.size,width:this.props.size};return i.a.createElement("div",{className:"crossword-wrapper",style:e},this.renderCrossword())}}]),n}(i.a.Component)),S=(n(42),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"renderClues",value:function(){var e=this;return this.props.clues.map((function(t,n){var a=e.props.horizontalOrientation?{fontSize:"calc(min(1.3vw, 1.4em))"}:{fontSize:"1.2em"};return i.a.createElement("div",{ref:e.props.clueRefs[n],className:"clue"+(e.props.activeClue===t.num?" active":""),style:a,onClick:function(){e.props.onClick(t.num,t.row),e.props.clueRefs[n].current.scrollIntoView({behavior:"smooth",block:"start"})}},i.a.createElement("div",{className:"clue-number"},t.num),i.a.createElement("div",{className:"clue-dates"},t.dates),i.a.createElement("div",{className:"clue-title"},t.title),i.a.createElement("div",{className:"clue-text"},t.text))}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"crossword-clues-wrapper disable-scrollbar",style:{height:this.props.height}},i.a.createElement("h2",{className:"clues-title"},"Clues"),i.a.createElement("div",{className:"clues-wrapper"},this.renderClues()))}}]),n}(i.a.Component)),x=[[{contents:","},{contents:"B",num:2},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}],[{contents:"C",num:1},{contents:"R"},{contents:"E"},{contents:"S"},{contents:"S",num:3},{contents:"H"},{contents:"E"},{contents:"A"},{contents:"L"},{contents:"T"},{contents:"H"}],[{contents:","},{contents:"O"},{contents:","},{contents:","},{contents:"C"},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}],[{contents:","},{contents:"W"},{contents:","},{contents:","},{contents:"I"},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}],[{contents:","},{contents:"N"},{contents:","},{contents:","},{contents:"S"},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}],[{contents:","},{contents:"U"},{contents:","},{contents:","},{contents:"Q"},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}],[{contents:","},{contents:","},{contents:","},{contents:","},{contents:"U"},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}],[{contents:","},{contents:","},{contents:","},{contents:","},{contents:"A"},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}],[{contents:","},{contents:","},{contents:","},{contents:"B",num:4},{contents:"R"},{contents:"O"},{contents:"W"},{contents:"N"},{contents:"U"},{contents:","},{contents:","}],[{contents:","},{contents:","},{contents:","},{contents:","},{contents:"E"},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","},{contents:","}]],I=[{num:1,row:!0,dates:"Jan 2020 - Present",title:"Full-Stack Software Engineering Intern",text:"I'm a Software Engineering Intern for Cress Health, a startup that's aiming to help workers in the healthcare industry manage their mental wellness. I started working for Cress at the beginning of my Sophomore Spring semester as a Front-End Developer for Cress's mobile application, but for the summer, I've taken on new responsibilities. For the first month of the summer, I worked with 1 other intern on a dashboard tool that congregates data from the mobile app and displays the anonymized data in customizable graphs. It was built using React.js, Express, and Azure Cosmos DB. I am now currently leading a team of 5 other interns in building an internal Feature Flag tool to aid our developers with feature development and rollout."},{num:2,row:!1,dates:"Mar 2020 - Present",title:"Head Teaching Assistant",text:"I'm a Head Teaching Assistant for one of Brown University's introductory computer science courses, CSCI0170 - Computer Science: An Integrated Introduction. The course teaches functional programming through 2 languages, Racket and ReasonML. Due to changes in our curriculum because of COVID-19, the course has been pushed to the Spring 2021 semester, but we are still working to ensure that the Spring (likely) online course will run smoothly. We're also currently putting together a team of ~20 teaching assistants to help us in the Fall semester."},{num:3,row:!1,dates:"Nov 2019 - Jan 2020",title:"Front-End Developer",text:"SciSquare is an online lab management platform that aims to streamline all lab project-related tasks into one interface, including communication, project planning, scheduling, and equipment purchasing. The web application was built using React, and I was in charge of implementing the marketplace, which allowed users to search and make bulk orders of important laboratory equipment."},{num:4,row:!0,dates:"Aug 2019 - May 2020",title:"Teaching Assistant",text:"I was an undergraduate teaching assistant for both the Fall (CSCI0170) and Spring (CSCI0180) semesters of my sophomore year. For both semesters, I was working on the homeworks teams, which meant I was responsible for editing and testing homework assignments before releasing them, as well as grading and reviewing them. Additionally, I volunteered to take on the responsibilities of checking for plagiarism using Stanford's MOSS API. CSCI0170 was taught in Racket and ReasonML, and CSCI0180 was taught in Java and Scala."}],W=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(l.a)(this,n),a=t.call(this,e);var o=I.map((function(e){return i.a.createRef()}));return a.state={activeClue:1,row:!0,crossword:x,clues:I,horizontalOrientation:!0,clueRefs:o},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var e=!0;window.innerWidth/window.innerHeight<1&&(e=!1),this.setState({horizontalOrientation:e})}},{key:"findClueNumByRow",value:function(e,t){var n=this.state.crossword[e][t],a=this.state.crossword[0].length;if(0===t||","===this.state.crossword[e][t-1].contents)return t+1<a&&","!==this.state.crossword[e][t+1].contents&&n.num?n.num:-1;for(var i=t-1;i>=0;i--)if(this.state.crossword[e][i].num&&(0===i||","===this.state.crossword[e][i-1].contents))return this.state.crossword[e][i].num;return-1}},{key:"findClueNumByCol",value:function(e,t){var n=this.state.crossword[e][t],a=this.state.crossword.length;if(0===e||","===this.state.crossword[e-1][t].contents)return e+1<a&&","!==this.state.crossword[e+1][t].contents&&n.num?n.num:-1;for(var i=e-1;i>=0;i--)if(this.state.crossword[i][t].num&&(0===i||","===this.state.crossword[i-1][t].contents))return this.state.crossword[i][t].num;return-1}},{key:"onSquareClick",value:function(e,t){var n=this.findClueNumByRow(e,t),a=this.findClueNumByCol(e,t);-1===n||this.state.activeClue===n&&this.state.row?-1!==a&&(this.setState({activeClue:a,row:!1}),this.state.clueRefs[a-1].current.scrollIntoView({behavior:"smooth",block:"start"})):(this.setState({activeClue:n,row:!0}),this.state.clueRefs[n-1].current.scrollIntoView({behavior:"smooth",block:"start"}))}},{key:"onClueClick",value:function(e,t){this.setState({activeClue:e,row:t})}},{key:"render",value:function(){var e={height:"8vh",fontSize:this.state.horizontalOrientation?"calc(min(1.3vw, 1.4em))":"1.2em",textAlign:this.state.horizontalOrientation?"left":"center"},t={padding:"2vh"},n={};this.state.horizontalOrientation?n.gridTemplateColumns="min-content 1fr":n.gridTemplateRows="min-content 1fr";var a=this.state.horizontalOrientation?"calc(100vh - 15vh - "+e.height+" - ("+t.padding+" * 2))":"calc(100vw - ("+t.padding+" * 2))",o=this.state.horizontalOrientation?"calc(100vh - 15vh - "+e.height+" - ("+t.padding+" * 2))":"100%";return i.a.createElement(O,{active:"Experiences",headerHeight:"15vh"},i.a.createElement("div",{className:"experiences-wrapper",style:t},i.a.createElement("div",{style:e},i.a.createElement("h1",{className:"experiences-title"},"Crossword"),i.a.createElement("hr",{className:"thin-horz-line"})),i.a.createElement("div",{className:"experiences-content",style:n},i.a.createElement(z,{activeClue:this.state.activeClue,row:this.state.row,crossword:this.state.crossword,onSquareClick:this.onSquareClick.bind(this),size:a}),i.a.createElement(S,{height:o,activeClue:this.state.activeClue,onClick:this.onClueClick.bind(this),clues:this.state.clues,clueRefs:this.state.clueRefs,horizontalOrientation:this.state.horizontalOrientation}))))}}]),n}(i.a.Component),D=(n(43),[{title:"The Admiral",image:n(44),text:"For my final project in my Software Engineering course, my team of 4 students decided to create a game in Unity. The Admiral is a 4-player social-deduction and racing game. Among the players, there's 3 pirates - the good guys - and 1 admiral - the bad guy, but the admiral is hiding among the crew! The terrain is procedurally-generated using the Marching Cubes algorithm and the paths are randomly determined using the Perlin worms algorithm."},{title:"Give Your Two Cents",image:n(45),text:"Give Your Two Cents is a Google Chrome extension that helps streamline the process of saving and donating. This project was chosen as a winner for the Most Viable Startup Hack Category for Hack the Northeast 2020, the most competitive category of the hackathon. This was a really enjoyable project to complete because no one in my team of 3 had made a Chrome extension before, which made for a fun but challenging time for us."},{title:"Rubik's Cube",image:n(46),text:"I've been solving Rubik's cubes since the 3rd grade, so I thought I'd try creating a 3-D simulator for one! This was my first project dealing with graphics, so it ended up being a lot more difficult than I anticipated. Despite the challenges I had with it, I was able to create an animated Rubik's cube that is controlled by keyboard inputs."},{title:"Rhyme Time",image:n(47),text:"Rhyme Time was my final project for my Deep Learning course. My team of 4 students created a LSTM neural network that generates Limerick poems using TensorFlow. It was trained on 75,000 limerick poems and had a perplexity of ~4.1 after 15 epochs."},{title:"Text Editor",image:n(48),text:"I created a text editor in Java using the Swing toolkit. It supports functionality for loading, saving, and finding based on text or regex expressions."}]),T=function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={horizontalOrientation:!0},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"updateWindowDimensions",value:function(){var e=!0;window.innerWidth/window.innerHeight<1&&(e=!1),this.setState({horizontalOrientation:e})}},{key:"renderProjects",value:function(){var e=this,t=this.state.horizontalOrientation?{width:"75%"}:{width:"95%"};return D.map((function(n){return i.a.createElement("div",{className:"project-wrapper",style:t},i.a.createElement(j,{title:n.title,image:n.image,horizontalOrientation:e.state.horizontalOrientation},n.text),i.a.createElement("hr",{className:"thin-horz-line",style:{color:"gray"}}))}))}},{key:"render",value:function(){return i.a.createElement(O,{active:"Projects",headerHeight:"15vh"},i.a.createElement("div",{className:"projects-page-content-wrapper"},this.renderProjects()))}}]),n}(i.a.Component),R=(n(49),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return i.a.createElement(O,{active:"Skills"},"Coming soon!")}}]),n}(i.a.Component));s.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(r.a,null,i.a.createElement(c.d,null,i.a.createElement(c.b,{path:"/",exact:!0},i.a.createElement(N,null)),i.a.createElement(c.b,{path:"/home",exact:!0},i.a.createElement(N,null)),i.a.createElement(c.b,{path:"/experiences",exact:!0},i.a.createElement(W,null)),i.a.createElement(c.b,{path:"/projects",exact:!0},i.a.createElement(T,null)),i.a.createElement(c.b,{path:"/skills",exact:!0},i.a.createElement(R,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}]),[[22,1,2]]]);
//# sourceMappingURL=main.c6ceeb5b.chunk.js.map