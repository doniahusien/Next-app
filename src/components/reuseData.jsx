import useSWR from 'swr'

export function ReUse() {
  const { data, error } = useSWR('https://jsonplaceholder.typicode.com/comments?limit=5', fetcher)

  return {
    data,
    isLoading: !data && !error,
    isError: error
  }
}

async function fetcher(url) {
  const response = await fetch(url)
  const data = await response.json()
  return data
}