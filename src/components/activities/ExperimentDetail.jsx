import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, CheckCircle, AlertTriangle, Package, ListOrdered } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const topicLabels = {
  physics: 'Physics',
  biology: 'Biology',
  chemistry: 'Chemistry',
  engineering: 'Engineering',
  computer_science: 'Computer Science',
};

export default function ExperimentDetail({ experiment, onClose }) {
  if (!experiment) return null;

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
          <div className="bg-gradient-to-r from-[#055b8e] to-[#0a7bc0] p-6 text-white relative">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20"
            >
              <X className="w-6 h-6" />
            </Button>
            
            <Badge className="bg-white/20 text-white mb-3">
              {topicLabels[experiment.topic]}
            </Badge>
            <h2 
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ fontFamily: 'Nunito, sans-serif' }}
            >
              {experiment.title}
            </h2>
            {experiment.age_range && (
              <p className="text-white/80">
                Recommended for ages {experiment.age_range}
              </p>
            )}
          </div>

          <div className="p-6 space-y-6">
            {/* What You'll Learn */}
            <div className="bg-[#055b8e]/5 rounded-2xl p-5">
              <h3 className="font-bold text-[#055b8e] text-lg mb-2 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                <CheckCircle className="w-5 h-5 text-[#ed7219]" />
                What You'll Learn
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {experiment.what_you_learn}
              </p>
            </div>

            {/* Safety Notes */}
            {experiment.safety_notes && (
              <div className="bg-[#ed7219]/10 border border-[#ed7219]/30 rounded-2xl p-5">
                <h3 className="font-bold text-[#ed7219] text-lg mb-2 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <AlertTriangle className="w-5 h-5" />
                  Safety First!
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {experiment.safety_notes}
                </p>
              </div>
            )}

            {/* Materials */}
            {experiment.materials && experiment.materials.length > 0 && (
              <div>
                <h3 className="font-bold text-[#055b8e] text-lg mb-3 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <Package className="w-5 h-5 text-[#ed7219]" />
                  Materials You'll Need
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {experiment.materials.map((material, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#ed7219]" />
                      <span className="text-gray-700">{material}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Steps */}
            {experiment.steps && experiment.steps.length > 0 && (
              <div>
                <h3 className="font-bold text-[#055b8e] text-lg mb-3 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  <ListOrdered className="w-5 h-5 text-[#ed7219]" />
                  Step-by-Step Instructions
                </h3>
                <div className="space-y-3">
                  {experiment.steps.map((step, index) => (
                    <div 
                      key={index}
                      className="flex gap-4 bg-gray-50 rounded-xl p-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#055b8e] text-white flex items-center justify-center font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed pt-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
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