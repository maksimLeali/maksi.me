'use client';

import React, { useState } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

// Import the generateCss helper and your grid config.
// Adjust the paths as necessary.
import { generateCss } from '@lemaks/grid_system';
import gridConfig from '../../grid.config.js';

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    // Generate grid CSS from the default variables merged with the user's config.
    const gridCss = generateCss(gridConfig);
    const styledComponentsStyles = styledComponentsStyleSheet.getStyleElement();
    // Clear the styled-components tag to avoid duplication.
    styledComponentsStyleSheet.instance.clearTag();

    return (
      <>
        {/* Inject grid configuration CSS */}
        <style data-grid-config>{gridCss}</style>
        {/* Inject styled-components SSR styles */}
        {styledComponentsStyles}
      </>
    );
  });

  // On the client, simply render the children.
  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
}
