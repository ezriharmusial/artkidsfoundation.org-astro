/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
declare module "*.yml" {
  const value: any; // Add type definitions here if desired
  export default value;
}