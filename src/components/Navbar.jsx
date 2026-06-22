import { useState } from 'react'
import { MdShoppingCart, MdNotifications, MdKeyboardArrowDown, MdMenu } from 'react-icons/md'

function Navbar({ onMenuClick }) {
  const [cartOpen, setCartOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between">

      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-primary"
        >
          <MdMenu size={24} />
        </button>
        <h2 className="text-base font-semibold text-gray-700">
          File Manager
        </h2>
      </div>

      <div className="flex items-center gap-5 relative">

        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-primary">
          <MdNotifications size={22} />
          <span className="absolute -top-1 -right-1 bg-info text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Cart */}
        <div className="relative">
          <button
            onClick={() => { setCartOpen(!cartOpen); setProfileOpen(false) }}
            className="relative text-gray-500 hover:text-primary"
          >
            <MdShoppingCart size={22} />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>

          {cartOpen && (
            <div className="absolute right-0 mt-3 w-56 bg-white shadow-lg rounded-lg border border-gray-100 p-3 text-sm text-gray-600">
              <p className="font-semibold text-gray-700 mb-2">Cart</p>
              <p className="text-gray-400 text-xs">No items in cart</p>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => { setProfileOpen(!profileOpen); setCartOpen(false) }}
            className="flex items-center gap-2"
          >
            <img
              src="https://i.pravatar.cc/32?img=12"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
            <MdKeyboardArrowDown className="text-gray-500" />
          </button>

          {profileOpen && (
            <div className="absolute right-0 mt-3 w-44 bg-white shadow-lg rounded-lg border border-gray-100 py-2 text-sm">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600">
                Profile
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600">
                Privacy Settings
              </button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-50 text-gray-600">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar