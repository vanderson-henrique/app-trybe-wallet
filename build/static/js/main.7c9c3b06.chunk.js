(this["webpackJsonpsd-0x-project-trybewallet"]=this["webpackJsonpsd-0x-project-trybewallet"]||[]).push([[0],{34:function(e,t,a){e.exports=a.p+"static/media/carteira.ba775a0a.svg"},36:function(e,t,a){e.exports=a.p+"static/media/btn-excluir.971f6359.svg"},37:function(e,t,a){e.exports=a.p+"static/media/btn-editar.3e7d8b5e.svg"},39:function(e,t,a){e.exports=a(54)},48:function(e,t,a){},49:function(e,t,a){},52:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),c=a.n(i),l=a(24),o=a(7),u=(a(48),a(5)),s=a(17),d=a(10),m=a(11),p=a(14),h=a(13),E=a(12),v=a(56),b=a(57),f=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},g=function(e){return{type:"ADD_EXPENSES",expense:e}},x=function(e){return{type:"EDIT_EXPENSE",expenseEdit:e}},y=function(){return function(e){return f().then((function(t){return e({type:"CURRENCY_QUERY",currencies:t})}),(function(t){return e(function(e){return{type:"RECEIVE_FAILURE",error:e}}(t))}))}},j=(a(49),function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changeValue=n.changeValue.bind(Object(p.a)(n)),n.clickLogin=n.clickLogin.bind(Object(p.a)(n)),n.verifyFields=n.verifyFields.bind(Object(p.a)(n)),n.state={email:"",password:"",isDisabled:!0},n}return Object(m.a)(a,[{key:"changeValue",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState(Object(s.a)({},n,r),(function(){return t.verifyFields()}))}},{key:"clickLogin",value:function(){var e=this.props,t=e.login,a=e.history;return t(this.state.email),a.push("/app-trybe-wallet/carteira")}},{key:"validarEmail",value:function(e){return/\S+@\S+\.\S+/.test(e)}},{key:"verifyFields",value:function(){var e=this.state,t=e.email;e.password.length>5&&this.validarEmail(t)&&this.setState({isDisabled:!1})}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.isDisabled;return r.a.createElement("div",{className:"container-form-login"},r.a.createElement(v.a,{className:"Form"},r.a.createElement("h1",null,"Trybe Wallet"),r.a.createElement(v.a.Group,{controlId:"formBasicName"},r.a.createElement(v.a.Label,{htmlFor:"name"},"email"),r.a.createElement(v.a.Control,{className:"input","data-testid":"email-input",type:"text",id:"email",name:"email",value:t,onChange:this.changeValue,placeholder:"Insira um e-mail v\xe1lido"})),r.a.createElement(v.a.Group,{controlId:"formBasicName"},r.a.createElement(v.a.Label,{htmlFor:"name"},"password"),r.a.createElement(v.a.Control,{className:"input","data-testid":"password-input",type:"password",id:"password",name:"password",value:a,onChange:this.changeValue,placeholder:"Insira uma senha de 6 d\xedgitos"})),r.a.createElement(b.a,{variant:"primary",type:"button",disabled:n,onClick:this.clickLogin},"Entrar")))}}]),a}(r.a.Component)),O=Object(o.b)(null,(function(e){return{login:function(t){return e(function(e){return{type:"LOGIN",email:e}}(t))}}}))(j),C=a(34),k=a.n(C),w=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.email,a=e.expenses,n=0;return a.length>0&&a.forEach((function(e){var t=parseFloat(e.value),a=e.currency,r=parseFloat(e.exchangeRates[a].ask);n+=parseFloat(t*r)})),r.a.createElement("div",{className:"container-header"},r.a.createElement("img",{src:k.a,alt:"imagem da carteira",width:"80px",height:"80px"}),r.a.createElement("div",{className:"container-info"},r.a.createElement("span",{"data-testid":"email-field"},"Email:",t),r.a.createElement("div",{className:"container-amount"},r.a.createElement("span",{"data-testid":"total-field"},"Despesa Total: R$",n.toFixed(2)),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL"))))}}]),a}(r.a.Component),D=Object(o.b)((function(e){return{email:e.user.email,expenses:e.wallet.expenses}}))(w),F=a(26),S=a.n(F),V=a(35),N=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changeValue=n.changeValue.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.state={value:"",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchAPI)()}},{key:"changeValue",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"handleClick",value:function(){var e=Object(V.a)(S.a.mark((function e(){var t,a,n,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.fetchAPI,e.next=3,t();case 3:a=this.props,n=a.add,r=a.currencies,this.setState({exchangeRates:r}),n(this.state),this.setState({value:"",description:""});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.value,a=e.description,n=this.props.currencies,i=Object.keys(n).filter((function(e){return"USDT"!==e}));return r.a.createElement("form",{className:"form"},r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{"data-testid":"value-input",id:"value",name:"value",type:"text",value:t,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{"data-testid":"description-input",id:"description",name:"description",type:"text",value:a,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{id:"currency",name:"currency","data-testid":"currency-input",onChange:this.changeValue},i&&i.map((function(e){return r.a.createElement("option",{value:e,key:e,"data-testid":e},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento:",r.a.createElement("select",{"data-testid":"method-input",name:"method",id:"method",onChange:this.changeValue},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Tag:",r.a.createElement("select",{"data-testid":"tag-input",name:"tag",id:"tag",onChange:this.changeValue},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("button",{type:"button",onClick:this.handleClick},"Adicionar despesa"))}}]),a}(n.Component),T=Object(o.b)((function(e){var t=e.wallet;return{currencies:t.currencies,expenses:t.expenses}}),(function(e){return{fetchAPI:function(){return e(y())},add:function(t){return e(g(t))}}}))(N),I=a(36),R=a.n(I),L=a(37),A=a.n(L),P=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.expenses,a=e.dellExpense,n=e.edExpense;return r.a.createElement("div",null,r.a.createElement("table",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("td",null,"Descri\xe7\xe3o"),r.a.createElement("td",null,"Tag"),r.a.createElement("td",null,"M\xe9todo de pagamento"),r.a.createElement("td",null,"Valor"),r.a.createElement("td",null,"Moeda"),r.a.createElement("td",null,"C\xe2mbio utilizado"),r.a.createElement("td",null,"Valor convertido"),r.a.createElement("td",null,"Moeda de convers\xe3o"),r.a.createElement("td",null,"Editar/Excluir"))),t?t.map((function(e){var t=e.value,i=e.description,c=e.tag,l=e.method,o=e.id,u=e.exchangeRates,s=e.currency,d=u[s].name,m=u[s].ask,p=parseFloat(t)*m;return r.a.createElement("table",{key:o,className:"table-data"},r.a.createElement("tr",null,r.a.createElement("td",null,i),r.a.createElement("td",null,c),r.a.createElement("td",null,l),r.a.createElement("td",null,t),r.a.createElement("td",null,d),r.a.createElement("td",null,parseFloat(m).toFixed(2)),r.a.createElement("td",null,parseFloat(p).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,r.a.createElement("button",{type:"button","data-testid":"edit-btn",onClick:function(){return n(e)}},r.a.createElement("img",{src:A.a,alt:"btnExcluir",width:"20px"})),r.a.createElement("button",{type:"button","data-testid":"delete-btn",onClick:function(){return a(o)}},r.a.createElement("img",{src:R.a,alt:"btnExcluir",width:"20px"})))))})):"")}}]),a}(r.a.Component),M=Object(o.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{dellExpense:function(t){return e(function(e){return{type:"DELETE_EXPENSE",id:e}}(t))},edExpense:function(t){return e(x(t))}}}))(P),U=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).changeValue=n.changeValue.bind(Object(p.a)(n)),n.editWallet=n.editWallet.bind(Object(p.a)(n));var r=n.props.expenseEdit;return n.state={value:r.value,description:r.description,currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",exchangeRates:{}},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.fetchAPI)()}},{key:"changeValue",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(s.a)({},a,n))}},{key:"editWallet",value:function(){var e=this.props,t=e.edExpense;(0,e.edit)(e.expenseEdit,this.state),t(),this.setState({value:"",description:""})}},{key:"render",value:function(){var e=this.state,t=e.value,a=e.description,n=this.props.currencies,i=Object.keys(n).filter((function(e){return"USDT"!==e}));return r.a.createElement("form",{className:"form-edit"},r.a.createElement("label",{htmlFor:"value"},"Valor:",r.a.createElement("input",{"data-testid":"value-input",id:"value",name:"value",type:"text",value:t,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"description"},"Descri\xe7\xe3o:",r.a.createElement("input",{"data-testid":"description-input",id:"description",name:"description",type:"text",value:a,onChange:this.changeValue})),r.a.createElement("label",{htmlFor:"currency"},"Moeda:",r.a.createElement("select",{id:"currency",name:"currency","data-testid":"currency-input",onChange:this.changeValue},i&&i.map((function(e){return r.a.createElement("option",{value:e,key:e,"data-testid":e},e)})))),r.a.createElement("label",{htmlFor:"method"},"M\xe9todo de Pagamento:",r.a.createElement("select",{"data-testid":"method-input",name:"method",id:"method",onChange:this.changeValue},r.a.createElement("option",{value:"Dinheiro"},"Dinheiro"),r.a.createElement("option",{value:"Cart\xe3o de cr\xe9dito"},"Cart\xe3o de cr\xe9dito"),r.a.createElement("option",{value:"Cart\xe3o de d\xe9bito"},"Cart\xe3o de d\xe9bito"))),r.a.createElement("label",{htmlFor:"tag"},"Tag:",r.a.createElement("select",{"data-testid":"tag-input",name:"tag",id:"tag",onChange:this.changeValue},r.a.createElement("option",{value:"Alimenta\xe7\xe3o"},"Alimenta\xe7\xe3o"),r.a.createElement("option",{value:"Lazer"},"Lazer"),r.a.createElement("option",{value:"Trabalho"},"Trabalho"),r.a.createElement("option",{value:"Transporte"},"Transporte"),r.a.createElement("option",{value:"Sa\xfade"},"Sa\xfade"))),r.a.createElement("button",{type:"button",onClick:this.editWallet},"Editar despesa"))}}]),a}(r.a.Component),_=Object(o.b)((function(e){var t=e.wallet,a=e.edit;return{currencies:t.currencies,expenses:t.expenses,expenseEdit:a.inEditing.expenseEdit}}),(function(e){return{fetchAPI:function(){return e(y())},add:function(t){return e(g(t))},edExpense:function(t){return e(x(t))},edit:function(t,a){return e(function(e,t){return{type:"EDITING",expenseEdit:e,newData:t}}(t,a))}}}))(U),W=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.inEditing;return r.a.createElement("div",null,r.a.createElement(D,null),e?r.a.createElement(_,null):r.a.createElement(T,null),r.a.createElement(M,null))}}]),a}(r.a.Component),G=Object(o.b)((function(e){var t=e.edit;return{inEditing:t.inEditing.edit,expenseEdit:t.inEditing.expenseEdit}}))(W);a(52);var X=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/app-trybe-wallet",component:O}),r.a.createElement(u.a,{path:"/app-trybe-wallet/carteira",component:G}))},z=a(18),B=a(38),Y=a(6),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(Y.a)(Object(Y.a)({},e),{},{email:t.email});default:return e}},Q=a(29),$={currencies:[],expenses:[]},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENCY_QUERY":return Object(Y.a)(Object(Y.a)({},e),{},{currencies:t.currencies});case"ADD_EXPENSES":return Object(Y.a)(Object(Y.a)({},e),{},{expenses:[].concat(Object(Q.a)(e.expenses),[{id:e.expenses.length,value:t.expense.value,description:t.expense.description,currency:t.expense.currency,method:t.expense.method,tag:t.expense.tag,exchangeRates:t.expense.exchangeRates}])});case"DELETE_EXPENSE":return Object(Y.a)(Object(Y.a)({},e),{},{expenses:e.expenses.filter((function(e){return e.id!==t.id}))});case"EDITING":return Object(Y.a)(Object(Y.a)({},e),{},{expenses:Object(Q.a)(e.expenses.map((function(e){return e.id!==t.expenseEdit.id?e:{id:t.expenseEdit.id,value:t.newData.value,description:t.newData.description,currency:t.newData.currency,method:t.newData.method,tag:t.newData.tag,exchangeRates:t.expenseEdit.exchangeRates}})))});default:return e}},H={inEditing:{edit:!1,expenseEdit:{}}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_EXPENSE":return Object(Y.a)(Object(Y.a)({},e),{},{inEditing:{edit:!e.inEditing.edit,expenseEdit:t.expenseEdit}});default:return e}},Z=Object(z.c)({user:J,wallet:q,edit:K}),ee=Object(z.d)(Z,Object(z.a)(B.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(l.a,null,r.a.createElement(o.a,{store:ee},r.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.7c9c3b06.chunk.js.map