import{a as r,r as a,j as e,v as d}from"./app-UVgB9Xq9.js";const o=()=>{const l=r(),[s,c]=a.useState(),n=async()=>{let i=await d(l==null?void 0:l.slug);console.log(i),c(i)};return a.useEffect(()=>{n()},[]),a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{children:e.jsxs("div",{children:[e.jsxs("section",{className:"page-title centred",children:[e.jsx("div",{className:"bg-layer",style:{backgroundImage:"url(/assets/images/background/page-title.jpg)"}}),e.jsxs("div",{className:"line-box",children:[e.jsx("div",{className:"line-1"}),e.jsx("div",{className:"line-2"})]}),e.jsx("div",{className:"auto-container",children:e.jsxs("div",{className:"content-box",children:[e.jsx("h1",{children:"News"}),e.jsx("p",{children:s==null?void 0:s.title}),e.jsxs("ul",{className:"bread-crumb clearfix",children:[e.jsx("li",{children:e.jsx("a",{href:"index.html",children:"Home"})}),e.jsx("li",{children:"news"}),e.jsx("li",{children:s==null?void 0:s.slug})]})]})})]}),e.jsx("section",{className:"sidebar-page-container blog-details",children:e.jsx("div",{className:"auto-container",children:e.jsx("div",{className:"row clearfix",children:e.jsx("div",{className:"col-lg-12 col-md-12 col-sm-12 content-side",children:e.jsxs("div",{className:"blog-details-content",children:[e.jsx("div",{className:"news-block-one",children:e.jsxs("div",{className:"inner-box",children:[e.jsx("div",{className:"lower-content",children:e.jsx("h2",{children:s==null?void 0:s.title})}),e.jsx("div",{className:"image-box",children:e.jsx("figure",{className:"image",children:e.jsx("img",{src:`/uploads/${s==null?void 0:s.image}`,alt:!0})})})]})}),e.jsx("div",{dangerouslySetInnerHTML:{__html:s==null?void 0:s.body},className:"content-one"})]})})})})})]})})};export{o as default};
