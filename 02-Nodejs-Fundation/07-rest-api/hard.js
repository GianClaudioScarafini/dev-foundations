// 07 — REST API Design — Hard
// Goal: build a production-quality REST API with pagination, filtering, and sorting

// ─────────────────────────────────────────────
// Challenge: E-commerce Product Catalogue API
//
// No starter code. You design the solution.
//
// Build an API that a real React frontend could use to display a product catalogue.
//
// Requirements:
//
// 1. Data model
//    Product: { id, name, description, price, compareAtPrice, stock,
//               category, tags[], images[], vendor, rating, reviewCount,
//               sku, published, createdAt, updatedAt }
//
//    Category: { id, name, slug, parentId (for subcategories) }
//
//    Seed at least 15 products across 4-5 categories.
//
// 2. GET /api/products — list with:
//    Filtering: ?category=electronics ?vendor=Apple ?minPrice=100 ?maxPrice=1000
//               ?inStock=true ?published=true ?tag=sale
//    Searching: ?q=laptop (search name + description, case-insensitive)
//    Sorting:   ?sort=price_asc ?sort=price_desc ?sort=rating_desc ?sort=newest
//    Pagination: ?page=1&limit=12 (default limit: 12, max: 100)
//
//    Response shape:
//    {
//      data: [...products],
//      meta: {
//        page: 1, limit: 12, total: 45, pages: 4,
//        filters: { category: 'electronics', minPrice: 100 },  ← echo back active filters
//        sort: 'price_asc'
//      }
//    }
//
// 3. GET /api/products/:id — single product
//    Include: full product data + related products (same category, max 4, excluding self)
//    Response: { ...product, related: [...] }
//
// 4. POST /api/products — create product
//    Full validation — all required fields, types, ranges
//    price must be > 0, stock must be >= 0, rating must be 0-5
//
// 5. PATCH /api/products/:id — partial update
//    Only update fields present in body
//    Auto-update updatedAt
//
// 6. DELETE /api/products/:id — soft delete (set published: false, don't remove from array)
//    Return 204
//
// 7. GET /api/categories — list all categories
//    Build a tree structure for categories with parentId:
//    [
//      { id: 1, name: "Electronics", slug: "electronics", children: [
//        { id: 3, name: "Laptops", slug: "laptops", children: [] }
//      ]}
//    ]
//
// 8. GET /api/products/stats — aggregate stats:
//    {
//      totalProducts: N,
//      totalPublished: N,
//      outOfStock: N,
//      avgPrice: N,
//      priceRange: { min: N, max: N },
//      byCategory: { electronics: 5, furniture: 3, ... }
//    }
//
// When you're done, ask yourself:
// - How does your filtering + sorting + pagination compose? Are there edge cases?
// - What SQL query would this generate if you were using a real database?
// - The stats endpoint recalculates every time. How would you cache it?
// - What would you add to make this API usable for a real mobile app?

const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

// your code here

app.listen(PORT, () => console.log(`Product API running on :${PORT}`))
