export const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "T-Shirts", href: "/shirtWommen" },

            { name: "Pants", href: "/paintsWommen" },
            { name: "Swet-Shirt", href: "/switShirtWommen" },

            { name: "Jeans", href: "/jensWommen" },

          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "/smartWatchWommen" },
            { name: "Glasses", href: "/glass" },
            { name: "Bags", href: "/bags" },
            { name: "Hats", href: "/hats" },
            { name: "Perfiom", href: "/hats" },
          ],
        },
        {
          id: "brands",
          name: "Mekaup",
          items: [
            { name: "Skin Care", href: "/skin" },
            { name: "Hair Care", href: "/hair" },
            { name: "Mekaup", href: "/mekaup" },

          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "T-Shirts", href: "/t-shirt" },
            { name: "Swit-Shirt", href: "/switShirt" },
            { name: "jackit", href: "/jackit" },
            { name: "Polo", href: "/polo" },
            { name: "Pluvor", href: "/pluvor" },
            { name: "Paints", href: "/paints" },
          ],
        },
        {
          id: "accessories",
          name: "Kids",
          items: [
            { name: "Tshirt", href: "/tshirt" },
            { name: "Shirt", href: "/shirtKids" },
            { name: "Polo", href: "/poloKids" },
            { name: "Sweet Pants", href: "/sweetPants" },

          ],
        },
        {
          id: "brands",
          name: "Accessories",
          items: [
            { name: "Smart Watch", href: "/smart" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/compony" },
    { name: "Stores", href: "#" },
  ],
};
export default navigation;
