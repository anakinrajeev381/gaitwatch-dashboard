import React from 'react';
import { Clock, MapPin, User, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeedEvent {
  id: string;
  type: 'recognition' | 'alert' | 'entry' | 'exit';
  employeeName?: string;
  location: string;
  timestamp: string;
  confidence?: number;
  thumbnail?: string;
}

interface FeedTimelineProps {
  events?: FeedEvent[];
  className?: string;
}

const defaultEvents: FeedEvent[] = [
  {
    id: '1',
    type: 'recognition',
    employeeName: 'Sarah Johnson',
    location: 'Front Door 2',
    timestamp: '12:19:49 PM',
    confidence: 96,
    thumbnail: '/lovable-uploads/867ff72e-9d91-4fe8-95ea-fef0eacc17f4.png'
  },
  {
    id: '2',
    type: 'entry',
    employeeName: 'Mike Chen',
    location: 'Front Door 2',
    timestamp: '12:01:03 PM',
    confidence: 92
  },
  {
    id: '3',
    type: 'recognition',
    employeeName: 'Alex Rivera',
    location: 'Front Door 1',
    timestamp: '11:28:15 AM',
    confidence: 89
  },
  {
    id: '4',
    type: 'alert',
    location: 'Front Door 1',
    timestamp: '11:04:20 AM',
    confidence: 45
  },
  {
    id: '5',
    type: 'entry',
    employeeName: 'Lisa Park',
    location: 'Front Door 2',
    timestamp: '10:52:33 AM',
    confidence: 94
  }
];

export const FeedTimeline: React.FC<FeedTimelineProps> = ({ 
  events = defaultEvents, 
  className 
}) => {
  const getEventLabel = (event: FeedEvent) => {
    switch (event.type) {
      case 'recognition':
        return event.employeeName || 'Unknown Person';
      case 'alert':
        return 'Unrecognized Person';
      case 'entry':
        return `${event.employeeName} - Entry`;
      case 'exit':
        return `${event.employeeName} - Exit`;
      default:
        return 'System Event';
    }
  };

  return (
    <aside className={cn(
      "w-80 bg-background flex flex-col",
      className
    )}>
      {/* Header with date picker */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-muted-foreground">Thu</span>
            <span className="text-sm text-muted-foreground">Fri</span>
            <span className="text-sm text-muted-foreground">Sat</span>
            <span className="text-sm text-muted-foreground">Sun</span>
            <span className="text-sm text-muted-foreground">Mon</span>
            <span className="text-sm text-muted-foreground">Tue</span>
            <span className="text-sm font-semibold text-foreground bg-foreground text-background rounded-md px-2 py-1">Wed</span>
          </div>
        </div>
        
        <div className="flex flex-col space-y-1 mb-6">
          <span className="text-2xl font-bold text-muted-foreground">09</span>
          <span className="text-2xl font-bold text-muted-foreground">10</span>
          <span className="text-2xl font-bold text-muted-foreground">11</span>
          <span className="text-2xl font-bold text-muted-foreground">12</span>
          <span className="text-2xl font-bold text-muted-foreground">13</span>
          <span className="text-2xl font-bold text-muted-foreground">14</span>
          <span className="text-2xl font-bold text-foreground bg-foreground text-background rounded-lg px-3 py-2">15</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto px-6">
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={event.id} className="flex items-start space-x-3">
              {/* Thumbnail */}
              <div className="flex-shrink-0">
                {event.thumbnail ? (
                  <img 
                    src={event.thumbnail} 
                    alt="Event thumbnail"
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <User size={16} className="text-muted-foreground" />
                  </div>
                )}
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm text-foreground">
                  {event.location}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {event.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};