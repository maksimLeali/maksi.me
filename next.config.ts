import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  compiler: {
    styledComponents: {
      displayName: true, // Show component names in classnames (useful for debugging)
      ssr: true, // Enable server-side rendering
      fileName: true, // Include filenames in classnames (helps debugging)
      topLevelImportPaths: [], // Configure top-level imports if necessary
      meaninglessFileNames: ["index"], // Customize meaningless filenames
      minify: true, // Minify styles in production
      transpileTemplateLiterals: true, // Optimize template literals
      namespace: "lemaks", // Use a namespace to scope classnames if needed
      pure: false, // Enable pure annotation for dead code elimination
      cssProp: true,
      }
    
  },
  experimental: {
    forceSwcTransforms: true,
  },
};

export default nextConfig;
