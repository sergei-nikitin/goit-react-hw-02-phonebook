(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={input:"Filter_input__3K0YO"}},2:function(t,e,n){t.exports={title:"Form_title__IsA3I",form:"Form_form__cvyS-",label:"Form_label__1eFym",input:"Form_input__28m9x",addBtn:"Form_addBtn__2C0ox"}},28:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),r=n.n(c),i=n(11),s=n.n(i),o=n(14),l=n(6),u=n(7),m=n(9),d=n(8),h=n(12),b=n(2),j=n.n(b),f=n(3),p=n.n(f),O=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputNameId=p.a.generate(),t.inputNumberId=p.a.generate(),t.handleCenge=function(e){var n=e.target,a=n.value,c=n.name;t.setState(Object(h.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state.name,t.state.number),t.setState({name:""}),t.setState({number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:j.a.title,children:"Phonebook"}),Object(a.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{className:j.a.label,htmlFor:this.inputNameId,name:"name",children:"Name"}),Object(a.jsx)("input",{className:j.a.input,id:this.inputNameId,type:"text",value:this.state.name,name:"name",placeholder:"Enter Name",onChange:this.handleCenge}),Object(a.jsx)("label",{className:j.a.label,htmlFor:this.inputNumberId,name:"number",children:"Number"}),Object(a.jsx)("input",{className:j.a.input,id:this.inputNumberId,type:"phone",value:this.state.number,name:"number",placeholder:"Enter Number",onChange:this.handleCenge}),Object(a.jsx)("button",{className:j.a.addBtn,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),v=n(4),x=n.n(v),C=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:x.a.title,children:"Contacts"}),Object(a.jsx)("ul",{className:x.a.list,children:e.map((function(t){return Object(a.jsxs)("li",{className:x.a.item,children:[t.name,": ",t.number,Object(a.jsx)("button",{className:x.a.deleteBtn,type:"button",onClick:function(){return n(t.name)},children:"Delete"})]},t.name)}))})]})},_=n(13),g=n.n(_),N=function(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:g.a.input,placeholder:"Filter",name:"filter",type:"text",value:e,onChange:function(t){return n(t.target.value)}})})},F=function(t){Object(m.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.changefilter=function(e){t.setState({filter:e})},t.getFilterContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.includContact=function(e){t.state.contacts.forEach((function(t){if(t.name===e)return window.alert("".concat(e," is already in contacts."))}))},t.addContact=function(e,n){var a={id:p.a.generate(),name:"",number:""};a.name=e,a.number=n,t.setState((function(n){return t.includContact(e),{contacts:[].concat(Object(o.a)(n.contacts),[a])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.name!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.getFilterContacts();return Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{onAddContact:this.addContact}),t.length>1?Object(a.jsx)("div",{children:Object(a.jsx)(N,{value:this.state.filter,onChangeFilter:this.changeFilter})}):Object(a.jsx)("div",{}),this.state.contacts.length>0?Object(a.jsx)("div",{children:Object(a.jsx)(C,{contacts:t,onDeleteContact:this.deleteContact})}):Object(a.jsx)("div",{})]})}}]),n}(c.Component);s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={list:"ContactList_list__1Pi3c",title:"ContactList_title__2rE88",item:"ContactList_item__25ZHG",deleteBtn:"ContactList_deleteBtn__2BWE7"}}},[[28,1,2]]]);
//# sourceMappingURL=main.f740452d.chunk.js.map