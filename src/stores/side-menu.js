import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
     
      {
        icon: "ShoppingBag",
        title: "Products",
        subMenu: [
          
          {
            icon: "",
            pathname: "/add-product",
            title: "Add Product",
          },
          {
            icon: "",
            pathname: "/products",
            title: "Products",
            subMenu: [
              {
                icon: "",
                pathname: "/product-list",
                title: "Product List",
              },
              {
                icon: "",
                pathname: "/product-grid",
                title: "Product Grid",
              },
            ],
          },
         
        ],
      },
    
    ],
  },
});

export { sideMenu };
