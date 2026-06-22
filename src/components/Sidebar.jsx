import { NavLink } from 'react-router-dom'
import {
  MdDashboard, MdImage, MdVideoLibrary, MdDescription,
  MdFolder, MdDelete, MdLogout, MdHelpOutline
} from 'react-icons/md'

function Sidebar() {
  const fileManagerLinks = [
    { to: '/', label: 'Dashboard', icon: <MdDashboard /> }
  ]

  const pageLinks = [
    { to: '/images', label: 'Image', icon: <MdImage /> },
    { to: '/videos', label: 'Video', icon: <MdVideoLibrary /> },
    { to: '/documents', label: 'Document', icon: <MdDescription /> },
    { to: '/all-files', label: 'All Files', icon: <MdFolder /> },
    { to: '/trash', label: 'Trash', icon: <MdDelete /> },
  ]

  const otherLinks = [
    { to: '#', label: 'Help', icon: <MdHelpOutline /> },
    { to: '#', label: 'Sign Out', icon: <MdLogout /> },
  ]

  const linkBase = "flex items-center gap-3 px-4 py-2.5 rounded-md text-sm font-medium transition-colors"
  const linkInactive = "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
  const linkActive = "bg-primary/10 text-primary border-l-4 border-primary pl-3"

  function renderGroup(title, links) {
    return (
      <div className="mb-6">
        <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
          {title}
        </p>
        {links.map(link => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `${linkBase} ${isActive ? linkActive : linkInactive}`
            }
          >
            <span className="text-lg">{link.icon}</span>
            {link.label}
          </NavLink>
        ))}
      </div>
    )
  }

  return (
    <aside className="w-64 bg-white border-r border-gray-100 h-screen sticky top-0 flex flex-col">

      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <h1 className="text-xl font-bold text-primary">
          Hope<span className="text-info">UI</span>
        </h1>
      </div>

      {/* Mini profile */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
        <img
          src="https://i.pravatar.cc/40?img=12"
          alt="user"
          className="w-9 h-9 rounded-full"
        />
        <div>
          <p className="text-sm font-semibold text-gray-800">Esther.</p>
          <p className="text-xs text-gray-400">Admin</p>
        </div>
      </div>

      {/* Nav groups */}
      <nav className="flex-1 overflow-y-auto py-5">
        {renderGroup('File Manager', fileManagerLinks)}
        {renderGroup('Pages', pageLinks)}
        {renderGroup('Other', otherLinks)}
      </nav>
    </aside>
  )
}

export default Sidebar