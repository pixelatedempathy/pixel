import React, { useCallback, useEffect, useState } from 'react'
import { X } from 'lucide-react'

import { cn } from '../../lib/utils'
import { Button } from './button'
import FocusTrap from '../accessibility/FocusTrap'

// Custom Dialog Context
interface DialogContextType {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextType>({
  open: false,
  onOpenChange: () => {}
})

// Shadcn/UI Dialog Components
interface DialogRootProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

const Dialog = ({ open = false, onOpenChange, children }: DialogRootProps) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleOpenChange = useCallback((newOpen: boolean) => {
    setIsOpen(newOpen)
    onOpenChange?.(newOpen)
  }, [onOpenChange])

  return (
    <DialogContext.Provider value={{ open: isOpen, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  )
}

const DialogTrigger = ({ children, ...props }: React.ComponentProps<'button'>) => {
  const { onOpenChange } = React.useContext(DialogContext)
  
  return (
    <button onClick={() => onOpenChange(true)} {...props}>
      {children}
    </button>
  )
}

const DialogPortal = ({ children }: { children: React.ReactNode }) => {
  const { open } = React.useContext(DialogContext)
  
  if (!open) {
    return null
  }
  
  return (
    <div className="fixed inset-0 z-50">
      {children}
    </div>
  )
}

const DialogOverlay = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, ...props }, ref) => {
  const { onOpenChange } = React.useContext(DialogContext)
  
  return (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0',
        className,
      )}
      onClick={() => onOpenChange(false)}
      {...props}
    />
  )
})
DialogOverlay.displayName = 'DialogOverlay'

const DialogContent = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(({ className, children, ...props }, ref) => {
  const { open, onOpenChange } = React.useContext(DialogContext)
  
  if (!open) {
    return null
  }
  
  return (
    <DialogPortal>
      <DialogOverlay />
      <div
        ref={ref}
        className={cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 animate-in fade-in-0 zoom-in-95 slide-in-from-left-1/2 slide-in-from-top-[48%] sm:rounded-lg',
          className,
        )}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === 'Space') {
            e.preventDefault();
            e.stopPropagation();
          }
        }}
        role="dialog"
        tabIndex={0}
        {...props}
      >
        {children}
        <button 
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          onClick={() => onOpenChange(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </DialogPortal>
  )
})
DialogContent.displayName = 'DialogContent'

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-1.5 text-center sm:text-left',
      className,
    )}
    {...props}
  />
)
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      className,
    )}
    {...props}
  />
)
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = React.forwardRef<HTMLHeadingElement, React.ComponentProps<'h2'>>(
  ({ className, children, ...props }, ref) => {
    if (!children) {
      return null; // Don't render empty headings
    }
    return (
      <h2
        ref={ref}
        className={cn(
          'text-lg font-semibold leading-none tracking-tight',
          className,
        )}
        {...props}
      >
        {children}
      </h2>
    );
  }
);
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = React.forwardRef<HTMLParagraphElement, React.ComponentProps<'p'>>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
}

export interface DialogProps {
  /** Whether the dialog is open */
  isOpen: boolean
  /** Function to call when the dialog is closed */
  onClose: () => void
  /** Dialog title */
  title?: React.ReactNode
  /** Dialog description/content */
  children: React.ReactNode
  /** Footer content */
  footer?: React.ReactNode
  /** Whether to show a close button in the header */
  showCloseButton?: boolean
  /** Additional className for the dialog */
  className?: string
  /** Additional className for the backdrop */
  backdropClassName?: string
  /** Maximum width of the dialog */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
  /** Whether to close when clicking outside */
  closeOnOutsideClick?: boolean
  /** Whether to close when pressing escape */
  closeOnEsc?: boolean
}

export interface ConfirmDialogProps
  extends Omit<DialogProps, 'footer' | 'children'> {
  /** Message to show in the dialog */
  message: React.ReactNode
  /** Confirm button text */
  confirmText?: string
  /** Cancel button text */
  cancelText?: string
  /** Confirm button variant */
  confirmVariant?: 'primary' | 'danger'
  /** Function to call when confirmed */
  onConfirm: () => void
  /** Dialog content */
  children?: React.ReactNode
  /** Additional props for the confirm button */
  confirmButtonProps?: Record<string, unknown>
  /** Additional props for the cancel button */
  cancelButtonProps?: Record<string, unknown>
  /** Whether this is a dangerous action */
  isDanger?: boolean
  /** Whether the dialog is in loading state */
  loading?: boolean
}

export function DialogModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  showCloseButton = true,
  className = '',
  backdropClassName = '',
  maxWidth = 'md',
  closeOnOutsideClick = true,
  closeOnEsc = true,
}: DialogProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && closeOnEsc && e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose, closeOnEsc])

  // Prevent body scrolling when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Handle outside click
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (closeOnOutsideClick && e.target === e.currentTarget) {
        onClose()
      }
    },
    [closeOnOutsideClick, onClose],
  )

  // Max width classes
  const maxWidthClasses = {
    xs: 'max-w-xs',
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    full: 'max-w-full',
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4',
        backdropClassName,
      )}
      onClick={handleBackdropClick}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleBackdropClick(e as unknown as React.MouseEvent<HTMLDivElement>)
        }
      }}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <FocusTrap active={isOpen}>
        <div
          className={cn(
            'w-full rounded-lg bg-white shadow-lg dark:bg-gray-800',
            'overflow-hidden flex flex-col',
            maxWidthClasses[maxWidth],
            className,
          )}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation()
            }
          }}
          tabIndex={-1}
        >
          {/* Header */}
          {title && (
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {title}
              </h3>
              {showCloseButton && (
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
                  onClick={onClose}
                  aria-label="Close dialog"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-700">
              {footer}
            </div>
          )}
        </div>
      </FocusTrap>
    </div>
  )
}

export function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title,
  children,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  confirmButtonProps = {},
  cancelButtonProps = {},
  isDanger = false,
  loading = false,
  className = '',
  backdropClassName = '',
  maxWidth = 'sm',
  closeOnOutsideClick = true,
}: ConfirmDialogProps) {
  const [isConfirming, setIsConfirming] = useState(false)

  const handleConfirm = useCallback(async () => {
    setIsConfirming(true)
    try {
      await onConfirm()
    } catch (error) {
      console.error('Error in confirmation handler:', error)
    } finally {
      setIsConfirming(false)
      onClose()
    }
  }, [onConfirm, onClose])

  if (!isOpen) {
    return null
  }

  const isLoading = loading || isConfirming

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4',
        backdropClassName,
      )}
      onClick={
        closeOnOutsideClick && isLoading
          ? (e: React.MouseEvent) => e.stopPropagation()
          : onClose
      }
      onKeyDown={(e: React.KeyboardEvent) => {
        if (
          (e.key === 'Enter' || e.key === ' ') &&
          closeOnOutsideClick &&
          !isLoading
        ) {
          e.preventDefault()
          onClose()
        }
      }}
      tabIndex={-1}
      aria-modal="true"
      role="alertdialog"
    >
      <FocusTrap active={isOpen}>
        <div
          className={cn(
            'w-full rounded-lg bg-white shadow-lg dark:bg-gray-800',
            'overflow-hidden flex flex-col',
            maxWidth === 'sm' ? 'max-w-sm' : 'max-w-md',
            className,
          )}
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
          onKeyDown={(e: React.KeyboardEvent) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation()
            }
          }}
          tabIndex={-1}
        >
          {/* Header */}
          {title && (
            <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                {title}
              </h3>
            </div>
          )}

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">{children}</div>

          {/* Footer */}
          <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4 dark:border-gray-700">
            <Button
              variant="outline"
              onClick={onClose}
              disabled={isLoading}
              {...cancelButtonProps}
            >
              {cancelText}
            </Button>
            <Button
              variant={isDanger ? 'destructive' : 'default'}
              onClick={handleConfirm}
              disabled={isLoading}
              {...confirmButtonProps}
            >
              {isLoading && (
                <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              )}
              {confirmText}
            </Button>
          </div>
        </div>
      </FocusTrap>
    </div>
  )
}

/**
 * Custom hook for using a dialog
 */
export function useDialog(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return { isOpen, open, close, toggle }
}

/**
 * Custom hook for using a confirm dialog
 */
export function useConfirmDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [confirmProps, setConfirmProps] = useState<
    Omit<ConfirmDialogProps, 'isOpen' | 'onClose'>
  >({
    title: 'Confirm',
    message: '',
    onConfirm: () => null,
  })

  const confirm = useCallback(
    (props: Omit<ConfirmDialogProps, 'isOpen' | 'onClose'>) => {
      setConfirmProps(props)
      setIsOpen(true)

      return new Promise<boolean>((resolve) => {
        setConfirmProps({
          ...props,
          onConfirm: () => {
            if (props.onConfirm) {
              props.onConfirm()
            }
            resolve(true)
          },
        })
      })
    },
    [],
  )

  const close = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    isOpen,
    confirm,
    close,
    confirmProps,
  }
}

export default Dialog
