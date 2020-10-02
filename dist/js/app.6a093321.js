(function(e){function t(t){for(var s,a,n=t[0],m=t[1],c=t[2],u=0,f=[];u<n.length;u++)a=n[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(s in m)Object.prototype.hasOwnProperty.call(m,s)&&(e[s]=m[s]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],s=!0,n=1;n<r.length;n++){var m=r[n];0!==o[m]&&(s=!1)}s&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var s={},o={app:0},i=[];function a(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=s,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(r,s,function(t){return e[t]}.bind(null,s));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/client-creation-form/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],m=n.push.bind(n);n.push=t,n=n.slice();for(var c=0;c<n.length;c++)t(n[c]);var l=m;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),o=r("1dce"),i=r.n(o),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._v("` "),r("a",{attrs:{href:"#",id:"github-icon",title:"Repository on GitHub"}},[r("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:["fab","github"],size:"2x"}})],1),e.regMessage?r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[r("div",{staticClass:"alert-text"},[e._v("Клиент успешно создан!")])]):e._e(),r("form",{staticClass:"form",attrs:{novalidate:""},on:{submit:function(t){return t.preventDefault(),e.createClient(t)}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:1===e.step,expression:"step === 1"}],staticClass:"form-step"},[r("div",{staticClass:"form-header"},[e._v("Основные данные")]),r("div",{staticClass:"form-body"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"surname"}},[e._v("Фамилия*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.surname,expression:"formReg.surname",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.surname),attrs:{type:"text",id:"surname"},domProps:{value:e.formReg.surname},on:{blur:[function(t){return e.$v.formReg.surname.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"surname",t.target.value.trim())}}}),e.$v.formReg.surname.required?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))]),e.$v.formReg.surname.minLength?e._e():r("div",{staticClass:"error"},[e._v("Фамилия должна состоять минимум из "+e._s(e.$v.formReg.surname.$params.minLength.min)+" букв.")]),e.$v.formReg.surname.alphaPerson?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.alphaPersonText))])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"name"}},[e._v("Имя*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.name,expression:"formReg.name",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.name),attrs:{type:"text",id:"name"},domProps:{value:e.formReg.name},on:{blur:[function(t){return e.$v.formReg.name.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"name",t.target.value.trim())}}}),e.$v.formReg.name.required?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))]),e.$v.formReg.name.minLength?e._e():r("div",{staticClass:"error"},[e._v("Имя должно состоять минимум из "+e._s(e.$v.formReg.name.$params.minLength.min)+" букв.")]),e.$v.formReg.name.alphaPerson?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.alphaPersonText))])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"patronymic"}},[e._v("Отчество")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.patronymic,expression:"formReg.patronymic",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"patronymic"},domProps:{value:e.formReg.patronymic},on:{input:function(t){t.target.composing||e.$set(e.formReg,"patronymic",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.formReg.patronymic.minLength?e._e():r("div",{staticClass:"error"},[e._v("Отчество должно состоять минимум из "+e._s(e.$v.formReg.patronymic.$params.minLength.min)+" букв.")]),e.$v.formReg.patronymic.alphaPerson?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.alphaPersonText))])]),r("div",{staticClass:"form-group date-field"},[r("label",{staticClass:"form-label",attrs:{for:"birthdate"}},[e._v("Дата рождения*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.birthdate,expression:"formReg.birthdate",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.birthdate),attrs:{type:"date",id:"birthdate"},domProps:{value:e.formReg.birthdate},on:{blur:[function(t){return e.$v.formReg.birthdate.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"birthdate",t.target.value.trim())}}}),r("span",{staticClass:"arrow"}),e.$v.formReg.birthdate.required?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"phoneNumber"}},[e._v("Номер телефона*")]),r("div",{staticClass:"wrapperPhoneNumber"},[r("span",{attrs:{id:"countryCode"}},[e._v("+7 ")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.phoneNumber,expression:"formReg.phoneNumber",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.phoneNumber),attrs:{type:"text",id:"phoneNumber",placeholder:"(555) 555-5555"},domProps:{value:e.formReg.phoneNumber},on:{blur:[function(t){return e.$v.formReg.phoneNumber.$touch()},function(t){return e.$forceUpdate()}],input:[function(t){t.target.composing||e.$set(e.formReg,"phoneNumber",t.target.value.trim())},e.acceptNumber]}})]),e.$v.formReg.phoneNumber.required&&e.$v.formReg.phoneNumber.minLength?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))])]),r("div",{staticClass:"form-group multiple-field"},[r("label",{staticClass:"form-label",attrs:{for:"clientsGroup"}},[e._v("Группа клиентов*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formRegList.clientsGroup.selected,expression:"formRegList.clientsGroup.selected"}],staticClass:"form-control select",attrs:{id:"clientsGroup",multiple:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.formRegList.clientsGroup,"selected",t.target.multiple?r:r[0])}}},e._l(e.formRegList.clientsGroup.options,(function(t){return r("option",{key:t.id,staticClass:"option"},[e._v(" "+e._s(t.value)+" ")])})),0),r("span",{staticClass:"arrow"}),r("div",{staticClass:"mark"},[e._v("Для выбора нескольких полей нажмите ctrl при клике")]),e.$v.formRegList.clientsGroup.selected.required?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))])]),r("div",{staticClass:"form-group select-field"},[r("label",{staticClass:"form-label",attrs:{for:"selectedDoctor"}},[e._v("Лечащий врач")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.formRegList.selectedDoctor.selected,expression:"formRegList.selectedDoctor.selected"}],staticClass:"form-control select",attrs:{id:"selectedDoctor"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.formRegList.selectedDoctor,"selected",t.target.multiple?r:r[0])}}},e._l(e.formRegList.selectedDoctor.options,(function(t){return r("option",{key:t.key},[e._v(" "+e._s(t.value)+" ")])})),0),r("span",{staticClass:"arrow"})]),r("div",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formReg.checked,expression:"formReg.checked"}],attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(e.formReg.checked)?e._i(e.formReg.checked,null)>-1:e.formReg.checked},on:{change:function(t){var r=e.formReg.checked,s=t.target,o=!!s.checked;if(Array.isArray(r)){var i=null,a=e._i(r,i);s.checked?a<0&&e.$set(e.formReg,"checked",r.concat([i])):a>-1&&e.$set(e.formReg,"checked",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(e.formReg,"checked",o)}}}),r("span",{staticClass:"checkmark"}),r("label",{staticClass:"form-label",attrs:{id:"checkboxLabel",for:"checkbox"}},[e._v("Не отправлять СМС")])]),r("button",{staticClass:"button",attrs:{disabled:e.disabledBtn1,type:"button"},on:{click:function(t){e.step++}}},[e._v("Далее")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:2===e.step,expression:"step === 2"}],staticClass:"form-step"},[r("div",{staticClass:"form-header"},[e._v("Адрес")]),r("div",{staticClass:"form-body"},[r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"index"}},[e._v("Индекс")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.index,expression:"formReg.index",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.index),attrs:{type:"text",id:"index"},domProps:{value:e.formReg.index},on:{blur:[function(t){return e.$v.formReg.index.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"index",t.target.value.trim())}}}),e.$v.formReg.index.minLength&&e.$v.formReg.index.maxLength&&e.$v.formReg.index.numeric?e._e():r("div",{staticClass:"error"},[e._v("Индекс должн состоять из "+e._s(e.$v.formReg.index.$params.minLength.min)+" цифр")])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"country"}},[e._v("Страна")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.country,expression:"formReg.country",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.country),attrs:{type:"text",id:"country"},domProps:{value:e.formReg.country},on:{blur:[function(t){return e.$v.formReg.country.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"country",t.target.value.trim())}}}),e.$v.formReg.country.minLength?e._e():r("div",{staticClass:"error"},[e._v("Название страны должно состоять минимум из "+e._s(e.$v.formReg.country.$params.minLength.min)+" букв.")]),e.$v.formReg.country.alpha?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.alphaText))])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"region"}},[e._v("Область")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.region,expression:"formReg.region",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.region),attrs:{type:"text",id:"region"},domProps:{value:e.formReg.region},on:{blur:[function(t){return e.$v.formReg.region.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"region",t.target.value.trim())}}}),e.$v.formReg.region.minLength?e._e():r("div",{staticClass:"error"},[e._v("Название области должно состоять минимум из "+e._s(e.$v.formReg.region.$params.minLength.min)+" букв.")]),e.$v.formReg.region.alpha?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.alphaText))])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"city"}},[e._v("Город*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.city,expression:"formReg.city",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.city),attrs:{type:"text",id:"city"},domProps:{value:e.formReg.city},on:{blur:[function(t){return e.$v.formReg.city.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"city",t.target.value.trim())}}}),e.$v.formReg.city.required?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))]),e.$v.formReg.city.minLength?e._e():r("div",{staticClass:"error"},[e._v("Название города должно состоять минимум из "+e._s(e.$v.formReg.city.$params.minLength.min)+" букв.")]),e.$v.formReg.city.alpha?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.alphaText))])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"street"}},[e._v("Улица")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.street,expression:"formReg.street",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"street"},domProps:{value:e.formReg.street},on:{input:function(t){t.target.composing||e.$set(e.formReg,"street",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.formReg.street.minLength?e._e():r("div",{staticClass:"error"},[e._v("Название улицы должно состоять минимум из "+e._s(e.$v.formReg.street.$params.minLength.min)+" букв.")])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"house"}},[e._v("Дом")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.house,expression:"formReg.house",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"house"},domProps:{value:e.formReg.house},on:{input:function(t){t.target.composing||e.$set(e.formReg,"house",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("button",{staticClass:"button button-left",attrs:{type:"button"},on:{click:function(t){e.step--}}},[e._v("Назад")]),r("button",{staticClass:"button button-right",attrs:{disabled:e.disabledBtn2,type:"button"},on:{click:function(t){e.step++}}},[e._v("Далее")])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:3===e.step,expression:"step === 3"}],staticClass:"form-step"},[r("div",{staticClass:"form-header"},[e._v("Паспорт")]),r("div",{staticClass:"form-body"},[r("div",{staticClass:"form-group select-field"},[r("label",{staticClass:"form-label",attrs:{for:"documentType"}},[e._v("Тип документа*.")]),r("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.formRegList.documentType.selected,expression:"formRegList.documentType.selected",modifiers:{trim:!0}}],staticClass:"form-control select",class:e.status(e.$v.formRegList.documentType.selected),attrs:{id:"documentType"},on:{blur:function(t){return e.$v.formRegList.documentType.selected.$touch()},change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.formRegList.documentType,"selected",t.target.multiple?r:r[0])}}},e._l(e.formRegList.documentType.options,(function(t){return r("option",{key:t.key},[e._v(" "+e._s(t.value)+" ")])})),0),r("span",{staticClass:"arrow"}),e.$v.formRegList.documentType.selected.required?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"series"}},[e._v("Серия")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.series,expression:"formReg.series",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"series"},domProps:{value:e.formReg.series},on:{input:function(t){t.target.composing||e.$set(e.formReg,"series",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.formReg.series.minLength&&e.$v.formReg.series.maxLength&&e.$v.formReg.series.numeric?e._e():r("div",{staticClass:"error"},[e._v("Серия должна состоять из "+e._s(e.$v.formReg.series.$params.minLength.min)+" цифр")])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"number"}},[e._v("Номер")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.number,expression:"formReg.number",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"number"},domProps:{value:e.formReg.number},on:{input:function(t){t.target.composing||e.$set(e.formReg,"number",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.$v.formReg.number.minLength&&e.$v.formReg.number.maxLength&&e.$v.formReg.number.numeric?e._e():r("div",{staticClass:"error"},[e._v("Номер должн состоять из "+e._s(e.$v.formReg.number.$params.minLength.min)+" цифр")])]),r("div",{staticClass:"form-group"},[r("label",{staticClass:"form-label",attrs:{for:"issued"}},[e._v("Кем выдан")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.issued,expression:"formReg.issued",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"issued"},domProps:{value:e.formReg.issued},on:{input:function(t){t.target.composing||e.$set(e.formReg,"issued",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("div",{staticClass:"form-group date-field"},[r("label",{staticClass:"form-label",attrs:{for:"dateIssue"}},[e._v("Дата выдачи*")]),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formReg.dateIssue,expression:"formReg.dateIssue",modifiers:{trim:!0}}],staticClass:"form-control",class:e.status(e.$v.formReg.dateIssue),attrs:{type:"date",id:"dateIssue"},domProps:{value:e.formReg.dateIssue},on:{blur:[function(t){return e.$v.formReg.dateIssue.$touch()},function(t){return e.$forceUpdate()}],input:function(t){t.target.composing||e.$set(e.formReg,"dateIssue",t.target.value.trim())}}}),r("span",{staticClass:"arrow"}),e.$v.formReg.dateIssue.required?e._e():r("div",{staticClass:"error"},[e._v(e._s(e.reqText))])]),r("button",{staticClass:"button button-left",attrs:{type:"button"},on:{click:function(t){e.step--}}},[e._v("Назад")]),r("button",{staticClass:"button",attrs:{disabled:e.disabledBtn3,type:"submit"},on:{click:function(t){e.step++}}},[e._v("Создать клиента")])])])])])},n=[],m=(r("b0c0"),r("ac1f"),r("466d"),r("5319"),r("b5ae")),c=m["helpers"].regex("alpha",/^[a-zA-Zа-яёА-ЯЁ-]*$/),l=m["helpers"].regex("alpha",/^[a-zA-Zа-яёА-ЯЁ -]*$/),u={name:"App",data:function(){return{step:1,regMessage:!1,reqText:"Поле обязательное для заполнения",alphaPersonText:"Разрешены только буквы и дефисы",alphaText:"Разрешены только буквы, дефисы и пробелы",formReg:{surname:"",name:"",patronymic:"",birthdate:"",phoneNumber:"",index:"",country:"",region:"",city:"",street:"",house:"",series:"",number:"",issued:"",dateIssue:""},formRegList:{clientsGroup:{selected:[],options:[{id:"1",value:"VIP"},{id:"2",value:"Проблемные"},{id:"3",value:"ОМС"}]},selectedDoctor:{selected:"",options:[{key:"1",value:"Иванов"},{key:"2",value:"Захаров"},{key:"3",value:"Чернышева"}]},documentType:{selected:"",options:[{key:"1",value:"Паспорт"},{key:"2",value:"Свидетельство о рождении"},{key:"3",value:"Вод. удостоверение"}]}}}},computed:{disabledBtn1:function(){return this.$v.formReg.surname.$invalid||this.$v.formReg.name.$invalid||this.$v.formReg.birthdate.$invalid||this.$v.formReg.phoneNumber.$invalid||this.$v.formRegList.clientsGroup.$invalid},disabledBtn2:function(){return this.$v.formReg.city.$invalid},disabledBtn3:function(){return this.$v.formRegList.documentType.selected.$invalid||this.$v.formReg.dateIssue.$invalid}},methods:{acceptNumber:function(){var e=this.formReg.phoneNumber.replace(/\D/g,"").match(/(\d{0,3})(\d{0,3})(\d{0,4})/);this.formReg.phoneNumber=e[2]?"("+e[1]+") "+e[2]+(e[3]?"-"+e[3]:""):e[1]},status:function(e){return{"is-invalid":e.$error}},createClient:function(){this.reset()},reset:function(){var e=this;for(var t in this.step=1,this.regMessage=!0,setTimeout((function(){e.regMessage=!1}),3e3),this.formReg)this.formReg[t]="";for(var r in this.formRegList)this.formRegList[r].selected="";this.formRegList.clientsGroup.selected=[],this.$v.$reset()}},validations:{formReg:{surname:{required:m["required"],alphaPerson:c,minLength:Object(m["minLength"])(3)},name:{required:m["required"],alphaPerson:c,minLength:Object(m["minLength"])(3)},patronymic:{alphaPerson:c,minLength:Object(m["minLength"])(3)},birthdate:{required:m["required"]},phoneNumber:{required:m["required"],minLength:Object(m["minLength"])(14)},index:{numeric:m["numeric"],minLength:Object(m["minLength"])(6),maxLength:Object(m["maxLength"])(6)},country:{alpha:l,minLength:Object(m["minLength"])(3)},region:{alpha:l,minLength:Object(m["minLength"])(3)},city:{required:m["required"],alpha:l,minLength:Object(m["minLength"])(3)},street:{minLength:Object(m["minLength"])(3)},series:{numeric:m["numeric"],minLength:Object(m["minLength"])(4),maxLength:Object(m["maxLength"])(4)},number:{numeric:m["numeric"],minLength:Object(m["minLength"])(6),maxLength:Object(m["maxLength"])(6)},dateIssue:{required:m["required"]}},formRegList:{clientsGroup:{selected:{required:m["required"]}},documentType:{selected:{required:m["required"]}}}}},f=u,d=(r("5c0b"),r("2877")),v=Object(d["a"])(f,a,n,!1,null,null,null),p=v.exports,g=r("ecee"),h=r("ad3d"),b=r("f2d1");g["c"].add(b["a"]),s["a"].component("font-awesome-icon",h["a"]),s["a"].config.productionTip=!1,s["a"].use(i.a),new s["a"]({render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var s=r("9c0c"),o=r.n(s);o.a},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.6a093321.js.map