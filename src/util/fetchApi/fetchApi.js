import axios from "axios";

export const fetchSearchData = async(searchText='', pageNumber=1) => {
    const url = `https://api-r1.tagalys.com/v1/search?q=${searchText || 'tops'}&page=${pageNumber}`;

    const data = {
        'per_page': '16',
        'request':  ["total", 'results', 'details','sort_options', 'filters', 'sort_options'],
        'identification[client_code]': '92D5626DBFD74912',
        'identification[api_key]': '5dff8cbc1c833937d5b6ff490de6639b',
        'identification[store_id]': '77435339050'
    }

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: url,
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: data
      };

      try {
        const response = await axios.request(config);
        return response.data;
      } catch (error) {
         throw new Error('Invalid Request');
      }
}
