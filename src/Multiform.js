import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Form1 from './Form/Form1.js';
import Form2 from './Form/Form2.js';
import "./Multiform.css"

const MultiForm = () => {
  const [showForm1, setShowForm1] = useState(true);

  const handleNext = () => {
    setShowForm1(false);
  };

  const handlePrevious = () => {
    setShowForm1(true);
  };

  return (
    <div className=''>
      <AnimatePresence initial={false} exitBeforeEnter={false} mode="wait">
        {showForm1 ? (
          <motion.div
            key="form1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Form1 onNext={handleNext} />
          </motion.div>
        ) : (
          <motion.div
            key="form2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Form2 onPrevious={handlePrevious} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiForm;
