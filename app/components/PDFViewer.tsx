"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
}

export default function PDFViewer({ file }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [baseWidth, setBaseWidth] = useState<number>(800);
  const [scale, setScale] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const initialDistance = useRef<number | null>(null);
  const initialScale = useRef<number>(1);

  useEffect(() => {
    function updateWidth() {
      const width = window.innerWidth - 32;
      setBaseWidth(Math.min(800, width));
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const getDistance = (touches: TouchList) => {
    return Math.hypot(
      touches[0].clientX - touches[1].clientX,
      touches[0].clientY - touches[1].clientY
    );
  };

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches.length === 2) {
      initialDistance.current = getDistance(e.touches);
      initialScale.current = scale;
    }
  }, [scale]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length === 2 && initialDistance.current !== null) {
      e.preventDefault();
      const currentDistance = getDistance(e.touches);
      const scaleChange = currentDistance / initialDistance.current;
      const newScale = Math.min(Math.max(initialScale.current * scaleChange, 0.5), 2.5);
      setScale(newScale);
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    initialDistance.current = null;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("touchstart", handleTouchStart, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, { passive: false });
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const zoomIn = () => setScale((prev) => Math.min(prev + 0.25, 2.5));
  const zoomOut = () => setScale((prev) => Math.max(prev - 0.25, 0.5));
  const resetZoom = () => setScale(1);

  return (
    <div className="flex flex-col items-center w-full pb-8" ref={containerRef}>
      {!loading && (
        <div className="sticky top-0 z-10 flex items-center gap-3 py-3 bg-[#903240]">
          <button
            onClick={zoomOut}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xl"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            onClick={resetZoom}
            className="px-3 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-sm"
          >
            {Math.round(scale * 100)}%
          </button>
          <button
            onClick={zoomIn}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-xl"
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
      )}
      {loading && (
        <div className="flex items-center justify-center py-20">
          <div className="animate-pulse text-xl">Loading menu...</div>
        </div>
      )}
      <div
        className="w-full overflow-x-auto"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        <div
          className="flex flex-col items-center gap-4 py-4"
          style={{
            minWidth: scale > 1 ? `${baseWidth * scale}px` : '100%',
            paddingLeft: scale > 1 ? '16px' : '0',
            paddingRight: scale > 1 ? '16px' : '0'
          }}
        >
          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading=""
            className="flex flex-col items-center gap-4"
          >
            {Array.from(new Array(numPages), (_, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                className="shadow-lg rounded-lg overflow-hidden"
                width={baseWidth * scale}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}
