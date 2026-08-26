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
    name: "Ruled Notebook (200 pages)",
    category: "Stationery",
    price: 60,
    oldPrice: 75,
    discount: "20% OFF",
    image: "images/notebook.jpg",
    images: ["images/notebook.jpg", "images/notebook-2.jpg"],
    description: "Long-lasting ruled notebook, 200 pages, smooth paper for everyday writing. Great for school, college and office use.",
    newArrival: false,
    bestSeller: true
  },
  {
    id: 2,
    name: "Gel Pen Set (Pack of 5)",
    category: "Stationery",
    price: 50,
    oldPrice: null,
    discount: null,
    image: "images/pens.jpg",
    images: ["images/pens.jpg", "images/pens-2.jpg"],
    description: "Smooth-writing gel pens, pack of 5 assorted colours. Comfortable grip, ideal for daily writing and school work.",
    newArrival: false,
    bestSeller: true
  },
  {
    id: 3,
    name: "Daily Diary 2026",
    category: "Stationery",
    price: 180,
    oldPrice: 220,
    discount: "18% OFF",
    image: "images/tyt.jpg",
    images: ["images/diary.jpg", "images/diary-2.jpg"],
    description: "Hardbound daily diary with date pages, ideal for planning, notes and personal journaling.",
    newArrival: true,
    bestSeller: false
  },
  {
    id: 4,
    name: "Scientific Calculator",
    category: "Stationery",
    price: 650,
    oldPrice: 750,
    discount: "13% OFF",
    image: "images/calculator.jpg",
    images: ["images/calculator.jpg", "images/calculator-2.jpg"],
    description: "Scientific calculator suitable for school and college level mathematics, trigonometry and statistics.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 5,
    name: "Geometry Box",
    category: "Stationery",
    price: 90,
    oldPrice: null,
    discount: null,
    image: "images/geometry-box.jpg",
    images: ["images/geometry-box.jpg", "images/geometry-box-2.jpg"],
    description: "Complete geometry box with compass, divider, scale, protractor and set squares for school use.",
    newArrival: true,
    bestSeller: false
  },
  {
    id: 6,
    name: "F1 Diecast Car",
    category: "Toys",
    price: 299,
    oldPrice: 349,
    discount: "14% OFF",
    image: "images/f1.jpg",
    images: ["images/f1.jpg", "images/f1-2.jpg"],
    description: "Die-cast Formula 1 model car with detailed finish. A great collectible and gift for motorsport fans.",
    newArrival: true,
    bestSeller: true
  },
  {
    id: 7,
    name: "Mustang Diecast Car",
    category: "Toys",
    price: 349,
    oldPrice: null,
    discount: null,
    image: "images/mustang.jpg",
    images: ["images/mustang.jpg", "images/mustang-2.jpg"],
    description: "Classic Mustang diecast model with pull-back action and sturdy metal body.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 8,
    name: "Spider-Man Skating Toy Robot",
    category: "Toys",
    price: 499,
    oldPrice: 599,
    discount: "17% OFF",
    image: "images/spiderman.jpg",
    images: ["images/spiderman.jpg", "images/spiderman-2.jpg"],
    description: "Spider-Man themed skating robot toy with lights and music. A fun pick for kids of all ages.",
    newArrival: true,
    bestSeller: true
  },
  {
    id: 9,
    name: "Spinner Toy",
    category: "Toys",
    price: 99,
    oldPrice: null,
    discount: null,
    image: "images/spinner.jpg",
    images: ["images/spinner.jpg", "images/spinner-2.jpg"],
    description: "Fun handheld spinner toy for stress relief and play. Smooth spin, compact and durable.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 10,
    name: "U&I TWS Earbuds",
    category: "TWS & Audio",
    price: 699,
    oldPrice: 999,
    discount: "30% OFF",
    image: "images/tws.jpg",
    images: ["images/tws.jpg", "images/tws-2.jpg"],
    description: "Wireless TWS earbuds with charging case. Suitable for everyday music, calls and entertainment.",
    newArrival: true,
    bestSeller: true
  },
  {
    id: 11,
    name: "Bluetooth Neckband",
    category: "TWS & Audio",
    price: 449,
    oldPrice: 599,
    discount: "25% OFF",
    image: "images/neckband.jpg",
    images: ["images/neckband.jpg", "images/neckband-2.jpg"],
    description: "Lightweight Bluetooth neckband with magnetic earbuds, long battery life and clear call quality.",
    newArrival: false,
    bestSeller: true
  },
  {
    id: 12,
    name: "Wired Earphones",
    category: "TWS & Audio",
    price: 149,
    oldPrice: null,
    discount: null,
    image: "images/earphones.jpg",
    images: ["images/earphones.jpg", "images/earphones-2.jpg"],
    description: "Reliable wired earphones with in-line mic, compatible with most phones and devices.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 13,
    name: "USB Data Cable",
    category: "Chargers & Cables",
    price: 99,
    oldPrice: null,
    discount: null,
    image: "images/cable.jpg",
    images: ["images/cable.jpg", "images/cable-2.jpg"],
    description: "Durable USB data cable for fast charging and data transfer. Compatible with most Android phones.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 14,
    name: "U&I Charging Cable",
    category: "Chargers & Cables",
    price: 129,
    oldPrice: 149,
    discount: "13% OFF",
    image: "images/ui-cable.jpg",
    images: ["images/ui-cable.jpg", "images/ui-cable-2.jpg"],
    description: "U&I branded charging cable, tangle-resistant design built for daily use.",
    newArrival: true,
    bestSeller: false
  },
  {
    id: 15,
    name: "Mobile Charger (Fast Charging)",
    category: "Chargers & Cables",
    price: 249,
    oldPrice: 299,
    discount: "17% OFF",
    image: "images/charger.jpg",
    images: ["images/charger.jpg", "images/charger-2.jpg"],
    description: "Fast charging mobile adapter, safe and reliable for daily charging of smartphones.",
    newArrival: false,
    bestSeller: true
  },
  {
    id: 16,
    name: "Airtel SIM Card",
    category: "SIM Cards",
    price: 0,
    oldPrice: null,
    discount: null,
    image: "images/airtel-sim.jpg",
    images: ["images/airtel-sim.jpg", "images/airtel-sim-2.jpg"],
    description: "New Airtel prepaid/postpaid SIM card activation available in-store. Ask us for current plans.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 17,
    name: "Jio SIM Card",
    category: "SIM Cards",
    price: 0,
    oldPrice: null,
    discount: null,
    image: "images/jio-sim.jpg",
    images: ["images/jio-sim.jpg", "images/jio-sim-2.jpg"],
    description: "New Jio prepaid SIM card activation available in-store. Ask us for current plans.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 18,
    name: "Vi SIM Card",
    category: "SIM Cards",
    price: 0,
    oldPrice: null,
    discount: null,
    image: "images/vi-sim.jpg",
    images: ["images/vi-sim.jpg", "images/vi-sim-2.jpg"],
    description: "New Vi (Vodafone Idea) prepaid SIM card activation available in-store. Ask us for current plans.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 19,
    name: "Airtel Digital TV (DTH)",
    category: "DTH / Internet",
    price: 0,
    oldPrice: null,
    discount: null,
    image: "images/airtel-dth.jpg",
    images: ["images/airtel-dth.jpg", "images/airtel-dth-2.jpg"],
    description: "New Airtel Digital TV connection and recharge services available. Ask us for current packs.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 20,
    name: "Tata Play DTH",
    category: "DTH / Internet",
    price: 0,
    oldPrice: null,
    discount: null,
    image: "images/tataplay-dth.jpg",
    images: ["images/tataplay-dth.jpg", "images/tataplay-dth-2.jpg"],
    description: "New Tata Play DTH connection and recharge services available. Ask us for current packs.",
    newArrival: false,
    bestSeller: false
  },
  {
    id: 21,
    name: "Airtel AirFiber",
    category: "DTH / Internet",
    price: 0,
    oldPrice: null,
    discount: null,
    image: "images/airfiber.jpg",
    images: ["images/airfiber.jpg", "images/airfiber-2.jpg"],
    description: "Airtel AirFiber wireless broadband connection — enquire in-store for plans and availability.",
    newArrival: true,
    bestSeller: false
  }
  // ADD NEW PRODUCTS ABOVE THIS LINE — remember the comma after the previous block!
];
