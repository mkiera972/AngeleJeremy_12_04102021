/**
 * Retrieve dataAPI USER_MAIN_DATA and return the data formatted, ready to be used for the component
 * @param {Object} dataApi - Data from the API SportSee
 * @return {Object} - Formatted data for the component
 */
const getDataFormat = (dataApi) => {
    let fetchedData = dataApi.data.data;
    return {
        firstName: fetchedData.userInfos.firstName,
        activityTracker: fetchedData.keyData,
        userScore: fetchedData.todayScore || fetchedData.score,
    }
}

/**
 * Retrieve dataAPI USER_ACTIVITY and return the data formatted, ready to be used for the component
 * @param {Object} dataApi - Data from the API SportSee
 * @return {Object} - Formatted data for the component
 */
const getDailyActivityDataFormat = (dataApi) => {
    if (dataApi) {
        let fetchedData = dataApi.data.data;
        const data = [];

        for (let item of fetchedData.sessions) {
            // eslint-disable-next-line no-unused-vars
            const [yyyy, mm, dd] = item.day.split("-");
            
            data.push({
                day: `${dd}`,
                kilogram: item.kilogram,
                calories: item.calories,
                });
        }

        return {
            data: data
        }
    }
}

/**
 * Retrieve dataAPI USER_PERFORMANCE and return the data formatted, ready to be used for the component
 * @param {Object} dataApi - Data from the API SportSee
 * @return {Object} - Formatted data for the component
 */
const getPerformanceAverageDataFormat = (dataApi) => {
    let fetchedData = dataApi.data.data.data;
    let performanceAverageData = [];

    fetchedData.map((data, index) => {
        return performanceAverageData.push({
            label:
            dataApi.data.data.kind[index + 1].charAt(0).toUpperCase() +
            dataApi.data.data.kind[index + 1].slice(1),
            value: data.value,
        })
    })
    return performanceAverageData;
}


/**
 * Retrieve dataAPI USER_AVERAGE_SESSIONS and return the data formatted, ready to be used for the component
 * @param {Object} dataApi - Data from the API SportSee
 * @return {Object} - Formatted data for the component
 */
const getUserAverageDataFormat = (dataApi) => {
    let fetchedData = dataApi.data.data;
    const sessionsData = [];
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    fetchedData.sessions.map((session) => {
        return sessionsData.push({
            day: days[session.day - 1],
            sessionLength: session.sessionLength,
        })
    })

    return sessionsData;
}

export { getDataFormat, getDailyActivityDataFormat, getPerformanceAverageDataFormat, getUserAverageDataFormat}
