import React from 'react';
import { motion } from 'framer-motion';

function Home() {
    return (
        <div className="container mx-auto text-center py-20">
        <motion.h1
            className="text-4xl font-decorative text-accent mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            Bienvenidos a Parsel & Parcel House
        </motion.h1>
        <p className="text-modern text-lg text-silver mb-6">
            Donde los paquetes esconden un toque de magia.
        </p>
        <motion.button
            className="bg-secondary px-6 py-2 rounded-full text-white font-modern hover:bg-accent"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            Explora la Magia
        </motion.button>
        </div>
    );
}

export default Home;