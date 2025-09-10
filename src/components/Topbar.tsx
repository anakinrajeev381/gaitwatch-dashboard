import React, { useState } from 'react';
import { Filter, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TopbarProps {
  isLiveMode?: boolean;
  onToggleLiveMode?: (isLive: boolean) => void;
  className?: string;
}

export const Topbar: React.FC<TopbarProps> = ({
  isLiveMode,
  onToggleLiveMode,
  className
}) => {
  const locations = ['All', 'Basement', 'Backyard', 'Front Door', "Kid's Room", 'Kitchen'];
  const [activeLocation, setActiveLocation] = useState('All');

  return (
    <header className={cn(
      "bg-background px-6 py-4 flex items-center justify-between",
      className
    )}>
      {/* Left section - Logo and Navigation Tabs */}
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-foreground rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-background rounded-sm" />
          </div>
          <span className="text-xl font-bold text-foreground">evizz</span>
        </div>
        
        <nav className="flex items-center space-x-1">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setActiveLocation(location)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                activeLocation === location
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {location}
            </button>
          ))}
        </nav>
      </div>

      {/* Right section - Feed controls */}
      <div className="flex items-center space-x-4">
        <span className="text-lg font-semibold text-foreground">Feed</span>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Filter size={20} />
        </button>
        <button className="p-2 text-muted-foreground hover:text-foreground transition-colors">
          <Calendar size={20} />
        </button>
      </div>
    </header>
  );
};