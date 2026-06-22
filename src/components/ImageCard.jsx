import { timeAgo, formatDate } from '../utils/formatTime'
import { useImages } from '../context/ImageContext'

function ImageCard({ image }) {
  const { openImage } = useImages()

  return (
    <div
      onClick={() => openImage(image)}
      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={image.url}
          alt={image.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-3">
        <p className="text-sm font-medium text-gray-700 truncate">
          {image.name}
        </p>

        <div className="flex items-center justify-between mt-1">
          <span className="text-xs text-gray-400">
            {formatDate(image.createdAt)}
          </span>

          <span className="text-xs text-info">
            opened {timeAgo(image.lastOpenedAt)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ImageCard