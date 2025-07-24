'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: 'Indian Institute of Technology Jodhpur, Jodhpur',
    dates: 'Oct 2022 – May 2026',
    degree: 'B.Tech in Electronics and Electrical Engineering',
    result: 'GPA: 7.85',
    spanFull: true,
  },
  {
    institution: 'Dholakiya Public School, Rajkot',
    dates: 'May 2020 – June 2022',
    degree: 'Higher Secondary Certificate',
    result: '81%',
  },
  {
    institution: 'Masoom School, Rajkot',
    dates: 'May 2019 – April 2020',
    degree: 'Secondary Education Certificate',
    result: '91%',
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 px-4 sm:px-8 max-w-5xl mx-auto">
      {/* Centered the heading */}
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Education</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index }}
            // Added conditional text-center for the full-span card
            className={`${
              edu.spanFull ? 'md:col-span-2 text-center' : ''
            } bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800`}
          >
            {/* Added conditional justify-center to center the icon and title */}
            <div className={`flex items-center gap-3 mb-3 ${edu.spanFull ? 'justify-center' : ''}`}>
              <GraduationCap className="w-5 h-5 text-green-400" />
              <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-1">{edu.dates}</p>
            <p className="text-gray-300">{edu.degree}</p>
            <p className="text-gray-400 mt-1 italic">{edu.result}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;