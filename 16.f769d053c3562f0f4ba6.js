(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0cxM":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t){return{type:"SET_COLLECTION_WORD",value:t}}},"2taP":function(t,e,n){"use strict";var a=n("HJ2O"),o=n.n(a),i=n("A4dA"),r=n.n(i),s=n("f0Pt"),l=n.n(s),c=n("48TQ");n.d(e,"a",function(){return p}),n.d(e,"b",function(){return h});var u=n("fus+"),d=function(t){var e,n=t.method,a=t.url,i=t.data,s=t.isFullURL;return new Promise((e=r()(o.a.mark(function t(e,r){var d,p;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:log(1,s),a=s?a:"http://39.108.194.159:8080"+a,d=Object(c.a)("token"),p={Authorization:d},l()({method:n,url:a,data:i,timeout:7e3,headers:p}).then(function(t){if(200===t.status&&t.data&&0===t.data.returnCode)if(t.data.encript){var n=t.data.data,a=u.AES.decrypt(n,"lian");n=JSON.parse(a.toString(u.enc.Utf8)),t.data.data=n,e(t.data)}else e(t.data);else if(200===t.status&&t.data&&0!==t.data.returnCode){var o={errCode:t.data.returnCode,errMsg:t.data.returnMsg};r(o)}else r({errCode:-1,errMsg:"请求失败"})}).catch(function(t){log(t),r({errCode:-1,errMsg:"请求失败"})});case 5:case"end":return t.stop()}},t,this)})),function(t,n){return e.apply(this,arguments)}))},p=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],a=Object.keys(e);return t=0===a.length?t:t+"?"+a.map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&"),d({url:t,data:{},method:"get",isFullURL:n})},h=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return d({url:t,data:e,method:"post"})}},"6qYX":function(t,e,n){var a=n("bFvV");"string"==typeof a&&(a=[[t.i,a,""]]);n("7B2p")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(t.exports=a.locals)},bFvV:function(t,e,n){(t.exports=n("aQ7W")(!1)).push([t.i,".train-keke-container {\n  margin-top: 5px;\n}\n.train-keke-container .tip {\n  width: 50px;\n  height: 50px;\n  border-radius: 25px;\n  background: #00a8ff;\n  text-align: center;\n  color: white;\n  line-height: 50px;\n  float: right;\n  margin-right: 20px;\n}\n.train-keke-container .am-navbar-title {\n  color: #fff;\n}\n.train-keke-container .pagination {\n  margin: 20px;\n}\n.train-keke-container .content {\n  margin-top: 10px;\n}\n.train-keke-container .content .image {\n  position: relative;\n  font-size: 22px;\n}\n.train-keke-container .content .image img {\n  width: 100%;\n  height: auto;\n  border-radius: 5px;\n}\n.train-keke-container .content .image .sound-image {\n  width: 30px;\n  position: absolute;\n  right: 40px;\n  bottom: 25px;\n}\n.train-keke-container .content .image .word {\n  position: absolute;\n  left: 20px;\n  bottom: 55px;\n  padding: 0 5px;\n  color: #fff;\n}\n.train-keke-container .content .image .phonetic {\n  font-size: 18px;\n  position: absolute;\n  left: 20px;\n  bottom: 25px;\n  color: #fff;\n  padding: 0 3px;\n  line-height: 25px;\n  background: #fff;\n}\n.train-keke-container .content .image img {\n  color: #fff;\n}\n.train-keke-container .content .cell {\n  margin: 0 20px;\n  line-height: 40px;\n  border-bottom: 1px solid #ddd;\n}\n.train-keke-container .content .spell-title {\n  line-height: 40px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  border-bottom: 1px solid #ddd;\n}\n.train-keke-container .content .spell-title img {\n  display: inline-block;\n  width: 22px;\n}\n.train-keke-container .content .spell-title .spell {\n  font-size: 26px;\n  font-weight: 500;\n  color: #1f8ffb;\n  background: transparent;\n  border: 1px solid #1f8ffb;\n  height: 35px !important;\n  min-height: 30px;\n  border-radius: 5px;\n}\n.train-keke-container .content .spell-control {\n  margin: 20px 10px;\n}\n.train-keke-container .content .spell-control .button {\n  width: 20%;\n  display: inline-block;\n  font-size: 22px;\n  margin-bottom: 5px;\n}\n",""])},vfu8:function(t,e,n){"use strict";n.r(e),n("JrXl");var a=n("amw4"),o=n.n(a),i=(n("zAxZ"),n("m0Fu")),r=n.n(i),s=(n("z6Jr"),n("ab6J")),l=n.n(s),c=(n("IWID"),n("0BXe")),u=n.n(c),d=(n("PAZs"),n("yNfe")),p=n.n(d),h=(n("KW2r"),n("q391")),f=n.n(h),g=n("b4l6"),m=n.n(g),k=n("0wiU"),b=n.n(k),x=n("SnMR"),v=n.n(x),w=n("GZrC"),_=n.n(w),y=n("nH91"),C=n.n(y),E=n("ut94"),S=n.n(E),N=n("ee8y"),A=n.n(N),L=(n("uqRu"),n("iQxK")),T=n.n(L),I=n("rdAL"),M=n.n(I),O=n("2taP"),P=(n("6qYX"),n("0cxM")),j=n("uuwp"),B=(T.a.Item.Brief,"https://jiguangdanci.easylesson.cn"),z=0,J={prevText:"Prev",nextText:"Next"},R={0:"#e84118",1:"#00a8ff",2:"#fbc531",3:"#4cd137",4:"#487eb0",5:"#9c88ff"},U="abcdefghijklmnopqrstuvwxyz".split(""),q=function(t){function e(){var t,n;m()(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=v()(this,(t=_()(e)).call.apply(t,[this].concat(o))),A()(S()(S()(n)),"state",{word:n.props.redux.list[0],sentence_sound:{},phonetic_sound:{},collection_words:n.props.redux.list,current:1,spelling:"",spell_button:[],selected_letters:[],isTip:!1}),A()(S()(S()(n)),"init",function(){var t,e,a=(t=n.props.location.search,e={},t.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,n,a){e[n]=a}),e).collection_id;log(a),Object(O.a)("".concat("/api/english/regular","/").concat(a)).then(function(t){log(t);var e=new Audio(B+"/"+t.data[0].sample_sentence_audio),a=new Audio(B+"/"+t.data[0].pronunciation_url),o=new Audio("http://img.tukuppt.com/origin_music/00/85/00/mp3-5b9c6af66c768107.mp3");n.setState({sentence_sound:e,phonetic_sound:a,button_sound:o,word:t.data[0]}),n.getButtonItems(t.data[0].word.word)}).catch(function(t){log(t)}),log(11,n.props.redux.list),(n.props.redux.list||[]).map(function(t,e){t.id==a&&(log(11,t),n.setState({current:e+1}))})}),A()(S()(S()(n)),"gotoLast",function(){n.props.history.go(-1)}),A()(S()(S()(n)),"sentenceSound",function(){n.state.sentence_sound.playbackRate=1.5,n.state.sentence_sound.play()}),A()(S()(S()(n)),"phoneticSound",function(){n.state.phonetic_sound.play()}),A()(S()(S()(n)),"handlePaginationChange",function(t){log(111,t),t>=n.props.redux.list.length&&f.a.info("已达终点",2);var e=new Audio(n.props.redux.list[t-1].pronunciation_url);e.addEventListener("ended",function(){1<=z?z=0:(z++,this.play())},!1),e.play();var a=new Audio("http://img.tukuppt.com/origin_music/00/85/00/mp3-5b9c6af66c768107.mp3");n.setState({current:t,phonetic_sound:e,button_sound:a,selected_letters:[],spelling:"",word:n.props.redux.list[t-1]}),n.getButtonItems(n.props.redux.list[t-1].word),log(t)}),A()(S()(S()(n)),"getButtonItems",function(t){log(1212,t);var e=t.split(""),a=Math.floor(Math.random()*(11+t.length)),o=a+15-t.length,i=U.slice(a,o),r=i.concat(e).sort(function(){return.5-Math.random()});n.setState({spell_button:r}),log(a,o,t.length,i,r)}),A()(S()(S()(n)),"handleClickButton",function(t){var e=n.state,a=e.selected_letters,o=e.spell_button,i=e.spelling,r=e.current;e.button_sound,a.push(t),i+=o[t],log(n.state.word),n.state.button_sound.play(),n.setState({selected_letters:a,spelling:i}),i===n.state.word.word&&f.a.info("拼写成功",1,function(){n.handlePaginationChange(r+1)})}),A()(S()(S()(n)),"handleSpell",function(t){var e=t;n.setState({spelling:e}),e===n.state.word.word&&f.a.info("拼写成功",1,function(){n.handlePaginationChange(n.state.current+1)})}),A()(S()(S()(n)),"deleteLetter",function(){n.state.button_sound.play();var t=n.state,e=t.selected_letters,a=(t.spell_button,t.spelling);e.pop(),a=a.slice(0,-1),n.setState({selected_letters:e,spelling:a})}),A()(S()(S()(n)),"showTip",function(){var t=new Audio(n.state.word.pronunciation_url);t.addEventListener("ended",function(){1<=z?z=0:(z++,this.play())},!1),t.play(),n.spellCell.focus(),n.setState({isTip:!0}),setTimeout(function(){n.setState({isTip:!1}),n.spellCell.focus()},3e3)}),n}return C()(e,t),b()(e,[{key:"componentDidMount",value:function(){this.spellCell.focus(),this.getButtonItems(this.state.word.word);var t=new Audio("http://img.tukuppt.com/origin_music/00/85/00/mp3-5b9c6af66c768107.mp3"),e=new Audio(this.state.word.pronunciation_url);e.addEventListener("ended",function(){1<=z?z=0:(z++,this.play())},!1),e.play(),this.setState({button_sound:t,phonetic_sound:e})}},{key:"render",value:function(){var t=this,e=M.a.createElement(u.a,{style:{backgroundColor:R[this.state.current%5],color:"#fff"},mode:"light",onLeftClick:this.gotoLast,leftContent:M.a.createElement(p.a,{type:"left"}),rightContent:[M.a.createElement(p.a,{key:"1",type:"ellipsis"})]},"拼写单词"),n=M.a.createElement("div",{className:"pagination"},M.a.createElement(l.a,{total:(this.props.redux.list||[]).length,current:this.state.current,locale:J,onChange:this.handlePaginationChange}));log(111,this.state.spell_button);var a=M.a.createElement("div",{className:"content"},M.a.createElement("div",{className:"image"},M.a.createElement("img",{src:this.state.word.profile_picture_url,alt:""}),M.a.createElement("div",{className:"word",style:{backgroundColor:R[this.state.current%5],display:this.state.isTip?"block":"none"}},this.state.word.word),M.a.createElement("div",{className:"phonetic",style:{backgroundColor:R[this.state.current%5]}},this.state.word.phonetic_symbol),M.a.createElement("img",{style:{backgroundColor:R[this.state.current%5]},className:"sound-image",src:"/images/sound.png",alt:"",onClick:this.phoneticSound})),M.a.createElement("div",{className:"cell"},this.state.word.definition),M.a.createElement("div",{className:"spell-title"},M.a.createElement("span",null,"拼写"),M.a.createElement(r.a,{className:"spell",ref:function(e){t.spellCell=e},value:this.state.spelling,onChange:this.handleSpell}),M.a.createElement("div",null,M.a.createElement("img",{src:"/images/delete.png",alt:"",onClick:this.deleteLetter}))),M.a.createElement("div",{className:"spell-control"},this.state.spell_button.map(function(e,n){return M.a.createElement(o.a,{className:"button",disabled:t.state.selected_letters.includes(n),key:JSON.stringify(e)+n,onClick:function(){return t.handleClickButton(n)}},e)}))),i=M.a.createElement("div",{onClick:this.showTip,className:"tip"},"提示");return M.a.createElement("div",{className:"train-keke-container"},e,a,n,i)}}]),e}(I.Component);e.default=Object(j.b)(function(t){return{redux:t.teacherQuestion}},function(t){return{setValue:function(e){t(Object(P.a)(e))}}})(q)}}]);
//# sourceMappingURL=16.f769d053c3562f0f4ba6.js.map