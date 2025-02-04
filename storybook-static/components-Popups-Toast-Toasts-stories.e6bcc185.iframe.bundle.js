"use strict";(self.webpackChunk_marcin_migdal_m_test_library=self.webpackChunk_marcin_migdal_m_test_library||[]).push([[616],{"./src/components/Popups/Toast/Toasts.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ToastExample:()=>ToastExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Button/index.ts"),_ToastsContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Popups/Toast/ToastsContainer.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Popups",component:_ToastsContainer__WEBPACK_IMPORTED_MODULE_2__.A,args:{autoClose:!0,toastsPosition:"top-right"}},ToastExample={render:args=>{const toastRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.$,{icon:"thumbs-up",style:{backgroundColor:"var(--success-color)",borderColor:"var(--success-color)"},variant:"full",text:"Success",onClick:()=>toastRef.current?.addToast({type:"success",message:"Success toast message"})}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.$,{icon:"circle-xmark",style:{backgroundColor:"var(--failure-color)",borderColor:"var(--failure-color)"},variant:"full",text:"Failure",onClick:()=>toastRef.current?.addToast({type:"failure",message:"Failure toast message"})}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.$,{icon:"exclamation-circle",style:{backgroundColor:"var(--warning-color)",borderColor:"var(--warning-color)"},variant:"full",text:"Warning",onClick:()=>toastRef.current?.addToast({type:"warning",message:"Warning toast message"})}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.$,{icon:"info-circle",style:{backgroundColor:"var(--information-color)",borderColor:"var(--information-color)"},variant:"full",text:"Information",onClick:()=>toastRef.current?.addToast({type:"information",message:"Information toast message"})}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__.$,{icon:"times",text:"Clear",onClick:()=>toastRef.current?.clear()}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToastsContainer__WEBPACK_IMPORTED_MODULE_2__.A,{...args,ref:toastRef}))}},__namedExportsOrder=["ToastExample"];ToastExample.parameters={...ToastExample.parameters,docs:{...ToastExample.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    // eslint-disable-next-line react-hooks/rules-of-hooks\n    const toastRef = useRef<ToastHandler>(null);\n    return <>\r\n        <Button icon="thumbs-up" style={{\n        backgroundColor: "var(--success-color)",\n        borderColor: "var(--success-color)"\n      }} variant="full" text="Success" onClick={() => toastRef.current?.addToast({\n        type: "success",\n        message: "Success toast message"\n      })} />\r\n        <Button icon="circle-xmark" style={{\n        backgroundColor: "var(--failure-color)",\n        borderColor: "var(--failure-color)"\n      }} variant="full" text="Failure" onClick={() => toastRef.current?.addToast({\n        type: "failure",\n        message: "Failure toast message"\n      })} />\r\n        <Button icon="exclamation-circle" style={{\n        backgroundColor: "var(--warning-color)",\n        borderColor: "var(--warning-color)"\n      }} variant="full" text="Warning" onClick={() => toastRef.current?.addToast({\n        type: "warning",\n        message: "Warning toast message"\n      })} />\r\n        <Button icon="info-circle" style={{\n        backgroundColor: "var(--information-color)",\n        borderColor: "var(--information-color)"\n      }} variant="full" text="Information" onClick={() => toastRef.current?.addToast({\n        type: "information",\n        message: "Information toast message"\n      })} />\r\n        <Button icon="times" text="Clear" onClick={() => toastRef.current?.clear()} />\r\n        <ToastsContainer {...args} ref={toastRef} />\r\n      </>;\n  }\n}',...ToastExample.parameters?.docs?.source}}}},"./src/components/Button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>_Button__WEBPACK_IMPORTED_MODULE_0__.A});var _Button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Button/Button.tsx");__webpack_require__("./src/components/Button/types.ts")}}]);