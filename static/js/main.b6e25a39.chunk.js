(this["webpackJsonpreact-task"]=this["webpackJsonpreact-task"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),l=a.n(s),c=(a(13),a(1)),o=a(2),i=a(4),m=a(3),u=a(5),p=function(e){return r.a.createElement("div",{onClick:e.onClick,className:"task "+(e.isActive?"active":"")},r.a.createElement("span",{className:"taskName"},e.name),e.comments?r.a.createElement("div",{className:"counter"},e.comments.length):"",r.a.createElement("button",{className:"delete-btn",onClick:e.deleteCard},"Delete"),r.a.createElement("hr",null))},d=function(e){return r.a.createElement("div",null,r.a.createElement("hr",{className:"bottom-line",style:{width:"100%",height:"2px",backgroundColor:"#f8f8f8",border:"none"}}),r.a.createElement("div",{className:"profile-image "+e.color}),r.a.createElement("div",{className:"message"},e.message))},h=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={inputData:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"addComment",value:function(e){e.preventDefault();var t=this.props.currentTask;t?this.state.inputData?(localStorage.setItem(t,localStorage.getItem(t)?localStorage.getItem(t)+"<break>"+this.state.inputData:this.state.inputData),this.setState({currentComment:this.state.inputData,inputData:""}),this.props.updateState("comment")):alert("Enter the message please"):alert("Please select a task!")}},{key:"renderComments",value:function(){var e=this.props.currentTask;if(e){var t=localStorage.getItem(e)?localStorage.getItem(e).split("<break>"):"";if(t){var a="purple";return t.map((function(e){return a="purple"===a?"orange":"purple",r.a.createElement(d,{message:e,color:a,key:Math.random()})}))}}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"comments"},r.a.createElement("h1",null,this.props.currentTask?this.props.currentTask:""),r.a.createElement("div",{className:"comment-wrapper"},this.renderComments()),r.a.createElement("form",{className:"comment-subm",onSubmit:function(t){e.addComment(t)}},r.a.createElement("input",{type:"text",value:this.state.inputData,onChange:function(t){e.setState({inputData:t.target.value})}})))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={inputData:"",data:localStorage.getItem("tasks")?localStorage.getItem("tasks").split(","):"",activeItem:void 0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"updateState",value:function(e){this.setState({text:e})}},{key:"addCard",value:function(){var e=this.state,t=e.data,a=e.inputData;a?(localStorage.setItem("tasks",t?t+","+a:a),this.setState({data:localStorage.getItem("tasks").split(","),inputData:""})):alert("Enter the name of the task!")}},{key:"deleteCard",value:function(e){if(localStorage.removeItem(e),this.state.data.length>1){var t=this.state.data.filter((function(t){return t!==e}));this.setState({data:t}),localStorage.setItem("tasks",t)}else this.setState({data:""}),localStorage.removeItem("tasks");e===this.state.activeItem&&this.setState({activeItem:void 0})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{display:"contents"}},r.a.createElement("div",{className:"items-wrapper"},r.a.createElement("h1",null,"Items"),r.a.createElement("form",{style:{marginBottom:"10px"},onSubmit:function(t){e.addCard(),t.preventDefault()}},r.a.createElement("input",{type:"text",value:this.state.inputData,placeholder:"Type name here...",onChange:function(t){e.setState({inputData:t.target.value})}}),r.a.createElement("button",null,"Add new")),this.state.data?this.state.data.map((function(t){var a=localStorage.getItem(t)?localStorage.getItem(t).split("<break>"):null;return r.a.createElement(p,{name:t,comments:a,key:Math.random(),deleteCard:function(){e.deleteCard(t)},onClick:function(a){"delete-btn"!==a.target.classList[0]&&e.setState({activeItem:t})},isActive:e.state.activeItem===t})})):""),r.a.createElement(h,{currentTask:this.state.activeItem,updateState:function(t){e.updateState(t)}}))}}]),t}(r.a.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("p",{style:{fontSize:"22px"}},"Dairy app"),r.a.createElement("span",{style:{color:"#808080",fontSize:"18px"}},"Comment with no sense"))}}]),t}(r.a.Component),g=function(){return r.a.createElement("div",{style:{display:"flex",height:"100%",overflow:"hidden"}},r.a.createElement(f,null),r.a.createElement(v,null))};var k=function(){return r.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.b6e25a39.chunk.js.map