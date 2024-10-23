// global.d.ts
declare module NodeJS {
    interface Require {
      context: (directory: string, useSubdirectories?: boolean, regExp?: RegExp) => {
        keys: () => string[];
        (id: string): string;
      };
    }
  }
  