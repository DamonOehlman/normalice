module.exports = function (input) {
  // if we have been passed an input object which has a url defined, then
  // destructure that input object and create a default urls array with the
  // original url as the only member of that array. If the original object
  // has a "urls" property in addition to this "url" property, then the
  // original "urls" property will take precedence and be preserved
  if (input && input.url) {
    const { url, ...props } = input;

    return {
      urls: [url],
      ...props,
    };
  }

  // if we have gotten this far we assume we are dealing with string input
  // and if not, throw an error
  if (typeof input !== 'string' && !(input instanceof String)) {
    throw new Error(`Unable to parse input "${input}" with normalice`);
  }

  // split the url into component parts
  const [protocol, ...urlComponents] = input.trim().split(':');

  switch (protocol.toLowerCase()) {
    case 'turn':
      return formatTurnUrl(...urlComponents);
    case 'stun':
      return { urls: [`stun:${urlComponents.join(':')}`] };
    default:
      throw new Error(`Unable to parse input "${input}" with normalice, unknown protocol: ${protocol}`);
  }
};

function formatTurnUrl(username, credential, host, port) {
  return {
    urls: port ? [`turn:${host}:${port}`] : [`turn:${host}`],
    username,
    credential,
  };
}
