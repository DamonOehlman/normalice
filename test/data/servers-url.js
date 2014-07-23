exports.stun = [
  { url: 'stun:stun.l.google.com:19302' }
];

exports.turn = [
  { url: 'turn:tmp:test@example.org:3478' },
  { url: 'turn:tmp@example.org:3478', credential: 'test' },
  { url: 'turn:tmp@example.org', credential: 'test' },
  { url: 'turn:tmp@example.org?transport=tcp', credential: 'test' },
  { url: 'turn:example.org?transport=tcp', username: 'tmp', credential: 'test' },
  { url: 'turn:server1.example.org:443?transport=tcp', username: 'tmp', credential: 'test' }
];
