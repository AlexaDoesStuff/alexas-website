import { motion, Variants } from 'motion/react';

export enum VariantType {
  PAGE_EXIT = 'PAGE_EXIT',
  RISE_UP = 'RISE_UP',
  LEFT_RIGHT = 'LEFT_RIGHT',
  RIGHT_LEFT = 'RIGHT_LEFT',
}

export const pageExitVariant = {
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

export const riseUpTextVariant = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const leftToRightTextVariant = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

export const rightToLeftTextVariant = {
  initial: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const variantMap: Record<VariantType, Variants> = {
  [VariantType.PAGE_EXIT]: pageExitVariant,
  [VariantType.RISE_UP]: riseUpTextVariant,
  [VariantType.LEFT_RIGHT]: leftToRightTextVariant,
  [VariantType.RIGHT_LEFT]: rightToLeftTextVariant,
};

type MotionVariantAnimationProps = {
  classString?: string;
  variantType: VariantType;
  children: React.ReactNode;
};

export function MotionVariantAnimation({
  classString,
  variantType,
  children,
}: MotionVariantAnimationProps) {
  const chosenVariant = variantMap[variantType];
  return (
    <motion.div
      className={classString}
      variants={chosenVariant}
      initial="initial"
      animate="animate"
      layout="position"
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 30,
        duration: 2,
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
