import { INITIAL_ROOMS } from "@/app/data";
import { RoomConfig } from "@/app/types";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export interface CounterProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
  min: number;
}

const GuestsRoomsPicker: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [rooms, setRooms] = useState<RoomConfig[]>(INITIAL_ROOMS);
  const [activeRoomId, setActiveRoomId] = useState<number>(
    INITIAL_ROOMS[0]?.id,
  );
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0 });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY + 8,
        left: rect.right + window.scrollX - 350,
      });
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        triggerRef.current?.contains(e.target as Node) ||
        dropdownRef.current?.contains(e.target as Node)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const totalGuests = rooms.reduce((s, r) => s + r.adults + r.children, 0);
  const totalChildren = rooms.reduce((s, r) => s + r.children, 0);

  const reset = () => {
    setRooms(INITIAL_ROOMS);
    setActiveRoomId(INITIAL_ROOMS[0]?.id);
  };

  const update = (id: number, field: "adults" | "children", delta: number) => {
    setRooms((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const next = r[field] + delta;
        if (field === "adults" && next < 1) return r;
        if (field === "children" && next < 0) return r;
        if (field === "children") {
          const newChildAges =
            delta > 0 ? [...r.childAges, 5] : r.childAges.slice(0, next);
          return { ...r, children: next, childAges: newChildAges };
        }
        return { ...r, [field]: next };
      }),
    );
  };

  const updateChildAge = (roomId: number, childIdx: number, age: number) => {
    setRooms((prev) =>
      prev.map((r) => {
        if (r.id !== roomId) return r;
        const newAges = [...r.childAges];
        newAges[childIdx] = age;
        return { ...r, childAges: newAges };
      }),
    );
  };

  const addRoom = () => {
    const newRoom: RoomConfig = {
      id: Date.now(),
      adults: 2,
      children: 0,
      childAges: [],
    };
    setRooms((prev) => [...prev, newRoom]);
    setActiveRoomId(newRoom.id);
  };

  const removeRoom = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setRooms((prev) => {
      const next = prev.filter((r) => r.id !== id);
      if (activeRoomId === id && next.length > 0) {
        setActiveRoomId(next[next.length - 1].id);
      }
      return next;
    });
  };

  const toggleRoom = (id: number) => {
    setActiveRoomId((prev) => (prev === id ? -1 : id));
  };

  const dropdown = open ? (
    <div
      ref={dropdownRef}
      style={{
        position: "absolute",
        top: dropdownPos.top,
        left: dropdownPos.left,
        width: 350,
        zIndex: 9999,
      }}
      className="bg-white rounded border border-gray-100 shadow overflow-hidden"
    >
      <div className="px-5 pt-4 pb-3 flex items-start justify-between">
        <div>
          <p className="text-[16px] font-medium text-gray-900">
            Guest's &amp; Rooms
          </p>
          <p className="text-xs text-gray-700 mt-0.5">
            Choose a person to join you on your journey
          </p>
        </div>
        <button
          onClick={reset}
          className="text-xs font-semibold text-white bg-primary hover:bg-primary/90 px-3 py-1.5 rounded transition-colors mt-0.5"
        >
          Reset
        </button>
      </div>

      <div className="px-4 pb-2 max-h-[460px] overflow-y-auto space-y-0">
        {rooms.map((room, idx) => (
          <div
            key={room.id}
            className="border border-gray-100 rounded mb-2 overflow-hidden"
          >
            <button
              onClick={() => toggleRoom(room.id)}
              className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                activeRoomId === room.id
                  ? "bg-primary/5"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <span className="text-sm font-medium text-gray-700">
                Room {idx + 1}
              </span>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-700">
                  {room.adults} Adult{room.adults !== 1 ? "s" : ""},{" "}
                  {room.children} Child{room.children !== 1 ? "ren" : ""}
                </span>
                {/* Separator */}
                <span className="w-px h-4 bg-gray-200" />
                {/* Trash icon — only when more than 1 room */}
                {rooms.length > 1 ? (
                  <span
                    role="button"
                    onClick={(e) => removeRoom(e, room.id)}
                    className="text-red-400 hover:text-red-600 transition-colors p-0.5"
                  >
                    <Trash2 size={14} />
                  </span>
                ) : (
                  <span className="w-[18px]" />
                )}
              </div>
            </button>

            {activeRoomId === room.id && (
              <div className="px-4 pt-3 pb-4 space-y-4 border-t border-gray-100">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">Adults</p>
                    <p className="text-xs text-gray-700">17+ years</p>
                  </div>
                  <Counter
                    value={room.adults}
                    onDecrement={() => update(room.id, "adults", -1)}
                    onIncrement={() => update(room.id, "adults", 1)}
                    min={1}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      Children
                    </p>
                    <p className="text-xs text-gray-700">1 - 17 years</p>
                  </div>
                  <Counter
                    value={room.children}
                    onDecrement={() => update(room.id, "children", -1)}
                    onIncrement={() => update(room.id, "children", 1)}
                    min={0}
                  />
                </div>

                {room.children > 0 && (
                  <div className="space-y-2 pt-1 border-t border-gray-100">
                    {room.childAges.map((age, childIdx) => (
                      <div
                        key={childIdx}
                        className="flex items-center justify-between"
                      >
                        <p className="text-sm text-gray-600">
                          Age of Child {childIdx + 1}
                        </p>
                        <div className="relative">
                          <select
                            value={age}
                            onChange={(e) =>
                              updateChildAge(
                                room.id,
                                childIdx,
                                Number(e.target.value),
                              )
                            }
                            className="appearance-none text-sm font-semibold text-gray-800 bg-white pl-3 pr-8 py-1.5 cursor-pointer focus:outline-none"
                          >
                            {Array.from({ length: 17 }, (_, i) => i + 1).map(
                              (y) => (
                                <option key={y} value={y}>
                                  {String(y).padStart(2, "0")} Years
                                </option>
                              ),
                            )}
                          </select>
                          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 text-xs">
                            ▾
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="px-4 pb-4 pt-1">
        <button
          onClick={addRoom}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white font-medium text-sm transition-colors duration-150"
        >
          <Plus size={20} strokeWidth={2.5} />
          Add another Room
        </button>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-2.5 px-4 h-[56px] hover:bg-gray-50 transition-colors text-gray-800 rounded-lg border border-gray-200"
      >
        <h4 className="text-lg font-medium uppercase tracking-wider">
          {String(totalGuests).padStart(2, "0")}
        </h4>
        <div className="w-px border-l border-gray-300 h-7 shrink-0" />
        <div className="overflow-hidden">
          <p className="text-[15px] font-medium text-gray-800 leading-none truncate">
            Guests{" "}
            {totalChildren > 0 && (
              <span className="font-normal">({totalChildren} children)</span>
            )}
          </p>
          <p className="text-left text-[11px] text-gray-500 mt-0.5 truncate">
            {rooms.length} Room{rooms.length > 1 ? "s" : ""}
          </p>
        </div>
      </button>

      {typeof window !== "undefined" && createPortal(dropdown, document.body)}
    </>
  );
};

export default GuestsRoomsPicker;

const Counter: React.FC<CounterProps> = ({
  value,
  onDecrement,
  onIncrement,
  min,
}) => (
  <div className="flex items-center gap-2">
    <button
      onClick={onDecrement}
      disabled={value <= min}
      className="w-6 h-6 rounded-full border border-primary flex items-center justify-center
          text-primary/100 hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
      <Minus size={13} strokeWidth={2.5} />
    </button>
    <span className="w-5 text-center text-sm font-bold text-gray-800">
      {value}
    </span>
    <button
      onClick={onIncrement}
      className="w-6 h-6 rounded-full border border-primary bg-white flex items-center justify-center
          text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
    >
      <Plus size={13} strokeWidth={2.5} />
    </button>
  </div>
);
