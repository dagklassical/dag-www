// Crear archivo: src/types/gray-matter.d.ts

declare module 'gray-matter' {
  interface ParsedData {
    [key: string]: any;
  }
  
  interface GrayMatterFile<T = string> {
    data: T;
    content: string;
    excerpt?: string;
    language?: string;
    orig?: any;
    isEmpty?: boolean;
    stringify?: (options?: any) => string;
    matter?: (file: any, options?: any) => string;
  }
  
  export default function matter(input: string): GrayMatterFile;
  
  export function parse(input: string): GrayMatterFile;
  export function stringify(content: string, data?: any): string;
}