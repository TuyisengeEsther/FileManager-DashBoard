import { MdAdd, MdSearch } from 'react-icons/md'
import ImageCard from '../components/ImageCard'
import ImagePreviewModal from '../components/ImagePreviewModal'
import { useImages } from '../context/ImageContext'

function Images() {
  const { images, recentlyViewed, search, setSearch } = useImages()

  return (
    <div>

      {/* Page header */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h1 className="text-xl font-bold text-gray-800">Images</h1>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-56">
            <MdSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search by file name..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 pr-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 w-full"
            />
          </div>

          <button className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap">
            <MdAdd size={18} />
            Add Image
          </button>
        </div>
      </div>

      {/* Recently Viewed — derived from state */}
      {recentlyViewed.length > 0 && (
        <div className="mb-8">
          <h2 className="text-base font-semibold text-gray-700 mb-3">
            Recently Viewed
          </h2>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {recentlyViewed.map(image => (
              <div key={image.id} className="w-56 flex-shrink-0">
                <ImageCard image={image} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Images */}
      <div>
        <h2 className="text-base font-semibold text-gray-700 mb-3">
          All Images
        </h2>

        {images.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg border border-dashed border-gray-200">
            <p className="text-gray-400 text-sm">
              {search ? `No images match "${search}"` : 'No images yet'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {images.map(image => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>

      <ImagePreviewModal />
    </div>
  )
}

export default Images