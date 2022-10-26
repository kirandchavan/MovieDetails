//Network Images

// To build an image URL, you will need 3 pieces of data. 
// The base_url, size and file_path. 
// Simply combine them all and you will have a fully qualified URL. Here’s an example URL:

const type = "uri"
const ImagePath = (path, width = 'w500') =>
    path ? { [type]: `https://image.tmdb.org/t/p/${width}${path}` } : '';

export default ImagePath;
