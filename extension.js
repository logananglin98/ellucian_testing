module.exports = {
    name: 'WritingResourcesCArd',
    publisher: 'LoganAnglin',
    cards: [{
        type: 'WritingResourcesCard',
        source: './src/cards/WritingResourcesCard',
        title: 'Writing Resources Card',
        displayCardType: 'Writing Resources',
        description: 'This card has links to parts of the Writing Resources site.',
        pageRoute: {
            route: '/',
            excludeClickSelectors: ['a']
        }
    }],
    page: {
        source: './src/page/router.jsx'
    }
};