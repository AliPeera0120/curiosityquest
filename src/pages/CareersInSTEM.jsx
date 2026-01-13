import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Briefcase, Loader2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import CareerCard from '../components/careers/CareerCard';

const categoryFilters = [
  { id: 'all', label: 'All Careers' },
  { id: 'Engineering', label: 'Engineering' },
  { id: 'Computer Science & Coding', label: 'Computer Science & Coding' },
  { id: 'Biomedical & Health', label: 'Biomedical & Health' },
  { id: 'Environmental Science', label: 'Environmental Science' },
  { id: 'Robotics & AI', label: 'Robotics & AI' },
  { id: 'Space & Physics', label: 'Space & Physics' },
  { id: 'Design & UX', label: 'Design & UX' },
];

export default function CareersInSTEM() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { data: careers = [], isLoading } = useQuery({
    queryKey: ['careers'],
    queryFn: () => base44.entities.Career.list('title'),
  });

  const filteredCareers = careers.filter((career) => {
    const matchesCategory = selectedCategory === 'all' || career.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      career.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      career.what_they_do?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categoryFilters.map((cat) => (
            <Button
              key={cat.id}
              variant={selectedCategory === cat.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full ${
                selectedCategory === cat.id 
                  ? 'bg-[#055b8e] hover:bg-[#044a73]' 
                  : 'hover:bg-[#055b8e]/10 hover:text-[#055b8e] hover:border-[#055b8e]'
              }`}
            >
              {cat.label}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-[#055b8e]" />
          </div>
        ) : filteredCareers.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl">
            <Briefcase className="w-12 h-12 mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-semibold text-gray-500 mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>
              No careers found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            {filteredCareers.map((career, index) => (
              <CareerCard key={career.id} career={career} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}