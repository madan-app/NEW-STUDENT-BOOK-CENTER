/* ==========================================================================
   NEW STUDENT BOOK CENTER — PRODUCT CATALOG
   ==========================================================================
   HOW TO ADD A NEW PRODUCT
   1. Copy an existing block below (the part between { and },).
   2. Change the "id" to a number nobody else is using.
   3. Put your product photo(s) inside the images/ folder.
   4. Change "image" to match your main photo's file name.
   5. Change "images" to list every photo for that product (at least one;
      two or more lets customers swipe through photos on the product page).
   6. Save the file. That's it — no other file needs to change.

   ABOUT "image" vs "images"
   - "image"  = the single cover photo shown on the product card and in the cart.
   - "images" = the full photo gallery shown when a customer opens product
                details (clicking the product opens this view). Include the
                same photo as "image" first, then any extra angles/photos.

   HOW TO CREATE A NEW CATEGORY
   - Just type a new category name in the "category" field, e.g.
     category: "Mobile Accessories"
   - It will automatically show up as a filter button on the website.

   Set newArrival: true  -> product appears in the "New Arrivals" section
   Set bestSeller: true  -> product appears in the "Best Sellers" section

   "oldPrice" and "discount" are optional. Leave them out (or set to null)
   if a product has no MRP / no discount.
   ========================================================================== */

// ADD NEW PRODUCTS BELOW
const PRODUCTS = [
  {
    id: 1,
    name: "CUTE BROWNY POUCH ",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/BROWNY.WEBP",
    images: ["images/BROWNY.WEBP", "images/BROWNY.WEBP"],
    description: "Premium Browny pouch with keychain attached.",
    newArrival: true,
    bestSeller: true
  },
  {
    id: 2,
    name: "3D CAPTAIN AMERICA 1 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 375,
    discount: "27% OFF",
    image: "images/CAP.WEBP",
    images: ["images/CAP.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D CAPTAIN AMERICA POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: false,
    bestSeller: true
  },
  {
    id: 3,
    name: "3D BAT-MAN 1 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/BAT.WEBP",
    images: ["images/BAT.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D BAT-MAN 1 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: true,
    bestSeller: false
  },
  {
    id: 4,
    name: "3D BAT-MAN 2 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/BAT1.WEBP",
    images: ["images/BAT1.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D BAT-MAN 2 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 5,
    name: "3D SPIDER-MAN 1 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/SPI.WEBP",
    images: ["images/SPI.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D SPIDER-MAN 1 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: true,
    bestSeller: false
  },
  {
    id: 6,
   name: "3D PANDA POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/PANDA.WEBP",
    images: ["images/PANDA.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D PANDA POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: true,
    bestSeller: true
  },
  {
    id: 7,
    name: "3D SPIDER-MAN 2 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/SPI1.WEBP",
    images: ["images/SPI1.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D SPIDER-MAN 2 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 8,
    name: "3D IRON-MAN 1 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/IRN.WEBP",
    images: ["images/IRN.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D IRON-MAN 1 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: true,
    bestSeller: true
  },
  {
    id: 9,
    name: "3D IRON-MAN 2 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/IRN1.WEBP",
    images: ["images/IRN1.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D IRON-MAN 2 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 10,
    name: "3D SPIDER-MAN 3 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/SPI2.WEBP",
    images: ["images/SPI2.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D SPIDER-MAN 3 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: true,
    bestSeller: true
  },
  {
    id: 11,
    name: "3D CAPTIAN-AMERICA 2 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/CAP1.WEBP",
    images: ["images/CAP1.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D CAPTIAN-AMERICA 2 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: false,
    bestSeller: true
  },
  {
    id: 12,
    name: "3D SPIDER-MAN 4 POUCH",
    category: "Pouches",
    price: 275,
    oldPrice: 370,
    discount: "27% OFF",
    image: "images/SPI3.WEBP",
    images: ["images/SPI3.WEBP"],
    description: "BEST FOR DAILY SCHOOL USE FOR KIDS, 3D SPIDER-MAN 4 POUCH, HARD SHELL FOR BETTER PROTECTION.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 13,
    name: "PANDA GREEN POUCH",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/PNDA.WEBP",
    images: ["images/PNDA.WEBP"],
    description: "PREMIUM PANDA POUCH, BEST FOR GIFING FOR YOUR KIDS, GREEN COLOR, HIGH QUALITY.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 14,
    name: "CUTE KITTY PURPLE POUCH",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/PRPL.WEBP",
    images: ["images/PRPL.WEBP"],
    description: "PREMIUM CUTE KITTY PURPLE POUCH, BEST FOR GIFING FOR YOUR KIDS, PURPLE COLOR, HIGH QUALITY.",
    newArrival: true,
    bestSeller: false
  },
  {
    id: 15,
    name: "CUTE FLUFFY RABBIT POUCH",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/FLUF.WEBP",
    images: ["images/FLUF.WEBP"],
    description: "PREMIUM CUTE FLUFFY RABBIT POUCH, BEST FOR GIFING FOR YOUR KIDS, PINK COLOR, HIGH QUALITY.",
    newArrival: false,
    bestSeller: true
  },
  {
    id: 16,
    name: "CUTE PRETTY BLUE POUCH",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/BLU.WEBP",
    images: ["images/BLU.WEBP"],
    description: "PREMIUM CUTE PRETTY BLUE POUCH, BEST FOR GIFING FOR YOUR KIDS, BLUE AND YELLOW COLOR, HIGH QUALITY.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 17,
    name: "CUTE HELLO KITTY POUCH",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/NEW.WEBP",
    images: ["images/NEW.WEBP"],
    description: "PREMIUM CUTE HELLO KITTY POUCH, BEST FOR GIFING FOR YOUR KIDS, PINK COLOR, HIGH QUALITY.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 18,
    name: "CUTE TEDDY POUCH",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/TEDY.WEBP",
    images: ["images/TEDY.WEBP"],
    description: "PREMIUM CUTE TEDDY POUCH, BEST FOR GIFING FOR YOUR KIDS, BROWN COLOR, HIGH QUALITY.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 19,
    name: "CUTE ORANGE RABBIT POUCH",
    category: "Pouches",
    price: 280,
    oldPrice: 350,
    discount: "20% OFF",
    image: "images/ORNG.WEBP",
    images: ["images/ORNG.WEBP"],
    description: "PREMIUM CUTE ORANGE RABBIT POUCH, BEST FOR GIFING FOR YOUR KIDS, PINK COLOR, HIGH QUALITY.",
    newArrival: false,
    bestSeller: false
  }
  // ADD NEW PRODUCTS ABOVE THIS LINE — remember the comma after the previous block!
];
