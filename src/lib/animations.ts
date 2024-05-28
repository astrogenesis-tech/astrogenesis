import { MotionProps } from 'framer-motion';

export const revealFromTop: MotionProps = {
  initial: {
    y: -100,
    opacity: 0
  },
  whileInView: {
    y: 0,
    opacity: 1
  },
  transition: { delay: 0.3, duration: 0.3 },
  viewport: { once: true, amount: 'some' }
};

export const revealFromBottom: MotionProps = {
  initial: {
    y: 100,
    opacity: 0
  },
  whileInView: {
    y: 0,
    opacity: 1
  },
  transition: { delay: 0.3, duration: 0.3 },
  viewport: { once: true, amount: 'some' }
};

export const revealFromLeft: MotionProps = {
  initial: {
    x: -100,
    opacity: 0
  },
  whileInView: {
    x: 0,
    opacity: 1
  },
  transition: { delay: 0.3, duration: 0.3 },
  viewport: { once: true, amount: 'some' }
};

export const revealFromRight: MotionProps = {
  initial: {
    x: 100,
    opacity: 0
  },
  whileInView: {
    x: 0,
    opacity: 1
  },
  transition: { delay: 0.3, duration: 0.3 },
  viewport: { once: true, amount: 'some' }
};
