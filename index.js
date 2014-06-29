/**
  # normalice

  Normalize an ice server configuration object (or plain old string) into a format
  that is usable in all browsers supporting WebRTC.  Primarily this module is designed
  to help with the transition of the `url` attribute of the configuration object to
  the `urls` attribute.

  ## Example Usage

  <<< examples/simple.js

**/

module.exports = function(input, opts) {
  // handle string input
  if (typeof input == 'string' || (input instanceof String)) {
    input = {
      url: input
    };
  }
};
