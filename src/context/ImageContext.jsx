import { createContext, useContext, useState } from 'react'
import initialImages from '../data/images'

const ImageContext = createContext()

export function ImageProvider({ children }) {
  const [images, setImages] = useState(initialImages)
  const [search, setSearch] = useState('')
  const [selectedImage, setSelectedImage] = useState(null)

  // Mark an image as "opened" when its card is clicked
  function openImage(image) {
    setImages(prev =>
      prev.map(img =>
        img.id === image.id
          ? { ...img, lastOpenedAt: new Date().toISOString() }
          : img
      )
    )
    setSelectedImage(image)
  }

  function closePreview() {
    setSelectedImage(null)
  }

  // Derived: filtered list based on search (single source of truth)
  const filteredImages = images.filter(img =>
    img.name.toLowerCase().includes(search.toLowerCase())
  )

  // Derived: recently viewed, sorted by lastOpenedAt, not a separate array
  const recentlyViewed = [...filteredImages]
    .sort((a, b) => new Date(b.lastOpenedAt) - new Date(a.lastOpenedAt))
    .slice(0, 6)

  const value = {
    images: filteredImages,
    allImagesCount: images.length,
    recentlyViewed,
    search,
    setSearch,
    selectedImage,
    openImage,
    closePreview,
  }

  return (
    <ImageContext.Provider value={value}>
      {children}
    </ImageContext.Provider>
  )
}

export function useImages() {
  return useContext(ImageContext)
}