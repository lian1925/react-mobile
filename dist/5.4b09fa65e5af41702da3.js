(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5EMl":function(e,t,n){"use strict";n.r(t),n("oB1J");var a=n("zUbA"),i=n("gx1s"),r=n.n(i),o=n("b4l6"),l=n.n(o),c=n("0wiU"),s=n.n(c),u=n("SnMR"),p=n.n(u),d=n("GZrC"),m=n.n(d),g=n("nH91"),f=n.n(g),h=n("ut94"),b=n.n(h),y=n("ee8y"),E=n.n(y),S=n("rdAL"),v=n.n(S),x=n("zLGJ"),w=n("uuwp"),k=n("rGXH"),R=n("6MTY"),z=(n("SJdm"),n("2taP")),I=(n("+/xz"),n("nD3m")),j=(n("d6iZ"),n("Y2DP")),L=n("nIBk"),T=n("MQX1"),C="/simple-english",O=[{label:"单词",name:"word",required:!1,message:"请输入单词",placeholder:""},{label:"注释",name:"definition",required:!1,message:"请输入单词",placeholder:""},{label:"例句",name:"sampleSentence",required:!1,message:"请输入单词",placeholder:""}],P=[{title:"序号",dataIndex:"id",key:"id"},{title:"单词",dataIndex:"word",key:"word"},{title:"注释",dataIndex:"definition",key:"definition",render:function(e,t,n){return v.a.createElement(j.a,{content:B(e),title:"Title"},v.a.createElement("span",{className:"stringtomore-collumn"},Object(T.b)(e)))}},{title:"音标",key:"phoneticSymbol",dataIndex:"phoneticSymbol",render:function(e,t,n){return v.a.createElement("span",null,"[".concat(e,"]"))}},{title:"音标发音",key:"pronunciationURL",dataIndex:"pronunciationURL",render:function(e,t,n){return v.a.createElement(j.a,{content:J(e),title:"详情",trigger:"click"},v.a.createElement("span",null,Object(T.b)(e,8)))}},{title:"图标",key:"profilePictureURL",dataIndex:"profilePictureURL",render:function(e,t,n){return v.a.createElement(j.a,{content:e,title:t.word,placement:"right"},N(e))}},{title:"例句",key:"sampleSentence",dataIndex:"sampleSentence",render:function(e,t,n){return v.a.createElement(j.a,{content:B(e),title:"详情"},v.a.createElement("span",{className:"stringtomore-collumn"},Object(T.b)(e)))}},{title:"例句发音",key:"sampleSentenceAudio",dataIndex:"sampleSentenceAudio",render:function(e,t,n){return v.a.createElement(j.a,{content:J(e),title:"详情",trigger:"click"},v.a.createElement("span",{className:"stringtomore-collumn"},Object(T.b)(e,8)))}},{title:"例句翻译",key:"sampleSentenceTranslation",dataIndex:"sampleSentenceTranslation",render:function(e,t,n){return v.a.createElement(j.a,{content:B(e),title:"详情"},v.a.createElement("span",{className:"stringtomore-collumn"},Object(T.b)(e)))}},{title:"操作",key:"action",width:"120px",render:function(e,t){return v.a.createElement("span",null,v.a.createElement(L.a,{to:"".concat(C,"/detail?").concat(t.simple_id)},"详情"),v.a.createElement(I.a,{type:"vertical"}),v.a.createElement(L.a,{to:"".concat(C,"/edit?").concat(t.simple_id)},"编辑"))}}],B=function(e){return v.a.createElement("div",null,e.split("\n").map(function(e,t){return v.a.createElement("div",{key:t},e)}))},M="https://jiguangdanci.easylesson.cn",N=function(e){return v.a.createElement("div",null,v.a.createElement("img",{className:"image-hover",src:M+e,alt:""}))},J=function(e){return v.a.createElement("div",null,v.a.createElement("audio",{controls:!0,autoPlay:!0,className:"audio",src:M+e}))},U=function(e){function t(){var e,n;l()(this,t);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=p()(this,(e=m()(t)).call.apply(e,[this].concat(o))),E()(b()(b()(n)),"state",{searchButtonLoading:!1,source:[],pagination:{},filterResult:{}}),E()(b()(b()(n)),"onPaginationSizeChange",function(e,t){var a=n.state,i=a.pagination;a.filterResult,i.pageSize=t,n.state.pagination=i,n.props.setValue({pagination:i}),n.updateTable()}),E()(b()(b()(n)),"onPaginationChange",function(e,t){var a=n.state,i=a.pagination;a.filterResult,i=r()({},i,{current:e,pageSize:t}),n.state.pagination=i,n.props.setValue({pagination:i}),n.updateTable()}),E()(b()(b()(n)),"filterResult",function(e){var t=n.state,a=t.pagination,i=t.filterResult;a.current=1,i=e,Object.keys(i).forEach(function(e){i[e]||(i[e]="")}),n.state.filterResult=i,n.props.setValue({pagination:a,filterResult:i}),n.state.pagination=a,n.updateTable()}),E()(b()(b()(n)),"updateTable",function(){var e=n.state,t=e.pagination,i=e.filterResult;if(n.Interceptor()){n.setState({searchButtonLoading:!0});var o=r()({pageNo:t.current,pageSize:t.pageSize},i);Object(z.a)("/api/english/simple",o).then(function(e){t.total=e.data.count;var i=(e.data.data||[]).map(function(e,n){return r()({id:(t.current-1)*t.pageSize+n+1},e)});n.setState({source:i,pagination:t}),a.a.success("查询成功")}).catch(function(e){a.a.warn(e.errMsg)}).finally(function(){n.setState({searchButtonLoading:!1})})}}),E()(b()(b()(n)),"Interceptor",function(){return!0}),E()(b()(b()(n)),"createItem",function(){n.props.history.push("/simple-english/create")}),n}return f()(t,e),s()(t,[{key:"componentDidMount",value:function(){var e={current:this.props.redux.pagination.current,pageSize:this.props.redux.pagination.pageSize,showSizeChanger:!0,onShowSizeChange:this.onPaginationSizeChange,onChange:this.onPaginationChange,showTotal:function(e,t){return"".concat(t[0],"-").concat(t[1]," of ").concat(e," items")}},t=this.props.redux.filterResult;this.state.pagination=e,this.state.filterResult=t,this.updateTable()}},{key:"render",value:function(){var e=this.state,t=e.searchButtonLoading,n=e.source,a=e.pagination,i=e.filterResult,r={filters:O,searchButtonLoading:t,values:i},o={columns:P,source:n,pagination:a};return v.a.createElement("div",{className:"simple-container"},v.a.createElement(k.a,{array:r,filterResult:this.filterResult,createItem:this.createItem}),v.a.createElement(R.a,{data:o}))}}]),t}(S.Component);t.default=Object(w.b)(function(e){return{redux:e.simpleWord}},function(e){return{setValue:function(t){e(Object(x.a)(t))}}})(U)},SJdm:function(e,t,n){var a=n("yzM6");"string"==typeof a&&(a=[[e.i,a,""]]);n("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},yzM6:function(e,t,n){(e.exports=n("aQ7W")(!1)).push([e.i,".table-collumn {\n  width: 60px;\n}\n.stringtomore-collumn {\n  cursor: pointer;\n}\n.image-hover {\n  width: 200px;\n  height: auto;\n  border-radius: 10px;\n}\n.simple-container .ant-table-pagination {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: flex-start;\n}\n.simple-container .ant-pagination-total-text {\n  float: left;\n}\n",""])}}]);
//# sourceMappingURL=5.4b09fa65e5af41702da3.js.map