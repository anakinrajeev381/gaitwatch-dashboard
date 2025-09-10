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
  const getEventIcon = (type: string) => {
    switch (type) {
      case 'recognition':
        return <User size={16} className="text-status-online" />;
      case 'alert':
        return <AlertCircle size={16} className="text-status-warning" />;
      case 'entry':
        return <User size={16} className="text-primary" />;
      case 'exit':
        return <User size={16} className="text-muted-foreground" />;
      default:
        return <Clock size={16} className="text-muted-foreground" />;
    }
  };

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
      "w-80 bg-card border-l border-border flex flex-col",
      className
    )}>
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold text-foreground">Feed</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Today</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Real-time gait recognition events
        </p>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6 space-y-4">
          {events.map((event, index) => (
            <div key={event.id} className={cn(
              "flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/30 transition-colors cursor-pointer"
            )}>
              {/* Thumbnail or Icon */}
              <div className="flex-shrink-0">
                {event.thumbnail ? (
                  <img 
                    src={event.thumbnail} 
                    alt="Event thumbnail"
                    className="w-10 h-10 rounded-md object-cover bg-muted"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-md bg-muted/50 flex items-center justify-center">
                    {getEventIcon(event.type)}
                  </div>
                )}
              </div>

              {/* Event Details */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <h3 className={cn(
                    "font-medium text-sm text-foreground truncate",
                    event.type === 'alert' && "text-status-warning"
                  )}>
                    {getEventLabel(event)}
                  </h3>
                  
                  {event.confidence && (
                    <span className={cn(
                      "text-xs px-2 py-1 rounded-full",
                      event.confidence >= 90 
                        ? "bg-status-online/20 text-status-online"
                        : event.confidence >= 70
                        ? "bg-status-warning/20 text-status-warning"
                        : "bg-status-offline/20 text-status-offline"
                    )}>
                      {event.confidence}%
                    </span>
                  )}
                </div>

                <div className="flex items-center mt-1 text-xs text-muted-foreground space-x-3">
                  <div className="flex items-center space-x-1">
                    <MapPin size={12} />
                    <span>{event.location}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{event.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-border">
        <button className="w-full text-sm text-primary hover:text-primary-hover font-medium">
          View All Events
        </button>
      </div>
    </aside>
  );
};