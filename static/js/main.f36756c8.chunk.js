(this.webpackJsonpreact_cms1=this.webpackJsonpreact_cms1||[]).push([[0],{33:function(e,t,a){e.exports=a(66)},38:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),s=a.n(c),i=(a(38),a(1)),l=a(2),o=a(4),m=a(3),u=a(11),d=a(5),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"div_navigate_index"},r.a.createElement("div",{id:"div_head",className:"cover"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("a",{href:"./",className:"home_link"},r.a.createElement("p",null,r.a.createElement("i",{className:"fas fa-home"})))),r.a.createElement("div",{className:"col-sm-8"})))))}}]),a}(r.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer_box mt5",id:"id_foot"},r.a.createElement("p",{className:"p_foot_str"},"About"))}}]),a}(r.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"About"),r.a.createElement("h2",null,"about, 123"))}}]),a}(r.a.Component),f=a(14),_=a(12),b=a.n(_),g=a(31),E=a.n(g),y={formatDate:function(e,t){if(t||(t="YYYY-MM-DD hh:mm:ss.SSS"),(t=(t=(t=(t=(t=(t=t.replace(/YYYY/g,e.getFullYear())).replace(/MM/g,("0"+(e.getMonth()+1)).slice(-2))).replace(/DD/g,("0"+e.getDate()).slice(-2))).replace(/hh/g,("0"+e.getHours()).slice(-2))).replace(/mm/g,("0"+e.getMinutes()).slice(-2))).replace(/ss/g,("0"+e.getSeconds()).slice(-2))).match(/S/g))for(var a=("00"+e.getMilliseconds()).slice(-3),n=t.match(/S/g).length,r=0;r<n;r++)t=t.replace(/S/,a.substring(r,r+1));return t},get_item:function(e,t){var a=null;return e.forEach((function(e){e.id===t&&(a=e)})),a},get_string_rigth:function(e,t){var a=(e="0000000000"+e).length,n=a-t;return e.substring(n,a)},convert_items:function(e){var t=[],a=this;return e.forEach((function(e){var n=new Date(e.created_at);n=a.formatDate(n,"YYYY-MM-DD hh:mm"),e.created_at=n,t.push(e)})),t},get_reverse_items:function(e){var t=[],a=this;return e.forEach((function(e){var n=new Date(e.created_at);n=a.formatDate(n,"YYYY-MM-DD hh:mm"),e.created_at=n,t.unshift(e)})),t}},j=function(e,t){var a=null;return e.forEach((function(e){e.show_id===String(t)&&(a=e)})),a},N=function(e,t){var a=null;return e.forEach((function(e){e.save_id===String(t)&&(a=e)})),a},k=function(e,t){var a=[];return e.forEach((function(e){e.category.save_id===String(t)&&a.push(e)})),a},w=function(e,t){var a=0,n=e.length%t;return a=e.length/t,a=parseInt(a),n>0&&(a+=1),a},O=function(e,t,a){var n=[],r=(t-1)*a,c=t*a;return e.forEach((function(e,t){t>=r&&t<c&&n.push(e)})),n},D=function(e,t){var a=e;return t.forEach((function(e){a.push(e)})),a},C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"dispCategory",value:function(e){if(null!=e.category)return r.a.createElement("span",{className:"folder_icon_wrap mr-2"},r.a.createElement("i",{className:"fas fa-folder"})," ",e.category.name)}},{key:"render",value:function(){return r.a.createElement("div",{className:"post_items_wrap"},r.a.createElement("div",{className:"div_news_rows"},r.a.createElement(u.b,{to:"/show/".concat(this.props.obj.show_id)},r.a.createElement("h3",{className:"ml-10"}," ",this.props.obj.title))),r.a.createElement("div",null,r.a.createElement("ul",{className:"ul_time_box"},r.a.createElement("li",null,r.a.createElement("p",{className:"mb-0"},r.a.createElement("span",{className:"mr-2 time_icon_wrap"},r.a.createElement("i",{className:"far fa-calendar"})),this.props.obj.created_at," , ID : ",this.props.obj.id),this.dispCategory(this.props.obj)))),r.a.createElement("hr",{className:"hr_ex1"}))}}]),a}(n.Component),Y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement(u.b,{to:"/pages/".concat(this.props.obj.save_id),target:"_blank",className:"btn btn-outline-dark ml-2 mb-2"},this.props.obj.title))}}]),a}(n.Component),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"top_content1_wrap"},r.a.createElement("div",{className:"row conte mt-2",id:"id_row_service"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h2",{className:"h4_td_title mt-2"},"Topic"),r.a.createElement("hr",{className:"hr_ex1"}))),r.a.createElement("div",{className:"row conte"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("img",{className:"img_kao mt-2 mb-2",src:"https://raw.githubusercontent.com/kuc-arc-f/screen-img/master/web/pc1.png"})),r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h3",null,"\u30b5\u30a4\u30c8\u306e\u7d39\u4ecb"),r.a.createElement("p",null,"\u7d39\u4ecb\u306e\u6587\u7ae0\u3001\uff11\uff12\uff13"))))}}]),a}(r.a.Component),S=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:"",pages_display:0,items_all:[],page_max:1,page_number:1,pagenate_display:0},n.page_one_max=20,n.handleClickCategory=n.handleClickCategory.bind(Object(f.a)(n)),n.handleClickMenu=n.handleClickMenu.bind(Object(f.a)(n)),n.handleClickPagenate=n.handleClickPagenate.bind(Object(f.a)(n)),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=y.formatDate(new Date,"YYYY-MM-DD_hhmmss");b.a.get("./cms.json?"+t).then((function(t){var a=t.data;a.items=y.get_reverse_items(a.items),e.setState({data:a}),null!=a.file_version?(null!=e.state.data.page_items&&e.state.data.page_items.length>0&&e.setState({pages_display:1}),e.setState({items_all:e.state.data.items})):alert("Error, file version can not import, version 2 over require");var n=w(e.state.data.items,e.page_one_max);e.setState({page_max:n});var r=O(e.state.data.items,e.state.page_number,e.page_one_max);a.items=r,e.setState({data:a}),n>1&&e.setState({pagenate_display:1}),console.log(e.state.pagenate_display)})).catch((function(e){console.log(e)}))}},{key:"handleClickCategory",value:function(e){var t=k(this.state.items_all,e),a=this.state.data;a.items=t,this.setState({data:a})}},{key:"handleClickMenu",value:function(){E()(".btn_hidden_ara_wrap").css("display","inherit")}},{key:"categoryRow",value:function(){if(this.state.data.category_items instanceof Array){var e=this;return this.state.data.category_items.map((function(t,a){return r.a.createElement("span",{key:a},r.a.createElement("button",{className:"btn btn-outline-dark ml-2 mb-2",onClick:e.handleClickCategory.bind(this,t.save_id)},t.name))}))}}},{key:"categoryDisp",value:function(){return r.a.createElement("div",{className:"category_wrap"},r.a.createElement("div",{className:"row conte mt-2 mb-4"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h2",{className:"h4_td_title mt-2"},"Category"),r.a.createElement("div",{className:"category_btn_wrap mb-0"},this.categoryRow()))))}},{key:"pageRow",value:function(){return this.state.data.page_items.map((function(e,t){return r.a.createElement(Y,{obj:e,key:t})}))}},{key:"pageDisp",value:function(){if(this.state.data.page_items instanceof Array&&1===this.state.pages_display)return r.a.createElement("div",{className:"pages_wrap"},r.a.createElement("div",{className:"row conte mt-2 mb-2"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("h2",{className:"h4_td_title mt-2"},"Pages"),r.a.createElement("div",{className:"page_btn_wrap mb-0"},this.pageRow()))))}},{key:"tabRow",value:function(){if(this.state.data.items instanceof Array)return this.state.data.items.map((function(e,t){return r.a.createElement(C,{obj:e,key:t})}))}},{key:"handleClickPagenate",value:function(){var e=this.state.page_number+1;this.setState({page_number:e});var t=O(this.state.items_all,e,this.page_one_max),a=D(this.state.data.items,t),n=this.state.data;n.items=a,this.setState({data:n})}},{key:"dispPagenate",value:function(){if(1===this.state.pagenate_display)return r.a.createElement("div",{className:"paginate_wrap"},r.a.createElement("button",{onClick:this.handleClickPagenate,className:"btn btn-lg btn-outline-primary"},"\u6b21\u30da\u30fc\u30b8\u3092\u8aad\u3080"))}},{key:"render",value:function(){return r.a.createElement("div",{className:"body_main_wrap"},r.a.createElement("div",{id:"div_img_main2",className:"cover",valign:"bottom"},r.a.createElement("div",{id:"div_img_layer"},r.a.createElement("h1",null,"\u3007\u3007 Blog",r.a.createElement("br",null)))),r.a.createElement("div",{className:"container"},r.a.createElement(M,null),r.a.createElement("div",{className:"btn_menu_area_wrap"},r.a.createElement("div",{className:"row conte mt-2 mb-2"},r.a.createElement("a",{className:"ml-4 mt-2 mb-2 menu_display_btn",onClick:this.handleClickMenu},r.a.createElement("i",{className:"fas fa-bars"})))),r.a.createElement("div",{className:"btn_hidden_ara_wrap"},this.pageDisp(),this.categoryDisp()),r.a.createElement("div",{className:"body_wrap"},r.a.createElement("div",{id:"post_items_box",className:"row conte mt-2 mb-4"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{id:"div_news"},r.a.createElement("h2",{className:"h4_td_title mt-2 mb-2"},"New Post")),this.tabRow(),this.dispPagenate())))))}}]),a}(r.a.Component),x=a(16),P=a.n(x),R=(a(61),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:""},n.id="",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.id=this.props.match.params.id,this.get_item(this.id)}},{key:"get_item",value:function(e){var t=this,a=y.formatDate(new Date,"YYYY-MM-DD_hhmmss");b.a.get("./cms.json?"+a).then((function(a){var n=a.data,r=y.convert_items(n.items),c=j(r,String(e));c.content=P()(c.content),t.setState({data:c})}))}},{key:"get_content",value:function(){return console.log("#-get_content"),!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(u.b,{to:"/",className:"btn btn-outline-primary mt-2"},"Back"),r.a.createElement("hr",{className:"mt-2 mb-2"}),r.a.createElement("div",{className:"show_head_wrap"},r.a.createElement("i",{className:"fas fa-home"})," > ",this.state.data.title),r.a.createElement("hr",null),r.a.createElement("h1",null,this.state.data.title),"date : ",this.state.data.created_at," ",r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{id:"post_item",dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),a}(r.a.Component)),A=(a(62),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:""},n.id="",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.id=this.props.match.params.id,console.log(this.id),this.get_item(this.id)}},{key:"get_item",value:function(e){var t=this,a=y.formatDate(new Date,"YYYY-MM-DD_hhmmss");b.a.get("./cms.json?"+a).then((function(a){var n=a.data,r=y.convert_items(n.page_items),c=N(r,String(e));console.log(c),c.content=P()(c.content),t.setState({data:c})}))}},{key:"get_content",value:function(){return console.log("#-get_content"),!1}},{key:"render",value:function(){return r.a.createElement("div",{className:"container mt-2"},r.a.createElement("div",{className:"page_head_wrap mt-2"},r.a.createElement("i",{className:"fas fa-home"})," > ",this.state.data.title),r.a.createElement("hr",null),r.a.createElement("h1",null,this.state.data.title),"date : ",this.state.data.created_at," ",r.a.createElement("br",null),"ID : ",this.state.data.id," ",r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("div",{id:"post_item",dangerouslySetInnerHTML:{__html:this.state.data.content}}))}}]),a}(r.a.Component)),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("p",null,this.props.obj.id," ,",this.props.obj.title)}}]),a}(n.Component),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=y.formatDate(new Date,"YYYY-MM-DD_hhmmss");b.a.get("/cms.json?"+t).then((function(t){e.setState({data:t.data}),console.log(e.state.data.items)})).catch((function(e){console.log(e)}))}},{key:"tabRow",value:function(){if(this.state.data.items instanceof Array)return this.state.data.items.map((function(e,t){return r.a.createElement(I,{obj:e,key:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"test"),r.a.createElement("h2",null,"welcome, test2"),r.a.createElement("hr",null),r.a.createElement("div",null,this.tabRow()))}}]),a}(r.a.Component),H=(a(63),a(64),a(65),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,null,r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(d.a,{exact:!0,path:"/",component:S}),r.a.createElement(d.a,{path:"/show/:id",component:R}),r.a.createElement(d.a,{path:"/pages/:id",component:A}),r.a.createElement(d.a,{path:"/about",component:v}),r.a.createElement(d.a,{path:"/test",component:B}),r.a.createElement(p,null))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.f36756c8.chunk.js.map