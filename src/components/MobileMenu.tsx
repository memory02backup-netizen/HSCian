import { X, BookOpen, FileText, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <span className="text-xl font-bold">Menu</span>
          <button onClick={onClose} className="nav-button" aria-label="Close menu">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            <Link
              to="/"
              onClick={onClose}
              className="sidebar-link"
            >
              <BookOpen size={20} />
              <span>All Courses</span>
            </Link>

            <a
              href="#"
              className="sidebar-link"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <FileText size={20} />
              <span>Study Materials</span>
            </a>

            <a
              href="#"
              className="sidebar-link"
              onClick={(e) => {
                e.preventDefault();
                onClose();
              }}
            >
              <LinkIcon size={20} />
              <span>PDF Downloads</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
