import { createContext, useContext, useState } from "react";

const ToastContext = createContext(() => {});

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const [type, setType] = useState("");

  const showToast = (message, type) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    setToasts((current) => [...current, { id, message, type }]);
    setType(type);
    console.log(id);

    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 1000);
  };

  return (
    <ToastContext.Provider value={showToast}>
      {children}
      <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto max-w-sm rounded-2xl border border-slate-200 ${type === "add" ? "bg-green-400" : "bg-red-400"} px-4 py-3 shadow-xl backdrop-blur-sm transition duration-200`}
          >
            <p className="text-sm font-medium text-slate-900">
              {toast.message}
            </p>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
