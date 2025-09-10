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
          <main className="flex-1 p-8">
            {/* Location Section Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Basement</h2>
            </div>

            {/* Camera Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {cameraFeeds.map((camera) => (
                <CameraCard
                  key={camera.id}
                  {...camera}
                />
              ))}
            </div>

            {/* Next Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Backyard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cameraFeeds.map((camera) => (
                  <CameraCard
                    key={`backyard-${camera.id}`}
                    {...camera}
                    name={camera.name.replace('Camera', 'Camera')}
                  />
                ))}
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