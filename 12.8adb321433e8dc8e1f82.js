(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"3MLI":function(e,t,n){"use strict";n.r(t),n("IWID");var a=n("0BXe"),o=n.n(a),r=(n("PAZs"),n("yNfe")),i=n.n(r),l=n("b4l6"),c=n.n(l),s=n("0wiU"),p=n.n(s),d=n("SnMR"),u=n.n(d),h=n("GZrC"),m=n.n(h),g=n("nH91"),f=n.n(g),x=n("ut94"),b=n.n(x),v=n("ee8y"),y=n.n(v),E=n("rdAL"),w=n.n(E),j=n("uuwp"),C=(n("iEyZ"),n("VkBt"),n("xBWX"));n("d4b+")(C.Highcharts);var k={0:"#e84118",1:"#00a8ff",2:"#fbc531",3:"#4cd137",4:"#487eb0",5:"#9c88ff"},L=function(e){function t(){var e,n;c()(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return n=u()(this,(e=m()(t)).call.apply(e,[this].concat(o))),y()(b()(b()(n)),"state",{total:0,option:{},correctCount:0,errorCount:0}),y()(b()(b()(n)),"gotoLast",function(){n.props.history.go(-1)}),n}return f()(t,e),p()(t,[{key:"componentDidMount",value:function(){var e=this.props.teacherQuestion.list,t=e.filter(function(e){return 0===e.is_error}).length||0,n=e.length-t;this.setState({correctCount:t,errorCount:n}),log(t,n);var a={chart:{type:"pie",height:300,backgroundColor:"transparent",options3d:{enabled:!0,alpha:45,beta:0}},colors:["#65D139","#e84118"],title:{text:"答题对错占比"},tooltip:{pointFormat:"{series.name}: <b>{point.percentage:.1f}%</b>"},plotOptions:{pie:{depth:35,allowPointSelect:!0,cursor:"pointer",dataLabels:{enabled:!1},showInLegend:!0}},series:[{type:"pie",name:"比例",data:[{name:"正确",y:t},{name:"错误",y:n,sliced:!0,selected:!0}]}]};this.setState({option:a})}},{key:"render",value:function(){var e=this.props.teacherQuestion;log(e);var t=w.a.createElement(o.a,{style:{backgroundColor:k[parseInt(10*Math.random())%5],color:"#fff"},mode:"light",onLeftClick:this.gotoLast,leftContent:w.a.createElement(i.a,{type:"left"}),rightContent:[w.a.createElement(i.a,{key:"1",type:"ellipsis"})]},"Review and learn"),n=w.a.createElement("div",{className:"title"},w.a.createElement("h2",null,"答卷总结"),w.a.createElement("div",{className:"exam"},e&&e.collection_info.name,w.a.createElement("p",null,e&&e.collection_info.note," ",w.a.createElement("span",null,"[",e&&e.list.length,"道题]")))),a=w.a.createElement("div",{className:"correct"},"答对了",w.a.createElement("span",null,this.state.correctCount),"题，答错了",w.a.createElement("span",null,this.state.errorCount),"题， 用时",w.a.createElement("span",null,this.props.teacherQuestion.duration),"秒"),r=(w.a.createElement("div",{id:"highcharts",className:"chart"},"chart"),w.a.createElement(C,{config:this.state.option})),l=w.a.createElement("div",{className:"content"},n,a,r);return w.a.createElement("div",{className:"judge-exam"},t,l)}}]),t}(E.Component);t.default=Object(j.b)(function(e){return{teacherQuestion:e.teacherQuestion}})(L)},"95zo":function(e,t,n){(e.exports=n("aQ7W")(!1)).push([e.i,".judge-exam {\n  margin-top: 5px;\n  margin-bottom: 88px;\n}\n.judge-exam .am-navbar-title {\n  color: #fff;\n}\n.judge-exam .content {\n  padding: 0 20px;\n}\n.judge-exam .content .title {\n  font-size: 16px;\n  line-height: 40px;\n  padding: 10px 10px 0px 10px;\n  border-bottom: 1px solid #ddd;\n}\n.judge-exam .content .title h2 {\n  font-weight: normal;\n  text-align: center;\n  line-height: 35px;\n  border-bottom: 1px solid #ddd;\n}\n.judge-exam .content .title p {\n  font-size: 14px;\n  color: #666;\n  margin: 0;\n  margin-left: 5px;\n  line-height: 30px;\n}\n.judge-exam .content .title p span {\n  font-size: 12px;\n  margin-left: 5px;\n  color: #65d139;\n}\n.judge-exam .content .correct {\n  line-height: 40px;\n  border-bottom: 1px solid #ddd;\n}\n.judge-exam .content .correct span {\n  font-size: 18px;\n  padding: 0 5px;\n  color: #65d139;\n}\n.judge-exam .content .chart {\n  width: 100%;\n  height: 200px;\n  border: 1px solid #ddd;\n}\n.judge-exam .content .highcharts-background {\n  background: transparent;\n}\n",""])},iEyZ:function(e,t,n){var a=n("95zo");"string"==typeof a&&(a=[[e.i,a,""]]);n("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)}}]);
//# sourceMappingURL=12.8adb321433e8dc8e1f82.js.map