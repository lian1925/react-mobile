(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2taP":function(e,t,n){"use strict";var a=n("HJ2O"),r=n.n(a),o=n("A4dA"),l=n.n(o),i=n("f0Pt"),s=n.n(i),u=n("48TQ");n.d(t,"a",function(){return d}),n.d(t,"b",function(){return p});var c=n("fus+"),f=function(e){var t,n=e.method,a=e.url,o=e.data,i=e.isFullURL;return new Promise((t=l()(r.a.mark(function e(t,l){var f,d;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:log(1,i),a=i?a:"http://39.108.194.159:8080"+a,f=Object(u.a)("token"),d={Authorization:f},s()({method:n,url:a,data:o,timeout:7e3,headers:d}).then(function(e){if(200===e.status&&e.data&&0===e.data.returnCode)if(e.data.encript){var n=e.data.data,a=c.AES.decrypt(n,"lian");n=JSON.parse(a.toString(c.enc.Utf8)),e.data.data=n,t(e.data)}else t(e.data);else if(200===e.status&&e.data&&0!==e.data.returnCode){var r={errCode:e.data.returnCode,errMsg:e.data.returnMsg};l(r)}else l({errCode:-1,errMsg:"请求失败"})}).catch(function(e){log(e),l({errCode:-1,errMsg:"请求失败"})});case 5:case"end":return e.stop()}},e,this)})),function(e,n){return t.apply(this,arguments)}))},d=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],a=Object.keys(t);return e=0===a.length?e:e+"?"+a.map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"),f({url:e,data:{},method:"get",isFullURL:n})},p=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return f({url:e,data:t,method:"post"})}},"7LHG":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n("bS4n")),r=c(n("6ato")),o=c(n("2dj7")),l=c(n("Xtzg")),i=c(n("0dFU")),s=c(n("iczh")),u=c(n("rdAL"));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){return(0,r.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,i.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,r=e.prefixCls,o=e.style,l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n}(e,["children","className","prefixCls","style"]),i=(0,s.default)(r+"-item",n);return u.default.createElement("div",(0,a.default)({className:i,style:o},l),t)}}]),t}(u.default.Component);(t.default=f).defaultProps={prefixCls:"am-flexbox"},e.exports=t.default},"9Lk+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("fxoR")),r=o(n("7LHG"));function o(e){return e&&e.__esModule?e:{default:e}}a.default.Item=r.default,t.default=a.default,e.exports=t.default},Cfh2:function(e,t,n){var a=n("ECQD");"string"==typeof a&&(a=[[e.i,a,""]]);n("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},ECQD:function(e,t,n){(e.exports=n("aQ7W")(!1)).push([e.i,".am-pagination-wrap {\n  font-size: 18px;\n  color: #000;\n  background: none;\n  text-align: center;\n}\n.am-pagination-wrap .active {\n  color: #108ee9;\n}\n.am-pagination-wrap-btn {\n  text-align: center;\n}\n.am-pagination-wrap-btn-prev {\n  text-align: left;\n}\n.am-pagination-wrap-btn-next {\n  text-align: right;\n}\n.am-pagination-wrap-dot {\n  display: inline-block;\n  zoom: 1;\n}\n.am-pagination-wrap-dot > span {\n  display: block;\n  width: 8px;\n  height: 8px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background: #ccc;\n}\n.am-pagination-wrap-dot-active > span {\n  background: #888;\n}\n",""])},GoMC:function(e,t,n){var a=n("e6oz");"string"==typeof a&&(a=[[e.i,a,""]]);n("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},Hmw3:function(e,t,n){var a=n("k8Ke");"string"==typeof a&&(a=[[e.i,a,""]]);n("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},K9CR:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a=function(e){return{type:"SET_TEACHER_QUESTION",value:e}}},ab6J:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n("/umX")),r=m(n("6ato")),o=m(n("2dj7")),l=m(n("Xtzg")),i=m(n("0dFU")),s=m(n("iczh")),u=m(n("T9cD")),c=m(n("rdAL")),f=n("liY2"),d=m(n("amw4")),p=m(n("9Lk+"));function m(e){return e&&e.__esModule?e:{default:e}}var x=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={current:e.current},n}return(0,i.default)(t,e),(0,o.default)(t,[{key:"componentWillReceiveProps",value:function(e){e.current!==this.state.current&&this.setState({current:e.current})}},{key:"onChange",value:function(e){this.setState({current:e}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this,t=this.props,r=t.prefixCls,o=t.className,l=t.style,i=t.mode,u=t.total,m=t.simple,x=this.state.current,h=(0,f.getComponentLocale)(this.props,this.context,"Pagination",function(){return n("ts4T")}),b=h.prevText,g=h.nextText,v=c.default.createElement(p.default,null,c.default.createElement(p.default.Item,{className:r+"-wrap-btn "+r+"-wrap-btn-prev"},c.default.createElement(d.default,{inline:!0,disabled:x<=1,onClick:function(){return e.onChange(x-1)}},b)),this.props.children?c.default.createElement(p.default.Item,null,this.props.children):!m&&c.default.createElement(p.default.Item,{className:r+"-wrap","aria-live":"assertive"},c.default.createElement("span",{className:"active"},x),"/",c.default.createElement("span",null,u)),c.default.createElement(p.default.Item,{className:r+"-wrap-btn "+r+"-wrap-btn-next"},c.default.createElement(d.default,{inline:!0,disabled:u<=x,onClick:function(){return e.onChange(e.state.current+1)}},g)));if("number"===i)v=c.default.createElement("div",{className:r+"-wrap"},c.default.createElement("span",{className:"active"},x),"/",c.default.createElement("span",null,u));else if("pointer"===i){for(var y=[],w=0;w<u;w++)y.push(c.default.createElement("div",{key:"dot-"+w,className:(0,s.default)(r+"-wrap-dot",(0,a.default)({},r+"-wrap-dot-active",w+1===x))},c.default.createElement("span",null)));v=c.default.createElement("div",{className:r+"-wrap"},y)}var C=(0,s.default)(r,o);return c.default.createElement("div",{className:C,style:l},v)}}]),t}(c.default.Component);(t.default=x).defaultProps={prefixCls:"am-pagination",mode:"button",current:1,total:0,simple:!1,onChange:function(){}},x.contextTypes={antLocale:u.default.object},e.exports=t.default},e6oz:function(e,t,n){(e.exports=n("aQ7W")(!1)).push([e.i,".look-exam {\n  margin-top: 5px;\n}\n.look-exam .am-navbar-title {\n  color: #fff;\n}\n.look-exam .pagination {\n  margin: 20px;\n}\n.look-exam .content {\n  padding: 0 20px;\n}\n.look-exam .content .header {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  line-height: 35px;\n  border-bottom: 1px solid #ddd;\n}\n.look-exam .content .question {\n  padding: 20px 0;\n  font-size: 16px;\n  border-bottom: 1px solid #ddd;\n}\n.look-exam .content .question .title {\n  line-height: 25px;\n}\n.look-exam .content .question .option {\n  margin-top: 20px;\n}\n.look-exam .content .question .checkbox {\n  box-sizing: border-box;\n  display: inline-block;\n  text-align: center;\n  width: 22px;\n  height: 22px;\n  line-height: 22px;\n  border: 1px solid grey;\n  border-radius: 11px;\n  margin: 5px;\n}\n",""])},fxoR:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n("bS4n")),r=f(n("/umX")),o=f(n("6ato")),l=f(n("2dj7")),i=f(n("Xtzg")),s=f(n("0dFU")),u=f(n("iczh")),c=f(n("rdAL"));function f(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(){return(0,o.default)(this,t),(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e,t=this.props,n=t.direction,o=t.wrap,l=t.justify,i=t.align,s=t.alignContent,f=t.className,d=t.children,p=t.prefixCls,m=t.style,x=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n}(t,["direction","wrap","justify","align","alignContent","className","children","prefixCls","style"]),h=(0,u.default)(p,f,(e={},(0,r.default)(e,p+"-dir-row","row"===n),(0,r.default)(e,p+"-dir-row-reverse","row-reverse"===n),(0,r.default)(e,p+"-dir-column","column"===n),(0,r.default)(e,p+"-dir-column-reverse","column-reverse"===n),(0,r.default)(e,p+"-nowrap","nowrap"===o),(0,r.default)(e,p+"-wrap","wrap"===o),(0,r.default)(e,p+"-wrap-reverse","wrap-reverse"===o),(0,r.default)(e,p+"-justify-start","start"===l),(0,r.default)(e,p+"-justify-end","end"===l),(0,r.default)(e,p+"-justify-center","center"===l),(0,r.default)(e,p+"-justify-between","between"===l),(0,r.default)(e,p+"-justify-around","around"===l),(0,r.default)(e,p+"-align-start","start"===i),(0,r.default)(e,p+"-align-center","center"===i),(0,r.default)(e,p+"-align-end","end"===i),(0,r.default)(e,p+"-align-baseline","baseline"===i),(0,r.default)(e,p+"-align-stretch","stretch"===i),(0,r.default)(e,p+"-align-content-start","start"===s),(0,r.default)(e,p+"-align-content-end","end"===s),(0,r.default)(e,p+"-align-content-center","center"===s),(0,r.default)(e,p+"-align-content-between","between"===s),(0,r.default)(e,p+"-align-content-around","around"===s),(0,r.default)(e,p+"-align-content-stretch","stretch"===s),e));return c.default.createElement("div",(0,a.default)({className:h,style:m},x),d)}}]),t}(c.default.Component);(t.default=d).defaultProps={prefixCls:"am-flexbox",align:"center"},e.exports=t.default},gMi6:function(e,t,n){"use strict";n("EsEP"),n("Hmw3")},k8Ke:function(e,t,n){(e.exports=n("aQ7W")(!1)).push([e.i,"/* flexbox */\n.am-flexbox {\n  text-align: left;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.am-flexbox.am-flexbox-dir-row {\n  flex-direction: row;\n}\n.am-flexbox.am-flexbox-dir-row-reverse {\n  flex-direction: row-reverse;\n}\n.am-flexbox.am-flexbox-dir-column {\n  flex-direction: column;\n}\n.am-flexbox.am-flexbox-dir-column .am-flexbox-item {\n  margin-left: 0;\n}\n.am-flexbox.am-flexbox-dir-column-reverse {\n  flex-direction: column-reverse;\n}\n.am-flexbox.am-flexbox-dir-column-reverse .am-flexbox-item {\n  margin-left: 0;\n}\n.am-flexbox.am-flexbox-nowrap {\n  flex-wrap: nowrap;\n}\n.am-flexbox.am-flexbox-wrap {\n  flex-wrap: wrap;\n}\n.am-flexbox.am-flexbox-wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n.am-flexbox.am-flexbox-justify-start {\n  justify-content: flex-start;\n}\n.am-flexbox.am-flexbox-justify-end {\n  justify-content: flex-end;\n}\n.am-flexbox.am-flexbox-justify-center {\n  justify-content: center;\n}\n.am-flexbox.am-flexbox-justify-between {\n  justify-content: space-between;\n}\n.am-flexbox.am-flexbox-justify-around {\n  justify-content: space-around;\n}\n.am-flexbox.am-flexbox-align-start {\n  align-items: flex-start;\n}\n.am-flexbox.am-flexbox-align-end {\n  align-items: flex-end;\n}\n.am-flexbox.am-flexbox-align-center {\n  align-items: center;\n}\n.am-flexbox.am-flexbox-align-stretch {\n  align-items: stretch;\n}\n.am-flexbox.am-flexbox-align-baseline {\n  align-items: baseline;\n}\n.am-flexbox.am-flexbox-align-content-start {\n  align-content: flex-start;\n}\n.am-flexbox.am-flexbox-align-content-end {\n  align-items: flex-end;\n}\n.am-flexbox.am-flexbox-align-content-center {\n  align-items: center;\n}\n.am-flexbox.am-flexbox-align-content-between {\n  align-items: stretch;\n}\n.am-flexbox.am-flexbox-align-content-around {\n  align-items: baseline;\n}\n.am-flexbox.am-flexbox-align-content-stretch {\n  align-items: baseline;\n}\n.am-flexbox .am-flexbox-item {\n  box-sizing: border-box;\n  flex: 1;\n  margin-left: 8px;\n  min-width: 10px;\n}\n.am-flexbox .am-flexbox-item:first-child {\n  margin-left: 0;\n}\n",""])},"r/6S":function(e,t,n){"use strict";n.r(t),n("z6Jr");var a=n("ab6J"),r=n.n(a),o=(n("IWID"),n("0BXe")),l=n.n(o),i=(n("PAZs"),n("yNfe")),s=n.n(i),u=(n("KW2r"),n("q391")),c=n.n(u),f=n("b4l6"),d=n.n(f),p=n("0wiU"),m=n.n(p),x=n("SnMR"),h=n.n(x),b=n("GZrC"),g=n.n(b),v=n("nH91"),y=n.n(v),w=n("ut94"),C=n.n(w),E=n("ee8y"),k=n.n(E),_=(n("uqRu"),n("iQxK")),j=n.n(_),O=n("rdAL"),N=n.n(O),P=n("2taP"),S=(n("GoMC"),n("K9CR")),L=n("uuwp"),z=(j.a.Item.Brief,{prevText:"Prev",nextText:"Next"}),M={0:"#e84118",1:"#00a8ff",2:"#fbc531",3:"#4cd137",4:"#487eb0",5:"#9c88ff"},I=0,Q=0,T=function(e){function t(){var e,n;d()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return n=h()(this,(e=g()(t)).call.apply(e,[this].concat(r))),k()(C()(C()(n)),"state",{questionList:[],current:1}),k()(C()(C()(n)),"init",function(){var e=n.props.teacherQuestion.list.map(function(e){return e.user_answer="",e});n.setState({questionList:e})}),k()(C()(C()(n)),"handleClick",function(e){n.props.history.push("/collection-word?collection_id=".concat(e)),log(e)}),k()(C()(C()(n)),"gotoLast",function(){n.props.history.go(-1)}),k()(C()(C()(n)),"handlePaginationChange",function(e){e>=n.props.teacherQuestion.list.length&&c.a.info("已达终点",2),n.setState({current:e})}),k()(C()(C()(n)),"sendAnswerNote",function(e){Object(P.b)("/api/exam_boot/teacher-user-answer",e).then(function(e){log(e)}).catch(function(e){log(e)})}),k()(C()(C()(n)),"selectItem",function(e){if(!Q){Q=1;var t=n.state,a=t.questionList,r=t.current,o=C()(C()(n));a=a.map(function(t,a){if(a===r-1){t.user_answer=e,t.answer==e&&void 0===t.is_error?t.is_error=0:t.is_error=1;var o={teacher_id:t.id,user_answer:e,user_id:n.props.teacherQuestion.user_id,is_error:t.is_error};n.sendAnswerNote(o)}return t}),n.setState({questionList:a}),e==(a[r-1]&&a[r-1].answer)?c.a.info("回答正确",2,function(){if((r+=1)>a.length){var e={list:a};return n.props.setValue(e),o.props.history.push("/judge-exam"),void(r=a.length)}n.setState({current:r}),Q=0}):c.a.info("回答错误",2,function(){Q=0})}}),n}return y()(t,e),m()(t,[{key:"componentDidMount",value:function(){I=new Date,this.init()}},{key:"componentWillUnmount",value:function(){var e=new Date-I,t={duration:e=parseInt(e/1e3)};this.props.setValue(t)}},{key:"render",value:function(){var e=this,t=this.state.questionList[this.state.current-1],n=t&&JSON.parse(t.optionList),a=N.a.createElement(l.a,{style:{backgroundColor:M[this.state.current%5],color:"#fff"},mode:"light",onLeftClick:this.gotoLast,leftContent:N.a.createElement(s.a,{type:"left"}),rightContent:[N.a.createElement(s.a,{key:"1",type:"ellipsis"})]},"Try and know"),o=(N.a.createElement("div",{className:"pagination"},N.a.createElement(r.a,{total:(this.props.teacherQuestion.list||[]).length,current:this.state.current,locale:z,onChange:this.handlePaginationChange})),N.a.createElement("div",{className:"header"},N.a.createElement("span",null,"单项选择题"),N.a.createElement("span",null,N.a.createElement("span",{style:{color:M[this.state.current%5],fontSize:18}},this.state.current)," ","/",this.props.teacherQuestion.list.length))),i=N.a.createElement("div",{className:"question"},N.a.createElement("div",{className:"title"},t&&t.content," ",N.a.createElement("span",{style:{fontSize:"12px",color:"RGB(101, 209, 57)"}},this.props.teacherQuestion.collection_info.name)),N.a.createElement("div",null,["A","B","C","D"].map(function(a,r){return N.a.createElement("div",{className:"option",key:a,onClick:function(){e.selectItem(a)}},N.a.createElement("span",{style:a===(t&&t.user_answer)?{background:M[e.state.current%5],border:"none",color:"white"}:{},className:"checkbox"},a),N.a.createElement("span",null,n&&n[r]))}))),u=N.a.createElement("div",{style:{color:"#999",lineHeight:"35px"}},"提示：完成一道题后，自动完成跳转"),c=N.a.createElement("div",{className:"content"},o,i,u);return N.a.createElement("div",{style:{height:"35px",width:"100%",marginBottom:"-5px",backgroundColor:M[this.state.current%5]}}),N.a.createElement("div",{className:"look-exam"},a,c)}}]),t}(O.Component);t.default=Object(L.b)(function(e){return{teacherQuestion:e.teacherQuestion}},function(e){return{setValue:function(t){e(Object(S.a)(t))}}})(T)},ts4T:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={prevText:"上一页",nextText:"下一页"},e.exports=t.default},z6Jr:function(e,t,n){"use strict";n("EsEP"),n("JrXl"),n("gMi6"),n("Cfh2")}}]);
//# sourceMappingURL=8.04373bacb86d3f72f1e7.js.map