
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // framer-motion@4.1.17

function CircleClip({ id, cx, cy, r }) {
  return (
    <clipPath id={id}>
      <circle cx={cx} cy={cy} r={r} />
    </clipPath>
  );
}

function ClippedCircle({ cx, cy, r, fill, clipPathUrl }) {
  return <circle cx={cx} cy={cy} r={r} fill={fill} clipPath={`url(${clipPathUrl})`} />;
}

function CircleBorder({ cx, cy, r, stroke, strokeWidth, clipPathUrl }) {
  return <circle cx={cx} cy={cy} r={r} fill="none" stroke={stroke} strokeWidth={strokeWidth} clipPath={`url(${clipPathUrl})`} />;
}

function Eye({ circle1, circle2, showEye, idPrefix, setActiveContent }) {
  const radius = 115;
  // Dynamic clip path IDs based on the idPrefix
  const clipPathId1 = `${idPrefix}-clip-1`;
  const clipPathId2 = `${idPrefix}-clip-2`;

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: showEye ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none"
    >
      <div className="border border-none w-132 h-132 flex items-center justify-center m-auto">
        <svg width="400" height="400">
          <defs>
            <CircleClip id={clipPathId1} cx={circle1.x} cy={circle1.y} r={radius} />
            <CircleClip id={clipPathId2} cx={circle2.x} cy={circle2.y} r={radius} />
          </defs>

          {/* Use the dynamic clip path IDs */}
          <ClippedCircle cx={circle2.x} cy={circle2.y} r={radius} fill="black" clipPathUrl={`#${clipPathId1}`} />
          <CircleBorder cx={circle1.x} cy={circle1.y} r={radius} stroke="white" strokeWidth="2" clipPathUrl={`#${clipPathId2}`} />
          <CircleBorder cx={circle2.x} cy={circle2.y} r={radius} stroke="white" strokeWidth="2" clipPathUrl={`#${clipPathId1}`} />
        </svg>
      </div>
    </motion.div>
  );
}

export default Eye;
