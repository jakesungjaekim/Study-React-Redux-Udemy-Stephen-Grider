import axios from 'axios';

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID nYg5FUscjor5cOFcHxXlNJiNgqiGV0Aef7DyuL3Ya0U'
    },
    params: {
      query: term
    }
  })

  return response.data.results
}

export default searchImages;
