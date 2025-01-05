import axios from 'axios';

export default class apiService {
    _baseUrl = import.meta.env.VITE_API_LOCATION;


    constructor(token) {
        this._token = token;
        this.generateConfig();
    }


    generateConfig() {
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        };
        this._config = config;
    }

    postCreateCollection(payload) {

        return axios.post(
            this._baseUrl + '/api/Collections/create-collection',
            payload,
            this._config
        );
    }

    postRecordPlayer(playerForm) {
        return axios.post(
            this._baseUrl + '/api/Collections/record-player',
            playerForm,
            this._config
        )
    }

    getCollections() {
        return axios.get(
            `${this._baseUrl}/api/Collections/get-collection`,
            this._config
        );
    }

    getCloseCollection(frontId) {
        return axios.get(
            `${this._baseUrl}/api/Collections/close-collection?fuid=${frontId}`,
            this._config
        );
    }

    getCheckCollectionData(fuid) {
        return axios.get(
            `${this._baseUrl}/api/Collections/check-collectionData?fuid=${fuid}`,
            this._config
        );
    }

    postTempImage(image) {
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': `Bearer ${this._token}`
            }
        };

        const formData = new FormData();
        formData.append('file', image)

        return axios.post(
            this._baseUrl + '/api/Images/uploads/temp',
            formData,
            config
        )
    }
}