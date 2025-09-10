import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';
import { CameraCard } from './CameraCard';
import { FeedTimeline } from './FeedTimeline';
import { cn } from '@/lib/utils';

// Import camera feed images
import cameraFeed1 from '@/assets/camera-feed-1.jpg';
import cameraFeed2 from '@/assets/camera-feed-2.jpg';
import cameraFeed3 from '@/assets/camera-feed-3.jpg';
import cameraFeed4 from '@/assets/camera-feed-4.jpg';

const cameraFeeds = [
  {
    id: 'CAM-001',
    name: 'Camera 1',
    image: cameraFeed1,
    timestamp: '15-05-2024  12:19:49 PM',
    isOnline: true,
    isRecording: true,
    confidenceScore: 86
  },
  {
    id: 'CAM-002', 
    name: 'Camera 2',
    image: cameraFeed2,
    timestamp: '15-05-2024  12:19:49 PM',
    isOnline: true,
    isRecording: true,
    confidenceScore: 56
  },
  {
    id: 'CAM-003',
    name: 'Camera 3',
    image: cameraFeed3,
    timestamp: '15-05-2024  12:19:49 PM',
    isOnline: true,
    isRecording: false,
    confidenceScore: 32
  },
  {
    id: 'CAM-004',
    name: 'Camera 4',
    image: cameraFeed4,
    timestamp: '15-05-2024  12:19:49 PM',
    isOnline: false,
    isRecording: false,
    confidenceScore: 18
  }
];

export const Dashboard: React.FC = () => {
  const [isLiveMode, setIsLiveMode] = useState(true);

  return (
    <div className="min-h-screen bg-background w-full flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-16 flex flex-col">
        {/* Topbar */}
        <Topbar 
          isLiveMode={isLiveMode}
          onToggleLiveMode={setIsLiveMode}
        />

        {/* Main Dashboard Content */}
        <div className="flex-1 flex">
          {/* Camera Grid */}
          <main className="flex-1 p-6">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-1">
                    {isLiveMode ? 'Live Camera Feeds' : 'Camera Archive'}
                  </h2>
                  <p className="text-muted-foreground">
                    {isLiveMode 
                      ? 'Real-time monitoring with gait recognition' 
                      : 'Historical camera recordings and events'
                    }
                  </p>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  <span className="inline-flex items-center space-x-1">
                    <div className="w-2 h-2 bg-status-online rounded-full" />
                    <span>3 cameras online</span>
                  </span>
                  <span className="ml-4 inline-flex items-center space-x-1">
                    <div className="w-2 h-2 bg-status-offline rounded-full" />
                    <span>1 camera offline</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Camera Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cameraFeeds.map((camera) => (
                <CameraCard
                  key={camera.id}
                  {...camera}
                />
              ))}
            </div>

            {/* Additional Status Section */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Today's Stats</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Recognized Employees</span>
                    <span className="font-medium text-foreground">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Unknown Visitors</span>
                    <span className="font-medium text-status-warning">3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Events</span>
                    <span className="font-medium text-foreground">47</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Recognition Accuracy</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Confidence</span>
                    <span className="font-medium text-status-online">89.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">False Positives</span>
                    <span className="font-medium text-status-warning">2.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">System Uptime</span>
                    <span className="font-medium text-status-online">99.8%</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm bg-muted/30 hover:bg-muted/50 rounded-md transition-colors">
                    Export Today's Report
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-muted/30 hover:bg-muted/50 rounded-md transition-colors">
                    Add New Employee
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-muted/30 hover:bg-muted/50 rounded-md transition-colors">
                    System Settings
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Feed Timeline */}
          <FeedTimeline />
        </div>
      </div>
    </div>
  );
};