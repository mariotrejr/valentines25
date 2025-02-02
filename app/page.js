"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const [showLetter, setShowLetter] = useState(false);
  const [openEnvelope, setOpenEnvelope] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [noShake, setNoShake] = useState(false);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      {/* Mailbox Animation */}
      {!showLetter ? (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex flex-col items-center"
        >
          <motion.img
            src="/heartspinning.gif"
            alt="Mailbox"
            className="w-40 h-40"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="mt-4 text-lg font-semibold text-pink-600"
          >
            Hi Dafne, you got a letter! 💌
          </motion.div>
          <motion.img
            src="/cuteletter.png"
            alt="Letter"
            className="w-20 h-20 mt-4 cursor-pointer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            onClick={() => setShowLetter(true)}
          />
        </motion.div>
      ) : (
        // Envelope Opening Animation
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center"
        >
          <motion.img
            src="/cuteletter.png"
            alt="Envelope"
            className="w-40 h-40 cursor-pointer"
            onClick={() => setOpenEnvelope(true)}
          />
          {openEnvelope && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute top-0 flex flex-col items-center"
            >
              <motion.img
                src="/me.jpg"
                alt="Paper"
                className="w-32 h-32"
              />
              {!answered ? (
                <>
                  <motion.p
                    className="mt-2 text-lg font-bold text-pink-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    Will you be my Valentine? ❤️
                  </motion.p>

                  {/* Yes Button */}
                  <motion.button
                    className="mt-4 px-6 py-2 text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition-all"
                    onClick={() => setAnswered(true)}
                    whileTap={{ scale: 0.9 }}
                  >
                    Yes! 🥰
                  </motion.button>

                  {/* No Button with Shake Effect */}
                  <motion.button
                    className="mt-2 px-6 py-2 text-white bg-gray-400 rounded-full shadow-lg hover:bg-gray-500 transition-all"
                    onClick={() => setNoShake(true)}
                    animate={noShake ? { x: [-5, 5, -5, 5, 0] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    No 😢
                  </motion.button>
                </>
              ) : (
                <motion.p
                  className="mt-4 text-lg font-bold text-pink-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Yay! Can't wait for our Valentine's Day! 💖✨
                </motion.p>
              )}
            </motion.div>
          )}
        </motion.div>
      )}
    </main>
  );
}
