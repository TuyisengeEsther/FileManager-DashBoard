import { MdClose } from 'react-icons/md'
import { timeAgo, formatDate } from '../utils/formatTime'
import { useImages } from '../context/ImageContext'

function ImagePreviewModal() {
  const { selectedImage, closePreview } = useImages()

  if (!selectedImage) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
      onClick={closePreview}
    >
      <div
        className="bg-white rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 truncate">
            {selectedImage.name}
          </h3>
          <button
            onClick={closePreview}
            className="text-gray-400 hover:text-gray-700"
          >
            <MdClose size={22} />
          </button>
        </div>

        <div className="bg-gray-100">
          <img
            src={selectedImage.url}
            alt={selectedImage.name}
            className="w-full max-h-[60vh] object-contain"
          />
        </div>

        <div className="px-5 py-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Created</p>
            <p className="text-gray-700 font-medium">{formatDate(selectedImage.createdAt)}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase tracking-wide mb-1">Last Opened</p>
            <p className="text-gray-700 font-medium">{timeAgo(selectedImage.lastOpenedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagePreviewModal