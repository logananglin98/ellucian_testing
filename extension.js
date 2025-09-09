module.exports = {
    name: 'WeatherAPITestCard',
    publisher: 'LoganAnglin',
    cards: [{
        type: 'WeatherAPITestCard',
        source: './src/cards/WeatherAPITestCard',
        title: 'Weather API Test Card',
        displayCardType: 'Weather API Test Card',
        description: 'For testing API calls',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};