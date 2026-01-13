import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Globe, Code, Lightbulb, Gamepad2, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const categoryConfig = {
  how_coding_works: {
    icon: Lightbulb,
    label: 'How Coding Works',
    gradient: 'from-amber-500 to-orange-500',
  },
  code_walkthrough: {
    icon: Code,
    label: 'Code Walkthrough',
    gradient: 'from-indigo-500 to-blue-500',
  },
  logic_game: {
    icon: Gamepad2,
    label: 'Logic Game',
    gradient: 'from-green-500 to-emerald-500',
  },
  stem_explainer: {
    icon: BookOpen,
    label: 'STEM Explainer',
    gradient: 'from-purple-500 to-pink-500',
  },
};

export default function VirtualActivityDetail({ activity, onClose }) {
  if (!activity) return null;

  const config = categoryConfig[activity.category] || categoryConfig.stem_explainer;
  const Icon = config.icon;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="bg-white rounded-3xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${config.gradient} p-6 text-white relative`}>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="flex items-center gap-3 mb-3">
              <Icon className="w-8 h-8" />
              <Badge className="bg-white/20 text-white">
                {config.label}
              </Badge>
            </div>
            <h2 
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {activity.title}
            </h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Description */}
            <div className="bg-gray-50 rounded-2xl p-5">
              <p className="text-gray-700 text-lg leading-relaxed">
                {activity.description}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-[#055b8e] prose-a:text-[#ed7219] prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded">
              <ReactMarkdown>
                {activity.content}
              </ReactMarkdown>
            </div>

            {/* Real World Connection */}
            {activity.real_world_connection && (
              <div className="bg-[#055b8e]/5 border border-[#055b8e]/20 rounded-2xl p-5">
                <h3 className="font-bold text-[#055b8e] text-lg mb-2 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <Globe className="w-5 h-5 text-[#ed7219]" />
                  Real-World Connection
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {activity.real_world_connection}
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-100 p-6">
            <Button
              onClick={onClose}
              className="w-full bg-[#055b8e] hover:bg-[#044a73] text-white py-6 rounded-xl font-semibold text-lg"
            >
              Back to Activities
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}