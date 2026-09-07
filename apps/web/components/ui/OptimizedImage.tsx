"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "onError"> {
  fallbackSrc?: string;
  containerClassName?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  fallbackSrc = "/images/placeholder.svg",
  priority = false,
  ...rest
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(!priority);
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-zinc-900/60 ${containerClassName}`}>
      <Image
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt}
        className={`transition-opacity duration-500 ease-out ${
          isLoading ? "opacity-0 scale-98 blur-sm" : "opacity-100 scale-100 blur-0"
        } ${className}`}
        priority={priority}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
          setImgSrc(fallbackSrc);
        }}
        {...rest}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      )}
    </div>
  );
}
