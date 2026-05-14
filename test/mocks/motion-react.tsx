import {
  createElement,
  forwardRef,
  type ComponentType,
  type ReactElement,
  type ReactNode,
} from "react";

const MOTION_PROP_PATTERN =
  /^(initial|animate|exit|transition|whileHover|whileTap|whileFocus|whileInView|viewport|variants|drag|dragConstraints|dragElastic|dragMomentum|dragTransition|layout|layoutId|layoutDependency|onAnimationStart|onAnimationComplete|onUpdate|onHoverStart|onHoverEnd|onTap|onTapStart|onTapCancel|onPanStart|onPan|onPanEnd|onDragStart|onDrag|onDragEnd|onDragTransitionEnd|onViewportEnter|onViewportLeave|custom|inherit)$/;

type AnyProps = Record<string, unknown> & { children?: ReactNode };

function stripMotionProps(props: AnyProps): AnyProps {
  const out: AnyProps = {};
  for (const key of Object.keys(props)) {
    if (MOTION_PROP_PATTERN.test(key)) continue;
    out[key] = props[key];
  }
  return out;
}

function createMotionTag(tag: string) {
  const Component = forwardRef<HTMLElement, AnyProps>(function MotionTag(
    props,
    ref,
  ) {
    const cleaned = stripMotionProps(props);
    return createElement(
      tag,
      { ...cleaned, ref } as Record<string, unknown>,
      props.children as ReactNode,
    ) as ReactElement;
  });
  Component.displayName = `motion.${tag}`;
  return Component;
}

function createMotionWrapper<P extends AnyProps>(Wrapped: ComponentType<P>) {
  const Component = forwardRef<unknown, P>(function MotionWrapped(props, ref) {
    const cleaned = stripMotionProps(props as AnyProps) as unknown as P;
    return createElement(
      Wrapped as unknown as ComponentType<Record<string, unknown>>,
      { ...(cleaned as object), ref } as Record<string, unknown>,
    );
  });
  Component.displayName = `motion(${
    (Wrapped as { displayName?: string; name?: string }).displayName ??
    (Wrapped as { displayName?: string; name?: string }).name ??
    "Component"
  })`;
  return Component;
}

const motionCache = new Map<string, ReturnType<typeof createMotionTag>>();

const motionFn = (Wrapped: ComponentType<AnyProps>) =>
  createMotionWrapper(Wrapped);

export const motion: typeof motionFn & Record<string, ComponentType<AnyProps>> =
  new Proxy(motionFn as unknown as typeof motionFn, {
    get(_target, prop: string | symbol) {
      if (typeof prop === "symbol") return undefined;
      if (!motionCache.has(prop)) {
        motionCache.set(prop, createMotionTag(prop));
      }
      return motionCache.get(prop);
    },
  }) as typeof motionFn & Record<string, ComponentType<AnyProps>>;

export function AnimatePresence({ children }: { children?: ReactNode }) {
  return children as ReactElement;
}

export function MotionConfig({ children }: { children?: ReactNode }) {
  return children as ReactElement;
}

export function LayoutGroup({ children }: { children?: ReactNode }) {
  return children as ReactElement;
}

export function LazyMotion({ children }: { children?: ReactNode }) {
  return children as ReactElement;
}

export const domAnimation = {};
export const domMax = {};

export function useReducedMotion(): boolean {
  return true;
}

export function useInView(): boolean {
  return true;
}

export function useAnimation() {
  return {
    start: async () => {},
    stop: () => {},
    set: () => {},
  };
}

export function useAnimationControls() {
  return useAnimation();
}

type MotionValue<T> = {
  get(): T;
  set(value: T): void;
  on(): () => void;
  destroy(): void;
};

function createMotionValue<T>(initial: T): MotionValue<T> {
  let value = initial;
  return {
    get: () => value,
    set: (v: T) => {
      value = v;
    },
    on: () => () => {},
    destroy: () => {},
  };
}

export function useMotionValue<T>(initial: T): MotionValue<T> {
  return createMotionValue(initial);
}

export function useTransform<T>(
  _value: unknown,
  _input?: unknown,
  output?: T[],
): MotionValue<T | undefined> {
  return createMotionValue(output ? output[0] : undefined);
}

export function useScroll() {
  return {
    scrollX: createMotionValue(0),
    scrollY: createMotionValue(0),
    scrollXProgress: createMotionValue(0),
    scrollYProgress: createMotionValue(0),
  };
}

export function useSpring<T>(value: T): MotionValue<T> {
  return createMotionValue(value);
}

export function useMotionTemplate(): MotionValue<string> {
  return createMotionValue("");
}

export function useDragControls() {
  return { start: () => {} };
}

export function useIsPresent() {
  return true;
}

export function usePresence(): [boolean, () => void] {
  return [true, () => {}];
}
