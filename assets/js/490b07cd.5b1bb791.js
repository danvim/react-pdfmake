"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[390],{6984:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>i,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=o(6106),s=o(6113);const a={sidebar_position:3},l="PdfRenderer",r={id:"renderer",title:"PdfRenderer",description:"PdfRenderer is the custom React renderer powered by react-reconciler. React pdfmake Reconciler JSX can only be rendered by this renderer and not the typical React DOM renderer. There are 2 ways of rendering:",source:"@site/docs/renderer.md",sourceDirName:".",slug:"/renderer",permalink:"/react-pdfmake-reconciler/docs/renderer",draft:!1,unlisted:!1,editUrl:"https://github.com/danvim/react-pdfmake-reconciler/tree/master/docs/docs/renderer.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/react-pdfmake-reconciler/docs/getting-started/quick-start"},next:{title:"JSX",permalink:"/react-pdfmake-reconciler/docs/jsx/"}},p={},d=[{value:"Static render",id:"static-render",level:2},{value:"Render to React loop",id:"render-to-react-loop",level:2},{value:"Full example",id:"full-example",level:2}];function c(e){const t={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pdfrenderer",children:"PdfRenderer"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"PdfRenderer"})," is the custom React renderer powered by react-reconciler. React pdfmake Reconciler JSX can only be rendered by this renderer and not the typical React DOM renderer. There are 2 ways of rendering:"]}),"\n",(0,n.jsx)(t.h2,{id:"static-render",children:"Static render"}),"\n",(0,n.jsxs)(t.p,{children:["The common way to render. This assumes you have all the prepared data and plan to generate the PDF for download or saving. This renders once and returns a ",(0,n.jsx)(t.code,{children:"TDocumentDefinitions"})," to input to pdfmake for the PDF generation."]}),"\n",(0,n.jsx)(t.div,{dangerouslySetInnerHTML:{__html:'<pre class="shiki light-plus twoslash lsp" style="background-color: #FFFFFF; color: #000000"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #AF00DB">import</span><span style="color: #000000"> { </span><span style="color: #001080"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #000000"> } </span><span style="color: #AF00DB">from</span><span style="color: #000000"> </span><span style="color: #A31515">"react-pdfmake-reconciler"</span><span style="color: #000000">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #0000FF">const</span><span style="color: #000000"> </span><span style="color: #0070C1"><data-lsp lsp=\'const doc: TDocumentDefinitions\' >doc</data-lsp></span><span style="color: #000000"> = </span><span style="color: #001080"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #000000">.</span><span style="color: #795E26"><data-lsp lsp=\'(property) renderOnce: (renderElement: React.ReactNode) => TDocumentDefinitions\' >renderOnce</data-lsp></span><span style="color: #000000">(</span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000">Hello world!</span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000">);</span></div></code></div></pre>\n<pre class="shiki dark-plus twoslash lsp" style="background-color: #1E1E1E; color: #D4D4D4"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"react-pdfmake-reconciler"</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> </span><span style="color: #4FC1FF"><data-lsp lsp=\'const doc: TDocumentDefinitions\' >doc</data-lsp></span><span style="color: #D4D4D4"> = </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA"><data-lsp lsp=\'(property) renderOnce: (renderElement: React.ReactNode) => TDocumentDefinitions\' >renderOnce</data-lsp></span><span style="color: #D4D4D4">(</span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">Hello world!</span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">);</span></div></code></div></pre>'}}),"\n",(0,n.jsx)(t.h2,{id:"render-to-react-loop",children:"Render to React loop"}),"\n",(0,n.jsxs)(t.p,{children:["The rare way to render. This begins a React render loop, i.e. the React component itself (and/or its children) may trigger an update causing the rendered tree to update (e.g. async setStates from within). Whenever it renders initially or subsequently, the callback is triggered with the pdfmake ",(0,n.jsx)(t.code,{children:"TDocumentDefinitions"})," of that instance."]}),"\n",(0,n.jsx)(t.div,{dangerouslySetInnerHTML:{__html:'<pre class="shiki light-plus twoslash lsp" style="background-color: #FFFFFF; color: #000000"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #AF00DB">import</span><span style="color: #000000"> { </span><span style="color: #001080"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #000000"> } </span><span style="color: #AF00DB">from</span><span style="color: #000000"> </span><span style="color: #A31515">"react-pdfmake-reconciler"</span><span style="color: #000000">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #0000FF">const</span><span style="color: #000000"> { </span><span style="color: #0070C1"><data-lsp lsp=\'const unmount: () => void\' >unmount</data-lsp></span><span style="color: #000000"> } = </span><span style="color: #001080"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #000000">.</span><span style="color: #795E26"><data-lsp lsp=\'(property) render: (reactElement: React.ReactNode, onUpdate: DocumentUpdateHandler) => {&#10;    container: Container;&#10;    root: any;&#10;    unmount: () => void;&#10;}\' >render</data-lsp></span><span style="color: #000000">(</span></div><div class=\'line\'><span style="color: #000000">  </span><span style="color: #800000">&lt;</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000">Hello world!</span><span style="color: #800000">&lt;/</span><span style="color: #267F99"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #800000">&gt;</span><span style="color: #000000">,</span></div><div class=\'line\'><span style="color: #000000">  (</span><span style="color: #001080"><data-lsp lsp=\'(parameter) updatedDoc: TDocumentDefinitions\' >updatedDoc</data-lsp></span><span style="color: #000000">) </span><span style="color: #0000FF">=&gt;</span><span style="color: #000000"> {</span></div><div class=\'line\'><span style="color: #000000">    </span><span style="color: #001080"><data-lsp lsp=\'The `console` module provides a simple debugging console that is similar to the&#10;JavaScript console mechanism provided by web browsers.&#10;&#10;The module exports two specific components:&#10;&#10;* A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.&#10;* A global `console` instance configured to write to [`process.stdout`](https://nodejs.org/docs/latest-v20.x/api/process.html#processstdout) and&#10;[`process.stderr`](https://nodejs.org/docs/latest-v20.x/api/process.html#processstderr). The global `console` can be used without calling `require(&apos;console&apos;)`.&#10;&#10;_**Warning**_: The global console object&apos;s methods are neither consistently&#10;synchronous like the browser APIs they resemble, nor are they consistently&#10;asynchronous like all other Node.js streams. See the [`note on process I/O`](https://nodejs.org/docs/latest-v20.x/api/process.html#a-note-on-process-io) for&#10;more information.&#10;&#10;Example using the global `console`:&#10;&#10;```js&#10;console.log(&apos;hello world&apos;);&#10;// Prints: hello world, to stdout&#10;console.log(&apos;hello %s&apos;, &apos;world&apos;);&#10;// Prints: hello world, to stdout&#10;console.error(new Error(&apos;Whoops, something bad happened&apos;));&#10;// Prints error message and stack trace to stderr:&#10;//   Error: Whoops, something bad happened&#10;//     at [eval]:5:15&#10;//     at Script.runInThisContext (node:vm:132:18)&#10;//     at Object.runInThisContext (node:vm:309:38)&#10;//     at node:internal/process/execution:77:19&#10;//     at [eval]-wrapper:6:22&#10;//     at evalScript (node:internal/process/execution:76:60)&#10;//     at node:internal/main/eval_string:23:3&#10;&#10;const name = &apos;Will Robinson&apos;;&#10;console.warn(`Danger ${name}! Danger!`);&#10;// Prints: Danger Will Robinson! Danger!, to stderr&#10;```&#10;&#10;Example using the `Console` class:&#10;&#10;```js&#10;const out = getStreamSomehow();&#10;const err = getStreamSomehow();&#10;const myConsole = new console.Console(out, err);&#10;&#10;myConsole.log(&apos;hello world&apos;);&#10;// Prints: hello world, to out&#10;myConsole.log(&apos;hello %s&apos;, &apos;world&apos;);&#10;// Prints: hello world, to out&#10;myConsole.error(new Error(&apos;Whoops, something bad happened&apos;));&#10;// Prints: [Error: Whoops, something bad happened], to err&#10;&#10;const name = &apos;Will Robinson&apos;;&#10;myConsole.warn(`Danger ${name}! Danger!`);&#10;// Prints: Danger Will Robinson! Danger!, to err&#10;```&#10;&#10;namespace console&#10;var console: Console\' >console</data-lsp></span><span style="color: #000000">.</span><span style="color: #795E26"><data-lsp lsp=\'Prints to `stdout` with newline. Multiple arguments can be passed, with the&#10;first used as the primary message and all additional used as substitution&#10;values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)&#10;(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args)).&#10;&#10;```js&#10;const count = 5;&#10;console.log(&apos;count: %d&apos;, count);&#10;// Prints: count: 5, to stdout&#10;console.log(&apos;count:&apos;, count);&#10;// Prints: count: 5, to stdout&#10;```&#10;&#10;See [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args) for more information.&#10;&#10;(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)\' >log</data-lsp></span><span style="color: #000000">(</span><span style="color: #A31515">"updated"</span><span style="color: #000000">);</span></div><div class=\'line\'><span style="color: #000000">  },</span></div><div class=\'line\'><span style="color: #000000">);</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #008000">// Unmounting will cause the renderer to stop rerendering on update and stop calling the callback.</span></div><div class=\'line\'><span style="color: #795E26"><data-lsp lsp=\'const unmount: () => void\' >unmount</data-lsp></span><span style="color: #000000">();</span></div></code></div></pre>\n<pre class="shiki dark-plus twoslash lsp" style="background-color: #1E1E1E; color: #D4D4D4"><div class="language-id">tsx</div><div class=\'code-container\'><code><div class=\'line\'><span style="color: #C586C0">import</span><span style="color: #D4D4D4"> { </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #D4D4D4"> } </span><span style="color: #C586C0">from</span><span style="color: #D4D4D4"> </span><span style="color: #CE9178">"react-pdfmake-reconciler"</span><span style="color: #D4D4D4">;</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #569CD6">const</span><span style="color: #D4D4D4"> { </span><span style="color: #4FC1FF"><data-lsp lsp=\'const unmount: () => void\' >unmount</data-lsp></span><span style="color: #D4D4D4"> } = </span><span style="color: #9CDCFE"><data-lsp lsp=\'(alias) const PdfRenderer: {&#10;    render: (reactElement: PdfNode, onUpdate: DocumentUpdateHandler) => {&#10;        container: Container;&#10;        root: any;&#10;        unmount: () => void;&#10;    };&#10;    renderOnce: (renderElement: PdfNode) => TDocumentDefinitions;&#10;}&#10;import PdfRenderer\' >PdfRenderer</data-lsp></span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA"><data-lsp lsp=\'(property) render: (reactElement: React.ReactNode, onUpdate: DocumentUpdateHandler) => {&#10;    container: Container;&#10;    root: any;&#10;    unmount: () => void;&#10;}\' >render</data-lsp></span><span style="color: #D4D4D4">(</span></div><div class=\'line\'><span style="color: #D4D4D4">  </span><span style="color: #808080">&lt;</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">Hello world!</span><span style="color: #808080">&lt;/</span><span style="color: #4EC9B0"><data-lsp lsp=\'(property) PdfElements["pdf-text"]: PdfPropsWithChildren&lt;Omit&lt;ContentText, "text"> | Omit&lt;ContentLink, "text"> | Omit&lt;ContentAnchor, "text"> | Omit&lt;ContentTocItem, "text">>\' >pdf-text</data-lsp></span><span style="color: #808080">&gt;</span><span style="color: #D4D4D4">,</span></div><div class=\'line\'><span style="color: #D4D4D4">  (</span><span style="color: #9CDCFE"><data-lsp lsp=\'(parameter) updatedDoc: TDocumentDefinitions\' >updatedDoc</data-lsp></span><span style="color: #D4D4D4">) </span><span style="color: #569CD6">=&gt;</span><span style="color: #D4D4D4"> {</span></div><div class=\'line\'><span style="color: #D4D4D4">    </span><span style="color: #9CDCFE"><data-lsp lsp=\'The `console` module provides a simple debugging console that is similar to the&#10;JavaScript console mechanism provided by web browsers.&#10;&#10;The module exports two specific components:&#10;&#10;* A `Console` class with methods such as `console.log()`, `console.error()` and `console.warn()` that can be used to write to any Node.js stream.&#10;* A global `console` instance configured to write to [`process.stdout`](https://nodejs.org/docs/latest-v20.x/api/process.html#processstdout) and&#10;[`process.stderr`](https://nodejs.org/docs/latest-v20.x/api/process.html#processstderr). The global `console` can be used without calling `require(&apos;console&apos;)`.&#10;&#10;_**Warning**_: The global console object&apos;s methods are neither consistently&#10;synchronous like the browser APIs they resemble, nor are they consistently&#10;asynchronous like all other Node.js streams. See the [`note on process I/O`](https://nodejs.org/docs/latest-v20.x/api/process.html#a-note-on-process-io) for&#10;more information.&#10;&#10;Example using the global `console`:&#10;&#10;```js&#10;console.log(&apos;hello world&apos;);&#10;// Prints: hello world, to stdout&#10;console.log(&apos;hello %s&apos;, &apos;world&apos;);&#10;// Prints: hello world, to stdout&#10;console.error(new Error(&apos;Whoops, something bad happened&apos;));&#10;// Prints error message and stack trace to stderr:&#10;//   Error: Whoops, something bad happened&#10;//     at [eval]:5:15&#10;//     at Script.runInThisContext (node:vm:132:18)&#10;//     at Object.runInThisContext (node:vm:309:38)&#10;//     at node:internal/process/execution:77:19&#10;//     at [eval]-wrapper:6:22&#10;//     at evalScript (node:internal/process/execution:76:60)&#10;//     at node:internal/main/eval_string:23:3&#10;&#10;const name = &apos;Will Robinson&apos;;&#10;console.warn(`Danger ${name}! Danger!`);&#10;// Prints: Danger Will Robinson! Danger!, to stderr&#10;```&#10;&#10;Example using the `Console` class:&#10;&#10;```js&#10;const out = getStreamSomehow();&#10;const err = getStreamSomehow();&#10;const myConsole = new console.Console(out, err);&#10;&#10;myConsole.log(&apos;hello world&apos;);&#10;// Prints: hello world, to out&#10;myConsole.log(&apos;hello %s&apos;, &apos;world&apos;);&#10;// Prints: hello world, to out&#10;myConsole.error(new Error(&apos;Whoops, something bad happened&apos;));&#10;// Prints: [Error: Whoops, something bad happened], to err&#10;&#10;const name = &apos;Will Robinson&apos;;&#10;myConsole.warn(`Danger ${name}! Danger!`);&#10;// Prints: Danger Will Robinson! Danger!, to err&#10;```&#10;&#10;namespace console&#10;var console: Console\' >console</data-lsp></span><span style="color: #D4D4D4">.</span><span style="color: #DCDCAA"><data-lsp lsp=\'Prints to `stdout` with newline. Multiple arguments can be passed, with the&#10;first used as the primary message and all additional used as substitution&#10;values similar to [`printf(3)`](http://man7.org/linux/man-pages/man3/printf.3.html)&#10;(the arguments are all passed to [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args)).&#10;&#10;```js&#10;const count = 5;&#10;console.log(&apos;count: %d&apos;, count);&#10;// Prints: count: 5, to stdout&#10;console.log(&apos;count:&apos;, count);&#10;// Prints: count: 5, to stdout&#10;```&#10;&#10;See [`util.format()`](https://nodejs.org/docs/latest-v20.x/api/util.html#utilformatformat-args) for more information.&#10;&#10;(method) Console.log(message?: any, ...optionalParams: any[]): void (+1 overload)\' >log</data-lsp></span><span style="color: #D4D4D4">(</span><span style="color: #CE9178">"updated"</span><span style="color: #D4D4D4">);</span></div><div class=\'line\'><span style="color: #D4D4D4">  },</span></div><div class=\'line\'><span style="color: #D4D4D4">);</span></div><div class=\'line\'>&nbsp;</div><div class=\'line\'><span style="color: #6A9955">// Unmounting will cause the renderer to stop rerendering on update and stop calling the callback.</span></div><div class=\'line\'><span style="color: #DCDCAA"><data-lsp lsp=\'const unmount: () => void\' >unmount</data-lsp></span><span style="color: #D4D4D4">();</span></div></code></div></pre>'}}),"\n",(0,n.jsx)(t.h2,{id:"full-example",children:"Full example"}),"\n",(0,n.jsxs)(t.p,{children:["For the full example, see ",(0,n.jsx)(t.a,{href:"./getting-started/quick-start",children:"Quick start"}),"."]})]})}function i(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},6113:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>r});var n=o(7378);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);