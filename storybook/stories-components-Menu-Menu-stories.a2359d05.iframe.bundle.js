"use strict";(self.webpackChunkstelios=self.webpackChunkstelios||[]).push([[3971],{"./src/stories/components/Menu/Menu.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Outlined:()=>Outlined,Playground:()=>Playground,Soft:()=>Soft,Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Menu/Menu.tsx"),_components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/MenuItem/MenuItem.tsx"),_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/IconButton/IconButton.tsx"),_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@tabler/icons-react/dist/esm/icons/IconNumber123.mjs"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Menu",component:_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__.A,parameters:{layout:"centered"},argTypes:{variant:{control:{type:"select",options:["contained","outlined","soft"]},color:{control:{type:"color"}}}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{minHeight:"15rem"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Story,{})})]},Template={render:args=>{const[iconRef,setIconRef]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[open,setOpen]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!0);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_IconButton_IconButton__WEBPACK_IMPORTED_MODULE_3__.A,{color:args.color,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__.A,{}),variant:args.variant,ref:setIconRef,onClick:()=>{setOpen(!open)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_1__.A,{open,popperStyles:{placement:"bottom"},...args,anchorElement:iconRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_2__.A,{value:"1",title:"Item 1",children:"Item 1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_2__.A,{value:"2",title:"Item 2",children:"Item 2"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_2__.A,{value:"3",title:"Item 3",children:"Item 3"})]})]})}},Contained={...Template,args:{variant:"contained"}},Outlined={...Template,args:{variant:"outlined"}},Soft={...Template,args:{variant:"soft"}},Playground={...Template,args:{color:_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW}},__namedExportsOrder=["Template","Contained","Outlined","Soft","Playground"];Template.parameters={...Template.parameters,docs:{...Template.parameters?.docs,source:{originalSource:'{\n  render: args => {\n    const [iconRef, setIconRef] = React.useState<HTMLButtonElement | null>(null);\n    const [open, setOpen] = React.useState(true);\n    const _openMenuClick = () => {\n      setOpen(!open);\n    };\n    return <div>\n        <IconButton color={args.color} icon={<Icon123 />} variant={args.variant} ref={setIconRef} onClick={_openMenuClick} />\n        <Menu open={open} popperStyles={{\n        placement: "bottom"\n      }} {...args} anchorElement={iconRef}>\n          <MenuItem value="1" title="Item 1">\n            Item 1\n          </MenuItem>\n          <MenuItem value="2" title="Item 2">\n            Item 2\n          </MenuItem>\n          <MenuItem value="3" title="Item 3">\n            Item 3\n          </MenuItem>\n        </Menu>\n      </div>;\n  }\n}',...Template.parameters?.docs?.source}}},Contained.parameters={...Contained.parameters,docs:{...Contained.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "contained"\n  }\n}',...Contained.parameters?.docs?.source}}},Outlined.parameters={...Outlined.parameters,docs:{...Outlined.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "outlined"\n  }\n}',...Outlined.parameters?.docs?.source}}},Soft.parameters={...Soft.parameters,docs:{...Soft.parameters?.docs,source:{originalSource:'{\n  ...Template,\n  args: {\n    variant: "soft"\n  }\n}',...Soft.parameters?.docs?.source}}},Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  ...Template,\n  args: {\n    color: colorTokens.default.primary.main\n  }\n}",...Playground.parameters?.docs?.source}}}},"./src/components/ClickAwayListener/ClickAwayListener.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ClickAwayListener=_ref=>{let{children,onClickAway,"data-testid":dataTestId}=_ref;const clickAwayListenerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleClickAway=e=>{children&&clickAwayListenerRef.current&&!clickAwayListenerRef.current.contains(e.target)&&onClickAway&&onClickAway(e)};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(window.addEventListener("click",handleClickAway,!0),()=>{window.removeEventListener("click",handleClickAway,!0)}))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{"data-testid":dataTestId,ref:clickAwayListenerRef,children})},__WEBPACK_DEFAULT_EXPORT__=ClickAwayListener;ClickAwayListener.__docgenInfo={description:"",methods:[],displayName:"ClickAwayListener",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClickAway:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent) => void",signature:{arguments:[{type:{name:"MouseEvent"},name:"event"}],return:{name:"void"}}},description:""},"data-testid":{required:!1,tsType:{name:"string"},description:""}}}},"./src/components/Menu/Menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_popper__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react-popper/lib/esm/usePopper.js"),_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ClickAwayListener/ClickAwayListener.tsx"),_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/ThemeProvider/ThemeProvider.tsx"),_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/helpers.tsx"),_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/tokens/colors.json"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Menu=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((_ref,ref)=>{var _ref2,_ref3;let{children,popperStyles,variant="contained",open=!1,minWidth="none",anchorElement,hideOnOutsideClick=!0,color=_tokens_colors_json__WEBPACK_IMPORTED_MODULE_4__.A.zB.iW,className,style,onClick,onClose,"data-testid":dataTestId,...props}=_ref;const[isOpen,setIsOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(open),[popperElement,setPopperElement]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[focusVisible,setFocusVisible]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),theme=(0,_ThemeProvider_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__.DP)().theme,colorPalette=(0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__.jh)(theme,color),{styles,attributes}=(0,react_popper__WEBPACK_IMPORTED_MODULE_6__.E)(anchorElement,popperElement,{placement:null!==(_ref2=popperStyles&&popperStyles.placement)&&void 0!==_ref2?_ref2:"bottom-start",modifiers:null!==(_ref3=popperStyles&&popperStyles.modifiers)&&void 0!==_ref3?_ref3:[{name:"offset",options:{offset:[0,2.5]}}]});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setIsOpen(open)}),[open]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setFocusVisible(0)}),[isOpen]);const _onClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((e,_ref4)=>{let{title,value}=_ref4;onClick&&onClick(e,{title,value})}),[onClick]),_onClose=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{setIsOpen(!1),onClose&&onClose(e)}),[onClose]),_onKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e=>{"ArrowDown"===e.key?(e.preventDefault(),setFocusVisible((prev=>(prev+1)%react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)))):"ArrowUp"===e.key&&(e.preventDefault(),setFocusVisible((prev=>(prev-1+react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children))%react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children))))}),[children]);if(Array.isArray(children)&&0===children.length)return null;const MenuElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenuContainer,{ref:setPopperElement,$open:isOpen,$minWidth:minWidth,$colorPalette:colorPalette,$color:color,$variant:variant,style:{...styles.popper,...style},onKeyDown:_onKeyDown,"data-testid":dataTestId,className,...attributes.popper,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledMenu,{children:react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children,((child,index)=>{var _child$props$index;return child&&react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child,{key:null!==(_child$props$index=child.props.index)&&void 0!==_child$props$index?_child$props$index:index,...!child.props.color&&{color},...!child.props.variant&&{variant},pvtHasFocus:focusVisible===index,pvtOnClick:_onClick}):child}))})});return hideOnOutsideClick?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ClickAwayListener_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__.A,{onClickAway:_onClose,children:MenuElement}):MenuElement})),__WEBPACK_DEFAULT_EXPORT__=Menu,StyledMenuContainer=styled_components__WEBPACK_IMPORTED_MODULE_7__.Ay.div`
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
//# sourceMappingURL=stories-components-Menu-Menu-stories.a2359d05.iframe.bundle.js.map