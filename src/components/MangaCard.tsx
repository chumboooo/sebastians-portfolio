import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type MangaCardProps = ComponentPropsWithoutRef<"div"> & {
  as?: "div" | "article" | "section";
  children: ReactNode;
};

export function MangaCard({
  as = "div",
  children,
  className = "",
  ...props
}: MangaCardProps) {
  const Component = as as ElementType;

  return (
    <Component className={`manga-panel ${className}`} {...props}>
      {children}
    </Component>
  );
}
