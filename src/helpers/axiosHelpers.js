import axios from "axios";


let url = "https://api.thecatapi.com/v1/images/search";

const axiosHelpers = () => {
    
    let urlData = url;

    return axios.get(urlData)
   
};
export default axiosHelpers;


const baseUrl = 'https://api.thecatapi.com/v1/images/'


export const axiosMethods = ( data, method = 'GET' ) => {

   
    if ( method === 'GET' ) {
        return axios({
            method: 'get',
            url: `${baseUrl}?limit=10`,
            headers: {
                'x-api-key': 'live_Wf1BGm0EaUJ97JmS7FPhKAJert5wdXLSjWAfsWqJP7g7lggWCEC8ByTf29zqEYml'
            }
        });
    } else {
        return axios({
            method: 'post',
            url: `${baseUrl}upload`,
            data,
            headers: {
                'x-api-key': 'live_Wf1BGm0EaUJ97JmS7FPhKAJert5wdXLSjWAfsWqJP7g7lggWCEC8ByTf29zqEYml'
            }
        });
    }
}