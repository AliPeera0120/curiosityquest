import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Briefcase, Loader2, Sparkles, ChevronRight, X, Users, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = [
  { id: 'Engineering', label: 'Engineering', image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800', color: 'blue' },
  { id: 'Computer Science & Coding', label: 'Computer Science & Coding', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800', color: 'blue' },
  { id: 'Robotics & AI', label: 'Robotics & AI', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800', color: 'orange' },
  { id: 'Space & Physics', label: 'Space & Physics', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800', color: 'blue' },
  { id: 'Environmental Science', label: 'Environmental Science', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800', color: 'orange' },
  { id: 'Biomedical & Health', label: 'Biomedical & Health', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800', color: 'blue' },
  { id: 'Design & UX', label: 'Design & UX', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800', color: 'orange' },
];

export default function CareersInSTEM() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: careers = [], isLoading } = useQuery({
    queryKey: ['careers'],
    queryFn: () => base44.entities.Career.list('title'),
  });

  const getCareersForCategory = (categoryId) => {
    return careers.filter(c => c.category === categoryId);
  };

  const categoryInfo = categories.find(c => c.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#055b8e] to-[#044a73] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 text-[#ed7219]" />
            Discover your future
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Nunito, sans-serif' }}
          >
            Careers in STEM
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto"
          >
            Explore real-world STEM careers and discover how your curiosity can shape the future!
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#055b8e]" />
          </div>
        ) : !selectedCategory ? (
          /* Category Selection */
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-xl transition-all group"
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  <div className="relative h-40">
                    <img 
                      src={cat.image} 
                      alt={cat.label}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${cat.color === 'blue' ? 'bg-[#055b8e]/60' : 'bg-[#ed7219]/60'} group-hover:opacity-80 transition-opacity`} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-xl font-bold text-center px-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        {cat.label}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {getCareersForCategory(cat.id).length} careers
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#055b8e] group-hover:translate-x-1 transition-all" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Career List for Selected Category */
          <div>
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-6 text-[#055b8e] hover:text-[#044a73] font-medium flex items-center gap-2"
            >
              ← Back to Categories
            </button>

            {/* Category Header with Image */}
            <div className="relative h-48 rounded-2xl overflow-hidden mb-8">
              <img 
                src={categoryInfo?.image} 
                alt={categoryInfo?.label}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${categoryInfo?.color === 'blue' ? 'bg-[#055b8e]/70' : 'bg-[#ed7219]/70'}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-3xl sm:text-4xl font-bold text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  {categoryInfo?.label}
                </h2>
              </div>
            </div>

            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search careers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 rounded-xl text-lg border-gray-200"
              />
            </div>

            {/* Career Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {getCareersForCategory(selectedCategory)
                .filter(c => !searchQuery || c.title.toLowerCase().includes(searchQuery.toLowerCase()))
                .map((career, index) => (
                <motion.div
                  key={career.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Card 
                    className="cursor-pointer hover:shadow-lg hover:border-[#055b8e] transition-all group h-full"
                    onClick={() => setSelectedCareer(career)}
                  >
                    <CardContent className="p-5">
                      <h3 className="text-lg font-bold text-[#055b8e] group-hover:text-[#ed7219] transition-colors mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        {career.title}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {career.description}
                      </p>
                      <div className="flex items-center justify-end">
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#ed7219] group-hover:translate-x-1 transition-all" />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Career Detail Modal */}
      <AnimatePresence>
        {selectedCareer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedCareer(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full my-8 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with tinted image */}
              <div className="relative h-48">
                <img 
                  src={categoryInfo?.image} 
                  alt={selectedCareer.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${categoryInfo?.color === 'blue' ? 'bg-[#055b8e]/75' : 'bg-[#ed7219]/75'}`} />
                <button
                  onClick={() => setSelectedCareer(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    {selectedCareer.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-[#055b8e] mb-3 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    <Briefcase className="w-5 h-5 text-[#ed7219]" />
                    What They Do
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedCareer.description}
                  </p>
                </div>

                {/* Good Fit For */}
                <div className="bg-[#055b8e]/5 rounded-2xl p-5">
                  <h3 className="text-lg font-bold text-[#055b8e] mb-3 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    <Users className="w-5 h-5 text-[#ed7219]" />
                    Good Fit For
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.good_fit_for?.split(',').map((trait, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-[#055b8e] border border-[#055b8e]/20"
                      >
                        {trait.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Employers */}
                <div className="bg-[#ed7219]/5 rounded-2xl p-5">
                  <h3 className="text-lg font-bold text-[#055b8e] mb-3 flex items-center gap-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
                    <Building2 className="w-5 h-5 text-[#ed7219]" />
                    Example Employers
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCareer.employers?.split(',').map((employer, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 bg-white rounded-full text-sm font-medium text-[#ed7219] border border-[#ed7219]/20"
                      >
                        {employer.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-100 p-6">
                <button
                  onClick={() => setSelectedCareer(null)}
                  className="w-full bg-[#055b8e] hover:bg-[#044a73] text-white py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  Back to Careers
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}