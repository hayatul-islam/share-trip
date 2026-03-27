"use client";
import { CABIN_CLASSES, TRAVELLER_CONFIG } from "@/app/data";
import { CabinClass, TravellerCounts } from "@/app/types";
import { Button } from "@/components/ui/button";
import { ChevronDown, Minus, Plus } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalDropdownProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  width?: number;
}

export default function TravellerSelectors() {
  const [counts, setCounts] = useState<TravellerCounts>({
    adults: 1,
    children: 0,
    kids: 0,
    infants: 0,
  });
  const [cabin, setCabin] = useState<CabinClass>("Economy");

  return (
    <div className="flex items-center gap-1.5">
      <TravellerPicker counts={counts} onChange={setCounts} />
      <CabinClassSelector value={cabin} onChange={setCabin} />
    </div>
  );
}

function TravellerPicker({
  counts,
  onChange,
}: {
  counts: TravellerCounts;
  onChange: (counts: TravellerCounts) => void;
}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const total = Object.values(counts).reduce((a, b) => a + b, 0);
  const label = `${total} Traveller${total !== 1 ? "s" : ""}`;

  return (
    <div className="relative">
      <button
        ref={anchorRef}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2.5 rounded bg-primary/10
          text-primary text-sm font-medium hover:bg-blue-100 transition-colors select-none"
      >
        {label}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <PortalDropdown
        anchorRef={anchorRef}
        open={open}
        onClose={() => setOpen(false)}
        width={288}
      >
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4">
          <div className="flex flex-col gap-4">
            {TRAVELLER_CONFIG.map(({ key, label, sub, icon }) => {
              const Icon = icon;
              return (
                <div key={key} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-6 flex items-center justify-center">
                      <Icon className="w-4 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-900 font-normal">
                        {label}
                      </p>
                      <p className="text-xs text-gray-700">{sub}</p>
                    </div>
                  </div>
                  <Stepper
                    value={counts[key]}
                    min={key === "adults" ? 1 : 0}
                    onChange={(v) => onChange({ ...counts, [key]: v })}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4">
            <Button
              onClick={() => setOpen(false)}
              variant="ghost"
              className="w-full text-primary !border border-primary py-5 font-semibold hover:bg-primary/10 rounded"
            >
              Done
            </Button>
          </div>
        </div>
      </PortalDropdown>
    </div>
  );
}

function CabinClassSelector({
  value,
  onChange,
}: {
  value: CabinClass;
  onChange: (c: CabinClass) => void;
}) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative">
      <button
        ref={anchorRef}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-3 py-2.5 rounded bg-primary/10
          text-primary text-sm font-medium hover:bg-blue-100 transition-colors select-none"
      >
        {value}
        <ChevronDown
          size={14}
          strokeWidth={2.5}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <PortalDropdown
        anchorRef={anchorRef}
        open={open}
        onClose={() => setOpen(false)}
        width={208}
      >
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2">
          {CABIN_CLASSES.map((cabin) => {
            const isSelected = cabin === value;
            return (
              <button
                key={cabin}
                onClick={() => {
                  onChange(cabin);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors
                  ${isSelected ? "bg-primary/10 text-primary font-medium" : "text-gray-700 hover:bg-gray-50"}`}
              >
                <span
                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0
                  ${isSelected ? "border-primary" : "border-gray-300"}`}
                >
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  )}
                </span>
                {cabin}
              </button>
            );
          })}
        </div>
      </PortalDropdown>
    </div>
  );
}

function Stepper({
  value,
  min = 0,
  max = 7,
  onChange,
}: {
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="w-6 h-6 rounded-full border border-primary flex items-center justify-center
          text-primary/100 hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Minus size={13} strokeWidth={2.5} />
      </button>
      <span className="w-4 text-center text-sm font-semibold text-gray-700 select-none">
        {value}
      </span>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="w-6 h-6 rounded-full border border-primary bg-white flex items-center justify-center
          text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
      >
        <Plus size={13} strokeWidth={2.5} />
      </button>
    </div>
  );
}

function PortalDropdown({
  anchorRef,
  open,
  onClose,
  children,
  width,
}: PortalDropdownProps) {
  const [coords, setCoords] = useState({ top: 0, left: 0, w: 0 });

  const updateCoords = useCallback(() => {
    if (!anchorRef.current) return;
    const rect = anchorRef.current.getBoundingClientRect();
    setCoords({
      top: rect.bottom + window.scrollY + 4,
      left: rect.left + window.scrollX,
      w: rect.width,
    });
  }, [anchorRef]);

  useEffect(() => {
    if (open) {
      updateCoords();
      window.addEventListener("scroll", updateCoords, true);
      window.addEventListener("resize", updateCoords);
    }
    return () => {
      window.removeEventListener("scroll", updateCoords, true);
      window.removeEventListener("resize", updateCoords);
    };
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

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      id="portal-dropdown-active"
      style={{
        position: "absolute",
        top: coords.top,
        left: coords.left,
        width: width ?? coords.w,
        zIndex: 9999,
      }}
    >
      {children}
    </div>,
    document.body,
  );
}
