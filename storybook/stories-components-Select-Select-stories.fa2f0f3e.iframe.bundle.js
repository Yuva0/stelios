/*! For license information please see stories-components-Select-Select-stories.fa2f0f3e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[6981],{"./src/stories/components/Select/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Large:()=>Large,Medium:()=>Medium,Outlined:()=>Outlined,Playground:()=>Playground,Small:()=>Small,Soft:()=>Soft,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Select_stories});var react=__webpack_require__("./node_modules/react/index.js"),Input=__webpack_require__("./src/components/Input/Input.tsx"),IconArrowDown=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDown.mjs"),Menu=__webpack_require__("./src/components/Menu/Menu.tsx"),MenuItem=__webpack_require__("./src/components/MenuItem/MenuItem.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Select=_ref=>{var _inputRef$current;let{label,open=!1,options,placeholder="",variant="contained",size="medium",width,"data-testid":dataTestId,"data-testid-input":dataTestIdInput,"data-testid-menu":dataTestIdMenu,color,menuProps,onClick,...props}=_ref;const inputRef=react.useRef(null),[isOpen,setIsOpen]=react.useState(open),[inputValue,setInputValue]=react.useState("");return(0,jsx_runtime.jsxs)("div",{"data-testid":dataTestId,children:[(0,jsx_runtime.jsx)(Input.A,{variant,placeholder,value:inputValue,disableSearch:!0,width,containerRef:inputRef,label,size,trailingIcon:(0,jsx_runtime.jsx)(IconArrowDown.A,{}),cursor:"pointer",color,onClick:()=>{setIsOpen(!isOpen)},"data-testid-input":dataTestIdInput,...props}),(0,jsx_runtime.jsx)(Menu.A,{variant,open:isOpen,anchorElement:inputRef.current,minWidth:`${null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current?void 0:_inputRef$current.offsetWidth}px`,onClick:(e,_ref3)=>{let{title,value}=_ref3;return((e,_ref2)=>{let{title,value}=_ref2;setIsOpen(!1),setInputValue(title),onClick&&onClick(e,{title,value})})(e,{title,value})},color,"data-testid":dataTestIdMenu,style:null==menuProps?void 0:menuProps.style,...menuProps,children:options&&options.map(((option,index)=>(0,jsx_runtime.jsx)(MenuItem.A,{...option},index)))})]})},Select_Select=Select;Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiSelect:{required:!1,tsType:{name:"boolean"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},width:{required:!1,tsType:{name:"string"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItemProps"}],raw:"MenuItemProps[]"},description:""},color:{required:!1,tsType:{name:"string"},description:""},menuProps:{required:!1,tsType:{name:"MenuProps"},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},"data-testid-input":{required:!1,tsType:{name:"string"},description:""},"data-testid-menu":{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, { title, value }: MenuItemKeyProps) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""}}};const Select_stories={title:"Components/Select",component:Select_Select,parameters:{layout:"centered"},argTypes:{},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{minHeight:"15rem"},children:(0,jsx_runtime.jsx)(Story,{})})]},Template={render:args=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Select_Select,{label:"Select",placeholder:"Select an option",...args,options:[{title:"Option 1",value:"option 1"},{title:"Option 2",value:"option 2"},{title:"Option 3",value:"option 3"},{title:"Option 4",value:"option 4"}]})})},Contained={...Template,args:{variant:"contained"}},Outlined={...Template,args:{variant:"outlined"}},Soft={...Template,args:{variant:"soft"}},Small={...Template,args:{size:"small"}},Medium={...Template,args:{size:"medium"}},Large={...Template,args:{size:"large"}},Playground=Template,__namedExportsOrder=["Contained","Outlined","Soft","Small","Medium","Large","Playground"];Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "contained"\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "outlined"\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "soft"\n  }\n}',...Soft.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "small"\n  }\n}',...Small.parameters?.docs?.source}}},Medium.parameters={...Medium.parameters,docs:{...Medium.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "medium"\n  }\n}',...Medium.parameters?.docs?.source}}},Large.parameters={...Large.parameters,docs:{...Large.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    size: "large"\n  }\n}',...Large.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"Template",...Playground.parameters?.docs?.source}}}},"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDown.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconArrowDown});var IconArrowDown=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]])},"./src/components/ClickAwayListener/ClickAwayListener.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClickAwayListener=_ref=>{let{children,onClickAway,"data-testid":dataTestId}=_ref;const clickAwayListenerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const handleClickAway=e=>{clickAwayListenerRef.current&&!clickAwayListenerRef.current.contains(e.target)&&onClickAway&&onClickAway(e)};return window.addEventListener("click",handleClickAway,!0),()=>{window.removeEventListener("click",handleClickAway,!0)}}),[children,onClickAway]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-testid":dataTestId,ref:clickAwayListenerRef,children})},__WEBPACK_DEFAULT_EXPORT__=ClickAwayListener;ClickAwayListener.__docgenInfo={description:"",methods:[],displayName:"ClickAwayListener",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClickAway:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_popper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ClickAwayListener/ClickAwayListener.tsx"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Menu=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{var _ref2,_ref3;let{children,popperStyles,variant="contained",open=!1,minWidth="0",anchorElement,hideOnOutsideClick=!0,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,className,style,onClick,onClose,"data-testid":dataTestId,...props}=_ref;const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(open),[popperElement,setPopperElement]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[focusVisible,setFocusVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),{styles,attributes,update}=(0,react_popper__WEBPACK_IMPORTED_MODULE_6__.E)(anchorElement,popperElement,{placement:null!==(_ref2=popperStyles&&popperStyles.placement)&&void 0!==_ref2?_ref2:"bottom-start",modifiers:null!==(_ref3=popperStyles&&popperStyles.modifiers)&&void 0!==_ref3?_ref3:[{name:"offset",options:{offset:[0,2.5]}}]});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{update&&update()}),[anchorElement,update]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsOpen(open)}),[open]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setFocusVisible(0)}),[isOpen]);const _onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((e,_ref4)=>{let{title,value}=_ref4;onClick&&onClick(e,{title,value})}),[onClick]),_onClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setIsOpen(!1),onClose&&onClose(e)}),[onClose]),_onKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{"ArrowDown"===e.key?(e.preventDefault(),setFocusVisible((prev=>(prev+1)%react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)))):"ArrowUp"===e.key&&(e.preventDefault(),setFocusVisible((prev=>(prev-1+react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children))%react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children))))}),[children]);if(Array.isArray(children)&&0===children.length)return null;const MenuElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuContainer,{ref:setPopperElement,$open:isOpen,$minWidth:minWidth,$colorPalette:colorPalette,$color:color,$variant:variant,style:{...styles.popper,...style},onKeyDown:_onKeyDown,"data-testid":dataTestId,className,...attributes.popper,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenu,{children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>child&&react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{key:index,...!child.props.color&&{color},...!child.props.variant&&{variant},pvtHasFocus:focusVisible===index,pvtOnClick:_onClick}):child))})});return hideOnOutsideClick?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__.A,{onClickAway:_onClose,children:MenuElement}):MenuElement})),__WEBPACK_DEFAULT_EXPORT__=Menu,StyledMenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div`
  display: ${props=>props.$open?"block":"none"};
  min-width: ${props=>props.$minWidth};
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  ${props=>((variant,colorPalette,color)=>{switch(variant){case"contained":return styled_components__WEBPACK_IMPORTED_MODULE_7__.AH`
        background-color: ${colorPalette[color].accentScale[8]};
        color: ${colorPalette[color].accentContrast};
        border: 2px solid ${colorPalette[color].accentScale[8]};
      `;case"outlined":return styled_components__WEBPACK_IMPORTED_MODULE_7__.AH`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[5]};
      `;case"soft":return styled_components__WEBPACK_IMPORTED_MODULE_7__.AH`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[2]};
      `;case"neumorph":return styled_components__WEBPACK_IMPORTED_MODULE_7__.AH`
        background-color: ${"light"===colorPalette[color].appearance?"#fff":"#000"};
        color: ${colorPalette[color].accentScale[10]};
        box-shadow: 0 6px 6px rgba(0, 0, 0, .1), 6px -6px 12px rgba(0, 0, 0, 0.1);
      `}})(props.$variant,props.$colorPalette,props.$color)}
  
`,StyledMenu=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  list-style-type: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  user-select: none;
`;Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{variant:{defaultValue:{value:'"contained"',computed:!1},required:!1},open:{defaultValue:{value:"false",computed:!1},required:!1},minWidth:{defaultValue:{value:'"0"',computed:!1},required:!1},hideOnOutsideClick:{defaultValue:{value:"true",computed:!1},required:!1},color:{defaultValue:{value:"colorTokens.default.primary.main",computed:!0},required:!1}}}},"./src/components/MenuItem/MenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuItem=_ref=>{let{leadingIcon,trailingIcon,children,title,value,variant="contained",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,onClick,"data-testid":dataTestId,pvtHasFocus,pvtOnClick}=_ref;const menuItemRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{pvtHasFocus&&menuItemRef.current&&menuItemRef.current.focus()}),[menuItemRef,pvtHasFocus]);const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledMenuItem,{ref:menuItemRef,tabIndex:pvtHasFocus?0:-1,$variant:variant,$colorPalette:colorPalette,$color:color,onClick:event=>{pvtOnClick&&pvtOnClick(event,{title,value}),onClick&&onClick(event,{title,value})},onKeyDown:event=>{"Enter"!==event.key&&" "!==event.key||(pvtOnClick&&pvtOnClick(event,{title,value}),onClick&&onClick(event,{title,value}))},"data-testid":dataTestId,children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemIcon,{children:leadingIcon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children:children?"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"paragraph",children}):children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"paragraph",children:title})}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children:trailingIcon})]})},__WEBPACK_DEFAULT_EXPORT__=MenuItem,StyledMenuItem=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0.5rem 1rem 0.5rem 1rem;
  gap: 0.25rem;
  cursor: pointer;
  ${props=>variantStyleHandler(props.$variant,props.$colorPalette,props.$color)}
`,StyledMenuItemContent=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  width: 100%;
`,StyledMenuItemIcon=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`,variantStyleHandler=(variant,colorPalette,color)=>{switch(variant){case"contained":return styled_components__WEBPACK_IMPORTED_MODULE_6__.AH`
        background-color: ${colorPalette[color].accentScale[8]};
        color: ${colorPalette[color].accentContrast};

        &:hover {
          background-color: ${colorPalette[color].accentScale[9]};
          color: ${colorPalette[color].accentContrast};
        }

        &:active {
          background-color: ${colorPalette[color].accentScale[9]};
          color: ${colorPalette[color].accentContrast};
        }

        &:focus-visible {
          outline: 2px solid ${colorPalette[color].accentScale[10]};
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `;case"outlined":return styled_components__WEBPACK_IMPORTED_MODULE_6__.AH`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};

        &:hover {
          background-color: ${colorPalette[color].grayScale[1]};
          color: ${colorPalette[color].accentScale[10]};
        }

        &:active {
          background-color: transparent;
          color: ${colorPalette[color].accentScale[10]};
        }

        &:focus-visible {
          outline: 2px solid ${colorPalette[color].accentScale[10]};
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `;case"soft":return styled_components__WEBPACK_IMPORTED_MODULE_6__.AH`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};

        &:hover {
          background-color: ${colorPalette[color].accentScale[3]};
          color: ${colorPalette[color].accentScale[10]};
        }

        &:active {
          background-color: ${colorPalette[color].accentScale[3]};
          color: ${colorPalette[color].accentScale[10]};
        }

        &:focus-visible {
          outline: 2px solid ${colorPalette[color].accentScale[10]};
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `;case"neumorph":return styled_components__WEBPACK_IMPORTED_MODULE_6__.AH`
        background-color: transparent;
        color: ${colorPalette[color].accentScale[10]};

        &:hover {
          background-color: ${colorPalette[color].grayScale[0]};
          color: ${colorPalette[color].accentScale[10]};
        }
        
        &:active {
          background-color: ${colorPalette[color].grayScale[1]};
          color: ${colorPalette[color].accentScale[10]};
        }
        
        &:focus-visible {
          background-color: ${colorPalette[color].accentScale[0]};
          outline: none;
          border-radius: 0.25rem;
          outline-offset: -0.125rem;
        }
      `}};MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},key:{required:!1,tsType:{name:"number"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft" | "neumorph"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'},{name:"literal",value:'"neumorph"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,\n  { value, title }: MenuItemKeyProps\n) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]}]},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},pvtOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>,\n  { value, title }: MenuItemKeyProps\n) => void",signature:{arguments:[{type:{name:"union",raw:"React.MouseEvent<HTMLLIElement> | React.KeyboardEvent<HTMLLIElement>",elements:[{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]}]},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""},pvtHasFocus:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);
//# sourceMappingURL=stories-components-Select-Select-stories.fa2f0f3e.iframe.bundle.js.map