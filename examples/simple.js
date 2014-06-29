var normalice = require('..');

console.log(normalice('stun.l.google.com:19302'));
// --> { urls: [ 'stun: stun.l.google.com:19302' ], url: 'stun:stun.l.google.com:19302' }

console.log(normalice('stun.l.google.com:19302'), { output: ['urls'] });
// --> { urls: [ 'stun: stun.l.google.com:19302' ] }

console.log(normalice('stun.l.google.com:19302'), { output: ['url'] });
// --> { url: 'stun: stun.l.google.com:19302' }
