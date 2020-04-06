/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface NoShadowComponent {}
  interface NoShadowContainer {}
  interface ShadowComponent {}
  interface ShadowContainer {}
}

declare global {


  interface HTMLNoShadowComponentElement extends Components.NoShadowComponent, HTMLStencilElement {}
  var HTMLNoShadowComponentElement: {
    prototype: HTMLNoShadowComponentElement;
    new (): HTMLNoShadowComponentElement;
  };

  interface HTMLNoShadowContainerElement extends Components.NoShadowContainer, HTMLStencilElement {}
  var HTMLNoShadowContainerElement: {
    prototype: HTMLNoShadowContainerElement;
    new (): HTMLNoShadowContainerElement;
  };

  interface HTMLShadowComponentElement extends Components.ShadowComponent, HTMLStencilElement {}
  var HTMLShadowComponentElement: {
    prototype: HTMLShadowComponentElement;
    new (): HTMLShadowComponentElement;
  };

  interface HTMLShadowContainerElement extends Components.ShadowContainer, HTMLStencilElement {}
  var HTMLShadowContainerElement: {
    prototype: HTMLShadowContainerElement;
    new (): HTMLShadowContainerElement;
  };
  interface HTMLElementTagNameMap {
    'no-shadow-component': HTMLNoShadowComponentElement;
    'no-shadow-container': HTMLNoShadowContainerElement;
    'shadow-component': HTMLShadowComponentElement;
    'shadow-container': HTMLShadowContainerElement;
  }
}

declare namespace LocalJSX {
  interface NoShadowComponent {}
  interface NoShadowContainer {}
  interface ShadowComponent {}
  interface ShadowContainer {}

  interface IntrinsicElements {
    'no-shadow-component': NoShadowComponent;
    'no-shadow-container': NoShadowContainer;
    'shadow-component': ShadowComponent;
    'shadow-container': ShadowContainer;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'no-shadow-component': LocalJSX.NoShadowComponent & JSXBase.HTMLAttributes<HTMLNoShadowComponentElement>;
      'no-shadow-container': LocalJSX.NoShadowContainer & JSXBase.HTMLAttributes<HTMLNoShadowContainerElement>;
      'shadow-component': LocalJSX.ShadowComponent & JSXBase.HTMLAttributes<HTMLShadowComponentElement>;
      'shadow-container': LocalJSX.ShadowContainer & JSXBase.HTMLAttributes<HTMLShadowContainerElement>;
    }
  }
}


