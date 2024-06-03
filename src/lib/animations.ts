import { MotionProps } from 'framer-motion';

export const revealFromTop: MotionProps = {
  initial: {
    y: -60,
    opacity: 0
  },
  whileInView: {
    y: 0,
    opacity: 1
  },
  transition: { delay: 0.2, duration: 0.25 },
  viewport: { once: true, amount: 'some' }
};

export const revealFromBottom: MotionProps = {
  initial: {
    y: 60,
    opacity: 0
  },
  whileInView: {
    y: 0,
    opacity: 1
  },
  transition: { delay: 0.2, duration: 0.25 },
  viewport: { once: true, amount: 'some' }
};

export const revealFromLeft: MotionProps = {
  initial: {
    x: -60,
    opacity: 0
  },
  whileInView: {
    x: 0,
    opacity: 1
  },
  transition: { delay: 0.2, duration: 0.25 },
  viewport: { once: true, amount: 'some' }
};

export const revealFromRight: MotionProps = {
  initial: {
    x: 60,
    opacity: 0
  },
  whileInView: {
    x: 0,
    opacity: 1
  },
  transition: { delay: 0.2, duration: 0.25 },
  viewport: { once: true, amount: 'some' }
};
