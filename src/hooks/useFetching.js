import { useState } from "react"

export const useFetching = (callback) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetcing = async () => {
    try {
      setLoading(true)
      await callback()
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  return [fetcing, loading, error]
}