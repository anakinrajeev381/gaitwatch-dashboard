import React from 'react';
import { Wifi, WifiOff, Circle, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CameraCardProps {
  id: string;
  name: string;
  image: string;
  timestamp: string;
  isOnline: boolean;
  isRecording: boolean;
  confidenceScore?: number;
  className?: string;
}

export const CameraCard: React.FC<CameraCardProps> = ({
  id,
  name,
  image,
  timestamp,
  isOnline,
  isRecording,
  confidenceScore,
  className
}) => {
  return (
    <div className={cn(
      "relative bg-card rounded-2xl overflow-hidden shadow-card",
      "hover:shadow-float transition-all duration-200 group border border-border",
      className
    )}>
      {/* Video Feed */}
      <div className="relative aspect-video bg-muted">
        <img 
          src={image} 
          alt={`${name} feed`}
          className="w-full h-full object-cover"
        />
        
        {/* Status indicators overlay */}
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          {isOnline && (
            <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
              <Wifi size={12} className="text-foreground" />
              <span className="text-xs font-medium text-foreground">HD</span>
            </div>
          )}
        </div>

        {/* Confidence score */}
        {confidenceScore && (
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <span className="text-xs font-semibold text-foreground">{confidenceScore}</span>
          </div>
        )}

        {/* Controls overlay */}
        <div className="absolute top-4 right-16 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <MoreVertical size={14} className="text-foreground" />
          </button>
        </div>

        {/* Camera info overlay */}
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-sm font-semibold drop-shadow-lg">{name}</h3>
          <p className="text-xs opacity-90 drop-shadow-lg">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};