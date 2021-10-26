import axios from 'axios';
import { getDataFormat, getDailyActivityDataFormat, getPerformanceAverageDataFormat, getUserAverageDataFormat } from './apiFormat';

class ApiProvider {
    constructor() {
        this.baseUrl = 'http://localhost:4000';
    }

    /**
     * Fetch USER_MAIN_DATA from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}`;

        await axios.get(url)
        .then(function (response) {
            data = getDataFormat(response);
        })
        return data;
    }

    /**
     * Fetch USER_ACTIVITY from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getUserDailyActivityData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/activity`;

        await axios.get(url)
        .then(function (response) {
            
            data = getDailyActivityDataFormat(response);
        })
        
        return data;
    }

    /**
     * Fetch USER_AVERAGE_SESSIONS from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getUserAverageSessionData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/average-sessions`;

        await axios
            .get(url)
            .then(function (response) {
                data = getUserAverageDataFormat(response);
            })
        return data;
    }

    /**
     * Fetch USER_PERFORMANCE from API
     * @param {string} id - user id
     * @return {Array.Object}
     */
    async getUserPerformanceData(id) {
        let data = {};
        let url = `${this.baseUrl}/user/${id}/performance`;

        await axios
            .get(url)
            .then(function (response) {
                data = getPerformanceAverageDataFormat(response);
            })
        return data;
    }
}

export default ApiProvider;