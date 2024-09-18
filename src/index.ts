export * from "./components/Button";
export * from "./components/Form";
export * from "./components/Inputs";
export * from "./components/Layout";
export * from "./components/Miscellaneous";
export * from "./components/Panels/Card";
export * from "./components/Popups";
export * from "./components/ThemeWrapper";

export * from "./helpers";
export * from "./hooks";

//! VERSION 1.0.0 START

//? simplify toasts, this whole config stuff is overenginered (new branch)

//? es lint (new branch)
//*     implement es lint
//*     fix all errors
//*     git hub repo should not allow merge if there are lint errors

//! VERSION 1.0.0 END

// TODO Repo cleaning
//*     make sure that flaner is working correctly
//*     delete old branches

//! VERSION 2.0.0 START

//? TOOLTIP Not closing tooltip if cursor is over it (settimeout when closing tooltip, and canceling closing if onMouseEnter on tooltip ??? OR some back-ground div under tooltip, that will be of size (tooltipSize + tooltipMargin) )

//? ACCORDION component

//? Change theme story wrapper to use accordion for each section (should there also be a global trigger)

//? New Input components
//*     File Component
//*     Image Component
//*     Date input, with range
//*     Multi Dropdown

//? Navigational components
//*     Breadcrumb
//*     Nav bar
//*     Dropdown Menu (open on ref that can be attached to anything(button, icon, div) like context menu)
//*     Side bar

//? Data Display components
//*     TABLE
//*     TREE

//? Unit testing of all(if possible) components
//*     implement tests
//*     try to start a pipeline in repo to run tests before merge

//! VERSION 2.0.0 END
