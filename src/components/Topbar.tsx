import React from 'react';
import { Search, Filter, ToggleLeft, ToggleRight, Bell, ChevronDown, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopbarProps {
  isLiveMode?: boolean;
  onToggleLiveMode?: (isLive: boolean) => void;
  className?: string;
}

export const Topbar: React.FC<TopbarProps> = ({
  isLiveMode = true,
  onToggleLiveMode,
  className
}) => {
  return (
    <header className={cn(
      "bg-card border-b border-border px-6 py-4",
      "flex items-center justify-between",
      className
    )}>
      {/* Left section */}
      <div className="flex items-center space-x-6">
        <h1 className="text-2xl font-bold text-foreground">
          Gait Recognition Dashboard
        </h1>
      </div>

      {/* Center section */}
      <div className="flex items-center space-x-4 flex-1 max-w-2xl mx-8">
        {/* Search bar */}
        <div className="relative flex-1">
          <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search employees, events, or camera feeds..."
            className={cn(
              "w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
              "text-sm text-foreground placeholder-muted-foreground"
            )}
          />
        </div>

        {/* Filters */}
        <button className={cn(
          "flex items-center space-x-2 px-3 py-2 bg-background border border-border rounded-lg",
          "hover:bg-muted/50 transition-colors text-sm"
        )}>
          <Filter size={16} />
          <span>Filters</span>
          <ChevronDown size={14} />
        </button>

        {/* Live/Archive Toggle */}
        <div className="flex items-center space-x-3 px-3 py-2 bg-background border border-border rounded-lg">
          <span className={cn(
            "text-sm",
            !isLiveMode ? "text-foreground font-medium" : "text-muted-foreground"
          )}>
            Archive
          </span>
          
          <button
            onClick={() => onToggleLiveMode?.(!isLiveMode)}
            className="flex items-center"
          >
            {isLiveMode ? (
              <ToggleRight size={20} className="text-primary" />
            ) : (
              <ToggleLeft size={20} className="text-muted" />
            )}
          </button>
          
          <span className={cn(
            "text-sm",
            isLiveMode ? "text-foreground font-medium" : "text-muted-foreground"
          )}>
            Live
          </span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <button className={cn(
          "relative p-2 hover:bg-muted/50 rounded-lg transition-colors"
        )}>
          <Bell size={20} className="text-foreground" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">John Smith</p>
            <p className="text-xs text-muted-foreground">Security Admin</p>
          </div>
          
          <button className={cn(
            "flex items-center space-x-2 p-2 hover:bg-muted/50 rounded-lg transition-colors"
          )}>
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <User size={16} className="text-primary-foreground" />
            </div>
            <ChevronDown size={14} className="text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};