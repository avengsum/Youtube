export const Api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_API_KEY}`;

export const  suggestionApi = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";