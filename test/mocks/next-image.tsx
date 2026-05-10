import { forwardRef, type ImgHTMLAttributes, type ReactElement } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  src?: string | { src: string };
  width?: number | string;
  height?: number | string;
  fill?: boolean;
  priority?: boolean;
  loader?: unknown;
  loading?: "lazy" | "eager";
  placeholder?: string;
  blurDataURL?: string;
  quality?: number | string;
  sizes?: string;
  unoptimized?: boolean;
};

const NEXT_IMAGE_ONLY_PROPS = new Set([
  "fill",
  "priority",
  "loader",
  "placeholder",
  "blurDataURL",
  "quality",
  "unoptimized",
]);

const NextImage = forwardRef<HTMLImageElement, Props>(function NextImage(
  { src, alt = "", ...rest },
  ref,
): ReactElement {
  const resolvedSrc =
    typeof src === "string" ? src : src && "src" in src ? src.src : "";
  const cleaned: Record<string, unknown> = {};
  for (const key of Object.keys(rest) as Array<keyof typeof rest>) {
    if (NEXT_IMAGE_ONLY_PROPS.has(key as string)) continue;
    cleaned[key as string] = rest[key];
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img ref={ref} src={resolvedSrc} alt={alt} {...cleaned} />
  );
});

export default NextImage;

export function getImageProps(props: Props) {
  return { props };
}
