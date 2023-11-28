import React from 'react';
import { motion } from 'framer-motion';

function CircleClip({ id, cx, cy, r }) {
  return (
    <clipPath id={id}>
      <circle cx={cx} cy={cy} r={r} />
    </clipPath>
  );
}

function ThreeEye({ circle1, circle2, circle3, showEye, idPrefix, z }) {
  const radius = 120;
  const clipPathId1 = `${idPrefix}-clip-1`;
  const clipPathId2 = `${idPrefix}-clip-2`;
  const clipPathId3 = `${idPrefix}-clip-3`;

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: showEye ? 1 : 0 }}
      transition={{ duration: 0.1 }}
      className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none"
    >
      <div className="border border-none w-132 h-132 flex items-center justify-center m-auto z-30">
        <svg width="400" height="400">
          <defs>
            <CircleClip id={clipPathId1} cx={circle1.x} cy={circle1.y} r={radius} />
            <CircleClip id={clipPathId2} cx={circle2.x} cy={circle2.y} r={radius} />
            <CircleClip id={clipPathId3} cx={circle3.x} cy={circle3.y} r={radius} />

            {/* Nested clip paths for intersection */}
            <clipPath id={`${idPrefix}-intersect-12`}>
              <circle cx={circle1.x} cy={circle1.y} r={radius} clipPath={`url(#${clipPathId2})`} />
            </clipPath>
            <clipPath id={`${idPrefix}-intersect-123`}>
              <circle cx={circle2.x} cy={circle2.y} r={radius} clipPath={`url(#${idPrefix}-intersect-12)`} />
            </clipPath>
          </defs>

          {/* Circle clipped by the intersection of all three circles */}
          <circle cx={circle3.x} cy={circle3.y} r={radius} fill="DarkSlateBlue" clipPath={`url(#${idPrefix}-intersect-123)`} />
        </svg>
      </div>
    </motion.div>
  );
}

export default ThreeEye;
