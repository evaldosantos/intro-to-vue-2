var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
    image: "./images/vmSocks-green-onWhite.jpeg",
    inStock: true,
    details: [
      "80% cotton",
      "20% polyster",
      "Gender-neutral"
    ],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        variantId: 2235,
        variantColor: "blue"
      }
    ]
  }
});