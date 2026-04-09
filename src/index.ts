/**
 * CE.SDK Background Removal Editor Starterkit - Main Entry Point
 *
 * A design editor with AI-powered background removal for creating stunning graphics.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initBackgroundRemovalEditor } from './imgly';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-background-removal-editor-user'

  // Local assets
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize Background Removal Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    await initBackgroundRemovalEditor(cesdk);
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
