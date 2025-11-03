import React, { useState } from "react"
const PasswordProtected = ({ children, correctPassword = "servane2024" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (password === correctPassword) {
      setIsAuthenticated(true)
      setError(false)
    } else {
      setError(true)
      setPassword("")
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="password-container">
      <form onSubmit={handleSubmit} className="password-form">
        <h2>Password Required</h2>
        <p>As per the artist's request, the works and inventory are private and requires a password.</p>
        <p>Please enter the password to view the artworks.</p>
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter password"
          className="password-input"
          autoFocus
        />
        {error && <p className="password-error">Incorrect password. Please try again.</p>}
        <button type="submit" className="password-submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default PasswordProtected

