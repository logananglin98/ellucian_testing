module.exports = {
    name: 'ConvoAttendance',
    publisher: 'LoganAnglin',
    cards: [{
        type: 'ConvoAttendanceCard',
        source: './src/cards/ConvoAttendanceCard',
        title: 'Convocation Attendance',
        displayCardType: 'Convocation Attendance Card',
        description: 'This card will display how many convocations a student has attended.',
        // pageRoute: {
        //     route: '/',
        //     excludeClickSelectors: ['a']
        // }
    }],
    // page: {
    //     source: './src/page/router.jsx'
    // }
};