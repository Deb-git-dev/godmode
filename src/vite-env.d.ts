/// <reference types="vite/client" />

declare module 'framer-motion' {
  import * as React from 'react';
  export const motion: any;
  export const AnimatePresence: React.FC<{
    children?: React.ReactNode;
    mode?: 'sync' | 'popLayout' | 'wait';
    initial?: boolean;
    onExitComplete?: () => void;
  }>;
  export const useReducedMotion: () => boolean;
  export const useScroll: any;
  export const useTransform: any;
  export const useSpring: any;
  export const useMotionValue: any;
  export const useMotionTemplate: any;
  export const useAnimation: any;
  export type MotionProps = any;
  export type Variants = any;
  export type Transition = any;
  export type AnimationControls = any;
  export type MotionValue<T = any> = any;
}

declare module 'pdf-lib' {
  export class PDFDocument {
    static create(): Promise<PDFDocument>;
    static load(pdfBytes: Uint8Array | ArrayBuffer): Promise<PDFDocument>;
    addPage(dimensions?: [number, number]): PDFPage;
    embedFont(font: string | Uint8Array | ArrayBuffer): Promise<PDFFont>;
    embedStandardFont(font: string): Promise<PDFFont>;
    save(): Promise<Uint8Array>;
  }
  export interface PDFPage {
    getSize(): { width: number; height: number };
    drawRectangle(options: any): void;
    drawText(text: string, options: any): void;
    drawLine(options: any): void;
  }
  export interface PDFFont {
    widthOfTextAtSize(text: string, size: number): number;
  }
  export function rgb(r: number, g: number, b: number): any;
  export const StandardFonts: {
    Helvetica: string;
    HelveticaBold: string;
    HelveticaOblique: string;
    HelveticaBoldOblique: string;
    Courier: string;
    CourierBold: string;
    CourierOblique: string;
    CourierBoldOblique: string;
    TimesRoman: string;
    TimesRomanBold: string;
    TimesRomanItalic: string;
    TimesRomanBoldItalic: string;
    Symbol: string;
    ZapfDingbats: string;
  };
}

declare module 'tailwind-merge' {
  export function twMerge(...classLists: any[]): string;
}

declare module 'swiper/react' {
  import * as React from 'react';
  export const Swiper: React.FC<any>;
  export const SwiperSlide: React.FC<any>;
}

declare module 'swiper/modules' {
  export const Autoplay: any;
  export const EffectFade: any;
  export const Pagination: any;
  export const Navigation: any;
}

