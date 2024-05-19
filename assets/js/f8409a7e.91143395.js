"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[903],{2275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=t(6106),r=t(6113);const s={sidebar_position:1},o="Introduction",c={id:"intro",title:"Introduction",description:"react-pdfmake-reconciler is a package that helps you create PDF documents using React JSX and pdfmake.",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/react-pdfmake-reconciler/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/danvim/react-pdfmake-reconciler/tree/master/docs/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/react-pdfmake-reconciler/docs/getting-started/"}},a={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Features",id:"features",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:["react-pdfmake-reconciler is a package that helps you create PDF documents using React JSX and ",(0,i.jsx)(n.a,{href:"http://pdfmake.org/",children:"pdfmake"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(4106).A+"",width:"900",height:"150"})}),"\n",(0,i.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,i.jsx)(n.p,{children:"There are multiple JavaScript PDF packages already out there that provide the capability of creating PDFs. However, one might still prefer some features of pdfmake, e.g. Duplicate table headers when tables go across pages. However, working with pdfmake's content objects directly in more complex projects may increase difficulties in code organization, especially when organizing contents in component functions."}),"\n",(0,i.jsx)(n.p,{children:"Here are some pain points you may come across without using this library:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Passing the same set of arguments repetitively down nested functions."}),"\n",(0,i.jsx)(n.li,{children:"Difficulties in debugging complex PDFs made with pdfmake."}),"\n",(0,i.jsxs)(n.li,{children:["Organizing components as functions differentiates return type between ",(0,i.jsx)(n.code,{children:"Content[]"})," and ",(0,i.jsx)(n.code,{children:"Content"})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Having encountered these issues, I began working on this library as a weekend project."}),"\n",(0,i.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,i.jsxs)(n.p,{children:["React pdfmake Reconciler is a package that utilizes React JSX for document preparation. Using ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/react-reconciler",children:(0,i.jsx)(n.code,{children:"react-reconciler"})})," under the hood, developers are free to use most of React's feature with this library."]}),"\n",(0,i.jsx)(n.p,{children:"React pdfmake Reconciler's features include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Write complex PDF in JSX. Render JSX into pdfmake content structure."}),"\n",(0,i.jsxs)(n.li,{children:["Utilize React features like:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Context. Note that outside React contexts do not penetrate into PDF renderer."}),"\n",(0,i.jsx)(n.li,{children:"Components"}),"\n",(0,i.jsx)(n.li,{children:"Hooks"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Working React update loop, (although it is unlikely to trigger user events inside PDF.), e.g.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"async setState calls"}),"\n",(0,i.jsx)(n.li,{children:"useEffect call"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["TypeScript typing for pdfmake Components (",(0,i.jsx)(n.code,{children:"<pdf-*>"})," components)"]}),"\n",(0,i.jsx)(n.li,{children:"React Developer Tools support"}),"\n",(0,i.jsx)(n.li,{children:"Styled API"}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4106:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/generation-diagram-3eb77d265a31cb8f2aeb72760bc1f9fa.svg"},6113:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(7378);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);