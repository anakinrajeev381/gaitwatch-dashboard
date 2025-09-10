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
      "relative bg-card rounded-lg overflow-hidden shadow-card",
      "hover:shadow-float transition-all duration-300 group",
      "border border-border/50",
      className
    )}>
      {/* Video Feed */}
      <div className="relative aspect-video bg-muted">
        <img 
          src={image} 
          alt={`${name} feed`}
          className="w-full h-full object-cover"
        />
        
        {/* Live indicator */}
        {isOnline && (
          <div className="absolute top-3 left-3 flex items-center space-x-1 bg-black/70 px-2 py-1 rounded-md">
            <Circle 
              size={8} 
              className={cn(
                "fill-current",
                isRecording ? "text-red-500 animate-pulse" : "text-status-online"
              )} 
            />
            <span className="text-white text-xs font-medium">LIVE</span>
          </div>
        )}

        {/* Controls overlay */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="p-1.5 bg-black/70 rounded-md hover:bg-black/80 transition-colors">
            <MoreVertical size={16} className="text-white" />
          </button>
        </div>

        {/* Confidence score */}
        {confidenceScore && (
          <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded-md">
            <span className="text-white text-xs font-medium">{confidenceScore}%</span>
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-card-foreground">{name}</h3>
          <div className="flex items-center space-x-2">
            {isOnline ? (
              <Wifi size={16} className="text-status-online" />
            ) : (
              <WifiOff size={16} className="text-status-offline" />
            )}
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{id}</span>
          <span className="text-muted-foreground">{timestamp}</span>
        </div>

        {/* Status indicators */}
        <div className="flex items-center space-x-3 mt-3">
          <div className="flex items-center space-x-1">
            <div className={cn(
              "w-2 h-2 rounded-full",
              isOnline ? "bg-status-online" : "bg-status-offline"
            )} />
            <span className="text-xs text-muted-foreground">
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
          
          <div className="flex items-center space-x-1">
            <div className={cn(
              "w-2 h-2 rounded-full",
              isRecording ? "bg-red-500" : "bg-muted"
            )} />
            <span className="text-xs text-muted-foreground">
              {isRecording ? "Recording" : "Standby"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};