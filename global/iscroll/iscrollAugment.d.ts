import m = require('../../iscroll');
declare global {
  class IScroll extends m {
  }
  namespace IScroll {
    export interface IScrollIndicatorOptions extends m.IScrollIndicatorOptions {}
    export interface IScrollKeyBindings extends m.IScrollKeyBindings {}
    export interface IScrollOptions extends m.IScrollOptions {}
    export interface IScrollEaseOption extends m.IScrollEaseOption {}
    export interface IScrollEaseOptions extends m.IScrollEaseOptions {}
    export interface IScrollUtils extends m.IScrollUtils {}
  }
}
