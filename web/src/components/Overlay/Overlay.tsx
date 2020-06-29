// Overlay:
// Navigation Overlay
// https://timcchang.com/blog/building-an-accessible-modal-using-hooks-and-higher-ordered-components/

// TODO: https://upmostly.com/tutorials/modal-components-react-custom-hooks

// ___________________________________________________________________

import React from 'react'
import ReactDOM from 'react-dom'

import theme from '../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

type Props = {
  mainRef?: React.RefObject<HTMLDivElement>
  className: string
  children: React.ReactNode
  root?: string
  id?: string
  isOpen: boolean
  handleExit: () => any
  focusAfterExit?: HTMLElement
}

// ___________________________________________________________________

const Overlay: React.FC<Props> = ({
  children,
  id = 'nav-root',
  root,
  isOpen,
  handleExit,
  focusAfterExit,
  mainRef,
  className
}) => {
  const [hasUpdated, forceUpdate] = React.useState(false)

  const exitButton = React.useRef<HTMLButtonElement>(null)
  const overlay = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    overlay.current = document.createElement('div')
    overlay.current.id = id

    if (!document.body.querySelector(`#${id}`)) {
      document.body.prepend(overlay.current)
    }

    if (!hasUpdated) forceUpdate(true)

    return () => {
      if (overlay.current) document.body.removeChild(overlay.current)
    }
  }, [])

  const initialRender = React.useRef(false)
  React.useEffect(() => {
    const rootContainer = document.querySelector(`#${root}`)
    const modalContainer = document.querySelector(`#${id}`)

    // const capturePosition = () => {
    //   const cachedPosition = window.pageYOffset
    //   return {
    //     freeze: () => {
    //       mainRef.current.style = `position: relative; top: ${cachedPosition *
    //         -1}px; width: 100%;`
    //     },
    //     unfreeze: () => {
    //       mainRef.current.removeAttribute('style')
    //       window.scrollTo({
    //         top: cachedPosition
    //       })
    //     }
    //   }
    // }

    const toggleTabIndex = (type: 'on' | 'off', container: Element) => {
      const focusableElements = container.querySelectorAll(
        'button, a, input, textarea, select'
      )
      focusableElements.forEach((element: Element) => {
        if (type === 'on') {
          element.removeAttribute('tabindex')
        } else {
          element.setAttribute('tabindex', '-1')
        }
      })
    }

    const handleKeyDown = (e: any) => {
      if (e.key === 'Escape') {
        handleExit()
      }
    }

    // const { freeze, unfreeze } = capturePosition()

    if (isOpen) {
      if (exitButton.current) exitButton.current.focus()
      if (modalContainer) toggleTabIndex('on', modalContainer)
      if (rootContainer) toggleTabIndex('off', rootContainer)
      window.addEventListener('keydown', handleKeyDown)
      // freeze()
    } else {
      if (modalContainer) toggleTabIndex('off', modalContainer)
      if (rootContainer) toggleTabIndex('on', rootContainer)
      window.removeEventListener('keydown', handleKeyDown)
      // unfreeze()
      if (focusAfterExit) focusAfterExit.focus()

      if (!initialRender.current) {
        initialRender.current = true
        setTimeout(() => {
          if (modalContainer) toggleTabIndex('off', modalContainer)
        }, 0)
      }
    }

    return () => {
      if (isOpen) {
        window.removeEventListener('keydown', handleKeyDown)
        // unfreeze()
      }
    }
  }, [isOpen])

  if (overlay.current) {
    return ReactDOM.createPortal(
      <S.Overlay className={className}>{children}</S.Overlay>,
      overlay.current
    )
  }
  return null
}

export default Overlay

// ___________________________________________________________________
