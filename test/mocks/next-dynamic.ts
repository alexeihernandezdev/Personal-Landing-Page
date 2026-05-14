import { lazy, Suspense, createElement, type ComponentType } from "react";

type Loader<P> = () => Promise<ComponentType<P> | { default: ComponentType<P> }>;

export default function dynamic<P extends object>(
  loader: Loader<P>,
): ComponentType<P> {
  const LazyComponent = lazy<ComponentType<P>>(async () => {
    const mod = await loader();
    return "default" in mod ? (mod as { default: ComponentType<P> }) : { default: mod as ComponentType<P> };
  });
  function DynamicComponent(props: P) {
    return createElement(
      Suspense,
      { fallback: null },
      createElement(LazyComponent, props),
    );
  }
  return DynamicComponent;
}
