"use strict";(self.webpackChunk_marcin_migdal_m_test_library=self.webpackChunk_marcin_migdal_m_test_library||[]).push([[7],{"./src/components/inputs/Textfield/Textfield.stories.tsx":(O,n,e)=>{e.r(n),e.d(n,{LabelLeft:()=>o,LabelRight:()=>f,TextfieldLarge:()=>a,TextfieldMedium:()=>c,TextfieldSmall:()=>t,TextfieldWithPrefix:()=>p,__namedExportsOrder:()=>m,default:()=>s});var u=e("./src/components/inputs/Textfield/Textfield.tsx");const s={title:"Components/Inputs/Textfield",component:u.default},t={args:{label:"Label",labelType:"floating",size:"small"}},c={args:{label:"Label",labelType:"floating",size:"medium"}},a={args:{label:"Label",labelType:"floating",size:"large"}},o={args:{label:"Label",placeholder:"Placeholder",labelType:"left",size:"medium"}},f={args:{label:"Label",placeholder:"Placeholder",labelType:"right",size:"medium"}},p={args:{label:"Label",placeholder:"Placeholder",prefix:"Prefix",labelType:"right",size:"medium"}},m=["TextfieldSmall","TextfieldMedium","TextfieldLarge","LabelLeft","LabelRight","TextfieldWithPrefix"]},"./src/components/inputs/Textfield/Textfield.tsx":(O,n,e)=>{e.r(n),e.d(n,{default:()=>y});var u=e("./node_modules/classnames/index.js"),s=e.n(u),t=e("./node_modules/react/index.js"),c=e("./src/hooks/index.ts"),a=e("./src/components/global-types.ts"),o=e("./src/components/inputs/_inputsComponents/index.ts"),f=e("./src/components/inputs/_inputsComponents/InputError/helpers/getInputsErrorStyle.ts"),p=e("./src/components/inputs/_inputsComponents/StandAloneTextfield/StandAloneTextfield.tsx"),m=e("./src/components/inputs/_inputUtils/getInputStyle.ts");const y=A=>{const{value:E=void 0,disabled:x=!1,onChange:b,onBlur:g,onFocus:h,onClick:L,onDebounce:W,debounceDelay:v=300,label:i=void 0,error:_=void 0,labelType:d=`${a.InputLabel.LEFT}`,placeholder:S=void 0,labelWidth:T=30,floatingInputWidth:P=100,defaultValue:B,size:C=a.ComponentSize.MEDIUM,disableDefaultMargin:R=!1,classNamesObj:r,...D}=A,[U,F]=(0,t.useState)(B||""),[K,I]=(0,t.useState)(!1),M=E!==void 0?E:U,[z]=(0,c.useDebounceFunction)(W,v),N=l=>{z(l,l.target.value),b&&b(l,l.target.value),F(l.target.value)},V=l=>{h&&h(l),I(!0)},j=l=>{L&&L(l)},X=l=>{I(!1),g&&g(l,l.target.value)};return t.createElement(o.InputContainer,{disabled:x,className:s()("m-textfield-container",r?.container),size:C,error:_,disableDefaultMargin:R},t.createElement(p.StandAloneTextfield,{onChange:N,onBlur:X,onFocus:V,onClick:j,placeholder:d===a.InputLabel.FLOATING?void 0:S||(i?`${i}...`:""),style:(0,m.getInputStyle)(d,i,T,P),disabled:x,className:r?.input,value:M,size:C,...D}),i&&t.createElement(o.InputsLabel,{label:i,labelType:d,className:s()("m-textfield-label",r?.label),labelWidth:T,isFocused:K,isFilled:!!M,prefix:D.prefix}),_&&t.createElement(o.InputError,{style:(0,f.getInputsErrorStyle)(d,T,P),className:s()("textfield-error",r?.error),error:_}))}}}]);
