(this["webpackJsonphello-world"]=this["webpackJsonphello-world"]||[]).push([[0],{45:function(e,t,n){},67:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(10),a=n.n(c),s=(n(67),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,121)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),c(e),a(e)}))}),r=n(14),l=n(15),u=n(12),d=n(18),j=n(17),b=(n(45),n(4)),h={fontSize:"30px",color:"black"},m=function(){return Object(b.jsx)("h1",{style:h,children:" Sign in CSIE@CGU "})},p=n(115),O=n(109),v=n(118),f=Object(O.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"40ch",height:"10ch"}}}}));function x(){var e=f();return Object(b.jsxs)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:[Object(b.jsx)(v.a,{id:"standard-basic",label:"Email Address*"}),Object(b.jsx)(v.a,{id:"standard-basic",type:"password",label:"Password*"})]})}var g=n(38),k=n(52),y=n(41),I=n(5),C=n(40),S=n(113),L=n(114),w=n(119);Object(I.a)({root:{color:C.a[400],"&$checked":{color:C.a[600]}},checked:{}})((function(e){return Object(b.jsx)(w.a,Object(y.a)({color:"default"},e))}));function D(){var e=i.a.useState({checkedB:!0,checkedA:!0}),t=Object(k.a)(e,2),n=t[0],o=t[1];return Object(b.jsx)(S.a,{row:!0,children:Object(b.jsx)(L.a,{control:Object(b.jsx)(w.a,{checked:n.checkedB,onChange:function(e){o(Object(y.a)(Object(y.a)({},n),{},Object(g.a)({},e.target.name,e.target.checked)))},name:"checkedB",color:"primary"}),label:"Remeber me"})})}var N=n(116),T=n(117);var R=function(e){return Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(p.a,{container:!0,style:{minHeight:"100vh"},children:[Object(b.jsx)(p.a,{item:!0,xs:12,sm:6,children:Object(b.jsx)("img",{src:"https://i0.zi.org.tw/kocpc/2021/01/1611477294-5830d062501eb5a2b777dade755489e2.jpg",style:{width:"100%",height:"100%",objectFit:"cover"},alt:"img"})}),Object(b.jsxs)(p.a,{container:!0,item:!0,xs:12,sm:6,alignItems:"center",direction:"column",justify:"space-between",style:{padding:10},children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{style:{display:"flex",flexDirection:"column",maxWidth:400,minWidth:300},children:Object(b.jsxs)(p.a,{container:!0,justify:"center",children:[Object(b.jsx)("img",{src:"https://d29fhpw069ctt2.cloudfront.net/icon/image/37722/preview.svg",width:500,alt:"lockimg"}),Object(b.jsx)("div",{style:{marginTop:200}}),m(),Object(b.jsx)("div",{style:{height:200}}),x(),Object(b.jsx)("div",{style:{height:10}}),D(),Object(b.jsx)(N.a,{onClick:e.onLogin,color:"primary",variant:"contained",style:{width:900,height:40,marginTop:20},children:"SIGN IN"}),Object(b.jsx)("div",{style:{height:100}}),Object(b.jsx)(T.a,{children:"Forgot password?"}),"\xa0",Object(b.jsx)(T.a,{children:"Don't have an account?"}),"\xa0",Object(b.jsx)(T.a,{children:"Sign Up"}),Object(b.jsx)("p",{children:"Copyright \xa9 I_LOVE_CSIE@CGU 2021."})]})}),Object(b.jsx)("div",{})]})]})})},A=(n(46),[]);A.push({index:1,value:"learn react",done:!1}),A.push({index:2,value:"Go shopping",done:!0}),A.push({index:3,value:"buy flowers",done:!0});var B=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t,n){return Object(b.jsx)(F,{item:t,index:n,removeItem:e.props.removeItem,markTodoDone:e.props.markTodoDone},n)}));return Object(b.jsxs)("ul",{className:"list-group",children:[" ",t," "]})}}]),n}(i.a.Component),F=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).onClickClose=o.onClickClose.bind(Object(u.a)(o)),o.onClickDone=o.onClickDone.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.markTodoDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return Object(b.jsx)("li",{className:"list-group-item ",children:Object(b.jsxs)("div",{className:e,children:[Object(b.jsx)("span",{className:"glyphicon glyphicon-ok icon","aria-hidden":"true",onClick:this.onClickDone}),this.props.item.value,Object(b.jsx)("button",{type:"button",className:"close",onClick:this.onClickClose,children:"\xd7"})]})})}}]),n}(i.a.Component),G=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).onSubmit=o.onSubmit.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.refs.itemName.focus()}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.itemName.value;t&&(this.props.addItem({newItemValue:t}),this.refs.form.reset())}},{key:"render",value:function(){return Object(b.jsxs)("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline",children:[Object(b.jsx)("input",{type:"text",ref:"itemName",className:"form-control",placeholder:"add a new todo..."}),Object(b.jsx)("button",{type:"submit",className:"btn btn-default",children:"Add"})]})}}]),n}(i.a.Component),U={color:"#61dafb"},E=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("h1",{style:U,children:"CGU TodoList"})}}]),n}(i.a.Component),M=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).addItem=o.addItem.bind(Object(u.a)(o)),o.removeItem=o.removeItem.bind(Object(u.a)(o)),o.markTodoDone=o.markTodoDone.bind(Object(u.a)(o)),o.state={todoItems:A},o}return Object(l.a)(n,[{key:"addItem",value:function(e){A.unshift({index:A.length+1,value:e.newItemValue,done:!1}),this.setState({todoItems:A})}},{key:"removeItem",value:function(e){A.splice(e,1),this.setState({todoItems:A})}},{key:"markTodoDone",value:function(e){var t=A[e];A.splice(e,1),t.done=!t.done,t.done?A.push(t):A.unshift(t),this.setState({todoItems:A})}},{key:"render",value:function(){return Object(b.jsxs)("div",{id:"main",children:[Object(b.jsx)(E,{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)(G,{addItem:this.addItem}),Object(b.jsx)("br",{}),Object(b.jsx)(B,{items:this.props.initItems,removeItem:this.removeItem,markTodoDone:this.markTodoDone})]})}}]),n}(i.a.Component),V=function(){return Object(b.jsx)(M,{initItems:A})};function W(){return Object(b.jsx)("div",{className:"App",children:V()})}var z=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).setRenderItem=o.setRenderItem.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"setRenderItem",value:function(){return this.props.LoginStatus?Object(b.jsx)(W,{}):Object(b.jsx)(R,{onLogin:this.props.onLogin})}},{key:"render",value:function(){return Object(b.jsx)("div",{children:this.setRenderItem()})}}]),n}(i.a.Component),H=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={login:!1},o.onLogin=o.onLogin.bind(Object(u.a)(o)),o.onLogout=o.onLogout.bind(Object(u.a)(o)),o}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"onLogin",value:function(){this.setState({login:!0})}},{key:"onLogout",value:function(){this.setState({login:!1})}},{key:"getLoginStatus",value:function(){return this.state.login}},{key:"render",value:function(){return Object(b.jsx)(z,{onLogin:this.onLogin,onLogout:this.onLogout,LoginStatus:this.getLoginStatus()})}}]),n}(i.a.Component);a.a.render(Object(b.jsxs)(i.a.StrictMode,{children:[Object(b.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css",integrity:"sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu",crossorigin:"anonymous"}),Object(b.jsx)(H,{})]}),document.getElementById("root")),s()}},[[72,1,2]]]);
//# sourceMappingURL=main.bb4daa9c.chunk.js.map