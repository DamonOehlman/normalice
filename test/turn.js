var test = require('tape');
var normalice = require('..');
var servers = require('./data/servers-url');

test('normalizing turn url with embedded username:credential', function(t) {
  var server;

  t.plan(5);
  t.ok(server = normalice(servers.turn[0]));
  t.equal(server.url, 'turn:example.org:3478');
  t.deepEqual(server.urls, ['turn:example.org:3478']);
  t.equal(server.username, 'tmp');
  t.equal(server.credential, 'test');
});

return;

test('normalizing turn url with embedded username', function(t) {
  var server;

  t.plan(5);
  t.ok(server = normalice(servers.turn[1]));
  t.equal(server.url, 'turn:example.org:3478');
  t.deepEqual(server.urls, ['turn:example.org:3478']);
  t.equal(server.username, 'tmp');
  t.equal(server.credential, 'test');
});

test('normalizing turn url with embedded username (no port)', function(t) {
  var server;

  t.plan(5);
  t.ok(server = normalice(servers.turn[2]));
  t.equal(server.url, 'turn:example.org');
  t.deepEqual(server.urls, ['turn:example.org']);
  t.equal(server.username, 'tmp');
  t.equal(server.credential, 'test');
});

test('normalizing turn url with embedded username (transport specified)', function(t) {
  var server;

  t.plan(5);
  t.ok(server = normalice(servers.turn[3]));
  t.equal(server.url, 'turn:example.org?transport=tcp');
  t.deepEqual(server.urls, ['turn:example.org?transport=tcp']);
  t.equal(server.username, 'tmp');
  t.equal(server.credential, 'test');
});
