import React from 'react';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Code, Lightbulb, Gamepad2, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const categoryConfig = {
  how_coding_works: {
    icon: Lightbulb,
    label: 'How Coding Works',
    color: 'bg-amber-100 text-amber-700',
    gradient: 'from-amber-500 to-orange-500',
  },
  code_walkthrough: {
    icon: Code,
    label: 'Code Walkthrough',
    color: 'bg-indigo-100 text-indigo-700',
    gradient: 'from-indigo-500 to-blue-500',
  },
  logic_game: {
    icon: Gamepad2,
    label: 'Logic Game',
    color: 'bg-green-100 text-green-700',
    gradient: 'from-green-500 to-emerald-500',
  },
  stem_explainer: {
    icon: BookOpen,
    label: 'STEM Explainer',
    color: 'bg-purple-100 text-purple-700',
    gradient: 'from-purple-500 to-pink-500',
  },
};

export default function VirtualActivityCard({ activity, onClick, index = 0 }) {
  const config = categoryConfig[activity.category] || categoryConfig.stem_explainer;
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
      onClick={onClick}
    >
      {/* Icon Header */}
      <div className={`bg-gradient-to-r ${config.gradient} p-4 flex items-center justify-center`}>
        <Icon className="w-10 h-10 text-white" />
      </div>
      
      <div className="p-5">
        <Badge className={`${config.color} font-medium mb-3`}>
          {config.label}
        </Badge>

        <h3 
          className="font-bold text-[#055b8e] text-xl mb-2 group-hover:text-[#ed7219] transition-colors"
          style={{ fontFamily: 'Nunito, sans-serif' }}
        >
          {activity.title}
        </h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {activity.description}
        </p>

        <div className="flex items-center justify-between">
          {activity.difficulty && (
            <Badge variant="outline" className="text-gray-500">
              {activity.difficulty.charAt(0).toUpperCase() + activity.difficulty.slice(1)}
            </Badge>
          )}
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#ed7219] group-hover:translate-x-1 transition-all ml-auto" />
        </div>
      </div>
    </motion.div>
  );
}