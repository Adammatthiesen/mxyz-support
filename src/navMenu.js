export const navigationMenu = [
  { title: "Home", 
    path: "/", 
    target: "" },
  { title: "About", 
    path: "/about", 
    target: "" },
  { title: "Blog", 
    path: "/blog",  
    target: "", 
    badge: true, 
    badgetxt: "New Posts" },
  { title: "Contact", 
    path: "/contact", 
    target: "" },
  { title: "Public Reports", 
    path: "#", 
    target: "",
    children: [ 
      { title: "HDD Wipe Reports", 
        path: "/hddreports", 
        target: "" }, 
    ], 
  },
  { title: "Customer Logins", 
    path: "#", 
    target: "",
    children: [
      { title: "Support Center", 
        path: "https://support.matthiesen.xyz", 
        target: "_blank" },
      { title: "Billing & Invoicing", 
        path: "https://mxyz.invoicing.co/client/login", 
        target: "_blank" },
    ], 
  },
];