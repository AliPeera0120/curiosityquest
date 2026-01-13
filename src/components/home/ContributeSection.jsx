import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Beaker, Monitor, Library, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContributeSection() {
  const handleContribute = () => {
    // Placeholder for donation processor integration
    alert('Thank you for your interest in supporting CuriosityQuest! This will redirect to our secure donation processor.');
  };

  const impactAreas = [
    {
      icon: Beaker,
      title: 'Hands-On Experiments',
      description: 'Fund materials and supplies for exciting science experiments'
    },
    {
      icon: Monitor,
      title: 'Virtual Learning',
      description: 'Expand our digital resources and interactive activities'
    },
    {
      icon: Library,
      title: 'Community Programs',
      description: 'Support library partnerships and community STEM events'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#ed7219]/10 mb-6">
            <Heart className="w-8 h-8 text-[#ed7219]" />
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold text-[#055b8e] mb-4"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Contribute Now
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your support helps us inspire the next generation of scientists, engineers, and innovators through accessible STEM education.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {impactAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#055b8e] to-[#ed7219] flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-[#055b8e] text-lg mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {area.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            onClick={handleContribute}
            size="lg"
            className="bg-[#ed7219] hover:bg-[#d86515] text-white text-lg px-10 py-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all group"
          >
            Support CuriosityQuest
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            All contributions support educational programming and are processed securely
          </p>
        </motion.div>
      </div>
    </section>
  );
}