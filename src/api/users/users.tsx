import React, { useCallback } from 'react'

// on app load, look for token in localStorage
// if token, re-auth with existing token and get user data
// if no token, redirect to login page

// don't show nothin (show a throbber) till auth response comes back

export const DeleteButton = () => {
  const unregister = useCallback(() => {
    deleteUser(2)
  }, [])

  return <button onClick={unregister}>Delete User</button>
}

export function attemptSignin({ email, password }) {
  return fetch('http://localhost:3001/users/attemptSignin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then((response) => {
    return response.text()
  })
}

export function createUser({ email, password, user_id }) {
  return fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password, user_id })
  }).then((response) => response.text())
}

export function deleteUser(id) {
  fetch(`http://localhost:3001/users/${id}`, {
    method: 'DELETE'
  })
    .then((response) => {
      return response.text()
    })
    .then((data) => {
      alert(data)
    })
}

export function getUser(email) {
  return fetch('http://localhost:3001/users/getUser', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  }).then((response) => response.text())
}

// import React, {useState, useEffect} from 'react';
