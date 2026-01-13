import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const topicColors = {
  physics: { bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-200' },
  biology: { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-200' },
  chemistry: { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-200' },
  engineering: { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-200' },
  computer_science: { bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-200' },
};

const topicLabels = {
  physics: 'Physics',
  biology: 'Biology',
  chemistry: 'Chemistry',
  engineering: 'Engineering',
  computer_science: 'Computer Science',
};

const difficultyColors = {
  easy: 'bg-green-100 text-green-700',
  medium: 'bg-yellow-100 text-yellow-700',
  challenging: 'bg-red-100 text-red-700',
};

export default function ExperimentCard({ experiment, onClick, index = 0 }) {
  const colors = topicColors[experiment.topic] || topicColors.physics;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`bg-white rounded-2xl border-2 ${colors.border} overflow-hidden hover:shadow-lg transition-all cursor-pointer group`}
      onClick={onClick}
    >
      {experiment.image_url && (
        <div className="h-40 overflow-hidden">
          <img 
            src={experiment.image_url} 
            alt={experiment.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-5">
        <div className="flex flex-wrap gap-2 mb-3">
          <Badge className={`${colors.bg} ${colors.text} font-medium`}>
            {topicLabels[experiment.topic]}
          </Badge>
          {experiment.difficulty && (
            <Badge className={difficultyColors[experiment.difficulty]}>
              {experiment.difficulty.charAt(0).toUpperCase() + experiment.difficulty.slice(1)}
            </Badge>
          )}
        </div>

        <h3 
          className="font-bold text-[#055b8e] text-xl mb-2 group-hover:text-[#ed7219] transition-colors"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          {experiment.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {experiment.what_you_learn}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {experiment.age_range && (
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Ages {experiment.age_range}
              </span>
            )}
            {experiment.safety_notes && (
              <span className="flex items-center gap-1 text-[#ed7219]">
                <AlertTriangle className="w-4 h-4" />
                Safety tips
              </span>
            )}
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#ed7219] group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </motion.div>
  );
}