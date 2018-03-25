export { default } from "./WithStyles";

/**
 * Helper for injecting scss in the DOM
 * @returns {bool} true
 */
export const onInsertStylesHandler = (...styles) => {
  styles.forEach(style => style._insertCss());
};
