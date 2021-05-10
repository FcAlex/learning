import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
  const [state, setState] = useState({
    data: null,
    loading: true
  })

  useEffect(() => {
    fetch(url, { method })
      .then(resp => resp.json())
      .then(json => setState({ data: json, loading: false }))
  }, [url, method])

  return state
}