export const excerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY
  }
}

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY
  }
}

export const fetchData = async (url, options) => {
  const response = await fetch(url, options)
  const data = await response.json()
  return data
}