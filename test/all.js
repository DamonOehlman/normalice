const test = require('tape');
const normalice = require('..');

// a list of stun test data tuples [input, expected]
const stunTestData = [
  ['stun:stun01.sipphone.com', { url: 'stun:stun01.sipphone.com' }],
  ['stun:stun.l.google.com:19302', { url: 'stun:stun.l.google.com:19302' }],
];

// a list of turn test tuples [test name, input, expected]
const turnTestData = [
  [
    'no port no transport',
    'turn:foo:bar:numb.viagenie.ca',
    {
      url: 'turn:numb.viagenie.ca',
      credential: 'bar',
      username: 'foo',
    },
  ],
  [
    'no port no transport, w/- email as username',
    'turn:webrtc@live.com:muazkh:numb.viagenie.ca',
    {
      url: 'turn:numb.viagenie.ca',
      credential: 'muazkh',
      username: 'webrtc@live.com',
    },
  ],
  [
    'port defined',
    'turn:foo:bar:numb.viagenie.ca:3478',
    {
      url: 'turn:numb.viagenie.ca:3478',
      credential: 'bar',
      username: 'foo',
    },
  ],
  [
    'no port, with transport',
    'turn:foo:bar:numb.viagenie.ca?transport=udp',
    {
      url: 'turn:numb.viagenie.ca?transport=udp',
      credential: 'bar',
      username: 'foo',
    },
  ],
  [
    'port defined, with transport',
    'turn:foo:bar:numb.viagenie.ca:3478?transport=udp',
    {
      url: 'turn:numb.viagenie.ca:3478?transport=udp',
      credential: 'bar',
      username: 'foo',
    },
  ],
];

stunTestData.forEach(([input, expected]) => {
  test(`STUN: ${input}`, t => {
    t.plan(4);

    const server = normalice(input);

    t.ok(server, 'parsed successfully');
    t.deepEqual(server.urls, [expected.url], 'urls array defined and contains exactly one url');
    t.equal(server.username, undefined, 'no username specified');
    t.equal(server.credential, undefined, 'no credential specified');
  });
});

turnTestData.forEach(([name, input, expected]) => {
  test(`TURN: ${name} (url = ${input})`, t => {
    t.plan(4);

    const server = normalice(input);

    t.ok(server, 'parsed successfully');
    t.deepEqual(server.urls, [expected.url], 'urls array defined and contains exactly one url');
    t.equal(server.username, expected.username, 'username match');
    t.equal(server.credential, expected.credential, 'credential match');
  });
});
