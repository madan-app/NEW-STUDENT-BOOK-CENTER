# New Student Book Center — Website

A free, static ecommerce-style website for **New Student Book Center**. No database,
no payment gateway, no paid hosting — customers browse, add to cart, and order
through **WhatsApp**.

Live pages needed: just these files, uploaded to GitHub Pages.

```
new-student-book-center/
├── index.html      ← the website itself
├── style.css        ← all the visual design
├── script.js        ← cart, search, WhatsApp logic (you won't usually need to touch this)
├── products.js      ← YOUR PRODUCT LIST — this is the file you'll edit most
├── README.md        ← this file
└── images/          ← your product photos go here
```

---

## 1. How to upload this to GitHub

1. Go to [github.com](https://github.com) and log in (or create a free account).
2. Click the **+** icon (top right) → **New repository**.
3. Name it anything, e.g. `new-student-book-center`. Keep it **Public**. Click **Create repository**.
4. On the new repository page, click **uploading an existing file**.
5. Drag in **all the files and the `images` folder** from this project.
6. Click **Commit changes**.

## 2. How to enable GitHub Pages

1. In your repository, click **Settings** (top menu).
2. In the left sidebar, click **Pages**.
3. Under **Branch**, choose `main` and folder `/ (root)`, then click **Save**.
4. Wait 1–2 minutes. Your site will be live at:
   `https://YOUR-USERNAME.github.io/new-student-book-center/`

## 3. How to connect a custom domain later

1. Buy a domain from any provider (GoDaddy, Namecheap, Google Domains, etc.).
2. In your domain provider's DNS settings, add a **CNAME record** pointing to
   `YOUR-USERNAME.github.io`.
3. In GitHub: **Settings → Pages → Custom domain**, type your domain, and save.
4. Nothing in this website's code needs to change for this to work.

---

## 4. How to replace product images from your Mac

Each product supports **two or more photos** — customers can click through
them in the product details view.

1. Find or edit your photos so they're roughly **square** (e.g. 800×800px)
   and under 300KB each if possible — this keeps the site fast. JPG, JPEG,
   PNG or WebP all work.
2. Drag the photos into the `images` folder in your GitHub repository (or
   your local copy, then re-upload).
3. Give them simple lowercase names with no spaces, e.g. `my-toy.jpg` and
   `my-toy-2.jpg`.
4. Open `products.js` and update that product's `image` and `images` fields:
   ```js
   image: "images/my-toy.jpg",
   images: ["images/my-toy.jpg", "images/my-toy-2.jpg"],
   ```
   - `image` is the single cover photo shown on the product card and in the cart.
   - `images` is the full list shown when a customer opens product details —
     add as many photos as you like, in any order.

If an image file is ever missing or renamed by mistake, the site automatically
shows a placeholder image instead of breaking.

## 5. How to add a new product

Open `products.js`. You'll see a list of products that looks like this:

```js
{
  id: 9,
  name: "My New Toy",
  category: "Toys",
  price: 799,
  oldPrice: null,
  discount: null,
  image: "images/my-toy.jpg",
  images: ["images/my-toy.jpg", "images/my-toy-2.jpg"],
  description: "Product description",
  newArrival: true,
  bestSeller: false
}
```

To add a new product:

1. Copy one whole block (from the `{` to the matching `},`).
2. Paste it just above the line that says `// ADD NEW PRODUCTS ABOVE THIS LINE`.
3. Give it a unique `id` number (one nobody else is using).
4. Fill in the name, category, price, image and description.
5. Save the file and upload/commit it to GitHub. The product will appear
   automatically — no other file needs to change.

**Important:** every product block except the very last one must end with a
comma `,` after the closing `}`.

## 6. How to add or change a description

In `products.js`, find the product and edit its `description` field:

```js
description: "Wireless TWS earbuds with charging case. Suitable for everyday music, calls and entertainment."
```

This text appears on the product card and in the "View Details" popup.

## 7. How to change a price

In `products.js`, edit the product's `price` field (numbers only, no ₹ symbol):

```js
price: 699,
```

To show a "was" price with a strikethrough, add `oldPrice`:

```js
price: 699,
oldPrice: 999,
discount: "30% OFF",
```

Leave `oldPrice` and `discount` as `null` if there's no discount.

## 8. How to create a new category

Just type a new name in a product's `category` field:

```js
category: "Mobile Accessories",
```

The next time you save and reload, "Mobile Accessories" will automatically
appear as a filter button on the site — you don't need to register it
anywhere else.

## 9. How to mark a product as a New Arrival

Set `newArrival: true` on that product in `products.js`. It will automatically
appear in the **New Arrivals** section on the homepage.

```js
newArrival: true,
```

Set it to `false` to remove it from that section.

## 10. How to mark a product as a Best Seller

Set `bestSeller: true` on that product in `products.js`. It will automatically
appear in the **Best Sellers** section.

```js
bestSeller: true,
```

## 11. How to change the WhatsApp number

Open `script.js` and find this near the top:

```js
const SHOP_CONFIG = {
  name: "NEW STUDENT BOOK CENTER",
  whatsappNumber: "919900300409", // country code + number, no + or spaces
  mapsLink: "https://maps.app.goo.gl/pV2Trx1P8Lyo2HLn9",
  ...
};
```

Change `whatsappNumber` to your new number, always with the country code and
no spaces, `+`, or dashes (e.g. `919900300409` for +91 99003 00409).

## 12. How to change the Google Maps link

1. Open Google Maps, search your shop, click **Share**, and copy the link.
2. Replace the `mapsLink` value in `script.js` (see above).
3. Also replace the two `href="https://maps.app.goo.gl/..."` links inside
   `index.html` (Get Directions button and the map card) with your new link.

## 13. Editing the Shipping / Return / Warranty text

Open `index.html` and search for these three sections (use Ctrl/Cmd+F):

- `id="shippingPolicyText"`
- `id="returnPolicyText"`
- `id="warrantyPolicyText"`

Edit the sentence between the `<p>` and `</p>` tags for each one. Warranty
terms often differ by product (e.g. TWS vs. chargers), so feel free to
mention specific products by name in that paragraph.

---

## How ordering works (for your reference)

- **Buy** or **Add** on a product card → adds the product to the cart and
  automatically slides the cart open from the right, so the customer always
  sees what's in it.
- **Clicking a product's photo** → opens that photo full-size.
- **Clicking anywhere else on a product card** (name, description, price) →
  opens the product details view with a full photo gallery.
- **Cart drawer** (top-right cart icon) → shows all items, lets the customer
  change quantities, and has an **Order on WhatsApp** button that sends one
  message listing every product and the total — nothing is sent to WhatsApp
  until the customer chooses to from the cart.
- No payment ever happens on the website — the customer and you confirm
  everything over WhatsApp chat.

## A few notes

- This site uses only HTML, CSS and vanilla JavaScript — no build step, no
  Node.js, no framework. You can open `index.html` directly in a browser to
  preview it before uploading.
- The product photos included right now are placeholders so you can see how
  everything looks. Replace them with your real photos whenever you're ready
  — the site will keep working with the placeholders until then.
- There is intentionally no payment gateway (no Razorpay/Stripe/PayPal) —
  everything is designed to end in a WhatsApp conversation.
