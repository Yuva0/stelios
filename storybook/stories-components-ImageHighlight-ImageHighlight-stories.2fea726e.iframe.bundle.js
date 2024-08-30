"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[7939],{"./src/stories/components/ImageHighlight/ImageHighlight.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ImageHighlight_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ImageHighlight=_ref=>{let{imgSrc,imgAlt,gradientColors,color=colors.A.zB.iW,"data-testid":dataTestId,...props}=_ref;const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color);return(0,jsx_runtime.jsx)(StyledImgHighlightCtr,{$gradientColors:gradientColors,"data-testId":dataTestId,...props,children:(0,jsx_runtime.jsx)(StyledImgCtr,{$colorPalette:colorPalette,$color:color,children:(0,jsx_runtime.jsx)(StyledImg,{src:imgSrc,alt:imgAlt})})})},ImageHighlight_ImageHighlight=ImageHighlight,gradientMove=styled_components_browser_esm.i7`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,StyledImgHighlightCtr=styled_components_browser_esm.Ay.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: ${props=>props.$gradientColors?`linear-gradient(to bottom left, ${props.$gradientColors.toString()})`:"linear-gradient(to bottom left, #fb6f92, #f7cb5e)"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: 200% 200%;
  animation: ${gradientMove} 1s infinite linear;
`,StyledImgCtr=styled_components_browser_esm.Ay.div`
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  border-radius: 50%;
  border: 0.25rem solid white;
  background-color: ${props=>props.$colorPalette[props.$color].grayScale[0]};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`,StyledImg=styled_components_browser_esm.Ay.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;ImageHighlight.__docgenInfo={description:"",methods:[],displayName:"ImageHighlight",props:{imgSrc:{required:!0,tsType:{name:"string"},description:""},imgAlt:{required:!0,tsType:{name:"string"},description:""},gradientColors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"Array<string>"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},"data-testid":{required:!1,tsType:{name:"string"},description:""}}};const ImageHighlight_stories={title:"Components/ImageHighlight",component:ImageHighlight_ImageHighlight,parameters:{layout:"centered"},argTypes:{}},Default={...{render:args=>(0,jsx_runtime.jsx)(ImageHighlight_ImageHighlight,{...args}),args:{imgAlt:"Profile Picture",imgSrc:"https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg"}}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...Template\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-components-ImageHighlight-ImageHighlight-stories.2fea726e.iframe.bundle.js.map