(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"4H72":function(e,t,n){var a=n("RQAi");"string"==typeof a&&(a=[[e.i,a,""]]);n("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},RQAi:function(e,t,n){(e.exports=n("aQ7W")(!1)).push([e.i,".ant-advanced-search-form {\n  padding: 24px;\n  background: #fbfbfb;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n}\n.ant-advanced-search-form .ant-form-item {\n  display: flex;\n}\n",""])},Vtdi:function(e,t,n){"use strict";n.r(t);var a=n("rdAL"),o=n.n(a),r=n("FFPy"),i=n.n(r),l=n("MpBS"),s=n("OV//"),c=n("ARSD"),d=n("D+7W"),u=n.n(d),p=(n("iHVx"),n("UvCF")),h=n.n(p),f=(n("JrXl"),n("amw4")),g=n.n(f),m=(n("1Osk"),n("vMRr")),v=n.n(m),y=n("An8i"),S=n.n(y),E=n("b4l6"),b=n.n(E),x=n("0wiU"),w=n.n(x),R=n("SnMR"),k=n.n(R),B=n("GZrC"),D=n.n(B),C=n("nH91"),L=n.n(C),z=n("ut94"),O=n.n(z),M=n("ee8y"),W=n.n(M),T=(n("4H72"),[{img:"https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png",title:"Meet hotel",des:"不是所有的兼职汪都需要风吹日晒"},{img:"https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png",title:"McDonald's invites you",des:"不是所有的兼职汪都需要风吹日晒"},{img:"https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png",title:"Eat the week",des:"不是所有的兼职汪都需要风吹日晒"}]),F=20,H=0;function P(){for(var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=[],n=0;n<F;n++)t.push("row - ".concat(e*F+n));return t}var j=function(e){function t(e){var n;b()(this,t),n=k()(this,D()(t).call(this,e)),W()(O()(O()(n)),"onRefresh",function(){n.setState({refreshing:!0,isLoading:!0}),setTimeout(function(){n.rData=P(),n.setState({dataSource:n.state.dataSource.cloneWithRows(n.rData),refreshing:!1,isLoading:!1})},600)}),W()(O()(O()(n)),"onEndReached",function(e){n.state.isLoading&&!n.state.hasMore||(n.setState({isLoading:!0}),setTimeout(function(){n.rData=[].concat(S()(n.rData),S()(P(++H))),n.setState({dataSource:n.state.dataSource.cloneWithRows(n.rData),isLoading:!1})},1e3))});var a=new v.a.DataSource({rowHasChanged:function(e,t){return e!==t}});return n.state={dataSource:a,refreshing:!0,isLoading:!0,height:document.documentElement.clientHeight,useBodyScroll:!1},n}return L()(t,e),w()(t,[{key:"componentDidUpdate",value:function(){this.state.useBodyScroll?document.body.style.overflow="auto":document.body.style.overflow="hidden"}},{key:"componentDidMount",value:function(){var e=this,t=this.state.height-i.a.findDOMNode(this.lv).offsetTop;setTimeout(function(){e.rData=P(),e.setState({dataSource:e.state.dataSource.cloneWithRows(P()),height:t,refreshing:!1,isLoading:!1})},1500)}},{key:"render",value:function(){var e=this,t=T.length-1;return o.a.createElement("div",null,o.a.createElement(g.a,{style:{margin:"30px 15px"},inline:!0,onClick:function(){return e.setState({useBodyScroll:!e.state.useBodyScroll})}},this.state.useBodyScroll?"useBodyScroll":"partial scroll"),o.a.createElement(v.a,{key:this.state.useBodyScroll?"0":"1",ref:function(t){return e.lv=t},dataSource:this.state.dataSource,renderHeader:function(){return o.a.createElement("span",null,"Pull to refresh")},renderFooter:function(){return o.a.createElement("div",{style:{padding:30,textAlign:"center"}},e.state.isLoading?"Loading...":"Loaded")},renderRow:function(e,n,a){var r;t<0&&(t=T.length-1);var i=T[t--];return o.a.createElement("div",{key:a,style:{padding:"0 15px",backgroundColor:"white"}},o.a.createElement("div",{style:{height:"50px",lineHeight:"50px",color:"#888",fontSize:"18px",borderBottom:"1px solid #ddd"}},i.title),o.a.createElement("div",{style:(r={display:"-webkit-box"},W()(r,"display","flex"),W()(r,"padding","15px"),r)},o.a.createElement("img",{style:{height:"63px",width:"63px",marginRight:"15px"},src:i.img,alt:""}),o.a.createElement("div",{style:{display:"inline-block"}},o.a.createElement("div",{style:{marginBottom:"8px",color:"#000",fontSize:"16px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"250px"}},i.des,"-",e),o.a.createElement("div",{style:{fontSize:"16px"}},o.a.createElement("span",{style:{fontSize:"30px",color:"#FF6E27"}},a)," ","元/任务"))))},renderSeparator:function(e,t){return o.a.createElement("div",{key:"".concat(e,"-").concat(t),style:{backgroundColor:"#F5F5F9",height:8,borderTop:"1px solid #ECECED",borderBottom:"1px solid #ECECED"}})},useBodyScroll:this.state.useBodyScroll,style:this.state.useBodyScroll?{}:{height:this.state.height,border:"1px solid #ddd",margin:"5px 0"},pullToRefresh:o.a.createElement(h.a,{refreshing:this.state.refreshing,onRefresh:this.onRefresh}),onEndReached:this.onEndReached,pageSize:5}))}}]),t}(o.a.Component);n("ptP6");var A=function(){return o.a.createElement("div",null)},J=u()({loader:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"kpHp"))},loading:A}),V=u()({loader:function(){return n.e(9).then(n.bind(null,"J1fw"))},loading:A}),I=n("uuwp"),U=n("qbGs"),_=[],q={pagination:{current:1,pageSize:10},filterResult:{}},Q=Object(U.b)({collectionWord:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:_,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"SET_COLLECTION_WORD":return log(11,t.value),Object.assign({},e,t.value);default:return e}},simpleWord:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:q,t=1<arguments.length?arguments[1]:void 0;switch(t.type){case"SET_SIMPLE_WORD":return Object.assign({},e,t.value);default:return e}}}),X=Object(U.c)(Q);X.subscribe(function(){return log(123,X.getState())}),Object(r.render)(o.a.createElement(I.a,{store:X},o.a.createElement(function(){return o.a.createElement(l.a,null,o.a.createElement(s.a,null,o.a.createElement(c.a,{path:"/login",component:J}),o.a.createElement(c.a,{path:"/about",component:j}),o.a.createElement(c.a,{path:"/",component:V})))},null)),document.getElementById("root"))},ptP6:function(e,t,n){(function(e){e.log=function(){var e;(e=console).log.apply(e,arguments)}}).call(this,n("Zvqg"))}},[["Vtdi",2,0]]]);
//# sourceMappingURL=app.ea45c48b5c171853ac4c.js.map