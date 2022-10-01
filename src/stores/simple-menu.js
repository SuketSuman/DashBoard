import { atom } from "recoil";

const simpleMenu = atom({
  key: "simpleMenu",
  default: {
    menu: [
     
      {
        icon: "ShoppingBag",
        title: "Products",
        subMenu: [
          
          {
            icon: "",
            pathname: "/simple-menu/add-product",
            title: "Add Product",
          },
          {
            icon: "",
            pathname: "/simple-menu/products",
            title: "Products",
            subMenu: [
              {
                icon: "",
                pathname: "/simple-menu/product-list",
                title: "Product List",
              },
              {
                icon: "",
                pathname: "/simple-menu/product-grid",
                title: "Product Grid",
              },
            ],
          },
         
         
         
        ],
     
      }
     
     
    ],
  },
});

export { simpleMenu };
