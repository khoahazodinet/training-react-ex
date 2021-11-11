import Api from "./axiosClient";

const countryApi = {
  getAll: () => {
    const url = '/all';
    return Api.get(url);
  },
  getByName: (name)=>{
    const url = '/name/'+name;
    return Api.get(url);
  },
}

export default countryApi;
