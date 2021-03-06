const sampleData = {
  "businesses": [
    {
        "id": "wGl_DyNxSv8KUtYgiuLhmA",
        "alias": "bi-rite-creamery-san-francisco",
        "name": "Bi-Rite Creamery",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/iPNJKlOQ7-eyqa4Yv2r2BA/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/bi-rite-creamery-san-francisco?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
        "review_count": 9656,
        "categories": [
            {
                "alias": "icecream",
                "title": "Ice Cream & Frozen Yogurt"
            }
        ],
        "rating": 4.5,
        "coordinates": {
            "latitude": 37.761591,
            "longitude": -122.425717
        },
        "transactions": [
            "delivery"
        ],
        "price": "$",
        "location": {
            "address1": "3692 18th St",
            "address2": null,
            "address3": "",
            "city": "San Francisco",
            "zip_code": "94110",
            "country": "US",
            "state": "CA",
            "display_address": [
                "3692 18th St",
                "San Francisco, CA 94110"
            ]
        },
        "phone": "+14156265600",
        "display_phone": "(415) 626-5600",
        "distance": 683.4110760395474
    },
    {
        "id": "lJAGnYzku5zSaLnQ_T6_GQ",
        "alias": "brendas-french-soul-food-san-francisco-5",
        "name": "Brenda's French Soul Food",
        "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Mk3I-OsSpBR_eEIFWngOLQ/o.jpg",
        "is_closed": false,
        "url": "https://www.yelp.com/biz/brendas-french-soul-food-san-francisco-5?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
        "review_count": 11126,
        "categories": [
            {
                "alias": "breakfast_brunch",
                "title": "Breakfast & Brunch"
            },
            {
                "alias": "southern",
                "title": "Southern"
            },
            {
                "alias": "cajun",
                "title": "Cajun/Creole"
            }
        ],
        "rating": 4.0,
        "coordinates": {
            "latitude": 37.7829016035273,
            "longitude": -122.419043442957
        },
        "transactions": [
            "delivery"
        ],
        "price": "$$",
        "location": {
            "address1": "652 Polk St",
            "address2": "",
            "address3": "",
            "city": "San Francisco",
            "zip_code": "94102",
            "country": "US",
            "state": "CA",
            "display_address": [
                "652 Polk St",
                "San Francisco, CA 94102"
            ]
        },
        "phone": "+14153458100",
        "display_phone": "(415) 345-8100",
        "distance": 1901.257604763642
    }
  ]
}
//       {
//           "id": "V7lXZKBDzScDeGB8JmnzSA",
//           "alias": "katzs-delicatessen-new-york",
//           "name": "Katz's Delicatessen",
//           "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/qr7eSU6CFwRGZ7Rc-QEoTQ/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/katzs-delicatessen-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 12761,
//           "categories": [
//               {
//                   "alias": "delis",
//                   "title": "Delis"
//               },
//               {
//                   "alias": "sandwiches",
//                   "title": "Sandwiches"
//               },
//               {
//                   "alias": "soup",
//                   "title": "Soup"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 40.722237,
//               "longitude": -73.9875259
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "205 E Houston St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10002",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "205 E Houston St",
//                   "New York, NY 10002"
//               ]
//           },
//           "phone": "+12122542246",
//           "display_phone": "(212) 254-2246",
//           "distance": 1952.3706239726876
//       },
//       {
//           "id": "44SY464xDHbvOcjDzRbKkQ",
//           "alias": "ippudo-ny-new-york-7",
//           "name": "Ippudo NY",
//           "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/zF3EgqHCk7zBUwD2B3WTEA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/ippudo-ny-new-york-7?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 10046,
//           "categories": [
//               {
//                   "alias": "ramen",
//                   "title": "Ramen"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 40.73092,
//               "longitude": -73.99015
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "65 4th Ave",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10003",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "65 4th Ave",
//                   "New York, NY 10003"
//               ]
//           },
//           "phone": "+12123880088",
//           "display_phone": "(212) 388-0088",
//           "distance": 2854.3012674083675
//       },
//       {
//           "id": "xEnNFXtMLDF5kZDxfaCJgA",
//           "alias": "the-halal-guys-new-york-2",
//           "name": "The Halal Guys",
//           "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/24lb-VP2zVySsY9cq45ETw/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/the-halal-guys-new-york-2?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 9614,
//           "categories": [
//               {
//                   "alias": "foodstands",
//                   "title": "Food Stands"
//               },
//               {
//                   "alias": "mideastern",
//                   "title": "Middle Eastern"
//               },
//               {
//                   "alias": "halal",
//                   "title": "Halal"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 40.761861,
//               "longitude": -73.979306
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$",
//           "location": {
//               "address1": "W 53rd St",
//               "address2": null,
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10019",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "W 53rd St",
//                   "New York, NY 10019"
//               ]
//           },
//           "phone": "+13475271505",
//           "display_phone": "(347) 527-1505",
//           "distance": 6399.019109860832
//       },
//       {
//           "id": "KFnr0CGsHQ2ABFHbLNtobQ",
//           "alias": "central-park-conservancy-new-york",
//           "name": "Central Park Conservancy",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/JP_pPiZqkovwcwZeo2eV9g/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/central-park-conservancy-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 2572,
//           "categories": [
//               {
//                   "alias": "parks",
//                   "title": "Parks"
//               }
//           ],
//           "rating": 5.0,
//           "coordinates": {
//               "latitude": 40.764266,
//               "longitude": -73.971656
//           },
//           "transactions": [],
//           "location": {
//               "address1": "14 E 60th St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10022",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "14 E 60th St",
//                   "New York, NY 10022"
//               ]
//           },
//           "phone": "+12123106600",
//           "display_phone": "(212) 310-6600",
//           "distance": 6814.558069627135
//       },
//       {
//           "id": "jVncyqXwlx_D9f2xZn05tg",
//           "alias": "the-metropolitan-museum-of-art-new-york-3",
//           "name": "The Metropolitan Museum of Art",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/oqhwmydKw-jPcUhoxBGGyg/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/the-metropolitan-museum-of-art-new-york-3?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 2964,
//           "categories": [
//               {
//                   "alias": "artmuseums",
//                   "title": "Art Museums"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.779449,
//               "longitude": -73.963245
//           },
//           "transactions": [],
//           "location": {
//               "address1": "1000 5th Ave",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10028",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "1000 5th Ave",
//                   "New York, NY 10028"
//               ]
//           },
//           "phone": "+12125357710",
//           "display_phone": "(212) 535-7710",
//           "distance": 8634.601734170283
//       },
//       {
//           "id": "jnEv25Y2DosTq2sNnvmC9g",
//           "alias": "los-tacos-no-1-new-york",
//           "name": "Los Tacos No.1",
//           "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/FU44TYl3PzXsE06G4W5aog/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/los-tacos-no-1-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 3137,
//           "categories": [
//               {
//                   "alias": "tacos",
//                   "title": "Tacos"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.7425547,
//               "longitude": -74.0060838
//           },
//           "transactions": [
//               "delivery"
//           ],
//           "price": "$",
//           "location": {
//               "address1": "75 9th Ave",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10011",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "75 9th Ave",
//                   "New York, NY 10011"
//               ]
//           },
//           "phone": "",
//           "display_phone": "",
//           "distance": 4244.358699250552
//       },
//       {
//           "id": "WHRHK3S1mQc3PmhwsGRvbw",
//           "alias": "bibble-and-sip-new-york-2",
//           "name": "Bibble & Sip",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/gX847-f2s1X65RkzsFAWBA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/bibble-and-sip-new-york-2?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 4954,
//           "categories": [
//               {
//                   "alias": "coffee",
//                   "title": "Coffee & Tea"
//               },
//               {
//                   "alias": "bakeries",
//                   "title": "Bakeries"
//               },
//               {
//                   "alias": "desserts",
//                   "title": "Desserts"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.76282,
//               "longitude": -73.98518
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$",
//           "location": {
//               "address1": "253 W 51st St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10019",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "253 W 51st St",
//                   "New York, NY 10019"
//               ]
//           },
//           "phone": "+16466495116",
//           "display_phone": "(646) 649-5116",
//           "distance": 6427.9212521553545
//       },
//       {
//           "id": "jjJc_CrkB2HodEinB6cWww",
//           "alias": "lovemama-new-york",
//           "name": "LoveMama",
//           "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/bLlFKTlVuLfmF-lIDGIjZA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/lovemama-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 5365,
//           "categories": [
//               {
//                   "alias": "thai",
//                   "title": "Thai"
//               },
//               {
//                   "alias": "malaysian",
//                   "title": "Malaysian"
//               },
//               {
//                   "alias": "vietnamese",
//                   "title": "Vietnamese"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.730408722512074,
//               "longitude": -73.98612673033213
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "174 2nd Ave",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10003",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "174 2nd Ave",
//                   "New York, NY 10003"
//               ]
//           },
//           "phone": "+12122545370",
//           "display_phone": "(212) 254-5370",
//           "distance": 2859.902795118878
//       },
//       {
//           "id": "zj8Lq1T8KIC5zwFief15jg",
//           "alias": "prince-street-pizza-new-york-2",
//           "name": "Prince Street Pizza",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/ZAukOyv530w4KjOHC5YY1w/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/prince-street-pizza-new-york-2?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 3881,
//           "categories": [
//               {
//                   "alias": "pizza",
//                   "title": "Pizza"
//               },
//               {
//                   "alias": "italian",
//                   "title": "Italian"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.72308755605564,
//               "longitude": -73.99453001177575
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$",
//           "location": {
//               "address1": "27 Prince St",
//               "address2": null,
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10012",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "27 Prince St",
//                   "New York, NY 10012"
//               ]
//           },
//           "phone": "+12129664100",
//           "display_phone": "(212) 966-4100",
//           "distance": 1961.8771417367063
//       },
//       {
//           "id": "B3_K2kUVbYOU0VaLcj_LTw",
//           "alias": "thai-villa-new-york-2",
//           "name": "Thai Villa",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/XKvKGgVuj4_jhqHPVQj4_A/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/thai-villa-new-york-2?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 3719,
//           "categories": [
//               {
//                   "alias": "thai",
//                   "title": "Thai"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.73902,
//               "longitude": -73.99065
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "5 E 19th St",
//               "address2": "G Floor",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10003",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "5 E 19th St",
//                   "G Floor",
//                   "New York, NY 10003"
//               ]
//           },
//           "phone": "+12128029999",
//           "display_phone": "(212) 802-9999",
//           "distance": 3744.570399827637
//       },
//       {
//           "id": "j1S3NUrkB3BVT49n_e76NQ",
//           "alias": "best-bagel-and-coffee-new-york",
//           "name": "Best Bagel & Coffee",
//           "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/9-8DVzhwfzFS5GUCq3O6NA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/best-bagel-and-coffee-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 3469,
//           "categories": [
//               {
//                   "alias": "bagels",
//                   "title": "Bagels"
//               },
//               {
//                   "alias": "coffee",
//                   "title": "Coffee & Tea"
//               },
//               {
//                   "alias": "breakfast_brunch",
//                   "title": "Breakfast & Brunch"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.7522683,
//               "longitude": -73.9910861
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$",
//           "location": {
//               "address1": "225 W 35th St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10001",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "225 W 35th St",
//                   "New York, NY 10001"
//               ]
//           },
//           "phone": "+12125644409",
//           "display_phone": "(212) 564-4409",
//           "distance": 5213.5315009761325
//       },
//       {
//           "id": "UA2M9QFZghe-9th2KwLoWQ",
//           "alias": "burger-and-lobster-flatiron-nyc-new-york",
//           "name": "Burger & Lobster - Flatiron NYC",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/r0TGigSI5cXeM_fWBct4SA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/burger-and-lobster-flatiron-nyc-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 5488,
//           "categories": [
//               {
//                   "alias": "seafood",
//                   "title": "Seafood"
//               },
//               {
//                   "alias": "burgers",
//                   "title": "Burgers"
//               },
//               {
//                   "alias": "newamerican",
//                   "title": "American (New)"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 40.74007,
//               "longitude": -73.99344
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "39 W 19th St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10011",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "39 W 19th St",
//                   "New York, NY 10011"
//               ]
//           },
//           "phone": "+16468337532",
//           "display_phone": "(646) 833-7532",
//           "distance": 3849.54386751767
//       },
//       {
//           "id": "veq1Bl1DW3UWMekZJUsG1Q",
//           "alias": "gramercy-tavern-new-york",
//           "name": "Gramercy Tavern",
//           "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/VZA5XdH4ZsEhNRDHSAjYjw/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/gramercy-tavern-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 2954,
//           "categories": [
//               {
//                   "alias": "newamerican",
//                   "title": "American (New)"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.73844,
//               "longitude": -73.98825
//           },
//           "transactions": [
//               "delivery"
//           ],
//           "price": "$$$$",
//           "location": {
//               "address1": "42 E 20th St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10003",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "42 E 20th St",
//                   "New York, NY 10003"
//               ]
//           },
//           "phone": "+12124770777",
//           "display_phone": "(212) 477-0777",
//           "distance": 3702.8075801197165
//       },
//       {
//           "id": "JION8hhg7q6zyayHYwhxIw",
//           "alias": "the-high-line-new-york",
//           "name": "The High Line",
//           "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/17S5uE5ARNaFjLWizkS7DQ/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/the-high-line-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 2376,
//           "categories": [
//               {
//                   "alias": "parks",
//                   "title": "Parks"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.7396,
//               "longitude": -74.0084399
//           },
//           "transactions": [],
//           "location": {
//               "address1": "820 Washington St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10014",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "820 Washington St",
//                   "New York, NY 10014"
//               ]
//           },
//           "phone": "+12122069922",
//           "display_phone": "(212) 206-9922",
//           "distance": 3992.412193223877
//       },
//       {
//           "id": "4yPqqJDJOQX69gC66YUDkA",
//           "alias": "peter-luger-brooklyn-2",
//           "name": "Peter Luger",
//           "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/cWn0RZ0qacJB04sK0Eyafw/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/peter-luger-brooklyn-2?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 5920,
//           "categories": [
//               {
//                   "alias": "steak",
//                   "title": "Steakhouses"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 40.709945,
//               "longitude": -73.962478
//           },
//           "transactions": [],
//           "price": "$$$$",
//           "location": {
//               "address1": "178 Broadway",
//               "address2": "",
//               "address3": "",
//               "city": "Brooklyn",
//               "zip_code": "11211",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "178 Broadway",
//                   "Brooklyn, NY 11211"
//               ]
//           },
//           "phone": "+17183877400",
//           "display_phone": "(718) 387-7400",
//           "distance": 2728.016921522817
//       },
//       {
//           "id": "lWOkeS-wV4no8qqA9OwwEg",
//           "alias": "doughnut-plant-new-york-6",
//           "name": "Doughnut Plant",
//           "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/hLWKXsLv6hyltNSilBy8-g/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/doughnut-plant-new-york-6?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 3261,
//           "categories": [
//               {
//                   "alias": "donuts",
//                   "title": "Donuts"
//               },
//               {
//                   "alias": "coffee",
//                   "title": "Coffee & Tea"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.716334,
//               "longitude": -73.988652
//           },
//           "transactions": [
//               "pickup",
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "379 Grand St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10002",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "379 Grand St",
//                   "New York, NY 10002"
//               ]
//           },
//           "phone": "+12125053700",
//           "display_phone": "(212) 505-3700",
//           "distance": 1300.8284914110848
//       },
//       {
//           "id": "kViIWJFfAfWPpJOwAXBKGA",
//           "alias": "national-september-11-memorial-museum-new-york",
//           "name": "National September 11 Memorial Museum",
//           "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/yoe6Wha7gQlTBNIeFO0UhQ/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/national-september-11-memorial-museum-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 1441,
//           "categories": [
//               {
//                   "alias": "museums",
//                   "title": "Museums"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.71143,
//               "longitude": -74.012481
//           },
//           "transactions": [],
//           "location": {
//               "address1": "180 Greenwich St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10007",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "180 Greenwich St",
//                   "New York, NY 10007"
//               ]
//           },
//           "phone": "+12122665211",
//           "display_phone": "(212) 266-5211",
//           "distance": 1671.270457850173
//       },
//       {
//           "id": "nU4XBdvxDABXqZ6CnB8Dig",
//           "alias": "clinton-street-baking-company-new-york-5",
//           "name": "Clinton Street Baking Company",
//           "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DWHdizJ9bKbXN4yq6nbwAA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/clinton-street-baking-company-new-york-5?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 5205,
//           "categories": [
//               {
//                   "alias": "bakeries",
//                   "title": "Bakeries"
//               },
//               {
//                   "alias": "breakfast_brunch",
//                   "title": "Breakfast & Brunch"
//               },
//               {
//                   "alias": "tradamerican",
//                   "title": "American (Traditional)"
//               }
//           ],
//           "rating": 4.0,
//           "coordinates": {
//               "latitude": 40.721128,
//               "longitude": -73.983933
//           },
//           "transactions": [
//               "delivery"
//           ],
//           "price": "$$",
//           "location": {
//               "address1": "4 Clinton St",
//               "address2": "",
//               "address3": "",
//               "city": "New York",
//               "zip_code": "10002",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "4 Clinton St",
//                   "New York, NY 10002"
//               ]
//           },
//           "phone": "+16466026263",
//           "display_phone": "(646) 602-6263",
//           "distance": 1950.282829638887
//       },
//       {
//           "id": "vk7W3_sQwr7eZbRFsXv6rw",
//           "alias": "taiyaki-nyc-new-york",
//           "name": "Taiyaki NYC",
//           "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/pJkAaXKzoFPj0H1EJ1vYEA/o.jpg",
//           "is_closed": false,
//           "url": "https://www.yelp.com/biz/taiyaki-nyc-new-york?adjust_creative=afVwJgO8FuEZjKM0JsgX1A&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=afVwJgO8FuEZjKM0JsgX1A",
//           "review_count": 2984,
//           "categories": [
//               {
//                   "alias": "desserts",
//                   "title": "Desserts"
//               },
//               {
//                   "alias": "japanese",
//                   "title": "Japanese"
//               },
//               {
//                   "alias": "icecream",
//                   "title": "Ice Cream & Frozen Yogurt"
//               }
//           ],
//           "rating": 4.5,
//           "coordinates": {
//               "latitude": 40.71789,
//               "longitude": -73.9988
//           },
//           "transactions": [
//               "delivery"
//           ],
//           "price": "$",
//           "location": {
//               "address1": "119 Baxter St",
//               "address2": "",
//               "address3": null,
//               "city": "New York",
//               "zip_code": "10013",
//               "country": "US",
//               "state": "NY",
//               "display_address": [
//                   "119 Baxter St",
//                   "New York, NY 10013"
//               ]
//           },
//           "phone": "+12129662882",
//           "display_phone": "(212) 966-2882",
//           "distance": 1439.7258094631309
//       }
//   ],
//   "total": 25100,
//   "region": {
//       "center": {
//           "longitude": -73.99429321289062,
//           "latitude": 40.70544486444615
//       }
//   }
// }

export default sampleData;