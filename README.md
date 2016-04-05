# password warning in Chrome for non-secure websites

It is a good thing that the implementation of HTTP2
in the major browser, forces a website to use TLS.
But until that time, that websites still request passwords over HTTP
instead of HTTPS,
we need to warn our loved ones.
We coders understand that entering a password without encryption
isn't a good thing when on public wifi,
but many people don't.

Please install this chrome extension on the laptop of someone you care about.
Feel free to read the code, this README contains more characters than the actual code.

Also consider to change this setting in chrome: chrome://flags/#mark-non-secure-as
