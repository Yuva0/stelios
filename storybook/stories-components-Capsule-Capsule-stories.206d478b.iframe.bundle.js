"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[2419],{"./src/stories/components/Capsule/Capsule.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Neumorph:()=>Neumorph,Outlined:()=>Outlined,Playground:()=>Playground,Soft:()=>Soft,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Capsule_stories});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Capsule=(0,react.forwardRef)(((_ref,ref)=>{let{image,imageAlt,title,description,color=colors.A.zB.iW,variant="contained",imagePosition="left",width="25rem",height="fit-content",textProps,style,clickable=!1,"data-testid":dataTestId,...rest}=_ref;const innerRef=(0,react.useRef)(null),theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color);return(0,jsx_runtime.jsxs)(StyledCapsuleContainer,{style,ref:innerRef,$variant:variant,$color:color,$colorPalette:colorPalette,$imagePosition:imagePosition,$width:width,$clickable:clickable,$height:height,"data-testid":dataTestId,...rest,children:[(0,jsx_runtime.jsx)(StyledImgContainer,{$imagePosition:imagePosition,children:(0,jsx_runtime.jsx)("img",{src:image,alt:imageAlt})}),title||description?(0,jsx_runtime.jsxs)(StyledTextContainer,{$padding:(null==textProps?void 0:textProps.padding)||"0.5rem 0.75rem",children:[title&&(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"paragraph",children:title}),description&&(0,jsx_runtime.jsx)(Text.A,{disableColor:!0,variant:"paragraph",size:"small",children:description})]}):null]})})),StyledCapsuleContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  border-radius: 1rem;
  flex-direction: ${props=>"left"===props.$imagePosition?"row":"row-reverse"};
  width: ${props=>props.$width};
  height: ${props=>props.$height};
  cursor: ${props=>props.$clickable?"pointer":"default"};
  ${props=>getVariantProps(props.$variant,props.$color,props.$colorPalette,props.$clickable)}
`,StyledTextContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  flex-direction: column;
  padding: ${_ref2=>{let{$padding}=_ref2;return $padding}};
  gap: 0.2rem;
  flex: 0 0 70%;
  box-sizing: border-box;
`,StyledImgContainer=styled_components_browser_esm.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 30%;
  border-radius: ${_ref3=>{let{$imagePosition}=_ref3;return"left"===$imagePosition?"0.9rem 0 0 0.9rem":"0 0.9rem 0.9rem 0"}};
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`,getVariantProps=(variant,color,colorPalette,clickable)=>{switch(variant){case"contained":return styled_components_browser_esm.AH`
        background-color: ${colorPalette[color].accentScale[8]};
        color: ${colorPalette[color].accentContrast};
        border: 2px solid ${colorPalette[color].accentScale[8]};

        ${clickable&&styled_components_browser_esm.AH`
          &:hover {
            background-color: ${colorPalette[color].accentScale[9]};
            border: 2px solid ${colorPalette[color].accentScale[9]};
          }
          &:active {
            background-color: ${colorPalette[color].accentScale[9]};
            border: 2px solid ${colorPalette[color].accentScale[9]};
            filter: brightness(0.92) saturate(1.1);
          }
        `}
      `;case"outlined":return styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[8]};
        border: 2px solid ${colorPalette[color].accentScale[5]};

        ${clickable&&styled_components_browser_esm.AH`
          &:hover {
            background-color: transparent;
            border: 2px solid ${colorPalette[color].accentScale[6]};
          }
          &:active {
            background-color: transparent;
            border: 2px solid ${colorPalette[color].accentScale[7]};
          }
        `}
      `;case"soft":return styled_components_browser_esm.AH`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[2]};

        ${clickable&&styled_components_browser_esm.AH`
          &:hover {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[3]};
          }
          &:active {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[3]};
            filter: brightness(0.92) saturate(1.1);
          }
        `}
      `;case"outlined-soft":return styled_components_browser_esm.AH`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[5]};

        ${clickable&&styled_components_browser_esm.AH`
          &:hover {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[6]};
          }
          &:active {
            background-color: ${colorPalette[color].accentScale[3]};
            border: 2px solid ${colorPalette[color].accentScale[6]};
            filter: brightness(0.92) saturate(1.1);
          }
        `}
      `;case"neumorph":return styled_components_browser_esm.AH`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid transparent;
        box-shadow: ${"light"===colorPalette[color].appearance?"-6px -6px 14px rgba(255, 255, 255, .7), -6px -6px 10px rgba(255, 255, 255, .5), 6px 6px 8px rgba(255, 255, 255, .075), 6px 6px 10px rgba(0, 0, 0, .15)":"-6px -6px 14px rgba(0, 0, 0, 0.1),-6px -6px 10px rgba(0, 0, 0, .01),6px 6px 10px rgba(0, 0, 0, 0.4),6px 6px 10px rgba(0, 0, 0, .1)"};

        ${clickable&&styled_components_browser_esm.AH`
          &:hover {
            background-color: transparent;
            border: 2px solid transparent;
            box-shadow: ${"light"===colorPalette[color].appearance?"-2px -2px 6px rgba(255, 255, 255, .6), -2px -2px 4px rgba(255, 255, 255, .4), 2px 2px 2px rgba(255, 255, 255, .05), 2px 2px 4px rgba(0, 0, 0, .1)":"-1px -1px 6px rgba(0, 0, 0, 0.4), -3px -3px 6px rgba(0, 0, 0, .01), 1px 1px 6px rgba(0, 0, 0, 0.4), 3px 3px 6px rgba(0, 0, 0, 0.1)"};
          }
          &:active {
            background-color: transparent;
            border: 2px solid transparent;
            box-shadow: ${"light"===colorPalette[color].appearance?"inset -2px -2px 6px rgba(255, 255, 255, .7), inset -2px -2px 4px rgba(255, 255, 255, .5), inset 2px 2px 2px rgba(255, 255, 255, .075), inset 2px 2px 4px rgba(0, 0, 0, .15)":"inset -2px -2px 14px rgba(0, 0, 0, 0.1),inset -2px -2px 4px rgba(0, 0, 0, .1),inset 2px 2px 4px rgba(0, 0, 0, .1),inset 2px 2px 8px rgba(0, 0, 0, .1)"};
          }
        `}
      `}},Capsule_Capsule=Capsule;Capsule.__docgenInfo={description:"",methods:[],displayName:"Capsule",props:{variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "outlined-soft" | "neumorph"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"outlined-soft"'},{name:"literal",value:'"neumorph"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colors.default.primary.main",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"25rem"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"fit-content"',computed:!1}},image:{required:!0,tsType:{name:"string"},description:""},imageAlt:{required:!0,tsType:{name:"string"},description:""},textProps:{required:!1,tsType:{name:"signature",type:"object",raw:"{\n  padding?: string;\n}",signature:{properties:[{key:"padding",value:{name:"string",required:!1}}]}},description:""},imagePosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const IMAGE_URL="https://static.vecteezy.com/system/resources/previews/003/549/556/non_2x/space-galaxy-background-free-vector.jpg",Capsule_stories={title:"Components/Capsule",component:Capsule_Capsule,parameters:{layout:"centered"},argTypes:{}},CapsuleTemplate={render:args=>(0,jsx_runtime.jsx)(Capsule_Capsule,{...args})},Contained={...CapsuleTemplate,args:{image:IMAGE_URL,imageAlt:"Space",variant:"contained",title:"No Man's Sky",description:"One of the best games ever"},parameters:{controls:{hideNoControlsWarning:!0,disabled:!0,disable:!0},actions:{hideNoControlsWarning:!0,disabled:!0,disable:!0}}},Outlined={...CapsuleTemplate,args:{image:IMAGE_URL,imageAlt:"Space",variant:"outlined",title:"No Man's Sky",description:"One of the best games ever"},parameters:{controls:{hideNoControlsWarning:!0,disabled:!0,disable:!0},actions:{hideNoControlsWarning:!0,disabled:!0,disable:!0}}},Soft={...CapsuleTemplate,args:{image:IMAGE_URL,imageAlt:"Space",variant:"soft",title:"No Man's Sky",description:"One of the best games ever"},parameters:{controls:{hideNoControlsWarning:!0,disabled:!0,disable:!0},actions:{hideNoControlsWarning:!0,disabled:!0,disable:!0}}},Neumorph={...CapsuleTemplate,args:{image:IMAGE_URL,imageAlt:"Space",variant:"neumorph",title:"No Man's Sky",description:"One of the best games ever"},parameters:{controls:{hideNoControlsWarning:!0,disabled:!0,disable:!0},actions:{hideNoControlsWarning:!0,disabled:!0,disable:!0}}},Playground={...CapsuleTemplate,args:{image:IMAGE_URL,imageAlt:"Space",title:"No Man's Sky",description:"One of the best games ever"}},__namedExportsOrder=["Contained","Outlined","Soft","Neumorph","Playground"];Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...CapsuleTemplate,\n  args: {\n    image: IMAGE_URL,\n    imageAlt: "Space",\n    variant: "contained",\n    title: "No Man\'s Sky",\n    description: "One of the best games ever"\n  },\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    },\n    actions: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    }\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...CapsuleTemplate,\n  args: {\n    image: IMAGE_URL,\n    imageAlt: "Space",\n    variant: "outlined",\n    title: "No Man\'s Sky",\n    description: "One of the best games ever"\n  },\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    },\n    actions: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    }\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...CapsuleTemplate,\n  args: {\n    image: IMAGE_URL,\n    imageAlt: "Space",\n    variant: "soft",\n    title: "No Man\'s Sky",\n    description: "One of the best games ever"\n  },\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    },\n    actions: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    }\n  }\n}',...Soft.parameters?.docs?.source}}},Neumorph.parameters={...Neumorph.parameters,docs:{...Neumorph.parameters?.docs,source:{originalSource:'{\n  ...CapsuleTemplate,\n  args: {\n    image: IMAGE_URL,\n    imageAlt: "Space",\n    variant: "neumorph",\n    title: "No Man\'s Sky",\n    description: "One of the best games ever"\n  },\n  parameters: {\n    controls: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    },\n    actions: {\n      hideNoControlsWarning: true,\n      disabled: true,\n      disable: true\n    }\n  }\n}',...Neumorph.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  ...CapsuleTemplate,\n  args: {\n    image: IMAGE_URL,\n    imageAlt: "Space",\n    title: "No Man\'s Sky",\n    description: "One of the best games ever"\n  }\n}',...Playground.parameters?.docs?.source}}}},"./src/components/Text/Text.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_helmet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-helmet/es/Helmet.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Text=_ref=>{let{variant="div",strong,children,align="center",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,preciseColor,wrap=!1,size="medium",disableColor=!1,fontSize,lineHeight,style,className,fontFamily,"data-testid":dataTestId,...props}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;let _styledProps;if(disableColor)_styledProps={$disableColor:disableColor};else{const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),_color=null!=preciseColor?preciseColor:colorPalette[color].accentScale[10];_styledProps={$disableColor:disableColor,$color:_color}}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_helmet__WEBPACK_IMPORTED_MODULE_1__.m,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:""}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Alegreya:wght@400;700&family=Varela+Round&display=swap",rel:"stylesheet"})]}),(()=>{switch(variant){case"h1":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH1,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h2":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH2,{$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h3":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH3,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h4":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH4,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h5":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH5,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"h6":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledH6,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"div":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledDiv,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"paragraph":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledP,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"label":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledLabel,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children});case"span":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledSpan,{$variant:variant,$strong:strong,$align:align,$wrap:wrap,$size:size,$fontSize:fontSize,$lineHeight:lineHeight,$fontFamily:fontFamily,style,className,"data-testid":dataTestId,...props,..._styledProps,children})}})()]})},__WEBPACK_DEFAULT_EXPORT__=Text,commonStyles="\n  padding: 0;\n  margin: 0;\n",StyledH1=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.h1`
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
//# sourceMappingURL=stories-components-Capsule-Capsule-stories.206d478b.iframe.bundle.js.map