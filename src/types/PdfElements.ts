import {
  ContentAnchor,
  ContentCanvas,
  ContentColumns,
  ContentImage,
  ContentLink,
  ContentOrderedList,
  ContentPageReference,
  ContentQr,
  ContentStack,
  ContentSvg,
  ContentTable,
  ContentText,
  ContentTextReference,
  ContentTocItem,
  ContentUnorderedList,
  Table,
  TableCellProperties,
  TableOfContent,
} from "pdfmake/interfaces";
import { PdfElement, PdfNode } from "./PdfNode.ts";

import { PdfPrefixed } from "../pdfPrefix.ts";
import { TextInstance } from "../hostConfig.ts";

export interface PdfElementsSansPrefix {
  text: { children?: PdfNode } & (
    | Omit<ContentText, "text">
    | Omit<ContentLink, "text">
  );
  columns: { children?: PdfNode } & Omit<ContentColumns, "columns">;
  stack: { children?: PdfNode } & Omit<ContentStack, "stack">;
  ol: { children?: PdfNode } & Omit<ContentUnorderedList, "ol">;
  ul: { children?: PdfNode } & Omit<ContentOrderedList, "ul">;
  table: { children?: PdfNode } & Omit<ContentTable, "table">;
  pageReference: { children: string } & Omit<
    ContentPageReference,
    "pageReference"
  >;
  textReference: { children: string } & Omit<
    ContentTextReference,
    "textReference"
  >;
  image: ContentImage;
  svg: ContentSvg;
  qr: ContentQr;
  canvas: ContentCanvas;
}

export interface PdfCellProps extends TableCellProperties {
  children: PdfElement;
}

export interface VirtualPdfElementsSansPrefix extends PdfElementsSansPrefix {
  array: { children?: PdfNode };
  cell: PdfCellProps;
  tbody: { children?: PdfNode } & Omit<Table, "body">;
  anchor: { children?: PdfNode } & Omit<ContentAnchor, "text">;
  toc: { children?: PdfNode } & Omit<TableOfContent, "title">;
  tocItem: { children?: PdfNode } & Omit<ContentTocItem, "text">;
}

export type PdfElements = {
  [K in keyof VirtualPdfElementsSansPrefix as PdfPrefixed<K>]: VirtualPdfElementsSansPrefix[K];
};

export type PdfPrimitiveType = keyof PdfElementsSansPrefix;

export type VirtualPdfPrimitiveType =
  | PdfPrimitiveType
  | keyof VirtualPdfElementsSansPrefix
  | "root";

export type PdfReconcilerIntrinsicType = PdfPrefixed<VirtualPdfPrimitiveType>;

export interface PdfReconcilerElement {
  $__reactPdfMakeType: PdfReconcilerIntrinsicType;

  [K: string]: unknown;
}

export type PdfReconcilerNode =
  | PdfReconcilerElement
  | TextInstance
  | Array<PdfReconcilerNode>;
