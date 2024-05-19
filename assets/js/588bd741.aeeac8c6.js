"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[324],{1366:(s,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>r});var a=n(6106),e=n(6113);const o={sidebar_position:2},l="Quick start",p={id:"getting-started/quick-start",title:"Quick start",description:"Below is a full client-side example to help you get started. See https://pdfmake.github.io/docs/0.1/getting-started/server-side/ for the server-side generation logic.",source:"@site/docs/getting-started/quick-start.md",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/react-pdfmake-reconciler/docs/getting-started/quick-start",draft:!1,unlisted:!1,editUrl:"https://github.com/danvim/react-pdfmake-reconciler/tree/master/docs/docs/getting-started/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/react-pdfmake-reconciler/docs/getting-started/installation"},next:{title:"PdfRenderer",permalink:"/react-pdfmake-reconciler/docs/renderer"}},i={},r=[];function c(s){const t={a:"a",div:"div",h1:"h1",p:"p",...(0,e.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"quick-start",children:"Quick start"}),"\n",(0,a.jsxs)(t.p,{children:["Below is a full client-side example to help you get started. See ",(0,a.jsx)(t.a,{href:"https://pdfmake.github.io/docs/0.1/getting-started/server-side/",children:"https://pdfmake.github.io/docs/0.1/getting-started/server-side/"})," for the server-side generation logic."]}),"\n",(0,a.jsx)(t.div,{dangerouslySetInnerHTML:{__html:'<pre class="shiki light-plus twoslash lsp" style="background-color: #FFFFFF; color: #000000"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #008000">// Put this triple slash comment with your TS types so that TS can recognize &lt;pdf-*&gt; intrinsic</span></div><div class=\'line\'><span style="color: #008000">// elements to provide type hinting.</span></div><div class=\'line\'><span style="color: #008000">/// </span><span style="color: #800000">&lt;reference</span><span style="color: #008000"> </span><span style="color: #FF0000">types</span><span style="color: #000000">=</span><span style="color: #A31515">"react-pdfmake-reconciler/react-jsx"</span><span style="color: #008000"> </span><span style="color: #800000">/&gt;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #AF00DB">import</span><span style="color: #000000"> </span><span style="color: #001080"><data-lsp lsp=\'import pdfMake\' >pdfMake</data-lsp></span><span style="color: #000000"> </span><span style="color: #AF00DB">from</span><span style="color: #000000"> </span><span style="color: #A31515">"pdfmake/build/pdfmake.js"</span><span style="color: #000000">;</span></div><div class=\'line\'><span style="color: #AF00DB">import</span><span style="color: #000000"> </span><span style="color: #AF00DB">type</span><span style="color: #000000"> {</span></div><div class=\'line\'><span style="color: #000000">  </span><span style="color: #001080"><data-lsp lsp=\'(alias) interface BufferOptions&#10;import BufferOptions\' >BufferOptions</data-lsp></span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">  </span><span style="color: #001080"><data-lsp lsp=\'Complete definition of a PDF document.&#10;&#10;(alias) interface TDocumentDefinitions&#10;import TDocumentDefinitions\' >TDocumentDefinitions</data-lsp></span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">  </span><span style="color: #001080"><data-lsp lsp=\'Dictionary of font families that can be referenced by their key.&#10;&#10;(alias) interface TFontDictionary&#10;import TFontDictionary\' >TFontDictionary</data-lsp></span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">} </span><span style="color: #AF00DB">from</span><span style="color: #000000"> </span><span style="color: #A31515">"pdfmake/interfaces"</span><span style="color: #000000">;</span></div><div class=\'line\'><span style="color: #AF00DB">import</span><span style="color: #000000"> { </span><span style="color: #001080"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #000000"> } </span><span style="color: #AF00DB">from</span><span style="color: #000000"> </span><span style="color: #A31515">"react-pdfmake-reconciler"</span><span style="color: #000000">;</span></div><div class=\'line\'><span style="color: #AF00DB">import</span><span style="color: #000000"> </span><span style="color: #001080"><data-lsp lsp=\'(alias) namespace React&#10;import React\' >React</data-lsp></span><span style="color: #000000">, { </span><span style="color: #001080"><data-lsp lsp=\'Represents the type of a function component. Can optionally&#10;receive a type argument that represents the props the component&#10;receives.&#10;&#10;(alias) type FC&lt;P = {}> = FunctionComponent&lt;P>&#10;import FC\' >FC</data-lsp></span><span style="color: #000000"> } </span><span style="color: #AF00DB">from</span><span style="color: #000000"> </span><span style="color: #A31515">"react"</span><span style="color: #000000">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #008000">// Write components how you would with React.</span></div><div class=\'line\'><span style="color: #008000">// But make sure to ultimately return &lt;pdf-*&gt; instrinsic elements and not DOM elements like &lt;p&gt;.</span></div><div class=\'line\'><span style="color: #0000FF">const</span><span style="color: #000000"> </span><span style="color: #795E26"><data-lsp lsp=\'const MyPdfBody: React.FC\' >MyPdfBody</data-lsp></span><span style="color: #000000">: </span><span style="color: #267F99"><data-lsp lsp=\'Represents the type of a function component. Can optionally&#10;receive a type argument that represents the props the component&#10;receives.&#10;&#10;(alias) type FC&lt;P = {}> = FunctionComponent&lt;P>&#10;import FC\' >FC</data-lsp></span><span style="color: #000000"> = () </span><span style="color: #0000FF">=&gt;</span><span style="color: #000000"> </span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000">Hello world!</span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #008000">// Render JSX into pdfmake input object declaration.</span></div><div class=\'line\'><span style="color: #0000FF">const</span><span style="color: #000000"> </span><span style="color: #0070C1"><data-lsp lsp=\'const doc: TDocumentDefinitions\' >doc</data-lsp></span><span style="color: #000000"> = </span><span style="color: #001080"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #000000">.</span><span style="color: #795E26"><data-lsp lsp=\'(property) renderOnce: (renderElement: React.ReactNode) => TDocumentDefinitions\' >renderOnce</data-lsp></span><span style="color: #000000">(</span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'const MyPdfBody: React.FC\' >MyPdfBody</data-lsp></span><span style="color: #000000"> </span><span style="color: #800000">/&gt;</span><span style="color: #000000">);</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #008000">// Render PDF on client-side and download the generated file.</span></div><div class=\'line\'><span style="color: #0000FF">const</span><span style="color: #000000"> </span><span style="color: #0070C1"><data-lsp lsp=\'const defaultFonts: TFontDictionary\' >defaultFonts</data-lsp></span><span style="color: #000000">: </span><span style="color: #267F99"><data-lsp lsp=\'Dictionary of font families that can be referenced by their key.&#10;&#10;(alias) interface TFontDictionary&#10;import TFontDictionary\' >TFontDictionary</data-lsp></span><span style="color: #000000"> = {</span></div><div class=\'line\'><span style="color: #000000">  </span><span style="color: #001080"><data-lsp lsp=\'(property) Roboto: {&#10;    normal: string;&#10;    bold: string;&#10;    italics: string;&#10;    bolditalics: string;&#10;}\' >Roboto</data-lsp>:</span><span style="color: #000000"> {</span></div><div class=\'line\'><span style="color: #000000">    </span><span style="color: #001080"><data-lsp lsp=\'Font variant that is neither bold nor italic.&#10;&#10;(property) TFontFamilyTypes.normal?: PDFKit.Mixins.PDFFontSource | undefined\' >normal</data-lsp>:</span></div><div class=\'line\'><span style="color: #000000">      </span><span style="color: #A31515">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf"</span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">    </span><span style="color: #001080"><data-lsp lsp=\'Font variant that is bold.&#10;&#10;(property) TFontFamilyTypes.bold?: PDFKit.Mixins.PDFFontSource | undefined\' >bold</data-lsp>:</span><span style="color: #000000"> </span><span style="color: #A31515">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf"</span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">    </span><span style="color: #001080"><data-lsp lsp=\'Font variant that is italic.&#10;&#10;(property) TFontFamilyTypes.italics?: PDFKit.Mixins.PDFFontSource | undefined\' >italics</data-lsp>:</span></div><div class=\'line\'><span style="color: #000000">      </span><span style="color: #A31515">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf"</span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">    </span><span style="color: #001080"><data-lsp lsp=\'Font variant that is bold and italic.&#10;&#10;(property) TFontFamilyTypes.bolditalics?: PDFKit.Mixins.PDFFontSource | undefined\' >bolditalics</data-lsp>:</span></div><div class=\'line\'><span style="color: #000000">      </span><span style="color: #A31515">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf"</span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">  },</span></div><div class=\'line\'><span style="color: #000000">};</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #001080"><data-lsp lsp=\'import pdfMake\' >pdfMake</data-lsp></span><span style="color: #000000">.</span><span style="color: #795E26"><data-lsp lsp=\'function createPdf(documentDefinitions: TDocumentDefinitions, tableLayouts?: {&#10;    [name: string]: CustomTableLayout;&#10;} | undefined, fonts?: TFontDictionary | undefined, vfs?: {&#10;    ...;&#10;} | undefined): pdfMake.TCreatedPdf\' >createPdf</data-lsp></span><span style="color: #000000">(</span><span style="color: #001080"><data-lsp lsp=\'const doc: TDocumentDefinitions\' >doc</data-lsp></span><span style="color: #000000">, </span><span style="color: #0000FF"><data-lsp lsp=\'var undefined\' >undefined</data-lsp></span><span style="color: #000000">, </span><span style="color: #001080"><data-lsp lsp=\'const defaultFonts: TFontDictionary\' >defaultFonts</data-lsp></span><span style="color: #000000">).</span><span style="color: #795E26"><data-lsp lsp=\'(method) TCreatedPdf.download(defaultFileName: string, cb?: (() => void) | undefined, options?: BufferOptions | undefined): void (+1 overload)\' >download</data-lsp></span><span style="color: #000000">(</span><span style="color: #A31515">"myDocument.pdf"</span><span style="color: #000000">);</span></div></code></div></pre>\n<pre class="shiki dark-plus twoslash lsp" style="background-color: #1E1E1E; color: #D4D4D4"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #6A9955">// Put this triple slash comment with your TS types so that TS can recognize &lt;pdf-*&gt; intrinsic</span></div><div class=\'line\'><span style="color: #6A9955">// elements to provide type hinting.</span></div><div class=\'line\'><span style="color: #6A9955">/// </span><span style="color: #808080">&lt;</span><span style="color: #569CD6">reference</span><span style="color: #6A9955"> </span><span style="color: #9CDCFE">types</span><span style="color: #D4D4D4">=</span><span style="color: #CE9178">"react-pdfmake-reconciler/react-jsx"</span><span style="color: #6A9955"> </span><span style="color: #808080">/&gt;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE"><data-lsp lsp=\'import pdfMake\' >pdfMake</data-lsp></span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"pdfmake/build/pdfmake.js"</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #C586C0">type</span><span style="color: #D4D4D4"> {</span></div><div class=\'line\'><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) interface BufferOptions&#10;import BufferOptions\' >BufferOptions</data-lsp></span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE"><data-lsp lsp=\'Complete definition of a PDF document.&#10;&#10;(alias) interface TDocumentDefinitions&#10;import TDocumentDefinitions\' >TDocumentDefinitions</data-lsp></span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE"><data-lsp lsp=\'Dictionary of font families that can be referenced by their key.&#10;&#10;(alias) interface TFontDictionary&#10;import TFontDictionary\' >TFontDictionary</data-lsp></span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">} </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"pdfmake/interfaces"</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"react-pdfmake-reconciler"</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) namespace React&#10;import React\' >React</data-lsp></span><span style="color: #D4D4D4">, { </span><span style="color: #9CDCFE"><data-lsp lsp=\'Represents the type of a function component. Can optionally&#10;receive a type argument that represents the props the component&#10;receives.&#10;&#10;(alias) type FC&lt;P = {}> = FunctionComponent&lt;P>&#10;import FC\' >FC</data-lsp></span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"react"</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #6A9955">// Write components how you would with React.</span></div><div class=\'line\'><span style="color: #6A9955">// But make sure to ultimately return &lt;pdf-*&gt; instrinsic elements and not DOM elements like &lt;p&gt;.</span></div><div class=\'line\'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA"><data-lsp lsp=\'const MyPdfBody: React.FC\' >MyPdfBody</data-lsp></span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0"><data-lsp lsp=\'Represents the type of a function component. Can optionally&#10;receive a type argument that represents the props the component&#10;receives.&#10;&#10;(alias) type FC&lt;P = {}> = FunctionComponent&lt;P>&#10;import FC\' >FC</data-lsp></span><span style="color: #D4D4D4"> = () </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">Hello world!</span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #6A9955">// Render JSX into pdfmake input object declaration.</span></div><div class=\'line\'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF"><data-lsp lsp=\'const doc: TDocumentDefinitions\' >doc</data-lsp></span><span style="color: #D4D4D4"> = </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA"><data-lsp lsp=\'(property) renderOnce: (renderElement: React.ReactNode) => TDocumentDefinitions\' >renderOnce</data-lsp></span><span style="color: #D4D4D4">(</span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'const MyPdfBody: React.FC\' >MyPdfBody</data-lsp></span><span style="color: #D4D4D4"> </span><span style="color: #808080">/&gt;</span><span style="color: #D4D4D4">);</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #6A9955">// Render PDF on client-side and download the generated file.</span></div><div class=\'line\'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF"><data-lsp lsp=\'const defaultFonts: TFontDictionary\' >defaultFonts</data-lsp></span><span style="color: #D4D4D4">: </span><span style="color: #4EC9B0"><data-lsp lsp=\'Dictionary of font families that can be referenced by their key.&#10;&#10;(alias) interface TFontDictionary&#10;import TFontDictionary\' >TFontDictionary</data-lsp></span><span style="color: #D4D4D4"> = {</span></div><div class=\'line\'><span style="color: #D4D4D4">  </span><span style="color: #9CDCFE"><data-lsp lsp=\'(property) Roboto: {&#10;    normal: string;&#10;    bold: string;&#10;    italics: string;&#10;    bolditalics: string;&#10;}\' >Roboto</data-lsp>:</span><span style="color: #D4D4D4"> {</span></div><div class=\'line\'><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE"><data-lsp lsp=\'Font variant that is neither bold nor italic.&#10;&#10;(property) TFontFamilyTypes.normal?: PDFKit.Mixins.PDFFontSource | undefined\' >normal</data-lsp>:</span></div><div class=\'line\'><span style="color: #D4D4D4">      </span><span style="color: #CE9178">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Regular.ttf"</span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE"><data-lsp lsp=\'Font variant that is bold.&#10;&#10;(property) TFontFamilyTypes.bold?: PDFKit.Mixins.PDFFontSource | undefined\' >bold</data-lsp>:</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Medium.ttf"</span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE"><data-lsp lsp=\'Font variant that is italic.&#10;&#10;(property) TFontFamilyTypes.italics?: PDFKit.Mixins.PDFFontSource | undefined\' >italics</data-lsp>:</span></div><div class=\'line\'><span style="color: #D4D4D4">      </span><span style="color: #CE9178">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-Italic.ttf"</span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE"><data-lsp lsp=\'Font variant that is bold and italic.&#10;&#10;(property) TFontFamilyTypes.bolditalics?: PDFKit.Mixins.PDFFontSource | undefined\' >bolditalics</data-lsp>:</span></div><div class=\'line\'><span style="color: #D4D4D4">      </span><span style="color: #CE9178">"https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.2.7/fonts/Roboto/Roboto-MediumItalic.ttf"</span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">  },</span></div><div class=\'line\'><span style="color: #D4D4D4">};</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #9CDCFE"><data-lsp lsp=\'import pdfMake\' >pdfMake</data-lsp></span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA"><data-lsp lsp=\'function createPdf(documentDefinitions: TDocumentDefinitions, tableLayouts?: {&#10;    [name: string]: CustomTableLayout;&#10;} | undefined, fonts?: TFontDictionary | undefined, vfs?: {&#10;    ...;&#10;} | undefined): pdfMake.TCreatedPdf\' >createPdf</data-lsp></span><span style="color: #D4D4D4">(</span><span style="color: #9CDCFE"><data-lsp lsp=\'const doc: TDocumentDefinitions\' >doc</data-lsp></span><span style="color: #D4D4D4">, </span><span style="color: #569CD6"><data-lsp lsp=\'var undefined\' >undefined</data-lsp></span><span style="color: #D4D4D4">, </span><span style="color: #9CDCFE"><data-lsp lsp=\'const defaultFonts: TFontDictionary\' >defaultFonts</data-lsp></span><span style="color: #D4D4D4">).</span><span style="color: #DCDCAA"><data-lsp lsp=\'(method) TCreatedPdf.download(defaultFileName: string, cb?: (() => void) | undefined, options?: BufferOptions | undefined): void (+1 overload)\' >download</data-lsp></span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">"myDocument.pdf"</span><span style="color: #D4D4D4">);</span></div></code></div></pre>'}})]})}function d(s={}){const{wrapper:t}={...(0,e.R)(),...s.components};return t?(0,a.jsx)(t,{...s,children:(0,a.jsx)(c,{...s})}):c(s)}},6113:(s,t,n)=>{n.d(t,{R:()=>l,x:()=>p});var a=n(7378);const e={},o=a.createContext(e);function l(s){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof s?s(t):{...t,...s}}),[t,s])}function p(s){let t;return t=s.disableParentContext?"function"==typeof s.components?s.components(e):s.components||e:l(s.components),a.createElement(o.Provider,{value:t},s.children)}}}]);