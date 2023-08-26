import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Form1 from "./Form/Form1.js";
import Form2 from "./Form/Form2.js";
import "./Multiform.css";
import Form3 from "./Form/Form3.js";
import Form4 from "./Form/Form4.js";
import Form5 from "./Form/Form5.js";
import Form6 from "./Form/Form6.js";

const MultiForm = () => {
  const [showForm1, setShowForm1] = useState(1);
  const [formData, setFormData] = useState({});

  const handle1 = () => {
    setShowForm1(1);
  };

  const handle2 = (data) => {
    setShowForm1(2);
    setFormData({ ...formData, formData1: data });
  };

  const handle3 = (data) => {
    setShowForm1(3);
    setFormData({ ...formData, formData2: data });
  };

  const handle4 = (data) => {
    setShowForm1(4);
    setFormData({ ...formData, formData3: data });
  };

  const handle5 = (data) => {
    setShowForm1(5);
    setFormData({ ...formData, formData4: data });
  };

  const handle6 = (data) => {
    setShowForm1(6);
    setFormData({ ...formData, formData5: data });
  };

  return (
    <div className="">
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
          ) : showForm1 === 3 ? (
            <motion.div
              key="form3"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Form3 onHandle4={handle4} formData={formData} />
            </motion.div>
          ) : showForm1 === 4 ? (
            <motion.div
              key="form4"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Form4 onHandle5={handle5} formData={formData} />
            </motion.div>
          ) : showForm1 === 5 ? (
            <motion.div
              key="form5"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Form5 onHandle6={handle6} formData={formData} />
            </motion.div>
          ) : showForm1 === 6 ? (
            <motion.div
              key="form6"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Form6 formData={formData} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MultiForm;
