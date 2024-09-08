"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[3993],{"./src/stories/components/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Neumorph:()=>Neumorph,Outlined:()=>Outlined,OutlinedSoft:()=>OutlinedSoft,Playground:()=>Playground,Soft:()=>Soft,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_Card_Card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Card/Card.tsx"),_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Text/Text.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Card",component:_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},argTypes:{children:{table:{disable:!0}},header:{table:{disable:!0}},footer:{table:{disable:!0}}}},HEADER_CONTENT=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{disableColor:!0,variant:"h5",size:"large",children:"React-Tutor"}),BODY_CONTENT=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{disableColor:!0,variant:"span",children:"React-Tutor is a website designed to teach you about basics of React. It has concepts related to React, Hooks, States and many more."}),FOOTER_CONTENT=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{disableColor:!0,children:"Have a good day!"}),CardTemplate={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Card_Card__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:args.children})},Contained={...CardTemplate,args:{children:BODY_CONTENT,variant:"contained",header:HEADER_CONTENT,footer:FOOTER_CONTENT}},Outlined={...CardTemplate,args:{children:BODY_CONTENT,variant:"outlined",header:HEADER_CONTENT,footer:FOOTER_CONTENT}},Soft={...CardTemplate,args:{children:BODY_CONTENT,variant:"soft",header:HEADER_CONTENT,footer:FOOTER_CONTENT}},OutlinedSoft={...CardTemplate,args:{children:BODY_CONTENT,variant:"outlined-soft",header:HEADER_CONTENT,footer:FOOTER_CONTENT}},Neumorph={...CardTemplate,args:{children:"React-Tutor is a website designed to teach you about basics of React. It has concepts related to React, Hooks, States and many more.",variant:"neumorph",header:HEADER_CONTENT,footer:FOOTER_CONTENT}},Playground={...CardTemplate,args:{children:BODY_CONTENT,header:HEADER_CONTENT,footer:FOOTER_CONTENT}},__namedExportsOrder=["Contained","Outlined","Soft","OutlinedSoft","Neumorph","Playground"];Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...CardTemplate,\n  args: {\n    children: BODY_CONTENT,\n    variant: "contained",\n    header: HEADER_CONTENT,\n    footer: FOOTER_CONTENT\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...CardTemplate,\n  args: {\n    children: BODY_CONTENT,\n    variant: "outlined",\n    header: HEADER_CONTENT,\n    footer: FOOTER_CONTENT\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...CardTemplate,\n  args: {\n    children: BODY_CONTENT,\n    variant: "soft",\n    header: HEADER_CONTENT,\n    footer: FOOTER_CONTENT\n  }\n}',...Soft.parameters?.docs?.source}}},OutlinedSoft.parameters={...OutlinedSoft.parameters,docs:{...OutlinedSoft.parameters?.docs,source:{originalSource:'{\n  ...CardTemplate,\n  args: {\n    children: BODY_CONTENT,\n    variant: "outlined-soft",\n    header: HEADER_CONTENT,\n    footer: FOOTER_CONTENT\n  }\n}',...OutlinedSoft.parameters?.docs?.source}}},Neumorph.parameters={...Neumorph.parameters,docs:{...Neumorph.parameters?.docs,source:{originalSource:'{\n  ...CardTemplate,\n  args: {\n    children: BODY_STRING,\n    variant: "neumorph",\n    header: HEADER_CONTENT,\n    footer: FOOTER_CONTENT\n  }\n}',...Neumorph.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  ...CardTemplate,\n  args: {\n    children: BODY_CONTENT,\n    header: HEADER_CONTENT,\n    footer: FOOTER_CONTENT\n  }\n}",...Playground.parameters?.docs?.source}}}},"./src/components/Card/Card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/tokens/colors.json"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/helpers.tsx"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Card=_ref=>{let{variant="contained",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_1__.A.zB.iW,header,children,footer,width="400px",className,style,"data-testid":dataTestId,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.jh)(theme,color);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(StyledCard,{$variant:variant,$colorPalette:colorPalette,$color:color,$width:width,className,style,"data-testid":dataTestId,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CardHeader,{children:header}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Children,{children}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(CardFooter,{children:footer})]})},CardHeader=_ref2=>{let{children}=_ref2;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Children,{children})},CardFooter=_ref3=>{let{children}=_ref3;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Children,{children})},Children=_ref4=>{let{children}=_ref4;return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)?children:null},__WEBPACK_DEFAULT_EXPORT__=Card,StyledCard=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${props=>{const properties=propsHandler(props.$variant,props.$colorPalette,props.$color);return`\n      width: ${props.$width};\n      background-color: ${properties.backgroundColor.default};\n      border: ${properties.border.default};\n      color: ${properties.color.default};\n      ${properties.boxShadow?`box-shadow: ${properties.boxShadow.default};`:""}\n    `}}
`,propsHandler=(variant,colorPalette,color)=>({...getVariantProps(variant,colorPalette,color)}),getVariantProps=(variant,colorPalette,color)=>{switch(variant){case"contained":return{backgroundColor:{default:colorPalette[color].accentScale[8]},color:{default:colorPalette[color].accentContrast},border:{default:`2px solid ${colorPalette[color].accentScale[8]}`}};case"outlined":return{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].accentScale[10]},border:{default:`2px solid ${colorPalette[color].accentScale[5]}`}};case"soft":return{backgroundColor:{default:colorPalette[color].accentScale[2]},color:{default:colorPalette[color].accentScale[10]},border:{default:`2px solid ${colorPalette[color].accentScale[2]}`}};case"outlined-soft":return{backgroundColor:{default:colorPalette[color].accentScale[2]},color:{default:colorPalette[color].accentScale[10]},border:{default:`2px solid ${colorPalette[color].accentScale[5]}`}};case"neumorph":return{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].accentScale[10]},border:{default:"2px solid transparent"},boxShadow:{default:"-6px -6px 14px rgba(255, 255, 255, .7),\n              -6px -6px 10px rgba(255, 255, 255, .5),\n              6px 6px 8px rgba(255, 255, 255, .075),\n              6px 6px 10px rgba(0, 0, 0, .15)"}}}};Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "outlined-soft" | "neumorph"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"outlined-soft"'},{name:"literal",value:'"neumorph"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"400px"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,"data-testid":dataTestId,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:colorPalette[color].accentScale[10];_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"div":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1`
  font-size: ${props=>{var _props$$fontSize;return(null!==(_props$$fontSize=props.$fontSize)&&void 0!==_props$$fontSize?_props$$fontSize:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2.25rem":"2rem"}};
  line-height: ${props=>{var _props$$lineHeight;return(null!==(_props$$lineHeight=props.$lineHeight)&&void 0!==_props$$lineHeight?_props$$lineHeight:"large"===props.$size)?"4rem":"medium"===props.$size?"3.5rem":"3rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  font-family: ${props=>{var _props$$fontFamily;return null!==(_props$$fontFamily=props.$fontFamily)&&void 0!==_props$$fontFamily?_props$$fontFamily:'"Lato", sans-serif'}};
  ${commonStyles}
`,StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h2`
  font-size: ${props=>{var _props$$fontSize2;return(null!==(_props$$fontSize2=props.$fontSize)&&void 0!==_props$$fontSize2?_props$$fontSize2:"large"===props.$size)?"2.25rem":"medium"===props.$size?"2rem":"1.75rem"}};
  line-height: ${props=>{var _props$$lineHeight2;return(null!==(_props$$lineHeight2=props.$lineHeight)&&void 0!==_props$$lineHeight2?_props$$lineHeight2:"large"===props.$size)?"3.5rem":"medium"===props.$size?"3rem":"2.5rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily2;return null!==(_props$$fontFamily2=props.$fontFamily)&&void 0!==_props$$fontFamily2?_props$$fontFamily2:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH3=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h3`
  font-size: ${props=>{var _props$$fontSize3;return(null!==(_props$$fontSize3=props.$fontSize)&&void 0!==_props$$fontSize3?_props$$fontSize3:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}};
  line-height: ${props=>{var _props$$lineHeight3;return(null!==(_props$$lineHeight3=props.$lineHeight)&&void 0!==_props$$lineHeight3?_props$$lineHeight3:"large"===props.$size)?"3rem":"medium"===props.$size?"2.5rem":"2rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily3;return null!==(_props$$fontFamily3=props.$fontFamily)&&void 0!==_props$$fontFamily3?_props$$fontFamily3:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH4=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h4`
  font-size: ${props=>{var _props$$fontSize4;return(null!==(_props$$fontSize4=props.$fontSize)&&void 0!==_props$$fontSize4?_props$$fontSize4:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  line-height: ${props=>{var _props$$lineHeight4;return(null!==(_props$$lineHeight4=props.$lineHeight)&&void 0!==_props$$lineHeight4?_props$$lineHeight4:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2rem":"1.75rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily4;return null!==(_props$$fontFamily4=props.$fontFamily)&&void 0!==_props$$fontFamily4?_props$$fontFamily4:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH5=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h5`
  font-size: ${props=>{var _props$$fontSize5;return(null!==(_props$$fontSize5=props.$fontSize)&&void 0!==_props$$fontSize5?_props$$fontSize5:"large"===props.$size)?"1.5rem":"medium"===props.$size?"1.25rem":"1rem"}};
  line-height: ${props=>{var _props$$lineHeight5;return(null!==(_props$$lineHeight5=props.$lineHeight)&&void 0!==_props$$lineHeight5?_props$$lineHeight5:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily5;return null!==(_props$$fontFamily5=props.$fontFamily)&&void 0!==_props$$fontFamily5?_props$$fontFamily5:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH6=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h6`
  font-size: ${props=>{var _props$$fontSize6;return(null!==(_props$$fontSize6=props.$fontSize)&&void 0!==_props$$fontSize6?_props$$fontSize6:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight6;return(null!==(_props$$lineHeight6=props.$lineHeight)&&void 0!==_props$$lineHeight6?_props$$lineHeight6:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily6;return null!==(_props$$fontFamily6=props.$fontFamily)&&void 0!==_props$$fontFamily6?_props$$fontFamily6:'"Lato", sans-serif'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  font-size: ${props=>{var _props$$fontSize7;return(null!==(_props$$fontSize7=props.$fontSize)&&void 0!==_props$$fontSize7?_props$$fontSize7:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight7;return(null!==(_props$$lineHeight7=props.$lineHeight)&&void 0!==_props$$lineHeight7?_props$$lineHeight7:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily7;return null!==(_props$$fontFamily7=props.$fontFamily)&&void 0!==_props$$fontFamily7?_props$$fontFamily7:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.label`
  font-size: ${props=>{var _props$$fontSize8;return(null!==(_props$$fontSize8=props.$fontSize)&&void 0!==_props$$fontSize8?_props$$fontSize8:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight8;return(null!==(_props$$lineHeight8=props.$lineHeight)&&void 0!==_props$$lineHeight8?_props$$lineHeight8:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily8;return null!==(_props$$fontFamily8=props.$fontFamily)&&void 0!==_props$$fontFamily8?_props$$fontFamily8:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  font-size: ${props=>{var _props$$fontSize9;return(null!==(_props$$fontSize9=props.$fontSize)&&void 0!==_props$$fontSize9?_props$$fontSize9:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight9;return(null!==(_props$$lineHeight9=props.$lineHeight)&&void 0!==_props$$lineHeight9?_props$$lineHeight9:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily9;return null!==(_props$$fontFamily9=props.$fontFamily)&&void 0!==_props$$fontFamily9?_props$$fontFamily9:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledP=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.p`
  font-size: ${props=>{var _props$$fontSize10;return(null!==(_props$$fontSize10=props.$fontSize)&&void 0!==_props$$fontSize10?_props$$fontSize10:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight10;return(null!==(_props$$lineHeight10=props.$lineHeight)&&void 0!==_props$$lineHeight10?_props$$lineHeight10:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily10;return null!==(_props$$fontFamily10=props.$fontFamily)&&void 0!==_props$$fontFamily10?_props$$fontFamily10:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"\n| "div"\n| "paragraph"\n| "label"\n| "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"div"'},{name:"literal",value:'"paragraph"'},{name:"literal",value:'"label"'},{name:"literal",value:'"span"'}]},description:"",defaultValue:{value:'"div"',computed:!1}},strong:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"justify"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},preciseColor:{required:!1,tsType:{name:"string"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},lineHeight:{required:!1,tsType:{name:"string"},description:""},disableColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}}}]);
//# sourceMappingURL=stories-components-Card-Card-stories.aee53d71.iframe.bundle.js.map