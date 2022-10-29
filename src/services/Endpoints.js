import Config from "react-native-config"

const { KEY } = Config

export const TRAINDING_MOVIES = `/3/trending/movie/day?api_key=${KEY}`

export const MOVIES_POPULAR = `/3/movie/popular?api_key=${KEY}&language=en-US`
