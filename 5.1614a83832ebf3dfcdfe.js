(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0cxM":function(t,n,e){"use strict";e.d(n,"a",function(){return o});var o=function(t){return{type:"SET_COLLECTION_WORD",value:t}}},"2taP":function(t,n,e){"use strict";var o=e("HJ2O"),a=e.n(o),i=e("A4dA"),r=e.n(i),c=e("f0Pt"),l=e.n(c),s=e("48TQ");e.d(n,"a",function(){return p}),e.d(n,"b",function(){return f});var d=e("fus+"),u=function(t){var n,e=t.method,o=t.url,i=t.data,c=t.isFullURL;return new Promise((n=r()(a.a.mark(function t(n,r){var u,p;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:log(1,c),o=c?o:"http://39.108.194.159:8080"+o,u=Object(s.a)("token"),p={Authorization:u},l()({method:e,url:o,data:i,timeout:7e3,headers:p}).then(function(t){if(200===t.status&&t.data&&0===t.data.returnCode)if(t.data.encript){var e=t.data.data,o=d.AES.decrypt(e,"lian");e=JSON.parse(o.toString(d.enc.Utf8)),t.data.data=e,n(t.data)}else n(t.data);else if(200===t.status&&t.data&&0!==t.data.returnCode){var a={errCode:t.data.returnCode,errMsg:t.data.returnMsg};r(a)}else r({errCode:-1,errMsg:"请求失败"})}).catch(function(t){log(t),r({errCode:-1,errMsg:"请求失败"})});case 5:case"end":return t.stop()}},t,this)})),function(t,e){return n.apply(this,arguments)}))},p=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=2<arguments.length&&void 0!==arguments[2]&&arguments[2],o=Object.keys(n);return t=0===o.length?t:t+"?"+o.map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(n[t])}).join("&"),u({url:t,data:{},method:"get",isFullURL:e})},f=function(t){var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return u({url:t,data:n,method:"post"})}},CXtf:function(t,n,e){"use strict";e.r(n),e("fRyC");var o=e("Nmdf"),a=e.n(o),i=(e("IWID"),e("0BXe")),r=e.n(i),c=(e("PAZs"),e("yNfe")),l=e.n(c),s=e("b4l6"),d=e.n(s),u=e("0wiU"),p=e.n(u),f=e("SnMR"),h=e.n(f),m=e("GZrC"),g=e.n(m),w=e("nH91"),v=e.n(w),x=e("ut94"),y=e.n(x),b=e("ee8y"),C=e.n(b),E=(e("uqRu"),e("iQxK")),k=e.n(E),N=e("rdAL"),O=e.n(N),_=e("0cxM"),T=e("uuwp"),S=e("2taP"),j=(e("x56i"),k.a.Item.Brief,["/api/english/collection","/api/english/collection-word"]),L=function(t){function n(){var t,e;d()(this,n);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=h()(this,(t=g()(n)).call.apply(t,[this].concat(a))),C()(y()(y()(e)),"state",{collection_id:"",collection:{},collection_words:[],isTrain:!0}),C()(y()(y()(e)),"init",function(){var t=function(t){var n={};return t.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,e,o){n[e]=o}),n}(e.props.location.search).collection_id;Object(S.a)("".concat(j[0],"/").concat(t)).then(function(t){e.setState({collection:t.data[0]}),log(t)}),Object(S.a)("".concat(j[1],"?collection_id=").concat(t)).then(function(t){log(t),e.setState({collection_words:t.data}),e.props.setValue({data:t.data})}).catch(function(t){log(t)})}),C()(y()(y()(e)),"handleClick",function(t){e.state.isTrain?e.props.history.push("/train-word?collection_id=".concat(t)):e.props.history.push("/learn-word?collection_id=".concat(t)),log(t)}),C()(y()(y()(e)),"gotoLast",function(){e.props.history.go(-1)}),e}return v()(n,t),p()(n,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var t=this,n=O.a.createElement(r.a,{mode:"light",onLeftClick:this.gotoLast,leftContent:O.a.createElement(l.a,{type:"left"}),rightContent:[O.a.createElement(l.a,{key:"1",type:"ellipsis"})]},"That will get it"),e=O.a.createElement("div",{className:"header"},O.a.createElement("div",{className:"title"},this.state.collection.name,O.a.createElement("span",null,this.state.collection.note)),O.a.createElement("div",{className:"switch"},"复习与否",O.a.createElement(a.a,{checked:this.state.isTrain,onChange:function(){t.setState({isTrain:!t.state.isTrain})}})));log(this.state.collection_words);var o=O.a.createElement("div",{className:"list"},this.state.collection_words.map(function(n){return O.a.createElement("div",{className:"cell",key:JSON.stringify(n),onClick:function(){return t.handleClick(n.id)}},O.a.createElement("div",null,O.a.createElement("p",null,n.word," ",O.a.createElement("span",{className:"grey"},"[",n.phonetic_symbol,"]")," "),O.a.createElement("p",{className:"grey"},n.definition)))}));return O.a.createElement("div",{className:"collection-word-container"},n,e,o)}}]),n}(N.Component);n.default=Object(T.b)(function(t){return{redux:t.collectionWord}},function(t){return{setValue:function(n){t(Object(_.a)(n))}}})(L)},mTEZ:function(t,n,e){(t.exports=e("aQ7W")(!1)).push([t.i,".collection-word-container {\n  margin-top: 5px;\n}\n.collection-word-container .header {\n  font-size: 20px;\n  line-height: 40px;\n  padding: 10px 10px 0px 10px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  justify-content: space-between;\n}\n.collection-word-container .header .title {\n  display: inline-block;\n}\n.collection-word-container .header .title span {\n  margin-left: 10px;\n  font-size: 16px;\n  color: #666;\n}\n.collection-word-container .header .switch {\n  display: inline-block;\n  font-size: 14px;\n}\n.collection-word-container .list {\n  padding: 10px 10px 0 10px;\n  font-size: 16px;\n  line-height: 30px;\n}\n.collection-word-container .list .cell {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n}\n.collection-word-container .list .cell .grey {\n  color: #666;\n}\n.collection-word-container .list .cell p {\n  margin: 0;\n}\n.collection-word-container .list .cell p span {\n  margin-left: 10px;\n}\n",""])},x56i:function(t,n,e){var o=e("mTEZ");"string"==typeof o&&(o=[[t.i,o,""]]);e("7B2p")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(t.exports=o.locals)}}]);
//# sourceMappingURL=5.1614a83832ebf3dfcdfe.js.map