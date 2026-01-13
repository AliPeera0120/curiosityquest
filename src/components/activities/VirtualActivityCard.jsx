import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800 border-green-300',
  'Intermediate': 'bg-blue-100 text-blue-800 border-blue-300',
  'Advanced': 'bg-purple-100 text-purple-800 border-purple-300',
  'Project': 'bg-orange-100 text-orange-800 border-orange-300',
};

export default function VirtualActivityCard({ activity, onClick, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#055b8e] transition-all cursor-pointer group"
      onClick={onClick}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#055b8e]/5 to-[#ed7219]/5 p-4 flex items-center justify-between gap-2">
        <Badge className="bg-[#055b8e] text-white">
          {activity.language}
        </Badge>
        <Badge variant="outline" className={difficultyColors[activity.difficulty] || 'bg-gray-100 text-gray-800'}>
          {activity.difficulty}
        </Badge>
      </div>
      
      <div className="p-5">
        <h3 
          className="font-bold text-[#055b8e] text-xl mb-2 group-hover:text-[#ed7219] transition-colors"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          {activity.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {activity.description}
        </p>

        <div className="flex items-center justify-end">
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#ed7219] group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
}