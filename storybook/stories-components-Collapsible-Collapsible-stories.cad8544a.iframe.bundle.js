/*! For license information please see stories-components-Collapsible-Collapsible-stories.cad8544a.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[6243],{"./src/stories/components/Collapsible/Collapsible.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Outlined:()=>Outlined,Soft:()=>Soft,Transparent:()=>Transparent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Collapsible_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),Text=__webpack_require__("./src/components/Text/Text.tsx"),IconChevronUp=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconChevronUp.mjs"),IconChevronDown=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Collapsible=_ref=>{let{variant="contained",title,children,open=!1,color=colors.A.zB.iW,width="auto",onToggle,...props}=_ref;const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),[_isOpen,setIsOpen]=react.useState(open),_ChildrenEle=_isOpen?"string"==typeof children?(0,jsx_runtime.jsx)(StyledChildren,{$variant:variant,$colorPalette:colorPalette,$color:color,children:(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"paragraph",children})}):children:null;return(0,jsx_runtime.jsxs)(StyledCollapsibleCtr,{$variant:variant,$colorPalette:colorPalette,$color:color,$width:width,$open:_isOpen,...props,children:[(0,jsx_runtime.jsxs)(StyledCollapsibleTitle,{$variant:variant,$colorPalette:colorPalette,$color:color,onClick:()=>{setIsOpen((prev=>!prev)),onToggle&&onToggle(!_isOpen)},children:["string"==typeof title?(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"paragraph",children:title}):title,(0,jsx_runtime.jsx)(StyledIcon,{children:_isOpen?(0,jsx_runtime.jsx)(IconChevronUp.A,{}):(0,jsx_runtime.jsx)(IconChevronDown.A,{})})]}),_ChildrenEle]})},StyledCollapsibleCtr=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  width: ${props=>props.$width};
  border-radius: 1rem;
  ${props=>{var _variantStylesHandler;return null===(_variantStylesHandler=variantStylesHandler(props.$variant,props.$colorPalette,props.$color,props.$open))||void 0===_variantStylesHandler?void 0:_variantStylesHandler.container}}
`,StyledCollapsibleTitle=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  ${props=>{var _variantStylesHandler2;return null===(_variantStylesHandler2=variantStylesHandler(props.$variant,props.$colorPalette,props.$color,props.$open))||void 0===_variantStylesHandler2?void 0:_variantStylesHandler2.title}}
`,StyledIcon=styled_components_browser_esm.Ay.span`
  width: 1.25rem;
  height: 1.25rem;
  & svg {
    width: 100%;
    height: 100%;
  }
`,StyledChildren=styled_components_browser_esm.Ay.div`
  padding: 1rem;
`,variantStylesHandler=($variant,$colorPalette,$color,$open)=>{switch($variant){case"contained":return{container:styled_components_browser_esm.AH`
          background-color: ${$colorPalette[$color].accentScale[8]};
          color: ${$colorPalette[$color].accentContrast};
          border: 2px solid ${$colorPalette[$color].accentScale[8]};
          border-bottom: ${$open?`2px solid ${$colorPalette[$color].accentScale[8]}`:"none"};
        `,title:styled_components_browser_esm.AH`
          background-color: ${$colorPalette[$color].accentScale[8]};
          color: ${$colorPalette[$color].accentContrast};
          border: 2px solid ${$colorPalette[$color].accentScale[8]};
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[11]};
          &:hover{
            background-color: ${$colorPalette[$color].accentScale[9]};
          }
          &:active{
            background-color: ${$colorPalette[$color].accentScale[9]};
          }
        `};case"outlined":return{container:styled_components_browser_esm.AH`
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid ${$colorPalette[$color].accentScale[10]};
          border-bottom: ${$open?`2px solid ${$colorPalette[$color].accentScale[10]}`:"none"};
        `,title:styled_components_browser_esm.AH`
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid transparent;
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[10]};
          &:hover{
            background-color: ${$colorPalette[$color].grayScale[0]};
          }
          &:active{
            background-color: ${$colorPalette[$color].grayScale[1]};
          }
        `};case"soft":return{container:styled_components_browser_esm.AH`
          background-color: ${$colorPalette[$color].accentScale[3]};
          color: ${$colorPalette[$color].accentScale[11]};
          border: 2px solid ${$colorPalette[$color].accentScale[3]};
          border-bottom: ${$open?`2px solid ${$colorPalette[$color].accentScale[3]}`:"none"};
        `,title:styled_components_browser_esm.AH`
          background-color: ${$colorPalette[$color].accentScale[3]};
          color: ${$colorPalette[$color].accentScale[11]};
          border: 2px solid ${$colorPalette[$color].accentScale[3]};
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[6]};
          &:hover{
            background-color: ${$colorPalette[$color].accentScale[4]};
          }
          &:active{
            background-color: ${$colorPalette[$color].accentScale[4]};
          }
        `};case"transparent":return{container:styled_components_browser_esm.AH`
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid transparent;
          border-bottom: ${$open?"2px solid transparent":"none"};
        `,title:styled_components_browser_esm.AH`
          background-color: transparent;
          color: ${$colorPalette[$color].accentScale[10]};
          border: 2px solid transparent;
          border-bottom: 2px solid ${$colorPalette[$color].accentScale[6]};
          &:hover{
            background-color: ${$colorPalette[$color].grayScale[0]};
          }
          &:active{
            background-color: ${$colorPalette[$color].grayScale[1]};
          }
        `}}},Collapsible_Collapsible=Collapsible;Collapsible.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{title:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "transparent"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"transparent"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colors.default.primary.main",computed:!0}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"auto"',computed:!1}}}};const Collapsible_stories={title:"Components/Collapsible",component:Collapsible_Collapsible,parameters:{layout:"centered"},argTypes:{variant:{description:"The variant of the color picker",control:{type:"select",options:["contained","outlined","soft"]}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"20rem"},children:(0,jsx_runtime.jsx)(Story,{})})]},Template={render:args=>(0,jsx_runtime.jsx)(Collapsible_Collapsible,{...args,title:"Collapsible Title",children:(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,size:"small",style:{padding:"1rem"},children:"Vercel is a cloud platform that enables developers to build, deploy, and scale web applications effortlessly. It is optimized for front-end frameworks like Next.js and offers automatic deployment from Git repositories, serverless functions, and a global content delivery network (CDN) for fast performance. Vercel simplifies workflows with features like continuous integration, previews for every pull request, and automatic scaling."})})},Contained={...Template,args:{variant:"contained",width:"20rem"}},Outlined={...Template,args:{variant:"outlined",width:"20rem"}},Soft={...Template,args:{variant:"soft",width:"20rem"}},Transparent={...Template,args:{variant:"transparent",width:"20rem"}},__namedExportsOrder=["Contained","Outlined","Soft","Transparent"];Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "contained",\n    width: "20rem"\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "outlined",\n    width: "20rem"\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "soft",\n    width: "20rem"\n  }\n}',...Soft.parameters?.docs?.source}}},Transparent.parameters={...Transparent.parameters,docs:{...Transparent.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "transparent",\n    width: "20rem"\n  }\n}',...Transparent.parameters?.docs?.source}}}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconChevronDown});var IconChevronDown=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","chevron-down","IconChevronDown",[["path",{d:"M6 9l6 6l6 -6",key:"svg-0"}]])},"./node_modules/@tabler/icons-react/dist/esm/icons/IconChevronUp.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconChevronUp});var IconChevronUp=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,"data-testid":dataTestId,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:colorPalette[color].accentScale[10];_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"div":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1`
  font-size: ${props=>{var _props$$fontSize;return null!==(_props$$fontSize=props.$fontSize)&&void 0!==_props$$fontSize?_props$$fontSize:"large"===props.$size?"2.5rem":"medium"===props.$size?"2.25rem":"2rem"}};
  line-height: ${props=>{var _props$$lineHeight;return(null!==(_props$$lineHeight=props.$lineHeight)&&void 0!==_props$$lineHeight?_props$$lineHeight:"large"===props.$size)?"4rem":"medium"===props.$size?"3.5rem":"3rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  font-family: ${props=>{var _props$$fontFamily;return null!==(_props$$fontFamily=props.$fontFamily)&&void 0!==_props$$fontFamily?_props$$fontFamily:'"Alegreya, serif"'}};
  ${commonStyles}
`,StyledH2=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h2`
  font-size: ${props=>{var _props$$fontSize2;return null!==(_props$$fontSize2=props.$fontSize)&&void 0!==_props$$fontSize2?_props$$fontSize2:"large"===props.$size?"2.25rem":"medium"===props.$size?"2rem":"1.75rem"}};
  line-height: ${props=>{var _props$$lineHeight2;return(null!==(_props$$lineHeight2=props.$lineHeight)&&void 0!==_props$$lineHeight2?_props$$lineHeight2:"large"===props.$size)?"3.5rem":"medium"===props.$size?"3rem":"2.5rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily2;return null!==(_props$$fontFamily2=props.$fontFamily)&&void 0!==_props$$fontFamily2?_props$$fontFamily2:'"Alegreya, serif"'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH3=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h3`
  font-size: ${props=>{var _props$$fontSize3;return null!==(_props$$fontSize3=props.$fontSize)&&void 0!==_props$$fontSize3?_props$$fontSize3:"large"===props.$size?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}};
  line-height: ${props=>{var _props$$lineHeight3;return(null!==(_props$$lineHeight3=props.$lineHeight)&&void 0!==_props$$lineHeight3?_props$$lineHeight3:"large"===props.$size)?"3rem":"medium"===props.$size?"2.5rem":"2rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily3;return null!==(_props$$fontFamily3=props.$fontFamily)&&void 0!==_props$$fontFamily3?_props$$fontFamily3:'"Alegreya, serif"'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH4=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h4`
  font-size: ${props=>{var _props$$fontSize4;return null!==(_props$$fontSize4=props.$fontSize)&&void 0!==_props$$fontSize4?_props$$fontSize4:"large"===props.$size?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  line-height: ${props=>{var _props$$lineHeight4;return(null!==(_props$$lineHeight4=props.$lineHeight)&&void 0!==_props$$lineHeight4?_props$$lineHeight4:"large"===props.$size)?"2.5rem":"medium"===props.$size?"2rem":"1.75rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily4;return null!==(_props$$fontFamily4=props.$fontFamily)&&void 0!==_props$$fontFamily4?_props$$fontFamily4:'"Alegreya, serif"'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH5=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h5`
  font-size: ${props=>{var _props$$fontSize5;return null!==(_props$$fontSize5=props.$fontSize)&&void 0!==_props$$fontSize5?_props$$fontSize5:"large"===props.$size?"1.5rem":"medium"===props.$size?"1.25rem":"1rem"}};
  line-height: ${props=>{var _props$$lineHeight5;return(null!==(_props$$lineHeight5=props.$lineHeight)&&void 0!==_props$$lineHeight5?_props$$lineHeight5:"large"===props.$size)?"2rem":"medium"===props.$size?"1.75rem":"1.5rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily5;return null!==(_props$$fontFamily5=props.$fontFamily)&&void 0!==_props$$fontFamily5?_props$$fontFamily5:'"Alegreya, serif"'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledH6=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h6`
  font-size: ${props=>{var _props$$fontSize6;return null!==(_props$$fontSize6=props.$fontSize)&&void 0!==_props$$fontSize6?_props$$fontSize6:"large"===props.$size?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight6;return(null!==(_props$$lineHeight6=props.$lineHeight)&&void 0!==_props$$lineHeight6?_props$$lineHeight6:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily6;return null!==(_props$$fontFamily6=props.$fontFamily)&&void 0!==_props$$fontFamily6?_props$$fontFamily6:'"Alegreya, serif"'}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledDiv=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.div`
  font-size: ${props=>{var _props$$fontSize7;return null!==(_props$$fontSize7=props.$fontSize)&&void 0!==_props$$fontSize7?_props$$fontSize7:"large"===props.$size?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight7;return(null!==(_props$$lineHeight7=props.$lineHeight)&&void 0!==_props$$lineHeight7?_props$$lineHeight7:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily7;return null!==(_props$$fontFamily7=props.$fontFamily)&&void 0!==_props$$fontFamily7?_props$$fontFamily7:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledLabel=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.label`
  font-size: ${props=>{var _props$$fontSize8;return null!==(_props$$fontSize8=props.$fontSize)&&void 0!==_props$$fontSize8?_props$$fontSize8:"large"===props.$size?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight8;return(null!==(_props$$lineHeight8=props.$lineHeight)&&void 0!==_props$$lineHeight8?_props$$lineHeight8:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily8;return null!==(_props$$fontFamily8=props.$fontFamily)&&void 0!==_props$$fontFamily8?_props$$fontFamily8:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledSpan=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  font-size: ${props=>{var _props$$fontSize9;return null!==(_props$$fontSize9=props.$fontSize)&&void 0!==_props$$fontSize9?_props$$fontSize9:"large"===props.$size?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight9;return(null!==(_props$$lineHeight9=props.$lineHeight)&&void 0!==_props$$lineHeight9?_props$$lineHeight9:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily9;return null!==(_props$$fontFamily9=props.$fontFamily)&&void 0!==_props$$fontFamily9?_props$$fontFamily9:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`,StyledP=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.p`
  font-size: ${props=>{var _props$$fontSize10;return null!==(_props$$fontSize10=props.$fontSize)&&void 0!==_props$$fontSize10?_props$$fontSize10:"large"===props.$size?"1.25rem":"medium"===props.$size?"1rem":"0.875rem"}};
  line-height: ${props=>{var _props$$lineHeight10;return(null!==(_props$$lineHeight10=props.$lineHeight)&&void 0!==_props$$lineHeight10?_props$$lineHeight10:"large"===props.$size)?"1.75rem":"medium"===props.$size?"1.5rem":"1.25rem"}};
  font-weight: ${props=>props.$strong?"700":"400"};
  font-family: ${props=>{var _props$$fontFamily10;return null!==(_props$$fontFamily10=props.$fontFamily)&&void 0!==_props$$fontFamily10?_props$$fontFamily10:"'Varela Round', sans-serif"}};
  ${props=>!props.$disableColor&&`color: ${props.$color};`}
  ${commonStyles}
`;Text.__docgenInfo={description:"",methods:[],displayName:"Text",props:{id:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'| "h1"\n| "h2"\n| "h3"\n| "h4"\n| "h5"\n| "h6"\n| "div"\n| "paragraph"\n| "label"\n| "span"',elements:[{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'},{name:"literal",value:'"h4"'},{name:"literal",value:'"h5"'},{name:"literal",value:'"h6"'},{name:"literal",value:'"div"'},{name:"literal",value:'"paragraph"'},{name:"literal",value:'"label"'},{name:"literal",value:'"span"'}]},description:"",defaultValue:{value:'"div"',computed:!1}},strong:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},align:{required:!1,tsType:{name:"union",raw:'"left" | "center" | "right" | "justify"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"center"'},{name:"literal",value:'"right"'},{name:"literal",value:'"justify"'}]},description:"",defaultValue:{value:'"center"',computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},preciseColor:{required:!1,tsType:{name:"string"},description:""},wrap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},lineHeight:{required:!1,tsType:{name:"string"},description:""},disableColor:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}}}]);
//# sourceMappingURL=stories-components-Collapsible-Collapsible-stories.cad8544a.iframe.bundle.js.map