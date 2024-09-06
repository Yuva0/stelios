"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[6627],{"./src/stories/components/Breadcrumbs/Breadcrumbs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Large:()=>Large,Medium:()=>Medium,Outlined:()=>Outlined,Playground:()=>Playground,Small:()=>Small,Soft:()=>Soft,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _components_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Breadcrumbs/Breadcrumbs.tsx"),_components_Breadcrumbs_BreadcrumbsItem_BreadcrumbsItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Breadcrumbs",component:_components_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},argTypes:{}},BreadcrumbsTemplate={render:args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components_Breadcrumbs_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__.A,{...args,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Breadcrumbs_BreadcrumbsItem_BreadcrumbsItem__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Guides"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components_Breadcrumbs_BreadcrumbsItem_BreadcrumbsItem__WEBPACK_IMPORTED_MODULE_2__.A,{title:"Function Components",link:"/guides/function-components"})]})},Contained={...BreadcrumbsTemplate,args:{variant:"contained"}},Outlined={...BreadcrumbsTemplate,args:{variant:"outlined"}},Soft={...BreadcrumbsTemplate,args:{variant:"soft"}},Text={...BreadcrumbsTemplate,args:{variant:"text"}},Large={...BreadcrumbsTemplate,args:{size:"large"}},Medium={...BreadcrumbsTemplate,args:{size:"medium"}},Small={...BreadcrumbsTemplate,args:{size:"small"}},Playground={...BreadcrumbsTemplate};Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...BreadcrumbsTemplate,\n  args: {\n    variant: "contained"\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...BreadcrumbsTemplate,\n  args: {\n    variant: "outlined"\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...BreadcrumbsTemplate,\n  args: {\n    variant: "soft"\n  }\n}',...Soft.parameters?.docs?.source}}},Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:'{\n  ...BreadcrumbsTemplate,\n  args: {\n    variant: "text"\n  }\n}',...Text.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  ...BreadcrumbsTemplate,\n  args: {\n    size: "large"\n  }\n}',...Large.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'{\n  ...BreadcrumbsTemplate,\n  args: {\n    size: "medium"\n  }\n}',...Medium.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  ...BreadcrumbsTemplate,\n  args: {\n    size: "small"\n  }\n}',...Small.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  ...BreadcrumbsTemplate\n}",...Playground.parameters?.docs?.source}}};const __namedExportsOrder=["Contained","Outlined","Soft","Text","Large","Medium","Small","Playground"]},"./src/components/Breadcrumbs/Breadcrumbs.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledDelimiterSpan=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.span(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_4__.A)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: ",";\n"])),(props=>sizeHandler(props.size))),Breadcrumbs=_ref=>{let{children,delimiter,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_1__.A.zB.iW,size="medium",variant="contained","data-testid":dataTestId,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{display:"inline-flex"},"data-testid":dataTestId,...props,children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{...!child.props.variant&&variant&&{variant},...!child.props.size&&size&&{size},...!child.props.color&&color&&{color}}),index<react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)-1&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(StyledDelimiterSpan,{size,children:null!=delimiter?delimiter:">"})]}):child))})},sizeHandler=size=>{switch(size){case"small":case"medium":return"0 0.25rem";case"large":return"0 0.5rem"}},__WEBPACK_DEFAULT_EXPORT__=Breadcrumbs;Breadcrumbs.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},delimiter:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "text"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_Link_Link__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Link/Link.tsx")),_Text_Text__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Text/Text.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tokens/colors.json"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/helpers/helpers.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const BreadcrumbsItem=_ref=>{let{link,title,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__.A.zB.iW,size="medium",variant="contained","data-testid":dataTestId,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_5__.jh)(theme,color),BreadcrumbsItemContent=link?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Link_Link__WEBPACK_IMPORTED_MODULE_1__.A,{size,preciseColor:(()=>{if(colorPalette)return"contained"===variant?colorPalette[color].accentContrast:colorPalette[color].accentScale[10]})(),variant:"hover",href:link,children:title}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_2__.A,{disableColor:!0,size,variant:"span",children:title});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledBreadcrumbsItem,{$variant:variant,$color:color,$colorPalette:colorPalette,$size:size,$isSelectable:!!link,"data-testid":dataTestId,...props,children:BreadcrumbsItemContent})},__WEBPACK_DEFAULT_EXPORT__=BreadcrumbsItem,StyledBreadcrumbsItem=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_8__.A)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 0.5rem;\n  ","\n"])),(props=>{const properties=styledHandler(props.$variant,props.$color,props.$colorPalette,props.$isSelectable,props.$size);return"\n      background-color: ".concat(properties.backgroundColor.default,";\n      color: ").concat(properties.color.default,";\n      border: ").concat(properties.border.default,";\n      padding: ").concat(properties.padding,";\n      margin: ").concat(properties.margin,";\n      ").concat(props.$isSelectable?"&:hover {\n          background-color: ".concat(properties.backgroundColor.hover,";\n          color: ").concat(properties.color.hover,";\n          border: ").concat(properties.border.hover,";\n          }\n          &:active {\n          background-color: ").concat(properties.backgroundColor.active,";\n          color: ").concat(properties.color.active,";\n          border: ").concat(properties.border.active,";\n          "):"","\n      ")})),styledHandler=(variant,color,colorPalette,isSelectable,size)=>({...variantHandler(variant,color,colorPalette,isSelectable),...sizeHandler(size)}),variantHandler=(variant,color,colorPalette,isSelectable)=>{switch(variant){case"contained":return isSelectable?{backgroundColor:{default:colorPalette[color].accentScale[8],hover:colorPalette[color].accentScale[9],active:colorPalette[color].accentScale[9]},color:{default:colorPalette[color].accentContrast,hover:colorPalette[color].accentContrast,active:colorPalette[color].accentContrast},border:{default:"1px solid ".concat(colorPalette[color].accentScale[8]),hover:"1px solid ".concat(colorPalette[color].accentScale[9]),active:"1px solid ".concat(colorPalette[color].accentScale[9])}}:{backgroundColor:{default:colorPalette[color].grayScale[8]},color:{default:colorPalette[color].accentContrast},border:{default:"1px solid ".concat(colorPalette[color].grayScale[8])}};case"outlined":return isSelectable?{backgroundColor:{default:"transparent",hover:"transparent",active:"transparent"},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:"1px solid ".concat(colorPalette[color].accentScale[6]),hover:"1px solid ".concat(colorPalette[color].accentScale[7]),active:"1px solid ".concat(colorPalette[color].accentScale[7])}}:{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].grayScale[10]},border:{default:"1px solid ".concat(colorPalette[color].grayScale[8])}};case"soft":return isSelectable?{backgroundColor:{default:colorPalette[color].accentScale[2],hover:colorPalette[color].accentScale[3],active:colorPalette[color].accentScale[3]},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[10],active:colorPalette[color].accentScale[10]},border:{default:"1px solid ".concat(colorPalette[color].accentScale[2]),hover:"1px solid ".concat(colorPalette[color].accentScale[3]),active:"1px solid ".concat(colorPalette[color].accentScale[3])}}:{backgroundColor:{default:colorPalette[color].grayScale[3]},color:{default:colorPalette[color].grayScale[10]},border:{default:"1px solid ".concat(colorPalette[color].grayScale[3])}};case"text":return isSelectable?{backgroundColor:{default:"transparent",hover:"transparent",active:"transparent"},color:{default:colorPalette[color].accentScale[10],hover:colorPalette[color].accentScale[11],active:colorPalette[color].accentScale[11]},border:{default:"1px solid transparent",hover:"1px solid transparent",active:"1px solid transparent"}}:{backgroundColor:{default:"transparent"},color:{default:colorPalette[color].grayScale[10]},border:{default:"1px solid transparent"}}}},sizeHandler=size=>{switch(size){case"small":return{margin:"0rem 0.25rem",padding:"0.25rem 0.5rem"};case"medium":case"large":return{margin:"0rem 0.5rem",padding:"0.25rem 0.5rem"}}};BreadcrumbsItem.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsItem",props:{link:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "text"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"text"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Link/Link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/Text/Text.tsx")),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Link=_ref=>{let{href,children,variant="default",size="medium",className,target,style,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,tabIndex,onClick,"data-testid":dataTestId}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:colorPalette[color].accentScale[10];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLink,{tabIndex,$color:_color,$variant:variant,target,href,className,style,onClick,"data-testid":dataTestId,children:"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,size,variant:"span",children}):children})},__WEBPACK_DEFAULT_EXPORT__=Link,StyledLink=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.a(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  width: fit-content;\n  text-decoration: ",";\n  color: ",";\n  cursor: pointer;\n  display: inline-block;\n  &:hover {\n    text-decoration: ",";\n  }\n  &:focus-visible {\n    outline: 1px solid ",";\n    outline-offset: 2px;\n    border-radius: 0.25rem;\n  }\n"])),(props=>"underline"===props.$variant?"underline":"none"),(props=>props.$color),(props=>"default"===props.$variant?"none":"underline"),(props=>props.$color));Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rel:{required:!1,tsType:{name:"string"},description:""},href:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"default" | "underline" | "hover"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"underline"'},{name:"literal",value:'"hover"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent | React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent | React.KeyboardEvent",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent"},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"}]},name:"e"}],return:{name:"void"}}},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},preciseColor:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"union",raw:'"_blank" | "_self" | "_parent" | "_top"',elements:[{name:"literal",value:'"_blank"'},{name:"literal",value:'"_self"'},{name:"literal",value:'"_parent"'},{name:"literal",value:'"_top"'}]},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js")),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,"data-testid":dataTestId,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:colorPalette[color].accentScale[10];_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"div":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,style,className,"data-testid":dataTestId,...props,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1(_templateObject||(_templateObject=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  ","\n  font-family: ",";\n  ","\n"])),(props=>{var _props$$fontSize;return(null!==(_props$$fontSize=props.$fontSize)&&void 0!==_props$$fontSize?_props$$fontSize:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2.25rem":"2rem"}),(props=>{var _props$$lineHeight;return(null!==(_props$$lineHeight=props.$lineHeight)&&void 0!==_props$$lineHeight?_props$$lineHeight:"large"===props.$size)?"4rem":"medium"===props.$size?"3.5rem":"3rem"}),(props=>props.$strong?"700":"400"),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),(props=>{var _props$$fontFamily;return null!==(_props$$fontFamily=props.$fontFamily)&&void 0!==_props$$fontFamily?_props$$fontFamily:'"Lato", sans-serif'}),commonStyles),StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h2(_templateObject2||(_templateObject2=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize2;return(null!==(_props$$fontSize2=props.$fontSize)&&void 0!==_props$$fontSize2?_props$$fontSize2:"large"===props.$size)?"2.25rem":"medium"===props.$size?"2rem":"1.75rem"}),(props=>{var _props$$lineHeight2;return(null!==(_props$$lineHeight2=props.$lineHeight)&&void 0!==_props$$lineHeight2?_props$$lineHeight2:"large"===props.$size)?"3.5rem":"medium"===props.$size?"3rem":"2.5rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily2;return null!==(_props$$fontFamily2=props.$fontFamily)&&void 0!==_props$$fontFamily2?_props$$fontFamily2:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH3=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h3(_templateObject3||(_templateObject3=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize3;return(null!==(_props$$fontSize3=props.$fontSize)&&void 0!==_props$$fontSize3?_props$$fontSize3:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}),(props=>{var _props$$lineHeight3;return(null!==(_props$$lineHeight3=props.$lineHeight)&&void 0!==_props$$lineHeight3?_props$$lineHeight3:"large"===props.$size)?"3rem":"medium"===props.$size?"2.5rem":"2rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily3;return null!==(_props$$fontFamily3=props.$fontFamily)&&void 0!==_props$$fontFamily3?_props$$fontFamily3:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH4=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h4(_templateObject4||(_templateObject4=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize4;return(null!==(_props$$fontSize4=props.$fontSize)&&void 0!==_props$$fontSize4?_props$$fontSize4:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>{var _props$$lineHeight4;return(null!==(_props$$lineHeight4=props.$lineHeight)&&void 0!==_props$$lineHeight4?_props$$lineHeight4:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2rem":"1.75rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily4;return null!==(_props$$fontFamily4=props.$fontFamily)&&void 0!==_props$$fontFamily4?_props$$fontFamily4:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH5=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h5(_templateObject5||(_templateObject5=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize5;return(null!==(_props$$fontSize5=props.$fontSize)&&void 0!==_props$$fontSize5?_props$$fontSize5:"large"===props.$size)?"1.5rem":"medium"===props.$size?"1.25rem":"1rem"}),(props=>{var _props$$lineHeight5;return(null!==(_props$$lineHeight5=props.$lineHeight)&&void 0!==_props$$lineHeight5?_props$$lineHeight5:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily5;return null!==(_props$$fontFamily5=props.$fontFamily)&&void 0!==_props$$fontFamily5?_props$$fontFamily5:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledH6=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h6(_templateObject6||(_templateObject6=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize6;return(null!==(_props$$fontSize6=props.$fontSize)&&void 0!==_props$$fontSize6?_props$$fontSize6:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight6;return(null!==(_props$$lineHeight6=props.$lineHeight)&&void 0!==_props$$lineHeight6?_props$$lineHeight6:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily6;return null!==(_props$$fontFamily6=props.$fontFamily)&&void 0!==_props$$fontFamily6?_props$$fontFamily6:'"Lato", sans-serif'}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div(_templateObject7||(_templateObject7=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize7;return(null!==(_props$$fontSize7=props.$fontSize)&&void 0!==_props$$fontSize7?_props$$fontSize7:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight7;return(null!==(_props$$lineHeight7=props.$lineHeight)&&void 0!==_props$$lineHeight7?_props$$lineHeight7:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily7;return null!==(_props$$fontFamily7=props.$fontFamily)&&void 0!==_props$$fontFamily7?_props$$fontFamily7:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.label(_templateObject8||(_templateObject8=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize8;return(null!==(_props$$fontSize8=props.$fontSize)&&void 0!==_props$$fontSize8?_props$$fontSize8:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight8;return(null!==(_props$$lineHeight8=props.$lineHeight)&&void 0!==_props$$lineHeight8?_props$$lineHeight8:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily8;return null!==(_props$$fontFamily8=props.$fontFamily)&&void 0!==_props$$fontFamily8?_props$$fontFamily8:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span(_templateObject9||(_templateObject9=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize9;return(null!==(_props$$fontSize9=props.$fontSize)&&void 0!==_props$$fontSize9?_props$$fontSize9:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight9;return(null!==(_props$$lineHeight9=props.$lineHeight)&&void 0!==_props$$lineHeight9?_props$$lineHeight9:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily9;return null!==(_props$$fontFamily9=props.$fontFamily)&&void 0!==_props$$fontFamily9?_props$$fontFamily9:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles),StyledP=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.p(_templateObject10||(_templateObject10=(0,_Users_tanuj_sengupta_Documents_Personal_Projects_stelios_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_7__.A)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: ",";\n  font-family: ",";\n  ","\n  ","\n"])),(props=>{var _props$$fontSize10;return(null!==(_props$$fontSize10=props.$fontSize)&&void 0!==_props$$fontSize10?_props$$fontSize10:"large"===props.$size)?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}),(props=>{var _props$$lineHeight10;return(null!==(_props$$lineHeight10=props.$lineHeight)&&void 0!==_props$$lineHeight10?_props$$lineHeight10:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}),(props=>props.$strong?"700":"400"),(props=>{var _props$$fontFamily10;return null!==(_props$$fontFamily10=props.$fontFamily)&&void 0!==_props$$fontFamily10?_props$$fontFamily10:"'Varela Round', sans-serif"}),(props=>!props.$disableColor&&"color: ".concat(props.$color,";")),commonStyles);Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"\n| "div"\n| "paragraph"\n| "label"\n| "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"div"'},{name:"literal",value:'"paragraph"'},{name:"literal",value:'"label"'},{name:"literal",value:'"span"'}]},description:"",defaultValue:{value:'"div"',computed:!1}},strong:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"justify"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},preciseColor:{required:!1,tsType:{name:"string"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},lineHeight:{required:!1,tsType:{name:"string"},description:""},disableColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}}}]);