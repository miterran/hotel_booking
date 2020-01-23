const about =
	'3 restaurants, a 24-hour fitness center, and a bar/lounge are available at this smoke-free hotel. WiFi in public areas is free. Other amenities include 2 coffee shops/cafés, a 24-hour business center, and self parking. All 192 rooms feature comforts like pillowtop beds and premium bedding, while conveniences include refrigerators and coffee makers. Free WiFi and pillow menus are standard, as are flat-screen TVs with cable channels.';

export default {
	'01': {
		ID: '01',
		name: 'The Pickwick Hotel San Francisco',
		about: about,
		reviews: 3186,
		guestScore: 7.2,
		stars: 3,
		orgPrice: 345,
		salePrice: 199,
		isTKHotel: false,
		coverImg: 'hotel_01',
		location: '85 5th St, San Francisco, CA 94103',
		latitude: 37.78302,
		longitude: -122.40652,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: true,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 169,
				coverImg: 'suite_01'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: true,
				roomQtyLeft: null,
				orgPrice: 379,
				salePrice: 269,
				coverImg: 'suite_02'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: null,
				orgPrice: 679,
				salePrice: 579,
				coverImg: 'suite_03'
			}
		}
	},
	'02': {
		ID: '02',
		name: 'Hilton San Francisco Union Square',
		about: about,
		reviews: 13399,
		guestScore: 7.2,
		stars: 4.5,
		orgPrice: 459,
		salePrice: 253,
		isTKHotel: true,
		coverImg: 'hotel_02',
		location: `333 O'Farrell St, San Francisco, CA 94102`,
		latitude: 37.78598,
		longitude: -122.410851,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_04'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_05'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_06'
			}
		}
	},
	'03': {
		ID: '03',
		name: 'Four Seasons San Francisco',
		about: about,
		reviews: 1234,
		guestScore: 8.9,
		stars: 8,
		orgPrice: 711,
		salePrice: 530,
		isTKHotel: true,
		coverImg: 'hotel_03',
		location: `757 Market St, San Francisco, CA 94103`,
		latitude: 37.786209,
		longitude: -122.404297,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_06'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_08'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_11'
			}
		}
	},
	'04': {
		ID: '04',
		name: "Sheraton Fisherman's Wharf Hotel",
		about: about,
		reviews: 7570,
		guestScore: 7.6,
		stars: 2.5,
		orgPrice: 400,
		salePrice: 275,
		isTKHotel: false,
		coverImg: 'hotel_04',
		location: `2500 Mason St, San Francisco, CA 94133`,
		latitude: 37.807049,
		longitude: -122.413322,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_21'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_24'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_11'
			}
		}
	},
	'05': {
		ID: '05',
		name: 'The Orchard Hotel',
		about: about,
		reviews: 3774,
		guestScore: 8.8,
		stars: 3.5,
		orgPrice: 459,
		salePrice: 231,
		isTKHotel: false,
		coverImg: 'hotel_05',
		location: `665 Bush St, San Francisco, CA 94108`,
		latitude: 37.78998,
		longitude: -122.40843,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_19'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_07'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_09'
			}
		}
	},
	'06': {
		ID: '06',
		name: 'Hotel Kabuki San Francisco',
		about: about,
		reviews: 4530,
		guestScore: 8.1,
		stars: 3,
		orgPrice: 454,
		salePrice: 276,
		isTKHotel: true,
		coverImg: 'hotel_06',
		location: `1625 Post St, San Francisco, CA 94115`,
		latitude: 37.78549,
		longitude: -122.42865,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_15'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_14'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_13'
			}
		}
	},
	'07': {
		ID: '07',
		name: 'Hotel Fusion',
		about: about,
		reviews: 4226,
		guestScore: 7.2,
		stars: 2,
		orgPrice: 267,
		salePrice: 152,
		isTKHotel: false,
		coverImg: 'hotel_07',
		location: `1625 Post St, San Francisco, CA 94115`,
		latitude: 37.78572,
		longitude: -122.40852,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_06'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_08'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_16'
			}
		}
	},
	'08': {
		ID: '08',
		name: 'Americania Hotel',
		about: about,
		reviews: 3037,
		guestScore: 7.1,
		stars: 3,
		orgPrice: 285,
		salePrice: 144,
		isTKHotel: false,
		coverImg: 'hotel_08',
		location: `121 7th St, San Francisco, CA 94103`,
		latitude: 37.778679,
		longitude: -122.409882,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_18'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_05'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_13'
			}
		}
	},
	'09': {
		ID: '09',
		name: 'Fairmont San Francisco',
		about: about,
		reviews: 7565,
		guestScore: 8.8,
		stars: 5,
		orgPrice: 385,
		salePrice: 296,
		isTKHotel: true,
		coverImg: 'hotel_09',
		location: `950 Mason St, San Francisco, CA 94108`,
		latitude: 37.792431,
		longitude: -122.410088,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_13'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_14'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_15'
			}
		}
	},
	'10': {
		ID: '10',
		name: 'Kimpton Sir Francis Drake Hotel',
		about: about,
		reviews: 2765,
		guestScore: 7.9,
		stars: 3.5,
		orgPrice: 290,
		salePrice: 210,
		isTKHotel: false,
		coverImg: 'hotel_10',
		location: `450 Powell St, San Francisco, CA 94102`,
		latitude: 37.788799,
		longitude: -122.408363,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_17'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_15'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_13'
			}
		}
	},
	'11': {
		ID: '11',
		name: "Marine's Memorial Club",
		about: about,
		reviews: 604,
		guestScore: 8.5,
		stars: 3,
		orgPrice: null,
		salePrice: 219,
		isTKHotel: true,
		coverImg: 'hotel_11',
		location: `609 Sutter St, San Francisco, CA 94102`,
		latitude: 37.7887,
		longitude: -122.410477,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_11'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_10'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_09'
			}
		}
	},
	'12': {
		ID: '12',
		name: 'Cow Hollow Motor Inn',
		about: about,
		reviews: 1163,
		guestScore: 8.4,
		stars: 3,
		orgPrice: null,
		salePrice: 189,
		isTKHotel: false,
		coverImg: 'hotel_12',
		location: `2190 Lombard St, San Francisco, CA 94123`,
		latitude: 37.79984,
		longitude: -122.43745,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_02'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_24'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_15'
			}
		}
	},
	'13': {
		ID: '13',
		name: 'Queen Anne Hotel',
		about: about,
		reviews: 2630,
		guestScore: 8.4,
		stars: 4,
		orgPrice: 242,
		salePrice: 209,
		isTKHotel: false,
		coverImg: 'hotel_13',
		location: `1590 Sutter St, San Francisco, CA 94109`,
		latitude: 37.787231,
		longitude: -122.426514,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_15'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_17'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_01'
			}
		}
	},
	'14': {
		ID: '14',
		name: 'Cornell Hotel de France',
		about: about,
		reviews: 2133,
		guestScore: 8.4,
		stars: 4,
		orgPrice: null,
		salePrice: 184,
		isTKHotel: true,
		coverImg: 'hotel_14',
		location: `715 Bush St, San Francisco, CA 94108`,
		latitude: 37.78987,
		longitude: -122.40908,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_22'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_23'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_18'
			}
		}
	},
	'15': {
		ID: '15',
		name: 'Nob Hill Motor Inn',
		about: about,
		reviews: 3287,
		guestScore: 7.5,
		stars: 5,
		orgPrice: 323,
		salePrice: 164,
		isTKHotel: false,
		coverImg: 'hotel_15',
		location: `1630 Pacific Ave, San Francisco, CA 94109`,
		latitude: 37.7952,
		longitude: -122.42229,
		rooms: {
			'01': {
				ID: '01',
				name: 'Standard Room',
				beds: '1 Queen Bed',
				isNonRefundable: false,
				roomQtyLeft: 3,
				orgPrice: null,
				salePrice: 189,
				coverImg: 'suite_12'
			},
			'02': {
				ID: '02',
				name: 'Deluxe Room',
				beds: '1 King Bed',
				isNonRefundable: false,
				roomQtyLeft: null,
				orgPrice: null,
				salePrice: 269,
				coverImg: 'suite_14'
			},
			'03': {
				ID: '03',
				name: 'Suite',
				beds: '2 King Bed',
				isNonRefundable: true,
				roomQtyLeft: 2,
				orgPrice: 890,
				salePrice: 579,
				coverImg: 'suite_25'
			}
		}
	}
};
