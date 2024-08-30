/*! For license information please see 2078.abe75150.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[2078],{"./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createReactComponent});var react=__webpack_require__("./node_modules/react/index.js"),defaultAttributes={outline:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},filled:{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"currentColor",stroke:"none"}};const createReactComponent=(type,iconName,iconNamePascal,iconNode)=>{const Component=(0,react.forwardRef)((({color="currentColor",size=24,stroke=2,title,className,children,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes[type],width:size,height:size,className:["tabler-icon",`tabler-icon-${iconName}`,className].join(" "),..."filled"===type?{fill:color}:{strokeWidth:stroke,stroke:color},...rest},[title&&(0,react.createElement)("title",{key:"svg-title"},title),...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]])));return Component.displayName=`${iconNamePascal}`,Component}},"./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDown.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IconArrowDown});var IconArrowDown=(0,__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/createReactComponent.mjs").A)("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]])},"./src/components/Autocomplete/Autocomplete.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Menu/Menu.tsx"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDown.mjs"),_Input_Input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Input/Input.tsx"),_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/MenuItem/MenuItem.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Autocomplete=_ref=>{var _inputRef$current;let{id,options,placeholder,value,className,style,label,open,multiSelect,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,width="15rem",variant="contained",size="medium",onChange,onClick,onInputChange,"data-testid":dataTestId,"data-testid-input":dataTestIdInput,"data-testid-menu":dataTestIdMenu,...props}=_ref;const inputRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[isOpen,setIsOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null!=open&&open),[inputValue,setInputValue]=react__WEBPACK_IMPORTED_MODULE_0__.useState(value?multiSelect&&"string"==typeof value?[value]:value:""),[filteredOptions,setFilteredOptions]=react__WEBPACK_IMPORTED_MODULE_0__.useState(options);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setInputValue(null!=value?value:"")}),[value]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setFilteredOptions((()=>inputValue?options?options.filter((option=>option.title.toLowerCase().includes(inputValue.toString().toLowerCase())||option.value.toLowerCase().includes(inputValue.toString().toLowerCase()))):void 0:options))}),[options,inputValue]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{"data-testid":dataTestId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_2__.A,{size,variant,color,width,placeholder,value:inputValue,containerRef:inputRef,label,trailingIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__.A,{}),className,style,onClick:e=>{setIsOpen(!isOpen)},onChange:e=>{setIsOpen(!0),setInputValue(e.target.value),onInputChange&&onInputChange(e,e.target.value)},"data-testid-input":dataTestIdInput,...props}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__.A,{color,variant,open:isOpen,anchorElement:inputRef.current,minWidth:`${null===(_inputRef$current=inputRef.current)||void 0===_inputRef$current?void 0:_inputRef$current.offsetWidth}px`,onClick:(e,_ref4)=>{let{title,value}=_ref4;return multiSelect?((e,_ref2)=>{let{title,value}=_ref2;setInputValue(inputValue?Array.isArray(inputValue)?[...inputValue,title]:[inputValue,title]:title)})(0,{title,value}):((e,_ref3)=>{let{title,value}=_ref3;setIsOpen(!1),setInputValue(title),onClick&&onClick(e,{title,value}),onChange&&onChange(e,{title,value})})(e,{title,value})},"data-testid":dataTestIdMenu,children:null==filteredOptions?void 0:filteredOptions.map(((option,index)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__.A,{...option,title:option.title,value:option.value,key:index})))})]})},__WEBPACK_DEFAULT_EXPORT__=Autocomplete;Autocomplete.__docgenInfo={description:"",methods:[],displayName:"Autocomplete",props:{id:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"15rem"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"MenuItemProps"}],raw:"MenuItemProps[]"},description:""},multiSelect:{required:!1,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent,\n  { title, value }: MenuItemKeyProps\n) => void",signature:{arguments:[{type:{name:"union",raw:"React.ChangeEvent<HTMLInputElement> | React.MouseEvent",elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactMouseEvent",raw:"React.MouseEvent"}]},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent,\n  value?: string\n) => void",signature:{arguments:[{type:{name:"union",raw:"React.ChangeEvent<HTMLInputElement> | React.MouseEvent",elements:[{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactMouseEvent",raw:"React.MouseEvent"}]},name:"e"},{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent, { title, value }: MenuItemKeyProps) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},"data-testid-input":{required:!1,tsType:{name:"string"},description:""},"data-testid-menu":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/ClickAwayListener/ClickAwayListener.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClickAwayListener=_ref=>{let{children,onClickAway,"data-testid":dataTestId}=_ref;const clickAwayListenerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleClickAway=e=>{children&&clickAwayListenerRef.current&&!clickAwayListenerRef.current.contains(e.target)&&onClickAway&&onClickAway(e)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(window.addEventListener("click",handleClickAway,!0),()=>{window.removeEventListener("click",handleClickAway,!0)}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-testid":dataTestId,ref:clickAwayListenerRef,children})},__WEBPACK_DEFAULT_EXPORT__=ClickAwayListener;ClickAwayListener.__docgenInfo={description:"",methods:[],displayName:"ClickAwayListener",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClickAway:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_popper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ClickAwayListener/ClickAwayListener.tsx"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Menu=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{var _ref2,_ref3;let{children,style,popperStyles,variant="contained",open=!1,minWidth="none",anchorElement,hideOnOutsideClick=!0,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,onClick,onClose}=_ref;const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null!=open&&open),[popperElement,setPopperElement]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[focusVisible,setFocusVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),{styles,attributes}=(0,react_popper__WEBPACK_IMPORTED_MODULE_6__.E)(anchorElement,popperElement,{placement:null!==(_ref2=popperStyles&&popperStyles.placement)&&void 0!==_ref2?_ref2:"bottom-start",modifiers:null!==(_ref3=popperStyles&&popperStyles.modifiers)&&void 0!==_ref3?_ref3:[{name:"offset",options:{offset:[0,2.5]}}]});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsOpen(null!=open&&open)}),[open]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setFocusVisible(0)}),[isOpen]);const _onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((e,_ref4)=>{let{title,value}=_ref4;console.log(title,value),onClick&&onClick(e,{title,value})}),[onClick]),_onClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setIsOpen(!1),onClose&&onClose(e)}),[onClose]),_onKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{"ArrowDown"===e.key?(e.preventDefault(),setFocusVisible((prev=>(prev+1)%react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)))):"ArrowUp"===e.key&&(e.preventDefault(),setFocusVisible((prev=>(prev-1+react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children))%react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children))))}),[children]);if(!children)return null;if(Array.isArray(children)&&0===children.length)return null;const MenuElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuContainer,{ref:setPopperElement,$open:isOpen,$minWidth:minWidth,$colorPalette:colorPalette,$color:color,$variant:variant,style:{...styles.popper,...style},onKeyDown:_onKeyDown,...attributes.popper,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenu,{children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>{var _child$props$index;return child&&react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{key:null!==(_child$props$index=child.props.index)&&void 0!==_child$props$index?_child$props$index:index,...!child.props.color&&{color},...!child.props.variant&&{variant},pvtHasFocus:focusVisible===index,pvtOnClick:_onClick}):child}))})});return hideOnOutsideClick?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__.A,{onClickAway:_onClose,children:MenuElement}):MenuElement})),__WEBPACK_DEFAULT_EXPORT__=Menu,StyledMenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div`
  display: ${props=>props.$open?"block":"none"};
  min-width: ${props=>props.$minWidth};
  border-radius: 0.5rem;
  padding: 0.5rem 0;
  ${props=>((variant,colorPalette,color)=>{switch(variant){case"contained":return styled_components__WEBPACK_IMPORTED_MODULE_7__.AH`
        background-color: ${colorPalette[color].accentScale[8]};
        color: ${colorPalette[color].accentContrast};
        border: 2px solid ${colorPalette[color].accentScale[8]};
      `;case"outlined":return styled_components__WEBPACK_IMPORTED_MODULE_7__.AH`
        background-color: "transparent";
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[5]};
      `;case"soft":return styled_components__WEBPACK_IMPORTED_MODULE_7__.AH`
        background-color: ${colorPalette[color].accentScale[2]};
        color: ${colorPalette[color].accentScale[10]};
        border: 2px solid ${colorPalette[color].accentScale[2]};
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
`;Menu.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{variant:{defaultValue:{value:'"contained"',computed:!1},required:!1},open:{defaultValue:{value:"false",computed:!1},required:!1},minWidth:{defaultValue:{value:'"none"',computed:!1},required:!1},hideOnOutsideClick:{defaultValue:{value:"true",computed:!1},required:!1},color:{defaultValue:{value:"colorTokens.default.primary.main",computed:!0},required:!1}}}},"./src/components/MenuItem/MenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Text_Text__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Text/Text.tsx"),styled_components__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuItem=_ref=>{let{leadingIcon,trailingIcon,children,title,value,variant="contained",color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,onClick,"data-testid":dataTestId,pvtHasFocus,pvtOnClick}=_ref;const menuItemRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme;(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{pvtHasFocus&&menuItemRef.current&&menuItemRef.current.focus()}),[menuItemRef,pvtHasFocus]);const colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(StyledMenuItem,{ref:menuItemRef,tabIndex:pvtHasFocus?0:-1,$variant:variant,$colorPalette:colorPalette,$color:color,onClick:event=>{pvtOnClick&&pvtOnClick(event,{title,value}),onClick&&onClick(event,{title,value})},"data-testid":dataTestId,children:[leadingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemIcon,{children:leadingIcon}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children:children?"string"==typeof children?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"paragraph",children}):children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text_Text__WEBPACK_IMPORTED_MODULE_1__.A,{disableColor:!0,variant:"paragraph",children:title})}),trailingIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuItemContent,{$variant:variant,$color:color,$colorPalette:colorPalette,children:trailingIcon})]})},__WEBPACK_DEFAULT_EXPORT__=MenuItem,StyledMenuItem=styled_components__WEBPACK_IMPORTED_MODULE_6__.Ay.li`
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
      `}};MenuItem.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{title:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},key:{required:!1,tsType:{name:"number"},description:""},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!1,tsType:{name:"union",raw:"React.ReactNode | React.ReactNode[]",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"}]},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"colorTokens.default.primary.main",computed:!0}},variant:{required:!1,tsType:{name:"union",raw:'"contained" | "outlined" | "soft"',elements:[{name:"literal",value:'"contained"'},{name:"literal",value:'"outlined"'},{name:"literal",value:'"soft"'}]},description:"",defaultValue:{value:'"contained"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.MouseEvent<HTMLLIElement>,\n  { value, title }: MenuItemKeyProps\n) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""},pvtOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(\n  e: React.MouseEvent<HTMLLIElement>,\n  { value, title }: MenuItemKeyProps\n) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},name:"e"},{type:{name:"MenuItemKeyProps"},name:""}],return:{name:"void"}}},description:""},pvtHasFocus:{required:!1,tsType:{name:"boolean"},description:""}}}}}]);
//# sourceMappingURL=2078.abe75150.iframe.bundle.js.map