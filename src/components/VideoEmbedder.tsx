'use client';

import { useEffect, useRef } from 'react';

export function VideoEmbedder({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Buscar todos los <oembed> con atributo url
    const oembeds = containerRef.current.querySelectorAll('oembed[url]');
    oembeds.forEach(oembed => {
      const url = oembed.getAttribute('url') || '';
      let embedHTML = '';

      if (url.includes('youtube.com/watch') || url.includes('youtu.be/')) {
        const videoIdMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
        if (videoIdMatch && videoIdMatch[1]) {
          const videoId = videoIdMatch[1];
          embedHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        }
      } else if (url.includes('vimeo.com/')) {
        const videoIdMatch = url.match(/vimeo\.com\/(\d+)/);
        if (videoIdMatch && videoIdMatch[1]) {
          const videoId = videoIdMatch[1];
          embedHTML = `<iframe src="https://player.vimeo.com/video/${videoId}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`;
        }
      }

      if (embedHTML) {
        const wrapper = document.createElement('div');
        wrapper.className = 'video-embed-container';
        wrapper.innerHTML = embedHTML;
        oembed.replaceWith(wrapper);
      }
    });
  }, [html]);

  return (
    <div
      ref={containerRef}
      className="post-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
