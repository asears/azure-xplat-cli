// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '5e7d1bb6-4953-44fe-8a54-43fbdb53b989',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Mobilytics Test1',
    registeredProviders: ['website', 'mobileservice'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/5e7d1bb6-4953-44fe-8a54-43fbdb53b989/services/mobileservices/mobileservices/clitestnode1914/pushsettings')
  .reply(200, "{\"wnsCredentials\":{},\"mpnsCredentials\":{\"mpnsCertificate\":\"MIIMtQIBAzCCDHwGCSqGSIb3DQEHAaCCDG0EggxpMIIMZTCCBu8GCSqGSIb3DQEHBqCCBuAwggbcAgEAMIIG1QYJKoZIhvcNAQcBMBwGCiqGSIb3DQEMAQYwDgQIXnySbwm5yc8CAggAgIIGqNTdnac9\\/teKDyuFCAEnI2VjwGccIdB8Pr4LvBScpo3wAnLWs5cee0LZhKSxX7JxG0z062dRb1J3Yg+odcv90BGSF1+SzqqucvDjG9BAjNDLQIY2oHXUF\\/uZkoYFW1NFE8VDRx0KjRzJSmLmEtHPYSxxVn+\\/APjFjNBYF8H8khJnm+2t90oFI3MR9toFhIP6i5fm5M9vcK3bWR0UCNlk3DDJGo47XZrQB754Koi7\\/9d+FBag1yZtuoBLmgdRoL4d2Vd6y8ZfSVUoNr2bHvruYPKFMC1K027l76HcAE8P7nmt6l+CIwIs6wYS2x62pYUCk86LbJWduH+UyVCpUxr8cNmINtAq\\/n+Jfy4Sp3FpcKv6bssXg3pNC7AkJI3wVymyko4IvAsUT151M\\/exORosqjSxT8BCVU7RC1+TKFAHyfsaYs2rTxKET21XNYi9cLcd+5BnaGAZgALFmWo\\/j\\/\\/\\/tnygUpaMPQFS1GtGUk3\\/asqSAIQJrgZ6dgunjhDO30fAoyciAetQHYUcX6KQGR\\/phF1NLE8DT49C1NpAhSdt9X4t2VG61vU83tYRQz02p5wqJjDpuX2QcwbBKsimwf8RUSr+snOpS5Tx0tC567Rnz4xYF\\/WStBj\\/9oB\\/re7xE5BT8Xh\\/dXZulYYcAelQRaKTjtv\\/k8tYZRfMFu9TEpqMW2mbtZAJJqnOl+WDuOsthHZ2J0iOSFMZo3Ry6wsSFgfq09Tx61grd2+PhAykLln3UhE3UNHwFxZnsmVma5t62Upw5IQ\\/j3Bkik8vmXBLCcY6Dp0r09tuOK+yeO8W7Gz8PXFPTLCroAyp0II9r8R1haWEInf4vvwL65UWxiWGeMuT3GvWW7aSvKq8bwzdp2v\\/T81HPkAuo86\\/kytGHcdXVAnnmgBfa5VedIOW4FMdE8+Qz9AltInSjjg2PQgX3InM\\/5XA37XnKfwuphKls6kxa4OYip+\\/SzPYSqcnCTcx6NPOE4jBrT3f9L4u4MYI0e1nqEazvygbZ+fUWfNNyjSYuh\\/fBnZzYbQRGX7WDHAgtlLRysqmwqgpETTmmqMCfgqAWouS5BlHMU+CY2V810rt8PE0\\/x8Xu1FtHBrRaOqdsk5kXMyhS8VmwKVK6D9RvVqITb+79iLfKMyWRL8Ow\\/+wrIIPH8xY2H2dq\\/cD1Fx9\\/9AGG6ZGt06Jrxg1+pUTRpXT5LTQATMTlSRFyvwmYDJvrNXCoFURqiMQikGTmrEMAh6\\/7+PPqlcNEB9TRhNliyqvIk+q6kzIEww24Kux+maTnJ4KoYnsLtP6LRjHVsI33L24XjScuGTlcWhSkId6mktcVCrBFiMMVh5daldsTfYRlGZBuLvJ64h1nOluZM+pxrJharDa6Vc42KqbHTm+V+8m+WPgz\\/Oi6EByAYtucIA9u4mZxIDJmLb4rvtlYJFbX1mQXmoMrJIqsVsay57jWlivLX3OcsIQw8R51DCPxqhXGT8iPOlOKG6hOwCbi+5rxHpF9j+DSvGfnrkZmxanAoPyqkHfqVwZ86jx8hGCYt58j3O8e2Qg7HI0ye9aGWl6q6SKUoRvVKo43pKy3+846\\/PBGQfDTnrojGx7JNQwJMKiDBeFsqbmcf\\/X\\/xwxLXj6CxVVrrJeR3Qh8sIUgAp4\\/0Hgj3yRz9GgkQyPa1pzTarDICefXKFcJ0VmmwqUuGz9vaLvguco19L+3ongU4eO0wr3hXElpnPsaET\\/VH+k7YrpS5oVGaCx6yLkpBljoS\\/1L0Y8wehm0VWcZkWLZ3E\\/vdwNIr9x24nDLvda6FdK0+wKbvvyCD1AibXVtX+ajE4hXDX\\/c7uY4akPMeqZ1u1b8JNjxKaiHbOQDV0upHdybLPol0fc8eF8A+yU1d2EDlYlQs6uuW+W12J0brVGBnjbe9UqGP7LUBLh1sbqsUw5+RvdYn0vblFw1sQyRHn5TQaXIh\\/YsDTxJMhOZ2x3JiYMm+D21qijGQ1JERjDzgQxxi4y8yPgfyW7olrFh3me303c2bd2DjH5ryrZomACZdn+7GbW2U1hCjYo9GKjOp7nljh9flDDdKpDet0vScVvZ9+6LkAPOfiNbKG3Hny0CdMr3z4K3lqHhIGCGY+2IcsINNJXR6OSnZiNlt6clVhEFSFKlCA8vo0MMO+QJ+QFvmqxjAbNx\\/lfsL3orWoZa9PEfb4qqfPWEEuO1fdxwjr96Q5GgoWS7z\\/5CWBf9FLb8Vdq3Jxt8+t8+huek\\/yg2atfRuYBXtcxP\\/oMU\\/TOptQZ5AED+qGxp+V6vgE\\/rErWtjCCBW4GCSqGSIb3DQEHAaCCBV8EggVbMIIFVzCCBVMGCyqGSIb3DQEMCgECoIIE7jCCBOowHAYKKoZIhvcNAQwBAzAOBAjT0I2D7tlLMgICCAAEggTIpkNSs\\/f0XwpaCw69Rl3pCtq3iI3lxVthkNbDifqJytNO5aZS\\/YXipN90TsO\\/22pqEV8Bu5Lr7PEDF6Gn\\/rNPQOjdBMEdZApNcd0BiwjqiV4+nF1MEzlYnhfiByQQQckvC8nq2aEBOcp+ed4aNIYulbjsCwSaPMzccrF6xDDOpY7UeCAmfqiC1DVe7qxVxk+V+2FqJ7G+B1nO57nOhm0IyJwtCIo0jM28maSo8HSF3N6rQGhomIpkHbltCh6qJUEh68XjN9b7p2wXmOtqQHAr+yWdhx335AdhJh2+NxnOgXn84GRS3Imn1fm1Z4edz\\/PIHDK28xxor0wbkNalrHX4Ct9w+VIyTABeA6Avt58VEDCFfQ0w4zvtT+yc53iFj4aT68d5a26p8V97s\\/ZGDDhSPbHuVjWFfSMUH1xrRkIJDtjRtAni7aDp\\/Oe+qZi+q5fCYht\\/qQb+5AY1M5k7UUfELUdus0xl6pPL1chlbHLV9gBbYiTdVrJ\\/xwrM3KkOGF3jzpi1YkE2bmiz0UCUn+AgcbtoumqogKztCCGADNxvQgJQyrYTse1MOxQMVTF8yE04AMwFRr6VfJIZWl4ywbBGZN96JzzOmKchWqs98fZtnOskQQZKHiK5iios+YbtsGu4YAu88TuyKOppdLd3RQeVWhH6ihpp77WI+7cBHzWWbbHkzyZyaQcmU4CIHKA2kx5\\/6Q9lp4yXMYV9JHZCV\\/yndoPgyPYnYMhMXZZIMI+JBH\\/xsjOcSdwK3NFtRpZN95G8C1MHT12T8E0MohFWrhlhQRFoZz2Jh1Gzp6E0q8gJrLZMpcL8N+2j6mkZM+ZofasuW6Mk2HXl4DLW2CWwovics8rGpm\\/xCQQNLulgyZNhG4\\/OEfx1BjcT2C2qejDjAPPEiSrWqOdd6d5EEoD0scp9yvoYdIyDb0Sf+TcRSIGgkrwTk3XaZsdcBPO8Dc8rsXZOlTgHQogrXImcwCC4sNYvIsKE6eBUWsHru7GYasz7tnBYwBFO\\/+7wKo\\/sb7FGYwGPyVw\\/Zf4t1e3U6N59IEzr1eu\\/wZH0CVdlB2i8su0vTUoOe9qK3UNVYbXiVf38n0cOeeY6VR+etSp5hgx8wIHh2HYv1ONxK290MRWRvX\\/wVx6c\\/YEaXKOoSKZx8390KHacuVajXt4\\/rK6zIfyOeaeNI3PunJjki\\/Pv2Mqt63rTTulUMC+ojlCDBK8Ss0J2hb43pSFXtV1B9Jk76rT4VE+cJbH22hJ3hFk4BLcikT9KQNt8gTlBjqs8n8t0Al+LK8V3B4ezapwCNNIx4tdmeEzN+mWFfrUjNHYngIAVndRJ6ugWK3pY8A\\/BeboHVjv7kIpSlFDIsIn1\\/75qRgQy3+ygVnoe36wKjUXy2RBgPrcwKvrTApFzmdAD9sQXe7I1yKtOwQzHvu3\\/Dky+ZdxHLLuLpt0vsBqq5K122NxQUVYqNrJyr3ZyMmW82Dye9XYj4h2Y7u3oRYFKXFYZRpKdd9dcjunRYuZiDfWhwMNRAXTfpUwpVbOFcmL0W3wqofOET3N2bBzqPZjlj1Hg0QlKUttdkdqFB\\/2ZcmQ2jUqxphMbP9pGrBN1MkPEizrmCMxneeUcHg1Qu+a1MvN0YbpvsvkwP514932YEEOXMVIwKwYJKoZIhvcNAQkUMR4eHABUAG8AZABkACAAUgBlAGkAZgBzAHQAZQBjAGswIwYJKoZIhvcNAQkVMRYEFKW\\/\\/aZ0ukFnnpB8t4lTivYNCO3OMDAwITAJBgUrDgMCGgUABBR9n61EwffNJdHW7V00VjU+Uu34SgQIy8Ely0aMW6ICAQE=\",\"certificateKey\":\"password\",\"enableUnauthenticatedSettings\":true},\"apnsCredentials\":{},\"gcmCredentials\":{},\"registrationEndpointPermission\":\"application\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '4631',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: '1.0.6198.213 (rd_rdfe_stable.150402-1703) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-powered-by': 'ASP.NET',
  'x-ms-request-id': '705159bfba2589d49a7ed67855c9e5bd',
  date: 'Wed, 08 Apr 2015 01:24:00 GMT' });
 return result; }]];