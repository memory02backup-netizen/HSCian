import { BookOpen, FileText, Link as LinkIcon, GraduationCap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const links = [
    { to: '/', icon: BookOpen, label: 'All Courses' },
    { to: '#materials', icon: FileText, label: 'Materials' },
    { to: '#pdfs', icon: LinkIcon, label: 'PDFs' },
    { to: '#resources', icon: GraduationCap, label: 'Resources' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-52 fixed left-0 top-14 bottom-0 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <div className="p-3 space-y-1">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className={`sidebar-link ${location.pathname === link.to ? 'sidebar-link-active' : ''}`}
          >
            <link.icon size={20} />
            <span className="text-sm">{link.label}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
