import { ComponentType } from "react";

declare module "*.svg" {
  const content: ComponentType;
  export default content;
}