import { motion } from 'motion/react';

interface Logo3DProps {
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function Logo3D({ size = 'md', onClick, className = '' }: Logo3DProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center gap-2 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {/* 3D Icon */}
      <div className={`${iconSizes[size]} relative`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-cyan-500 rounded-xl shadow-lg"
          animate={{
            rotateY: [0, 10, 0],
            rotateX: [0, 5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: 'rotateX(15deg) rotateY(-15deg)',
            transformStyle: 'preserve-3d'
          }}
        />
        <motion.div
          className="absolute inset-0.5 bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 rounded-lg"
          animate={{
            rotateY: [0, -10, 0],
            rotateX: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
          style={{
            transform: 'rotateX(10deg) rotateY(-10deg)',
            transformStyle: 'preserve-3d'
          }}
        />
        <div className="absolute inset-1 bg-white rounded-md flex items-center justify-center">
          <motion.div
            className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            S
          </motion.div>
        </div>
      </div>

      {/* Company Name */}
      <div className={`${sizeClasses[size]} font-bold`}>
        <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        >
          SM-
        </motion.span>
        <span className="text-gray-800 ml-1">ITsolution</span>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute -inset-2 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeInOut"
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 20}%`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}