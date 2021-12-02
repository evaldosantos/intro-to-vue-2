var app = new Vue({
  el: "#app",
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    selectedImage: 0,
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
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/vmSocks-blue-onWhite.jpeg",
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    updateProduct(index) {
      this.selectedImage = index;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedImage].variantImage;
    },
    inStock() {
      return this.variants[this.selectedImage].variantQuantity > 0;
    }
  }
});