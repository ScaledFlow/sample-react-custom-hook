import { useState, useEffect } from 'react'

function getSaveValue(key, initialValue) {
  console.log("getSaveValue")
  const savedValue = JSON.parse(localStorage.getItem(key))
  if (savedValue) 
  return savedValue

  if (initialValue instanceof Function) 
  console.log("test")
  return initialValue

}

export default function useLocalStorage(key, initialValue) {
  console.log("useLocalStorage")
  const [ value, setValue ] = useState(() => {
    return getSaveValue(key, initialValue)
  })

  useEffect(() => {
    console.log("useEffect")
    localStorage.setItem(key, JSON.stringify(value))
  }, [value])

  return [value, setValue]
}