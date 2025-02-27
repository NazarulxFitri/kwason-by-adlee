export const useGetItemListings = () => {
  const data = [
    {
      id: "twin-choco-hazelnut",
      url: `/media/twin-chocolate-hazelnut.jpeg`,
      alt: "theozziecookies",
      price: 10.90,
      name: "Twin Choco Hazelnut",
      description:
        "Double the Chocolate, Double the Indulgence! Rich Dark Chocolate & Hazelnut Stuffed Perfection!",
      stock: 0,
    },
    {
      id: "red-velvet-cheese-cake",
      url: `/media/red-velvet.jpeg`,
      alt: "theozziecookies",
      price: 10.90,
      name: "Red Velvet Cheese Cake",
      description:
        "Indulge in Luxury—Red Velvet Cookie Stuffed with White Chocolate & Cream Cheese",
      stock: 0,
    },
    {
      id: "uji-matcha-zie",
      url: `/media/matcha.jpeg`,
      alt: "theozziecookies",
      price: 9.80,
      name: "Uji Matcha Zie",
      description:
        "Matcha Meets White Chocolate—A Perfect Harmony of Flavor!",
      stock: 1,
    },
    {
      id: "lotus-biscoff",
      url: `/media/lotus-biscoff.jpeg`,
      alt: "theozziecookies",
      price: 9.80,
      name: "Lotus Biscoff",
      description:
        "Stuffed with Lotus Biscoff & White Chocolate—A Cookie Dream Come True!",
      stock: 0,
    },
    {
      id: "macademia-white-chocolate",
      url: `/media/macademia.jpeg`,
      alt: "theozziecookies",
      price: 9.80,
      name: "Macademia White Chocolate",
      description:
        "Macademia White Chocolate",
      stock: 0,
    },
    {
      id: "monster-cookie",
      url: `/media/monster.jpeg`,
      alt: "theozziecookies",
      price: 9.80,
      name: "Monster Ozzie",
      description:
        "The Ultimate Cookie Mashup! Oreo × Chips Ahoy × White Chocolate x Milk Chocolate = Pure Bliss!",
      stock: 0,
    },
    {
      id: "signature-ozzie",
      url: `/media/signature.jpeg`,
      alt: "theozziecookies",
      price: 8.80,
      name: "Signature Ozzie / Original",
      description:
        "Soft, Chewy, and Loaded with Dark Chocolate Chips. A Timeless Classic in Every Bite, Just Like Grandma Used to Make!",
      stock: 1,
    },
    {
      id: "campfire-smores",
      url: `/media/smores.jpeg`,
      alt: "theozziecookies",
      price: 9.80,
      name: "Campfire Smores",
      description:
        "Classic Cookie with dark cholocate chip + Marshmallow on top",
      stock: 1,
    },
  ];

  return {
    data,
  };
};
