(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0BXe":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=d(t("bS4n")),o=d(t("6ato")),i=d(t("2dj7")),r=d(t("Xtzg")),c=d(t("0dFU")),l=d(t("iczh")),s=d(t("rdAL"));function d(n){return n&&n.__esModule?n:{default:n}}var p=function(n){function e(){return(0,o.default)(this,e),(0,r.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return(0,c.default)(e,n),(0,i.default)(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.className,o=n.children,i=n.mode,r=n.icon,c=n.onLeftClick,d=n.leftContent,p=n.rightContent,u=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(n);o<a.length;o++)e.indexOf(a[o])<0&&(t[a[o]]=n[a[o]])}return t}(n,["prefixCls","className","children","mode","icon","onLeftClick","leftContent","rightContent"]);return s.default.createElement("div",(0,a.default)({},u,{className:(0,l.default)(t,e,e+"-"+i)}),s.default.createElement("div",{className:e+"-left",role:"button",onClick:c},r?s.default.createElement("span",{className:e+"-left-icon","aria-hidden":"true"},r):null,d),s.default.createElement("div",{className:e+"-title"},o),s.default.createElement("div",{className:e+"-right"},p))}}]),e}(s.default.Component);(e.default=p).defaultProps={prefixCls:"am-navbar",mode:"dark",onLeftClick:function(){}},n.exports=e.default},"0cxM":function(n,e,t){"use strict";t.d(e,"a",function(){return a});var a=function(n){return{type:"SET_COLLECTION_WORD",value:n}}},"2taP":function(n,e,t){"use strict";var a=t("HJ2O"),o=t.n(a),i=t("A4dA"),r=t.n(i),c=t("f0Pt"),l=t.n(c),s=t("48TQ");t.d(e,"a",function(){return u}),t.d(e,"b",function(){return f});var d=t("fus+"),p=function(n){var e,t=n.method,a=n.url,i=n.data,c=n.isFullURL;return new Promise((e=r()(o.a.mark(function n(e,r){var p,u;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:log(1,c),a=c?a:"http://39.108.194.159:8080"+a,p=Object(s.a)("token"),u={Authorization:p},l()({method:t,url:a,data:i,timeout:7e3,headers:u}).then(function(n){if(200===n.status&&n.data&&0===n.data.returnCode)if(n.data.encript){var t=n.data.data,a=d.AES.decrypt(t,"lian");t=JSON.parse(a.toString(d.enc.Utf8)),n.data.data=t,e(n.data)}else e(n.data);else if(200===n.status&&n.data&&0!==n.data.returnCode){var o={errCode:n.data.returnCode,errMsg:n.data.returnMsg};r(o)}else r({errCode:-1,errMsg:"请求失败"})}).catch(function(n){log(n),r({errCode:-1,errMsg:"请求失败"})});case 5:case"end":return n.stop()}},n,this)})),function(n,t){return e.apply(this,arguments)}))},u=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=2<arguments.length&&void 0!==arguments[2]&&arguments[2],a=Object.keys(e);return n=0===a.length?n:n+"?"+a.map(function(n){return encodeURIComponent(n)+"="+encodeURIComponent(e[n])}).join("&"),p({url:n,data:{},method:"get",isFullURL:t})},f=function(n){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return p({url:n,data:e,method:"post"})}},FSWL:function(n,e,t){(n.exports=t("aQ7W")(!1)).push([n.i,".collection-word-container {\n  margin-top: 5px;\n}\n.collection-word-container .header {\n  font-size: 20px;\n  line-height: 40px;\n  padding: 10px 10px 0px 10px;\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  justify-content: space-between;\n}\n.collection-word-container .header .title {\n  display: inline-block;\n}\n.collection-word-container .header .title span {\n  margin-left: 10px;\n  font-size: 16px;\n  color: #666;\n}\n.collection-word-container .header .switch {\n  display: inline-block;\n  font-size: 14px;\n}\n.collection-word-container .list {\n  padding: 10px 10px 0 10px;\n  font-size: 16px;\n  line-height: 30px;\n}\n.collection-word-container .list .cell {\n  border-bottom: 1px solid #ddd;\n  margin-bottom: 10px;\n  padding-bottom: 5px;\n}\n.collection-word-container .list .cell .grey {\n  color: #666;\n}\n.collection-word-container .list .cell p {\n  margin: 0;\n}\n.collection-word-container .list .cell p span {\n  margin-left: 10px;\n}\n",""])},IWID:function(n,e,t){"use strict";t("EsEP"),t("liDP")},KyU6:function(n,e,t){(n.exports=t("aQ7W")(!1)).push([n.i,".am-navbar {\n  display: flex;\n  align-items: center;\n  height: 45px;\n  background-color: #108ee9;\n  color: #fff;\n}\n.am-navbar-left,\n.am-navbar-title,\n.am-navbar-right {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.am-navbar-left {\n  padding-left: 15px;\n  font-size: 16px;\n}\n.am-navbar-left-icon {\n  margin-right: 5px;\n  display: inherit;\n}\n.am-navbar-title {\n  justify-content: center;\n  font-size: 18px;\n  white-space: nowrap;\n}\n.am-navbar-right {\n  justify-content: flex-end;\n  font-size: 16px;\n  margin-right: 15px;\n}\n.am-navbar-light {\n  background-color: #fff;\n  color: #108ee9;\n}\n.am-navbar-light .am-navbar-title {\n  color: #000;\n}\n",""])},M0ux:function(n,e,t){"use strict";t.r(e),t("fRyC");var a=t("Nmdf"),o=t.n(a),i=(t("IWID"),t("0BXe")),r=t.n(i),c=(t("PAZs"),t("yNfe")),l=t.n(c),s=t("b4l6"),d=t.n(s),p=t("0wiU"),u=t.n(p),f=t("SnMR"),h=t.n(f),m=t("GZrC"),b=t.n(m),x=t("nH91"),g=t.n(x),k=t("ut94"),v=t.n(k),y=t("ee8y"),w=t.n(y),C=(t("uqRu"),t("iQxK")),O=t.n(C),E=t("rdAL"),_=t.n(E),N=t("0cxM"),j=t("uuwp"),P=t("2taP"),z=(t("Oaao"),O.a.Item.Brief,["/api/english/collection","/api/english/collection-word"]),S=function(n){function e(){var n,t;d()(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=h()(this,(n=b()(e)).call.apply(n,[this].concat(o))),w()(v()(v()(t)),"state",{collection_id:"",collection:{},collection_words:[],isTrain:!0}),w()(v()(v()(t)),"init",function(){var n=function(n){var e={};return n.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(n,t,a){e[t]=a}),e}(t.props.location.search).collection_id;Object(P.a)("".concat(z[0],"/").concat(n)).then(function(n){t.setState({collection:n.data[0]}),log(n)}),Object(P.a)("".concat(z[1],"?collection_id=").concat(n)).then(function(n){log(n),t.setState({collection_words:n.data}),t.props.setValue({data:n.data})}).catch(function(n){log(n)})}),w()(v()(v()(t)),"handleClick",function(n){t.state.isTrain?t.props.history.push("/train-word?collection_id=".concat(n)):t.props.history.push("/learn-word?collection_id=".concat(n)),log(n)}),w()(v()(v()(t)),"gotoLast",function(){t.props.history.go(-1)}),t}return g()(e,n),u()(e,[{key:"componentDidMount",value:function(){this.init()}},{key:"render",value:function(){var n=this,e=_.a.createElement(r.a,{mode:"light",onLeftClick:this.gotoLast,leftContent:_.a.createElement(l.a,{type:"left"}),rightContent:[_.a.createElement(l.a,{key:"1",type:"ellipsis"})]},"That will get it"),t=_.a.createElement("div",{className:"header"},_.a.createElement("div",{className:"title"},this.state.collection.name,_.a.createElement("span",null,this.state.collection.note)),_.a.createElement("div",{className:"switch"},"复习与否",_.a.createElement(o.a,{checked:this.state.isTrain,onChange:function(){n.setState({isTrain:!n.state.isTrain})}})));log(this.state.collection_words);var a=_.a.createElement("div",{className:"list"},this.state.collection_words.map(function(e){return _.a.createElement("div",{className:"cell",key:JSON.stringify(e),onClick:function(){return n.handleClick(e.id)}},_.a.createElement("div",null,_.a.createElement("p",null,e.word," ",_.a.createElement("span",{className:"grey"},"[",e.phonetic_symbol,"]")," "),_.a.createElement("p",{className:"grey"},e.definition)))}));return _.a.createElement("div",{className:"collection-word-container"},e,t,a)}}]),e}(E.Component);e.default=Object(j.b)(function(n){return{redux:n.collectionWord}},function(n){return{setValue:function(e){n(Object(N.a)(e))}}})(S)},Nmdf:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=p(t("bS4n")),o=p(t("/umX")),i=p(t("6ato")),r=p(t("2dj7")),c=p(t("Xtzg")),l=p(t("0dFU")),s=p(t("iczh")),d=p(t("rdAL"));function p(n){return n&&n.__esModule?n:{default:n}}var u=function(n){function e(){(0,i.default)(this,e);var n=(0,c.default)(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return n.onChange=function(e){var t=e.target.checked;n.props.onChange&&n.props.onChange(t)},n.onClick=function(e){if(n.props.onClick){var t;t=e&&e.target&&void 0!==e.target.checked?e.target.checked:n.props.checked,n.props.onClick(t)}},n}return(0,l.default)(e,n),(0,r.default)(e,[{key:"render",value:function(){var n=this.props,e=n.prefixCls,t=n.name,i=n.checked,r=n.disabled,c=n.className,l=n.platform,p=n.color,u=function(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(n);o<a.length;o++)e.indexOf(a[o])<0&&(t[a[o]]=n[a[o]])}return t}(n,["prefixCls","name","checked","disabled","className","platform","color"]),f=(0,s.default)(e,c,(0,o.default)({},e+"-android","android"===l)),h=(0,s.default)("checkbox",(0,o.default)({},"checkbox-disabled",r)),m=Object.keys(u).reduce(function(n,e){return"aria-"!==e.substr(0,5)&&"data-"!==e.substr(0,5)&&"role"!==e||(n[e]=u[e]),n},{}),b=this.props.style||{};return p&&i&&(b.backgroundColor=p),d.default.createElement("label",{className:f},d.default.createElement("input",(0,a.default)({type:"checkbox",name:t,className:e+"-checkbox",disabled:r,checked:i,onChange:this.onChange,value:i?"on":"off"},r?{}:{onClick:this.onClick},m)),d.default.createElement("div",(0,a.default)({className:h,style:b},r?{onClick:this.onClick}:{})))}}]),e}(d.default.Component);(e.default=u).defaultProps={prefixCls:"am-switch",name:"",checked:!1,disabled:!1,onChange:function(){},platform:"ios",onClick:function(){}},n.exports=e.default},Oaao:function(n,e,t){var a=t("FSWL");"string"==typeof a&&(a=[[n.i,a,""]]);t("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(n.exports=a.locals)},Ygpy:function(n,e,t){var a=t("jm2E");"string"==typeof a&&(a=[[n.i,a,""]]);t("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(n.exports=a.locals)},fRyC:function(n,e,t){"use strict";t("EsEP"),t("Ygpy")},jm2E:function(n,e,t){(n.exports=t("aQ7W")(!1)).push([n.i,'.am-switch {\n  display: inline-block;\n  vertical-align: middle;\n  box-sizing: border-box;\n  position: relative;\n  cursor: pointer;\n  align-self: center;\n}\n.am-switch .checkbox {\n  width: 51px;\n  height: 31px;\n  border-radius: 31px;\n  box-sizing: border-box;\n  background: #e5e5e5;\n  z-index: 0;\n  margin: 0;\n  padding: 0;\n  appearance: none;\n  border: 0;\n  cursor: pointer;\n  position: relative;\n  transition: all 300ms;\n}\n.am-switch .checkbox:before {\n  content: \' \';\n  position: absolute;\n  left: 1.5px;\n  top: 1.5px;\n  width: 48px;\n  height: 28px;\n  border-radius: 28px;\n  box-sizing: border-box;\n  background: #fff;\n  z-index: 1;\n  transition: all 200ms;\n  transform: scale(1);\n}\n.am-switch .checkbox:after {\n  content: \' \';\n  height: 28px;\n  width: 28px;\n  border-radius: 28px;\n  background: #fff;\n  position: absolute;\n  z-index: 2;\n  left: 1.5px;\n  top: 1.5px;\n  transform: translateX(0);\n  transition: all 200ms;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.21);\n}\n.am-switch .checkbox.checkbox-disabled {\n  z-index: 3;\n}\n.am-switch input[type="checkbox"] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  border: 0 none;\n  appearance: none;\n}\n.am-switch input[type="checkbox"]:checked + .checkbox {\n  background: #4dd865;\n}\n.am-switch input[type="checkbox"]:checked + .checkbox:before {\n  transform: scale(0);\n}\n.am-switch input[type="checkbox"]:checked + .checkbox:after {\n  transform: translateX(20px);\n}\n.am-switch input[type="checkbox"]:disabled + .checkbox {\n  opacity: 0.3;\n}\n.am-switch.am-switch-android .checkbox {\n  width: 72px;\n  height: 23px;\n  border-radius: 3px;\n  background: #a7aaa6;\n}\n.am-switch.am-switch-android .checkbox:before {\n  display: none;\n}\n.am-switch.am-switch-android .checkbox:after {\n  width: 35px;\n  height: 21px;\n  border-radius: 2px;\n  box-shadow: none;\n  left: 1PX;\n  top: 1PX;\n}\n.am-switch.am-switch-android input[type="checkbox"]:checked + .checkbox {\n  background: #108ee9;\n}\n.am-switch.am-switch-android input[type="checkbox"]:checked + .checkbox:before {\n  transform: scale(0);\n}\n.am-switch.am-switch-android input[type="checkbox"]:checked + .checkbox:after {\n  transform: translateX(35px);\n}\n',""])},liDP:function(n,e,t){var a=t("KyU6");"string"==typeof a&&(a=[[n.i,a,""]]);t("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(n.exports=a.locals)}}]);
//# sourceMappingURL=9.493c0bba111ce06b275e.js.map