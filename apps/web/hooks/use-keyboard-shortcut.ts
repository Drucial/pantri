import { useCallback, useEffect, useRef } from "react";

export type KeyboardShortcut = {
  key: string;
  metaKey?: boolean;
  ctrlKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  preventDefault?: boolean;
  stopPropagation?: boolean;
};

export type KeyboardShortcutHandler = (event: KeyboardEvent) => void;

export type UseKeyboardShortcutOptions = {
  /** Whether the shortcut is active (default: true) */
  enabled?: boolean;
  /** Target element for the shortcut (default: document) */
  target?: Document | HTMLElement;
  /** Event type to listen for (default: 'keydown') */
  eventType?: "keydown" | "keyup";
};

/**
 * Custom hook for managing keyboard shortcuts
 *
 * @param shortcut - The keyboard shortcut configuration
 * @param handler - Function to call when shortcut is triggered
 * @param options - Additional options for the shortcut
 *
 * @example
 * ```tsx
 * // Simple Cmd+K shortcut
 * useKeyboardShortcut(
 *   { key: 'k', metaKey: true },
 *   () => console.log('Cmd+K pressed')
 * );
 *
 * // Complex shortcut with options
 * useKeyboardShortcut(
 *   { key: 's', ctrlKey: true, shiftKey: true },
 *   () => saveDocument(),
 *   { enabled: isEditing, target: document }
 * );
 * ```
 */
export function useKeyboardShortcut(
  shortcut: KeyboardShortcut,
  handler: KeyboardShortcutHandler,
  options: UseKeyboardShortcutOptions = {}
) {
  const { enabled = true, target, eventType = "keydown" } = options;

  // Use ref to avoid recreating the handler on every render
  const handlerRef = useRef(handler);
  const shortcutRef = useRef(shortcut);

  // Update refs when dependencies change
  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    shortcutRef.current = shortcut;
  }, [shortcut]);

  const handleKeyEvent = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      const currentShortcut = shortcutRef.current;

      // Check if the pressed key matches
      if (event.key.toLowerCase() !== currentShortcut.key.toLowerCase()) {
        return;
      }

      // Check modifier keys - for cross-platform shortcuts, either meta OR ctrl is acceptable
      if (currentShortcut.metaKey && currentShortcut.ctrlKey) {
        // Cross-platform shortcut: accept either Cmd (Mac) or Ctrl (Windows/Linux)
        if (!event.metaKey && !event.ctrlKey) {
          return;
        }
      } else {
        // Platform-specific shortcuts
        if (currentShortcut.metaKey && !event.metaKey) {
          return;
        }
        if (currentShortcut.ctrlKey && !event.ctrlKey) {
          return;
        }
      }

      if (currentShortcut.shiftKey && !event.shiftKey) return;
      if (currentShortcut.altKey && !event.altKey) return;

      // Prevent default behavior if requested
      if (currentShortcut.preventDefault !== false) {
        event.preventDefault();
      }

      // Stop propagation if requested
      if (currentShortcut.stopPropagation !== false) {
        event.stopPropagation();
      }

      // Call the handler
      handlerRef.current(event);
    },
    [enabled]
  );

  useEffect(() => {
    if (!enabled) return;

    // Only add event listeners on the client side
    if (typeof window === "undefined") return;

    const targetElement = target || document;
    targetElement.addEventListener(eventType, handleKeyEvent as EventListener);

    return () => {
      targetElement.removeEventListener(
        eventType,
        handleKeyEvent as EventListener
      );
    };
  }, [enabled, target, eventType, handleKeyEvent]);
}

/**
 * Hook for managing multiple keyboard shortcuts
 *
 * @param shortcuts - Array of shortcut configurations
 * @param options - Global options for all shortcuts
 *
 * @example
 * ```tsx
 * useKeyboardShortcuts([
 *   { shortcut: { key: 'k', metaKey: true }, handler: () => focusSearch() },
 *   { shortcut: { key: 'n', metaKey: true }, handler: () => newDocument() },
 *   { shortcut: { key: 's', ctrlKey: true }, handler: () => save() }
 * ]);
 * ```
 */
export function useKeyboardShortcuts(
  shortcuts: Array<{
    shortcut: KeyboardShortcut;
    handler: KeyboardShortcutHandler;
    options?: UseKeyboardShortcutOptions;
  }>,
  globalOptions: UseKeyboardShortcutOptions = {}
) {
  shortcuts.forEach(({ shortcut, handler, options = {} }) => {
    useKeyboardShortcut(shortcut, handler, { ...globalOptions, ...options });
  });
}

/**
 * Utility function to create keyboard shortcut configurations
 */
export const createShortcut = {
  /** Cmd+K (Mac) or Ctrl+K (Windows/Linux) */
  search: (): KeyboardShortcut => ({
    key: "f",
    metaKey: true,
    ctrlKey: true,
    preventDefault: true,
  }),

  /** Cmd+N (Mac) or Ctrl+N (Windows/Linux) */
  new: (): KeyboardShortcut => ({ key: "n", metaKey: true, ctrlKey: true }),

  /** Cmd+S (Mac) or Ctrl+S (Windows/Linux) */
  save: (): KeyboardShortcut => ({ key: "s", metaKey: true, ctrlKey: true }),

  /** Cmd+Z (Mac) or Ctrl+Z (Windows/Linux) */
  undo: (): KeyboardShortcut => ({ key: "z", metaKey: true, ctrlKey: true }),

  /** Cmd+Shift+Z (Mac) or Ctrl+Y (Windows/Linux) */
  redo: (): KeyboardShortcut => ({
    key: "z",
    metaKey: true,
    ctrlKey: true,
    shiftKey: true,
  }),

  /** Escape key */
  escape: (): KeyboardShortcut => ({ key: "Escape" }),

  /** Enter key */
  enter: (): KeyboardShortcut => ({ key: "Enter" }),

  /** Custom shortcut builder */
  custom: (
    key: string,
    modifiers: Partial<Omit<KeyboardShortcut, "key">> = {}
  ): KeyboardShortcut => ({
    key,
    ...modifiers,
  }),
};
