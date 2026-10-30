import { useEffect, useMemo, useState } from 'react'

function useFilterRoutes(routes, fromCity, toCity) {
  const [debouncedFrom, setDebouncedFrom] = useState('')
  const [debouncedTo, setDebouncedTo] = useState('')

  // Debounce — ძიება სრულდება 300 ms-ის შემდეგ.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedFrom(fromCity.trim())
      setDebouncedTo(toCity.trim())
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [fromCity, toCity])

  const isSearching =
    fromCity.trim() !== debouncedFrom ||
    toCity.trim() !== debouncedTo

  // მარშრუტების მემოიზებული ფილტრაცია.
  const filteredRoutes = useMemo(() => {
    const fromQuery = debouncedFrom.toLocaleLowerCase('ka')
    const toQuery = debouncedTo.toLocaleLowerCase('ka')

    return routes.filter((route) => {
      const fromMatches = route.from
        .toLocaleLowerCase('ka')
        .includes(fromQuery)

      const toMatches = route.to
        .toLocaleLowerCase('ka')
        .includes(toQuery)

      return fromMatches && toMatches
    })
  }, [routes, debouncedFrom, debouncedTo])

  return {
    filteredRoutes,
    isSearching,
  }
}

export default useFilterRoutes