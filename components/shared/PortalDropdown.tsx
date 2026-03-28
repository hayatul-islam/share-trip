import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalDropdownProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
}

export function PortalDropdown({
  anchorRef,
  open,
  onClose,
  children,
  width,
}: PortalDropdownProps) {
  const [coords, setCoords] = useState({ top: 0, left: 0, w: 0 });
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  const updateCoords = useCallback(() => {
    if (!anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 4,
      left: rect.left + window.scrollX,
      w: rect.width,
    });
  }, [anchorRef]);

  // Mount → then trigger visible (open animation)
  useEffect(() => {
    if (open) {
      updateCoords();
      setMounted(true);
      // small delay so browser paints the initial state first
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      window.addEventListener("scroll", updateCoords, true);
      window.addEventListener("resize", updateCoords);
      return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", updateCoords, true);
        window.removeEventListener("resize", updateCoords);
      };
    } else {
      // Trigger close animation, then unmount after it finishes
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 300); // match duration
      return () => clearTimeout(timer);
    }
  }, [open, updateCoords]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (anchorRef.current && anchorRef.current.contains(e.target as Node))
        return;
      const portal = document.getElementById("portal-dropdown-active");
      if (portal && portal.contains(e.target as Node)) return;
      onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, onClose, anchorRef]);

  if (!mounted || typeof document === "undefined") return null;

  return createPortal(
    <div
      id="portal-dropdown-active"
      style={{
        position: "absolute",
        top: coords.top,
        left: coords.left,
        width: width ?? coords.w,
        zIndex: 9999,
        // Smooth animation via inline styles
        opacity: visible ? 1 : 0,
        transform: visible
          ? "scaleY(1) translateY(0)"
          : "scaleY(0.95) translateY(-6px)",
        transformOrigin: "top",
        transition:
          "opacity 280ms cubic-bezier(0.22,1,0.36,1), transform 280ms cubic-bezier(0.22,1,0.36,1)",
        willChange: "opacity, transform",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {children}
    </div>,
    document.body,
  );
}
