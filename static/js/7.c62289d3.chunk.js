(this["webpackJsonpform-state-forms"]=this["webpackJsonpform-state-forms"]||[]).push([[7],{53:function(e,r,t){e.exports={InputDate:"styles_InputDate__3Gfzb",InputDate__Icon:"styles_InputDate__Icon__3m_hb"}},63:function(e,r,t){"use strict";t.r(r);var n=t(5),a=t(0),i=t(25),c=t(31),l=t(22),o=t(23),s=t(38),d=t(24),j=t(21),b=t(9),u=t(1);var m=function(e){return Object(u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-calendar",children:[Object(u.jsx)("rect",Object(b.a)({x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"},e)),Object(u.jsx)("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),Object(u.jsx)("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),Object(u.jsx)("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]})},h=t(53),O=t.n(h);function x(e){return Object(u.jsxs)("div",{className:O.a.InputDate,children:[Object(u.jsx)(j.a,Object(b.a)(Object(b.a)({},e),{},{mask:"99.99.9999"})),Object(u.jsx)("div",{className:O.a.InputDate__Icon,children:Object(u.jsx)(m,{})})]})}x.defaultProps={error:null,mask:null,value:null,onBlur:function(e){},onChange:function(e,r,t){},onFocus:function(e){}};var f=x,F=t(33),v=t(40),p=Object(i.createFormState)({address:Object(i.createFormField)(),birthday:Object(i.createFormField)({validations:[i.Validations.required]}),email:Object(i.createFormField)(),employerName:Object(i.createFormField)(),gender:Object(i.createFormField)({validations:[i.Validations.required]}),name:Object(i.createFormField)({validations:[i.Validations.required]}),patronymic:Object(i.createFormField)(),phone:Object(i.createFormField)(),surname:Object(i.createFormField)({validations:[i.Validations.required]})});r.default=function(){var e=Object(i.useFormState)(p),r=Object(n.a)(e,2),t=r[0],b=r[1];function m(){t.isValidated&&b.validateState(t)}function h(e,r){var t=r.name;b.changeField(t,e)}return Object(a.useEffect)((function(){t.isValidated&&b.validateState(t)}),[t.gender.value]),Object(u.jsx)(i.FormStateProvider,{state:t,children:Object(u.jsxs)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault(),b.validateState(t).isValid()&&alert("Sending the form...")},children:[Object(u.jsx)(d.a,{size:"1",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0435"}),Object(u.jsx)(i.FormField,{field:t.surname,children:function(e,r){var t=r.error;return Object(u.jsx)(o.a,{children:Object(u.jsx)(F.a,{error:t,getOptionsMethod:c.e,label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f *",name:"surname",value:e,onBlur:m,onChange:h})})}}),Object(u.jsx)(i.FormField,{field:t.name,children:function(e,r){var t=r.error;return Object(u.jsx)(o.a,{children:Object(u.jsx)(F.a,{error:t,getOptionsMethod:c.c,label:"\u0418\u043c\u044f *",name:"name",value:e,onBlur:m,onChange:h})})}}),Object(u.jsx)(i.FormField,{field:t.patronymic,children:function(e,r){var t=r.error;return Object(u.jsx)(o.a,{children:Object(u.jsx)(F.a,{error:t,getOptionsMethod:c.d,label:"\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",name:"patronymic",value:e,onBlur:m,onChange:h})})}}),Object(u.jsxs)(s.b,{children:[Object(u.jsx)(i.FormField,{field:t.gender,children:function(e,r){var t=r.error;return Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(v.a,{error:t,label:"\u041f\u043e\u043b *",name:"gender",options:[{id:"male",name:"\u043c\u0443\u0436\u0441\u043a\u043e\u0439"},{id:"female",name:"\u0436\u0435\u043d\u0441\u043a\u0438\u0439"}],value:e,onChange:h})})})}}),Object(u.jsx)(i.FormField,{field:t.birthday,children:function(e,r){var t=r.error;return Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(f,{error:t,label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f *",name:"birthday",value:e,onBlur:m,onChange:h})})})}}),Object(u.jsx)(i.FormField,{field:t.phone,children:function(e,r){var t=r.error;return Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(j.a,{error:t,label:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d *",mask:"+7 (999) 999-99-99",name:"phone",value:e,onBlur:m,onChange:h})})})}}),Object(u.jsx)(i.FormField,{field:t.email,children:function(e,r){var t=r.error;return Object(u.jsx)(s.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsx)(j.a,{error:t,label:"Email",name:"email",value:e,onBlur:m,onChange:h})})})}})]}),Object(u.jsx)(i.FormField,{field:t.address,children:function(e,r){var t=r.error;return Object(u.jsx)(o.a,{children:Object(u.jsx)(F.a,{error:t,getOptionsMethod:c.a,label:"\u0410\u0434\u0440\u0435\u0441 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",name:"address",value:e,onBlur:m,onChange:h})})}}),Object(u.jsx)(i.FormField,{field:t.employerName,children:function(e,r){var t=r.error;return Object(u.jsx)(o.a,{children:Object(u.jsx)(F.a,{error:t,getOptionsMethod:c.b,label:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u043e\u0434\u0430\u0442\u0435\u043b\u044f",name:"employerName",value:e,onBlur:m,onChange:h})})}}),Object(u.jsxs)(s.b,{children:[Object(u.jsx)(s.a,{}),Object(u.jsx)(s.a,{children:Object(u.jsx)(l.a,{variant:"primary",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})]})})}}}]);
//# sourceMappingURL=7.c62289d3.chunk.js.map