"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[1634],{"./src/stories/components/CodePreview/CodePreview.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CodePreview_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),default_highlight=__webpack_require__("./node_modules/react-syntax-highlighter/dist/esm/default-highlight.js"),hljs=__webpack_require__("./node_modules/react-syntax-highlighter/dist/cjs/styles/hljs/index.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CodePreview=_ref=>{let{code,text,width,color=colors.A.zB.iW,"data-testid":dataTestId,...props}=_ref;const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),appearance=colorPalette[color].appearance;return(0,jsx_runtime.jsxs)(StyledCodePreview,{$colorPalette:colorPalette,$width:width,$color:color,"data-testid":dataTestId,...props,children:[(0,jsx_runtime.jsx)(StyledCode,{$colorPalette:colorPalette,$color:color,children:code}),(0,jsx_runtime.jsx)(StyledContainer,{$colorPalette:colorPalette,$color:color,children:(0,jsx_runtime.jsx)(StyledSyntaxHighlighter,{language:"javascript",style:"light"===appearance?hljs.xL:hljs.XT,$colorPalette:colorPalette,$color:color,children:text})})]})},CodePreview_CodePreview=CodePreview,StyledCodePreview=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  width: ${props=>{var _props$$width;return null!==(_props$$width=props.$width)&&void 0!==_props$$width?_props$$width:"auto"}};
`,StyledCode=styled_components_browser_esm.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  ${props=>`\n      background-color: ${props.$colorPalette[props.$color].accentScale[0]};\n      border: 1px solid ${props.$colorPalette[props.$color].grayScale[5]};\n    `}
`,StyledContainer=styled_components_browser_esm.Ay.div`
  display: block;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0.5rem 2rem;
  pre {
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    code {
      font-size: 14px;
      font-family: "Lato", sans-serif;
    }
  }
  ${props=>`\n      background-color: ${props.$colorPalette[props.$color].accentScale[2]};\n      border: 1px solid ${props.$colorPalette[props.$color].grayScale[5]};\n    `}
`,StyledSyntaxHighlighter=(0,styled_components_browser_esm.Ay)(default_highlight.A)`
  background-color: ${props=>props.$colorPalette[props.$color].accentScale[2]} !important;
  font-family: "Lato", sans-serif;
`;CodePreview.__docgenInfo={description:"",methods:[],displayName:"CodePreview",props:{text:{required:!0,tsType:{name:"string"},description:""},code:{required:!0,tsType:{name:"union",raw:"React.ReactNode | [React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"tuple",raw:"[React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}]}]},description:""},width:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};var Button=__webpack_require__("./src/components/Button/Button.tsx");const BUTTON_CODE=(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"2rem"},children:[(0,jsx_runtime.jsx)(Button.A,{variant:"contained",children:"Button"}),(0,jsx_runtime.jsx)(Button.A,{variant:"outlined",children:"Button"})]}),CodePreview_stories={title:"Components/CodePreview",component:CodePreview_CodePreview,parameters:{},argTypes:{}},Default={...{render:args=>(0,jsx_runtime.jsx)(CodePreview_CodePreview,{code:BUTTON_CODE,text:'<Button variant="contained"> Contained </Button>\n<Button variant="contained" disabled> Disabled </Button>\n<Button variant="contained" href="#contained-buttons"> Link </Button>'})},args:{}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...CodePreviewTemplate,\n  args: {}\n}",...Default.parameters?.docs?.source}}}},"./src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json");const layout_namespaceObject=JSON.parse('{"K":{"A":{"D":0.25}}}');var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button=(0,react.forwardRef)(((_ref,ref)=>{let{leadingIcon,trailingIcon,size="medium",variant="contained",color=colors.A.zB.iW,rounded=!1,disabled=!1,children,isFullWidth=!1,style,onClick,"data-testid":dataTestId,"data-leading-icon":dataLeadingIcon,"data-trailing-icon":dataTrailingIcon,...rest}=_ref;const innerRef=(0,react.useRef)(null);(0,react.useImperativeHandle)(ref,(()=>innerRef.current),[innerRef]);const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color);return(0,jsx_runtime.jsxs)(StyledButton,{ref:innerRef,$size:size,$variant:variant,$color:color,$colorPalette:colorPalette,$disabled:disabled,$rounded:rounded,$isFullWidth:isFullWidth,"aria-disabled":disabled,style,onClick,"data-testid":dataTestId,...rest,children:[leadingIcon&&(0,jsx_runtime.jsx)(StyledButtonIcon,{$size:size,"data-testid":dataLeadingIcon,children:leadingIcon}),"string"==typeof children?(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"span",size,children}):children,trailingIcon&&(0,jsx_runtime.jsx)(StyledButtonIcon,{$size:size,"data-testid":dataTrailingIcon,children:trailingIcon})]})})),Button_Button=Button,StyledButton=styled_components_browser_esm.Ay.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${props=>{const properties=propsHandler(props.$variant,props.$color,props.$colorPalette,props.$size,props.$disabled);return`\n      background-color: ${properties.backgroundColor.default};\n      color: ${properties.color.default};\n      padding: ${properties.padding};\n      gap: ${properties.gap};\n      width: ${props.$isFullWidth?"100%":"auto"};\n      cursor: ${props.$disabled?"not-allowed":"pointer"};\n      border-radius: ${props.$rounded?"20rem":`${layout_namespaceObject.K.A.D}rem`};\n      border: ${properties.border.default};\n      ${(0,helpers.vW)(properties,["boxShadow","default"])?`box-shadow: ${properties.boxShadow.default};`:""}\n      ${props.$disabled?"":`\n          &:hover {\n          background-color: ${properties.backgroundColor.hover};\n          color: ${properties.color.hover};\n          border: ${properties.border.hover};\n          ${(0,helpers.vW)(properties,["boxShadow","hover"])?`box-shadow: ${properties.boxShadow.hover};`:""}\n        }\n        &:active {\n          background-color: ${properties.backgroundColor.active};\n          color: ${properties.color.active};\n          border: ${properties.border.active};\n          ${(0,helpers.vW)(properties,["filter","active"])?`filter: ${properties.filter.active};`:""};\n          ${(0,helpers.vW)(properties,["boxShadow","active"])?`box-shadow: ${properties.boxShadow.active};`:""}\n        }  \n        &:focus-visible {\n          outline-offset: 2px;\n          outline: 2px solid ${props.$colorPalette[props.$color].accentScale[8]};\n        }`}\n\n    `}}
`,StyledButtonIcon=styled_components_browser_esm.Ay.span`
  ${props=>{const size=getIconSizeProps(props.$size);return`\n      width: ${size.width};\n      height: ${size.height};\n    `}}
  svg {
    width: 100%;
    height: 100%;
  }
`,propsHandler=(variant,color,colorPalette,size,disabled)=>({...getVariantProps(variant,color,colorPalette,disabled),...getSizeProps(size)}),getVariantProps=(variant,color,colorPalette,disabled)=>{switch(variant){case"contained":return disabled?{backgroundColor:{default:colorPalette[color].grayScale[8]},color:{default:colorPalette[color].accentContrast},border:{default:`2px solid ${colorPalette[color].grayScale[8]}`}}:{backgroundColor:{default:colorPalette[color].accentScale[8],hover:colorPalette[color].accentScale[9],active:colorPalette[color].accentScale[9]},color:{default:colorPalette[color].accentContrast,hover:colorPalette[color].accentContrast,active:colorPalette[color].accentContrast},border:{default:`2px solid ${colorPalette[color].accentScale[8]}`,hover:`2px solid ${colorPalette[color].accentScale[9]}`,active:`2px solid ${colorPalette[color].accentScale[9]}`},filter:{active:"brightness(0.92) saturate(1.1)"}};case"outlined":return disabled?{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].grayScale[10]},border:{default:`2px solid ${colorPalette[color].grayScale[5]}`}}:{backgroundColor:{default:"transparent",hover:"transparent",active:"transparent"},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:`2px solid ${colorPalette[color].accentScale[5]}`,hover:`2px solid ${colorPalette[color].accentScale[6]}`,active:`2px solid ${colorPalette[color].accentScale[7]}`}};case"soft":return disabled?{backgroundColor:{default:colorPalette[color].grayScale[2]},color:{default:colorPalette[color].grayScale[10]},border:{default:`2px solid ${colorPalette[color].grayScale[2]}`}}:{backgroundColor:{default:colorPalette[color].accentScale[2],hover:colorPalette[color].accentScale[3],active:colorPalette[color].accentScale[3]},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:`2px solid ${colorPalette[color].accentScale[2]}`,hover:`2px solid ${colorPalette[color].accentScale[3]}`,active:`2px solid ${colorPalette[color].accentScale[3]}`},filter:{active:"brightness(0.92) saturate(1.1)"}};case"outlined-soft":return disabled?{backgroundColor:{default:colorPalette[color].grayScale[2]},color:{default:colorPalette[color].grayScale[10]},border:{default:`2px solid ${colorPalette[color].grayScale[5]}`}}:{backgroundColor:{default:colorPalette[color].accentScale[2],hover:colorPalette[color].accentScale[3],active:colorPalette[color].accentScale[3]},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:`2px solid ${colorPalette[color].accentScale[5]}`,hover:`2px solid ${colorPalette[color].accentScale[6]}`,active:`2px solid ${colorPalette[color].accentScale[7]}`}};case"neumorph":return disabled?{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].grayScale[5]},border:{default:"2px solid transparent"},boxShadow:{default:"-6px -6px 14px rgba(255, 255, 255, .7),\n              -6px -6px 10px rgba(255, 255, 255, .5),\n              6px 6px 8px rgba(255, 255, 255, .075),\n              6px 6px 10px rgba(0, 0, 0, .15)"}}:{backgroundColor:{default:"transparent",hover:"transparent",active:"transparent"},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:"2px solid transparent",hover:"2px solid transparent",active:"2px solid transparent"},boxShadow:{default:"light"===colorPalette[color].appearance?"-6px -6px 14px rgba(255, 255, 255, .7),  -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)":"-6px -6px 14px rgba(255, 255, 255, 0.1), -6px -6px 10px rgba(255, 255, 255, 0.1), 6px 6px 8px rgba(255, 255, 255, 0.05), 6px 6px 10px rgba(0, 0, 0, 0.1)",hover:"light"===colorPalette[color].appearance?"-2px -2px 6px rgba(255, 255, 255, .6),  -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)":"-2px -2px 14px rgba(255, 255, 255, 0.1),  -2px -2px 4px rgba(255, 255, 255, .1), 2px 2px 2px rgba(255, 255, 255, .01), 2px 2px 4px rgba(0, 0, 0, .1)",active:"light"===colorPalette[color].appearance?"inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)":"inset -2px -2px 14px rgba(255, 255, 255, 0.1), inset -2px -2px 4px rgba(255, 255, 255, .1), inset 2px 2px 2px rgba(255, 255, 255, .01), inset 2px 2px 4px rgba(0, 0, 0, .1)"}}}},getSizeProps=size=>{switch(size){case"small":return{padding:"0.25rem 0.5rem",gap:"0.5rem"};case"medium":case"large":return{padding:"0.5rem 1rem",gap:"0.75rem"}}},getIconSizeProps=size=>{switch(size){case"small":return{width:"1.25rem",height:"1.25rem"};case"medium":return{width:"1.5rem",height:"1.5rem"};case"large":return{width:"1.75rem",height:"1.75rem"}}};Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "outlined-soft" | "neumorph"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"outlined-soft"'},{name:"literal",value:'"neumorph"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colors.default.primary.main",computed:!0}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},rounded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},"data-leading-icon":{required:!1,tsType:{name:"string"},description:""},"data-trailing-icon":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,"data-testid":dataTestId,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:colorPalette[color].accentScale[10];_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"div":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1`
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
//# sourceMappingURL=1634.98035199.iframe.bundle.js.map