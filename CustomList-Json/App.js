/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, Platform, StyleSheet, Text, View} from 'react-native';
import CustomListview from './components/CustomListview';

export default class App extends Component {

/* Return object for populate the list */
getData() {

return {
  "results": [
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "filippo",
        "last": "jost"
      },
      "location": {
        "street": "birkenweg 103",
        "city": "cottbus/chosebuz",
        "state": "saarland",
        "postcode": 37797,
        "coordinates": {
          "latitude": "-39.5433",
          "longitude": "-164.8614"
        },
        "timezone": {
          "offset": "-1:00",
          "description": "Azores, Cape Verde Islands"
        }
      },
      "email": "filippo.jost@example.com",
      "login": {
        "uuid": "466122b4-cd5b-4b11-856d-d6e5e6c45937",
        "username": "greenswan831",
        "password": "france",
        "salt": "Y2wRRfga",
        "md5": "02910945143c81e5cdde59a3e60e5750",
        "sha1": "cccac68b811ef79c49bf4775a99df9a0e46004c3",
        "sha256": "64e82ae648a82d1c32bfc7870bb03df8149b9bad821376da205fd72ba8e7e3ef"
      },
      "dob": {
        "date": "1965-09-19T01:44:05Z",
        "age": 53
      },
      "registered": {
        "date": "2017-06-04T13:11:50Z",
        "age": 2
      },
      "phone": "0947-2351451",
      "cell": "0179-8179428",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/34.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
      },
      "nat": "DE"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "dylan",
        "last": "hall"
      },
      "location": {
        "street": "462 ravensbourne road",
        "city": "christchurch",
        "state": "tasman",
        "postcode": 37548,
        "coordinates": {
          "latitude": "11.4246",
          "longitude": "-140.8614"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "dylan.hall@example.com",
      "login": {
        "uuid": "fc1cf73c-8d04-4310-b1c4-37e898d363af",
        "username": "brownostrich970",
        "password": "greatone",
        "salt": "nC5GJF2o",
        "md5": "8205f44a08c2012c9d3bb7cf9246db9e",
        "sha1": "32108649e6252ebadffd7195189842836b67b752",
        "sha256": "d7ed1e13dc3496c071fc2e0acb94a8df0155d736770f3821a9de5479264085db"
      },
      "dob": {
        "date": "1982-11-25T15:40:03Z",
        "age": 36
      },
      "registered": {
        "date": "2007-07-03T16:14:56Z",
        "age": 11
      },
      "phone": "(217)-861-0886",
      "cell": "(248)-498-8861",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/74.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/74.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/74.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "esma",
        "last": "arıcan"
      },
      "location": {
        "street": "2377 necatibey cd",
        "city": "İzmir",
        "state": "kırklareli",
        "postcode": 25891,
        "coordinates": {
          "latitude": "40.3404",
          "longitude": "-62.8461"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "esma.arıcan@example.com",
      "login": {
        "uuid": "b42bda20-dda3-47d7-aedd-a2ee51633867",
        "username": "purpleladybug786",
        "password": "alissa",
        "salt": "owceAjBZ",
        "md5": "134bdf7bb57bd6ab80a257134694b64a",
        "sha1": "516ad6bf26085a854e8c3913af5a8f01e41f0571",
        "sha256": "ab9fc63f77856c563fc93e5e82beb39fa7582cc726584ace909940178e466f9b"
      },
      "dob": {
        "date": "1955-12-19T08:11:55Z",
        "age": 63
      },
      "registered": {
        "date": "2003-12-31T21:31:20Z",
        "age": 15
      },
      "phone": "(098)-509-4000",
      "cell": "(226)-305-4343",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/87.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "chad",
        "last": "howell"
      },
      "location": {
        "street": "3459 north road",
        "city": "ballina",
        "state": "wicklow",
        "postcode": 50907,
        "coordinates": {
          "latitude": "-58.2167",
          "longitude": "-96.0034"
        },
        "timezone": {
          "offset": "+4:00",
          "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        }
      },
      "email": "chad.howell@example.com",
      "login": {
        "uuid": "501627d1-97c3-41e0-be81-f711034a5187",
        "username": "angryzebra951",
        "password": "kent",
        "salt": "2rQ63t15",
        "md5": "58eb7228db1b4b54e7d4f2a3f2d7b92c",
        "sha1": "d30998930b73c6e5bc7385e01b7bd8781203e77a",
        "sha256": "c68dfd43cf6e65a2ef6a179350a025cdd3bfe32306f7a11d3b893d7a340cf275"
      },
      "dob": {
        "date": "1982-10-24T19:23:02Z",
        "age": 36
      },
      "registered": {
        "date": "2015-08-24T05:38:20Z",
        "age": 3
      },
      "phone": "041-392-8695",
      "cell": "081-222-7324",
      "id": {
        "name": "PPS",
        "value": "7328784T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/91.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/91.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/91.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "ceylan",
        "last": "polat"
      },
      "location": {
        "street": "7005 mevlana cd",
        "city": "tekirdağ",
        "state": "sinop",
        "postcode": 28272,
        "coordinates": {
          "latitude": "-21.3448",
          "longitude": "-6.1742"
        },
        "timezone": {
          "offset": "+11:00",
          "description": "Magadan, Solomon Islands, New Caledonia"
        }
      },
      "email": "ceylan.polat@example.com",
      "login": {
        "uuid": "69726a57-1f7d-44ae-a5de-80ffbde85f3e",
        "username": "blackkoala865",
        "password": "kissing",
        "salt": "h6Naw9Ye",
        "md5": "62f967c3c06375aafed45cea4614319e",
        "sha1": "0025a03d1d55bf9e0362257d3fdf5927bd78f5ab",
        "sha256": "2c1cdfab45f9a31990cf0fdd88cc4befd3a0aeacd22bf012184e870c80395c1d"
      },
      "dob": {
        "date": "1978-09-19T22:13:11Z",
        "age": 40
      },
      "registered": {
        "date": "2004-12-15T04:00:20Z",
        "age": 14
      },
      "phone": "(230)-783-8465",
      "cell": "(060)-739-4317",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/54.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/54.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/54.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "mademoiselle",
        "first": "marilena",
        "last": "moreau"
      },
      "location": {
        "street": "3872 place du 8 février 1962",
        "city": "schangnau",
        "state": "glarus",
        "postcode": 9827,
        "coordinates": {
          "latitude": "23.8539",
          "longitude": "174.0043"
        },
        "timezone": {
          "offset": "+6:00",
          "description": "Almaty, Dhaka, Colombo"
        }
      },
      "email": "marilena.moreau@example.com",
      "login": {
        "uuid": "8334b546-b54d-4cd6-a93a-bfbebb32ea05",
        "username": "organiczebra211",
        "password": "smooth",
        "salt": "eSJIDpva",
        "md5": "5db8876fba5174d0ed0dd6573d4e58b4",
        "sha1": "ed50ea08f1a89c212e7994d16fc6434dab21ea08",
        "sha256": "f34685325d55cb42347707815707bf9ece3019bd6695f1ae4feefdf7d53acfdd"
      },
      "dob": {
        "date": "1992-06-21T13:16:05Z",
        "age": 27
      },
      "registered": {
        "date": "2011-11-22T08:29:38Z",
        "age": 7
      },
      "phone": "(891)-745-5812",
      "cell": "(361)-390-2056",
      "id": {
        "name": "AVS",
        "value": "756.9218.2840.37"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/79.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
      },
      "nat": "CH"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "clara",
        "last": "thomsen"
      },
      "location": {
        "street": "1247 svanevej",
        "city": "silkeboeg",
        "state": "syddanmark",
        "postcode": 39147,
        "coordinates": {
          "latitude": "84.8437",
          "longitude": "112.5801"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "clara.thomsen@example.com",
      "login": {
        "uuid": "1827da29-350b-4c4e-aa80-a0c4f752b3fa",
        "username": "bigpanda374",
        "password": "morgan1",
        "salt": "46PPRrCs",
        "md5": "cd523e88916e1b282d896296fe6ec1ae",
        "sha1": "5e4a3017929f61fdffa4406b41011e27567f4957",
        "sha256": "80271542149bdec6be80364e936e715ed5e257ef2d744a86c34310640fd769aa"
      },
      "dob": {
        "date": "1973-02-14T19:57:01Z",
        "age": 46
      },
      "registered": {
        "date": "2011-12-02T13:47:41Z",
        "age": 7
      },
      "phone": "51919768",
      "cell": "38409642",
      "id": {
        "name": "CPR",
        "value": "841863-3268"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/47.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "hudson",
        "last": "patel"
      },
      "location": {
        "street": "6498 george st",
        "city": "fountainbleu",
        "state": "nunavut",
        "postcode": "F4J 9H3",
        "coordinates": {
          "latitude": "37.2835",
          "longitude": "-70.6331"
        },
        "timezone": {
          "offset": "-11:00",
          "description": "Midway Island, Samoa"
        }
      },
      "email": "hudson.patel@example.com",
      "login": {
        "uuid": "c64c5e1b-9873-450d-9f1e-9d4fee2c788d",
        "username": "smallgorilla707",
        "password": "suck",
        "salt": "jcKej2E9",
        "md5": "3a82f015fa22636576f24a261d0e85c8",
        "sha1": "44c956be8056c6540a89075e3a4bb9b65bdcecf6",
        "sha256": "7fcef1680254c0edc2e93c2cd22bd8190b7fdfa8902468ab84dc7f3273d06f86"
      },
      "dob": {
        "date": "1981-03-20T23:13:16Z",
        "age": 38
      },
      "registered": {
        "date": "2006-11-15T14:28:41Z",
        "age": 12
      },
      "phone": "623-313-9351",
      "cell": "209-094-8266",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/73.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/73.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/73.jpg"
      },
      "nat": "CA"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "emma",
        "last": "wang"
      },
      "location": {
        "street": "2418 brougham street",
        "city": "lower hutt",
        "state": "auckland",
        "postcode": 78758,
        "coordinates": {
          "latitude": "-57.2965",
          "longitude": "-77.4026"
        },
        "timezone": {
          "offset": "+9:00",
          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
        }
      },
      "email": "emma.wang@example.com",
      "login": {
        "uuid": "5925f130-89f3-43d4-9715-c5f3fc11cbf5",
        "username": "angrytiger497",
        "password": "rainman",
        "salt": "E7nHB0de",
        "md5": "cc3196ad62234c62cbff7453ce41e506",
        "sha1": "50645dc8bb4a63d779a5090d42e003aa29ddfcc6",
        "sha256": "94bf985c2f77322f04792c4a053c1a03da3481d8ddd5ce0ad44b6a11b5835e7f"
      },
      "dob": {
        "date": "1983-09-13T10:20:56Z",
        "age": 35
      },
      "registered": {
        "date": "2017-01-21T04:44:16Z",
        "age": 2
      },
      "phone": "(073)-305-6838",
      "cell": "(116)-639-1545",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/80.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/80.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/80.jpg"
      },
      "nat": "NZ"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "anton",
        "last": "kristensen"
      },
      "location": {
        "street": "3143 søndre landevej",
        "city": "billum",
        "state": "sjælland",
        "postcode": 80517,
        "coordinates": {
          "latitude": "70.3963",
          "longitude": "154.3772"
        },
        "timezone": {
          "offset": "-6:00",
          "description": "Central Time (US & Canada), Mexico City"
        }
      },
      "email": "anton.kristensen@example.com",
      "login": {
        "uuid": "aab47491-b489-4792-a2ec-ad4c71fa73d7",
        "username": "blueswan230",
        "password": "tiny",
        "salt": "oac5LXd9",
        "md5": "4c70dde074e1be24400b1988e09766a7",
        "sha1": "42d18356b71b5d04352ef3b15db56abc53a11996",
        "sha256": "3c6167e44a83f4983004a225d3bb3d8554c2ce7cb1af22b776fbd0084f210e8c"
      },
      "dob": {
        "date": "1980-11-18T23:16:12Z",
        "age": 38
      },
      "registered": {
        "date": "2009-02-17T16:27:32Z",
        "age": 10
      },
      "phone": "41951985",
      "cell": "54413236",
      "id": {
        "name": "CPR",
        "value": "419606-2316"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/68.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "kathleen",
        "last": "butler"
      },
      "location": {
        "street": "3813 pearse street",
        "city": "buncrana",
        "state": "cavan",
        "postcode": 21063,
        "coordinates": {
          "latitude": "-63.7403",
          "longitude": "132.2120"
        },
        "timezone": {
          "offset": "-3:30",
          "description": "Newfoundland"
        }
      },
      "email": "kathleen.butler@example.com",
      "login": {
        "uuid": "a654ac27-6b0a-4759-9209-12d7fdd6ab4b",
        "username": "tinywolf701",
        "password": "postman",
        "salt": "mwtjIgMi",
        "md5": "dc76b75644dca8f2ae86ddb607c68878",
        "sha1": "8ce3116d161299b0afc613a3ac070ddb543f4504",
        "sha256": "1086eba4f38a34e7f035331b5dfa834172b95b88126643559c1b271851a7ba17"
      },
      "dob": {
        "date": "1950-09-17T12:51:13Z",
        "age": 68
      },
      "registered": {
        "date": "2014-08-21T11:25:05Z",
        "age": 4
      },
      "phone": "021-298-2622",
      "cell": "081-735-1566",
      "id": {
        "name": "PPS",
        "value": "7236873T"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/96.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
      },
      "nat": "IE"
    },
    {
      "gender": "female",
      "name": {
        "title": "mrs",
        "first": "margarita",
        "last": "garrido"
      },
      "location": {
        "street": "368 calle nebrija",
        "city": "jerez de la frontera",
        "state": "extremadura",
        "postcode": 73645,
        "coordinates": {
          "latitude": "28.4224",
          "longitude": "-82.2253"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "margarita.garrido@example.com",
      "login": {
        "uuid": "5514e692-30f0-4f7d-8aa3-65f46df4d9d3",
        "username": "yellowkoala745",
        "password": "gothic",
        "salt": "rsHRlQr8",
        "md5": "e2f7bd252e742e3c933fc93d361c4742",
        "sha1": "196252ef832ce4a38e7a66536fb1fca833a1ca40",
        "sha256": "868b86ff47c6a07fee1c4422dc5b84fee67bce9d8e9930a331377539ce577468"
      },
      "dob": {
        "date": "1963-09-30T11:37:12Z",
        "age": 55
      },
      "registered": {
        "date": "2011-11-05T20:52:48Z",
        "age": 7
      },
      "phone": "941-533-567",
      "cell": "601-109-389",
      "id": {
        "name": "DNI",
        "value": "24718819-X"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/2.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/2.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/2.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "mason",
        "last": "king"
      },
      "location": {
        "street": "8236 smokey ln",
        "city": "gladstone",
        "state": "victoria",
        "postcode": 8736,
        "coordinates": {
          "latitude": "-72.8360",
          "longitude": "-38.9595"
        },
        "timezone": {
          "offset": "+8:00",
          "description": "Beijing, Perth, Singapore, Hong Kong"
        }
      },
      "email": "mason.king@example.com",
      "login": {
        "uuid": "0c7e387f-01b0-4e7b-ad1c-4508bd5e22aa",
        "username": "blackpanda989",
        "password": "gman",
        "salt": "8333RbGV",
        "md5": "f439adedaf46fe7e1a44001dda9d6ae7",
        "sha1": "b27f324a729e51f081e1dada88b63ecfae9a2d17",
        "sha256": "24993db436a4fd1e94dd6dab2d51818f56b5a614465a492a28e13a70451af7da"
      },
      "dob": {
        "date": "1951-04-08T03:48:46Z",
        "age": 68
      },
      "registered": {
        "date": "2010-07-16T08:05:30Z",
        "age": 8
      },
      "phone": "07-3567-0607",
      "cell": "0426-047-778",
      "id": {
        "name": "TFN",
        "value": "303372123"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/3.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/3.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/3.jpg"
      },
      "nat": "AU"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "kenan",
        "last": "korol"
      },
      "location": {
        "street": "4278 bağdat cd",
        "city": "edirne",
        "state": "adana",
        "postcode": 91145,
        "coordinates": {
          "latitude": "-31.9102",
          "longitude": "158.7309"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "kenan.korol@example.com",
      "login": {
        "uuid": "28794116-35d2-4cc3-80e9-c0fe2d2a6a71",
        "username": "yellowostrich735",
        "password": "passpass",
        "salt": "G3WI1tfg",
        "md5": "72b9e15af5817c80f0f89a2660178d8d",
        "sha1": "ce8372de9313ac6298a47bf02a114f44a27988e0",
        "sha256": "0aaf0bdd5fd56b5f7db113c3c1ac43423808e7f781fb64ac70e2200802f05fdd"
      },
      "dob": {
        "date": "1959-02-11T07:45:17Z",
        "age": 60
      },
      "registered": {
        "date": "2009-08-28T10:10:46Z",
        "age": 9
      },
      "phone": "(211)-614-6402",
      "cell": "(910)-139-4554",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/51.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/51.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/51.jpg"
      },
      "nat": "TR"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "remedios",
        "last": "reyes"
      },
      "location": {
        "street": "2133 calle de alcalá",
        "city": "pontevedra",
        "state": "cataluña",
        "postcode": 42353,
        "coordinates": {
          "latitude": "78.0360",
          "longitude": "17.3340"
        },
        "timezone": {
          "offset": "+7:00",
          "description": "Bangkok, Hanoi, Jakarta"
        }
      },
      "email": "remedios.reyes@example.com",
      "login": {
        "uuid": "1fd89772-5469-472e-a0a3-42b9b81046a2",
        "username": "ticklishduck873",
        "password": "nomore",
        "salt": "CaPWssWV",
        "md5": "5c072a13425c9027845098c7b54685b0",
        "sha1": "571b440e1fc2afd6dd4d38c8434c5309075a965c",
        "sha256": "b59ec60ed581791fe913fb27627cc4c8d27a3ca357e3fd1f34a359679fa385b7"
      },
      "dob": {
        "date": "1954-01-15T21:42:59Z",
        "age": 65
      },
      "registered": {
        "date": "2011-01-24T23:11:01Z",
        "age": 8
      },
      "phone": "926-030-511",
      "cell": "693-854-816",
      "id": {
        "name": "DNI",
        "value": "03909388-J"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/22.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/22.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/22.jpg"
      },
      "nat": "ES"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "léandro",
        "last": "bourgeois"
      },
      "location": {
        "street": "4156 rue docteur-bonhomme",
        "city": "roubaix",
        "state": "tarn",
        "postcode": 86336,
        "coordinates": {
          "latitude": "-81.0820",
          "longitude": "-135.7467"
        },
        "timezone": {
          "offset": "-8:00",
          "description": "Pacific Time (US & Canada)"
        }
      },
      "email": "léandro.bourgeois@example.com",
      "login": {
        "uuid": "35429192-befa-41cf-a3ee-4b44c5929aac",
        "username": "smallfrog553",
        "password": "pretzel",
        "salt": "dlqv1T8o",
        "md5": "c5d812c49d4128b59d62ae5b5f8e3887",
        "sha1": "2216d6280248a3b39a2daf27134237caefdc4535",
        "sha256": "2ad5d1aed54eb7abaa0c4091f91f9153c3072082ed2a753217f0fbda223c5bd3"
      },
      "dob": {
        "date": "1979-03-31T20:11:31Z",
        "age": 40
      },
      "registered": {
        "date": "2017-10-06T20:48:10Z",
        "age": 1
      },
      "phone": "04-44-20-67-28",
      "cell": "06-94-77-59-21",
      "id": {
        "name": "INSEE",
        "value": "1NNaN64939813 13"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/17.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/17.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/17.jpg"
      },
      "nat": "FR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "alarico",
        "last": "moreira"
      },
      "location": {
        "street": "440 rua mato grosso ",
        "city": "simões filho",
        "state": "santa catarina",
        "postcode": 72723,
        "coordinates": {
          "latitude": "-47.3032",
          "longitude": "-41.6941"
        },
        "timezone": {
          "offset": "+3:30",
          "description": "Tehran"
        }
      },
      "email": "alarico.moreira@example.com",
      "login": {
        "uuid": "aeb56e95-880e-469b-848b-2a4f6f7b5906",
        "username": "whiteostrich202",
        "password": "silver1",
        "salt": "Niycpnx4",
        "md5": "1ede63e953d79684b3c732d25e34be93",
        "sha1": "0c701bdec1e1f7757cd62796915cc5911d16d628",
        "sha256": "649c6775c79b538ab205f25762090a06a6689d942495688e1e0a6a4b9f5f1f48"
      },
      "dob": {
        "date": "1970-12-19T15:11:35Z",
        "age": 48
      },
      "registered": {
        "date": "2005-06-27T07:45:23Z",
        "age": 13
      },
      "phone": "(46) 6844-2468",
      "cell": "(83) 7842-7507",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/21.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/21.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/21.jpg"
      },
      "nat": "BR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "كيان",
        "last": "کریمی"
      },
      "location": {
        "street": "9583 میدان فلسطین",
        "city": "شهریار",
        "state": "کرمان",
        "postcode": 64259,
        "coordinates": {
          "latitude": "-58.1205",
          "longitude": "17.0292"
        },
        "timezone": {
          "offset": "-9:00",
          "description": "Alaska"
        }
      },
      "email": "كيان.کریمی@example.com",
      "login": {
        "uuid": "548ab012-0e6e-4f46-b3ed-2ee07a7d9c6c",
        "username": "lazyrabbit384",
        "password": "xyz123",
        "salt": "S2PfaHeB",
        "md5": "42ae3e22fa388cb5e895be494a5a4c5c",
        "sha1": "8c39a5343e3990f0a95f8b7773d0adf4995f0d14",
        "sha256": "861a39c998540ad509db5676f35b3f5bb10bca9096b822a09f1d8fae714dc6ec"
      },
      "dob": {
        "date": "1956-01-28T15:06:43Z",
        "age": 63
      },
      "registered": {
        "date": "2011-11-26T21:28:58Z",
        "age": 7
      },
      "phone": "055-81867255",
      "cell": "0928-447-0889",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/86.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/86.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/86.jpg"
      },
      "nat": "IR"
    },
    {
      "gender": "male",
      "name": {
        "title": "mr",
        "first": "johan",
        "last": "poulsen"
      },
      "location": {
        "street": "8743 mosevænget",
        "city": "vesterborg",
        "state": "sjælland",
        "postcode": 96661,
        "coordinates": {
          "latitude": "-6.5701",
          "longitude": "165.0271"
        },
        "timezone": {
          "offset": "-2:00",
          "description": "Mid-Atlantic"
        }
      },
      "email": "johan.poulsen@example.com",
      "login": {
        "uuid": "eedb08c6-2bf2-480b-999b-0a1b3907bcbd",
        "username": "bigwolf475",
        "password": "shaman",
        "salt": "A3VqwSL6",
        "md5": "3d495783ec171fb31792202206ded43b",
        "sha1": "347adb455f71eb1bbc06625698f4cadd107b5e3c",
        "sha256": "a268ece45ada1b1b5546c0e0737d35bb1021a4db6d28eba68c7de082833592f5"
      },
      "dob": {
        "date": "1972-03-07T03:39:37Z",
        "age": 47
      },
      "registered": {
        "date": "2005-09-28T09:33:24Z",
        "age": 13
      },
      "phone": "06297264",
      "cell": "79079664",
      "id": {
        "name": "CPR",
        "value": "965004-9439"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/men/12.jpg",
        "medium": "https://randomuser.me/api/portraits/med/men/12.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/men/12.jpg"
      },
      "nat": "DK"
    },
    {
      "gender": "female",
      "name": {
        "title": "ms",
        "first": "maike",
        "last": "rödel"
      },
      "location": {
        "street": "kirchgasse 147",
        "city": "teupitz",
        "state": "baden-württemberg",
        "postcode": 26275,
        "coordinates": {
          "latitude": "-26.0219",
          "longitude": "-146.6271"
        },
        "timezone": {
          "offset": "+2:00",
          "description": "Kaliningrad, South Africa"
        }
      },
      "email": "maike.rödel@example.com",
      "login": {
        "uuid": "55b4336d-de28-48d6-940e-8ec8d511afab",
        "username": "heavygorilla791",
        "password": "molson",
        "salt": "x4tUhli6",
        "md5": "1fe6342d1ef970cede09eb0eb562f692",
        "sha1": "e9a3a3534785f231a09737aa2dbb16032a81f1db",
        "sha256": "c1fc7d603c4781bdaa2d78028d7b8a2066c6989d3f6dcdeea33e724ee7c49dae"
      },
      "dob": {
        "date": "1947-11-28T00:12:11Z",
        "age": 71
      },
      "registered": {
        "date": "2015-05-13T15:24:16Z",
        "age": 4
      },
      "phone": "0243-2771783",
      "cell": "0176-1704589",
      "id": {
        "name": "",
        "value": null
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/68.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
      },
      "nat": "DE"
    }
  ],
  "info": {
    "seed": "327af306044dd127",
    "results": 20,
    "page": 1,
    "version": "1.2"
  }
}
}

  render() {
    return (

      /* FlatList Demo */
      <View style={styles.container}>
      <CustomListview
        itemList={this.getData()}
      />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop:45,
    marginBottom:20
  },
});


