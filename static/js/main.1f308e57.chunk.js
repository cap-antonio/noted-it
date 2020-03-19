(this["webpackJsonptask-notes"]=this["webpackJsonptask-notes"]||[]).push([[0],{100:function(e,t,a){},176:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),o=a.n(c),i=(a(73),a(74),a(75),function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("div",{className:"navbar-brand"},"Noted it?"),r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"EN")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"#"},"RU"))))}),s=a(4),l=a.n(s),u=a(11),m=a(56),d=a(57),f=a(66),p=a(58),E=a(67),b=a(25),h=a(8),N=a(27),v=a.n(N),g="https://notes-task-aa80d.firebaseio.com";function O(){return function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"FETCHING_NOTES"}),e.prev=1,a=[],e.next=5,v.a.get("".concat(g,"/notes.json")).then((function(e){for(var t in e.data)a.unshift(Object(h.a)({},e.data[t],{id:t}))}));case 5:if(0!==a.length){e.next=7;break}return e.abrupt("return");case 7:t(k(a)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t(w(e.t0));case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()}function k(e){return{type:"FETCHING_OK",notes:e}}function w(e){return{type:"FETCHING_ERROR",error:e}}a(98);var y=function(){return r.a.createElement("div",{className:"loading loadingio-spinner-ellipsis-tlkcpiie8y"},r.a.createElement("div",{className:"ldio-g59qjuet6"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))},_=a(26),j=(a(99),function(e){var t=e.id,a=e.title,c=e.onDelete,o=Object(n.useState)("card border-primary mb-3"),i=Object(_.a)(o,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",{className:s},r.a.createElement("div",{className:"card-header"},r.a.createElement("p",{className:"card-text"},a),r.a.createElement("button",{className:"btn btn-primary btn-sm float-right",onClick:function(){return c(t)}},r.a.createElement("i",{className:"fas fa-trash-alt"})),r.a.createElement("button",{className:"btn btn-primary btn-sm float-left"},r.a.createElement("i",{className:"fas fa-pen"}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("i",{className:"green-icon fas fa-square f0c8",onClick:function(){return l("card text-white bg-success mb-3")}}),r.a.createElement("i",{className:"red-icon fas fa-square f0c8",onClick:function(){return l("card text-white bg-primary mb-3")}}),r.a.createElement("i",{className:"grey-icon fas fa-square f0c8",onClick:function(){return l("card text-white bg-secondary mb-3")}}),r.a.createElement("i",{className:"orange-icon fas fa-square f0c8",onClick:function(){return l("card text-white bg-danger mb-3")}}),r.a.createElement("i",{className:"yellow-icon fas fa-square f0c8",onClick:function(){return l("card text-white bg-warning mb-3")}}),r.a.createElement("i",{className:"blue-icon fas fa-square f0c8",onClick:function(){return l("card text-white bg-info mb-3")}}),r.a.createElement("i",{className:"black-icon fas fa-square f0c8",onClick:function(){return l("card text-white bg-dark mb-3")}}),r.a.createElement("i",{className:"basic-icon far fa-square",onClick:function(){return l("card border-primary mb-3")}})))}),x=a(60),T=a.n(x),C=(a(100),function(e){var t=e.editingModeFinish,a=e.addNote,c=Object(n.useState)({title:""}),o=Object(_.a)(c,2),i=o[0],s=o[1],l=function(e){e.preventDefault();var n={title:i.title};0===i.title.trim().length?(s({title:""}),t()):(a(n),t(),s({title:""}))};return r.a.createElement("form",{className:"card border-primary mb-3",onSubmit:l},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-text"},r.a.createElement("textarea",{placeholder:"Note it!",type:"text",autoFocus:!0,onChange:function(e){s({title:e.target.value})},value:i.title})),r.a.createElement("button",{type:"button",className:"btn btn-primary btn-sm float-right",onClick:l},r.a.createElement("i",{className:"fas fa-check-circle"}))))}),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(c)))).componentDidMount=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.props.fetchNotes();case 1:case"end":return e.stop()}}),e)}))),a.adder=r.a.createElement("button",{className:"btn btn-primary float-left",onClick:a.props.editingModeStart},r.a.createElement("i",{className:"fas fa-plus-circle"})),a}return Object(E.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:T.a.notescontainer},r.a.createElement("div",{className:"col-sm-3 mb-3"},this.props.editMode?r.a.createElement(C,{editingModeFinish:this.props.editingModeFinish,addNote:this.props.addNote,notes:this.props.notes,fetchNotes:this.props.fetchNotes}):this.adder),0===this.props.notes.length?null:this.props.loading?r.a.createElement(y,null):this.props.notes.map((function(t){return r.a.createElement("div",{className:"col-sm-3 mb-3",key:Math.random()},r.a.createElement(j,{key:t.id,id:t.id,title:t.title,onDelete:e.props.deleteNote}))})))}}]),t}(r.a.Component),M=Object(b.b)((function(e){return{notes:e.note.notes,loading:e.note.loading,editMode:e.note.editMode}}),(function(e){return{fetchNotes:function(){return e(O())},deleteNote:function(t){return e(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,v.a.delete("".concat(g,"/notes/").concat(e,".json"));case 3:n=t.sent,console.log(n),a(O()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a(w(t.t0));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},addNote:function(t){return e(function(e){return function(){var t=Object(u.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,a({type:"ADD_NOTE",noteData:void 0}),t.next=5,v.a.post("".concat(g,"/notes.json"),e);case 5:n=t.sent,console.log(n),a(O()),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),a(w(t.t0));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()}(t))},editingModeStart:function(){return e({type:"EDIT_MODE_START"})},editingModeFinish:function(){return e({type:"EDIT_MODE_FINISH"})}}}))(D),I=function(){return r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(7),F={notes:[],loading:!1,error:null,editMode:!1,newNote:[]};var R=a(178),q=Object(S.c)({note:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHING_NOTES":return Object(h.a)({},e,{loading:!0});case"FETCHING_OK":return Object(h.a)({},e,{loading:!1,notes:t.notes});case"FETCHING_ERROR":return{loading:!1,error:t.error};case"DELETE_NOTE":return{loading:!1};case"ADD_NOTE":return Object(h.a)({},e,{newNote:{id:t.id,title:t.title}});case"EDIT_MODE_START":return Object(h.a)({},e,{editMode:!0});case"EDIT_MODE_FINISH":return Object(h.a)({},e,{editMode:!1});default:return e}},form:R.a}),H=a(65),G=a(63),A=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):S.d)(Object(S.a)(G.a)),L=Object(S.e)(q,A),X=r.a.createElement(b.a,{store:L},r.a.createElement(H.a,null,r.a.createElement(I,null)));o.a.render(X,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},60:function(e,t,a){e.exports={notescontainer:"NotesContainer_notescontainer__34WcL"}},68:function(e,t,a){e.exports=a(176)},74:function(e,t,a){},75:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.1f308e57.chunk.js.map