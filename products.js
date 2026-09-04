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
  },
    {
    id: 20,
    name: "FORMULA 1 DIECAST CARS (1pc)",
    category: "DIE-CAST CARS",
    price: 350,
    oldPrice: 450,
    discount: "22% OFF",
    image: "images/F1R.WEBP",
    images: ["images/F1R.WEBP","images/F1Y.WEBP","images/F1O.WEBP","images/F1B.WEBP"],
    description: "PREMIUM DIE-CAST F1 RACING CARS WITH PULLBACK FUNCTION, RUBBER TYRES FOR EXTRA SPEED FOR EVERY PULL.",
    newArrival: false,
    bestSeller: true
  }
   ,
    {
    id: 21,
    name: "UNIQUE METAL KEYCHAIN WITH SUPRISE PIKACHU/POKEBALL",
    category: "METAL KEYCHAINS",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/OPPO.WEBP",
    images: ["images/OPPO.WEBP","images/OPPO1.WEBP"],
    description: "durable Metal Alloy Build – Made from premium-quality materials, this rotating keyring is sturdy, rust-resistant, and designed for long-lasting use.",
    newArrival: true,
    bestSeller: true
  },
    {
    id: 22,
    name: "PIKACHU-Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/PIKA.WEBP",
    images: ["images/PIKA.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 23,
    name: "UNIQUE METAL KEYCHAIN WITH SUPRISE GOKU/DRAGON-BALL",
    category: "METAL KEYCHAINS",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/OPDR.WEBP",
    images: ["images/OPDR1.WEBP","images/OPDR.WEBP"],
    description: "durable Metal Alloy Build – Made from premium-quality materials, this rotating keyring is sturdy, rust-resistant, and designed for long-lasting use.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 24,
    name: "pirates of the caribbean1 -Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/PIRA.WEBP",
    images: ["images/PIRA.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 25,
    name: "pirates of the caribbean2 -Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/PIRA1.WEBP",
    images: ["images/PIRA1.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 26,
    name: "pirates of the caribbean3 -Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/PIRA2.WEBP",
    images: ["images/PIRA2.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 27,
    name: "AVENGERS LOGO -Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/AVNGRS.WEBP",
    images: ["images/AVNGRS.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 28,
    name: "SPIDER-MAN LOGO -Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNSPID.WEBP",
    images: ["images/SPNSPID.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 29,
    name: "IRON-MAN ARC REACTER -Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNIRN.WEBP",
    images: ["images/SPNIRN.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 30,
    name: "CAPTIAN-AMERICA SHIELD-Inspired Rotating Metal Keychain 3 COLORS AVAILABLE",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNCAP.WEBP",
    images: ["images/SPNCAP.WEBP","images/SPNCAP1.WEBP","images/SPNCAP2.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 31,
    name: "PANDA-Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNPNDA.WEBP",
    images: ["images/SPNPNDA.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 32,
    name: "NARUTO 1-Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNNRT.WEBP",
    images: ["images/SPNNRT.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 33,
    name: "NARUTO 2-Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNNRT1.WEBP",
    images: ["images/SPNNRT1.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 34,
    name: "NARUTO 3-Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNNRT2.WEBP",
    images: ["images/SPNNRT2.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 35,
    name: "NARUTO 4-Inspired Rotating Metal Keychain",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNNRT3.WEBP",
    images: ["images/SPNNRT3.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 36,
    name: "AVENGERS IRON-MAN HAND-Inspired Rotating Metal",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNIRN1.WEBP",
    images: ["images/SPNIRN1.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 37,
    name: "GAME OF THRONES DRAGON-Inspired Rotating Metal",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNDRG.WEBP",
    images: ["images/SPNDRG.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 38,
    name: "GAME OF THRONES WOLF-Inspired Rotating Metal 2 COLORS AVAILABLE",
    category: "metal rotating keychains",
    price: 100,
    oldPrice: 200,
    discount: "50% OFF",
    image: "images/SPNGOT.WEBP",
    images: ["images/SPNGOT.WEBP","images/SPNGOT1.WEBP"],
    description: "* Smooth Rotating Spinner – Features a 360° rotating center that works as a stress-relief spinner while adding a stylish touch to your everyday essentials.",
    newArrival: false,
    bestSeller: false
  },
    {
    id: 39,
    name: "Cute SPIDER-MAN JACKET Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain, 3 COLORS AVAILABLE",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/SPDJCK.WEBP",
    images: ["images/SPDJCK.WEBP","images/SPDJCK1.WEBP","images/SPDJCK2.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  },
    {
    id: 40,
    name: "Cute PANDA Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain, 3 DESIGNS AVAILABLE",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/PNDKY.WEBP",
    images: ["images/PNDKY.WEBP","images/PNDKY1.WEBP","images/PNDKY2.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  },
    {
    id: 41,
    name: "Cute TOM & JERRY Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/TJ.WEBP",
    images: ["images/TJ.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  },
    {
    id: 42,
    name: "Cute SKATING TOM Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/TOM.WEBP",
    images: ["images/TOM.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  },
    {
    id: 43,
    name: "Cute SKATING JERRY Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/JERY.WEBP",
    images: ["images/JERY.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  },
    {
    id: 44,
    name: "Cute UNICORN Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain 2 COLORS AVAILABLE",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/UNI.WEBP",
    images: ["images/UNI.WEBP","images/UNI1.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  },
    {
    id: 45,
    name: "Cute DEAD POOL Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/DDPL.WEBP",
    images: ["images/DDPL.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  },
    {
    id: 46,
    name: "Cute SUIT JERRY Trending Cartoon Keychain – Cute Soft Rubber Mini Doll key chain with stylish Strap for Bags Key Chain",
    category: "MINI DOLL keychains",
    price: 130,
    oldPrice: 349,
    discount: "63% OFF",
    image: "images/JRY.WEBP",
    images: ["images/JRY.WEBP"],
    description: "Cute Cartoon Design – Adorable character styles that add a playful and stylish touch to your bags, purses, or keys.",
    newArrival: true,
    bestSeller: false
  }
  // ADD NEW PRODUCTS ABOVE THIS LINE — remember the comma after the previous block!
];
