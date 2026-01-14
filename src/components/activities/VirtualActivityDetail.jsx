import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

const difficultyColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-blue-100 text-blue-800',
  'Advanced': 'bg-purple-100 text-purple-800',
};

const typeColors = {
  'Lesson': 'bg-sky-500',
  'Program': 'bg-emerald-500',
  'Project': 'bg-amber-500',
};

export default function VirtualActivityDetail({ activity, onClose }) {
  if (!activity) return null;

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
          className="bg-white rounded-3xl max-w-4xl w-full my-8 overflow-hidden shadow-2xl"
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
              <Code className="w-8 h-8" />
              <Badge className={`${typeColors[activity.activity_type] || 'bg-gray-500'} text-white`}>
                {activity.activity_type}
              </Badge>
              <Badge className="bg-[#ed7219] text-white">
                Python
              </Badge>
              <Badge className={difficultyColors[activity.difficulty] || 'bg-gray-100 text-gray-800'}>
                {activity.difficulty}
              </Badge>
            </div>
            <h2 
              className="text-2xl sm:text-3xl font-bold"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              Python - {activity.activity_type} {activity.order}: {activity.title}
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
            <div className="prose prose-lg max-w-none 
              prose-headings:font-bold prose-headings:text-[#055b8e] 
              prose-a:text-[#ed7219] 
              prose-code:bg-gray-800 prose-code:text-green-400 prose-code:px-2 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
              prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-4 prose-pre:overflow-x-auto
              prose-p:leading-relaxed prose-p:mb-4
              prose-li:mb-1
              prose-ul:mb-4 prose-ol:mb-4
              prose-h2:mt-8 prose-h2:mb-4 prose-h2:text-2xl
              prose-h3:mt-6 prose-h3:mb-3 prose-h3:text-xl
            ">
              <ReactMarkdown
                components={{
                  code({ node, inline, className, children, ...props }) {
                    if (inline) {
                      return (
                        <code className="bg-gray-800 text-green-400 px-2 py-0.5 rounded text-sm" {...props}>
                          {children}
                        </code>
                      );
                    }
                    return (
                      <pre className="bg-gray-900 text-gray-100 rounded-xl p-4 overflow-x-auto my-4">
                        <code className="text-sm font-mono" {...props}>
                          {children}
                        </code>
                      </pre>
                    );
                  }
                }}
              >
                {activity.content}
              </ReactMarkdown>
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