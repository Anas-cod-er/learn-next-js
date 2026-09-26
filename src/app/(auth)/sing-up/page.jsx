'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from '../login/login.module.css'

export default function SignUpPage() {
  const [message, setMessage] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    if (formData.get('password') !== formData.get('confirmPassword')) {
      setMessage('Those passwords do not match. Please try again.')
      return
    }

    setMessage('Account creation is not connected yet. Your details were not sent.')
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
          <h1>Good things begin with a little space.</h1>
          <p>Create your space and make your next idea happen.</p>
        </div>
        <span className={styles.visualCaption}>A little space to think clearly.</span>
      </div>

      <div className={styles.formPanel}>
        <div className={styles.formWrap}>
          <div className={styles.mobileBrand}>
            <span className={styles.brandMark} aria-hidden="true">T</span>
            <span>Tailblocks</span>
          </div>
          <span className={styles.formEyebrow}>START WITH A CLEAN SLATE</span>
          <h2>Create your account.</h2>
          <p className={styles.intro}>A thoughtful workspace is a few details away.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Alex Morgan"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="At least 8 characters"
              autoComplete="new-password"
              minLength={8}
              required
            />

            <label htmlFor="confirm-password">Confirm password</label>
            <input
              id="confirm-password"
              name="confirmPassword"
              type="password"
              placeholder="Enter your password again"
              autoComplete="new-password"
              minLength={8}
              required
            />

            <button className={styles.submitButton} type="submit">
              Create account <span aria-hidden="true">&rarr;</span>
            </button>
            <p className={styles.message} role="status" aria-live="polite">{message}</p>
          </form>

          <p className={styles.signup}>
            Already have an account? <Link href="/login">Sign in</Link>
          </p>
          <p className={styles.legal}>By creating an account, you agree to our <Link href="/contact">Terms</Link> and <Link href="/contact">Privacy Policy</Link>.</p>
        </div>
      </div>
    </section>
  )
}