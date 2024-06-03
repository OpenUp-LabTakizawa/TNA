'use client'

import { DownloadBtn } from '@/app/components/downloadBtn'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import type React from 'react'

export function Modal({
  children,
}: { children: React.ReactNode }): React.JSX.Element {
  const router = useRouter()
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  })

  function onDismiss(): void {
    router.back()
  }

  return (
    <dialog ref={dialogRef} className="modal" onClose={onDismiss}>
      <div className="modal-box">
        <button
          type="button"
          onClick={onDismiss}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:scale-110"
          aria-label="閉じる"
        >
          <XMarkIcon />
        </button>
        {children}
        <div className="modal-action">
          <DownloadBtn />
          <button
            type="button"
            onClick={onDismiss}
            className="btn justify-self-end hover:scale-110"
          >
            <XMarkIcon className="size-6" />
            閉じる
          </button>
        </div>
      </div>
    </dialog>
  )
}
