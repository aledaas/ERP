const { default: mock } = require('@/@fake-db/mock')

/* eslint-disable global-require */
const data = {
  users: [
    {
      id: 1,
      fullName: 'Galen Slixby',
      company: 'Yotz PVT LTD',
      role: 'editor',
      username: 'gslixby0',
      country: 'El Salvador',
      contact: '(479) 232-9151',
      email: 'gslixby0@abc.net.au',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: '',
    },
    {
      id: 2,
      fullName: 'Halsey Redmore',
      company: 'Skinder PVT LTD',
      role: 'author',
      username: 'hredmore1',
      country: 'Albania',
      contact: '(472) 607-9137',
      email: 'hredmore1@imgur.com',
      currentPlan: 'standard',
      status: 'pending',
      avatar: 'avatar-8.png',
    },
    {
      id: 3,
      fullName: 'Marjory Sicely',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      username: 'msicely2',
      country: 'Russia',
      contact: '(321) 264-4599',
      email: 'msicely2@who.int',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: 'avatar-1.png',
    },
    {
      id: 4,
      fullName: 'Cyrill Risby',
      company: 'Oozz PVT LTD',
      role: 'maintainer',
      username: 'crisby3',
      country: 'China',
      contact: '(923) 690-6806',
      email: 'crisby3@wordpress.com',
      currentPlan: 'standard',
      status: 'inactive',
      avatar: 'avatar-8.png',
    },
    {
      id: 5,
      fullName: 'Maggy Hurran',
      company: 'Aimbo PVT LTD',
      role: 'subscriber',
      username: 'mhurran4',
      country: 'Pakistan',
      contact: '(669) 914-1078',
      email: 'mhurran4@yahoo.co.jp',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: 'avatar-7.png',
    },
    {
      id: 6,
      fullName: 'Silvain Halstead',
      company: 'Jaxbean PVT LTD',
      role: 'author',
      username: 'shalstead5',
      country: 'China',
      contact: '(958) 973-3093',
      email: 'shalstead5@shinystat.com',
      currentPlan: 'company',
      status: 'active',
      avatar: '',
    },
    {
      id: 7,
      fullName: 'Breena Gallemore',
      company: 'Jazzy PVT LTD',
      role: 'subscriber',
      username: 'bgallemore6',
      country: 'Canada',
      contact: '(825) 977-8152',
      email: 'bgallemore6@boston.com',
      currentPlan: 'company',
      status: 'pending',
      avatar: '',
    },
    {
      id: 8,
      fullName: 'Kathryne Liger',
      company: 'Pixoboo PVT LTD',
      role: 'author',
      username: 'kliger7',
      country: 'France',
      contact: '(187) 440-0934',
      email: 'kliger7@vinaora.com',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: 'avatar-8.png',
    },
    {
      id: 9,
      fullName: 'Franz Scotfurth',
      company: 'Tekfly PVT LTD',
      role: 'subscriber',
      username: 'fscotfurth8',
      country: 'China',
      contact: '(978) 146-5443',
      email: 'fscotfurth8@dailymotion.com',
      currentPlan: 'standard',
      status: 'pending',
      avatar: 'avatar-2.png',
    },
    {
      id: 10,
      fullName: 'Jillene Bellany',
      company: 'Gigashots PVT LTD',
      role: 'maintainer',
      username: 'jbellany9',
      country: 'Jamaica',
      contact: '(589) 284-6732',
      email: 'jbellany9@kickstarter.com',
      currentPlan: 'company',
      status: 'inactive',
      avatar: 'avatar-5.png',
    },
    {
      id: 11,
      fullName: 'Jonah Wharlton',
      company: 'Eare PVT LTD',
      role: 'subscriber',
      username: 'jwharltona',
      country: 'United States',
      contact: '(176) 532-6824',
      email: 'jwharltona@oakley.com',
      currentPlan: 'standard',
      status: 'inactive',
      avatar: 'avatar-4.png',
    },
    {
      id: 12,
      fullName: 'Seth Hallam',
      company: 'Yakitri PVT LTD',
      role: 'subscriber',
      username: 'shallamb',
      country: 'Peru',
      contact: '(234) 464-0600',
      email: 'shallamb@hugedomains.com',
      currentPlan: 'standard',
      status: 'pending',
      avatar: 'avatar-5.png',
    },
    {
      id: 13,
      fullName: 'Yoko Pottie',
      company: 'Leenti PVT LTD',
      role: 'subscriber',
      username: 'ypottiec',
      country: 'Philippines',
      contact: '(907) 284-5083',
      email: 'ypottiec@privacy.gov.au',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: 'avatar-7.png',
    },
    {
      id: 14,
      fullName: 'Maximilianus Krause',
      company: 'Digitube PVT LTD',
      role: 'author',
      username: 'mkraused',
      country: 'Democratic Republic of the Congo',
      contact: '(167) 135-7392',
      email: 'mkraused@stanford.edu',
      currentPlan: 'standard',
      status: 'active',
      avatar: 'avatar-5.png',
    },
    {
      id: 15,
      fullName: 'Zsazsa McCleverty',
      company: 'Kaymbo PVT LTD',
      role: 'maintainer',
      username: 'zmcclevertye',
      country: 'France',
      contact: '(317) 409-6565',
      email: 'zmcclevertye@soundcloud.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: 'avatar-2.png',
    },
    {
      id: 16,
      fullName: 'Bentlee Emblin',
      company: 'Yambee PVT LTD',
      role: 'author',
      username: 'bemblinf',
      country: 'Spain',
      contact: '(590) 606-1056',
      email: 'bemblinf@wired.com',
      currentPlan: 'company',
      status: 'active',
      avatar: 'avatar-6.png',
    },
    {
      id: 17,
      fullName: 'Brockie Myles',
      company: 'Wikivu PVT LTD',
      role: 'maintainer',
      username: 'bmylesg',
      country: 'Poland',
      contact: '(553) 225-9905',
      email: 'bmylesg@amazon.com',
      currentPlan: 'basic',
      status: 'active',
      avatar: '',
    },
    {
      id: 18,
      fullName: 'Bertha Biner',
      company: 'Twinte PVT LTD',
      role: 'editor',
      username: 'bbinerh',
      country: 'Yemen',
      contact: '(901) 916-9287',
      email: 'bbinerh@mozilla.com',
      currentPlan: 'standard',
      status: 'active',
      avatar: 'avatar-7.png',
    },
    {
      id: 19,
      fullName: 'Travus Bruntjen',
      company: 'Cogidoo PVT LTD',
      role: 'admin',
      username: 'tbruntjeni',
      country: 'France',
      contact: '(524) 586-6057',
      email: 'tbruntjeni@sitemeter.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '',
    },
    {
      id: 20,
      fullName: 'Wesley Burland',
      company: 'Bubblemix PVT LTD',
      role: 'editor',
      username: 'wburlandj',
      country: 'Honduras',
      contact: '(569) 683-1292',
      email: 'wburlandj@uiuc.edu',
      currentPlan: 'standard',
      status: 'inactive',
      avatar: 'avatar-6.png',
    },
    {
      id: 21,
      fullName: 'Selina Kyle',
      company: 'Wayne Enterprises',
      role: 'admin',
      username: 'catwomen1940',
      country: 'USA',
      contact: '(829) 537-0057',
      email: 'irena@wayne.com',
      currentPlan: 'standard',
      status: 'active',
      avatar: 'avatar-2.png',
    },
    {
      id: 22,
      fullName: 'Jameson Lyster',
      company: 'Quaxo PVT LTD',
      role: 'editor',
      username: 'jlysterl',
      country: 'Ukraine',
      contact: '(593) 624-0222',
      email: 'jlysterl@guardian.co.uk',
      currentPlan: 'company',
      status: 'inactive',
      avatar: 'avatar-8.png',
    },
    {
      id: 23,
      fullName: 'Kare Skitterel',
      company: 'Ainyx PVT LTD',
      role: 'maintainer',
      username: 'kskitterelm',
      country: 'Poland',
      contact: '(254) 845-4107',
      email: 'kskitterelm@washingtonpost.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: 'avatar-3.png',
    },
    {
      id: 24,
      fullName: 'Cleavland Hatherleigh',
      company: 'Flipopia PVT LTD',
      role: 'admin',
      username: 'chatherleighn',
      country: 'Brazil',
      contact: '(700) 783-7498',
      email: 'chatherleighn@washington.edu',
      currentPlan: 'standard',
      status: 'pending',
      avatar: 'avatar-2.png',
    },
    {
      id: 25,
      fullName: 'Adeline Micco',
      company: 'Topicware PVT LTD',
      role: 'admin',
      username: 'amiccoo',
      country: 'France',
      contact: '(227) 598-1841',
      email: 'amiccoo@whitehouse.gov',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '',
    },
    {
      id: 26,
      fullName: 'Hugh Hasson',
      company: 'Skinix PVT LTD',
      role: 'admin',
      username: 'hhassonp',
      country: 'China',
      contact: '(582) 516-1324',
      email: 'hhassonp@bizjournals.com',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: 'avatar-4.png',
    },
    {
      id: 27,
      fullName: 'Germain Jacombs',
      company: 'Youopia PVT LTD',
      role: 'editor',
      username: 'gjacombsq',
      country: 'Zambia',
      contact: '(137) 467-5393',
      email: 'gjacombsq@jigsy.com',
      currentPlan: 'enterprise',
      status: 'active',
      avatar: '',
    },
    {
      id: 28,
      fullName: 'Bree Kilday',
      company: 'Jetpulse PVT LTD',
      role: 'maintainer',
      username: 'bkildayr',
      country: 'Portugal',
      contact: '(412) 476-0854',
      email: 'bkildayr@mashable.com',
      currentPlan: 'standard',
      status: 'active',
      avatar: '',
    },
    {
      id: 29,
      fullName: 'Candice Pinyon',
      company: 'Kare PVT LTD',
      role: 'maintainer',
      username: 'cpinyons',
      country: 'Sweden',
      contact: '(170) 683-1520',
      email: 'cpinyons@behance.net',
      currentPlan: 'standard',
      status: 'active',
      avatar: 'avatar-7.png',
    },
    {
      id: 30,
      fullName: 'Isabel Mallindine',
      company: 'Voomm PVT LTD',
      role: 'subscriber',
      username: 'imallindinet',
      country: 'Slovenia',
      contact: '(332) 803-1983',
      email: 'imallindinet@shinystat.com',
      currentPlan: 'standard',
      status: 'pending',
      avatar: '',
    },
    {
      id: 31,
      fullName: 'Gwendolyn Meineken',
      company: 'Oyondu PVT LTD',
      role: 'admin',
      username: 'gmeinekenu',
      country: 'Moldova',
      contact: '(551) 379-7460',
      email: 'gmeinekenu@hc360.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: 'avatar-1.png',
    },
    {
      id: 32,
      fullName: 'Rafaellle Snowball',
      company: 'Fivespan PVT LTD',
      role: 'editor',
      username: 'rsnowballv',
      country: 'Philippines',
      contact: '(974) 829-0911',
      email: 'rsnowballv@indiegogo.com',
      currentPlan: 'basic',
      status: 'pending',
      avatar: 'avatar-5.png',
    },
    {
      id: 33,
      fullName: 'Rochette Emer',
      company: 'Thoughtworks PVT LTD',
      role: 'admin',
      username: 'remerw',
      country: 'North Korea',
      contact: '(841) 889-3339',
      email: 'remerw@blogtalkradio.com',
      currentPlan: 'basic',
      status: 'active',
      avatar: 'avatar-8.png',
    },
    {
      id: 34,
      fullName: 'Ophelie Fibbens',
      company: 'Jaxbean PVT LTD',
      role: 'subscriber',
      username: 'ofibbensx',
      country: 'Indonesia',
      contact: '(764) 885-7351',
      email: 'ofibbensx@booking.com',
      currentPlan: 'company',
      status: 'active',
      avatar: 'avatar-4.png',
    },
    {
      id: 35,
      fullName: 'Stephen MacGilfoyle',
      company: 'Browseblab PVT LTD',
      role: 'maintainer',
      username: 'smacgilfoyley',
      country: 'Japan',
      contact: '(350) 589-8520',
      email: 'smacgilfoyley@bigcartel.com',
      currentPlan: 'company',
      status: 'pending',
      avatar: '',
    },
    {
      id: 36,
      fullName: 'Bradan Rosebotham',
      company: 'Agivu PVT LTD',
      role: 'subscriber',
      username: 'brosebothamz',
      country: 'Belarus',
      contact: '(882) 933-2180',
      email: 'brosebothamz@tripadvisor.com',
      currentPlan: 'standard',
      status: 'inactive',
      avatar: '',
    },
    {
      id: 37,
      fullName: 'Skip Hebblethwaite',
      company: 'Katz PVT LTD',
      role: 'admin',
      username: 'shebblethwaite10',
      country: 'Canada',
      contact: '(610) 343-1024',
      email: 'shebblethwaite10@arizona.edu',
      currentPlan: 'company',
      status: 'inactive',
      avatar: 'avatar-4.png',
    },
    {
      id: 38,
      fullName: 'Moritz Piccard',
      company: 'Twitternation PVT LTD',
      role: 'maintainer',
      username: 'mpiccard11',
      country: 'Croatia',
      contact: '(365) 277-2986',
      email: 'mpiccard11@vimeo.com',
      currentPlan: 'enterprise',
      status: 'inactive',
      avatar: 'avatar-1.png',
    },
    {
      id: 39,
      fullName: 'Tyne Widmore',
      company: 'Yombu PVT LTD',
      role: 'subscriber',
      username: 'twidmore12',
      country: 'Finland',
      contact: '(531) 731-0928',
      email: 'twidmore12@bravesites.com',
      currentPlan: 'standard',
      status: 'pending',
      avatar: '',
    },
    {
      id: 40,
      fullName: 'Florenza Desporte',
      company: 'Kamba PVT LTD',
      role: 'author',
      username: 'fdesporte13',
      country: 'Ukraine',
      contact: '(312) 104-2638',
      email: 'fdesporte13@omniture.com',
      currentPlan: 'company',
      status: 'active',
      avatar: 'avatar-6.png',
    },
    {
      id: 41,
      fullName: 'Edwina Baldetti',
      company: 'Dazzlesphere PVT LTD',
      role: 'maintainer',
      username: 'ebaldetti14',
      country: 'Haiti',
      contact: '(315) 329-3578',
      email: 'ebaldetti14@theguardian.com',
      currentPlan: 'standard',
      status: 'pending',
      avatar: '',
    },
    {
      id: 42,
      fullName: 'Benedetto Rossiter',
      company: 'Mybuzz PVT LTD',
      role: 'editor',
      username: 'brossiter15',
      country: 'Indonesia',
      contact: '(323) 175-6741',
      email: 'brossiter15@craigslist.org',
      currentPlan: 'standard',
      status: 'inactive',
      avatar: '',
    },
    {
      id: 43,
      fullName: 'Micaela McNirlan',
      company: 'Tambee PVT LTD',
      role: 'admin',
      username: 'mmcnirlan16',
      country: 'Indonesia',
      contact: '(242) 952-0916',
      email: 'mmcnirlan16@hc360.com',
      currentPlan: 'basic',
      status: 'inactive',
      avatar: '',
    },
    {
      id: 44,
      fullName: 'Vladamir Koschek',
      company: 'Centimia PVT LTD',
      role: 'author',
      username: 'vkoschek17',
      country: 'Guatemala',
      contact: '(531) 758-8335',
      email: 'vkoschek17@abc.net.au',
      currentPlan: 'standard',
      status: 'active',
      avatar: '',
    },
    {
      id: 45,
      fullName: 'Corrie Perot',
      company: 'Flipopia PVT LTD',
      role: 'subscriber',
      username: 'cperot18',
      country: 'China',
      contact: '(659) 385-6808',
      email: 'cperot18@goo.ne.jp',
      currentPlan: 'standard',
      status: 'pending',
      avatar: 'avatar-3.png',
    },
    {
      id: 46,
      fullName: 'Saunder Offner',
      company: 'Skalith PVT LTD',
      role: 'maintainer',
      username: 'soffner19',
      country: 'Poland',
      contact: '(200) 586-2264',
      email: 'soffner19@mac.com',
      currentPlan: 'enterprise',
      status: 'pending',
      avatar: '',
    },
    {
      id: 47,
      fullName: 'Karena Courtliff',
      company: 'Feedfire PVT LTD',
      role: 'admin',
      username: 'kcourtliff1a',
      country: 'China',
      contact: '(478) 199-0020',
      email: 'kcourtliff1a@bbc.co.uk',
      currentPlan: 'basic',
      status: 'active',
      avatar: 'avatar-1.png',
    },
    {
      id: 48,
      fullName: 'Onfre Wind',
      company: 'Thoughtmix PVT LTD',
      role: 'admin',
      username: 'owind1b',
      country: 'Ukraine',
      contact: '(344) 262-7270',
      email: 'owind1b@yandex.ru',
      currentPlan: 'basic',
      status: 'pending',
      avatar: '',
    },
    {
      id: 49,
      fullName: 'Paulie Durber',
      company: 'Babbleblab PVT LTD',
      role: 'subscriber',
      username: 'pdurber1c',
      country: 'Sweden',
      contact: '(694) 676-1275',
      email: 'pdurber1c@gov.uk',
      currentPlan: 'standard',
      status: 'inactive',
      avatar: '',
    },
    {
      id: 50,
      fullName: 'Beverlie Krabbe',
      company: 'Kaymbo PVT LTD',
      role: 'editor',
      username: 'bkrabbe1d',
      country: 'China',
      contact: '(397) 294-5153',
      email: 'bkrabbe1d@home.pl',
      currentPlan: 'company',
      status: 'active',
      avatar: 'avatar-2.png',
    },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Users
// ------------------------------------------------

mock.onGet('/apps/user/users').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', options = {}, status = null, role = null, plan = null } = config.params

  // eslint-disable-next-line object-curly-newline
  const { sortBy = [], sortDesc = [], page = 0, itemsPerPage = 0 } = options
  /* eslint-enable */

  const queryLowered = q.toLowerCase()

  let filteredData = data.users.filter(
    user =>
      /* eslint-disable operator-linebreak, implicit-arrow-linebreak */
      (user.username.toLowerCase().includes(queryLowered) || user.fullName.toLowerCase().includes(queryLowered)) &&
      user.role === (role || user.role) &&
      user.currentPlan === (plan || user.currentPlan) &&
      user.status === (status || user.status),
  )
  /* eslint-enable  */

  // sorting
  if (sortBy.length === 1 && sortDesc.length === 1) {
    filteredData = filteredData.sort((a, b) => {
      const sortA = a[sortBy[0]]
      const sortB = b[sortBy[0]]

      if (sortDesc[0]) {
        if (sortA < sortB) return 1
        if (sortA > sortB) return -1

        return 0
      }

      if (sortA < sortB) return -1
      if (sortA > sortB) return 1

      return 0
    })
  }

  // user data total

  const userTotal = [
    { title: 'Total Users', total: '21,459' },
    { title: 'Paid Users', total: '4,567' },
    { title: 'Active Users', total: '19,860' },
    { title: 'Pending Users', total: '237' },
  ]

  return [
    200,
    {
      filteredData:
        itemsPerPage !== -1 ? filteredData.slice((page - 1) * itemsPerPage, page * itemsPerPage) : filteredData,
      total: filteredData.length,
      userTotal,
    },
  ]
})

// ------------------------------------------------
// POST: Add new user
// ------------------------------------------------
mock.onPost('/apps/user/users').reply(config => {
  // Get event from post data
  const { user } = JSON.parse(config.data)

  // Assign Status
  user.status = 'active'

  const { length } = data.users
  let lastIndex = 0
  if (length) {
    lastIndex = data.users[length - 1].id
  }
  user.id = lastIndex + 1

  data.users.push(user)

  return [201, { user }]
})

// ------------------------------------------------
// GET: Return Single User
// ------------------------------------------------
mock.onGet(/\/apps\/user\/users\/\d+/).reply(config => {
  // Get event id from URL
  let userId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  userId = Number(userId)

  const userIndex = data.users.findIndex(e => e.id === userId)
  const user = data.users[userIndex]
  Object.assign(user, {
    taskDone: 1230,
    projectDone: 568,
    taxId: 'Tax-8894',
    language: 'English',
  })

  if (user) return [200, user]

  return [404]
})
