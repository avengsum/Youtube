const key = import.meta.env.VITE_APIKEY

export const Api = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${key}`;