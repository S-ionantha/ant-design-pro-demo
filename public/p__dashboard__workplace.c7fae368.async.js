(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"23Sy":function(e,t,a){e.exports={radar:"radar___1_avc",legend:"legend___cMjxg",legendItem:"legendItem___13xG8",dot:"dot___10Iis"}},VuCS:function(e,t,a){"use strict";a.r(t);a("14J3");var n=a("BMrR"),r=(a("jCWc"),a("kPKH")),i=(a("IzEo"),a("bx4M")),c=(a("Mwp2"),a("VXEj")),l=a("fWQN"),o=a("mtLc"),s=a("yKVA"),d=a("879j"),m=(a("aHsQ"),a("sGsY")),u=(a("Telt"),a("Tckk")),p=(a("cWXX"),a("/ezw")),v=a("q1tI"),h=a.n(v),g=a("55Ip"),f=a("9kvl"),E=a("Hx5s"),_=a("wd/R"),y=a.n(_),b=a("yP6+"),k=a("0Owb");function C(e){var t=e.style;t.height="100%";var a=parseInt("".concat(getComputedStyle(e).height),10),n=parseInt("".concat(getComputedStyle(e).paddingTop),10)+parseInt("".concat(getComputedStyle(e).paddingBottom),10);return a-n}function j(e){if(!e)return 0;var t=e,a=C(t),n=t.parentNode;return n&&(a=C(n)),a}function N(){return function(e){var t=function(t){Object(s["a"])(n,t);var a=Object(d["a"])(n);function n(){var e;Object(l["a"])(this,n);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=a.call.apply(a,[this].concat(r)),e.state={computedHeight:0},e.root=void 0,e.handleRoot=function(t){e.root=t},e}return Object(o["a"])(n,[{key:"componentDidMount",value:function(){var e=this.props.height;if(!e){var t=j(this.root);this.setState({computedHeight:t}),t<1&&(t=j(this.root),this.setState({computedHeight:t}))}}},{key:"render",value:function(){var t=this.props.height,a=this.state.computedHeight,n=t||a;return h.a.createElement("div",{ref:this.handleRoot},n>0&&h.a.createElement(e,Object(k["a"])({},this.props,{height:n})))}}]),n}(h.a.Component);return t}}var A=N,L=a("23Sy"),w=a.n(L),I=function(e){Object(s["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.state={legendData:[]},e.chart=void 0,e.node=void 0,e.getG2Instance=function(t){e.chart=t},e.getLegendData=function(){if(e.chart){var t=e.chart.getAllGeoms()[0];if(t){var a=t.get("dataArray")||[],n=a.map((function(e){var t=e.map((function(e){return e._origin})),a={name:t[0].name,color:e[0].color,checked:!0,value:t.reduce((function(e,t){return e+t.value}),0)};return a}));e.setState({legendData:n})}}},e.handleRef=function(t){e.node=t},e.handleLegendClick=function(t,a){var n=t;n.checked=!n.checked;var r=e.state.legendData;r[a]=n;var i=r.filter((function(e){return e.checked})).map((function(e){return e.name}));e.chart&&(e.chart.filter("name",(function(e){return i.indexOf("".concat(e))>-1})),e.chart.repaint()),e.setState({legendData:r})},e}return Object(o["a"])(a,[{key:"componentDidMount",value:function(){this.getLegendData()}},{key:"componentDidUpdate",value:function(e){var t=this.props.data;t!==e.data&&this.getLegendData()}},{key:"render",value:function(){var e=this,t=["#1890FF","#FACC14","#2FC25B","#8543E0","#F04864","#13C2C2","#fa8c16","#a0d911"],a=this.props,i=a.data,c=void 0===i?[]:i,l=a.height,o=void 0===l?0:l,s=a.title,d=a.hasLegend,m=void 0!==d&&d,u=a.forceFit,p=void 0===u||u,v=a.tickCount,g=void 0===v?5:v,f=a.padding,E=void 0===f?[35,30,16,30]:f,_=a.animate,y=void 0===_||_,k=a.colors,C=void 0===k?t:k,j=this.state.legendData,N={value:{min:0,tickCount:g}},A=o-(m?80:22);return h.a.createElement("div",{className:w.a.radar,style:{height:o}},s&&h.a.createElement("h4",null,s),h.a.createElement(b["Chart"],{scale:N,height:A,forceFit:p,data:c,padding:E,animate:y,onGetG2Instance:this.getG2Instance},h.a.createElement(b["Tooltip"],null),h.a.createElement(b["Coord"],{type:"polar"}),h.a.createElement(b["Axis"],{name:"label",line:void 0,tickLine:void 0,grid:{lineStyle:{lineDash:void 0},hideFirstLine:!1}}),h.a.createElement(b["Axis"],{name:"value",grid:{type:"polygon",lineStyle:{lineDash:void 0}}}),h.a.createElement(b["Geom"],{type:"line",position:"label*value",color:["name",C],size:1}),h.a.createElement(b["Geom"],{type:"point",position:"label*value",color:["name",C],shape:"circle",size:3})),m&&h.a.createElement(n["a"],{className:w.a.legend},j.map((function(t,a){return h.a.createElement(r["a"],{span:24/j.length,key:t.name,onClick:function(){return e.handleLegendClick(t,a)}},h.a.createElement("div",{className:w.a.legendItem},h.a.createElement("p",null,h.a.createElement("span",{className:w.a.dot,style:{backgroundColor:t.checked?t.color:"#aaa"}}),h.a.createElement("span",null,t.name)),h.a.createElement("h6",null,t.value)))}))))}}]),a}(v["Component"]),x=A()(I),G=(a("+L6B"),a("2/Rp")),S=a("xvlK"),O=a("tzUB"),D=a.n(O),z=function(e){var t=e.links,a=e.linkElement,n=e.onAdd;return h.a.createElement("div",{className:D.a.linkGroup},t.map((function(e){return Object(v["createElement"])(a,{key:"linkGroup-item-".concat(e.id||e.title),to:e.href,href:e.href},e.title)})),h.a.createElement(G["a"],{size:"small",type:"primary",ghost:!0,onClick:n},h.a.createElement(S["a"],null)," \u6dfb\u52a0"))};z.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var T=z,U=a("ZiQ9"),B=a.n(U),H=[{title:"\u64cd\u4f5c\u4e00",href:""},{title:"\u64cd\u4f5c\u4e8c",href:""},{title:"\u64cd\u4f5c\u4e09",href:""},{title:"\u64cd\u4f5c\u56db",href:""},{title:"\u64cd\u4f5c\u4e94",href:""},{title:"\u64cd\u4f5c\u516d",href:""}],M=function(e){var t=e.currentUser,a=t&&Object.keys(t).length;return a?h.a.createElement("div",{className:B.a.pageHeaderContent},h.a.createElement("div",{className:B.a.avatar},h.a.createElement(u["a"],{size:"large",src:t.avatar})),h.a.createElement("div",{className:B.a.content},h.a.createElement("div",{className:B.a.contentTitle},"\u65e9\u5b89\uff0c",t.name,"\uff0c\u795d\u4f60\u5f00\u5fc3\u6bcf\u4e00\u5929\uff01"),h.a.createElement("div",null,t.title," |",t.group))):h.a.createElement(p["a"],{avatar:!0,paragraph:{rows:1},active:!0})},R=function(){return h.a.createElement("div",{className:B.a.extraContent},h.a.createElement("div",{className:B.a.statItem},h.a.createElement(m["a"],{title:"\u9879\u76ee\u6570",value:56})),h.a.createElement("div",{className:B.a.statItem},h.a.createElement(m["a"],{title:"\u56e2\u961f\u5185\u6392\u540d",value:8,suffix:"/ 24"})),h.a.createElement("div",{className:B.a.statItem},h.a.createElement(m["a"],{title:"\u9879\u76ee\u8bbf\u95ee",value:2223})))},F=function(e){Object(s["a"])(a,e);var t=Object(d["a"])(a);function a(){var e;Object(l["a"])(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),e.renderActivities=function(e){var t=e.template.split(/@\{([^{}]*)\}/gi).map((function(t){return e[t]?h.a.createElement("a",{href:e[t].link,key:e[t].name},e[t].name):t}));return h.a.createElement(c["b"].Item,{key:e.id},h.a.createElement(c["b"].Item.Meta,{avatar:h.a.createElement(u["a"],{src:e.user.avatar}),title:h.a.createElement("span",null,h.a.createElement("a",{className:B.a.username},e.user.name),"\xa0",h.a.createElement("span",{className:B.a.event},t)),description:h.a.createElement("span",{className:B.a.datetime,title:e.updatedAt},y()(e.updatedAt).fromNow())}))},e}return Object(o["a"])(a,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndworkplace/init"})}},{key:"componentWillUnmount",value:function(){var e=this.props.dispatch;e({type:"dashboardAndworkplace/clear"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.currentUser,l=t.activities,o=t.projectNotice,s=t.projectLoading,d=t.activitiesLoading,m=t.radarData;return a&&a.userid?h.a.createElement(E["c"],{content:h.a.createElement(M,{currentUser:a}),extraContent:h.a.createElement(R,null)},h.a.createElement(n["a"],{gutter:24},h.a.createElement(r["a"],{xl:16,lg:24,md:24,sm:24,xs:24},h.a.createElement(i["a"],{className:B.a.projectList,style:{marginBottom:24},title:"\u8fdb\u884c\u4e2d\u7684\u9879\u76ee",bordered:!1,extra:h.a.createElement(g["a"],{to:"/"},"\u5168\u90e8\u9879\u76ee"),loading:s,bodyStyle:{padding:0}},o.map((function(e){return h.a.createElement(i["a"].Grid,{className:B.a.projectGrid,key:e.id},h.a.createElement(i["a"],{bodyStyle:{padding:0},bordered:!1},h.a.createElement(i["a"].Meta,{title:h.a.createElement("div",{className:B.a.cardTitle},h.a.createElement(u["a"],{size:"small",src:e.logo}),h.a.createElement(g["a"],{to:e.href},e.title)),description:e.description}),h.a.createElement("div",{className:B.a.projectItemContent},h.a.createElement(g["a"],{to:e.memberLink},e.member||""),e.updatedAt&&h.a.createElement("span",{className:B.a.datetime,title:e.updatedAt},y()(e.updatedAt).fromNow()))))}))),h.a.createElement(i["a"],{bodyStyle:{padding:0},bordered:!1,className:B.a.activeCard,title:"\u52a8\u6001",loading:d},h.a.createElement(c["b"],{loading:d,renderItem:function(t){return e.renderActivities(t)},dataSource:l,className:B.a.activitiesList,size:"large"}))),h.a.createElement(r["a"],{xl:8,lg:24,md:24,sm:24,xs:24},h.a.createElement(i["a"],{style:{marginBottom:24},title:"\u5feb\u901f\u5f00\u59cb / \u4fbf\u6377\u5bfc\u822a",bordered:!1,bodyStyle:{padding:0}},h.a.createElement(T,{onAdd:function(){},links:H,linkElement:g["a"]})),h.a.createElement(i["a"],{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:0===m.length},h.a.createElement("div",{className:B.a.chart},h.a.createElement(x,{hasLegend:!0,height:343,data:m}))),h.a.createElement(i["a"],{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56e2\u961f",loading:s},h.a.createElement("div",{className:B.a.members},h.a.createElement(n["a"],{gutter:48},o.map((function(e){return h.a.createElement(r["a"],{span:12,key:"members-item-".concat(e.id)},h.a.createElement(g["a"],{to:e.href},h.a.createElement(u["a"],{src:e.logo,size:"small"}),h.a.createElement("span",{className:B.a.member},e.member)))})))))))):null}}]),a}(v["Component"]);t["default"]=Object(f["c"])((function(e){var t=e.dashboardAndworkplace,a=t.currentUser,n=t.projectNotice,r=t.activities,i=t.radarData,c=e.loading;return{currentUser:a,projectNotice:n,activities:r,radarData:i,currentUserLoading:c.effects["dashboardAndworkplace/fetchUserCurrent"],projectLoading:c.effects["dashboardAndworkplace/fetchProjectNotice"],activitiesLoading:c.effects["dashboardAndworkplace/fetchActivitiesList"]}}))(F)},ZiQ9:function(e,t,a){e.exports={activitiesList:"activitiesList___1iz4w",username:"username___2CaQo",event:"event___37Bra",pageHeaderContent:"pageHeaderContent___1v9Rj",avatar:"avatar___2REGU",content:"content___2JXYM",contentTitle:"contentTitle___2ZQYk",extraContent:"extraContent___171XZ",statItem:"statItem___WnzK8",members:"members___pCbZL",member:"member___1PrAP",projectList:"projectList___1-phY",cardTitle:"cardTitle___i2mGR",projectGrid:"projectGrid___2_ET-",projectItemContent:"projectItemContent___1Af7z",datetime:"datetime___3wNS1",activeCard:"activeCard___2L47N"}},tzUB:function(e,t,a){e.exports={linkGroup:"linkGroup___3u5k3"}}}]);