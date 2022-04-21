declare module "*.jpg" {
  export default "" as string;
}
declare module "*.png" {
  export default "" as string;
}

declare module "*.scss" {
  const content: {[className: string]: string};
  export default content;
}
declare module "*.css" {
  const content: {[className: string]: string};
  export default content;
}