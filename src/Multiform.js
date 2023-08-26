import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Form1 from './Form/Form1.js';
import Form2 from './Form/Form2.js';
import "./Multiform.css"
import Form3 from './Form/Form3.js';
import FormLast from './Form/FormLast.js';

const MultiForm = () => {
  const [showForm1, setShowForm1] = useState(1);

  const handle1 = () => {
    setShowForm1(1);
  };

  const handle2 = () => {
    setShowForm1(2);
  };

  const handle3 = () => {
    setShowForm1(3);
  };

  const handle4 = () => {
    setShowForm1(4);
  };

  return (
    <div className=''>
    {/* <img
    class="demo-bg"
    src="https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2018/08/markus-spiske-666905-unsplash.jpg"
    alt=""
  ></img> */}
  <div className="bg-image"></div>
  <div className="bg-text">
  <AnimatePresence initial={false} exitBeforeEnter={false} mode="wait">
        {showForm1 === 1 ? (
          <motion.div
            key="form1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Form1 onHandle2={handle2} />
          </motion.div>
        ) : showForm1 === 2 ? (
          <motion.div
            key="form2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Form2 onHandle3={handle3} />
          </motion.div>
        ) :  showForm1 === 3 ? (
          <motion.div
            key="form2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormLast onHandle4={handle4} />
          </motion.div>
        ) : null}
      </AnimatePresence>
  </div>
    </div>
  );
};

export default MultiForm;
