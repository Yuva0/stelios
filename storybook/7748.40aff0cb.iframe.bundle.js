"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[7748],{"./src/components/NavigationBar/NavigationBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledNavigationBarCtr=styled_components__WEBPACK_IMPORTED_MODULE_5__.Ay.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  left: 0;
  top: 0;
  height: 100vh;
  width: 15rem;
  overflow: scroll;
  border-right: ${props=>`1px solid ${props.$colorPalette[props.$color].grayScale[5]}`};
  background-color: ${props=>props.$colorPalette[props.$color].grayScale[0]};
`,NavigationBar=_ref=>{let{children,className,style,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__.A.zB.iW,onChange}=_ref;const[selectedIndex,setSelectedIndex]=react__WEBPACK_IMPORTED_MODULE_0__.useState(),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_1__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.jh)(theme,color),childrenList=Array.isArray(children)?children:[children],_handleSelectedIndex=(index,value)=>{index&&value&&index!==selectedIndex&&(setSelectedIndex(index),onChange&&onChange(value))};let index=0;const ChildrenEle=react__WEBPACK_IMPORTED_MODULE_0__.Children.map(childrenList,(child=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type?"string"==typeof child.type?child:"NavigationBarItem"===child.type.displayName?(index++,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{_index:index,selected:selectedIndex?selectedIndex===index:child.props.selected,_getSelectedIndex:_handleSelectedIndex})):"NavigationBarGroup"===child.type.displayName?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(child.props.children,(child=>react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)?(index++,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{_index:index,_getSelectedIndex:_handleSelectedIndex,selected:selectedIndex?selectedIndex===index:child.props.selected})):child))}):child:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StyledNavigationBarCtr,{$color:color,$colorPalette:colorPalette,className,style,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("nav",{children:ChildrenEle})})};NavigationBar.displayName="NavigationBar";const __WEBPACK_DEFAULT_EXPORT__=NavigationBar;NavigationBar.__docgenInfo={description:"",methods:[],displayName:"NavigationBar",props:{children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | [React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"tuple",raw:"[React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}]}]},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/components/NavigationBar/NavigationBarGroup/NavigationBarGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>NavigationBarGroup_NavigationBarGroup});var react=__webpack_require__("./node_modules/react/index.js"),Text=__webpack_require__("./src/components/Text/Text.tsx"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),IconChevronRight=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","chevron-right","IconChevronRight",[["path",{d:"M9 6l6 6l-6 6",key:"svg-0"}]]),ThemeProvider=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),helpers=__webpack_require__("./src/helpers/helpers.tsx"),colors=__webpack_require__("./src/tokens/colors.json"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavigationBarGroup=_ref=>{let{leadingIcon,children,title,expanded,className,color=colors.A.zB.iW,onClick}=_ref;const navigationBarGrpItmContnrRef=react.useRef(null),[expand,setExpand]=(0,react.useState)(null!=expanded&&expanded),theme=(0,ThemeProvider.DP)().theme,colorPalette=(0,helpers.jh)(theme,color),_toggleExpand=e=>{setExpand((expand=>!expand)),onClick&&onClick(e)};return(0,jsx_runtime.jsxs)(StyledNavBarGroup,{className,children:[(0,jsx_runtime.jsxs)(StyledNavBarGroupHeader,{tabIndex:0,$color:color,$colorPalette:colorPalette,onClick:_toggleExpand,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(_toggleExpand(e),onClick&&onClick(e))},children:[(0,jsx_runtime.jsxs)("span",{children:[leadingIcon&&(0,jsx_runtime.jsx)(StyledNavBarGroupIcon,{$colorPalette:colorPalette,$color:color,children:leadingIcon}),title&&"string"==typeof title?(0,jsx_runtime.jsx)(Text.A,{color,variant:"span",children:title}):title]}),(0,jsx_runtime.jsx)(StyledNavBarGroupIcon,{$colorPalette:colorPalette,$color:color,$expand:expand,children:(0,jsx_runtime.jsx)(IconChevronRight,{})})]}),(0,jsx_runtime.jsx)(StyledNavBarGroupItemContainer,{ref:navigationBarGrpItmContnrRef,$colorPalette:colorPalette,$color:color,$expand:expand,children:react.Children.map(children,((child,index)=>child&&react.cloneElement(child,{tabIndex:expand?0:-1,key:index})))})]})};NavigationBarGroup.displayName="NavigationBarGroup";const NavigationBarGroup_NavigationBarGroup=NavigationBarGroup,StyledNavBarGroup=styled_components_browser_esm.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  margin: 0.25rem 0 0 0;
  padding: 0;
`,StyledNavBarGroupHeader=styled_components_browser_esm.Ay.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0.75rem;
  border-radius: 0.5rem;
  margin: 0 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: ${props=>props.$colorPalette[props.$color].grayScale[1]};
  }
  &:active {
    background-color: ${props=>props.$colorPalette[props.$color].grayScale[2]};
  }
  &:focus-visible {
    outline: 1px solid ${props=>props.$colorPalette[props.$color].accentScale[6]};
  }
`,StyledNavBarGroupIcon=styled_components_browser_esm.Ay.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: rotate 0.15s ease-in-out;
  rotate: ${props=>props.$expand?"90deg":""};
  svg {
    width: 1rem;
    height: 1rem;
  }
  color: ${props=>props.$colorPalette[props.$color].grayScale[11]};
`,StyledNavBarGroupItemContainer=styled_components_browser_esm.Ay.ul`
  height: auto;
  max-height: ${props=>props.$expand?"100vh":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  gap: 0.25rem;
  padding: 0;

  li:first-child {
    margin-top: 0.1rem;
  }
  li:last-child {
    margin-bottom: 0.1rem;
  }
`;NavigationBarGroup.__docgenInfo={description:"",methods:[],displayName:"NavigationBarGroup",props:{_index:{required:!1,tsType:{name:"number"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | [React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"tuple",raw:"[React.ReactNode]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}]}]},description:""},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},expanded:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},_getSelectedIndex:{required:!1,tsType:{name:"signature",type:"function",raw:"(index?: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent | React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent | React.KeyboardEvent",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent"},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"}]},name:"e"}],return:{name:"void"}}},description:""}}}},"./src/components/NavigationBar/NavigationBarGroupItem/NavigationBarGroupItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/tokens/colors.json"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/helpers.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavigationBarGroupItem=_ref=>{let{_index,value,children,leadingIcon,trailingIcon,className,style,size,selected,tabIndex=0,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_2__.A.zB.iW,_getSelectedIndex,onClick}=_ref;const[_selected,setSelected]=react__WEBPACK_IMPORTED_MODULE_0__.useState(selected);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{setSelected(selected)}),[selected]);const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_3__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.jh)(theme,color),_onClick=e=>{setSelected(!0),_getSelectedIndex&&_getSelectedIndex(_index,value),onClick&&onClick(e)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledNavBarGroupItem,{tabIndex,$selected:_selected,$colorPalette:colorPalette,$color:color,className,style,onClick:_onClick,onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||_onClick(e)},children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledNavBarGrpItemIcon,{children:leadingIcon}),"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{color,variant:"span",size,children}):children,trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledNavBarGrpItemIcon,{children:trailingIcon})]})},__WEBPACK_DEFAULT_EXPORT__=NavigationBarGroupItem,StyledNavBarGroupItem=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.li`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem 0 0.4rem 1.75rem;
  margin: 0 0.5rem;
  color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[10]:props.$colorPalette[props.$color].grayScale[11]};
  background-color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[2]:"transparent"};
  &:hover {
    background-color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[3]:props.$colorPalette[props.$color].grayScale[1]};
  }
  &:active {
    background-color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[4]:props.$colorPalette[props.$color].grayScale[2]};
  }
  &:focus-visible {
    outline: 1px solid ${props=>props.$colorPalette[props.$color].accentScale[5]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    margin-left: 0.43rem;
    border-left: 1px solid
      ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[5]:props.$colorPalette[props.$color].grayScale[5]};
    top: 0;
    left: 0;
  }
`,StyledNavBarGrpItemIcon=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  margin-left: auto;
`;NavigationBarGroupItem.__docgenInfo={description:"",methods:[],displayName:"NavigationBarGroupItem",props:{_index:{required:!1,tsType:{name:"number"},description:""},value:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},selected:{required:!1,tsType:{name:"boolean"},description:""},tabIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent | React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent | React.KeyboardEvent",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent"},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"}]},name:"e"}],return:{name:"void"}}},description:""},_getSelectedIndex:{required:!1,tsType:{name:"signature",type:"function",raw:"(index?: number, value?: string) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}}},"./src/components/NavigationBar/NavigationBarHeader/NavigationBarHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavigationBarHeader=_ref=>{let{children,style,className,leadingIcon,trailingIcon,size,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW}=_ref;const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledNavBarHeader,{$colorPalette:colorPalette,$color:color,style,className,children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:leadingIcon}),"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{color,variant:"span",size:null!=size?size:"small",children}):children,trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span",{children:trailingIcon})]})},__WEBPACK_DEFAULT_EXPORT__=NavigationBarHeader,StyledNavBarHeader=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.li`
  display: flex;
  position: relative;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.25rem 0 0.25rem 2.25rem;
  color: ${props=>props.$colorPalette[props.$color].grayScale[11]};
  &:before {
    content: "";
    position: absolute;
    width: 0.35rem;
    height: 0.35rem;
    left: 0;
    margin-left: 0.75rem;
    border-radius: 50%;
    border: 1px solid ${props=>props.$colorPalette[props.$color].grayScale[5]};
  }
  &:after {
    content: "";
    position: absolute;
    height: 50%;
    margin-left: 0.93rem;
    border-left: 1px solid
      ${props=>props.$colorPalette[props.$color].grayScale[5]};
    top: calc(50% + 0.175rem);
    left: 0;
  }
`;NavigationBarHeader.__docgenInfo={description:"",methods:[],displayName:"NavigationBarHeader",props:{children:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""}}}},"./src/components/NavigationBar/NavigationBarItem/NavigationBarItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tokens/colors.json"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/helpers/helpers.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const NavigationBarItem=_ref=>{let{_index,value,children,leadingIcon,trailingIcon,className,style,size,selected=!1,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_3__.A.zB.iW,_getSelectedIndex,onClick}=_ref;const[_selected,setSelected]=react__WEBPACK_IMPORTED_MODULE_0__.useState(selected);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{setSelected(selected)}),[selected]);const theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_4__.jh)(theme,color);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledNavBarItem,{tabIndex:0,$selected:_selected,$colorPalette:colorPalette,$color:color,className,style,onClick:e=>{setSelected(!0),_getSelectedIndex&&_getSelectedIndex(_index,value),onClick&&onClick(e)},onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(setSelected(!0),_getSelectedIndex&&_getSelectedIndex(_index,value),onClick&&onClick(e))},children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledNavBarIcon,{children:leadingIcon}),"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{color,variant:"span",size,children}):children,trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledNavBarIcon,{children:trailingIcon})]})};NavigationBarItem.displayName="NavigationBarItem";const __WEBPACK_DEFAULT_EXPORT__=NavigationBarItem,StyledNavBarItem=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.li`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.3rem 0.75rem;
  margin: 0 0.5rem;
  color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[10]:props.$colorPalette[props.$color].grayScale[11]};
  background-color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[2]:"transparent"};
  &:hover {
    background-color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[3]:props.$colorPalette[props.$color].grayScale[1]};
  }
  &:active {
    background-color: ${props=>props.$selected?props.$colorPalette[props.$color].accentScale[4]:props.$colorPalette[props.$color].grayScale[2]};
  }
  &:focus-visible {
    outline: 1px solid ${props=>props.$colorPalette[props.$color].accentScale[6]};
  }
`,StyledNavBarIcon=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  margin-left: auto;
`;NavigationBarItem.__docgenInfo={description:"",methods:[],displayName:"NavigationBarItem",props:{_index:{required:!1,tsType:{name:"number"},description:""},value:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent | React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent | React.KeyboardEvent",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent"},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"}]},name:"e"}],return:{name:"void"}}},description:""},_getSelectedIndex:{required:!1,tsType:{name:"signature",type:"function",raw:"(index?: number, value?: string) => void",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}}}}]);
//# sourceMappingURL=7748.40aff0cb.iframe.bundle.js.map