'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './login.module.css'

export default function LoginPage() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('Sign-in is not connected yet. Your details were not sent.')
  }

  return (
    <section className={styles.loginPage}>
      <div className={styles.visualPanel}>
        <Link className={styles.brand} href="/" aria-label="Tailblocks home">
          <span className={styles.brandMark} aria-hidden="true">T</span>
          <span>Tailblocks</span>
        </Link>
        <div className={styles.visualCopy}>
          <span className={styles.eyebrow}>A fresh start, every day</span>
          <h1>Make room for your next good idea.</h1>
          <p>Your workspace is waiting right where you left it.</p>
        </div>
        <span className={styles.visualCaption}>A little space to think clearly.</span>
      </div>

      <div className={styles.formPanel}>
        <div className={styles.formWrap}>
          <div className={styles.mobileBrand}>
            <span className={styles.brandMark} aria-hidden="true">T</span>
            <span>Tailblocks</span>
          </div>
          <span className={styles.formEyebrow}>YOUR SPACE, JUST AS YOU LEFT IT</span>
          <h2>Welcome back.</h2>
          <p className={styles.intro}>Sign in to pick up where you left off.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <div className={styles.passwordLabel}>
              <label htmlFor="password">Password</label>
              <button
                className={styles.textButton}
                type="button"
                onClick={() => setMessage('Password reset is not available yet.')}
              >
                Forgot password?
              </button>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              required
            />

            <label className={styles.remember}>
              <input type="checkbox" name="remember" />
              <span>Keep me signed in</span>
            </label>

            <button className={styles.submitButton} type="submit">
              Sign in <span aria-hidden="true">&rarr;</span>
            </button>
            <p className={styles.message} role="status" aria-live="polite">{message}</p>
          </form>

          <p className={styles.signup}>
            New to Tailblocks? <Link href="/sing-up">Create an account</Link>
          </p>
          <p className={styles.legal}>By continuing, you agree to our <Link href="/contact">Terms</Link> and <Link href="/contact">Privacy Policy</Link>.</p>
        </div>
      </div>
    </section>
  )
}