"use strict";(self.webpackChunkwebpack_react_typescript_scss=self.webpackChunkwebpack_react_typescript_scss||[]).push([[33],{3073:(e,s,t)=>{t.d(s,{p:()=>l});var c=t(4705),a=t(6942),n=t.n(a),r=t(4848),l=function(e){var s=e.name,t=e.value,a=e.onChange,l=e.hasError,d=e.placeholder,i=void 0===d?"":d,o=e.type,u=void 0===o?"text":o,m=e.classname,_=void 0===m?"":m;return(0,r.jsx)("input",{name:s,value:t,onChange:a,type:u,className:n()("input",(0,c.A)({"input--error":l},_,_)),placeholder:i})}},2111:(e,s,t)=>{t.r(s),t.d(s,{default:()=>C});var c=t(5458),a=t(4705),n=t(296),r=t(7767),l=t(4976),d=t(971),i=t(6540),o=t(784),u=t(7665),m=t(141),_=t(4848),p=function(e){var s=e.comment,t=s.name,c=s.body,a=s.advantages,n=s.disadvantages,r=s.rating;return(0,_.jsxs)("div",{className:"comment",children:[(0,_.jsx)("p",{className:"comment__name",children:t}),(0,_.jsx)(m.A,{rating:r}),(0,_.jsx)("p",{className:"comment__text",children:c}),(0,_.jsxs)("dl",{className:"comment__additional",children:[a&&(0,_.jsxs)("div",{className:"comment__additional-block",children:[(0,_.jsx)("dt",{className:"comment__term",children:"Плюси"}),(0,_.jsx)("dd",{className:"comment__description",children:a})]}),n&&(0,_.jsxs)("div",{className:"comment__additional-block",children:[(0,_.jsx)("dt",{className:"comment__term",children:"Мінуси"}),(0,_.jsx)("dd",{className:"comment__description",children:n})]})]})]})},h=function(e){return e.Description="Опис товару",e.Details="Деталі",e.Comments="Відгуки",e}({}),x=t(4403),j=t(6361),N=t(3786),v=t(3073),f=t(6942),g=t.n(f),b=t(3917);function k(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);s&&(c=c.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,c)}return t}function y(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?k(Object(t),!0).forEach((function(s){(0,a.A)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}const C=function(){var e=(0,i.useState)(!1),s=(0,n.A)(e,2),t=s[0],a=s[1],f=(0,i.useState)(!1),k=(0,n.A)(f,2),C=k[0],A=k[1],L=(0,i.useState)(!1),w=(0,n.A)(L,2),S=w[0],O=w[1],D=(0,i.useState)(!1),P=(0,n.A)(D,2),z=P[0],Z=P[1],E=(0,r.zy)(),M=Number(E.pathname.split("/").at(-1)),B=(0,d.M)("recentlyViewed",[]),F=(0,n.A)(B,2),V=F[0],H=F[1],$=(0,i.useState)(null),I=(0,n.A)($,2),W=I[0],q=I[1],G=(0,i.useState)(h.Description),J=(0,n.A)(G,2),K=J[0],Q=J[1],R=(0,i.useState)(""),T=(0,n.A)(R,2),U=T[0],X=T[1],Y=(0,i.useState)(!1),ee=(0,n.A)(Y,2),se=ee[0],te=ee[1],ce=(0,i.useState)(""),ae=(0,n.A)(ce,2),ne=ae[0],re=ae[1],le=(0,i.useState)(""),de=(0,n.A)(le,2),ie=de[0],oe=de[1],ue=(0,i.useState)(0),me=(0,n.A)(ue,2),_e=me[0],pe=me[1],he=(0,i.useState)(0),xe=(0,n.A)(he,2),je=xe[0],Ne=xe[1],ve=(0,i.useState)(""),fe=(0,n.A)(ve,2),ge=fe[0],be=fe[1],ke=(0,i.useState)(""),ye=(0,n.A)(ke,2),Ce=ye[0],Ae=ye[1],Le=(0,i.useState)(""),we=(0,n.A)(Le,2),Se=we[0],Oe=we[1],De=(0,i.useState)(!0),Pe=(0,n.A)(De,2),ze=Pe[0],Ze=Pe[1],Ee=(0,i.useState)(!0),Me=(0,n.A)(Ee,2),Be=Me[0],Fe=Me[1],Ve=(0,i.useState)(!0),He=(0,n.A)(Ve,2),$e=He[0],Ie=He[1],We=(0,i.useState)(!0),qe=(0,n.A)(We,2),Ge=qe[0],Je=qe[1],Ke=je||_e,Qe=function(){re(""),oe(""),pe(0),be(""),Ae(""),Oe(""),O(!1)},Re=null!=W&&W.rating?Math.round(W.rating):0;if((0,i.useEffect)((function(){a(!0),o.o.getDrinkById(M).then((function(e){q(e),X(e.photos[0].image)})).finally((function(){return a(!1)})),V.includes(M)||(V.length>=4?H([M].concat((0,c.A)(V.slice(0,3)))):H([M].concat((0,c.A)(V))))}),[M]),t)return(0,_.jsx)(x.D,{});if(z)return(0,_.jsx)(b.z,{});var Te=Object.values(h),Ue=function(){switch(K){case h.Description:return(0,_.jsxs)("section",{className:"product__section",children:[(0,_.jsx)("h2",{className:"product__section-title",children:"Опис товару"}),(0,_.jsx)("p",{className:"product__description-text",children:null==W?void 0:W.descriptions})]});case h.Details:return(0,_.jsxs)("section",{className:"product__section",children:[(0,_.jsx)("h2",{className:"product__section-title",children:"ДЕТАЛІ"}),(0,_.jsxs)("dl",{className:"product__details",children:[(null==W?void 0:W.drink_type.name)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Категорія напою"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.drink_type.name})]}),(null==W?void 0:W.strength)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Міцність"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.strength})]}),(null==W?void 0:W.volume.name)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Об’єм"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.volume.name})]}),(null==W?void 0:W.taste_parameters)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Параметри смаку"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.taste_parameters})]}),(null==W?void 0:W.producer.name)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Виробник"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.producer.name})]}),(null==W?void 0:W.tastes_together)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Смакує разом"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.tastes_together})]})]})]});case h.Comments:return(0,_.jsxs)("section",{className:"product__section",children:[(0,_.jsxs)("h2",{className:"product__section-title",children:["ВІДГУКИ",!(null==W||!W.count_comments)&&(0,_.jsx)("span",{children:"(".concat(null==W?void 0:W.count_comments,")")})]}),(0,_.jsxs)("div",{className:"product__feedback",children:[(0,_.jsxs)("div",{className:"product__rating",children:[null==W?void 0:W.rating.toFixed(1),(0,_.jsx)(m.A,{rating:Re})]}),(0,_.jsx)("button",{className:"product__feedback-btn",onClick:function(){return te(!0)},children:"Залишити відгук"})]}),null!=W&&W.comments.length?(0,_.jsx)("ul",{className:"product__feedback-comments",children:null==W?void 0:W.comments.map((function(e){return(0,_.jsx)("li",{children:(0,_.jsx)(p,{comment:e})},e.id)}))}):(0,_.jsx)("p",{className:"product__no-comments",children:"Немає жодного відгука"})]})}}();return W&&(0,_.jsxs)("div",{className:"product",children:[(0,_.jsxs)(u.m,{children:[(0,_.jsxs)("div",{className:"product__wrapper",children:[(0,_.jsxs)("div",{className:"product__main",children:[(0,_.jsxs)("section",{className:"product__top",children:[(0,_.jsxs)("div",{className:"product__images",children:[(0,_.jsx)("img",{className:"product__main-img",src:U,alt:"Main img"}),(0,_.jsx)("div",{className:"product__img-buttons",children:W.photos.map((function(e){return(0,_.jsx)("button",{className:"product__img-btn",onClick:function(){return X(e.image)},children:(0,_.jsx)("img",{className:"product__photo-option",src:e.image,alt:"Product photo"})},e.id)}))})]}),(0,_.jsxs)("div",{className:"product__top-content",children:[(0,_.jsxs)("ul",{className:"product__navigation",children:[(0,_.jsx)("li",{className:"product__navigation-item",children:(0,_.jsx)(l.N_,{to:"/",className:"product__navigation-link",children:"Головна"})}),(0,_.jsx)("li",{className:"product__navigation-item",children:"—"}),(0,_.jsx)("li",{className:"product__navigation-item",children:(0,_.jsx)(l.N_,{to:"/catalog?category=".concat(W.drink_type.name),className:"product__navigation-link",children:W.drink_type.name})}),(0,_.jsx)("li",{className:"product__navigation-item",children:"—"}),(0,_.jsx)("li",{className:"product__navigation-item",children:W.name})]}),(0,_.jsx)("h2",{className:"product__name",children:W.name}),(0,_.jsxs)("p",{className:"product__vendor",children:["Від"," ",(0,_.jsx)(l.N_,{className:"product__vendor-link",to:"/vendorslist/".concat(W.producer.id),children:W.producer.name})]}),(0,_.jsxs)("div",{className:"product__rating-block",children:[(0,_.jsx)(m.A,{rating:Re}),(0,_.jsxs)("div",{className:"product__comments",children:[(0,_.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M19 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V21L6.467 18.4C6.81319 18.1404 7.23426 18 7.667 18H19C19.5304 18 20.0391 17.7893 20.4142 17.4142C20.7893 17.0391 21 16.5304 21 16V6C21 5.46957 20.7893 4.96086 20.4142 4.58579C20.0391 4.21071 19.5304 4 19 4Z",stroke:"#CCCCCC",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,_.jsx)("span",{className:"product__comments-count",children:W.comments.length})]})]}),(0,_.jsxs)("p",{className:"product__price",children:[W.price," грн"]}),(0,_.jsxs)("div",{className:"product__characteristics",children:[(0,_.jsx)("h3",{className:"product__characteristics-title",children:"Характеристики"}),(0,_.jsxs)("dl",{className:"product__details",children:[(null==W?void 0:W.drink_type.name)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Категорія напою"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.drink_type.name})]}),(null==W?void 0:W.strength)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Міцність"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.strength})]}),(null==W?void 0:W.volume.name)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Об’єм"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.volume.name})]}),(null==W?void 0:W.taste_parameters)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Параметри смаку"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.taste_parameters})]}),(null==W?void 0:W.tastes_together)&&(0,_.jsxs)("div",{className:"product__details-block",children:[(0,_.jsx)("dt",{className:"product__details-term",children:"Смакує разом"}),(0,_.jsx)("dd",{className:"product__details-description",children:null==W?void 0:W.tastes_together})]})]})]})]})]}),(0,_.jsxs)("section",{className:"product__content",children:[(0,_.jsx)("div",{className:"product__tabs",children:Te.map((function(e){return(0,_.jsx)("button",{className:"product__tab-btn",onClick:function(){return Q(e)},disabled:e===K,children:e},e)}))}),Ue]})]}),(0,_.jsx)("div",{className:"product__buy",children:(0,_.jsxs)("div",{className:"product__buy-wrapper",children:[(0,_.jsx)("h3",{className:"product__buy-title",children:"ЗАМОВИТИ"}),(0,_.jsxs)("div",{className:"product__buy-block",children:[(0,_.jsxs)("p",{className:"product__buy-vendor",children:["Придбати напряму ",(0,_.jsx)("br",{}),"від виробника"]}),(0,_.jsx)("p",{className:"product__buy-text",children:"Перейти на сторінку"}),(0,_.jsx)("a",{className:"product__buy-link",href:W.site_link,target:"_blank",rel:"noreferrer",children:W.producer.name})]})]})})]}),(0,_.jsx)(j.s,{vendor:W.producer.name})]}),se&&(0,_.jsx)(N.a,{onClickOutside:function(){te(!1),O(!1),Qe()},children:C?(0,_.jsx)(x.D,{}):S?(0,_.jsxs)("div",{className:"product__modal-thank",children:[(0,_.jsx)("h2",{className:"product__modal-title",children:"ДЯКУЄМО!"}),(0,_.jsx)("p",{className:"product__thank-text",children:"Ви залишили свій відгук"}),(0,_.jsx)("button",{className:"product__thank-btn",onClick:function(){O(!1),te(!1)},children:"Повернутися на сторінку товару"})]}):(0,_.jsxs)("div",{className:"product__modal",children:[(0,_.jsx)("h2",{className:"product__modal-title",children:"ЗАЛИШТЕ ВІДГУК"}),(0,_.jsx)("p",{className:"product__modal-text",children:"Будь ласка розкажіть про свої враження від напою"}),(0,_.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),ne.length<2||ne.length>32?Ze(!1):Ze(!0),/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(ie)?Fe(!0):Fe(!1),ge.length?Ie(!0):Ie(!1),Je(!!_e),!(ne.length<2||ne.length>32)&&/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(ie)&&ge.length&&0!==_e){var s={name:ne,email:ie,body:ge,rating:_e,drink:M,advantages:Ce,disadvantages:Se};A(!0),o.o.sendComment(s).then((function(e){Qe(),O(!0),q((function(s){return null!==s?y(y({},s),{},{comments:[].concat((0,c.A)(null==s?void 0:s.comments),[e])}):s}))})).catch((function(){return Z(!0)})).finally((function(){return A(!1)}))}},children:[(0,_.jsxs)("fieldset",{className:"product__form-group",children:[(0,_.jsxs)("label",{className:"product__form-field",children:[(0,_.jsxs)("span",{className:"product__form-text",children:["Введіть ваше ім’я"," ",(0,_.jsx)("span",{className:"product__star",children:"*"})]}),(0,_.jsx)(v.p,{value:ne,onChange:function(e){re(e.target.value),Ze(!0)},name:"email",placeholder:"Людмила...",type:"text",hasError:!ze,classname:"product__short-input"})]}),(0,_.jsxs)("label",{className:"product__form-field",children:[(0,_.jsxs)("span",{className:"product__form-text",children:["Введіть ваш e-mail"," ",(0,_.jsx)("span",{className:"product__star",children:"*"})]}),(0,_.jsx)(v.p,{value:ie,onChange:function(e){oe(e.target.value),Fe(!0)},name:"email",placeholder:"****@gmail.com",type:"text",hasError:!Be,classname:"product__short-input"})]}),(0,_.jsxs)("div",{className:"product__form-field",children:[(0,_.jsxs)("span",{className:"product__form-text",children:["Яку оцінку ви можете поставити напою?"," ",(0,_.jsx)("span",{className:"product__star",children:"*"})]}),(0,_.jsx)("div",{className:"product__form-stars",children:[1,2,3,4,5].map((function(e){return(0,_.jsx)("button",{type:"button",className:"product__form-star",onClick:function(){return pe(e)},onMouseEnter:function(){Je(!0),Ne(e)},onMouseLeave:function(){return Ne(0)},children:(0,_.jsx)("svg",{className:g()("product__form-svg",{"product__form-svg--error":!Ge}),width:"22",height:"20",viewBox:"0 0 22 20",fill:Ke>=e?"#0F1720":"none",xmlns:"http://www.w3.org/2000/svg",children:(0,_.jsx)("path",{d:"M10.8894 16.3209L10.6323 16.1663L10.3749 16.3204L5.2698 19.3774L5.26891 19.378C4.70761 19.7157 4.03667 19.2149 4.18061 18.5997L5.53372 12.8283L5.60291 12.5331L5.37322 12.3353L0.858583 8.44676L0.858407 8.44661C0.372907 8.02884 0.631076 7.23489 1.27287 7.18414L1.27287 7.18415L1.2755 7.18393L7.21711 6.68258L7.51672 6.65729L7.63486 6.3808L9.95984 0.93931L9.96066 0.937361C10.2069 0.354213 11.0567 0.354213 11.3029 0.937362L11.3036 0.938936L13.6285 6.39265L13.7466 6.6695L14.0465 6.6948L19.9881 7.19616L19.9907 7.19637C20.6325 7.24712 20.8907 8.04106 20.4052 8.45884L20.405 8.45899L15.8903 12.3475L15.6607 12.5454L15.7299 12.8405L17.083 18.6119C17.2269 19.2272 16.556 19.7279 15.9947 19.3902L15.9945 19.3901L10.8894 16.3209Z",stroke:Ge?"#0F1720":"#d4af37"})})},e)}))})]}),(0,_.jsxs)("label",{className:"product__form-field",children:[(0,_.jsxs)("span",{className:"product__form-text",children:["Розкажіть про напій"," ",(0,_.jsx)("span",{className:"product__star",children:"*"})]}),(0,_.jsx)("textarea",{className:g()("product__form-textarea",{"product__form-textarea--error":!$e}),placeholder:"Я залишилася задоволена покупкою, адже...",value:ge,onChange:function(e){be(e.target.value),Ie(!0)}})]}),(0,_.jsxs)("label",{className:"product__form-field",children:[(0,_.jsx)("span",{className:"product__form-text",children:"Плюси:"}),(0,_.jsx)(v.p,{value:Ce,onChange:function(e){return Ae(e.target.value)},name:"advantages",placeholder:"Мені сподобалося, що...",type:"text",classname:"product__long-input"})]}),(0,_.jsxs)("label",{className:"product__form-field",children:[(0,_.jsx)("span",{className:"product__form-text",children:"Мінуси:"}),(0,_.jsx)(v.p,{value:Se,onChange:function(e){return Oe(e.target.value)},name:"disadvantages",placeholder:"Мені не сподобалося, що...",type:"text",classname:"product__long-input"})]})]}),(0,_.jsx)("button",{className:"product__modal-submit",type:"submit",children:"Надіслати відгук"})]})]})})]})}}}]);
//# sourceMappingURL=33.bundle.js.map