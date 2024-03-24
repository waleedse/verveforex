import{r,j as s,L as e}from"./app-LIL2moIX.js";import"./Helmet-IzvzIMAf.js";import"./index-0ldBUZeB.js";function x(d){const[a,i]=r.useState(""),c=l=>{let n=l==a?"":l;i(n)};return s.jsx("div",{children:s.jsxs("div",{children:[s.jsx("div",{className:"loader-bg",children:s.jsx("div",{className:"loader-track",children:s.jsx("div",{className:"loader-fill"})})}),s.jsx("nav",{className:"pc-sidebar",children:s.jsxs("div",{className:"navbar-wrapper",children:[s.jsx("div",{className:"m-header",children:s.jsxs("a",{href:"index.html",className:"b-brand text-primary",children:[s.jsx("img",{src:"/assets/images/logo.png",className:"img-fluid logo-md",alt:"logo"}),s.jsx("span",{className:"badge bg-light-success rounded-pill ms-2 theme-version"})]})}),s.jsxs("div",{className:"navbar-content",children:[s.jsx("div",{className:"card pc-user-card",children:s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{className:"d-flex align-items-center",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{src:"/admin/assets/images/user/avatar-1.jpg",alt:"user-image",className:"user-avtar wid-45 rounded-circle"})}),s.jsxs("div",{className:"flex-grow-1 ms-3 me-2",children:[s.jsx("h6",{className:"mb-0",children:"Jonh Smith"}),s.jsx("small",{children:"Administrator"})]}),s.jsx("a",{className:"btn btn-icon btn-link-secondary avtar","data-bs-toggle":"collapse",href:"#pc_sidebar_userlink",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-sort-outline"})})})]}),s.jsx("div",{className:"collapse pc-user-links",id:"pc_sidebar_userlink",children:s.jsxs("div",{className:"pt-3",children:[s.jsxs("a",{href:"#!",children:[s.jsx("i",{className:"ti ti-user"}),s.jsx("span",{children:"My Account"})]}),s.jsxs("a",{href:"#!",children:[s.jsx("i",{className:"ti ti-settings"}),s.jsx("span",{children:"Settings"})]}),s.jsxs("a",{href:"#!",children:[s.jsx("i",{className:"ti ti-lock"}),s.jsx("span",{children:"Lock Screen"})]}),s.jsxs("a",{href:"#!",children:[s.jsx("i",{className:"ti ti-power"}),s.jsx("span",{children:"Logout"})]})]})})]})}),s.jsxs("ul",{className:"pc-navbar",children:[s.jsx("li",{className:"pc-item pc-caption",children:s.jsx("label",{children:"Clients & Brokers"})}),s.jsx("li",{className:"pc-item pc-hasmenu",children:s.jsxs(e,{to:"/adminpanel/manage-clients",className:"pc-link",children:[s.jsx("span",{className:"pc-micon",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-status-up"})})}),s.jsx("span",{className:"pc-mtext",children:"Clients"})]})}),s.jsxs("li",{className:`pc-item pc-hasmenu ${a=="brokers"&&"pc-trigger active"}`,children:[s.jsxs("a",{onClick:()=>{c("brokers")},className:"pc-link",children:[s.jsx("span",{className:"pc-micon",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-document"})})}),s.jsx("span",{className:"pc-mtext",children:"Manage brokers"}),s.jsx("span",{className:"pc-arrow",children:s.jsx("i",{className:"fas fa-chevron-right"})})]}),s.jsxs("ul",{className:"pc-submenu",children:[s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/add-broker",children:"Add Broker"})}),s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/manage-broker",children:"Manage Brokers"})})]})]}),s.jsx("li",{className:"pc-item pc-caption",children:s.jsx("label",{children:"Manage Website"})}),s.jsx("li",{className:"pc-item pc-hasmenu",children:s.jsxs(e,{to:"/adminpanel",className:"pc-link",children:[s.jsx("span",{className:"pc-micon",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-status-up"})})}),s.jsx("span",{className:"pc-mtext",children:"Dashboard"})]})}),s.jsxs("li",{className:`pc-item pc-hasmenu ${a=="promotions"&&"pc-trigger active"}`,children:[s.jsxs("a",{onClick:()=>{c("promotions")},className:"pc-link",children:[s.jsx("span",{className:"pc-micon",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-document"})})}),s.jsx("span",{className:"pc-mtext",children:"Manage Promotions"}),s.jsx("span",{className:"pc-arrow",children:s.jsx("i",{className:"fas fa-chevron-right"})})]}),s.jsxs("ul",{className:"pc-submenu",children:[s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/add-promotion",children:"Add promotion"})}),s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/manage-promotion",children:"Manage Promotion"})})]})]}),s.jsxs("li",{onClick:()=>{c("sliders")},className:`pc-item pc-hasmenu ${a=="sliders"&&"pc-trigger"}`,children:[s.jsxs("a",{className:"pc-link",children:[s.jsx("span",{className:"pc-micon",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-document"})})}),s.jsx("span",{className:"pc-mtext",children:"Manage sliders"}),s.jsx("span",{className:"pc-arrow",children:s.jsx("i",{className:"fas fa-chevron-right"})})]}),s.jsxs("ul",{className:"pc-submenu",children:[s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/add-slider",children:"Add sliders"})}),s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/manage-sliders",children:"Manage sliders"})})]})]}),s.jsxs("li",{onClick:()=>{c("news")},className:`pc-item pc-hasmenu ${a=="news"&&"pc-trigger"}`,children:[s.jsxs("a",{href:"#!",className:"pc-link",children:[s.jsx("span",{className:"pc-micon",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-document"})})}),s.jsx("span",{className:"pc-mtext",children:"Manage News"}),s.jsx("span",{className:"pc-arrow",children:s.jsx("i",{className:"fas fa-chevron-right"})})]}),s.jsxs("ul",{className:"pc-submenu",children:[s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/add-news",children:"Add news"})}),s.jsx("li",{className:"pc-item",children:s.jsx(e,{className:"pc-link",to:"/adminpanel/manage-news",children:"Manage news"})})]})]})]})]})]})})," ",s.jsx("header",{className:"pc-header",children:s.jsxs("div",{className:"header-wrapper",children:[" ",s.jsx("div",{className:"me-auto pc-mob-drp",children:s.jsxs("ul",{className:"list-unstyled",children:[s.jsx("li",{className:"pc-h-item pc-sidebar-collapse",children:s.jsx("a",{href:"#",className:"pc-head-link ms-0",id:"sidebar-hide",children:s.jsx("i",{className:"ti ti-menu-2"})})}),s.jsx("li",{className:"pc-h-item pc-sidebar-popup",children:s.jsx("a",{href:"#",className:"pc-head-link ms-0",id:"mobile-collapse",children:s.jsx("i",{className:"ti ti-menu-2"})})}),s.jsxs("li",{className:"dropdown pc-h-item",children:[s.jsx("a",{className:"pc-head-link dropdown-toggle arrow-none m-0 trig-drp-search","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-search-normal-1"})})}),s.jsx("div",{className:"dropdown-menu pc-h-dropdown drp-search",children:s.jsx("form",{className:"px-3 py-2",children:s.jsx("input",{type:"search",className:"form-control border-0 shadow-none",placeholder:"Search here. . ."})})})]})]})}),s.jsx("div",{className:"ms-auto",children:s.jsxs("ul",{className:"list-unstyled",children:[s.jsxs("li",{className:"dropdown pc-h-item",children:[s.jsx("a",{className:"pc-head-link dropdown-toggle arrow-none me-0","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-sun-1"})})}),s.jsxs("div",{className:"dropdown-menu dropdown-menu-end pc-h-dropdown",children:[s.jsxs("a",{href:"#!",className:"dropdown-item",onclick:"layout_change('dark')",children:[s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-moon"})}),s.jsx("span",{children:"Dark"})]}),s.jsxs("a",{href:"#!",className:"dropdown-item",onclick:"layout_change('light')",children:[s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-sun-1"})}),s.jsx("span",{children:"Light"})]}),s.jsxs("a",{href:"#!",className:"dropdown-item",onclick:"layout_change_default()",children:[s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-setting-2"})}),s.jsx("span",{children:"Default"})]})]})]}),s.jsxs("li",{className:"dropdown pc-h-item",children:[s.jsx("a",{className:"pc-head-link dropdown-toggle arrow-none me-0","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-setting-2"})})}),s.jsxs("div",{className:"dropdown-menu dropdown-menu-end pc-h-dropdown",children:[s.jsxs("a",{href:"#!",className:"dropdown-item",children:[s.jsx("i",{className:"ti ti-user"}),s.jsx("span",{children:"My Account"})]}),s.jsxs("a",{href:"#!",className:"dropdown-item",children:[s.jsx("i",{className:"ti ti-settings"}),s.jsx("span",{children:"Settings"})]}),s.jsxs("a",{href:"#!",className:"dropdown-item",children:[s.jsx("i",{className:"ti ti-headset"}),s.jsx("span",{children:"Support"})]}),s.jsxs("a",{href:"#!",className:"dropdown-item",children:[s.jsx("i",{className:"ti ti-lock"}),s.jsx("span",{children:"Lock Screen"})]}),s.jsxs("a",{href:"#!",className:"dropdown-item",children:[s.jsx("i",{className:"ti ti-power"}),s.jsx("span",{children:"Logout"})]})]})]}),s.jsx("li",{className:"pc-h-item",children:s.jsx("a",{href:"#",className:"pc-head-link me-0","data-bs-toggle":"offcanvas","data-bs-target":"#announcement","aria-controls":"announcement",children:s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-flash"})})})}),s.jsxs("li",{className:"dropdown pc-h-item",children:[s.jsxs("a",{className:"pc-head-link dropdown-toggle arrow-none me-0","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","aria-expanded":"false",children:[s.jsx("svg",{className:"pc-icon",children:s.jsx("use",{xlinkHref:"#custom-notification"})}),s.jsx("span",{className:"badge bg-success pc-h-badge",children:"3"})]}),s.jsxs("div",{className:"dropdown-menu dropdown-notification dropdown-menu-end pc-h-dropdown",children:[s.jsxs("div",{className:"dropdown-header d-flex align-items-center justify-content-between",children:[s.jsx("h5",{className:"m-0",children:"Notifications"}),s.jsx("a",{href:"#!",className:"btn btn-link btn-sm",children:"Mark all read"})]}),s.jsxs("div",{className:"dropdown-body text-wrap header-notification-scroll position-relative",style:{maxHeight:"calc(100vh - 215px)"},children:[s.jsx("p",{className:"text-span",children:"Today"}),s.jsx("div",{className:"card mb-2",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"d-flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("svg",{className:"pc-icon text-primary",children:s.jsx("use",{xlinkHref:"#custom-layer"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("span",{className:"float-end text-sm text-muted",children:"2 min ago"}),s.jsx("h5",{className:"text-body mb-2",children:"UI/UX Design"}),s.jsx("p",{className:"mb-0",children:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"})]})]})})}),s.jsx("div",{className:"card mb-2",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"d-flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("svg",{className:"pc-icon text-primary",children:s.jsx("use",{xlinkHref:"#custom-sms"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("span",{className:"float-end text-sm text-muted",children:"1 hour ago"}),s.jsx("h5",{className:"text-body mb-2",children:"Message"}),s.jsx("p",{className:"mb-0",children:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500."})]})]})})}),s.jsx("p",{className:"text-span",children:"Yesterday"}),s.jsx("div",{className:"card mb-2",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"d-flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("svg",{className:"pc-icon text-primary",children:s.jsx("use",{xlinkHref:"#custom-document-text"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("span",{className:"float-end text-sm text-muted",children:"2 hour ago"}),s.jsx("h5",{className:"text-body mb-2",children:"Forms"}),s.jsx("p",{className:"mb-0",children:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"})]})]})})}),s.jsx("div",{className:"card mb-2",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"d-flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("svg",{className:"pc-icon text-primary",children:s.jsx("use",{xlinkHref:"#custom-user-bold"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("span",{className:"float-end text-sm text-muted",children:"12 hour ago"}),s.jsx("h5",{className:"text-body mb-2",children:"Challenge invitation"}),s.jsxs("p",{className:"mb-2",children:[s.jsx("span",{className:"text-dark",children:"Jonny aber"})," invites to join the challenge"]}),s.jsx("button",{className:"btn btn-sm btn-outline-secondary me-2",children:"Decline"}),s.jsx("button",{className:"btn btn-sm btn-primary",children:"Accept"})]})]})})}),s.jsx("div",{className:"card mb-2",children:s.jsx("div",{className:"card-body",children:s.jsxs("div",{className:"d-flex",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("svg",{className:"pc-icon text-primary",children:s.jsx("use",{xlinkHref:"#custom-security-safe"})})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("span",{className:"float-end text-sm text-muted",children:"5 hour ago"}),s.jsx("h5",{className:"text-body mb-2",children:"Security"}),s.jsx("p",{className:"mb-0",children:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type"})]})]})})})]}),s.jsx("div",{className:"text-center py-2",children:s.jsx("a",{href:"#!",className:"link-danger",children:"Clear all Notifications"})})]})]}),s.jsxs("li",{className:"dropdown pc-h-item header-user-profile",children:[s.jsx("a",{className:"pc-head-link dropdown-toggle arrow-none me-0","data-bs-toggle":"dropdown",href:"#",role:"button","aria-haspopup":"false","data-bs-auto-close":"outside","aria-expanded":"false",children:s.jsx("img",{src:"/admin/assets/images/user/avatar-2.jpg",alt:"user-image",className:"user-avtar"})}),s.jsxs("div",{className:"dropdown-menu dropdown-user-profile dropdown-menu-end pc-h-dropdown",children:[s.jsx("div",{className:"dropdown-header d-flex align-items-center justify-content-between",children:s.jsx("h5",{className:"m-0",children:"Profile"})}),s.jsx("div",{className:"dropdown-body",children:s.jsxs("div",{className:"profile-notification-scroll position-relative",style:{maxHeight:"calc(100vh - 225px)"},children:[s.jsxs("div",{className:"d-flex mb-1",children:[s.jsx("div",{className:"flex-shrink-0",children:s.jsx("img",{src:"/admin/assets/images/user/avatar-2.jpg",alt:"user-image",className:"user-avtar wid-35"})}),s.jsxs("div",{className:"flex-grow-1 ms-3",children:[s.jsx("h6",{className:"mb-1",children:"Carson Darrin 🖖"}),s.jsx("span",{children:"carson.darrin@company.io"})]})]}),s.jsx("hr",{className:"border-secondary border-opacity-50"}),s.jsx("div",{className:"card",children:s.jsx("div",{className:"card-body py-3",children:s.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[s.jsxs("h5",{className:"mb-0 d-inline-flex align-items-center",children:[s.jsx("svg",{className:"pc-icon text-muted me-2",children:s.jsx("use",{xlinkHref:"#custom-notification-outline"})}),"Notification"]}),s.jsx("div",{className:"form-check form-switch form-check-reverse m-0",children:s.jsx("input",{className:"form-check-input f-18",type:"checkbox",role:"switch"})})]})})}),s.jsx("p",{className:"text-span",children:"Manage"}),s.jsx("a",{href:"#",className:"dropdown-item",children:s.jsxs("span",{children:[s.jsx("svg",{className:"pc-icon text-muted me-2",children:s.jsx("use",{xlinkHref:"#custom-setting-outline"})}),s.jsx("span",{children:"Settings"})]})}),s.jsx("a",{href:"#",className:"dropdown-item",children:s.jsxs("span",{children:[s.jsx("svg",{className:"pc-icon text-muted me-2",children:s.jsx("use",{xlinkHref:"#custom-share-bold"})}),s.jsx("span",{children:"Share"})]})}),s.jsx("a",{href:"#",className:"dropdown-item",children:s.jsxs("span",{children:[s.jsx("svg",{className:"pc-icon text-muted me-2",children:s.jsx("use",{xlinkHref:"#custom-lock-outline"})}),s.jsx("span",{children:"Change Password"})]})}),s.jsx("hr",{className:"border-secondary border-opacity-50"}),s.jsx("p",{className:"text-span",children:"Team"}),s.jsxs("a",{href:"#",className:"dropdown-item",children:[s.jsxs("span",{children:[s.jsx("svg",{className:"pc-icon text-muted me-2",children:s.jsx("use",{xlinkHref:"#custom-profile-2user-outline"})}),s.jsx("span",{children:"UI Design team"})]}),s.jsxs("div",{className:"user-group",children:[s.jsx("img",{src:"/admin/assets/images/user/avatar-1.jpg",alt:"user-image",className:"avtar"}),s.jsx("span",{className:"avtar bg-danger text-white",children:"K"}),s.jsx("span",{className:"avtar bg-success text-white",children:s.jsx("svg",{className:"pc-icon m-0",children:s.jsx("use",{xlinkHref:"#custom-user"})})}),s.jsx("span",{className:"avtar bg-light-primary text-primary",children:"+2"})]})]}),s.jsxs("a",{href:"#",className:"dropdown-item",children:[s.jsxs("span",{children:[s.jsx("svg",{className:"pc-icon text-muted me-2",children:s.jsx("use",{xlinkHref:"#custom-profile-2user-outline"})}),s.jsx("span",{children:"Friends Groups"})]}),s.jsxs("div",{className:"user-group",children:[s.jsx("img",{src:"/admin/assets/images/user/avatar-1.jpg",alt:"user-image",className:"avtar"}),s.jsx("span",{className:"avtar bg-danger text-white",children:"K"}),s.jsx("span",{className:"avtar bg-success text-white",children:s.jsx("svg",{className:"pc-icon m-0",children:s.jsx("use",{xlinkHref:"#custom-user"})})})]})]}),s.jsxs("a",{href:"#",className:"dropdown-item",children:[s.jsxs("span",{children:[s.jsx("svg",{className:"pc-icon text-muted me-2",children:s.jsx("use",{xlinkHref:"#custom-add-outline"})}),s.jsx("span",{children:"Add new"})]}),s.jsx("div",{className:"user-group",children:s.jsx("span",{className:"avtar bg-primary text-white",children:s.jsx("svg",{className:"pc-icon m-0",children:s.jsx("use",{xlinkHref:"#custom-add-outline"})})})})]}),s.jsx("hr",{className:"border-secondary border-opacity-50"}),s.jsx("div",{className:"d-grid mb-3",children:s.jsxs("button",{className:"btn btn-primary",children:[s.jsx("svg",{className:"pc-icon me-2",children:s.jsx("use",{xlinkHref:"#custom-logout-1-outline"})}),"Logout"]})}),s.jsx("div",{className:"card border-0 shadow-none drp-upgrade-card mb-0",style:{backgroundImage:"url(/admin/assets/images/layout/img-profile-card.jpg)"},children:s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{className:"user-group",children:[s.jsx("img",{src:"/admin/assets/images/user/avatar-1.jpg",alt:"user-image",className:"avtar"}),s.jsx("img",{src:"/admin/assets/images/user/avatar-2.jpg",alt:"user-image",className:"avtar"}),s.jsx("img",{src:"/admin/assets/images/user/avatar-3.jpg",alt:"user-image",className:"avtar"}),s.jsx("img",{src:"/admin/assets/images/user/avatar-4.jpg",alt:"user-image",className:"avtar"}),s.jsx("img",{src:"/admin/assets/images/user/avatar-5.jpg",alt:"user-image",className:"avtar"}),s.jsx("span",{className:"avtar bg-light-primary text-primary",children:"+20"})]}),s.jsxs("h3",{className:"my-3 text-dark",children:["245.3k ",s.jsx("small",{className:"text-muted",children:"Followers"})]}),s.jsxs("div",{className:"btn btn btn-warning",children:[s.jsx("svg",{className:"pc-icon me-2",children:s.jsx("use",{xlinkHref:"#custom-logout-1-outline"})}),"Upgrade to Business"]})]})})]})})]})]})]})})]})})]})})}export{x as default};
