(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{24:function(e,t,a){e.exports=a(53)},29:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},31:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),i=a.n(r),l=(a(29),a(30),a(31),a(21)),s=a(18),o=a(19),m=a(23),u=a(22),d=a(3),p=a(4),E=a(20),h=a.n(E),f=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).routeCart=function(){e.props.history.push({pathname:"/cart",state:{cart:e.state.cart,total:e.state.total,discTot:e.state.discTot,disPrice:e.state.disPrice}})},e.ascSort=function(){var t=e.state.data.sort((function(e,t){return Number(e.price.actual)-Number(t.price.actual)}));e.setState({data:t})},e.descSort=function(){var t=e.state.data.sort((function(e,t){return Number(t.price.actual)-Number(e.price.actual)}));e.setState({data:t})},e.state={data:[],sortData:[],cart:[],total:0,discTot:0,disPrice:0},e}return Object(o.a)(a,[{key:"addToCart",value:function(e){var t=this,a=this.state.data.find((function(t){return t.id===e}));this.state.cart.find((function(t){return t.id===e}))?(a.quantity+=1,a.disPrice+=a.price.actual+a.price.display,this.setState({total:this.state.total+a.price.actual,discTot:this.state.discTot+a.price.display,disPrice:a.disPrice},console.log(this.state.disPrice,"homeexist"))):(a.quantity=1,a.disPrice=a.price.actual+a.price.display,this.setState({cart:[].concat(Object(l.a)(this.state.cart),[a]),total:this.state.total+a.price.actual,discTot:this.state.discTot+a.price.display,disPrice:a.disPrice},(function(){return console.log(t.state.disPrice,"homenew")})))}},{key:"componentDidMount",value:function(){var e=this;h.a.get("https://my-json-server.typicode.com/prograk/demo/items").then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{class:"navbar navbar-dark"},c.a.createElement("a",{class:"navbar-brand",href:"#"},c.a.createElement(d.a,{icon:p.c,color:"gold"})),c.a.createElement("div",{className:"icons"},c.a.createElement(d.a,{icon:p.a,color:"white",size:"2x"}),c.a.createElement(d.a,{icon:p.b,color:"white",size:"2x",cursor:"pointer",onClick:this.routeCart}))),c.a.createElement("div",{className:"content-wrapper"},c.a.createElement("div",{className:"conatiner"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4 col-md-2"},c.a.createElement("aside",{id:"page_sidebar"},c.a.createElement("section",{class:"menu-section"},c.a.createElement("div",{className:"ml-2 mt-2 d-flex justify-content-start"},c.a.createElement("span",null,"Filters")),c.a.createElement("ul",{className:"ml-2 pl-0 d-flex justify-content-between mt-3"},c.a.createElement("li",null,c.a.createElement("span",{className:"bubble m-2"})),c.a.createElement("li",null,c.a.createElement("span",{className:"bubble m-2"}))),c.a.createElement("p",null,"price"),c.a.createElement("button",{className:"btn btn-primary"},"Apply")))),c.a.createElement("div",{className:"col-8 col-md-10 px-0"},c.a.createElement("ul",{className:"item-filters"},c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Sort By")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:this.descSort},"Price --High Low")),c.a.createElement("li",null,c.a.createElement("a",{href:"#",onClick:this.ascSort},"Price --Low High")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"Discount"))),c.a.createElement("div",{className:"items-list"},this.state.data.map((function(t){return c.a.createElement("div",{key:t.id,className:"item"},c.a.createElement("img",{src:t.image}),c.a.createElement("p",null,t.name),c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("p",null,t.price.actual,c.a.createElement("span",null,c.a.createElement("strike",null,t.price.display))),c.a.createElement("p",null,t.discount,"% off")),c.a.createElement("button",{className:"btn",onClick:function(){return e.addToCart(t.id)}},"Add to Cart"))}))))))))}}]),a}(n.Component);var v=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(f,null))};a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.958659b9.chunk.js.map