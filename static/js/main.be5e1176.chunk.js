(this["webpackJsonptask-notes"]=this["webpackJsonptask-notes"]||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){e.exports={notescontainer:"NotesContainer_notescontainer__34WcL"}},106:function(e,t,n){},182:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),i=(n(79),n(80),n(81),function(){return r.a.createElement("nav",{className:"navbar navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Noted it?"),r.a.createElement("ul",{className:"navbar-nav mr-auto p-2"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"About"))),r.a.createElement("button",{className:" btn btn-primary my-2 my-sm-0",type:"submit"},"EN"),r.a.createElement("button",{className:" btn btn-primary my-2 my-sm-0",type:"submit"},"RU"))}),s=n(3),l=n.n(s),u=n(9),d=n(57),f=n(58),m=n(71),p=n(59),b=n(72),E=n(60),h=n(27),v=n(10),N=n(15),g=n.n(N),O="https://notes-task-aa80d.firebaseio.com";function w(){return function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(y()),e.prev=1,n=[],e.next=5,g.a.get("".concat(O,"/notes.json")).then((function(e){for(var a in null===e.data&&t(k(n)),e.data)n.unshift(Object(v.a)({},e.data[a],{id:a}))}));case 5:if(0!==n.length){e.next=7;break}return e.abrupt("return");case 7:t(k(n)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(j(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}function y(){return{type:"FETCHING_NOTES"}}function k(e){return{type:"FETCHING_OK",notes:e}}function j(e){return{type:"FETCHING_ERROR",error:e}}n(103);var x=function(){return r.a.createElement("div",{className:"loading loadingio-spinner-ellipsis-tlkcpiie8y"},r.a.createElement("div",{className:"ldio-g59qjuet6"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},_=n(14),C=(n(104),function(e){var t=e.id,n=e.note,c=e.onDelete,o=e.editingModeFinish,i=e.color,s=e.putEditNote,l=e.setNewColor,u=Object(a.useState)("d-none card-text"),d=Object(_.a)(u,2),f=d[0],m=d[1],p=Object(a.useState)({color:i}),b=Object(_.a)(p,2),E=b[0],h=b[1],v=Object(a.useState)({title:""}),N=Object(_.a)(v,2),g=N[0],O=N[1],w=function(e,t,n){var a={title:n,color:t};h(t),l(e,a)};return Object(a.useEffect)((function(){}),[]),r.a.createElement("div",{className:i},r.a.createElement("div",{className:"card-header"},r.a.createElement("textarea",{className:"card-text",onChange:function(e){O({title:e.target.value})},defaultValue:n,onBlur:function(e){e.preventDefault();var a={title:g.title,color:E.color};0!==g.title.length&&g.title!==n&&(""===g.title.length?c():(s(t,a),o()))}}),r.a.createElement("button",{className:"btn btn-primary disabled btn-sm float-right",onClick:function(){return c(t)}},r.a.createElement("i",{className:"fas fa-trash-alt"}))),r.a.createElement("div",null,"d-none card-text"===f?r.a.createElement("i",{className:"arrow fas fa-chevron-circle-down",onClick:function(){return m("d-flex justify-content-center card-text")}}):r.a.createElement("i",{className:"arrow fas fa-chevron-circle-up",onClick:function(){return m("d-none card-text")}}),r.a.createElement("div",{className:f},r.a.createElement("i",{className:"green-icon fas fa-square f0c8",onClick:function(){return w(t,"card text-white bg-success mb-3",n)}}),r.a.createElement("i",{className:"red-icon fas fa-square f0c8",onClick:function(){return w(t,"card text-white bg-primary mb-3",n)}}),r.a.createElement("i",{className:"grey-icon fas fa-square f0c8",onClick:function(){return w(t,"card text-white bg-secondary mb-3",n)}}),r.a.createElement("i",{className:"orange-icon fas fa-square f0c8",onClick:function(){return w(t,"card text-white bg-danger mb-3",n)}}),r.a.createElement("i",{className:"yellow-icon fas fa-square f0c8",onClick:function(){return w(t,"card text-white bg-warning mb-3",n)}}),r.a.createElement("i",{className:"blue-icon fas fa-square f0c8",onClick:function(){return w(t,"card text-white bg-info mb-3",n)}}),r.a.createElement("i",{className:"black-icon fas fa-square f0c8",onClick:function(){return w(t,"card text-white bg-dark mb-3",n)}}),r.a.createElement("i",{className:"basic-icon far fa-square",onClick:function(){return w(t,"card border-primary mb-3",n)}}))))}),M=(n(105),n(106),function(e){var t=e.editingModeFinish,n=e.addNote,c=Object(a.useState)({title:""}),o=Object(_.a)(c,2),i=o[0],s=o[1],l=function(e){e.preventDefault();var a={title:i.title,color:"card border-primary mb-3"};0===i.title.trim().length?(s({title:""}),t()):(n(a),t(),s({title:""}))};return r.a.createElement("form",{className:"card border-primary mb-3",onSubmit:l},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("textarea",{placeholder:"Note it!",type:"text",autoFocus:!0,onChange:function(e){s({title:e.target.value})},value:i.title})),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm float-right",onClick:l},0===i.title.trim().length?r.a.createElement("i",{className:"fas fa-times-circle"}):r.a.createElement("i",{className:"fas fa-check-circle"}))))});function T(){var e=Object(E.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  padding-top: 1rem;\n"]);return T=function(){return e},e}var D=n(62).a.div(T()),S=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.fetchNotes();case 1:case"end":return e.stop()}}),e)}))),n.adder=r.a.createElement("button",{className:"btn btn-primary float-left",onClick:n.props.editingModeStart},r.a.createElement("i",{className:"fas fa-plus-circle"})),n}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(D,null,r.a.createElement("div",{className:"col-sm-3 mb-3"},this.props.editMode?r.a.createElement(M,{editingModeFinish:this.props.editingModeFinish,addNote:this.props.addNote,notes:this.props.notes,fetchNotes:this.props.fetchNotes}):this.adder),0===this.props.notes.length?null:this.props.loading?r.a.createElement(x,null):this.props.notes.map((function(t){return r.a.createElement("div",{className:"col-sm-3 mb-3",key:Math.random()},r.a.createElement(C,{key:t.id,id:t.id,note:t.title,color:t.color,onDelete:e.props.deleteNote,editingModeFinish:e.props.editingModeFinish,addNote:e.props.addNote,putEditNote:e.props.putEditNote,setNewColor:e.props.setNewColor}))})))}}]),t}(r.a.Component),I=Object(h.b)((function(e){return{notes:e.note.notes,loading:e.note.loading,editMode:e.note.editMode}}),(function(e){return{fetchNotes:function(){return e(w())},deleteNote:function(t){return e(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.delete("".concat(O,"/notes/").concat(e,".json"));case 3:n(w()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n(j(t.t0));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(t))},addNote:function(t){return e(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.a.post("".concat(O,"/notes.json"),e);case 3:n(w()),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),n(j(t.t0));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editingModeStart:function(){return e({type:"EDIT_MODE_START"})},editingModeFinish:function(){return e({type:"EDIT_MODE_FINISH"})},putEditNote:function(t,n){return e(function(e,t){return function(){var n=Object(u.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a(y()),n.next=4,g.a.put("".concat(O,"/notes/").concat(e,".json"),t);case 4:a(w()),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),a(j(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},setNewColor:function(t,n){return e(function(e,t){return function(){var n=Object(u.a)(l.a.mark((function n(a){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log(e,t),a(y()),n.next=5,g.a.put("".concat(O,"/notes/").concat(e,".json"),t);case 5:a(w()),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),a(j(n.t0));case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(S),F=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=n(8),q={notes:[],loading:!1,error:null,editMode:!1,newNote:[]};var H=n(184),G=Object(R.c)({note:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_NOTES":return Object(v.a)({},e,{loading:!0});case"FETCHING_OK":return Object(v.a)({},e,{loading:!1,notes:t.notes});case"FETCHING_ERROR":return{loading:!1,error:t.error};case"DELETE_NOTE":return{loading:!1};case"ADD_NOTE":return Object(v.a)({},e,{newNote:{id:t.id,title:t.title}});case"EDIT_MODE_START":return Object(v.a)({},e,{editMode:!0});case"EDIT_MODE_FINISH":return Object(v.a)({},e,{editMode:!1});default:return e}},form:H.a}),A=n(70),L=n(68),X=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):R.d)(Object(R.a)(L.a)),B=Object(R.e)(G,X),U=r.a.createElement(h.a,{store:B},r.a.createElement(A.a,null,r.a.createElement(F,null)));o.a.render(U,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,n){e.exports=n(182)},80:function(e,t,n){},81:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.be5e1176.chunk.js.map