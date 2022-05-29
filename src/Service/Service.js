import axios from "axios"

export default function FetchRecords(){
    return axios.get('https://efuktshirts.com/products.json');
}