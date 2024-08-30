"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[4343],{"./src/stories/components/Loader/Loader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Circle:()=>Circle,Default:()=>Default,Playground:()=>Playground,Rectangle:()=>Rectangle,Square:()=>Square,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loader_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Loader=_ref=>{let{shape="square",height="2rem",width="2rem",borderRadius="circle"===shape?"50%":"0.5rem",color=colors.A.zB.iW,style,className,startTime=0}=_ref;const theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color);return(0,jsx_runtime.jsx)(StyledLoaderProps,{$width:width,$height:height,$shape:shape,$colorPalette:colorPalette,$color:color,$borderRadius:borderRadius,$startTime:startTime,style,className})},Loader_Loader=Loader,loadingAnimation=styled_components_browser_esm.i7`
  0% {
    left: -3rem;
  }
  50% {
    left: 100%
  }
  100% {
    left: 100%;
  }
`,StyledLoaderProps=styled_components_browser_esm.Ay.div`
  width: ${props=>props.$width};
  height: ${props=>props.$height};
  border-radius: ${props=>props.$borderRadius};
  background-color: ${props=>props.$colorPalette[props.$color].grayScale[1]};
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    display: block;
    position: absolute;
    animation: ${loadingAnimation} 2s infinite ${props=>props.$startTime}s;
    width: 3rem;
    left:-3rem;
    height: 100%;
    background: ${props=>`linear-gradient(90deg, transparent, ${props.$colorPalette[props.$color].grayScale[0]}, transparent)`};
  }
`;Loader.__docgenInfo={description:"",methods:[],displayName:"Loader",props:{shape:{required:!1,tsType:{name:"union",raw:'"circle" | "square" | "rectangle"',elements:[{name:"literal",value:'"circle"'},{name:"literal",value:'"square"'},{name:"literal",value:'"rectangle"'}]},description:"",defaultValue:{value:'"square"',computed:!1}},height:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"2rem"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"2rem"',computed:!1}},borderRadius:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'shape === "circle" ? "50%" : "0.5rem"',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},startTime:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}}}};const Loader_stories={title:"Components/Loader",component:Loader_Loader,parameters:{layout:"centered"},argTypes:{}},Default={render:args=>(0,jsx_runtime.jsx)(Loader_Loader,{startTime:0,...args})},Circle={render:args=>(0,jsx_runtime.jsx)(Loader_Loader,{startTime:0,...args}),args:{shape:"circle",width:"5rem",height:"5rem"}},Square={render:args=>(0,jsx_runtime.jsx)(Loader_Loader,{startTime:0,...args}),args:{shape:"square",width:"5rem",height:"5rem"}},Rectangle={render:args=>(0,jsx_runtime.jsx)(Loader_Loader,{startTime:0,...args}),args:{shape:"rectangle",width:"20rem",height:"5rem"}},Playground={render:args=>(0,jsx_runtime.jsx)(Loader_Loader,{startTime:0,...args}),args:{shape:"circle",width:"5rem",height:"5rem"}},__namedExportsOrder=["Default","Circle","Square","Rectangle","Playground"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => {\n    return <Loader startTime={0} {...args} />;\n  }\n}",...Default.parameters?.docs?.source}}},Circle.parameters={...Circle.parameters,docs:{...Circle.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Loader startTime={0} {...args} />;\n  },\n  args: {\n    shape: "circle",\n    width: "5rem",\n    height: "5rem"\n  }\n}',...Circle.parameters?.docs?.source}}},Square.parameters={...Square.parameters,docs:{...Square.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Loader startTime={0} {...args} />;\n  },\n  args: {\n    shape: "square",\n    width: "5rem",\n    height: "5rem"\n  }\n}',...Square.parameters?.docs?.source}}},Rectangle.parameters={...Rectangle.parameters,docs:{...Rectangle.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Loader startTime={0} {...args} />;\n  },\n  args: {\n    shape: "rectangle",\n    width: "20rem",\n    height: "5rem"\n  }\n}',...Rectangle.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    return <Loader startTime={0} {...args} />;\n  },\n  args: {\n    shape: "circle",\n    width: "5rem",\n    height: "5rem"\n  }\n}',...Playground.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=stories-components-Loader-Loader-stories.b4d6ba43.iframe.bundle.js.map