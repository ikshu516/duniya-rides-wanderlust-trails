# Gallery Images

To add images to the gallery:

1. Place your high-quality images in this directory
2. Recommended image size: Minimum 1200x800px
3. Recommended format: WebP or JPG with 80% quality
4. Naming convention: `location-description.jpg` (e.g., `goa-beach.jpg`)
5. Update the `galleryImages` array in `src/pages/Gallery.tsx` with the new image details

Example image object:
```typescript
{
  id: 1,
  src: "/images/gallery/your-image.jpg",
  alt: "Location, Description",
  category: "Category"
}
```

Categories: Beaches, Mountains, Heritage, Nature, Adventure, Spiritual
