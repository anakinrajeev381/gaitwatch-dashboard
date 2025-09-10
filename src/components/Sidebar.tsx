import React from 'react';
import { 
  Home, 
  Video, 
  Users, 
  Calendar, 
  AlertTriangle, 
  Settings, 
  User 
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

const navigationItems = [
  { icon: Home, label: 'Home', href: '/', active: true },
  { icon: Video, label: 'Live Feeds', href: '/feeds', active: false },
  { icon: Users, label: 'Employees', href: '/employees', active: false },
  { icon: Calendar, label: 'Attendance', href: '/attendance', active: false },
  { icon: AlertTriangle, label: 'Alerts', href: '/alerts', active: false },
  { icon: Settings, label: 'Settings', href: '/settings', active: false },
  { icon: User, label: 'Profile', href: '/profile', active: false },
];

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={cn(
      "fixed left-0 top-0 z-50 h-screen w-16 bg-sidebar-background",
      "flex flex-col items-center py-4 space-y-4",
      className
    )}>
      {/* Logo */}
      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-sidebar-foreground">
        <div className="w-5 h-5 bg-sidebar-background rounded-sm" />
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-2 w-full px-2">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.href}
              className={cn(
                "flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200",
                "group relative",
                item.active 
                  ? "bg-sidebar-foreground text-sidebar-background" 
                  : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-foreground/10"
              )}
            >
              <Icon size={18} />
              
              {/* Tooltip */}
              <span className={cn(
                "absolute left-16 ml-2 px-2 py-1 bg-card text-card-foreground text-sm rounded-md shadow-lg",
                "opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                "whitespace-nowrap pointer-events-none z-50"
              )}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* Bottom spacer */}
      <div className="flex-1" />
    </aside>
  );
};