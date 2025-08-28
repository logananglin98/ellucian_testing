module.exports = {
    name: 'EllucianTesting',
    publisher: 'Sample',
    cards: [{
        type: 'EllucianTestingCard',
        source: './src/cards/EllucianTestingCard',
        title: 'EllucianTesting Card',
        displayCardType: 'EllucianTesting Card',
        description: 'This is an introductory card to the Ellucian Experience SDK',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};