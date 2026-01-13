import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Calendar, History, MapPin, Users, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import EventCard from '../components/events/EventCard';

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: () => base44.entities.Event.list('date'),
  });

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= today && !event.is_past;
  });

  const pastEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate < today || event.is_past;
  }).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#ed7219] to-[#d86515] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Events
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/90 max-w-2xl mx-auto"
          >
            Join us at libraries and community centers for free, hands-on STEM adventures
          </motion.p>
        </div>
      </div>

      {/* Community Focus Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#055b8e]/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#055b8e]" />
              </div>
              <div>
                <p className="font-semibold text-[#055b8e]" style={{ fontFamily: 'Nunito, sans-serif' }}>Local Venues</p>
                <p className="text-gray-600 text-sm">Libraries & community centers</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#ed7219]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#ed7219]" />
              </div>
              <div>
                <p className="font-semibold text-[#055b8e]" style={{ fontFamily: 'Nunito, sans-serif' }}>Family Friendly</p>
                <p className="text-gray-600 text-sm">Perfect for kids & parents</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-200" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#055b8e]/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-[#055b8e]" />
              </div>
              <div>
                <p className="font-semibold text-[#055b8e]" style={{ fontFamily: 'Nunito, sans-serif' }}>Always Free</p>
                <p className="text-gray-600 text-sm">Open to everyone</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 h-14 bg-white shadow-sm rounded-xl p-1 mb-8">
            <TabsTrigger 
              value="upcoming" 
              className="rounded-lg data-[state=active]:bg-[#055b8e] data-[state=active]:text-white text-lg font-medium"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger 
              value="past" 
              className="rounded-lg data-[state=active]:bg-[#055b8e] data-[state=active]:text-white text-lg font-medium"
            >
              <History className="w-5 h-5 mr-2" />
              Past Events
            </TabsTrigger>
          </TabsList>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-[#055b8e]" />
            </div>
          ) : (
            <>
              <TabsContent value="upcoming">
                {upcomingEvents.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-2xl">
                    <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-500 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      No upcoming events
                    </h3>
                    <p className="text-gray-400">
                      Check back soon for new STEM adventures!
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <EventCard key={event.id} event={event} index={index} />
                    ))}
                  </div>
                )}
              </TabsContent>

              <TabsContent value="past">
                {pastEvents.length === 0 ? (
                  <div className="text-center py-20 bg-white rounded-2xl">
                    <History className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-500 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                      No past events yet
                    </h3>
                    <p className="text-gray-400">
                      Our event history will appear here
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pastEvents.map((event, index) => (
                      <EventCard key={event.id} event={event} isPast index={index} />
                    ))}
                  </div>
                )}
              </TabsContent>
            </>
          )}
        </Tabs>
      </div>
    </div>
  );
}