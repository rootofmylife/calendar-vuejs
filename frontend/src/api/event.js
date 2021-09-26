// Fake data. In real production, you should use Vuex though.

var events = [
  {
    picture: `https://robohash.org/f3d616f80d94901ea37a042e94aca6fc?set=set4&bgset=&size=200x200`,
    name: 'Client One',
    token: '123',
    verified: true,
    title: 'First Session with Client One',
    dates: [new Date(2021, 8, 3)],
    startHour: '7:00 PM',
    endHour: '8:00 PM',
    isMeetingCall: true, // true: appointment, false: event
    description: 'something description for Client One',
    locale: 'vi',
    tag: 0,
  },
  {
    picture: `https://robohash.org/07d342bc688540d9c93db65cdc7817dc?set=set4&bgset=&size=200x200`,
    name: 'Client Two',
    token: '456',
    verified: true,
    title: 'Webinar with Client Two',
    dates: [new Date(2021, 8, 27)],
    startHour: '9:00 A.M',
    endHour: '9:30 A.M',
    isMeetingCall: false, // true: appointment, false: event
    description: 'something description for Client Two',
    locale: 'vi',
    tag: 1,
  },
  {
    picture: `https://robohash.org/aee55471bcf11a0c8a966d4ae86f19d8?set=set4&bgset=&size=200x200`,
    name: 'Client Three',
    token: '789',
    verified: true,
    title: 'Opening Session with Client Three',
    dates: [new Date(2021, 9, 1)],
    startHour: '3:15 P.M',
    endHour: '5:15 PM',
    isMeetingCall: true, // true: appointment, false: event
    description: 'something description for Client Three',
    locale: 'vi',
    tag: 0,
  },
  {
    picture: `https://robohash.org/2c8c72e731125960aefbe96f0c3d42e8?set=set4&bgset=&size=200x200`,
    name: 'Client Four',
    token: '246',
    verified: true,
    title: 'Meeting with Client Four',
    dates: [new Date(2021, 8, 27)],
    startHour: '11:00 A.M',
    endHour: '12:30 A.M',
    isMeetingCall: false, // true: appointment, false: event
    description: 'something description for Client Four',
    locale: 'vi',
    tag: 0,
  },
]

export default {
  getEvents() {
    return events
  },
  addEvents(payload) {
    events.push(payload)
    return True
  },
  deleteEvents(payload) {
    events = events.filter(filter((item) => item.token !== payload))
    return True
  },
}
