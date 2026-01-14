import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Beaker, ListChecks, BookOpen, Package } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const topicLabels = {
  physics: 'Physics',
  biology: 'Biology',
  chemistry: 'Chemistry',
  engineering: 'Engineering',
};

const topicColors = {
  physics: 'bg-blue-500',
  biology: 'bg-green-500',
  chemistry: 'bg-purple-500',
  engineering: 'bg-orange-500',
};

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Medium': 'bg-yellow-100 text-yellow-800',
  'Advanced': 'bg-red-100 text-red-800',
};

export default function ExperimentDetail({ experiment, onClose }) {
  if (!experiment) return null;

  const materials = experiment.materials?.split('\n').filter(m => m.trim()) || [];
  const instructions = experiment.instructions?.split('\n').filter(i => i.trim()) || [];

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
          <div className="bg-gradient-to-r from-[#055b8e] to-[#044a73] p-6 text-white relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="flex items-center gap-3 mb-3">
              <Beaker className="w-8 h-8" />
              <Badge className={`${topicColors[experiment.topic]} text-white`}>
                {topicLabels[experiment.topic] || experiment.topic}
              </Badge>
              <Badge className={difficultyColors[experiment.difficulty] || 'bg-gray-100 text-gray-800'}>
                {experiment.difficulty}
              </Badge>
            </div>
            <h2 
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {experiment.title}
            </h2>
          </div>

          <div className="p-6 space-y-8">
            {/* Materials Section */}
            <div className="bg-[#ed7219]/5 border-2 border-[#ed7219]/20 rounded-2xl p-6">
              <h3 className="font-bold text-[#ed7219] text-xl mb-4 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <Package className="w-6 h-6" />
                Materials Needed
              </h3>
              <ul className="space-y-2">
                {materials.map((material, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#ed7219] mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-lg">{material}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions Section */}
            <div className="bg-[#055b8e]/5 border-2 border-[#055b8e]/20 rounded-2xl p-6">
              <h3 className="font-bold text-[#055b8e] text-xl mb-4 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <ListChecks className="w-6 h-6" />
                Step-by-Step Instructions
              </h3>
              <ol className="space-y-4">
                {instructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-[#055b8e] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-lg leading-relaxed pt-1">{instruction.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* What You Learn Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6">
              <h3 className="font-bold text-green-700 text-xl mb-4 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <BookOpen className="w-6 h-6" />
                What We Learned
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {experiment.what_you_learn}
              </p>
            </div>
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