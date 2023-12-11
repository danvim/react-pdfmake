(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[391],{9351:(t,e,s)=>{var l={"./Heading.json":[5621,621],"./PdfDocument.json":[5720,720],"./PdfFooter.json":[4740,740],"./PdfHeader.json":[9508,508],"./PdfPreview.json":[54,54],"./PdfTable.json":[5762,762],"./plugin-route-context-module-100.json":[8462,462]};function n(t){if(!s.o(l,t))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=l[t],n=e[0];return s.e(e[1]).then((()=>s.t(n,19)))}n.keys=()=>Object.keys(l),n.id=9351,t.exports=n},8771:(t,e,s)=>{"use strict";s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>y,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var l=s(1527),n=s(8627),o=s(3388);const a={sidebar_position:4,sidebar_label:"<PdfTable>"},p="<PdfTable>",r={id:"jsx/pdf-components/pdf-table",title:"&lt;PdfTable>",description:"A more user-friendly way to define tables than to use ``.",source:"@site/docs/jsx/pdf-components/pdf-table.mdx",sourceDirName:"jsx/pdf-components",slug:"/jsx/pdf-components/pdf-table",permalink:"/react-pdfmake-reconciler/docs/jsx/pdf-components/pdf-table",draft:!1,unlisted:!1,editUrl:"https://github.com/danvim/react-pdfmake-reconciler/tree/master/docs/docs/jsx/pdf-components/pdf-table.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"<PdfTable>"},sidebar:"tutorialSidebar",previous:{title:"<PdfFooter>",permalink:"/react-pdfmake-reconciler/docs/jsx/pdf-components/pdf-footer"},next:{title:"React Utility components",permalink:"/react-pdfmake-reconciler/docs/jsx/util-components/"}},d={},c=[{value:"Props",id:"props",level:2},{value:"Example",id:"example",level:2}];function i(t){const e={code:"code",div:"div",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...t.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"pdftable",children:"<PdfTable>"}),"\n",(0,l.jsxs)(e.p,{children:["A more user-friendly way to define tables than to use ",(0,l.jsx)(e.code,{children:"<pdf-table>"}),"."]}),"\n",(0,l.jsx)(e.h2,{id:"props",children:"Props"}),"\n",(0,l.jsx)(o.n,{name:"PdfTable"}),"\n",(0,l.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(e.div,{dangerouslySetInnerHTML:{__html:'<pre class="shiki light-plus twoslash lsp" style="background-color: #FFFFFF; color: #000000"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #AF00DB">import</span><span style="color: #000000"> { </span><span style="color: #001080"><data-lsp lsp=\'(alias) const PdfTable: FC&lt;{&#10;    rows: ReactElement[][];&#10;} &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;ContentTable, "table">>, "children"> &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;Table, "body">>, "children">>&#10;import PdfTable\' >PdfTable</data-lsp></span><span style="color: #000000"> } </span><span style="color: #AF00DB">from</span><span style="color: #000000"> </span><span style="color: #A31515">"react-pdfmake-reconciler"</span><span style="color: #000000">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #0000FF">const</span><span style="color: #000000"> </span><span style="color: #795E26"><data-lsp lsp=\'const table: React.JSX.Element\' >table</data-lsp></span><span style="color: #000000"> = (</span></div><div class=\'line\'><span style="color: #000000">  </span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(alias) const PdfTable: FC&lt;{&#10;    rows: ReactElement[][];&#10;} &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;ContentTable, "table">>, "children"> &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;Table, "body">>, "children">>&#10;import PdfTable\' >PdfTable</data-lsp></span></div><div class=\'line\'><span style="color: #000000">    </span><span style="color: #FF0000"><data-lsp lsp=\'(property) rows: React.ReactElement&lt;any, string | React.JSXElementConstructor&lt;any>>[][]\' >rows</data-lsp></span><span style="color: #000000">=</span><span style="color: #0000FF">{</span><span style="color: #000000FF">[</span></div><div class=\'line\'><span style="color: #000000FF">      [</span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">Header 1</span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">, </span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">Header 2</span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">],</span></div><div class=\'line\'><span style="color: #000000FF">      [</span></div><div class=\'line\'><span style="color: #000000FF">        </span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'Type-safe way to pass cell-related properties to child element.&#10;&#10;(property) VirtualPdfElements["pdf-cell"]: PassThroughPdfProps&lt;TableCellProperties>\' >pdf-cell</data-lsp></span><span style="color: #000000FF"> </span><span style="color: #FF0000"><data-lsp lsp=\'Controls on which sides the cell has borders.&#10;&#10;Tuple order: `[left, top, right, bottom]`&#10;&#10;Defaults to `[true, true, true, true]`.&#10;&#10;(property) TableCellProperties.border?: [boolean, boolean, boolean, boolean] | undefined\' >border</data-lsp></span><span style="color: #000000">=</span><span style="color: #0000FF">{</span><span style="color: #000000FF">[</span><span style="color: #0000FF">true</span><span style="color: #000000FF">, </span><span style="color: #0000FF">true</span><span style="color: #000000FF">, </span><span style="color: #0000FF">true</span><span style="color: #000000FF">, </span><span style="color: #0000FF">true</span><span style="color: #000000FF">]</span><span style="color: #0000FF">}</span><span style="color: #800000">&gt;</span></div><div class=\'line\'><span style="color: #000000FF">          </span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">Cell 1</span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span></div><div class=\'line\'><span style="color: #000000FF">        </span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'Type-safe way to pass cell-related properties to child element.&#10;&#10;(property) VirtualPdfElements["pdf-cell"]: PassThroughPdfProps&lt;TableCellProperties>\' >pdf-cell</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">,</span></div><div class=\'line\'><span style="color: #000000FF">        </span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">Cell 2</span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000FF">,</span></div><div class=\'line\'><span style="color: #000000FF">      ],</span></div><div class=\'line\'><span style="color: #000000FF">    ]</span><span style="color: #0000FF">}</span></div><div class=\'line\'><span style="color: #000000">  </span><span style="color: #800000">/&gt;</span></div><div class=\'line\'><span style="color: #000000">);</span></div></code></div></pre>\n<pre class="shiki dark-plus twoslash lsp" style="background-color: #1E1E1E; color: #D4D4D4"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) const PdfTable: FC&lt;{&#10;    rows: ReactElement[][];&#10;} &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;ContentTable, "table">>, "children"> &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;Table, "body">>, "children">>&#10;import PdfTable\' >PdfTable</data-lsp></span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"react-pdfmake-reconciler"</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #DCDCAA"><data-lsp lsp=\'const table: React.JSX.Element\' >table</data-lsp></span><span style="color: #D4D4D4"> = (</span></div><div class=\'line\'><span style="color: #D4D4D4">  </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(alias) const PdfTable: FC&lt;{&#10;    rows: ReactElement[][];&#10;} &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;ContentTable, "table">>, "children"> &amp; Omit&lt;PdfPropsWithChildren&lt;Omit&lt;Table, "body">>, "children">>&#10;import PdfTable\' >PdfTable</data-lsp></span></div><div class=\'line\'><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE"><data-lsp lsp=\'(property) rows: React.ReactElement&lt;any, string | React.JSXElementConstructor&lt;any>>[][]\' >rows</data-lsp></span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #D4D4D4">[</span></div><div class=\'line\'><span style="color: #D4D4D4">      [</span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">Header 1</span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">, </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">Header 2</span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">],</span></div><div class=\'line\'><span style="color: #D4D4D4">      [</span></div><div class=\'line\'><span style="color: #D4D4D4">        </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'Type-safe way to pass cell-related properties to child element.&#10;&#10;(property) VirtualPdfElements["pdf-cell"]: PassThroughPdfProps&lt;TableCellProperties>\' >pdf-cell</data-lsp></span><span style="color: #D4D4D4"> </span><span style="color: #9CDCFE"><data-lsp lsp=\'Controls on which sides the cell has borders.&#10;&#10;Tuple order: `[left, top, right, bottom]`&#10;&#10;Defaults to `[true, true, true, true]`.&#10;&#10;(property) TableCellProperties.border?: [boolean, boolean, boolean, boolean] | undefined\' >border</data-lsp></span><span style="color: #D4D4D4">=</span><span style="color: #569CD6">{</span><span style="color: #D4D4D4">[</span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">, </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">, </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">, </span><span style="color: #569CD6">true</span><span style="color: #D4D4D4">]</span><span style="color: #569CD6">}</span><span style="color: #808080">&gt;</span></div><div class=\'line\'><span style="color: #D4D4D4">          </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">Cell 1</span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span></div><div class=\'line\'><span style="color: #D4D4D4">        </span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'Type-safe way to pass cell-related properties to child element.&#10;&#10;(property) VirtualPdfElements["pdf-cell"]: PassThroughPdfProps&lt;TableCellProperties>\' >pdf-cell</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">        </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">Cell 2</span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">      ],</span></div><div class=\'line\'><span style="color: #D4D4D4">    ]</span><span style="color: #569CD6">}</span></div><div class=\'line\'><span style="color: #D4D4D4">  </span><span style="color: #808080">/&gt;</span></div><div class=\'line\'><span style="color: #D4D4D4">);</span></div></code></div></pre>'}})]})}function y(t={}){const{wrapper:e}={...(0,n.a)(),...t.components};return e?(0,l.jsx)(e,{...t,children:(0,l.jsx)(i,{...t})}):i(t)}},7358:(t,e,s)=>{"use strict";s.d(e,{U:()=>n});var l=s(959);const n=t=>{const[e,n]=(0,l.useState)(null);return(0,l.useEffect)((()=>{let e=!1;return s(9351)(`./${t}.json`).then((t=>{e||(e=!0,n(t.default))})).catch(console.error),()=>{e=!0}}),[t]),e}},3388:(t,e,s)=>{"use strict";s.d(e,{n:()=>o});var l=s(7358),n=s(1527);const o=t=>{let{name:e}=t;const s=(0,l.U)(e);if(!s)return null;const o=Object.entries(s),a=[],p=new Set,r=[];for(const[l,n]of o)n.parent?.fileName.includes("@types/react")?(a.push([l,n]),p.add(n.parent.name)):r.push([l,n]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("p",{children:["This type also extends: ",Array.from(p).join(", ")]}),(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Name"}),(0,n.jsx)("th",{children:"Type"}),(0,n.jsx)("th",{children:"Required"}),(0,n.jsx)("th",{children:"Description"})]})}),(0,n.jsx)("tbody",{children:r.map((t=>{let[e,s]=t;return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:s.type?.name})}),(0,n.jsx)("td",{children:s.required?"Yes":"No"}),(0,n.jsx)("td",{children:s.description})]},e)}))})]})]})}},8627:(t,e,s)=>{"use strict";s.d(e,{Z:()=>p,a:()=>a});var l=s(959);const n={},o=l.createContext(n);function a(t){const e=l.useContext(o);return l.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function p(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:a(t.components),l.createElement(o.Provider,{value:e},t.children)}}}]);