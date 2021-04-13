(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(6),i=n.n(o),l=(n(23),n(4)),s=n(3),u=n(17),b={addContact:Object(s.b)("contact/add",(function(e){var t=e.name,n=e.number;return{payload:{id:Object(u.a)(),name:t,number:n}}})),deleteContact:Object(s.b)("contact/delete"),changeFilter:Object(s.b)("contact/changeFilter")},d=n(5),j=n(13),m=n(14),h=n(18),f=n(15),O=n(7),p=n.n(O),C=n(1),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.handleChange=function(t){var n=t.target,a=n.name,c=n.value;e.setState(Object(d.a)({},a,c))},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.name&&(e.props.onSubmit(e.state),e.reset())},e.reset=function(){e.setState({name:"",number:""})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return Object(C.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(C.jsxs)("label",{className:"label",children:["Name",Object(C.jsx)("input",{type:"text",name:"name",value:t,className:p.a.input,onChange:this.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(C.jsxs)("label",{className:"label",children:["Phone Number",Object(C.jsx)("input",{type:"tel",name:"number",value:n,onChange:this.handleChange,className:p.a.input,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(C.jsx)("button",{type:"submit",disabled:""===t||""===n,className:"btn",children:"Add contact"})]})}}]),n}(c.Component),x=Object(l.b)((function(e){return{value:e.contacts.filter}}),(function(e){return{onChange:function(t){return e(b.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChange;return Object(C.jsx)("div",{className:"container",children:Object(C.jsxs)("label",{className:"label",children:["Find contacts by name",Object(C.jsx)("input",{type:"text",value:t,onChange:n,className:"input"})]})})})),g=function(e){var t=e.contact,n=e.onDelete,a=t.id,c=t.number,r=t.name;return Object(C.jsxs)("li",{id:a,className:"contact",children:[Object(C.jsxs)("p",{children:[r,": ",c]}),Object(C.jsx)("button",{type:"button",className:"btn",onClick:function(){return function(e){return n(e)}(a)},children:"Delete"})]},a)},N=function(e){var t=e.contacts,n=e.onDelete;return Object(C.jsx)("ul",{className:"container list",children:t.map((function(e){return Object(C.jsx)(g,{contact:e,onDelete:n},e.id)}))})},y=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},F=Object(l.b)((function(e){var t=e.contacts,n=t.items,a=t.filter;return{items:y(n,a),filter:a}}),(function(e){return{onAddContact:function(t){return e(b.addContact(t))},onDeleteContact:function(t){return e(b.deleteContact(t))},onChangeFilter:function(t){return e(b.changeFilter(t))}}}))((function(e){var t=e.items,n=e.filter,a=e.onAddContact,c=e.onDeleteContact,r=e.onChangeFilter;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("h1",{className:"title",children:"Phonebook"}),Object(C.jsx)(v,{onSubmit:a}),Object(C.jsx)("h2",{className:"title",children:"Contacts"}),Object(C.jsx)(x,{value:n,onChange:r}),Object(C.jsx)(N,{contacts:t,onDelete:c})]})})),A=n(16),D=n(2),S=Object(s.c)([],(a={},Object(d.a)(a,b.addContact,(function(e,t){var n=t.payload;return[].concat(Object(A.a)(e),[n])})),Object(d.a)(a,b.deleteContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),a)),k=Object(s.c)("",Object(d.a)({},b.changeFilter,(function(e,t){return t.payload}))),w=Object(D.c)({items:S,filter:k}),_=Object(s.a)({reducer:{contacts:w},devTools:!1});i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(l.a,{store:_,children:Object(C.jsx)(F,{})})}),document.getElementById("root"))},7:function(e,t,n){e.exports={form:"FormContacts_form__OuOxW",input:"FormContacts_input__1a2Ec"}}},[[31,1,2]]]);
//# sourceMappingURL=main.e8e69bfe.chunk.js.map