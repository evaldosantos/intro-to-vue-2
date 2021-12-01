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
        variantColor: "green",
        variantImage: "./images/vmSocks-green-onWhite.jpeg",
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/vmSocks-blue-onWhite.jpeg",
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});