"use strict";(self.webpackChunk_marcin_migdal_m_test_library=self.webpackChunk_marcin_migdal_m_test_library||[]).push([[527],{"./src/components/inputs/Slider/Slider.stories.tsx":(u,o,t)=>{t.r(o),t.d(o,{SliderStory:()=>B,__namedExportsOrder:()=>S,default:()=>R});var r=t("./node_modules/classnames/index.js"),s=t.n(r),e=t("./node_modules/react/index.js"),l=t("./src/hooks/index.ts"),n=t("./src/components/global-types.ts"),a=t("./src/components/inputs/_inputsComponents/index.ts"),f=t("./src/components/inputs/_inputsComponents/InputError/helpers/getInputsErrorStyle.ts"),v=t("./src/components/inputs/_inputUtils/getInputStyle.ts");const T=7,J=($,U,m)=>{const{width:C}=$.getBoundingClientRect(),i=T-T*m/U*2;let d=0;return m===0?d=C-i:d=C-i-m/U*C,{transform:`translateX(calc(50% - ${d}px))`}};var W=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),Q=t.n(W),K=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),Z=t.n(K),z=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),O=t.n(z),I=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),ot=t.n(I),st=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),k=t.n(st),q=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),tt=t.n(q),x=t("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/Slider/Slider.scss"),y={};y.styleTagTransform=tt(),y.setAttributes=ot(),y.insert=O().bind(null,"head"),y.domAPI=Z(),y.insertStyleElement=k();var F=Q()(x.default,y);const _=x.default&&x.default.locals?x.default.locals:void 0,R={title:"Components/Inputs/Slider",component:({value:$,min:U,max:m,step:C=1,initialValue:i,onChange:d,onDebounce:A,debounceDelay:c=300,label:g,labelType:p=n.InputLabel.LEFT,labelWidth:E=30,floatingInputWidth:D=100,size:V=n.ComponentSize.MEDIUM,name:w=void 0,hideValuePreview:Y=!1,valuePreviewType:M="bottom-dynamic",disabled:X=!1,readOnly:N=!1,disableDefaultMargin:h=!1,error:b,classNamesObj:j})=>{const L=(0,e.useRef)(null),[et,ut]=(0,e.useState)(i||U),[mt,lt]=(0,e.useState)({}),at=$!==void 0,G=at?$:et;let H=(0,v.getInputStyle)(p,g,E,D);const[ct]=(0,l.useDebounceFunction)(A,c);b&&(H={...H,width:`calc(${H.width} - 2rem)`}),(0,e.useLayoutEffect)(()=>{if(!L.current)return;if(M.includes("static")){lt({});return}const P=new ResizeObserver(()=>{L.current&&lt(J(L.current,m,G))});return P.observe(document.body),P.observe(L.current),()=>{P.disconnect()}},[G,M]);const pt=P=>{if(N){P.preventDefault();return}const nt=parseFloat(P.target.value);ct(P,nt),d&&d(P,nt),at||ut(nt)};return e.createElement(a.InputContainer,{disabled:X,className:s()("m-slider-container",j?.container),size:V,error:b,style:{"--slider-value":G},disableDefaultMargin:h},e.createElement("input",{readOnly:N,disabled:X,ref:L,type:"range",name:w,min:U,max:m,step:C,value:G,onChange:pt,style:H,className:s()("m-input m-slider",j?.input)}),g&&e.createElement(a.InputsLabel,{label:g,labelType:p,className:s()("m-slider-label",j?.label),labelWidth:E,forceFloating:p===n.InputLabel.FLOATING}),!Y&&e.createElement("div",{className:"m-relative-value-container"},e.createElement("span",{className:s()("m-slider-value-preview",j?.valuePreview,M),style:mt},G)),b&&e.createElement(a.InputError,{style:(0,f.getInputsErrorStyle)(p,E,D),className:s()("textfield-error",j?.error),error:b}))}},B={args:{min:0,max:100,step:.1,label:"Range"}},S=["SliderStory"]},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/Slider/Slider.scss":(u,o,t)=>{t.r(o),t.d(o,{default:()=>a});var r=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(r),e=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(e),n=l()(s());n.push([u.id,".common-wrapper-container .m-slider-container.disabled .m-slider::-webkit-slider-thumb{background:var(--input-disabled-text-color) !important}.common-wrapper-container .m-slider-container .m-slider::-webkit-slider-thumb{background:var(--slider-thumb-color) !important}.m-slider-container:not(.disabled) .m-slider{cursor:pointer}.m-slider-container .m-slider{-webkit-appearance:none;appearance:none;height:4px;border-radius:4px;margin:unset;outline:none;opacity:1}.m-slider-container .m-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:14px;height:14px;border-radius:50%}.m-slider-container .m-slider:not(:disabled)::-webkit-slider-thumb{cursor:pointer}.m-slider-container .m-relative-value-container{position:relative}.m-slider-container .m-relative-value-container .m-slider-value-preview{position:absolute;font-size:14px;--slider-value-preview-y-offset: 8px;--slider-value-preview-static-x-offset: 4px}.m-slider-container .m-relative-value-container .m-slider-value-preview.top-static{bottom:var(--slider-value-preview-y-offset);left:var(--slider-value-preview-static-x-offset);transform:translateX(-100%)}.m-slider-container .m-relative-value-container .m-slider-value-preview.bottom-static{top:var(--slider-value-preview-y-offset);left:var(--slider-value-preview-static-x-offset);transform:translateX(-100%)}.m-slider-container .m-relative-value-container .m-slider-value-preview.top-dynamic{bottom:var(--slider-value-preview-y-offset);right:0}.m-slider-container .m-relative-value-container .m-slider-value-preview.bottom-dynamic{top:var(--slider-value-preview-y-offset);right:0}",""]);const a=n},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/_inputsComponents/InputContainer/InputContainer.scss":(u,o,t)=>{t.r(o),t.d(o,{default:()=>a});var r=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(r),e=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(e),n=l()(s());n.push([u.id,".common-wrapper-container .m-input-container{color:var(--input-text-color)}.common-wrapper-container .m-input-container.disabled .m-input{background-color:var(--input-disabled-background-color);color:var(--input-disabled-text-color)}.common-wrapper-container .m-input-container.disabled .m-input::placeholder{color:var(--input-disabled-text-color)}.common-wrapper-container .m-input-container:not(.disabled) .m-input:not(:disabled)::placeholder{color:var(--input-placeholder-color)}.common-wrapper-container .m-input-container:not(.disabled) .m-input:not(:disabled):focus,.common-wrapper-container .m-input-container:not(.disabled) .m-input:not(:disabled):hover{background-color:var(--input-hover-background-color);color:var(--input-hover-color)}.common-wrapper-container .m-input-container:not(.disabled) .m-input:not(:disabled):focus::placeholder,.common-wrapper-container .m-input-container:not(.disabled) .m-input:not(:disabled):hover::placeholder{color:var(--input-hover-placeholder-color)}.common-wrapper-container .m-input-container .m-input{color:inherit;background:var(--input-background-color);border:1px solid rgba(0,0,0,0)}.common-wrapper-container .m-input-container .m-input:not(.m-slider):focus{box-shadow:var(--big-box-shadow) var(--box-shadow-color)}.m-input-container{position:relative;display:flex;align-items:center;height:var(--input-height);width:100%}.m-input-container.bottom-margin{margin-bottom:var(--input-margin-bottom)}.m-input-container.small{--input-height: var(--small-input-height);--input-font-size: var(--small-input-font-size);--input-padding-left: var(--small-input-padding-left)}.m-input-container.medium{--input-height: var(--medium-input-height);--input-font-size: var(--medium-input-font-size);--input-padding-left: var(--medium-input-padding-left)}.m-input-container.large{--input-height: var(--large-input-height);--input-font-size: var(--large-input-font-size);--input-padding-left: var(--large-input-padding-left)}",""]);const a=n},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/_inputsComponents/InputError/InputError.scss":(u,o,t)=>{t.r(o),t.d(o,{default:()=>a});var r=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(r),e=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(e),n=l()(s());n.push([u.id,".common-wrapper-container .m-input-container.error .m-input{border:1px solid var(--failure-color);color:var(--failure-color)}.common-wrapper-container .m-input-container.error .m-input:focus{box-shadow:var(--big-box-shadow) var(--failure-color)}.common-wrapper-container .m-input-container.error .m-input:hover:not(:disabled)::placeholder,.common-wrapper-container .m-input-container.error .m-input:not(:disabled)::placeholder{color:var(--failure-color)}.common-wrapper-container .m-input-container.error .error-icon{color:var(--failure-color)}.common-wrapper-container .m-checkbox-container.error .m-checkbox{border-width:2px}.common-wrapper-container .m-dropdown-container.error .m-dropdown-clear-icon{color:var(--failure-color)}.common-wrapper-container .m-dropdown-container.error .m-dropdown-clear-icon:hover{color:var(--failure-light-color)}.error-icon{position:absolute;top:50%;transform:translateY(-50%)}",""]);const a=n},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/_inputsComponents/InputsLabel/InputsLabel.scss":(u,o,t)=>{t.r(o),t.d(o,{default:()=>a});var r=t("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),s=t.n(r),e=t("./node_modules/css-loader/dist/runtime/api.js"),l=t.n(e),n=l()(s());n.push([u.id,".common-wrapper-container .m-input-label.right,.common-wrapper-container .m-input-label.left{color:var(--input-label-color)}.common-wrapper-container .m-input-label.floating{color:var(--input-placeholder-color)}.common-wrapper-container .m-input-label.floating.filled,.common-wrapper-container .m-input-label.floating.focused,.common-wrapper-container .m-input-label.floating.forced-floating{color:var(--input-label-color)}.common-wrapper-container .m-input-container.disabled .m-input-label.floating:not(.filled):not(.focused):not(.forced-floating){color:var(--input-disabled-text-color)}.common-wrapper-container .m-input-container:not(.disabled) .m-input:hover+.m-input-label.floating:not(.filled):not(.focused):not(.forced-floating){color:var(--input-hover-placeholder-color)}.m-input-container.error .m-input-label{color:var(--failure-color) !important}.m-input-label{position:absolute;font-size:var(--input-font-size);transition:var(--transition)}.m-input-label.pointer-event{pointer-events:none}.m-input-label.floating{padding-left:var(--input-padding-left);z-index:2}.m-input-label.floating.forced-floating,.m-input-label.floating.filled,.m-input-label.floating.focused{top:0;transform:translateY(calc(-100% - 1px));font-size:.75rem}.m-input-label.left,.m-input-label.right{height:100%;position:absolute;top:0;display:flex;align-items:center}.m-input-label.left{left:0}.m-input-label.right{padding-left:var(--input-padding-left)}.m-textarea-label.floating{top:calc(var(--input-padding-left) - 4px)}.m-icon-field-label.floating,.m-color-picker-label.floating{top:50%;padding-left:calc(var(--input-height) + .5rem + var(--input-padding-left));transform:translateY(-50%)}.m-icon-field-label.floating.forced-floating,.m-icon-field-label.floating.filled,.m-icon-field-label.floating.focused,.m-color-picker-label.floating.forced-floating,.m-color-picker-label.floating.filled,.m-color-picker-label.floating.focused{top:0;padding-left:var(--input-padding-left);transform:translateY(calc(-100% - 1px));font-size:.75rem}",""]);const a=n},"./src/components/inputs/_inputUtils/getInputStyle.ts":(u,o,t)=>{t.r(o),t.d(o,{getInputStyle:()=>s});var r=t("./src/components/global-types.ts");function s(e,l,n,a){const f=()=>e===r.InputLabel.LEFT&&l?`${n}%`:"unset",v=()=>e===r.InputLabel.FLOATING?`${a}%`:l?`${100-n}%`:"100%";return{marginLeft:f(),width:v()}}},"./src/components/inputs/_inputsComponents/InputError/helpers/getInputsErrorStyle.ts":(u,o,t)=>{t.r(o),t.d(o,{getInputsErrorStyle:()=>e});var r=t("./src/utils/index.ts"),s=t("./src/components/global-types.ts");const e=(l,n,a)=>{const f=parseInt((0,r.getCssProperty)(document.body,"--error-icon-size","16px")),v=parseInt((0,r.getCssProperty)(document.body,"--error-icon-margin","8px"));return l===s.InputLabel.LEFT?{right:`${v}px`}:l===s.InputLabel.RIGHT?{right:`calc(${n}% + ${v}px)`}:{left:`calc(${a}% - ${f}px - ${v}px)`}}},"./src/components/inputs/_inputsComponents/index.ts":(u,o,t)=>{t.r(o),t.d(o,{InputContainer:()=>q,InputError:()=>rt,InputsLabel:()=>C});var r=t("./node_modules/classnames/index.js"),s=t.n(r),e=t("./node_modules/react/index.js"),l=t("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),n=t.n(l),a=t("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),f=t.n(a),v=t("./node_modules/style-loader/dist/runtime/insertBySelector.js"),T=t.n(v),J=t("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),W=t.n(J),Q=t("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),K=t.n(Q),Z=t("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),z=t.n(Z),O=t("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/_inputsComponents/InputContainer/InputContainer.scss"),I={};I.styleTagTransform=z(),I.setAttributes=W(),I.insert=T().bind(null,"head"),I.domAPI=f(),I.insertStyleElement=K();var ot=n()(O.default,I);const st=O.default&&O.default.locals?O.default.locals:void 0;function k({children:i,className:d,size:A,error:c,style:g={},disabled:p,disableDefaultMargin:E},D){return e.createElement("div",{ref:D,style:g,className:s()("m-input-container",d,A,{error:c,disabled:p,"bottom-margin":!E})},i)}const q=(0,e.forwardRef)(k);var tt=t("./node_modules/@fortawesome/react-fontawesome/index.es.js"),x=t("./src/utils/getPosition/getPosition-types.ts"),y=t("./src/components/Miscellaneous/index.ts"),F=t("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/_inputsComponents/InputError/InputError.scss"),_={};_.styleTagTransform=z(),_.setAttributes=W(),_.insert=T().bind(null,"head"),_.domAPI=f(),_.insertStyleElement=K();var it=n()(F.default,_);const dt=F.default&&F.default.locals?F.default.locals:void 0,rt=({style:i,className:d,error:A})=>{const c=(0,e.useRef)(null);return e.createElement(e.Fragment,null,e.createElement(tt.FontAwesomeIcon,{ref:c,icon:"exclamation-circle",className:s()("error-icon",d),style:i}),e.createElement(y.Tooltip,{targetRef:c,placement:x.Placement.RIGHT},A))};var R=t("./src/components/global-types.ts"),B=t("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/_inputsComponents/InputsLabel/InputsLabel.scss"),S={};S.styleTagTransform=z(),S.setAttributes=W(),S.insert=T().bind(null,"head"),S.domAPI=f(),S.insertStyleElement=K();var $=n()(B.default,S);const U=B.default&&B.default.locals?B.default.locals:void 0,m="0",C=({labelType:i,label:d,className:A,labelWidth:c,isFocused:g=!1,isFilled:p=!1,forceFloating:E=!1,dataId:D,prefix:V,htmlFor:w})=>{const Y=(0,e.useRef)(null),[M,X]=(0,e.useState)(m),N=(0,e.useMemo)(()=>{if(i===R.InputLabel.FLOATING){const h=g||p||E;return{style:{width:"fit-content",left:h?m:M},label:h?d:`${d}...`}}else return{style:{width:`${c}%`,left:i===R.InputLabel.RIGHT?`${`${100-c}%`}`:"0"},label:d}},[i,c,g,p,E,d,M]);return(0,e.useLayoutEffect)(()=>{if(i===R.InputLabel.FLOATING&&V){const h=Y.current,b=h?.parentElement?.querySelector(".m-textfield-prefix");if(h&&b){const j=parseFloat(window.getComputedStyle(h).paddingLeft),L=b.getBoundingClientRect().width,et=j||parseFloat(window.getComputedStyle(b).left);X(L?L+et:"0")}}else M!==m&&X(m)},[i,V]),e.createElement("label",{id:`input-label-${D}`,htmlFor:w,ref:Y,"data-id":D,style:N.style,className:s()("m-input-label",i,A,{focused:i===R.InputLabel.FLOATING&&g,filled:p,"forced-floating":E,"pointer-event":!w})},N.label)}}}]);
