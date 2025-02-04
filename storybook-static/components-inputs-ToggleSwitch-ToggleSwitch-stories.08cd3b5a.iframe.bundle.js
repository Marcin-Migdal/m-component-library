"use strict";(self.webpackChunk_marcin_migdal_m_test_library=self.webpackChunk_marcin_migdal_m_test_library||[]).push([[121],{"./src/components/inputs/ToggleSwitch/ToggleSwitch.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleSwitch_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),global_types=__webpack_require__("./src/components/global-types.ts"),_inputsComponents=__webpack_require__("./src/components/inputs/_inputsComponents/index.ts"),utils=__webpack_require__("./src/utils/index.ts");const getToggleSwitchErrorStyle=(toggleSwitchContainerElement,labelType,labelWidth)=>{const toggleSwitchSizeCalcProperty=(0,utils.Po)(toggleSwitchContainerElement,"--toggle-switch-input-size"),numbers=toggleSwitchSizeCalcProperty?.match(/\d+/g);let toggleSwitchWidth=20;if(numbers)if(2===numbers.length){toggleSwitchWidth=parseInt(numbers[0],10)-parseInt(numbers[1],10)}else 1===numbers.length&&(toggleSwitchWidth=parseInt(numbers[0],10));toggleSwitchWidth*=2;const additionalDistance=`${toggleSwitchWidth+parseInt((0,utils.Po)(document.body,"--error-icon-margin")||"8px")+2*(0,utils._x)(document.body,"--border-width",2)}px`;return{left:labelType===global_types.xC.LEFT?`calc(${labelWidth}% + ${additionalDistance})`:additionalDistance}};var getInputStyle=__webpack_require__("./src/components/inputs/_inputUtils/getInputStyle.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ToggleSwitch=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/ToggleSwitch/ToggleSwitch.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ToggleSwitch.A,options);ToggleSwitch.A&&ToggleSwitch.A.locals&&ToggleSwitch.A.locals;const ToggleSwitch_ToggleSwitch_ToggleSwitch=({checked:externalChecked,name,onChange,label,error,labelType=global_types.xC.LEFT,labelWidth=30,size=global_types.H7.MEDIUM,disabled=!1,readOnly=!1,disableDefaultMargin=!1,classNamesObj,...otherProps})=>{const toggleSwitchContainerRef=(0,react.useRef)(null),[internalChecked,setInternalChecked]=(0,react.useState)(!1),[toggleSwitchId]=(0,react.useState)((0,v4.A)()),controlled=void 0!==externalChecked,checked=controlled?externalChecked:internalChecked;return react.createElement(_inputsComponents.A0,{disabled,ref:toggleSwitchContainerRef,className:classnames_default()("m-toggle-switch-container",classNamesObj?.container),size,error,disableDefaultMargin},react.createElement("div",{style:(0,getInputStyle.w)(labelType,label,labelWidth,void 0),className:classnames_default()("m-toggle-switch-input-wrapper",classNamesObj?.inputWrapper)},react.createElement("label",null,react.createElement("input",{id:toggleSwitchId,readOnly:!0,className:"m-toggle-switch-input",type:"checkbox",checked,onChange:e=>{if(readOnly)return void e.preventDefault();const _checked=e.target.checked;onChange&&onChange(e,_checked),!controlled&&setInternalChecked(_checked)},name,disabled,...otherProps}),react.createElement("span",{className:classnames_default()("m-input","m-toggle-switch-slider",classNamesObj?.input,labelType)}))),label&&react.createElement(_inputsComponents.Eg,{htmlFor:toggleSwitchId,label,labelType,className:classnames_default()("m-toggle-switch-label",classNamesObj?.label),labelWidth}),error&&toggleSwitchContainerRef.current&&react.createElement(_inputsComponents.dz,{style:getToggleSwitchErrorStyle(toggleSwitchContainerRef.current,labelType,labelWidth),className:classnames_default()("checkbox-error",classNamesObj?.error),error}))},inputs_ToggleSwitch_ToggleSwitch=ToggleSwitch_ToggleSwitch_ToggleSwitch;ToggleSwitch_ToggleSwitch_ToggleSwitch.__docgenInfo={description:"",methods:[],displayName:"ToggleSwitch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"undefined",computed:!0}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: ChangeEvent<HTMLInputElement>, value: boolean) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"event"},{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""},classNamesObj:{required:!1,tsType:{name:"signature",type:"object",raw:"{\r\n  container?: string;\r\n  inputWrapper?: string;\r\n  input?: string;\r\n  label?: string;\r\n  error?: string;\r\n}",signature:{properties:[{key:"container",value:{name:"string",required:!1}},{key:"inputWrapper",value:{name:"string",required:!1}},{key:"input",value:{name:"string",required:!1}},{key:"label",value:{name:"string",required:!1}},{key:"error",value:{name:"string",required:!1}}]}},description:""},labelType:{defaultValue:{value:"SimpleInputLabel.LEFT",computed:!0},required:!1},labelWidth:{defaultValue:{value:"30",computed:!1},required:!1},size:{defaultValue:{value:"ComponentSize.MEDIUM",computed:!0},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},readOnly:{defaultValue:{value:"false",computed:!1},required:!1},disableDefaultMargin:{defaultValue:{value:"false",computed:!1},required:!1}}};const ToggleSwitch_stories={title:"Components/Inputs/ToggleSwitch",component:inputs_ToggleSwitch_ToggleSwitch,args:{label:"ToggleSwitch label"}},Simple={},__namedExportsOrder=["Simple"];Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"{}",...Simple.parameters?.docs?.source}}}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/inputs/ToggleSwitch/ToggleSwitch.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.common-wrapper-container .m-toggle-switch-container .m-toggle-switch-input:checked~.m-toggle-switch-slider{background-color:var(--toggle-switch-color)}.common-wrapper-container .m-toggle-switch-container .m-toggle-switch-input:checked~.m-toggle-switch-slider:hover{background-color:var(--toggle-switch-color)}.common-wrapper-container .m-toggle-switch-container .m-toggle-switch-input:checked~.m-toggle-switch-slider:hover::before{background-color:var(--input-hover-background-color)}.common-wrapper-container .m-toggle-switch-container .m-toggle-switch-input:checked~.m-toggle-switch-slider::before{background-color:var(--input-background-color)}.common-wrapper-container .m-toggle-switch-container .m-toggle-switch-slider{background-color:var(--input-background-color)}.common-wrapper-container .m-toggle-switch-container .m-toggle-switch-slider::before{background-color:var(--toggle-switch-color)}.m-toggle-switch-container.small{--toggle-switch-input-size: calc(var(--input-height) - 8px)}.m-toggle-switch-container.medium{--toggle-switch-input-size: calc(var(--input-height) - 12px)}.m-toggle-switch-container.large{--toggle-switch-input-size: calc(var(--input-height) - 14px)}.m-toggle-switch-container.error .m-toggle-switch-input-wrapper .m-toggle-switch-slider::before{top:calc(var(--border-width) - 1px);left:calc(var(--border-width) - 1px)}.m-toggle-switch-container .m-toggle-switch-input-wrapper{display:flex;align-items:center;justify-content:flex-start;width:fit-content;height:100%}.m-toggle-switch-container .m-toggle-switch-input-wrapper .m-toggle-switch-input{display:none}.m-toggle-switch-container .m-toggle-switch-input-wrapper .m-toggle-switch-input:checked~.m-toggle-switch-slider::before{transform:translateX(var(--toggle-switch-input-size))}.m-toggle-switch-container .m-toggle-switch-input-wrapper .m-toggle-switch-slider{position:relative;display:block;width:calc(var(--toggle-switch-input-size)*2);height:var(--toggle-switch-input-size);border-radius:calc(var(--toggle-switch-input-size)/2);border:unset;transition:var(--transition)}.m-toggle-switch-container .m-toggle-switch-input-wrapper .m-toggle-switch-slider::before{content:"";position:absolute;top:var(--border-width);left:var(--border-width);height:calc(var(--toggle-switch-input-size) - var(--border-width)*2);width:calc(var(--toggle-switch-input-size) - var(--border-width)*2);border-radius:50%;transition:var(--transition)}',"",{version:3,sources:["webpack://./src/components/inputs/ToggleSwitch/ToggleSwitch.theme.scss","webpack://./src/components/inputs/ToggleSwitch/ToggleSwitch.scss"],names:[],mappings:"AAIQ,4GACE,2CAAA,CAEA,kHACE,2CAAA,CAEA,0HACE,oDAAA,CAIJ,oHACE,8CAAA,CAMR,6EACE,8CAAA,CAEA,qFACE,2CAAA,CCvBN,iCACE,2DAAA,CAGF,kCACE,4DAAA,CAGF,iCACE,4DAAA,CAMI,gGACE,mCAAA,CACA,oCAAA,CAMR,0DACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,iBAAA,CACA,WAAA,CAEA,iFACE,YAAA,CAGE,yHACE,qDAAA,CAKN,kFACE,iBAAA,CACA,aAAA,CAEA,6CAAA,CACA,sCAAA,CACA,qDAAA,CACA,YAAA,CAEA,4BAAA,CAEA,0FACE,UAAA,CAEA,iBAAA,CACA,uBAAA,CACA,wBAAA,CAEA,oEAAA,CACA,mEAAA,CACA,iBAAA,CAEA,4BAAA",sourcesContent:[".common-wrapper-container {\r\n  .m-toggle-switch-container {\r\n    .m-toggle-switch-input {\r\n      &:checked {\r\n        & ~ .m-toggle-switch-slider {\r\n          background-color: var(--toggle-switch-color);\r\n\r\n          &:hover {\r\n            background-color: var(--toggle-switch-color);\r\n\r\n            &::before {\r\n              background-color: var(--input-hover-background-color);\r\n            }\r\n          }\r\n\r\n          &::before {\r\n            background-color: var(--input-background-color);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .m-toggle-switch-slider {\r\n      background-color: var(--input-background-color);\r\n\r\n      &::before {\r\n        background-color: var(--toggle-switch-color);\r\n      }\r\n    }\r\n  }\r\n}\r\n",'@use "./ToggleSwitch.theme.scss";\r\n\r\n.m-toggle-switch-container {\r\n  &.small {\r\n    --toggle-switch-input-size: calc(var(--input-height) - 8px);\r\n  }\r\n\r\n  &.medium {\r\n    --toggle-switch-input-size: calc(var(--input-height) - 12px);\r\n  }\r\n\r\n  &.large {\r\n    --toggle-switch-input-size: calc(var(--input-height) - 14px);\r\n  }\r\n\r\n  &.error {\r\n    .m-toggle-switch-input-wrapper {\r\n      .m-toggle-switch-slider {\r\n        &::before {\r\n          top: calc(var(--border-width) - 1px);\r\n          left: calc(var(--border-width) - 1px);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  .m-toggle-switch-input-wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    width: fit-content;\r\n    height: 100%;\r\n\r\n    .m-toggle-switch-input {\r\n      display: none;\r\n\r\n      &:checked ~ .m-toggle-switch-slider {\r\n        &::before {\r\n          transform: translateX(var(--toggle-switch-input-size));\r\n        }\r\n      }\r\n    }\r\n\r\n    .m-toggle-switch-slider {\r\n      position: relative;\r\n      display: block;\r\n\r\n      width: calc(var(--toggle-switch-input-size) * 2);\r\n      height: var(--toggle-switch-input-size);\r\n      border-radius: calc(var(--toggle-switch-input-size) / 2);\r\n      border: unset;\r\n\r\n      transition: var(--transition);\r\n\r\n      &::before {\r\n        content: "";\r\n\r\n        position: absolute;\r\n        top: var(--border-width);\r\n        left: var(--border-width);\r\n\r\n        height: calc(var(--toggle-switch-input-size) - (var(--border-width) * 2));\r\n        width: calc(var(--toggle-switch-input-size) - (var(--border-width) * 2));\r\n        border-radius: 50%;\r\n\r\n        transition: var(--transition);\r\n      }\r\n    }\r\n  }\r\n}\r\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);