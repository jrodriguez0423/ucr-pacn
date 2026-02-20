import React from 'react'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          (c) UCR PACN - University of California, Riverside
          {' | '}
          <a className="social-link" href="https://www.instagram.com/ucrpacn/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1 1 0 1 1-1 1 1 1 0 0 1 1-1ZM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5Zm0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  )
}
