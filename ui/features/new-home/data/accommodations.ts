import { HotelDetails } from 'src/shared-types/hotel-details.type'

export const accommodations = [
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Equity Point Budapest',
    street_address: 'Nagy Diófa utca 25-27.',
    city: 'Budapest',
    zip_code: '1072',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/king-s.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 40.54,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 40.544399999999996,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 40.544399999999996,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 30.401818815396847,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627487.jpg?k=fe8b4293ba709f8bcff5abd9f9861789cb3b9eb2e5eab900b624fc0d426f911f&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 2509,
          name: 'All (2509)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 837,
          name: 'Wonderful: 9+ (837)',
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 924,
          name: 'Good: 7-9 (924)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Fair: 5-7 (418)',
          count: 418,
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (170)',
          count: 170,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 160,
          name: 'Very Poor: 1-3 (160)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          translation: {
            name: 'Location',
            id: 'topic_location',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Clean',
          isSelected: false,
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Bed',
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Bathroom',
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Towel',
            id: 'topic_towel',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Towel',
          isSelected: false,
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          isSelected: false,
          name: 'Toilet',
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Shower',
          isSelected: false,
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Check-in',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_checkin',
          },
          isSelected: false,
          name: 'Checkin',
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Noise',
            id: 'topic_noise',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Noise',
          isSelected: false,
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Loud',
          translation: {
            name: 'Loud',
            id: 'topic_loud',
            __typename: 'ReviewTopicTranslation',
          },
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Kitchen',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_kitchen',
          },
          isSelected: false,
          name: 'Kitchen',
          id: 261,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Luggage',
            id: 'topic_luggage',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Luggage',
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          name: 'Private',
          isSelected: false,
          translation: {
            name: 'Private',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_private',
          },
          id: 284,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Breakfast',
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Locker',
          translation: {
            name: 'Locker',
            id: 'topic_locker',
            __typename: 'ReviewTopicTranslation',
          },
          id: 277,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Lift',
            id: 'topic_lift',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Lift',
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Window',
            id: 'topic_window',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Window',
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          isSelected: false,
          name: 'Quiet',
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          name: 'Hot',
          isSelected: false,
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bar',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bar',
          },
          name: 'Bar',
          isSelected: false,
          id: 271,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Wifi',
          translation: {
            name: 'WiFi',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_wifi',
          },
          id: 247,
          __typename: 'TopicFilter',
        },
        {
          name: 'Heat',
          isSelected: false,
          translation: {
            name: 'Heat',
            id: 'topic_heat',
            __typename: 'ReviewTopicTranslation',
          },
          id: 291,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          name: 'hotel_staff',
          translation: 'Staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 8.33265686035156,
          __typename: 'RatingScore',
        },
        {
          translation: 'Facilities',
          name: 'hotel_services',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            ufiScoreHigherBound: 9.61482429504395,
            __typename: 'UfiScoreAverage',
          },
          value: 7.06773805618286,
          __typename: 'RatingScore',
        },
        {
          translation: 'Cleanliness',
          name: 'hotel_clean',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 7.3740348815918,
          __typename: 'RatingScore',
        },
        {
          translation: 'Comfort',
          name: 'hotel_comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.63462543487549,
          },
          value: 7.39214468002319,
          __typename: 'RatingScore',
        },
        {
          translation: 'Value for money',
          name: 'hotel_value',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 7.82369709014893,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 8.87952041625977,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            ufiScoreHigherBound: 8.67230033874512,
            __typename: 'UfiScoreAverage',
          },
          value: 8.29365062713623,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      languageFilter: [
        {
          count: 2509,
          name: 'All (2509)',
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          name: 'Danish (7)',
          count: 7,
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (989)',
          count: 989,
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          count: 109,
          name: 'German (109)',
          value: 'de',
          countryFlag: 'de',
          __typename: 'LanguageFilter',
        },
        {
          count: 81,
          name: 'Polish (81)',
          value: 'pl',
          countryFlag: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Spanish (212)',
          count: 212,
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 18,
          name: 'Chinese (18)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Russian (94)',
          count: 94,
          countryFlag: 'ru',
          value: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Swedish (11)',
          count: 11,
          countryFlag: 'se',
          value: 'sv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (99)',
          count: 99,
          countryFlag: 'fr',
          value: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Italian (193)',
          count: 193,
          countryFlag: 'it',
          value: 'it',
          __typename: 'LanguageFilter',
        },
        {
          count: 25,
          name: 'Romanian (25)',
          value: 'ro',
          countryFlag: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          count: 21,
          name: 'Dutch (21)',
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Lithuanian (2)',
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Norwegian (5)',
          count: 5,
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          count: 11,
          name: 'Korean (11)',
          value: 'ko',
          countryFlag: 'kr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hungarian (214)',
          count: 214,
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Thai (4)',
          count: 4,
          countryFlag: 'th',
          value: 'th',
          __typename: 'LanguageFilter',
        },
        {
          count: 56,
          name: 'Ukrainian (56)',
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Arabic (22)',
          count: 22,
          countryFlag: 'sa',
          value: 'ar',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (79)',
          count: 79,
          countryFlag: 'tr',
          value: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Japanese (9)',
          count: 9,
          countryFlag: 'jp',
          value: 'ja',
          __typename: 'LanguageFilter',
        },
        {
          count: 51,
          name: 'Czech (51)',
          value: 'cs',
          countryFlag: 'cz',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Portuguese (60)',
          count: 60,
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Bulgarian (2)',
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          count: 17,
          name: 'Greek (17)',
          value: 'el',
          countryFlag: 'gr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Croatian (19)',
          count: 19,
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (8)',
          count: 8,
          countryFlag: 'rs',
          value: 'sr',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Latvian (1)',
          value: 'lv',
          countryFlag: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Vietnamese (2)',
          count: 2,
          countryFlag: 'vn',
          value: 'vi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Finnish (2)',
          count: 2,
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          count: 30,
          name: 'Slovak (30)',
          value: 'sk',
          countryFlag: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Catalan (3)',
          count: 3,
          countryFlag: 'catalonia',
          value: 'ca',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovenian (9)',
          count: 9,
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          count: 26,
          name: 'Hebrew (26)',
          value: 'he',
          countryFlag: 'il',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Indonesian (1)',
          count: 1,
          countryFlag: 'id',
          value: 'id',
          __typename: 'LanguageFilter',
        },
      ],
      customerTypeFilter: [
        {
          count: 2509,
          name: 'All (2509)',
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (115)',
          count: 115,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Couples (641)',
          count: 641,
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (523)',
          count: 523,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 1230,
          name: 'Solo travelers (1230)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 111,
          name: 'Business travelers (111)',
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      reviewsCount: 2509,
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2023-07-26',
            __typename: 'BookingDetails',
            checkinDate: '2023-07-25',
            numNights: 1,
            roomType: {
              name: 'Bed in 6-Bed Female Dormitory Room',
              id: '7525637',
              __typename: 'RoomTranslation',
            },
            roomId: 7525637,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'b48828715654e632',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50',
            countryCode: 'si',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovenia',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Zorica',
          },
          reviewedDate: 1690451854,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "Maybe the only downside is that you can't ask for a reservation of a lower bed in the bunk bed rooms. It would be convenient for people with partial physical mobility issues. It was a bit of a challenge to climb that narrow bunk bed ladder after a knee surgery. Other than that, no complaints at all.",
            positiveText:
              "It's easily found within the Jewish quarter and within 5 min walk to the main Andrassy alley where most eateries and restaurants are. About 10 min walk from the metro station. The place looks like it has been renewed recently, it also has an elevator. The room was spacious enough with its own bathroom and the bed was comfortable. The lock was included in the price, the towel is there for a small fee. It was clean and spotless. It wasn't exactly soundproof, however the policy of keeping quiet at night has obviously been taken seriously and I had a good night sleep. The girl at the reception desk was very kind to print me the train ticket when leaving. The staff is young, very polite and they speak decent English. Good bargain for the price. I highly recomend this place.",
            lang: 'xu',
            title:
              'A clean and cozy place run by very kind and helpful young people',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-22',
            numNights: 1,
            roomId: 7525632,
            roomType: {
              name: 'Bed in 10-Bed Mixed Dormitory Room',
              id: '7525632',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '07cd9ea1a279551d',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
            countryCode: 'es',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Spain',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Gonzalo',
          },
          isApproved: true,
          reviewedDate: 1724443121,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'Good price, Good location, Amazing staff!',
            lang: 'en',
            positiveText:
              'I arrived before check in time, but the recepcionist allowed me to leave my baggage and She gave me a safe locker for my valuable things!\r\nShe was very kind with me!\r\nI have been here twice!',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-15',
            numNights: 1,
            roomType: {
              name: 'Double Room',
              id: '7525635',
              __typename: 'RoomTranslation',
            },
            roomId: 7525635,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '15f99735a482df86',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/508621333/picture?type=square&height=64&width=64',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Solo traveler',
            username: 'Nash',
          },
          reviewedDate: 1723999501,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              "This is me being extremely picky but if you use the stairs it isn't always clear what floor you are on. Maybe a little sticker on each floor saying a number....I only had this issue when I came back once late (I had a drink) 😬",
            textTrivialFlag: 0,
            title: 'Exactly what it says and affordable',
            lang: 'en',
            positiveText:
              'Staff were helpful. Easy to add on a extra day if needed.\nLocation was perfect.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-17',
            numNights: 1,
            roomId: 7525635,
            roomType: {
              name: 'Double Room',
              id: '7525635',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'b10acbb3b3621523',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJYZd0FJAKRt5rX4H14Wm399MHzCJtoh_3cy_XOqNlqhKUvrdTl=s96-c',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United States of America',
            guestTypeTranslation: 'Group',
            username: 'Noah',
          },
          reviewedDate: 1723998474,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'Place was clean and as advertised. Awesome location.',
            lang: 'xu',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-19',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-18',
            numNights: 1,
            roomType: {
              name: 'Double Room',
              id: '7525635',
              __typename: 'RoomTranslation',
            },
            roomId: 7525635,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ddd131ee3d9536ac',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AItbvmnz8ZqGxGq0zAxjF0-lxoAIuouwDiof1lLYQgaE=s96-c',
            countryCode: 'hu',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Hungary',
            guestTypeTranslation: 'Family',
            username: 'Eva',
          },
          isApproved: true,
          reviewedDate: 1723726916,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            positiveText: 'location',
            title: null,
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-11',
            numNights: 1,
            roomId: 7525610,
            roomType: {
              name: 'Bed in 6-Bed Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525610',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '0da56de31ef3da15',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AFdZucowKaJGvJVHARG9G1yBCH9ksKU9aNMvei5guNVF=s96-c',
            countryCode: 'au',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Australia',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Heffer',
          },
          isApproved: true,
          reviewedDate: 1723701171,
          textDetails: {
            negativeText: 'Nothing not to like.',
            textTrivialFlag: 0,
            title: 'Highly recommended',
            lang: 'en',
            positiveText:
              "Great location. All the staff were friendly and even more helpful than I'd usually expect.",
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-05',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-04',
            numNights: 1,
            roomType: {
              name: 'Bed in 8-Bed Dormitory Room',
              id: '7525602',
              __typename: 'RoomTranslation',
            },
            roomId: 7525602,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '18056f3aab5d6b0e',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh4.googleusercontent.com/-FDhqqob3gCk/AAAAAAAAAAI/AAAAAAAAAgA/AMZuucl_GO-yIQMPa5jkuPjiqKn3fdv1sA/s96-c/photo.jpg',
            countryCode: 'ba',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Bosnia and Herzegovina',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Mirjan',
          },
          reviewedDate: 1723460469,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'Good hostel experience',
            lang: 'en',
            positiveText:
              'The location is very good with a walking distance to major tourist places. The price was reasonable. The staff was kind and helpful. Great value for the money, for sure!',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-06',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-05',
            numNights: 1,
            roomType: {
              name: 'Bed in 6-Bed Female Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525637',
            },
            roomId: 7525637,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'bef8bb2ae5cd4742',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh5.googleusercontent.com/-Q__cOxgtnsE/AAAAAAAAAAI/AAAAAAAAEHs/7B6psB17wL0/photo.jpg',
            countryCode: 'in',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'India',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Medha',
          },
          reviewedDate: 1723185517,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'NA',
            lang: 'en',
            title: 'Good stay in a clean and calm neighborhood',
            positiveText:
              'The location was good. Pretty close to every metro station or bus stops at a walking distance of 5-10mins.\r\nEven the bus stop for the airport shuttle was close to the hostel.\r\nMany good restaurants nearby.\r\nGood luggage storing facilities',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-03',
            numNights: 5,
            roomId: 7525603,
            roomType: {
              name: 'Bed in 4-Bed Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525603',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '74881dfaad5e3f75',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocLXLq9V-fQ5t8cuIEn5jbeNsYATulBRiqRxpc4hRM2eJlGIu7wuVg=s96-c',
            countryCode: 'se',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Sweden',
            guestTypeTranslation: 'Solo traveler',
            username: 'Peace',
          },
          reviewedDate: 1723147751,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'I felt safe sharing my space with three other people in the room. Everyone was respectful, caring and thoughtful. Mostly, they were easy to have conversations with, and this lightened up the room.\nThe staff are good too and they are reliable. \nThe services are great too.',
            lang: 'en',
            title: 'Home away from home.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-07',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-06',
            numNights: 1,
            roomType: {
              name: 'Bed in 6-Bed Female Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525637',
            },
            roomId: 7525637,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '4bc7a1b3b2fbd412',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ALm5wu3ljDrtcutqUt4UWjCzFBRMXdnsbNS_BfBRvjgt=s96-c',
            countryCode: 'fr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'France',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Sandra',
          },
          reviewedDate: 1723099485,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              "Small details that could be improved but in general it's OK.",
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText:
              'The friendly girl at the desk. It was mostly quiet. It was easy to access from the airport and really convenient to get all the public transport needed. I would recommend.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-06',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-05',
            numNights: 1,
            roomType: {
              name: 'Bed in 10-Bed Mixed Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525632',
            },
            roomId: 7525632,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8ba4e0c5ff0d8aa0',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJUfBw1C6_2UkhJlMTk9SiP_Gn_MIb5C6VDFAtZ0dzByA=s96-c',
            countryCode: 'cz',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Czech Republic',
            guestTypeTranslation: 'Solo traveler',
            username: 'Luboš',
          },
          reviewedDate: 1723052498,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'Because of the huge number of young people you could run into trouble with sleeping.',
            textTrivialFlag: 0,
            positiveText:
              'Clean, cheap, awesome people not only in the room but at the reception too!',
            title: 'I enjoyed visiting this place and would book again.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-03',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-02',
            numNights: 1,
            roomType: {
              name: 'Bed in 10-Bed Mixed Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525632',
            },
            roomId: 7525632,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '45b63238d5ef3feb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-768yNnoQiW8/AAAAAAAAAAI/AAAAAAAAAIs/KphdBfLyAFY/s96-c/photo.jpg',
            countryCode: 'rs',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Serbia',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Nikola',
          },
          isApproved: true,
          reviewedDate: 1722725903,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText:
              'Evrything, good location, good host for correct price❤️',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-05-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-10',
            numNights: 2,
            roomId: 7525632,
            roomType: {
              name: 'Bed in 10-Bed Mixed Dormitory Room',
              id: '7525632',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8e1cc05eac8411bf',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Italy',
            guestTypeTranslation: 'Group',
            username: 'Alessia',
          },
          reviewedDate: 1722588036,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'The shower has a transparent door. The room was for 12 people, so it means that the bathroom had to be closed and no one could come inside to use the toilet. It would be better to change the shower door',
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText: 'The rooms were very big',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-26',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-24',
            numNights: 2,
            roomId: 7525610,
            roomType: {
              name: 'Bed in 6-Bed Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525610',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '3157e8b353884289',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh5.googleusercontent.com/-ToPA4WxC3Vo/AAAAAAAAAAI/AAAAAAAAACg/ntznBk9pP-E/s96-c/photo.jpg',
            countryCode: 'de',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Germany',
            guestTypeTranslation: 'Solo traveler',
            username: 'Kwadwo',
          },
          reviewedDate: 1722495580,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            positiveText: 'Nice location',
            title: 'Would go again',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-27',
            numNights: 1,
            roomType: {
              name: 'Bed in 10-Bed Mixed Dormitory Room',
              __typename: 'RoomTranslation',
              id: '7525632',
            },
            roomId: 7525632,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'acefba20e1751ce8',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocKucLNuGqkSE-mcO2i57JGGFPoybS9dvknPm0siN7ivk9A9lw=s96-c',
            countryCode: 'ae',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Arab Emirates',
            guestTypeTranslation: 'Solo traveler',
            username: 'Sadaf',
          },
          isApproved: true,
          reviewedDate: 1722247325,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            positiveText: 'They kept our luggage safely',
            title: null,
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
      ],
      timeOfYearFilter: [
        {
          name: 'All (2509)',
          count: 2509,
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Mar–May',
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 7,
      nr_reviews: 2509,
    },
    review_score: 7.2,
    review_score_word: 'Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18040717,
    number_of_rooms: 1,
    stars: 3,
    address: 'Nagy Diófa utca 25-27.',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 1,
    location: {
      longitude: 19.0640339255333,
      latitude: 47.4985880596841,
    },
    zip: '1072',
    hotel_description:
      'The Equity Point Budapest housed in a renovated 19th-century building is located in the heart of Budapest, in the centre of Pest, close to many tourist attractions. Free WiFi is available in the entire hotel. You can choose from elegantly furnished and modernly equipped rooms, still reflecting the turn-of-the century atmosphere. The invitingly styled restaurant is a fine place to taste delicious Hungarian cuisine. All rooms are air conditioned. "Females only" rooms are also available. The property also offers a beer garden and a patio. Váci street, the Duna Corso, the Synagogue, the National Museum, the Covered Market Hall, the Opera and St. Stephan Cathedral are all easily accessible on foot.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Have',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Terrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjvask',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Snackbar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Concierge',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Skabe',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gadeparkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vin/champagne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport fra lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport til lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Café på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Havemøbler',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Pubcrawl',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Nøgleadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tyverialarm',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera udenfor overnatningsstedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overnatningsstedet rengøres af professionelle rengøringsfimaer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overnatningsstedet tilbyder termometre til gæsterne',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627487.jpg?k=fe8b4293ba709f8bcff5abd9f9861789cb3b9eb2e5eab900b624fc0d426f911f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/389384438.jpg?k=7b09d64a77d71f6d5dbabdf52cc7db6eb8ac6c93fda5801c6848cb81c227fff3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627546.jpg?k=ff16d358eb13a056e32484d32fc5c85cbfffa350f9ba3a2cebfe1df261cdb63f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627581.jpg?k=17a835688c2c681bc658dade857575ee5ed07b45319616ddd3e4c86dcc4ef2cf&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627542.jpg?k=78de38fbbe373347db928789e5148f3890bf794bf3feed8a5ed4448cbefbd390&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627468.jpg?k=8ff7b9fd7c4aa7873b76b7ef634f705211490bfe94a423b57dbe4400f8d31c9f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627559.jpg?k=6740325c669d381a22656d8f9ef71b716698762b8056845738e454299050b849&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627527.jpg?k=02b0956e8e86f5d69c5a6bc3bd04d22a38bc9ec4137c6e6648415bedfbac6ce9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627609.jpg?k=4bebde8fc2d10b69115fd915efadaca0daffa38e3ac50d9013ed045883a446c6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627579.jpg?k=5caf208b037ce477902506f062db7c7cfaf967551c8a9fddd610b4bb2db810e8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627561.jpg?k=6ee3c716dda0fc9e8ef13eaa5c42a34072142ea7f64fb915e9d12e693f5ee0d0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627549.jpg?k=c118ee43db67bd4806606b522c59d63686f6eacb0419b9d09fa1bf4cafec9dea&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669997.jpg?k=0d40cf9f8f2b9f82a27f2fc8cdc6d80998de5f807f35a7427eff9a3eaa26d028&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670033.jpg?k=84bfce9c3da640018a0c0497f285b42e5755183887388d6475e5d640eaac7af5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670023.jpg?k=296cb0a3245ccf4349bf5bba651a6ae641f2b995a9160c707a1872af69cdfb63&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670010.jpg?k=04f509b8c5ec53981301444a0a684abd24c91dc108c4ae9cad1861cbb00ccdc2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/375996858.jpg?k=c41d6dab38cd58e4afbe0459c0401eb6d9625423fe50f317475dbc2f4dfd3a12&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/375996910.jpg?k=422321cd9847e72ad3fd9efe2996ae436ca513b9e5f1af089e4b3af5ca44a5da&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670103.jpg?k=6016b120c68cd8b4413c21a36ba0e450f5418e99a3a748f804df48c6e6f58f0e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670091.jpg?k=e3fc5c83104e6b3bdca8cf792b5ac78a93a26d99184d419877d28a7b17a891f9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670082.jpg?k=0dfb447742156347796a7df218206c9ca955e5fb05cf8accef2231327c377f23&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670043.jpg?k=b2dbf2c31341516320f10c117909ef0ef789fd6c6e77fa0432bf4eae06dfc94f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/375996878.jpg?k=60206b299e37bc86436e0f34be7c989abdedb99a2fe487763d41f744611c84a4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627564.jpg?k=a2c16c3c781e70185152c9fd22a6faa76e1404ecda7e168364445ba33d391a22&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627554.jpg?k=01d975a35d9dfedd202ce6573c2992dfa9c86a28e41f0fe953571e3a0045501d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627634.jpg?k=519dda09f75aabfe2e2d2893a4ce66d29f88b000a628b3fce0e1fbd778691de0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627458.jpg?k=a1172b588f1a7bd5c25fdac1621d9338ea695dab29c6e526e2d30bf4938aadd5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374670133.jpg?k=ee45c7390559afc8c77fc620fb0d271d17ad556b990ea7518df4531bcd2c31bc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669903.jpg?k=96adbca10647fe05284fade43e77e236f93329886079fd30e3703414fcc654a4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669835.jpg?k=1fe48368f5a056a86700e84e8282974cff60b6f851e1fb9d526990d2f0f2c94d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669797.jpg?k=6ee8d8e0314884b888d011f402dcd5e9c78b436e91bac859e313dfc30201deaa&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669760.jpg?k=5ffc28e8dd4b6961882e3f4a985e48adf9ca7d174415a5e34d54ce3ac4f442d5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669754.jpg?k=64f3eb6dcdd55a123b77e8fc41d36bcc3ca3ff90d8404c7a7158d0dbd04e5c66&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669814.jpg?k=83f3845a4d7f1a9de2f609f00e90610f5becdab9cf57c3c6ffbe48f66a17de24&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669968.jpg?k=1110849c167f386372c3db70197a731879f7123287cd4eedbe304a3c483ed98a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669930.jpg?k=dd16fc5930ffce3df0193c9c5ac2d4ff5293baece61ec9331f344a7708887967&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433638622.jpg?k=d314269bc349ea717f0a1c9c74fa60fe448543c977bea48d36546d572fcec2ab&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/374669859.jpg?k=f90dff1d7868f978a5c9ae1c0d99ec407cba69a15fdad1185053b5207ec0e894&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 1,
      rooms: [
        {
          max_n_people: 1,
          name: '',
          facilities: [],
          price: 40.544399999999996,
          photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627487.jpg?k=fe8b4293ba709f8bcff5abd9f9861789cb3b9eb2e5eab900b624fc0d426f911f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/389384438.jpg?k=7b09d64a77d71f6d5dbabdf52cc7db6eb8ac6c93fda5801c6848cb81c227fff3&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627546.jpg?k=ff16d358eb13a056e32484d32fc5c85cbfffa350f9ba3a2cebfe1df261cdb63f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433627581.jpg?k=17a835688c2c681bc658dade857575ee5ed07b45319616ddd3e4c86dcc4ef2cf&o=&hp=1',
          ],
          breakfast_included: false,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'hostel',
    provider: 'HOTELSTON',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0.37,
    price_without_discount: 55.54582799999999,
    price_increased: false,
    price_decreased: true,
    price_diff: -93.58,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Res City Residence Budapest',
    street_address: '7 Szív utca',
    city: 'Budapest',
    zip_code: '1068',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/res-city-residence-budapest.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 140.07,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 140.07,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 140.07,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 23.20236906623789,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061968.jpg?k=b9d541f537775fba6804ca725f0193e26abefaaf7fef1343c0fed32cb80f113c&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 1501,
          name: 'All (1501)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 755,
          name: 'Wonderful: 9+ (755)',
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Good: 7-9 (548)',
          count: 548,
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Fair: 5-7 (131)',
          count: 131,
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 41,
          name: 'Poor: 3-5 (41)',
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 26,
          name: 'Very Poor: 1-3 (26)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Location',
            id: 'topic_location',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          name: 'Clean',
          isSelected: false,
          translation: {
            name: 'Clean',
            id: 'topic_clean',
            __typename: 'ReviewTopicTranslation',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Bathroom',
          isSelected: false,
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          isSelected: false,
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Quiet',
            id: 'topic_quiet',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Quiet',
          isSelected: false,
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          isSelected: false,
          name: 'Bus',
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          name: 'Shower',
          isSelected: false,
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Toilet',
          isSelected: false,
          translation: {
            name: 'Toilet',
            id: 'topic_toilet',
            __typename: 'ReviewTopicTranslation',
          },
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          name: 'Window',
          isSelected: false,
          translation: {
            name: 'Window',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_window',
          },
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Breakfast',
          isSelected: false,
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          name: 'Luggage',
          isSelected: false,
          translation: {
            name: 'Luggage',
            id: 'topic_luggage',
            __typename: 'ReviewTopicTranslation',
          },
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Coffee',
          translation: {
            name: 'Coffee',
            id: 'topic_coffee',
            __typename: 'ReviewTopicTranslation',
          },
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Cold',
          translation: {
            name: 'Cold',
            id: 'topic_cold',
            __typename: 'ReviewTopicTranslation',
          },
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          name: 'Checkin',
          isSelected: false,
          translation: {
            name: 'Check-in',
            id: 'topic_checkin',
            __typename: 'ReviewTopicTranslation',
          },
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Suite',
            id: 'topic_suite',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Suite',
          id: 278,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Kitchen',
          translation: {
            name: 'Kitchen',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_kitchen',
          },
          id: 261,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Towel',
          translation: {
            name: 'Towel',
            id: 'topic_towel',
            __typename: 'ReviewTopicTranslation',
          },
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          name: 'Heat',
          isSelected: false,
          translation: {
            name: 'Heat',
            id: 'topic_heat',
            __typename: 'ReviewTopicTranslation',
          },
          id: 291,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Noise',
            id: 'topic_noise',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Noise',
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          isSelected: false,
          name: 'Hot',
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          name: 'Wifi',
          isSelected: false,
          translation: {
            name: 'WiFi',
            id: 'topic_wifi',
            __typename: 'ReviewTopicTranslation',
          },
          id: 247,
          __typename: 'TopicFilter',
        },
        {
          name: 'Parking',
          isSelected: false,
          translation: {
            name: 'Parking',
            id: 'topic_parking',
            __typename: 'ReviewTopicTranslation',
          },
          id: 246,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          translation: 'Staff',
          name: 'hotel_staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 9.31802940368652,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 8.07277584075928,
          __typename: 'RatingScore',
        },
        {
          translation: 'Cleanliness',
          name: 'hotel_clean',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            ufiScoreHigherBound: 9.74524974822998,
            __typename: 'UfiScoreAverage',
          },
          value: 8.40221786499023,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 8.25955772399902,
          __typename: 'RatingScore',
        },
        {
          translation: 'Value for money',
          name: 'hotel_value',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 8.43120765686035,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            ufiScoreHigherBound: 9.3919506072998,
            __typename: 'UfiScoreAverage',
          },
          value: 8.74747848510742,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            ufiScoreHigherBound: 8.67230033874512,
            __typename: 'UfiScoreAverage',
          },
          value: 9.03846168518066,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      customerTypeFilter: [
        {
          name: 'All (1501)',
          count: 1501,
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 280,
          name: 'Families (280)',
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 548,
          name: 'Couples (548)',
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (203)',
          count: 203,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 470,
          name: 'Solo travelers (470)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 114,
          name: 'Business travelers (114)',
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      languageFilter: [
        {
          name: 'All (1501)',
          count: 1501,
          countryFlag: null,
          value: '',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Danish (4)',
          count: 4,
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (441)',
          count: 441,
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (79)',
          count: 79,
          countryFlag: 'de',
          value: 'de',
          __typename: 'LanguageFilter',
        },
        {
          count: 33,
          name: 'Polish (33)',
          value: 'pl',
          countryFlag: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          count: 101,
          name: 'Spanish (101)',
          value: 'es',
          countryFlag: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 13,
          name: 'Chinese (13)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          count: 130,
          name: 'Russian (130)',
          value: 'ru',
          countryFlag: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Swedish (6)',
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (53)',
          count: 53,
          countryFlag: 'fr',
          value: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 165,
          name: 'Italian (165)',
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (31)',
          count: 31,
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (18)',
          count: 18,
          countryFlag: 'nl',
          value: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Lithuanian (1)',
          count: 1,
          countryFlag: 'lt',
          value: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Norwegian (5)',
          count: 5,
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Korean (3)',
          value: 'ko',
          countryFlag: 'kr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hungarian (140)',
          count: 140,
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Ukrainian (50)',
          count: 50,
          countryFlag: 'ua',
          value: 'uk',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Arabic (3)',
          value: 'ar',
          countryFlag: 'sa',
          __typename: 'LanguageFilter',
        },
        {
          count: 34,
          name: 'Turkish (34)',
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Japanese (5)',
          count: 5,
          countryFlag: 'jp',
          value: 'ja',
          __typename: 'LanguageFilter',
        },
        {
          count: 17,
          name: 'Czech (17)',
          value: 'cs',
          countryFlag: 'cz',
          __typename: 'LanguageFilter',
        },
        {
          count: 24,
          name: 'Portuguese (24)',
          value: 'pt',
          countryFlag: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Bulgarian (4)',
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (60)',
          count: 60,
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          count: 10,
          name: 'Croatian (10)',
          value: 'hr',
          countryFlag: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (13)',
          count: 13,
          countryFlag: 'rs',
          value: 'sr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Finnish (3)',
          count: 3,
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          count: 25,
          name: 'Slovak (25)',
          value: 'sk',
          countryFlag: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Estonian (1)',
          value: 'et',
          countryFlag: 'ee',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Catalan (3)',
          value: 'ca',
          countryFlag: 'catalonia',
          __typename: 'LanguageFilter',
        },
        {
          count: 5,
          name: 'Slovenian (5)',
          value: 'sl',
          countryFlag: 'si',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hebrew (16)',
          count: 16,
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Indonesian (1)',
          count: 1,
          countryFlag: 'id',
          value: 'id',
          __typename: 'LanguageFilter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2023-08-07',
            __typename: 'BookingDetails',
            checkinDate: '2023-08-05',
            numNights: 2,
            roomType: {
              name: 'Junior Suite',
              __typename: 'RoomTranslation',
              id: '743115306',
            },
            roomId: 743115306,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '109c5d97cb89ffb9',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/6371012236256683/picture?type=square&height=64&width=64',
            countryCode: 'pl',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Poland',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Cezary',
          },
          isApproved: true,
          reviewedDate: 1692250177,
          textDetails: {
            negativeText: 'Not applicable.',
            textTrivialFlag: 0,
            positiveText:
              'A cozy little hotel in a quiet neighborhood and a nicely restored tenement house.\r\nA convenient starting point for exploring the city center, as well as its northern, museum and park area.\r\nClose to a grocery store and pastry shop, as well as several eateries.\r\n\r\nCourteous staff, efficient service.\r\nNice cozy room with modern furniture, equipped with all necessary appliances (also a stove and a fridge).\r\nVery comfortable beds.\r\nBathroom with a large shower area - you can wash yourself comfortably after summer sightseeing.\r\nSoundproof windows allow you to sleep well despite the location of the room on the ground floor (although the traffic in the street is still small).',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-29',
            numNights: 10,
            roomId: 743115304,
            roomType: {
              name: 'Superior Double Room',
              id: '743115304',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ef75df086ee85bf9',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-i.png',
            countryCode: 'au',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Australia',
            guestTypeTranslation: 'Couple',
            username: 'Ilona',
          },
          reviewedDate: 1724104780,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'No tea/coffee making facilities; no lift.',
            lang: 'en',
            title: 'It was very enjoyable!',
            positiveText:
              'Situated in an interesting area, close to transport, interesting community, good air-conditioning.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-06',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-04',
            numNights: 2,
            roomId: 743115301,
            roomType: {
              name: 'Standard Single Room',
              __typename: 'RoomTranslation',
              id: '743115301',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ace8e8ece6e1ddae',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GjlzXqjDs3-mSzbp8tRsYWaFa5vvJtNVqSwNnLPVw=s96-c',
            countryCode: 'co',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Colombia',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Julian',
          },
          isApproved: true,
          reviewedDate: 1723476496,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'Really comfy, great service from the staff, is like 2 blocks away from the bus and subway station.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-02',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-30',
            numNights: 3,
            roomType: {
              name: 'Superior Triple Room',
              __typename: 'RoomTranslation',
              id: '743115305',
            },
            roomId: 743115305,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '488fc7a5b14c7664',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Couple',
            username: 'Valerie',
          },
          reviewedDate: 1722695119,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing',
            title: 'Lovely hotel for city break in a quiet area',
            positiveText: 'Very clean & comfortable',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-11',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-09',
            numNights: 2,
            roomId: 743115304,
            roomType: {
              name: 'Superior Double Room',
              id: '743115304',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'e054bb055c87e7f4',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJyrGVu4g47UBWhqLIv8Z653q9vWAAW4XdZTKdBX=s96-c',
            countryCode: 'ge',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Georgia',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Levan',
          },
          isApproved: true,
          reviewedDate: 1721046270,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'xu',
            positiveText: 'Cozy, clean, calm',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-06-25',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-23',
            numNights: 2,
            roomId: 743115302,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '743115302',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'e75f57ffe476b866',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ALm5wu2O5c8FHt9mGv9yjTAVuBKUMSQE1KVn34Q_2YDYhg=s96-c',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United States of America',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Swan',
          },
          isApproved: true,
          reviewedDate: 1719986228,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'xu',
            title:
              'Enjoyed my stay and would book there when I go back to Budapest.',
            positiveText:
              'Very clean and close to public transportation and good location, easy to get to places.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-06-20',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-18',
            numNights: 2,
            roomType: {
              name: 'Standard Single Room',
              __typename: 'RoomTranslation',
              id: '743115301',
            },
            roomId: 743115301,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'fae9eda1cb0e693b',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocLkxmdFm9NsBRx82mr8tBSeBEbDJOW8Rryi0FAoTYdK=s96-c',
            countryCode: 'om',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Oman',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Mundhir',
          },
          isApproved: true,
          reviewedDate: 1719129342,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'the location is great, but quite far from the center by foot.',
            textTrivialFlag: 0,
            title: null,
            positiveText: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-04-30',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-28',
            numNights: 2,
            roomId: 743115302,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '743115302',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '948911c2adc65d96',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-e.png',
            countryCode: 'de',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Germany',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Ewelina',
          },
          isApproved: true,
          reviewedDate: 1716811742,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText: 'Cleanliness, Modern building and infrastructure',
            title: 'Excellent',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-02-25',
            __typename: 'BookingDetails',
            checkinDate: '2024-02-23',
            numNights: 2,
            roomType: {
              name: 'Standard Single Room',
              id: '743115301',
              __typename: 'RoomTranslation',
            },
            roomId: 743115301,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f4a008d470c5936b',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJbhUZMh1xVW6rRquWY3Ron6hCXNjpp2iydLaIoxFTdCas=s96-c',
            countryCode: 'at',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Austria',
            guestTypeTranslation: 'Solo traveler',
            username: 'Oleg',
          },
          reviewedDate: 1714807680,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'It was cold in the room even with the heater on full power (in February). Someone was building something very noisy. The room is a bit small.',
            textTrivialFlag: 0,
            positiveText:
              'Clean and modern property. Good staff. Good location near the underground.',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-03-29',
            __typename: 'BookingDetails',
            checkinDate: '2024-03-28',
            numNights: 1,
            roomType: {
              name: 'Standard Single Room',
              __typename: 'RoomTranslation',
              id: '743115301',
            },
            roomId: 743115301,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '648f8ebeb83f7f33',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
            countryCode: 'ua',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ukraine',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Alok',
          },
          isApproved: true,
          reviewedDate: 1714375381,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            positiveText:
              'Nice apartment at a prime location with everything nearby to the apartment',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-04-20',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-16',
            numNights: 4,
            roomId: 743115301,
            roomType: {
              name: 'Standard Single Room',
              __typename: 'RoomTranslation',
              id: '743115301',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd2559c1f83fbe15c',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-c.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Group',
            username: 'Carole',
          },
          reviewedDate: 1713683795,
          isApproved: true,
          textDetails: {
            negativeText:
              'No coffee machine despite there being a bag of filter coffee in the kitchen cupboard. There was a kettle but no tea bags.',
            textTrivialFlag: 0,
            lang: 'en',
            title: 'Comfortable, safe, quiet and close to main avenues.',
            positiveText:
              'Room exactly what we needed. I loved the shape of the sink in my room with a hollowed out wee basin for my toiletries. The Hungarian lady Cleaner was so kind and shared her own coffee with me. There was a great brewery bar open later close by with great nachos.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-04-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-13',
            numNights: 1,
            roomType: {
              name: 'Junior Suite',
              id: '743115308',
              __typename: 'RoomTranslation',
            },
            roomId: 743115308,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '20ede541e33bb844',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14Gi31IlZ1uND9W-cnsyIikML0dqdBJsRvyx5d2dJEw=s96-c',
            countryCode: 'iq',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Iraq',
            guestTypeTranslation: 'Family',
            username: 'Ali',
          },
          isApproved: true,
          reviewedDate: 1713157176,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Everything was prefectly managed.',
            title:
              'The property is a very good place for families. It is located in a calm area.',
            positiveText:
              'The property was very clean and easy to check in. They prepared everything an manage my check in. I arrived to the hotel at 02 pm. Before that they give me all the details of self check in.',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-04-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-05',
            numNights: 3,
            roomId: 743115308,
            roomType: {
              name: 'Junior Suite',
              __typename: 'RoomTranslation',
              id: '743115308',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9e5ef9ad78c0f9ae',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Romania',
            guestTypeTranslation: 'Group',
            username: 'Mălina',
          },
          reviewedDate: 1712920330,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              "There were a couple of small things to note for future travelers: there wasn't a nightstand on one side of the bed in our suite, and the hotel did not offer breakfast. These weren't major inconveniences for us, but worth mentioning for others to know before booking.",
            textTrivialFlag: 0,
            title:
              'Our stay was delightful—comfortable, secure, and perfectly located',
            positiveText:
              "We stayed at this wonderful hotel in Budapest and had an exceptional experience! The junior suite was not very spacious, but it was well-equipped with a range of amenities that made our stay extra comfortable. The beds were incredibly comfortable, perfect for a good night's sleep after a day of exploring the city. The suite included a charming small bathtub, adding a touch of luxury to our stay.\r\n\r\nFor added convenience, the suite featured a kitchenette equipped with a water boiler, pots, dishes, and a sink—ideal for preparing light meals or snacks. These facilities were particularly helpful since we could manage our meals on our own time and preferences.\r\n\r\nThe location of the hotel is absolutely perfect. Just down the road, you can find a Lidl for any essentials, alongside a charming cafe to enjoy a leisurely breakfast or a coffee. Additionally, the proximity to a metro station made exploring Budapest a breeze, and the nearby parking was not only convenient but reasonably priced.\r\n\r\nTravelling as a group of four women, safety was a priority for us, and this hotel did not disappoint. The presence of an intercom at the door and cameras in the hallways provided a great sense of security. We found the neighborhood to be quite peaceful and safe, adding to our overall comfort.\r\n\r\nThe hotel staff were incredibly welcoming and accommodating. They allowed us to check into our suite at 8 AM, which was much appreciated after our travels and much earlier than the usual 2-3 PM check-in time. Every day, we returned to a freshly cleaned room, which was kept tidy throughout our stay.\r\n\r\nThe value for money was excellent, making our stay even more enjoyable. Overall, our experience at this hotel was amazing, and it contributed greatly to our wonderful trip to Budapest. Highly recommend for anyone looking for a secure, well-located, and friendly place to stay!",
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: [
            {
              urls: [
                {
                  size: 'max1280x900',
                  url: 'https://q-xx.bstatic.com/xdata/images/xphoto/max1280x900/306148329.jpg?k=5ff8e88276f46359cbd7f761c469d4b6919765e34a7d075ae8caf31fb4eed796&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square80',
                  url: 'https://q-xx.bstatic.com/xdata/images/xphoto/square80/306148329.jpg?k=5ff8e88276f46359cbd7f761c469d4b6919765e34a7d075ae8caf31fb4eed796&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square160',
                  url: 'https://q-xx.bstatic.com/xdata/images/xphoto/square144/306148329.jpg?k=5ff8e88276f46359cbd7f761c469d4b6919765e34a7d075ae8caf31fb4eed796&o=',
                  __typename: 'ReviewPhotoUrl',
                },
              ],
              id: 306148329,
              kind: 'PROPERTY',
              __typename: 'ReviewPhoto',
            },
            {
              urls: [
                {
                  size: 'max1280x900',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1280x900/306148330.jpg?k=e8a4d663744093676d7c745ee743a7f7a717effe55b8127b9eec1de9076c2413&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square80',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/square80/306148330.jpg?k=e8a4d663744093676d7c745ee743a7f7a717effe55b8127b9eec1de9076c2413&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square160',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/square144/306148330.jpg?k=e8a4d663744093676d7c745ee743a7f7a717effe55b8127b9eec1de9076c2413&o=',
                  __typename: 'ReviewPhotoUrl',
                },
              ],
              id: 306148330,
              kind: 'PROPERTY',
              __typename: 'ReviewPhoto',
            },
          ],
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-01-22',
            __typename: 'BookingDetails',
            checkinDate: '2024-01-19',
            numNights: 3,
            roomId: 743115301,
            roomType: {
              name: 'Standard Single Room',
              __typename: 'RoomTranslation',
              id: '743115301',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9c939abd7a338439',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/xdata/images/xphoto/square64/254633684.jpg?k=087674b442043b0db1fe19d8c0d6d1e36db683f6757f48df003558ead27e11d9&o=',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Lara',
          },
          isApproved: true,
          reviewedDate: 1706011303,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              'Its was clean, friendly stuff, there is a super market near, also the metro.',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-01-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-01-14',
            numNights: 2,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '743115302',
            },
            roomId: 743115302,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '628d91c05055f3a0',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocI4lhV7b-Du2o9pBRg2kZEqdC8EtSya8-kHhnRzZJXjL-hzZLeg=s96-c',
            countryCode: 'hu',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Hungary',
            guestTypeTranslation: 'Group',
            username: 'Marianne',
          },
          isApproved: true,
          reviewedDate: 1705484780,
          helpfulVotesCount: 1,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'The room was a bit cold.',
            title: 'Very good stay',
            positiveText:
              'I really liked the friendliness of the staff, location, and level of cleanliness in the room.',
            lang: 'xu',
            __typename: 'TextDetails',
          },
        },
      ],
      reviewsCount: 1501,
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      timeOfYearFilter: [
        {
          name: 'All (1501)',
          count: 1501,
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Jun–Aug',
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Sep–Nov',
          count: 0,
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 1501,
    },
    review_score: 8.2,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041286,
    number_of_rooms: 0,
    stars: 3,
    address: '7 Szív utca',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 0,
    location: {
      longitude: 19.071112,
      latitude: 47.507792,
    },
    zip: '1068',
    hotel_description:
      'RES City Residence Hotel Budapest ligger i centrum af Budapest, 600 m fra Terrorens Hus, og tilbyder værelser med aircondition og gratis wi-fi. Dette 3-stjernede hotel tilbyder concierge-service og udflugtsskranke. Hotellet har familieværelser. Værelserne på hotellet har skrivebord, fladskærms-tv, eget badeværelse, sengelinned og håndklæder. Nogle af værelserne har desuden køkken med køleskab. Samtlige værelser har værdiboks. Populære seværdigheder i nærheden af RES City Residence Hotel Budapest omfatter Heltepladsen, metrostationen Keleti Pályaudvar og Blaha Lujza-pladsen. Den nærmeste lufthavn er Budapest Ferenc Liszt Internationale Lufthavn, 14 km fra overnatningsstedet.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lydisolerede værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sightseeingskranke',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Concierge',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Skabe',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Cykeludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for levering af mad til værelser/enheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Etablerede procedurer til sundhedstjek af gæsterne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kontaktløs indtjekning/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Afskærmning mellem personale og gæster på relevante områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Takeaway-beholdere til morgenmad',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikker dækning af mad ved levering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæsterne har adgang til mundbind',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061968.jpg?k=b9d541f537775fba6804ca725f0193e26abefaaf7fef1343c0fed32cb80f113c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061945.jpg?k=15baf80b6674dddc5370ce8f043049a2496953ae41a550c60dbf103efd197cce&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061998.jpg?k=f786ab6c2ca2ca6c7a7aa579a92b48b901cf1a68b8b9adc84e5bdb7e8cd6eb35&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061985.jpg?k=c92112fc3dbdb66522e9fb571054f05ead8f84a8a0a2f413bdb630d829778ca9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/486333110.jpg?k=5978347d5349cd443becd484ddd7095f1323231bcc327fc4e3c15740b021f0a3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327062049.jpg?k=9faabe84430bc8acb0f64743ed7160a08d200fe523d54b72c3435ae8a9002789&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061931.jpg?k=1e7889bc22e54159f4a192438dc370a0b02eb256bd357a528d3c966099e3df56&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061949.jpg?k=8ad226442604cbcd1056851e54a4367259b64fac3a6a58932d35760f497a9d4e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061935.jpg?k=d162dcad2f8b4979f4a5f8dc221e4fb117a9d7515b2df87299521bf4be7adf98&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061908.jpg?k=91735aae006ad1e06e1550db2b31d237dc332c13776e0ef49472a1079e9ee297&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061940.jpg?k=f9da227d68a65e35b037df0516272fc9a9bd99b4ad6aaab1cf803bd67dc87118&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/486333139.jpg?k=9c1739d83e7e95ba0f44b190a040ec1ee93c29d6b72d8cfb864912969f5d51dc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/486333104.jpg?k=37ef72a7e4ce4ad53a0555aa8f1a99c03f8f1b7467488d04ca4325f080d6829b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/486333116.jpg?k=b5a4c212d63666953d9292550f04a5e345e04f21666c02dc31fc74a9eb3da95c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/486333120.jpg?k=fcb59eeedd80d063c450acc64b247a69d91eb9c6bca3cc2ab850f5aaaed159fd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/486333127.jpg?k=225e26505da4db93a33d1f7a0f870097d473a0b87b7fb1baf0140d711f40e58f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/373282414.jpg?k=60243dbf982f3d97150cd403514cd962aac40cb8172a81c588a2693c5cf4ada7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061909.jpg?k=19a5ba28f9ac848d4916a74cdc6a80f4112d018a605226468bd44ac85339f251&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061902.jpg?k=78869fabeba7eb469eafcd37e56340210ab1396c19511d4dbd30039256c314f6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061922.jpg?k=2278b1c95db140449fbe765cdc32421960f89e774d246e5a9f13bcd3fb2667c5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061878.jpg?k=d0047cdc102e1a91c16c3d4b811a82c4f4931e4c8e14354678925cfb25adce9a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/565493196.jpg?k=cb168d09431c8eb54f19c7d2b331ba45bd175c3aff96d6ff1c4ccdac3fabb2a1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061881.jpg?k=d67dcffb56753013ca4997d61b941ed572478e834273413f391061a11484f1d6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327062042.jpg?k=3d6804fefc4cf64d38f30970572aab589a2ea4675db9c9417fd9d6f3257358c8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061941.jpg?k=7e25581246a00fe330a4dda9ddbb8f53e9f61bd929e2eea4a70a7816b89d609a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061866.jpg?k=4b079c846ec0537f8fb4968a465bda0630ee4a23f7ab51952028b96df0514887&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061984.jpg?k=91f6866c55cfb2f6495ee71c800d8b391dc0bc3b1215e282da8e6b7dab3d1fc0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061967.jpg?k=eeae2f29eef3bf8423b437ed8b30363cdcc24d681757de80f130ac30151876a5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061973.jpg?k=2d153639c24f6bd1ac7558e692c25b1e425968b53f238f2e19880d64f3fff47d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327062028.jpg?k=8e66d02bb3510d443218de2ab113cb421f6532db82ca715489741a876eeb12e9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061876.jpg?k=ee8ed897914e883ba34bbe300ea89bff39164e8f31aacb004136423c721290d4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327062004.jpg?k=eef3481f11d60571ea913699f74123a41946fb91ee344047f9699070488809c1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061875.jpg?k=981df639cad8f9f7e69c90e9f5892166f9664aa3d10844fbf1a4c77dc649c29b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327062000.jpg?k=3113fa5f97bf3f39e35d862981eabe75341d84225b6eee9224ebe5ebea841452&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327062025.jpg?k=dac0c53a74eb6a553e8e7f7b7cf9c67bc40184db30d31cebbaace495bea275ab&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061877.jpg?k=b49927a4d551353e8a39433e000666e54c680afcd0ec790a04efb15abf21e470&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061884.jpg?k=775aed24606b9ce40dead72dc891b7b0e04712beab406ffcfb0e9f73ac6e23aa&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061895.jpg?k=4e256b4f392aa363f2741a4138b1683af65b3b1dd5558e4f73ff7e8c06e56a34&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061890.jpg?k=4978a1a8354f7360209c31617d7ccd0c72cdbb85bbe54e7fcd3b33cb0dfea407&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061896.jpg?k=173f29411a6f147240e6953b69a48516a1f0fb6ea358a8d677ca6d6cc0c3fc00&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327061904.jpg?k=a3c1eb791945b65a6ca0b6ccf18bab47a8a29673aaffc35528b96ec244851b47&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/327062029.jpg?k=0b67d1b8865d91db224a041a0405447703e83c74621d8a9633ba2889f4c2082d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/373282543.jpg?k=0caab9010c35ce3744737da434649f56952d5cc730f28bcaa5c68e96dad4b91b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/373282545.jpg?k=2d77357e7f9b74a5d8f2a3e8a69b4c752b39173e9ca78aa7339ed1de45ec5d72&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/565494489.jpg?k=9be837a73cf1be699b0fbfebbbfbeeedcadb6e48a5b91771e6cee9328d09104d&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 0,
      max_n_people: 0,
      rooms: [],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'HOTELSTON',
    late_checkin: false,
    additional_policies: {},
    late_arrival: false,
    discount: 0.33999999999999997,
    price_without_discount: 187.69379999999998,
    price_increased: true,
    price_decreased: false,
    price_diff: 5.94,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Gartner Hotel (Adults only)',
    street_address: 'Kertész u. 34',
    city: 'Budapest',
    zip_code: '1073',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/queen-mary.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 146.79,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 146.79125000000002,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 146.79125000000002,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 22.238290901120546,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439958344.jpg?k=63b4e6a20c4abb71dda13439dc68dd89697e51b76ef2dd210b752efa0134cf9f&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 986,
          name: 'All (986)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Wonderful: 9+ (313)',
          count: 313,
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Good: 7-9 (395)',
          count: 395,
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 152,
          name: 'Fair: 5-7 (152)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (81)',
          count: 81,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 45,
          name: 'Very Poor: 1-3 (45)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          translation: {
            name: 'Location',
            id: 'topic_location',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Room',
          isSelected: false,
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          isSelected: false,
          translation: {
            name: 'Bathroom',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bathroom',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Clean',
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          name: 'Breakfast',
          isSelected: false,
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bed',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bed',
          },
          name: 'Bed',
          isSelected: false,
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Shower',
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          isSelected: false,
          name: 'Toilet',
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Towel',
            id: 'topic_towel',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Towel',
          isSelected: false,
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          name: 'Lift',
          isSelected: false,
          translation: {
            name: 'Lift',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_lift',
          },
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          name: 'Loud',
          isSelected: false,
          translation: {
            name: 'Loud',
            id: 'topic_loud',
            __typename: 'ReviewTopicTranslation',
          },
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Noise',
          translation: {
            name: 'Noise',
            id: 'topic_noise',
            __typename: 'ReviewTopicTranslation',
          },
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Heat',
            id: 'topic_heat',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Heat',
          isSelected: false,
          id: 291,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Wifi',
          translation: {
            name: 'WiFi',
            id: 'topic_wifi',
            __typename: 'ReviewTopicTranslation',
          },
          id: 247,
          __typename: 'TopicFilter',
        },
        {
          name: 'Quiet',
          isSelected: false,
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bus',
          isSelected: false,
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Check-in',
            id: 'topic_checkin',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Checkin',
          isSelected: false,
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          name: 'Luggage',
          isSelected: false,
          translation: {
            name: 'Luggage',
            id: 'topic_luggage',
            __typename: 'ReviewTopicTranslation',
          },
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          name: 'Hot',
          isSelected: false,
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Cold',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_cold',
          },
          name: 'Cold',
          isSelected: false,
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Coffee',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_coffee',
          },
          isSelected: false,
          name: 'Coffee',
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Suite',
          translation: {
            name: 'Suite',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_suite',
          },
          id: 278,
          __typename: 'TopicFilter',
        },
        {
          name: 'Stairs',
          isSelected: false,
          translation: {
            name: 'Stairs',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_stairs',
          },
          id: 286,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          name: 'hotel_staff',
          translation: 'Staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 8.40256404876709,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 7.00154209136963,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_clean',
          translation: 'Cleanliness',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            ufiScoreHigherBound: 9.74524974822998,
            __typename: 'UfiScoreAverage',
          },
          value: 7.30729675292969,
          __typename: 'RatingScore',
        },
        {
          translation: 'Comfort',
          name: 'hotel_comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 7.31443309783936,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 7.69547367095947,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            ufiScoreHigherBound: 9.3919506072998,
            __typename: 'UfiScoreAverage',
          },
          value: 8.78468608856201,
          __typename: 'RatingScore',
        },
        {
          translation: 'Free Wifi',
          name: 'hotel_free_wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 6.63461589813232,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      languageFilter: [
        {
          name: 'All (986)',
          count: 986,
          countryFlag: null,
          value: '',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Danish (6)',
          value: 'da',
          countryFlag: 'dk',
          __typename: 'LanguageFilter',
        },
        {
          count: 267,
          name: 'English (267)',
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          count: 39,
          name: 'German (39)',
          countryFlag: 'de',
          value: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (23)',
          count: 23,
          value: 'pl',
          countryFlag: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Spanish (98)',
          count: 98,
          value: 'es',
          countryFlag: 'es',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Chinese (2)',
          count: 2,
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          count: 23,
          name: 'Russian (23)',
          countryFlag: 'ru',
          value: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Swedish (16)',
          count: 16,
          countryFlag: 'se',
          value: 'sv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (24)',
          count: 24,
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 217,
          name: 'Italian (217)',
          countryFlag: 'it',
          value: 'it',
          __typename: 'LanguageFilter',
        },
        {
          count: 22,
          name: 'Romanian (22)',
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          count: 15,
          name: 'Dutch (15)',
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Lithuanian (2)',
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          count: 5,
          name: 'Norwegian (5)',
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (3)',
          count: 3,
          value: 'ko',
          countryFlag: 'kr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hungarian (65)',
          count: 65,
          value: 'hu',
          countryFlag: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Ukrainian (4)',
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Arabic (5)',
          count: 5,
          value: 'ar',
          countryFlag: 'sa',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (30)',
          count: 30,
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Japanese (1)',
          countryFlag: 'jp',
          value: 'ja',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (17)',
          count: 17,
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Portuguese (21)',
          count: 21,
          value: 'pt',
          countryFlag: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Bulgarian (2)',
          count: 2,
          countryFlag: 'bg',
          value: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          count: 28,
          name: 'Greek (28)',
          value: 'el',
          countryFlag: 'gr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Croatian (12)',
          count: 12,
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Serbian (6)',
          countryFlag: 'rs',
          value: 'sr',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Latvian (1)',
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Finnish (3)',
          value: 'fi',
          countryFlag: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovak (13)',
          count: 13,
          value: 'sk',
          countryFlag: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Catalan (1)',
          countryFlag: 'catalonia',
          value: 'ca',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Slovenian (4)',
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hebrew (8)',
          count: 8,
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
      ],
      customerTypeFilter: [
        {
          count: 986,
          name: 'All (986)',
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (110)',
          count: 110,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 395,
          name: 'Couples (395)',
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (368)',
          count: 368,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Solo travelers (113)',
          count: 113,
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Business travelers (51)',
          count: 51,
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      reviewsCount: 986,
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2023-06-12',
            __typename: 'BookingDetails',
            checkinDate: '2023-06-11',
            numNights: 1,
            roomType: {
              name: 'Standard Twin Room',
              id: '24593006',
              __typename: 'RoomTranslation',
            },
            roomId: 24593006,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'acec0c484e2de3b1',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'jo',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Jordan',
            guestTypeTranslation: 'Family',
            username: 'Rayanah',
          },
          reviewedDate: 1686773938,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            title: null,
            positiveText:
              'I loved staying at this hotel, and the reception staff were very kind.. I would like to thank Anas and Amin for their efforts with us  ❤️',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-04',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-03',
            numNights: 1,
            roomType: {
              name: 'Quadruple Room',
              id: '24593004',
              __typename: 'RoomTranslation',
            },
            roomId: 24593004,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a764035013acf92a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocIHRxj9AahOtri62IfcMe9QannfVtziWLuHjSiaoCm6fF9ZPxrs=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Thimoor',
          },
          reviewedDate: 1723558274,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            title:
              'Perfect, great location and doesn’t burn a hole in your pocket.',
            positiveText: 'Location, staff and cleanliness',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Guest,\n\nThank you for your kind words! We&#39;re delighted to hear that you enjoyed your stay with us.\n\nShould you encounter any issues with the room lights or anything else during future visits, please don&#39;t hesitate to inform our friendly staff. \n\nThey are always ready to assist and will do their utmost to ensure your stay is as comfortable as possible.\n\nWe look forward to welcoming you again soon!\n\nBest regards,\nGartner Hotel',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-04',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-02',
            numNights: 2,
            roomId: 24593006,
            roomType: {
              name: 'Standard Twin Room',
              __typename: 'RoomTranslation',
              id: '24593006',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8462cb0344a54c74',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-n.png',
            countryCode: 'hu',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Hungary',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Naya',
          },
          isApproved: true,
          reviewedDate: 1722936526,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'the light was not enough in the room',
            title: null,
            positiveText:
              'location is perfect \nstaff are so nice\nthe room was clean',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for sharing your feedback. It was a pleasure hosting you at our hotel. We hope to see you here again. Best regards, Gartner Hotel',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-24',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-23',
            numNights: 1,
            roomType: {
              name: 'Standard Twin Room',
              id: '24593006',
              __typename: 'RoomTranslation',
            },
            roomId: 24593006,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'fc1a1ed7737cf84e',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-oWt1vPaTrJ0/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdVv93QS-JRKfeD2bwQ4wm6sdsMmA/photo.jpg',
            countryCode: 'ru',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Russia',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Arina',
          },
          reviewedDate: 1722187923,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            positiveText:
              'Great location, everything’s fresh and new, staff are very helpful, they helped to organise a transfer to the airport in the middle of the night for 10 euros',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-06-25',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-24',
            numNights: 1,
            roomType: {
              name: 'Standard Twin Room',
              id: '24593006',
              __typename: 'RoomTranslation',
            },
            roomId: 24593006,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c95ae984287a74a7',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-i.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Couple',
            username: 'Istvan',
          },
          isApproved: true,
          reviewedDate: 1719313998,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Everything was great.',
            title: null,
            lang: 'en',
            positiveText: 'Perfect location and exceptionally friendly staff.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-06-25',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-23',
            numNights: 2,
            roomType: {
              name: 'Standard Twin Room',
              id: '24593006',
              __typename: 'RoomTranslation',
            },
            roomId: 24593006,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd819b292bce8ddcb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GjYqB5dKW1AON6bgIdlZImlrTZM_TE-lYpSCV-yIw=s96-c',
            countryCode: 'si',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovenia',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Vid',
          },
          reviewedDate: 1719310007,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            positiveText: 'location and staff',
            title: 'Good location and comfortable rooms.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-06-25',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-24',
            numNights: 1,
            roomType: {
              name: 'Standard Twin Room',
              __typename: 'RoomTranslation',
              id: '24593006',
            },
            roomId: 24593006,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '85e42c48152b07b8',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocKxC60R4R_qrFZArb9kFScFbD_zXwR_ogmyDA7-sQcrK1SOZw=s96-c',
            countryCode: 'ua',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ukraine',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Shetty',
          },
          reviewedDate: 1719307056,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            title: null,
            lang: 'en',
            positiveText:
              'Friendly hosts, good location and rooms were comfertable',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-06-24',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-23',
            numNights: 1,
            roomType: {
              name: 'Standard Twin Room',
              __typename: 'RoomTranslation',
              id: '24593006',
            },
            roomId: 24593006,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '02beacdbd166e7e7',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GgBJKjFVpRCRB5qihxUuSuF76BucyyloHSjshLGT3o=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Couple',
            username: 'Ana',
          },
          isApproved: true,
          reviewedDate: 1719257890,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'I have nothing negative to say',
            title: 'Very friendly, attentive, accessible and helpful staff',
            positiveText: 'Clean, welcoming and calm',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-06-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-22',
            numNights: 1,
            roomType: {
              name: 'Triple Room',
              id: '24593003',
              __typename: 'RoomTranslation',
            },
            roomId: 24593003,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'e94d3922dc385556',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/10161048974955228/picture?type=square&height=64&width=64',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Group',
            username: 'Deb',
          },
          isApproved: true,
          reviewedDate: 1719152140,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing',
            title: null,
            positiveText:
              'Ideal location \nClean rooms\nLovely staff\nWould recommend',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-06-11',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-10',
            numNights: 1,
            roomId: 24593006,
            roomType: {
              name: 'Standard Twin Room',
              id: '24593006',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '39f6a0904f063104',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'hu',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Hungary',
            guestTypeTranslation: 'Couple',
            username: 'Szamira',
          },
          isApproved: true,
          reviewedDate: 1718458417,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing',
            title: null,
            lang: 'xu',
            positiveText:
              'The beds were really comfortable, and the view was amazing from our 5th floor room. We had a quick check-in, and the stuff was overly helpful. I can recommend it!',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-13',
            numNights: 1,
            roomId: 24593006,
            roomType: {
              name: 'Standard Twin Room',
              __typename: 'RoomTranslation',
              id: '24593006',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f7afa9047fafc916',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Family',
            username: 'Sabina',
          },
          reviewedDate: 1718410404,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            positiveText: 'Nice hotel, Staff were very friendly.',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-05-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-27',
            numNights: 1,
            roomId: 24593006,
            roomType: {
              name: 'Standard Twin Room',
              id: '24593006',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9fe2b4c19741862f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GgvyfuvKrLupRpIHtBsTd3Ip5G8t1XLpdVz5c0L=s96-c',
            countryCode: 'pl',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Poland',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Kacper',
          },
          isApproved: true,
          reviewedDate: 1717189353,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Honestly everything was fine. We could do everything as we wanted.. Reception spoke english.. Great, just  great',
            title: 'Cheap and clean',
            positiveText:
              'We really liked the possibility to leave our stuff for as long as we could and clean everything pretty much. It was the first time i really had nothing to complain about. It wasnt the cheapest option but still very very affordable. Great localisation, metro and tram easy to travel.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-05-24',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-22',
            numNights: 2,
            roomType: {
              name: 'Standard Twin Room',
              id: '24593006',
              __typename: 'RoomTranslation',
            },
            roomId: 24593006,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '1afce5fdfe15e55d',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJwwXckD_K2_UWEMzMAjdL30ieO6PSkPcZxeUdQM=s96-c',
            countryCode: 'ch',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Switzerland',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Gergely',
          },
          reviewedDate: 1716892289,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            positiveText:
              'Surprisingly spacious room and very swift check in. Location was very cemtral, right at the Ring',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.\n\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-05-20',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-18',
            numNights: 2,
            roomId: 24593004,
            roomType: {
              name: 'Quadruple Room',
              id: '24593004',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8b575d3d07d67fc0',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-HtUJoJff6NI/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmo0EWog0RPC9nt9u--t5i0-YYXQg/s96-c/photo.jpg',
            countryCode: 'al',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Albania',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Shirokaj',
          },
          reviewedDate: 1716215529,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            positiveText: 'Its was near city center,clean,all ok,service ok',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear guest, Thank you for your review. It was our pleasure having you at our hotel. Hope to see you here once again.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-05-19',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-16',
            numNights: 3,
            roomId: 24593004,
            roomType: {
              name: 'Quadruple Room',
              id: '24593004',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '90dac7d2d156018a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Group',
            username: 'Kyle',
          },
          reviewedDate: 1716113585,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            positiveText: 'Nice and close to the centre of the city',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
      ],
      timeOfYearFilter: [
        {
          count: 986,
          name: 'All (986)',
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Jun–Aug',
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 7,
      nr_reviews: 986,
    },
    review_score: 7.2,
    review_score_word: 'Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18040767,
    number_of_rooms: 1,
    stars: 3,
    address: 'Kertész u. 34',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 3,
    location: {
      longitude: 19.0661770105362,
      latitude: 47.5010452408055,
    },
    zip: '1073',
    hotel_description:
      'På Gartner Hotel, der ligger blot 10 minutters gang fra Det Ungarske Operahus og metrostationen Opera, tilbydes der værelser med eget badeværelse og gratis trådløs internetadgang. De rummelige værelser på Gartner Hotel, der ligger i Budapests 7. distrikt, har eget badeværelse med badekar eller bruser og hårtørrer. Samtlige værelser er udstyret med aircondition, minibar og tv. Nogle af værelserne har desuden balkon. Der er 2 sporvognsstop til togstationen Nyugati Pályaudvar (Vest) og 1 metrostop til togstationen Keleti Pályaudvar (Øst). Den nærmeste metrostation, Blaha Lujza Plads (M2-toglinjen), ligger blot 7 minutters gang fra hotellet.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjvask',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Strygning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Valutaveksling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikker dækning af mad ved levering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439958344.jpg?k=63b4e6a20c4abb71dda13439dc68dd89697e51b76ef2dd210b752efa0134cf9f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956787.jpg?k=5a41b8939ddfa4c68ef1de9c049f420f676e97ff0551deafdf4b4f5504ed1944&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956135.jpg?k=b30fdccbd8e80e32d9f9dfcf87dbf27e64e77da03b3126994e6e163450e4f358&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957882.jpg?k=9ab8e479f1732a49f8e0f3a1d43ea243c3d2d2006f31440537a80e15df29c39f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957199.jpg?k=32817728e617496a6ae21ba1ee3c4aab95628739fdf014cde86ea6b4baa6706c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956176.jpg?k=a8ec06be05c6795ac11c50b36a8ff93a5df924e50c013c1093499208e4a8a32e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956075.jpg?k=79093767eb42b6ff86237f125ccc679eba2a703f04149984fef450aee3884b12&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956482.jpg?k=a6d80e152c773c2b9e2266b3370eeffbedb3667e112cd0bcb4f4d9ad1e957d60&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956769.jpg?k=021d96a47975906f6802490d99e7e36b6419ef1bf6040484e19acb6f2b1f047c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957121.jpg?k=24b8de33b31e7e7245d93cdf014529e9660d265534e77cb3a6e06bb5153fb554&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439955499.jpg?k=de8dd9dffb61bf8531ba5e6c0eb425d05b378179e9674a98c81f39418b708bbe&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956485.jpg?k=bb9f2e8147977bcace8ab8f56c7ef477ea28e8beef6ff795b967cccba7d12d11&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956161.jpg?k=07920b27ecb2c1e7036077368908ec76c3843e85a5c30f0e07bab077b8971a8b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956158.jpg?k=17f1c0c98b59b41a8f47c913fcfa81a5dd221a44bdc9237df68fe689b8133164&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439955479.jpg?k=7f4a7f6fdc29fb76403e08720dc2274da53a677385942baec0e5d44645210efd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439955515.jpg?k=f0542c1861e7ac12fbec7fe724981131172b88b5efbb92bb2a2d9ae4b8cd8498&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439955508.jpg?k=7dfc42e233a9f26273a1f66ce10d08e3cd612bd59fea2268f9b8f7bb004bb9be&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956102.jpg?k=f10380fa093e79feb38c8d704f5b90b631d3620b59ba1c2f0b6e93a02dadcb05&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956504.jpg?k=ec66323bab22b87bcb564faffea8a7ed87939ae7b290e8d910559d8071b0fda5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956784.jpg?k=0cb78e07a6fc8324154dc3ee39a22ad7ba8ce549b05ad257632eca9e1f96ae30&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956777.jpg?k=e96407cc1a6ae38063d2c443ddfc98f3769e64cc45530724c57b84a358350202&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957136.jpg?k=9f72c23c72fa06ef5847d522114dc0a7f988fba0b327cf681477d84cc9cc5c40&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957506.jpg?k=dc5360398e30e604485533a6d3cc837ab057222a1d13b12175332289a18905d3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957501.jpg?k=1b2f2082a69743ca30366cf28236581d1e0e7dea8496475f10164fe53363a3f3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957884.jpg?k=237118675b95a3fccf41cc18c3181854e0ddb2b328483584f1c8f21983d314d4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957875.jpg?k=91d2fbe080f98f6faa339b6ba4fb59cf813eee2b40850be5505710e0a87246c5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957909.jpg?k=94a10d1c34c80812a550948afac1ff95ab7f59205d905d97e0596456dce028f2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439958333.jpg?k=81e307916fcdaafd8e40281445fbfa9da89612d921456e6d0537745fe2c3d7bc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/398997458.jpg?k=30101c6676549da5d0d86eba6cc7ab9f374b1fcf9b30d351dd34435a8b43ce8b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/398997459.jpg?k=bab4f638addc98f769119c2d7c2f6ac2c59b82cdfbc4928d2b26417bbd484627&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 3,
      rooms: [
        {
          max_n_people: 3,
          name: 'Room Triple',
          facilities: [],
          price: 146.79125000000002,
          photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439958344.jpg?k=63b4e6a20c4abb71dda13439dc68dd89697e51b76ef2dd210b752efa0134cf9f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956787.jpg?k=5a41b8939ddfa4c68ef1de9c049f420f676e97ff0551deafdf4b4f5504ed1944&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439956135.jpg?k=b30fdccbd8e80e32d9f9dfcf87dbf27e64e77da03b3126994e6e163450e4f358&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/439957882.jpg?k=9ab8e479f1732a49f8e0f3a1d43ea243c3d2d2006f31440537a80e15df29c39f&o=&hp=1',
          ],
          breakfast_included: false,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'HOTELSTON',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0.42500000000000004,
    price_without_discount: 209.17753125000004,
    price_increased: true,
    price_decreased: false,
    price_diff: 12.66,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Atlantic',
    street_address: 'Nepszinhaz u. 55, Budapest 1081, Hungary',
    city: 'Budapest',
    zip_code: '1081',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/atlantic.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 149.94,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 149.937,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 149.937,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 22.00342416529865,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17273018.jpg?k=267885236f6a7eacd6c3222bb4aa066842105df8caf665606ba7b4e5561969e1&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 964,
          name: 'All (964)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Wonderful: 9+ (239)',
          count: 239,
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 433,
          name: 'Good: 7-9 (433)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 193,
          name: 'Fair: 5-7 (193)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (64)',
          count: 64,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 35,
          name: 'Very Poor: 1-3 (35)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          name: 'Breakfast',
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          name: 'Room',
          isSelected: false,
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Location',
            id: 'topic_location',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          name: 'Clean',
          isSelected: false,
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          isSelected: false,
          translation: {
            name: 'Bed',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bed',
          },
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Bathroom',
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          name: 'Parking',
          translation: {
            name: 'Parking',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_parking',
          },
          isSelected: false,
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Shower',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_shower',
          },
          isSelected: false,
          name: 'Shower',
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bus',
          translation: {
            name: 'Bus',
            id: 'topic_bus',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Noise',
            id: 'topic_noise',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Noise',
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          name: 'Towel',
          translation: {
            name: 'Towel',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_towel',
          },
          isSelected: false,
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          name: 'Window',
          translation: {
            name: 'Window',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_window',
          },
          isSelected: false,
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          name: 'Toilet',
          isSelected: false,
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          name: 'Loud',
          translation: {
            name: 'Loud',
            id: 'topic_loud',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Quiet',
            id: 'topic_quiet',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Quiet',
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            id: 'topic_hot',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Hot',
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Coffee',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_coffee',
          },
          isSelected: false,
          name: 'Coffee',
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          name: 'Car',
          translation: {
            name: 'Car',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_car',
          },
          isSelected: false,
          id: 288,
          __typename: 'TopicFilter',
        },
        {
          name: 'Cold',
          translation: {
            name: 'Cold',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_cold',
          },
          isSelected: false,
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Private',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_private',
          },
          name: 'Private',
          id: 284,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Luggage',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_luggage',
          },
          name: 'Luggage',
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Safe',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_safe',
          },
          isSelected: false,
          name: 'Safe',
          id: 269,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Heat',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_heat',
          },
          name: 'Heat',
          id: 291,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          translation: 'Staff',
          name: 'hotel_staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 8.0203971862793,
          __typename: 'RatingScore',
        },
        {
          translation: 'Facilities',
          name: 'hotel_services',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 6.94532108306885,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_clean',
          translation: 'Cleanliness',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 7.28466415405273,
          __typename: 'RatingScore',
        },
        {
          translation: 'Comfort',
          name: 'hotel_comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 7.19569778442383,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 7.59191131591797,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 7.47371196746826,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 8.36065578460693,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      languageFilter: [
        {
          count: 964,
          name: 'All (964)',
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Danish (2)',
          value: 'da',
          countryFlag: 'dk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (174)',
          count: 174,
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (116)',
          count: 116,
          countryFlag: 'de',
          value: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (95)',
          count: 95,
          countryFlag: 'pl',
          value: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Spanish (27)',
          count: 27,
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Chinese (2)',
          count: 2,
          countryFlag: 'cn',
          value: 'zh',
          __typename: 'LanguageFilter',
        },
        {
          count: 52,
          name: 'Russian (52)',
          value: 'ru',
          countryFlag: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 11,
          name: 'Swedish (11)',
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          count: 12,
          name: 'French (12)',
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Italian (56)',
          count: 56,
          countryFlag: 'it',
          value: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (51)',
          count: 51,
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          count: 9,
          name: 'Dutch (9)',
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Lithuanian (6)',
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          count: 5,
          name: 'Norwegian (5)',
          value: 'no',
          countryFlag: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hungarian (143)',
          count: 143,
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          count: 11,
          name: 'Ukrainian (11)',
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          count: 10,
          name: 'Turkish (10)',
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (70)',
          count: 70,
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          count: 8,
          name: 'Portuguese (8)',
          value: 'pt',
          countryFlag: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 7,
          name: 'Bulgarian (7)',
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (7)',
          count: 7,
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          count: 13,
          name: 'Croatian (13)',
          value: 'hr',
          countryFlag: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (17)',
          count: 17,
          countryFlag: 'rs',
          value: 'sr',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Latvian (4)',
          value: 'lv',
          countryFlag: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Finnish (2)',
          value: 'fi',
          countryFlag: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovak (39)',
          count: 39,
          countryFlag: 'sk',
          value: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Estonian (1)',
          value: 'et',
          countryFlag: 'ee',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Catalan (1)',
          value: 'ca',
          countryFlag: 'catalonia',
          __typename: 'LanguageFilter',
        },
        {
          count: 11,
          name: 'Slovenian (11)',
          value: 'sl',
          countryFlag: 'si',
          __typename: 'LanguageFilter',
        },
      ],
      customerTypeFilter: [
        {
          count: 964,
          name: 'All (964)',
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 233,
          name: 'Families (233)',
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Couples (389)',
          count: 389,
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (203)',
          count: 203,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Solo travelers (139)',
          count: 139,
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Business travelers (71)',
          count: 71,
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      reviewsCount: 963,
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2023-10-15',
            __typename: 'BookingDetails',
            checkinDate: '2023-10-14',
            numNights: 1,
            roomType: {
              name: 'Economy Twin Room',
              id: '7537540',
              __typename: 'RoomTranslation',
            },
            roomId: 7537540,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c966bfa2bd82cbb8',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AAcHTtcVx1kPcDep6xxSzMsPbVSVotL2-qvrceHZuZN0e-Yb=s96-c',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Slovakia',
            guestTypeTranslation: 'Group',
            username: 'Ján',
          },
          reviewedDate: 1697397546,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText: 'Nonstop reception, clean and calm.',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-10',
            numNights: 3,
            roomType: {
              name: 'Twin Room',
              __typename: 'RoomTranslation',
              id: '7537504',
            },
            roomId: 7537504,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '0df5a0b3c7519b9a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-h.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Harry',
          },
          isApproved: true,
          reviewedDate: 1723578349,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'The location meant there were not a lot of bars nearby or general night life, but it was only a short journey to get to a few places!',
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText:
              'Rooms were comfortable, staff were friendly and helpful - we arrived in the city at 9am and they let us leave luggage and get the room a few hours early. Breakfast had a decent amount of options, the A/C was good and could be left on during the day, and you could log into Netflix on the TV! There is also a Lidl 5 mins away to get supplies.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-05-03',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-02',
            numNights: 1,
            roomType: {
              name: 'Economy Twin Room',
              id: '7537540',
              __typename: 'RoomTranslation',
            },
            roomId: 7537540,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '03f1ceb7d30f90b4',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/10154441703215785/picture?type=square&height=64&width=64',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Carina',
          },
          reviewedDate: 1715176227,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'We liked everything price, room is clean and quiet place, also breakfast was included in the price and it was decent. Also private parking available at the hotel for 6euros/day, also very close to metro and city center',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2023-07-19',
            __typename: 'BookingDetails',
            checkinDate: '2023-07-18',
            numNights: 1,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              __typename: 'RoomTranslation',
              id: '7537540',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a9b39b51ed5276a4',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/10202752729815649/picture?type=square&height=64&width=64',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovakia',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Csilla',
          },
          reviewedDate: 1689801114,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "I only didn't like the size of the shower cabin, it was very small. But I'd still chose this hotel next time.",
            positiveText:
              "The room was clean, and very cozy. Fridge, air conditioning, TV and a comfy bed. It's close to Keleti Pályaudvar but the area is quiet. \nBreakfast was excellent 👌",
            lang: 'en',
            title: 'Cozy, clean, comfy',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2023-06-18',
            __typename: 'BookingDetails',
            checkinDate: '2023-06-16',
            numNights: 2,
            roomType: {
              name: 'Economy Twin Room',
              __typename: 'RoomTranslation',
              id: '7537540',
            },
            roomId: 7537540,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c3979579c8ed2bd1',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'rs',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Serbia',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Miloš',
          },
          reviewedDate: 1687117862,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "We had a room with a view on the restaurant area, no natural lights. Small remark but no deal breaker, that's for sure.",
            lang: 'en',
            positiveText:
              'The staff was very friendly. Rooms are comfy, clean and very well equipped. Breakfast is good, the location is near the city center with just 2 tram stations away from Erzebet street.',
            title: 'Excellent stay',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2023-05-19',
            __typename: 'BookingDetails',
            checkinDate: '2023-05-17',
            numNights: 2,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              id: '7537540',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ca2ec06be2e688d9',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh6.googleusercontent.com/-K2v9Lynrtds/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdJaDmxUMzNC0BOfEJu7nE_K_ck4A/photo.jpg',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovakia',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Ivan',
          },
          isApproved: true,
          reviewedDate: 1684557723,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText: 'All was perfect',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2023-04-09',
            __typename: 'BookingDetails',
            checkinDate: '2023-04-08',
            numNights: 1,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              __typename: 'RoomTranslation',
              id: '7537540',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9a636dba1da813ce',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-aDMTI7fU_aQ/AAAAAAAAAAI/AAAAAAAAAHA/HpFEZ01ND-Y/photo.jpg?sz=50',
            countryCode: 'rs',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Serbia',
            guestTypeTranslation: 'Group',
            username: 'Lazar',
          },
          reviewedDate: 1681107835,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'Good hotel, fair price',
            positiveText:
              'Everything was fine. Our room was quiet, clean, not to big but just enough for one night stay in Budapest. Breakfast was nice. Hotel is well located so you can walk to the city center if you are in shape or use a tram to Blaha Lujza ter and there you can choose other lines (tram or metro). There are a lot small shops where you can buy anything you need, some fast food restaurants, oriental shops etc.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2023-01-03',
            __typename: 'BookingDetails',
            checkinDate: '2022-12-31',
            numNights: 3,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              id: '7537540',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c0dd9f0723a4c496',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJCaAyrgMZkoZChC8rGrUKJ0q0pZcuktTwAz_yLk6PRyQuS5w=s96-c',
            countryCode: 'eg',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Egypt',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Mohamed',
          },
          reviewedDate: 1672776663,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'Location , staff , comfortable beds and good breakfast .',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2022-12-29',
            __typename: 'BookingDetails',
            checkinDate: '2022-12-23',
            numNights: 6,
            roomType: {
              name: 'Economy Twin Room',
              __typename: 'RoomTranslation',
              id: '7537540',
            },
            roomId: 7537540,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '6b6c366f9c8be2b3',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Family',
            username: 'Maria',
          },
          isApproved: true,
          reviewedDate: 1672575016,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'Just one thing when I chose twins rooms I thought that you can go from one room to another.',
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText:
              'Location not to far from city centre. Breakfast varied and very good,desserts and drinks (juice, coffee, tea). Gabor receptionist very friendly and helpful. Towels changed every day and toilet paper replaced.  The room it was nice and warm. If I will go again in Budapest  I will choose  Atlantic Hotel.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2022-10-15',
            __typename: 'BookingDetails',
            checkinDate: '2022-10-11',
            numNights: 4,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              id: '7537540',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f52f680b75878842',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJz8g9dOWCVLIE82oMX8UR-s1bMyhFZw9RvCLWuO=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Family',
            username: 'Karolina',
          },
          isApproved: true,
          reviewedDate: 1666040555,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText:
              'The room was ok, clean with a comfy beds. Good location-about 30 minutes walk to the city centre. A tram stop next to the hotel, metro station less than 5 minutes walk.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2022-08-15',
            __typename: 'BookingDetails',
            checkinDate: '2022-08-13',
            numNights: 2,
            roomType: {
              name: 'Economy Twin Room',
              __typename: 'RoomTranslation',
              id: '7537540',
            },
            roomId: 7537540,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '3e35dce3932134b0',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'cz',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Czech Republic',
            guestTypeTranslation: 'Group',
            username: 'Martin',
          },
          isApproved: true,
          reviewedDate: 1662977268,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Breakfast slightly (really just slightly) worse than in previous years, but still satisfactory.',
            lang: 'en',
            positiveText:
              'Probably the best value for money, if you want breakfast and if you travel with car (hotel offers its own secured parking for 10.00 EUR).',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2022-07-29',
            __typename: 'BookingDetails',
            checkinDate: '2022-07-26',
            numNights: 3,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              id: '7537540',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '589d69a74c1252bb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJx3Ggc4p-UWVbguY5GeaybCKeEDfAxqgW8gaqPn=s96-c',
            countryCode: 'ie',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ireland',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Jakub',
          },
          isApproved: true,
          reviewedDate: 1659125768,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              "Television in the room didn't actually have any channels. Mini-fridge was quite loud.",
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText:
              'Rooms had air conditioning and breakfast was included. Rooms were comfortable and clean. Very good value.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2022-07-11',
            __typename: 'BookingDetails',
            checkinDate: '2022-07-09',
            numNights: 2,
            roomId: 7537503,
            roomType: {
              name: 'Triple Room',
              __typename: 'RoomTranslation',
              id: '7537503',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '55e592dc6a28ae92',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GhdnyWsjhbUAcVKhOs-OPyrgIjLmFQjB-pXILP4xA=s96-c',
            countryCode: 'de',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Germany',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Jason',
          },
          reviewedDate: 1657593224,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'the property could use to be upgraded.',
            positiveText: 'The location was great and amount just right.',
            lang: 'xu',
            title: 'Great location, reasonable price',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2022-06-23',
            __typename: 'BookingDetails',
            checkinDate: '2022-06-22',
            numNights: 1,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              id: '7537540',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '3e43ca1b38d55d98',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GhdnyWsjhbUAcVKhOs-OPyrgIjLmFQjB-pXILP4xA=s96-c',
            countryCode: 'de',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Germany',
            guestTypeTranslation: 'Family',
            username: 'Jason',
          },
          reviewedDate: 1656103997,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'not much.',
            lang: 'xu',
            positiveText: 'great location, good breakfast.',
            title: 'great location, good breakfast.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2022-06-04',
            __typename: 'BookingDetails',
            checkinDate: '2022-06-01',
            numNights: 3,
            roomId: 7537540,
            roomType: {
              name: 'Economy Twin Room',
              __typename: 'RoomTranslation',
              id: '7537540',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f42b6b1c8aabf4c5',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14Ggx45TE5HVe2MKo_vmk7-43dekOEviwbXae38wlHA=s96-c',
            countryCode: 'in',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'India',
            guestTypeTranslation: 'Couple',
            username: 'Nikhil',
          },
          isApproved: true,
          reviewedDate: 1654465193,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'Had a great experience.',
            positiveText:
              'Great location with 24 hour front desk and friendly staff. Highly recommend.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      timeOfYearFilter: [
        {
          name: 'All (964)',
          count: 964,
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Mar–May',
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Sep–Nov',
          count: 0,
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Dec–Feb',
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 7,
      nr_reviews: 964,
    },
    review_score: 7.1,
    review_score_word: 'Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18040734,
    number_of_rooms: 0,
    stars: 3,
    address: 'Nepszinhaz u. 55, Budapest 1081, Hungary',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 0,
    location: {
      longitude: 19.0810203552246,
      latitude: 47.4937585301185,
    },
    zip: '1081',
    hotel_description:
      'Hotel Atlantic ligger centralt, blot 10 minutters gang fra Keleti Togstation og metrostationen Blaha Lujza. Der er værelser med gratis wi-fi og eget badeværelse med gulvvarme. Værelserne har tv med kabelkanaler, køleskab, værdiboks og elkedel med teposer. Aircondition tilbydes, men der skal anmodes herom inden ankomst. Man kan parkere i Atlantic Hotels garage mod et tillægsgebyr.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sightseeingskranke',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Nøgleadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overnatningsstedet tilbyder termometre til gæsterne',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17273018.jpg?k=267885236f6a7eacd6c3222bb4aa066842105df8caf665606ba7b4e5561969e1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/348623785.jpg?k=109d33f78f8be33e54d204d784bd86d5e4c55572745b1555e0e1dc5c3fb64417&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/348623791.jpg?k=6e3f525ce38908301c4a218cd5f1688836dd538d38c622dd6447f2e44f458e88&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/348623749.jpg?k=ddf634dc13614c71c9532adfb0c37f0f6506a50066b5cf2162ad94d55c5cb31c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17235407.jpg?k=e42a48694d855f79229fc326aa55548f86e93d0753521b2eed62ba172fc0646e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272910.jpg?k=313a3526da2cbd262e0ee1c712b90e6bb817c80d1c488899db48a0ca5504f78f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272685.jpg?k=534b2c1501db61fffd43abd016c1b4c546a86b2054589df2327d1509a633b31b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272176.jpg?k=1552186e8ab46b2b253747529ed6cd2b664bf264755b75a7f0474fd584c974ef&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17273002.jpg?k=ed3712dfb194009d387155241853346ab8c12f7e6a39b0637e68cbb8f6ec7478&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272815.jpg?k=998c2d712a75d78aa0b72bb203b273d96ed3559a5bba1e7d4be05be78ab9f38d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272169.jpg?k=6274a0d7234dc6618729a47cb1baac831dab9fccbf81e1ed27ba4444c0e2f58b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17235142.jpg?k=1c28711d96a776e24352c1f7186786767495e1e0d93c4dbac156acc9bdd86bdf&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272705.jpg?k=6fb9557a0d6955d2c565332130be372a47597f13079522715667397bd9885ee2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272778.jpg?k=24d8cd11640cd7f76a1d6739d174c7a064e3e83940bea20de9da5ff60a8eec84&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272854.jpg?k=a172de389a5a26b9fdfdbf76199d811d7ca15d01a2a7567e2137c8223510d4d2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272777.jpg?k=1ef79d9646ea764e96c1ba7b32e46a44680b3405bc3e54ac51469166161c5763&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272783.jpg?k=bc3ffcf390a8935b364354b826ece9211e31852720b6950c48b4ca96faae6c0e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272787.jpg?k=b83e8cf5f0c4d664e44e0c4d2060b98311669b0dcc4d2ada7484e43f2ac742b3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272891.jpg?k=1afb46f96bdae078dbf44957ab539300ebce1d17533e2f9945a87e4cb2dd7845&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272933.jpg?k=f40f7b4a8aef3f5012de035d2a36f54da06c1ff2ceb409d6f91805438232f53b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272949.jpg?k=6db63cd6665db9430c0f133f853c5f2f7665897f887456c467c933699a8b396c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17272853.jpg?k=ce22afaa82ee5833a9eeb3eac76fb1e975c2bbce56d51ac67dab6187862125fb&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17273169.jpg?k=2b9cf1199d68dbd7f02e6912aaa116e8fdb79673d6728bba0c47f347bacf03cc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17273196.jpg?k=9faaf8eb598869f853c935c644ffd378a9b83398a2a62c854df67a0badbfb053&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84544806.jpg?k=c2238d75f61949838130deaeaa59f74b03c4ca8d9db8914f0c68999338a10084&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84544809.jpg?k=84cea1a445a779155da6fec47b52c77a82100f517c4fc3dff1fdc2ab4994668f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84544888.jpg?k=05c24dc8b0e18e4e89f7b29410e5d7f04e0f8eb0432a185506bb1bcf6650405b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84544947.jpg?k=a91575e037c001e488f55190d578e3a12a7fa21bede2b0044e612ac58878931a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545057.jpg?k=1302af0c4043b9b3730080fa3d6fc28b95f5b3db19236757011c7722aa230c54&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545060.jpg?k=d397c90e334e9514d0272fb03bf810ba24088be6afafb562040e0f8ae92c4e18&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545345.jpg?k=88cefa0e64d9469bc68160a0b78e2079486bfd7221da0f225ce28793dd687b73&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545347.jpg?k=e3f665a0042b4113fa90ac7dd392e9d21bfb75202cdd0c8c5fdecee9d53d8e9c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545357.jpg?k=3f92b8cc1015c8d240990d96d8453d76a6c8d6134c7e6fc9bc53d26b6599c9b1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545447.jpg?k=c5ce2c5bdd1f7c31b9f5aa3635054ccf1839ea2b2238effdaa5670256145542d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545456.jpg?k=6d5262a76eb4314bb37b9b25d63658e0e1dc94afd5879335098a13e7f19e8e2d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545534.jpg?k=19001154ab3c27012e391368ef946b047c5da8eb469b05641a8237388838c850&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545663.jpg?k=b89674186dabe53ffa6fa3ee0a204fe66321a27223d0154ba467b1a6315cb71b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84545968.jpg?k=479928c18ee5441528d15f01e23f074e4e6fdf8a435598a8f59d1b77d77208f8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84546001.jpg?k=c39ac492e5ff82c57e3d671ec1bd8b8b8ee841ddcc9773fd0810f01fe6987498&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84546005.jpg?k=a18fec60df5fbdfda63c03e5e1297822c2ee872b13e4a529747dd03afdf741e5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84546013.jpg?k=a45508ed231e877f068381f57c0281431c7917237dc6a462087da57890575453&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84546023.jpg?k=690ce1687adbdf25f5a10c12b7dc271357466d010b27c609b261b5800f554af0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84546026.jpg?k=169b48cd4f8857d14a550fbbb7ad6ab445599ee9d985fdfb22cf2a345c394191&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84546028.jpg?k=35d383a7db234475f756f70c5ef1c9f9b93e43d504b3d655c72bf8ac8348d6a9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/84546032.jpg?k=50c4dbec915b6bbfcc146adaf50d018fa5a2f3f6d202e86b57bd6e6d3bb9b821&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 0,
      max_n_people: 0,
      rooms: [],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'HOTELSTON',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0.27,
    price_without_discount: 190.41999,
    price_increased: true,
    price_decreased: false,
    price_diff: 15.81,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Benczur Hotel',
    street_address: 'Benczur Utca 35',
    city: 'Budapest',
    zip_code: '1068',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/benczur.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 134.13,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 134.128995,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 134.128995,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 20.093231895967566,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902117.jpg?k=045731999b81317ece4d9f088f3328626b09ece2cf3d808178acf903706bf3c1&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          name: 'All (4781)',
          count: 4781,
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 2187,
          name: 'Wonderful: 9+ (2187)',
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 1975,
          name: 'Good: 7-9 (1975)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 442,
          name: 'Fair: 5-7 (442)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (119)',
          count: 119,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 58,
          name: 'Very Poor: 1-3 (58)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Breakfast',
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          isSelected: false,
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Clean',
          isSelected: false,
          translation: {
            name: 'Clean',
            id: 'topic_clean',
            __typename: 'ReviewTopicTranslation',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          name: 'Quiet',
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          isSelected: false,
          translation: {
            name: 'Bathroom',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bathroom',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Parking',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_parking',
          },
          isSelected: false,
          name: 'Parking',
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Bus',
            id: 'topic_bus',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Bus',
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Restaurant',
            id: 'topic_restaurant',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Restaurant',
          id: 273,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Dinner',
            id: 'topic_dinner',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Dinner',
          id: 262,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          name: 'Toilet',
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Shower',
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bar',
          isSelected: false,
          translation: {
            name: 'Bar',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bar',
          },
          id: 271,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Balcony',
            id: 'topic_balcony',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Balcony',
          id: 272,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          isSelected: false,
          name: 'Hot',
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          name: 'Coffee',
          isSelected: false,
          translation: {
            name: 'Coffee',
            id: 'topic_coffee',
            __typename: 'ReviewTopicTranslation',
          },
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          name: 'Loud',
          isSelected: false,
          translation: {
            name: 'Loud',
            id: 'topic_loud',
            __typename: 'ReviewTopicTranslation',
          },
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          name: 'Noise',
          isSelected: false,
          translation: {
            name: 'Noise',
            id: 'topic_noise',
            __typename: 'ReviewTopicTranslation',
          },
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Cold',
            id: 'topic_cold',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Cold',
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Check-in',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_checkin',
          },
          name: 'Checkin',
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'WiFi',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_wifi',
          },
          name: 'Wifi',
          id: 247,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Towel',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_towel',
          },
          name: 'Towel',
          id: 281,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          name: 'hotel_staff',
          translation: 'Staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 8.39938735961914,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            ufiScoreHigherBound: 9.61482429504395,
            __typename: 'UfiScoreAverage',
          },
          value: 7.95565509796143,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_clean',
          translation: 'Cleanliness',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 8.31252670288086,
          __typename: 'RatingScore',
        },
        {
          translation: 'Comfort',
          name: 'hotel_comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 8.21951198577881,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 8.41414356231689,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 8.95241641998291,
          __typename: 'RatingScore',
        },
        {
          translation: 'Free Wifi',
          name: 'hotel_free_wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 8.81914901733398,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      languageFilter: [
        {
          name: 'All (4781)',
          count: 4781,
          countryFlag: null,
          value: '',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Danish (20)',
          count: 20,
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (1008)',
          count: 1008,
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (408)',
          count: 408,
          countryFlag: 'de',
          value: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (180)',
          count: 180,
          countryFlag: 'pl',
          value: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          count: 131,
          name: 'Spanish (131)',
          value: 'es',
          countryFlag: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 21,
          name: 'Chinese (21)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Russian (256)',
          count: 256,
          countryFlag: 'ru',
          value: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 30,
          name: 'Swedish (30)',
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (101)',
          count: 101,
          countryFlag: 'fr',
          value: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Italian (271)',
          count: 271,
          countryFlag: 'it',
          value: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (209)',
          count: 209,
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (61)',
          count: 61,
          countryFlag: 'nl',
          value: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 7,
          name: 'Lithuanian (7)',
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Norwegian (4)',
          value: 'no',
          countryFlag: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (9)',
          count: 9,
          countryFlag: 'kr',
          value: 'ko',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hungarian (1235)',
          count: 1235,
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Thai (1)',
          value: 'th',
          countryFlag: 'th',
          __typename: 'LanguageFilter',
        },
        {
          count: 75,
          name: 'Ukrainian (75)',
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Arabic (6)',
          count: 6,
          countryFlag: 'sa',
          value: 'ar',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (54)',
          count: 54,
          countryFlag: 'tr',
          value: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          count: 10,
          name: 'Japanese (10)',
          value: 'ja',
          countryFlag: 'jp',
          __typename: 'LanguageFilter',
        },
        {
          count: 236,
          name: 'Czech (236)',
          value: 'cs',
          countryFlag: 'cz',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Portuguese (52)',
          count: 52,
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 15,
          name: 'Bulgarian (15)',
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (26)',
          count: 26,
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Croatian (53)',
          count: 53,
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (58)',
          count: 58,
          countryFlag: 'rs',
          value: 'sr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (8)',
          count: 8,
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Finnish (14)',
          count: 14,
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Icelandic (3)',
          value: 'is',
          countryFlag: 'is',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovak (169)',
          count: 169,
          countryFlag: 'sk',
          value: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Estonian (2)',
          count: 2,
          countryFlag: 'ee',
          value: 'et',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Catalan (3)',
          value: 'ca',
          countryFlag: 'catalonia',
          __typename: 'LanguageFilter',
        },
        {
          count: 21,
          name: 'Slovenian (21)',
          value: 'sl',
          countryFlag: 'si',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hebrew (21)',
          count: 21,
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
      ],
      customerTypeFilter: [
        {
          name: 'All (4781)',
          count: 4781,
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 1320,
          name: 'Families (1320)',
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Couples (1776)',
          count: 1776,
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 623,
          name: 'Groups of friends (623)',
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Solo travelers (1062)',
          count: 1062,
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 593,
          name: 'Business travelers (593)',
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2023-08-08',
            __typename: 'BookingDetails',
            checkinDate: '2023-08-07',
            numNights: 1,
            roomId: 7503210,
            roomType: {
              name: 'Superior Double or Twin Room with Balcony',
              __typename: 'RoomTranslation',
              id: '7503210',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '2469f66fe2670c19',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/xdata/images/xphoto/square64/17264692.jpg?k=c3c26e1e5d50b7a36e33470295c73d6d434a45ea0274d350be9b9a552b1effd9&o=',
            countryCode: 'il',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Israel',
            guestTypeTranslation: 'Family',
            username: 'Ilana',
          },
          reviewedDate: 1691530230,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "The bed wasn't the most comfortable but OK for one night.",
            lang: 'xu',
            positiveText:
              'The room was big and comfortable for one night stay. The stuff were nice and helpful. Great shower, everything was super clean and the food at the restaurant was great!',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-09',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-08',
            numNights: 1,
            roomType: {
              name: 'Economy Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7503204',
            },
            roomId: 7503204,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '0b33699c5c67cae2',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-n.png',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United States of America',
            guestTypeTranslation: 'Couple',
            username: 'Nikolett',
          },
          isApproved: true,
          reviewedDate: 1724351024,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'No gym unfortunately.',
            title: 'Excellent place to stay close to everything',
            lang: 'xu',
            positiveText:
              'Excellent value for price, amazing breakfast and professional staff, perfect location.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-20',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-19',
            numNights: 1,
            roomId: 7503204,
            roomType: {
              name: 'Economy Double or Twin Room',
              id: '7503204',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '53736e91ffcff705',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GiX2aDPwewmnWo-wuPdkeYzD8Gjp2eHcAQRf-KRmA=s96-c',
            countryCode: 'bd',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Bangladesh',
            guestTypeTranslation: 'Family',
            username: 'Mursalin006',
          },
          isApproved: true,
          reviewedDate: 1724316022,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'xu',
            positiveText:
              'The balcony is an addition. overall everything is good',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-13',
            numNights: 1,
            roomType: {
              name: 'Economy Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7503204',
            },
            roomId: 7503204,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'bf352ccb90c41551',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh6.googleusercontent.com/-HA__ENc4J9g/AAAAAAAAAAI/AAAAAAAAA0E/Kyowsn2o2ig/photo.jpg?sz=50',
            countryCode: 'at',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Austria',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Andrei',
          },
          isApproved: true,
          reviewedDate: 1723992735,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "The dinner in the restaurant wasn't particularly tasty, though the portions were big.",
            title: null,
            lang: 'en',
            positiveText: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-11',
            numNights: 2,
            roomId: 7503204,
            roomType: {
              name: 'Economy Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7503204',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd01c061de4c9f4f6',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ALm5wu1WOlBbmsbaG8TXTsavvDKo4Rktzs364h_jHjrC=s96-c',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovakia',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Schmidt',
          },
          isApproved: true,
          reviewedDate: 1723725616,
          textDetails: {
            negativeText: 'Nothing to not like about this accommodatiom',
            textTrivialFlag: 0,
            lang: 'xu',
            positiveText:
              'We had new room with cozy beds, everything was excellent',
            title:
              'Perfect stay in Budapest. The staff was super  nice too and the breakfast was delicious.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-14',
            numNights: 2,
            roomId: 7503210,
            roomType: {
              name: 'Superior Double or Twin Room with Balcony',
              __typename: 'RoomTranslation',
              id: '7503210',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'bdc32ef5ad2f3d0a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Krisztina',
          },
          isApproved: true,
          reviewedDate: 1723479536,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            lang: 'en',
            positiveText: 'Excellent restaurant, very tasty food',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-10',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-09',
            numNights: 1,
            roomType: {
              name: 'Economy Double or Twin Room',
              id: '7503204',
              __typename: 'RoomTranslation',
            },
            roomId: 7503204,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '1ca4ca89ea9be2bd',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/xdata/images/xphoto/square64/78402017.jpg?k=ac153babf4b9bbc4e68ccdb86495ad7d9d4acd54f4f2f12be67e99ffb8ae564b&o=',
            countryCode: 'br',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Brazil',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Brunaemyc',
          },
          isApproved: true,
          reviewedDate: 1723322468,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'The only tiny problem we had was that when we first arrived in the bedroom after the check-in, the maid was still cleaning it. She sent us back to the hall (maybe a miscommunication with the reception?), and it took some more minutes of waiting. As I said, a tiny problem considering the overall, but always valid comment to avoid distress in the future!',
            title: 'Excellent stay at Budapest',
            lang: 'en',
            positiveText:
              "The place was very accessible from the train station. We arrived too early to check-in, but the staff was proactive on offering to keep our bags so we could feel free to go out and start exploring the city while waiting to have the keys - so nice! The room was clean and comfortable (although the curtains did not held the light in the morning haha, but not such a problem for us). Our booking did not include breakfast, but we paid separately and did not regret, it was very good. Also, it was close to the main area in Pest, we did many things on foot and had access to metro and bus stations pretty close to the hotel. In general, an excellent stay! We'd definitely come back.",
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-29',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-28',
            numNights: 1,
            roomType: {
              name: 'Economy Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7503204',
            },
            roomId: 7503204,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f57b0e5d869d0475',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJy7anDBo0MOI3UspUoUXNAxVKEM4vJfaLT5Ju-P=s96-c',
            countryCode: 'ua',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ukraine',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Альона',
          },
          reviewedDate: 1722372736,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'The hotel is located in a quiet place, relatively close to the city center. There is a paid parking. Delicious breakfasts',
            lang: 'en',
            title: 'good hotel, quality corresponds to the price',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-27',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-26',
            numNights: 1,
            roomId: 7503224,
            roomType: {
              name: 'Superior Single Room',
              id: '7503224',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '92ebcc04a17a1e6f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJwMDlf5FfyWUwFk58bC3Oek8XkO5hoJ3cQ5-Du3=s96-c',
            countryCode: 'de',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Germany',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Oana',
          },
          isApproved: true,
          reviewedDate: 1722109303,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "Personally I don't have complaints. It's an old-school quiet hotel, in a quiet place, with traditional/conservative furniture and traditional food/services. It's a good wifi, but don't expect to find here the last gadgets or plug sockets for the mobile phones, music or party-services. Is ideal for families or sportives and people who appreciate the hospitality in the classical meaning.",
            title: null,
            lang: 'en',
            positiveText:
              'My favorite hotel for city-breaks in Budapest. Fabulous breakfast and services, a very good restaurant with fair prices.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 1,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-20',
            numNights: 3,
            roomType: {
              name: 'Economy Double or Twin Room',
              id: '7503204',
              __typename: 'RoomTranslation',
            },
            roomId: 7503204,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ae0bd164ee52c50d',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'ba',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Bosnia and Herzegovina',
            guestTypeTranslation: 'Couple',
            username: 'Matea',
          },
          isApproved: true,
          reviewedDate: 1721820133,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Nothing specific, everything is better than what I payed for.',
            title: null,
            lang: 'en',
            positiveText:
              "Value for money. Excellent breakfast, very rich and location quiet although it's almost in the very centre of town. My warm recomendation.",
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-21',
            numNights: 2,
            roomType: {
              name: 'Superior Single Room',
              id: '7503224',
              __typename: 'RoomTranslation',
            },
            roomId: 7503224,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '7770e08a09b3bbfd',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocLEidgior1FJk6mBwEKJ3W3le2vdv1DDHJqnqwjiJ_mFanj4n8=s96-c',
            countryCode: 'iq',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Iraq',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Dr',
          },
          isApproved: true,
          reviewedDate: 1721805790,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Perfect breakfast and the staff were very friendly 👌',
            lang: 'en',
            positiveText: 'Everything was amazing 👏 🤩',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-11',
            numNights: 1,
            roomId: 7503204,
            roomType: {
              name: 'Economy Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7503204',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '76a435cbc41005b0',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-IHY1vl5KfpU/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rexwGBHoYPIuIO55yt7Ceslcb22gQ/s96-c/photo.jpg',
            countryCode: 'hu',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Hungary',
            guestTypeTranslation: 'Couple',
            username: 'Zsolt',
          },
          isApproved: true,
          reviewedDate: 1720863499,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              'Perfect place for a short stay, the staff is always polite and helpful. We had no problems at all.',
            title: 'Perfect',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: [
            {
              urls: [
                {
                  size: 'max1280x900',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1280x900/353389667.jpg?k=f9a7fceadd653244dbc88c61d7d29c82aefccb9a8fcdf4e49cf0f52f88c2341f&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square80',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/square80/353389667.jpg?k=f9a7fceadd653244dbc88c61d7d29c82aefccb9a8fcdf4e49cf0f52f88c2341f&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square160',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/square144/353389667.jpg?k=f9a7fceadd653244dbc88c61d7d29c82aefccb9a8fcdf4e49cf0f52f88c2341f&o=',
                  __typename: 'ReviewPhotoUrl',
                },
              ],
              id: 353389667,
              kind: 'PROPERTY',
              __typename: 'ReviewPhoto',
            },
          ],
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-05',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-03',
            numNights: 2,
            roomType: {
              name: 'Economy Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7503204',
            },
            roomId: 7503204,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '4feed339cdbda3a1',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-p.png',
            countryCode: 'cz',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Czech Republic',
            guestTypeTranslation: 'Couple',
            username: 'Pavel',
          },
          isApproved: true,
          reviewedDate: 1720631855,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'The only thing I did not like was the curtains in the room. They were dark red but quite thin and the sun in summer comes up very early in the morning and having the room window facing toward the east side it shined through quiet a lot. So I recommend the hotel changing the curtains for heavy fabric which would keep the room dark.',
            title: 'Great choice',
            lang: 'en',
            positiveText:
              'The hotel itself was nice and also the staff.  The location of the hotel is on quiet street and about between 2 underground stations. One is "Bajza utca" and the other is "Hosok tere" and it is about 400 meters to either of the stations. There is also small local grocery shop called ABC which is about 80 meters. The room was spacious with a little balcony and also with mini fridge. For breakfast there was plenty to choose from including hot, cold and also fruits. Nice suprise in the room was a spare pillow which was less filled so it was flatter and more comfortable to sleep on for me personally. \r\nSo I recommend this hotel.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 1,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-06-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-26',
            numNights: 2,
            roomId: 7503210,
            roomType: {
              name: 'Superior Double or Twin Room with Balcony',
              __typename: 'RoomTranslation',
              id: '7503210',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8845d30c5337dcd5',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-t.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Thomas',
          },
          isApproved: true,
          reviewedDate: 1720630108,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'Nice area, right by a metro station   easy to get to center.',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-09',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-08',
            numNights: 1,
            roomType: {
              name: 'Economy Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7503204',
            },
            roomId: 7503204,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '760ed5de33500466',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United States of America',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Julieth',
          },
          reviewedDate: 1720554977,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'xu',
            positiveText: 'The location and cleanliness',
            title: null,
            __typename: 'TextDetails',
          },
        },
      ],
      reviewsCount: 4781,
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      timeOfYearFilter: [
        {
          count: 4781,
          name: 'All (4781)',
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Dec–Feb',
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 4781,
    },
    review_score: 8.1,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041144,
    number_of_rooms: 1,
    stars: 3,
    address: 'Benczur Utca 35',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 1,
    location: {
      longitude: 19.0763103961945,
      latitude: 47.5114634258072,
    },
    zip: '1068',
    hotel_description:
      'Benczur Hotel har en rolig beliggenhed i ambassadekvarteret i Budapest i centrum af denne travle by. Der er dejlig have og restaurant Der tilbydes gratis WiFi overalt i huset. Hotel Benczur ligger blot 5 minutters kørsel fra torvet Oktogon, og samtlige værelser har satellit-tv samt minibar. Hotellets restaurant Zsolnay serverer en kombination af traditionelle ungarske retter og innovative moderne retter samt vegetarretter. Om sommeren kan man også spise på den smukke terrasse i haven. Den nærmeste metrostation, Bajza Utca, ligger på linje M1, 350 m derfra. Du finder talrige attraktioner en kort gåtur derfra. Budapest Zoo ligger 900 m fra ejendommen, City Park ligger 10 minutter derfra, og der er 15 minutters gang til de varme kilder, Széchenyi.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Restaurant',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kæledyr tilladt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Roomservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Møde-/festlokale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Have',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Terrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Business-center',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Handicapvenlig',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Strygning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Valutaveksling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Madpakke',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Biludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Allergivenligt værelse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Hæveautomat findes inde på ejendommen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særlige diæter (efter forespørgsel)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fælles opholdsrum/tv-område',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gadeparkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Handicapparkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kørestolsadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Toilet med armstøtter',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Højt toilet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lavthængende vask på badeværelset',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alarmsnor på badeværelset',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport fra lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport til lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Café på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Moderne kunstgallerier',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tyverialarm',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera udenfor overnatningsstedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Cykeludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for levering af mad til værelser/enheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Etablerede procedurer til sundhedstjek af gæsterne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kontaktløs indtjekning/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902117.jpg?k=045731999b81317ece4d9f088f3328626b09ece2cf3d808178acf903706bf3c1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902666.jpg?k=93113306f0ce9397fb220e24fdc796911d309f510d93dbe578e9143de5b78edc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902742.jpg?k=1b33fbb24497fbead83a245f919b1f91f5347eaf870b8e87a48a1900592cac07&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902694.jpg?k=4de93eb219963e7473aabc8b3ddd403c9a1595d362a5c45c31588bfea7ca89ff&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153897416.jpg?k=61d22f498935ce6b343b252c736d810a5032a2533519b01a9bb498094fa4a026&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/135740848.jpg?k=31eae886c065155bf46663914d0dc26a1e3ebe5b9ff17fd5828a3f7f08edb225&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153025125.jpg?k=0485a14d061386ab859b2ac6e45abd08aaf0b1f8f6bf273d56a26a048d5dcb3f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/148373596.jpg?k=0bb17f9bcd5705bab9e3f32d9096989843ee90931ce46215402326f0620c38eb&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153025011.jpg?k=a193e610fa999edefec933d67251880e0288a09884238eed933c46983fdf4d65&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153901213.jpg?k=c7f99931237810ae9952da85f92c09c1d009c0e3c9cb930e561e02c8674024e4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153025605.jpg?k=52a2a4612d9e08617a6589c196706d7b47c63a3dc0d76ca8d7c6fbb077f3e779&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18751833.jpg?k=b223fd5345f33833d42b6bad4d9a05a312c10a6615ba50592081a29de5ebb971&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18637310.jpg?k=539145a907f6e9ba9429268f6a43a0f73a2bca8e40c2847865e667aa67ef8581&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18752315.jpg?k=3eb91d895a396039a5fd216ab64a7c51baff2571bfb38eff3b6dc92c9af6dd26&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153022790.jpg?k=64ed65314e5cb251da12227a35d63e3811f78a25b3645d8b096c621d7172f5d5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18751842.jpg?k=ed9614fca558f9d70c548ed0a3dc43cef8c4866ec96e2b90f62e2a902cd39efe&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153897900.jpg?k=436e849100a550abcccf77e2a394fcb31492518b17b546b0bfa35ba4144635be&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18751873.jpg?k=cd400c4cdc7b84673b2819d477fc7eaab01dac0d1069f0d2c5b68b7766d92891&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18752210.jpg?k=71378314abbfbe716574606b7dbf10221422f33d3a87cc0f2b906220d370bdb8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902746.jpg?k=da803b8e377f50c127ef38d38175b5b033c2b6b4f172f53f04b5014f7224147a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902778.jpg?k=d8495a319dbcd2fc69577620d6d16c7341b6499a8870c0c9b5a03774ea420b3c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153023553.jpg?k=ba9d3a69a541ae06cf2cc5f7099c801f54dcfd819d54fa45639c5978823247c3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902706.jpg?k=eeaf4c8baf8186298a3f7406bac94fc079700bc53f3fdeee7a0088b9eac793c5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153025939.jpg?k=beca3931b80c6d15bd691180e51476a5a05974281bb7f0fd7dd16df306197946&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153025093.jpg?k=c2ea85d9c80fff28c72ea15a84e323892fcaad296a1f92b578a032535b0cf25c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/135740989.jpg?k=4bf5db5d6a33bf3203e7249e0aecc72faa1449bb98df5328c9b9d8006a707980&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18751758.jpg?k=6c7416fbe87aea81e98489e78ac8de59b7777d1f3d7e1acc2306e6aa7712f745&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18751856.jpg?k=d239db0d545ba049a8bb191a3f5bc954f0bdf02c742c3a444fb2685a4d6c255b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/66098250.jpg?k=5af3980766be6406e46e713b3201fe0c7ea7dc8ff10a73e12b7ad420de3d9237&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153022698.jpg?k=17ecc3994b14c6a01edf3aa5fa354c7e5c5a75dab9f1cfe1f7b0bee43cb6fbd1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/148147594.jpg?k=9caa3d0752bc8c05959400c7a8a50b297c76579d685d85c640480f92f69680c4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18752309.jpg?k=05a63c23031775f2a5c361d1ce462ecb4a1f37debd077a564bbc21245e78e31b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18752340.jpg?k=ea1d82c58846d60526647b50d0af29be88906a7f786370dc7f637f159a1cc237&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/66098374.jpg?k=3babb41e7c9dff6a18ec12d30bb8c56854aefcd93e7ef91d8ae4747f69f95b3d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18749936.jpg?k=acb4e83e2856ce2bd3c36ffa5a9ffbfe22c68ae6e1315a55e1ba24469e208190&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18752978.jpg?k=316e2d23f9b0c4965f87e8af611e4cc87e1612938963fff74c6fce4dc66ce903&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18751867.jpg?k=acc9cb5b38b3eae7128d480b3480e93c5657a5ec027524dee82b3f3244cbc097&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18750086.jpg?k=f8d09c084a2e789cc83d13728ca27f627d3e2f35e85713fdc1669b9cdc5eebb9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18751853.jpg?k=085ac8ef2c6c02bd34140967d3380e77dedbdc84a31e7e03b37c500927079725&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18755607.jpg?k=df14ef3e2723de034035f398ab33c580c4f8d8c579fdd65c6213b2b3f1c12dd1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/60945838.jpg?k=5f052ff858d997517594c33b266bae0329b9fd1b49618f06041120da344b07b4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18755438.jpg?k=dd519f4f3b873ecf606fbaff0bc7105a7375ef726379e97d39fcd118df6a152d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/18756040.jpg?k=2f0bed069102623d9170071a3d64efac3c9306f83b62569a3e2fafc62de28db7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/66098065.jpg?k=848d3624c916e89a70e41e54563ab795b96c8ba1854298899aad0e026b9e8a7a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/66098211.jpg?k=92ac25aee4501aff5763cc5d3996b174b68e4fb2ab067621f14fdc538c6c626b&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 1,
      rooms: [
        {
          max_n_people: 1,
          name: 'None',
          facilities: [],
          price: 134.128995,
          photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902117.jpg?k=045731999b81317ece4d9f088f3328626b09ece2cf3d808178acf903706bf3c1&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902666.jpg?k=93113306f0ce9397fb220e24fdc796911d309f510d93dbe578e9143de5b78edc&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902742.jpg?k=1b33fbb24497fbead83a245f919b1f91f5347eaf870b8e87a48a1900592cac07&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/153902694.jpg?k=4de93eb219963e7473aabc8b3ddd403c9a1595d362a5c45c31588bfea7ca89ff&o=&hp=1',
          ],
          breakfast_included: false,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'WEBBEDS',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0,
    price_without_discount: 134.128995,
    price_increased: true,
    price_decreased: false,
    price_diff: 0,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Triple M Hotel',
    street_address: 'Baross utca 108',
    city: 'Budapest',
    zip_code: '1082',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/casa-sol.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 136.88,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 136.8767,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 136.8767,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 19.38933875263728,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328669.jpg?k=55bdaab72bf131e23d3400e209eedace5f707f992838fb92ee69993630095500&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 3351,
          name: 'All (3351)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Wonderful: 9+ (995)',
          count: 995,
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 1333,
          name: 'Good: 7-9 (1333)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Fair: 5-7 (561)',
          count: 561,
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 287,
          name: 'Poor: 3-5 (287)',
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 175,
          name: 'Very Poor: 1-3 (175)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          isSelected: false,
          translation: {
            name: 'Room',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_room',
          },
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Breakfast',
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          name: 'Location',
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          isSelected: false,
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Bed',
          isSelected: false,
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          translation: {
            name: 'Bathroom',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bathroom',
          },
          isSelected: false,
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          name: 'Clean',
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Shower',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_shower',
          },
          name: 'Shower',
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bus',
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          isSelected: false,
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Parking',
            id: 'topic_parking',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Parking',
          isSelected: false,
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Toilet',
            id: 'topic_toilet',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Toilet',
          isSelected: false,
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Towel',
            id: 'topic_towel',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Towel',
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Hot',
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Noise',
          translation: {
            name: 'Noise',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_noise',
          },
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Window',
          translation: {
            name: 'Window',
            id: 'topic_window',
            __typename: 'ReviewTopicTranslation',
          },
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          name: 'Wifi',
          translation: {
            name: 'WiFi',
            id: 'topic_wifi',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 247,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Loud',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_loud',
          },
          name: 'Loud',
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          name: 'Coffee',
          translation: {
            name: 'Coffee',
            id: 'topic_coffee',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Car',
          translation: {
            name: 'Car',
            id: 'topic_car',
            __typename: 'ReviewTopicTranslation',
          },
          id: 288,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Lift',
          translation: {
            name: 'Lift',
            id: 'topic_lift',
            __typename: 'ReviewTopicTranslation',
          },
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Cold',
          translation: {
            name: 'Cold',
            id: 'topic_cold',
            __typename: 'ReviewTopicTranslation',
          },
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          name: 'Checkin',
          translation: {
            name: 'Check-in',
            id: 'topic_checkin',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Kitchen',
            id: 'topic_kitchen',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Kitchen',
          isSelected: false,
          id: 261,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Balcony',
          translation: {
            name: 'Balcony',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_balcony',
          },
          id: 272,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          translation: 'Staff',
          name: 'hotel_staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 8.46275615692139,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            ufiScoreHigherBound: 9.61482429504395,
            __typename: 'UfiScoreAverage',
          },
          value: 7.07552862167358,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_clean',
          translation: 'Cleanliness',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            ufiScoreHigherBound: 9.74524974822998,
            __typename: 'UfiScoreAverage',
          },
          value: 7.25444412231445,
          __typename: 'RatingScore',
        },
        {
          translation: 'Comfort',
          name: 'hotel_comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.63462543487549,
          },
          value: 7.28700923919678,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.25069999694824,
          },
          value: 7.66087579727173,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_location',
          translation: 'Location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            ufiScoreHigherBound: 9.3919506072998,
            __typename: 'UfiScoreAverage',
          },
          value: 7.30157566070557,
          __typename: 'RatingScore',
        },
        {
          translation: 'Free Wifi',
          name: 'hotel_free_wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 7.51798582077026,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      languageFilter: [
        {
          name: 'All (3351)',
          count: 3351,
          countryFlag: null,
          value: '',
          __typename: 'LanguageFilter',
        },
        {
          count: 14,
          name: 'Danish (14)',
          value: 'da',
          countryFlag: 'dk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (741)',
          count: 741,
          value: 'en',
          countryFlag: 'gb',
          __typename: 'LanguageFilter',
        },
        {
          count: 269,
          name: 'Polish (269)',
          countryFlag: 'pl',
          value: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (216)',
          count: 216,
          value: 'de',
          countryFlag: 'de',
          __typename: 'LanguageFilter',
        },
        {
          count: 33,
          name: 'Swedish (33)',
          countryFlag: 'se',
          value: 'sv',
          __typename: 'LanguageFilter',
        },
        {
          count: 10,
          name: 'Lithuanian (10)',
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          count: 83,
          name: 'Spanish (83)',
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (177)',
          count: 177,
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          count: 261,
          name: 'Russian (261)',
          countryFlag: 'ru',
          value: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Arabic (4)',
          value: 'ar',
          countryFlag: 'sa',
          __typename: 'LanguageFilter',
        },
        {
          count: 32,
          name: 'Turkish (32)',
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Italian (134)',
          count: 134,
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          count: 137,
          name: 'Ukrainian (137)',
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (55)',
          count: 55,
          countryFlag: 'fr',
          value: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 9,
          name: 'Vietnamese (9)',
          countryFlag: 'vn',
          value: 'vi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (52)',
          count: 52,
          countryFlag: 'nl',
          value: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 427,
          name: 'Hungarian (427)',
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          count: 8,
          name: 'Chinese (8)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (6)',
          count: 6,
          value: 'ko',
          countryFlag: 'kr',
          __typename: 'LanguageFilter',
        },
        {
          count: 5,
          name: 'Norwegian (5)',
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Bulgarian (16)',
          count: 16,
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          count: 7,
          name: 'Finnish (7)',
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Croatian (76)',
          count: 76,
          value: 'hr',
          countryFlag: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Estonian (1)',
          value: 'et',
          countryFlag: 'ee',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (56)',
          count: 56,
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (8)',
          count: 8,
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Catalan (3)',
          count: 3,
          value: 'ca',
          countryFlag: 'catalonia',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Portuguese (42)',
          count: 42,
          value: 'pt',
          countryFlag: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 144,
          name: 'Slovak (144)',
          value: 'sk',
          countryFlag: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          count: 27,
          name: 'Slovenian (27)',
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          count: 73,
          name: 'Serbian (73)',
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          count: 210,
          name: 'Czech (210)',
          value: 'cs',
          countryFlag: 'cz',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hebrew (14)',
          count: 14,
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
      ],
      customerTypeFilter: [
        {
          count: 3351,
          name: 'All (3351)',
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (1323)',
          count: 1323,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Couples (934)',
          count: 934,
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (596)',
          count: 596,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Solo travelers (498)',
          count: 498,
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Business travelers (263)',
          count: 263,
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      reviewsCount: 3351,
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: [
            {
              urls: [
                {
                  size: 'max1280x900',
                  url: 'https://q-xx.bstatic.com/xdata/images/xphoto/max1280x900/296494861.jpg?k=4e7ac60cfdec526e1a0301ddb27c6998fe75e6f5591df9cdc4eb4b9b6207038c&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square80',
                  url: 'https://q-xx.bstatic.com/xdata/images/xphoto/square80/296494861.jpg?k=4e7ac60cfdec526e1a0301ddb27c6998fe75e6f5591df9cdc4eb4b9b6207038c&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square160',
                  url: 'https://q-xx.bstatic.com/xdata/images/xphoto/square144/296494861.jpg?k=4e7ac60cfdec526e1a0301ddb27c6998fe75e6f5591df9cdc4eb4b9b6207038c&o=',
                  __typename: 'ReviewPhotoUrl',
                },
              ],
              id: 296494861,
              kind: 'PROPERTY',
              __typename: 'ReviewPhoto',
            },
          ],
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2023-12-11',
            __typename: 'BookingDetails',
            checkinDate: '2023-12-08',
            numNights: 3,
            roomId: 7527020,
            roomType: {
              name: 'Small Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7527020',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8bd32bd29fa05f17',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
            countryCode: 'gr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Greece',
            guestTypeTranslation: 'Family',
            username: 'Angela',
          },
          reviewedDate: 1702328802,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Didnt like that there weren´t enough electric plugs i.e  to charge phones and in the wc no hooks for hanging our towels.',
            positiveText:
              'The room was larger than it looked in the photos, very comfotable beds, great heating and fantastic breakfast! The receptionists were polite and always welcoming with a smile.Bus and trolley stop just 1min walk away to take you to the main attractions.',
            lang: 'xu',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-09-01',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-31',
            numNights: 1,
            roomId: 7527020,
            roomType: {
              name: 'Small Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7527020',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '11ee2ffde4e7462e',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
            countryCode: 'sa',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Saudi Arabia',
            guestTypeTranslation: 'Solo traveler',
            username: 'Al',
          },
          reviewedDate: 1725281172,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText: 'Extended stay till 4 September',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-30',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-27',
            numNights: 3,
            roomId: 7527020,
            roomType: {
              name: 'Small Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7527020',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '1613711c1733f2be',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-nOrfM8-IeS8/AAAAAAAAAAI/AAAAAAAAANA/8yptmeRsn-8/photo.jpg?sz=50',
            countryCode: 'hu',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Hungary',
            guestTypeTranslation: 'Solo traveler',
            username: 'Muhammad',
          },
          isApproved: true,
          reviewedDate: 1725047059,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'It was perfect comparing the price so highly recommended.',
            lang: 'en',
            positiveText: 'Great Location. Got free upgrade.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-11',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-08',
            numNights: 3,
            roomId: 7527020,
            roomType: {
              name: 'Small Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7527020',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ed15abedca928f81',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AItbvml0pl7e8tLpdGHAiE8IyLoJDZYxknk_9tNjv9FQ=s96-c',
            countryCode: 'rs',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Serbia',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Dušan',
          },
          isApproved: true,
          reviewedDate: 1723564280,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Rugs and the floors in general could have been a little cleaner.',
            positiveText:
              'Close to the city center by bus.\r\n\r\nGreat breakfast!\r\n\r\nLarge rooms and comfy beds.\r\n\r\nFast WiFi.',
            lang: 'en',
            title: 'I will be staying here again when I return to Budapest.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-02',
            numNights: 6,
            roomType: {
              name: 'Small Double or Twin Room',
              id: '7527020',
              __typename: 'RoomTranslation',
            },
            roomId: 7527020,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c6fa85f225fc1c56',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'pl',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Poland',
            guestTypeTranslation: 'Solo traveler',
            username: 'Łukasz',
          },
          isApproved: true,
          reviewedDate: 1723233744,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              "Very friendly and helpful staff at the reception. Convenient location - only 15-20 min on foot to Kálvin tér (M3 and M4 and airport shuttle bus 100E). If you don't like walking, there are also bus stops near the hotel. Some buildings in the area are old and haven't been renovated yet, however the area is safe, also at night.\r\nThe room was large and equipped with everything you need - a fridge, an electric kettle, a fan, etc. Towels were changed on a daily basis, the same with dustbins - they were emptied every day. \r\nGood value for money.",
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-07',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-03',
            numNights: 4,
            roomId: 7527011,
            roomType: {
              name: 'Triple Room',
              id: '7527011',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '6b443ddc0b4bb6f3',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'nl',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Netherlands',
            guestTypeTranslation: 'Family',
            username: 'Maxim',
          },
          reviewedDate: 1723057350,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'The room was very good and the personnel was also very kind. Good service for a good price!',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-10',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-03',
            numNights: 7,
            roomId: 7527026,
            roomType: {
              name: 'Deluxe Double Room with Extra Bed',
              __typename: 'RoomTranslation',
              id: '7527026',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a689fd27a24edc39',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/100747567709451777976/picture?type=square&height=64&width=64',
            countryCode: 'cy',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Cyprus',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Marios',
          },
          reviewedDate: 1722944383,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: 'The smoking area could me cleaner and better.',
            textTrivialFlag: 0,
            title: 'Value for money and clean.',
            positiveText:
              'Breakfast was very good. Not a big selection but it was always worm and tasty.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-05',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-03',
            numNights: 2,
            roomId: 7527020,
            roomType: {
              name: 'Small Double or Twin Room',
              id: '7527020',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'aefc9c8edc2a5aa5',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GgJse8pdkeBU0VZ058MVCET1rfmew-FKD5-cJNCLQ=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Yvonne',
          },
          isApproved: true,
          reviewedDate: 1722892255,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              'The room they gave me was very spacious and the bed was very comfortable!',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-01',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-28',
            numNights: 4,
            roomType: {
              name: 'Apartment',
              __typename: 'RoomTranslation',
              id: '7527025',
            },
            roomId: 7527025,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd52365ca86df7c44',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
            countryCode: 'cz',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Czech Republic',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Kateřina',
          },
          reviewedDate: 1722539467,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'The water was too chlorinated.',
            positiveText:
              'Beds were really comfortable and there was also big fan in the bedroom which was pleasant in hot summer nights. Stuff was very nice and accommodating.',
            lang: 'en',
            title: 'I would recommend it.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-25',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-23',
            numNights: 2,
            roomType: {
              name: 'Apartment',
              id: '7527025',
              __typename: 'RoomTranslation',
            },
            roomId: 7527025,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '0b63b3a3e480aa3f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'nl',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Netherlands',
            guestTypeTranslation: 'Family',
            username: 'Muralibabu',
          },
          isApproved: true,
          reviewedDate: 1722412724,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText: 'Good staffs',
            lang: 'en',
            title: 'pleasant stay',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-10',
            numNights: 4,
            roomType: {
              name: 'Small Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7527020',
            },
            roomId: 7527020,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c28db6e94ba0e575',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AItbvmluVcS50MGSmezG4-4Rtc2t7QVDV7e3m_t3t4M4=s96-c',
            countryCode: 'md',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Moldova',
            guestTypeTranslation: 'Solo traveler',
            username: 'Nicolae',
          },
          reviewedDate: 1720990288,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              "I recently had the pleasure of staying at the TripleM Hotel in Budapest, and it was an excellent experience. The hotel boasts a fantastic location, making it easy to explore the city's many attractions. Whether you're interested in historical sites, vibrant nightlife, or cultural experiences, everything is conveniently within reach.\n\nThe staff at TripleM Hotel were exceptionally friendly and accommodating. From the moment we arrived, we were greeted with warm smiles and helpful service. The front desk staff were always ready to assist with any questions or needs we had, making our stay even more enjoyable.\n\nOverall, TripleM Hotel is a great choice for anyone visiting Budapest. Its prime location and attentive staff make it a standout option for travelers. I highly recommend it for a comfortable and pleasant stay in this beautiful city.",
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-08',
            numNights: 4,
            roomType: {
              name: 'Twin Room',
              id: '7527027',
              __typename: 'RoomTranslation',
            },
            roomId: 7527027,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '69ebd3287a790539',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-t.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Solo traveler',
            username: 'Taylor',
          },
          isApproved: true,
          reviewedDate: 1720824192,
          helpfulVotesCount: 1,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText: 'Great facilities',
            title: 'Great',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-05-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-20',
            numNights: 3,
            roomId: 7527011,
            roomType: {
              name: 'Triple Room',
              __typename: 'RoomTranslation',
              id: '7527011',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'e1f226983f328f6f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-h.png',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Turkey',
            guestTypeTranslation: 'Group',
            username: 'Hale',
          },
          isApproved: true,
          reviewedDate: 1719847204,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'There was kettle and cups in the room and beside of this it would be lovely to find tea or coffee for the first entrance.',
            textTrivialFlag: 0,
            title: 'We are satisfied about our stay in this hotel',
            positiveText:
              "Breakfast was great with little croissants, coffee and fried mixed vegetables. \r\nOur place was huge and it was including a living room with kitchen.\r\nBathroom was so clean.\r\nThe hotel is very close to the bus station\r\n20 minutes to New York Cafe by walking\r\nIt's easy to go to the Airport with public transportation.",
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-20',
            numNights: 3,
            roomType: {
              name: 'Small Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7527020',
            },
            roomId: 7527020,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '345a22098df657a2',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AGNmyxZZXi1tnshmjZlaxkCb1Ju9m0DljyrLSPiJOnyE=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Family',
            username: 'Jake',
          },
          isApproved: true,
          reviewedDate: 1719783504,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'Great facilities very clean and comfy rooms\nGood location to transport facilities such as bus and tram.',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-06-27',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-26',
            numNights: 1,
            roomType: {
              name: 'Small Double or Twin Room',
              id: '7527020',
              __typename: 'RoomTranslation',
            },
            roomId: 7527020,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '6cb8ec33d0b045f2',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-h.png',
            countryCode: 'cn',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'China',
            guestTypeTranslation: 'Solo traveler',
            username: 'He',
          },
          reviewedDate: 1719595674,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText: 'High cost effetive hotel, staff are nice',
            lang: 'en',
            title: 'Cost effectice',
            __typename: 'TextDetails',
          },
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      timeOfYearFilter: [
        {
          count: 3351,
          name: 'All (3351)',
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Jun–Aug',
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 7,
      nr_reviews: 3351,
    },
    review_score: 7.1,
    review_score_word: 'Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18040720,
    number_of_rooms: 1,
    stars: 3,
    address: 'Baross utca 108',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 1,
    location: {
      longitude: 19.0820047259331,
      latitude: 47.4890753651019,
    },
    zip: '1082',
    hotel_description:
      'Located 800 metres from a shopping centre in Budapest, the Triple M Hotel offers a non-stop bar, and free WiFi access. The nearest metro station is at II. János Pál Pápa Tér, within 850 metres from the property. Each unit comes with a TV, a desk and a refrigerator. The private bathroom is fitted with a hairdryer. Breakfast is available at Triple M Hotel. There are several grocery stores and a restaurant in a radius of 300 metres. The area of Ráday Utca with numerous restaurants and bars is at the distance of 1.6 km. The Great Market Hall is 2 km from the premises. Liszt Ferenc International Airport is 17.4 km away.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjvask',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Strygning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lydisolerede værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Allergivenligt værelse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Concierge',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat ind-/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fælles opholdsrum/tv-område',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Minimarked på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Børnevenlig buffet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkeringshus',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vin/champagne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport fra lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport til lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Café på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Havemøbler',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Byvandringer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Cykelture',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Temamiddage',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tur eller undervisning om den lokale kultur',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Nøgleadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tyverialarm',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera udenfor overnatningsstedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Afskærmning mellem personale og gæster på relevante områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæsterne har adgang til mundbind',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328669.jpg?k=55bdaab72bf131e23d3400e209eedace5f707f992838fb92ee69993630095500&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328506.jpg?k=01cab1eb71f738d202706a5a77adf5d3cc5c68799bc74a011ea022eea8b8bcd5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173115138.jpg?k=a0e3e2296da964d852c566e4954c8e00c0f2500e127752fff719ea99ab03e58d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450735.jpg?k=532ae65d0ff3ff73c0e6d966618bd62ea5112e1e625ff0897ff5370e5ccb8a3c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/403944047.jpg?k=c8b8b1943f75cccf3f635da65efdbef2f5594fe8eb43b72f1237131353cbe131&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346269559.jpg?k=dd55370c2ddd1bd568206b5f7be45ab7773787cbfb35ca19c753c5152f29a6b1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346267363.jpg?k=9513ee381d678ea8d2c9a068fc14ca4c06928d317cc24f98737881bfde12f76d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346267364.jpg?k=9c7562819ee2541c21fd196be3db6d7f8ca631344ea602b290a1cc6b80cdfe39&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346267203.jpg?k=b284ab7efb4200b5f65aca669857ad8f9292aec8beacbbc5885a1dd993b11392&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346267201.jpg?k=b63e40b6802697cd09df583e4cd894f2ca70dbbe6dd2def0d75cbf408a5d4de4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346267202.jpg?k=3f55aa8065ce957e79c5bb2dbc37301a9c8eae8aab2cef80c96759683534c7ff&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346267205.jpg?k=ad5e1edd5ef3238198fbe2322aecd62ab506c4197e5b8f2514ccccf499c74aaa&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328512.jpg?k=d1bdb9955b8a741f9dc85d67b224c46ddc6a665eedca4d26bb3cd22c70dc1e29&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328485.jpg?k=322dd4d48bf13bc357a3230f864cc4344c564c2308cf812384d1bbc543798022&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328481.jpg?k=2322e8dea28ff86a9dc7915e6e68a622a7c836b25a20fbb8e8b51bf44f4458bc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328489.jpg?k=60bc7105459fda3a6bf36921b2b7e4309987b0f9a7c46211ca0b585d4ba12b1c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161451374.jpg?k=61b8a281b18160286f5260b717abf1182d49b73c3034809e967ca1840e43b2db&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328459.jpg?k=40a9faab92ed620238edb46dacdba3718b87fed5ba7a2ab9e75222dba20699d8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450463.jpg?k=0a543e8e399924177b423da1cd8f6901d6e1c106d56296a9813d9b4f9c977cc0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450449.jpg?k=3aa65885b56fa2006aed6be816342d8ad910f882bdb23d351594b24fce46694d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328474.jpg?k=713fad77246fbcb6f5d53b44786b9b75e3e4456b9ab6ec3e38b4e43ff265a9c2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328476.jpg?k=8dc738021f82f0e7e080d802fe68910889b6706108585b80236f0571cadafd49&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328491.jpg?k=f52f44b08931f2a34429eef4bfa3274dce4f748d4e741285cc7e033b11dcb849&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328494.jpg?k=c0e4b20a60a1942ba8783c33782830e6042cc81c98b1063d40f7ebcbd49889b6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/189328499.jpg?k=5da406b4dc371d397e6ce6f67c63e199625e8bb447e8d6ebe04b3aa9844d2190&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450600.jpg?k=b4c800c8ee172ed231d8d28423401eda942934b462decf45e228a03ba36f9cb3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450613.jpg?k=6c35810c84a3db27488228d5ad0ab9a719faaa662905234e1338fb15422112f1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173118764.jpg?k=f7f739a4f5395548940345d4359809e1eda0e14d09049300c9794fca5524e1a4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450484.jpg?k=3075021aa764c98e40130bb3d5d506a07aafc28f8181b0c817db945188fdc3f3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450724.jpg?k=df1274c554a7461be6d9a7a3ea3e74147d2c80344d7eb7835f66a97c3023b7fb&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161451375.jpg?k=afe9e6843a34b02a4ac898f84a5cb3fbb52fb80be669d6a58402e38b9949871b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450729.jpg?k=c165a75971b5c56cfd56cddd0b4a116721f8693822010d66d2581057ba353b92&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161451378.jpg?k=1775ec678e5a0bcc1752cae6e80b19dd74b60d5440c5523344b6056601976571&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161450733.jpg?k=e91f3855d8d077a88ad617f95c383607ddb3b8599b8c835d98ef770f19087873&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161451484.jpg?k=5ece81dfeaffd8fb9d704a0cf08fb974a7c5a4c3f5145c011099a723c811bd5f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173115130.jpg?k=0e01de6b08c0ab4080c46dddad3e47cc43130156535fdcd87009673078349217&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161451471.jpg?k=5d1bb2a8d75fa24738b5901c0de3e3eb3f133a9dd86dee4930269035d4cfaf4f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161451481.jpg?k=b7ca1c643ba1149371b24f13a0dd8dc6f2cb3204d81f7a97a4ebaaa4cf9cb8f2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161451474.jpg?k=439dbf5682efa9c1a158f2b4cf171f15501324aad3cd1644915e79717d40db40&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173115143.jpg?k=972adfe4b9ec75753e75055a741c1172507e8b56daa41cc2743e2047b98bc9af&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173115121.jpg?k=b7064fdff0de1c5184c169c413387f84a98815406f3f744f051c5a6d89fe04c4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173115135.jpg?k=24a0c84f87ffea87a781b7aaa1510c7b014e90d0cb277ac0c40cf65cb172d627&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173115125.jpg?k=b6dedbb9764d31dff0a0dc8b2b38191cdaec41929989878e281c946d085ace2a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/173115119.jpg?k=58d1deb0a66f43155f656d99772553cb84d6737cfeda30122bb1dc9e0851d875&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/161449972.jpg?k=278eccccf9d5f56d08c746d868da6d783b986d5680f3a7e9d88e9ee1ddc1fbe8&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 1,
      rooms: [
        {
          max_n_people: 1,
          name: 'Standard Room',
          facilities: [],
          price: 136.8767,
          photo: [
            'https://q-xx.bstatic.com/xdata/w/hotel/max500_watermarked_standard_bluecom/Ul1BBopCc2ozhfNRVvw6n7tR8XPMJzH0-qIeu0XWgZfKGyFM0HFwRs09z-Bzr6pAqxQYKeJh43kXJ9Wu0IGxRyJd9dtW-PM7dQ-S-wV3amWXJMKfzaLlGwb_zvcPz4k.jpg',
            'https://q-xx.bstatic.com/xdata/w/hotel/max500_watermarked_standard_bluecom/Ul1BBopCc2ozhWas8F-1RLBDcooQOmw1Q54WzDn5yBX6Ud7o2s8Su8YXMk3DOyqaOXUcFZ0Vz8DMWaZ6JJtaHZ7PjwX6eZn0_orL36tsyn2dQhW6GCBZoCunIDory6A.jpg',
            'https://q-xx.bstatic.com/xdata/w/hotel/max500_watermarked_standard_bluecom/Ul1BBopCc2ozhWNOQVnxIWjxFxzxsuEX9V0bbsSZKMbDxQYfiGKQvQebPjBPBLZn37tj2ZGfgcPv1bRp0ROB4XX1apYBUMssqCnDe-pX9v9j6HLMw6FX6p6E-2Vzf2M.jpg',
            'https://q-xx.bstatic.com/xdata/w/hotel/max500_watermarked_standard_bluecom/Ul1Fsp563N_OGPBbYmDIYZdanhuTaOkT52K2w_oGNt6LQ0yswb-rDXLMizpy_TZfLDUF2MWeKZOEEULldWfnRVnvY5l41LFX-_B0qcBeKSos99xuPvXw7Io-PDEV5hU.jpg',
          ],
          breakfast_included: true,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'HOTELSTON',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0,
    price_without_discount: 136.8767,
    price_increased: true,
    price_decreased: false,
    price_diff: 2.75,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Star City Hotel',
    street_address: '14 Istvan Street',
    city: 'Budapest',
    zip_code: '1078',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/star.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 149.21,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 149.210565,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 149.210565,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 18.39728628930697,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468952278.jpg?k=0b7ca770246c516210f3ce34ef78cb940fbbd1d59dbf5c7bafcd7010b8b15a4f&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 2951,
          name: 'All (2951)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 1183,
          name: 'Wonderful: 9+ (1183)',
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Good: 7-9 (1319)',
          count: 1319,
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Fair: 5-7 (317)',
          count: 317,
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (85)',
          count: 85,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 47,
          name: 'Very Poor: 1-3 (47)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          name: 'Breakfast',
          isSelected: false,
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Room',
          isSelected: false,
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Location',
          isSelected: false,
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          name: 'Clean',
          isSelected: false,
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Bed',
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          isSelected: false,
          name: 'Bus',
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          isSelected: false,
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          name: 'Quiet',
          isSelected: false,
          translation: {
            name: 'Quiet',
            id: 'topic_quiet',
            __typename: 'ReviewTopicTranslation',
          },
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Loud',
            id: 'topic_loud',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Loud',
          isSelected: false,
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Shower',
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Noise',
          translation: {
            name: 'Noise',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_noise',
          },
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          isSelected: false,
          name: 'Toilet',
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          name: 'Hot',
          isSelected: false,
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Coffee',
            id: 'topic_coffee',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Coffee',
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Dinner',
          translation: {
            name: 'Dinner',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_dinner',
          },
          id: 262,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Airport',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_airport',
          },
          name: 'Airport',
          isSelected: false,
          id: 253,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Heat',
          translation: {
            name: 'Heat',
            id: 'topic_heat',
            __typename: 'ReviewTopicTranslation',
          },
          id: 291,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Luggage',
            id: 'topic_luggage',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Luggage',
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          name: 'Window',
          isSelected: false,
          translation: {
            name: 'Window',
            id: 'topic_window',
            __typename: 'ReviewTopicTranslation',
          },
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Suite',
          translation: {
            name: 'Suite',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_suite',
          },
          id: 278,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Cold',
          translation: {
            name: 'Cold',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_cold',
          },
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          name: 'Towel',
          isSelected: false,
          translation: {
            name: 'Towel',
            id: 'topic_towel',
            __typename: 'ReviewTopicTranslation',
          },
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Taxi',
          translation: {
            name: 'Taxi',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_taxi',
          },
          id: 287,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          name: 'hotel_staff',
          translation: 'Staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.80970001220703,
          },
          value: 8.70430469512939,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 7.77891874313354,
          __typename: 'RatingScore',
        },
        {
          translation: 'Cleanliness',
          name: 'hotel_clean',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            ufiScoreHigherBound: 9.74524974822998,
            __typename: 'UfiScoreAverage',
          },
          value: 8.29654312133789,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 8.10572338104248,
          __typename: 'RatingScore',
        },
        {
          translation: 'Value for money',
          name: 'hotel_value',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 8.30882358551025,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            ufiScoreHigherBound: 9.3919506072998,
            __typename: 'UfiScoreAverage',
          },
          value: 8.19759464263916,
          __typename: 'RatingScore',
        },
        {
          translation: 'Free Wifi',
          name: 'hotel_free_wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            ufiScoreHigherBound: 8.67230033874512,
            __typename: 'UfiScoreAverage',
          },
          value: 8.90186882019043,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      customerTypeFilter: [
        {
          name: 'All (2951)',
          count: 2951,
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (1283)',
          count: 1283,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 654,
          name: 'Couples (654)',
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (623)',
          count: 623,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 391,
          name: 'Solo travelers (391)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 190,
          name: 'Business travelers (190)',
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      languageFilter: [
        {
          count: 2951,
          name: 'All (2951)',
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          name: 'Danish (18)',
          count: 18,
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (653)',
          count: 653,
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          count: 225,
          name: 'German (225)',
          countryFlag: 'de',
          value: 'de',
          __typename: 'LanguageFilter',
        },
        {
          count: 139,
          name: 'Polish (139)',
          value: 'pl',
          countryFlag: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          count: 171,
          name: 'Spanish (171)',
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 14,
          name: 'Chinese (14)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          count: 168,
          name: 'Russian (168)',
          value: 'ru',
          countryFlag: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Swedish (22)',
          count: 22,
          countryFlag: 'se',
          value: 'sv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (78)',
          count: 78,
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 295,
          name: 'Italian (295)',
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (119)',
          count: 119,
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (41)',
          count: 41,
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 5,
          name: 'Lithuanian (5)',
          countryFlag: 'lt',
          value: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Norwegian (10)',
          count: 10,
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (8)',
          count: 8,
          countryFlag: 'kr',
          value: 'ko',
          __typename: 'LanguageFilter',
        },
        {
          count: 347,
          name: 'Hungarian (347)',
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          count: 67,
          name: 'Ukrainian (67)',
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Arabic (6)',
          value: 'ar',
          countryFlag: 'sa',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (40)',
          count: 40,
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Japanese (8)',
          count: 8,
          countryFlag: 'jp',
          value: 'ja',
          __typename: 'LanguageFilter',
        },
        {
          count: 132,
          name: 'Czech (132)',
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Portuguese (62)',
          count: 62,
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 15,
          name: 'Bulgarian (15)',
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (67)',
          count: 67,
          value: 'el',
          countryFlag: 'gr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Croatian (26)',
          count: 26,
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          count: 35,
          name: 'Serbian (35)',
          countryFlag: 'rs',
          value: 'sr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (7)',
          count: 7,
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Finnish (11)',
          count: 11,
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Icelandic (2)',
          count: 2,
          value: 'is',
          countryFlag: 'is',
          __typename: 'LanguageFilter',
        },
        {
          count: 107,
          name: 'Slovak (107)',
          value: 'sk',
          countryFlag: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Estonian (3)',
          count: 3,
          value: 'et',
          countryFlag: 'ee',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Catalan (5)',
          count: 5,
          countryFlag: 'catalonia',
          value: 'ca',
          __typename: 'LanguageFilter',
        },
        {
          count: 19,
          name: 'Slovenian (19)',
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hebrew (14)',
          count: 14,
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewsCount: 2949,
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: {
            reply:
              "Dear Valued Guest!\r\n\r\nWe are glad to read your perfect review about the amazing experiences You gained during your stay.\r\n\r\nWe are thrilled to hear that You had a fabulous time in Budapest and that our hotel contributed to your enjoyment.\r\n\r\nEnsuring a clean and comfortable environment for our Guests is a priority, and we are pleased to know that You appreciated the extra towel change. \r\n\r\nWe strive to make every Guest's stay exceptional, and we look forward to the opportunity to welcome You back to Star City Hotel*** for another wonderful experience.\r\n\r\nWarm regards,\r\nStar City Hotel*** Staff",
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2023-12-23',
            __typename: 'BookingDetails',
            checkinDate: '2023-12-20',
            numNights: 3,
            roomType: {
              name: 'Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7521702',
            },
            roomId: 7521702,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '6475b21742cc7484',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJyba6f9Tqb2Fg9fJuvAMbTxJdrtawrIRlKTp2qD=s96-c',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovakia',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Dominik',
          },
          reviewedDate: 1703963280,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            title: null,
            positiveText:
              'Everything good, they gave us extra towel change upon request, breakfast was very decent. It could help if they would flag vegetarian/vegan/pork options',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for taking the time to share your excellent review at Star City Hotel***!\n\nWe are delighted to know our breakfast options suited your tastes, as it is our priority to provide fresh and abundant products on a daily basis. Moreover, thank You for appreciating our attentive Staff service, we are committed to ensuring our Guests have an enjoyable and impeccable stay.\n\nIt would be a pleasure to host You again in the future. Thank You for choosing our hotel.\n\nWith warm regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-15',
            numNights: 3,
            roomType: {
              name: 'Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7521702',
            },
            roomId: 7521702,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5e100085fb553836',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-f.png',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Italy',
            guestTypeTranslation: 'Family',
            username: 'Federico',
          },
          reviewedDate: 1724009073,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Non..',
            lang: 'xu',
            positiveText:
              'The breakfast,the room and staffs are all excelent..',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nWe appreciate your valuable feedback of your stay at Star City Hotel***!\n\nThank You for your recognition that You were greeted by a cool room with excellent air conditioning and high ceilings. We consider this aspect is indispensable especially in the summer heat. In addition, in front of our facility, there is also a great trolley bus stop which we glad You found beneficial. Your constructive feedback on the breakfast options means a lot to us, all your comments are essential for our future improvements.\n\nOur Team aims to make your next stay even more pleasant, and we look forward to welcoming You back to our hotel. Thank You for choosing us!\n\nWith warm regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-15',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-13',
            numNights: 2,
            roomId: 7521712,
            roomType: {
              name: 'Family Room',
              id: '7521712',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '223409547beb3d08',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AAcHTtfZE6kTFkChXnTf5wfPFd7FfXzl83V57tEQ7v3vgDF8=s96-c',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Turkey',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Yeşim',
          },
          reviewedDate: 1723784603,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'We had a pleasant stay with no real complaints. The breakfast could use some improvement, but for the price, it’s reasonable. I’d recommend staying here.',
            textTrivialFlag: 0,
            lang: 'en',
            title: null,
            positiveText:
              'Our room had high ceilings and excellent AC—truly a blessing to walk into a cool room in this summer heat. There’s a bus stop right in front of the hotel and it’s also near the metro line.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nWe appreciate your valuable feedback of your stay at Star City Hotel***!\n\nThank You for your recognition that You were greeted by a cool room with excellent air conditioning and high ceilings. We consider this aspect is indispensable especially in the summer heat. In addition, in front of our facility, there is also a great trolley bus stop which we glad You found beneficial. Your constructive feedback on the breakfast options means a lot to us, all your comments are essential for our future improvements.\n\nOur Team aims to make your next stay even more pleasant, and we look forward to welcoming You back to our hotel. Thank You for choosing us!\n\nWith warm regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-15',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-13',
            numNights: 2,
            roomId: 7521702,
            roomType: {
              name: 'Double or Twin Room',
              id: '7521702',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '128a5c0318e05d13',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AAcHTtfZE6kTFkChXnTf5wfPFd7FfXzl83V57tEQ7v3vgDF8=s96-c',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Turkey',
            guestTypeTranslation: 'Family',
            username: 'Yeşim',
          },
          reviewedDate: 1723784341,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'We had a pleasant stay with no real complaints. The breakfast could use some improvement, but for the price, it’s reasonable. I’d recommend staying here.',
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'Our room had high ceilings and excellent AC—truly a blessing to walk into a cool room in this summer heat. There’s a bus stop right in front of the hotel and it’s also near the metro line.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for your exceptional feedback on your recent stay at Star City Hotel***!\n\nWe are glad our friendly Staff met your expectations, it is our priority to make our Guests feel welcomed and taken care of during their stay. Your words with regards to our comfortable beds, good breakfast and location are invaluable, and it is a pleasure to know these aspects were the highlights of your visit.\n\nYour thoughts about the air conditioning have been passed to our responsible division, so everything will be in order and spotlessly clean on your future visit. Should You return to Budapest, we always welcome You back to our establishment. \n\nThank You for choosing Star City Hotel***!\n\nWith kind regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-10',
            numNights: 2,
            roomType: {
              name: 'Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7521702',
            },
            roomId: 7521702,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'be82f9acd9c9610e',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2932658670088082&height=256&width=256&ext=1672038237&hash=AeQDHRXbHECmKSeUK5Q',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovakia',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Melinda',
          },
          isApproved: true,
          reviewedDate: 1723543245,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Air-conditioning in the rooms smelled really dusty, should be clean to enjoy the nice clean room better. Everything else was great.',
            positiveText:
              'Very friendly staff, so comfortable beds, good breakfast, good location.',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              "Dear Valued Guest,\n\nThank You very much for sharing your superb review, it is reassuring to hear You have enjoyed visiting our hotel.\n\nWe are delighted to read your experiences that we have provided a spacious room, and it means a lot to us to know You appreciated our Engish-speaking Staff. It is a pleasure to know You found our breakfast options to your liking, which were selected with precision to suit our Guests' preferences.\n\nOur Team is constantly trying to modernise our facilities, and all your comments are essential for our future improvements. Thank You for choosing our hotel, and we look forward to host You again in the future.\n\nWarm regards,\nStar City Hotel*** Staff",
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-04',
            numNights: 4,
            roomId: 7521712,
            roomType: {
              name: 'Family Room',
              id: '7521712',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '7ad1ceb3cc3eea1c',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/10156239016359189/picture?type=square&height=64&width=64',
            countryCode: 'tw',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Taiwan',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Yuchun',
          },
          reviewedDate: 1723540276,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: 'A little old.',
            textTrivialFlag: 0,
            positiveText: 'Big room.',
            title: 'Communication with English, big room, perfect breakfast.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for your positive and detailed review about your experiences at Star City Hotel***!\n\nWe are glad You have enjoyed your stay, including the seamless check-in and check-out process, good breakfast, comfortable rooms and location. Our facility has a central location with just a walking distance from many sights Budapest has to offer. \n\nYour suggestions are invaluable for our continuous improvements, thank You for your imput. We look forward to welcoming You back, whenever your travels bring you back to Budapest.\n\nWarm regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-03',
            numNights: 5,
            roomId: 7521702,
            roomType: {
              name: 'Double or Twin Room',
              id: '7521702',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'eeb2315d9b8b50fc',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
            countryCode: 'ch',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Switzerland',
            guestTypeTranslation: 'Solo traveler',
            username: 'Andreas',
          },
          reviewedDate: 1723196328,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Maybe a few things that can be updated: the fridge was suprisingly loud for its size, so I unplugged it. Since the doors of the other rooms are often closed not by using the key but slammed, my own door tended to vibrate, maybe that can be adjusted a bit. Also the chimes of the elevators are a tad loud, also maybe room for adjustement there? But I understand that they are necessary. But overall minor things, just meant as suggestions ;)',
            lang: 'en',
            title: 'Good place to stay in Budapest!',
            positiveText:
              'The people were very nice and helpful, check-in/out was quick and easy, breakfast was good, room was large and comfortable, quiet facing the courtyard, close to the train station and also city center is not too far, if ever there are limes and bikes nearby. really enjoyed my stay :)',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 1,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for providing a superb review about your short city break at Star City Hotel***!\n\nWe are pleased to hear You found our 24/7 reception service and polite Staff valuable, as well as the affordable prices and various breakfast choices. We pay utmost attention to every detail of your stay, and it is rewarding to know our clean environment could contribute to your enjoyment.\n\nYour feedback with regards to the size of your room is appreciated, and we will do our best to find the most ideal room for You next time. Thank You for choosing Star City Hotel***, and we hope to welcome You back!\n\nWith kind regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-06',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-02',
            numNights: 4,
            roomId: 7521702,
            roomType: {
              name: 'Double or Twin Room',
              id: '7521702',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '244da7452bbcb5f3',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/xdata/images/xphoto/square64/142140773.jpg?k=f3330b965dfd8d9f22bf2efb9ae99aad03a0b25165d540b9fb1bd6062f0a9fbe&o=',
            countryCode: 'pl',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Poland',
            guestTypeTranslation: 'Couple',
            username: 'Jakub',
          },
          isApproved: true,
          reviewedDate: 1722989037,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Small, tiny room.',
            positiveText:
              '- Extremely polite staff\r\n- 24/7 reception\r\n- Affordable bar prices and delicious, various breakfasts\r\n- 2 elevators, AC in each room, clean common spaces.',
            title: 'Perfect place to stay for a short city break.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nWe are delighted to receive your 10/10 rating about the services You have experienced at Star City Hotel***!\n\nIt brings us happiness to hear your room was clean and the beds were comfortable during your stay. We always ensure to welcome You in a tidy environment while maintaining cleanliness with daily cleaning. Furthermore, we appreciate your recognition about our abundant breakfast variety.\n\nThank You for choosing Star City Hotel***, and we look forward to welcome You back in the nearest future!\n\nWarm regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-07-30',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-28',
            numNights: 2,
            roomType: {
              name: 'Triple Room',
              id: '7521705',
              __typename: 'RoomTranslation',
            },
            roomId: 7521705,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8619758d94826217',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocKN9E11S-Ua4JauDg6WDyYIzT2QSvQ1pAaVIavtsmT4=s96-c',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Riccardo',
          },
          reviewedDate: 1722366464,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            title: null,
            positiveText:
              'Rooms were very clean and beds very comfortable. Room temperature was very nice and very rich breakfast.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for providing your superb review about Star City Hotel***!\n\nIt is reassuring to read You found great value for the price, and we feel rewarded to hear the prospect of your return in the future. Additionally, our Staff is motivated to welcome You with the utmost hospitality, which was also reflected in your feedback. While we are glad to read your positive consideration about the location and amenities, we will address your concerns related to the breakfast to ensure an improved dining experience for our Guests.\n\nWe appreciate your choice on us and hope to have the pleasure of welcoming You back for another memorable stay in the future.\n\nBest regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-17',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-16',
            numNights: 1,
            roomType: {
              name: 'Single Room',
              id: '7521713',
              __typename: 'RoomTranslation',
            },
            roomId: 7521713,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '36968a5d3bfa975e',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Solo traveler',
            username: 'Melissa',
          },
          isApproved: true,
          reviewedDate: 1722242501,
          textDetails: {
            negativeText:
              'Breakfast was a little disappointing, especially the bread and juice.',
            textTrivialFlag: 0,
            lang: 'en',
            positiveText:
              'Very helpful and welcoming staff. Excellent value for money for the location and amenities.',
            title: 'Great value for money. I would stay there again.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for your positive feedback, we are glad that You have enjoyed our services!\n\nIt brought us delight to hear You found our location to be great, as well as the cleanliness, comfortable beds and breakfast. Thank You for your recommendation for nearby restaurants. Your comments on the length of the check-in process are crucial, and while we strive to ensure a smooth check-in experience for our Guests, we are working diligently to address these concerns.\n\nWe appreciate your exceptional review, and we hope to welcome You back for another pleasant stay in the nearest future!\n\nKind regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-07-27',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-26',
            numNights: 1,
            roomType: {
              name: 'Double or Twin Room',
              id: '7521702',
              __typename: 'RoomTranslation',
            },
            roomId: 7521702,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '2965103b7b935bfd',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AFdZucrcGDx6biN34PSF3rmo7pNELsRG2y3blxsMuoPLxA=s96-c',
            countryCode: 'ua',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ukraine',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Olha',
          },
          isApproved: true,
          reviewedDate: 1722166915,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Very long check-in upon check-in.',
            lang: 'en',
            positiveText:
              'Great location, cleanliness, comfortable beds, good breakfast. There is a great restaurant Paprika nearby, very popular with locals (large portions, very tasty and inexpensive)',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for taking the time to share your kind feedback about Star City Hotel***!\n\nIt brings us delight to hear our dining area provided a modern and pleasant atmosphere. Our rooms were designed to provide quiet sleep and comfort, so it is reassuring to hear that You have experienced this as well. Thank You for bringing your thoughts to our attention, and will continue to expand the selection of the TV channels.\n\nWe look forward to welcoming You back, whenever your travels bring You back to Budapest.\n\nWith best regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-27',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-26',
            numNights: 1,
            roomId: 7521713,
            roomType: {
              name: 'Single Room',
              id: '7521713',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '7cef01dce9126db5',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-c.png',
            countryCode: 'cz',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Czech Republic',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Christopher',
          },
          isApproved: true,
          reviewedDate: 1722148656,
          textDetails: {
            negativeText: 'Poor selection of tv channels.',
            textTrivialFlag: 0,
            positiveText:
              'The dining areas were modern and pleasant. It was quiet in my room.',
            title: null,
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              "Dear Valued Guest,\n\nThank You for your exceptional review about Star City Hotel's services!\n\nWe strive to maintain a comfortable atmosphere for our Guests, and we are glad we have exceeded your expectations by our large rooms and the overall design of the building. Furthermore, we are delighted that You appreciated our friendly Staff. Ensuring our Guests feel well-cared for is important to us. \n\nOne of our key advantages is our location, as Star City Hotel*** has proximity to many attractions such as the Heroes' Square and Széchenyi Spa.\n\nThank You for choosing our hotel, and look forward to hosting You again whenever your travels bring You back to Budapest.\n\nWith warm regards,\nStar City Hotel*** Staff",
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-14',
            numNights: 2,
            roomType: {
              name: 'Double or Twin Room',
              id: '7521702',
              __typename: 'RoomTranslation',
            },
            roomId: 7521702,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8a186fe57a67d3fb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJdeLWdHjA9Lv62NKT-7cdxcIwA9M1jqxywyj59PA-U=s96-c',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Nadia',
          },
          reviewedDate: 1721337774,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              'It was a very beautiful hotel. Our room was large and beautifully designed. The staff were friendly. The location was suitable.',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nThank You for sharing your positive feedback about Star City Hotel***!\n\nWe are pleased to know our spacious rooms contributed to your enjoyment, as well as the treatment of the Staff. Our establishment is located close to the Széchenyi Spa and Keleti Railway Station. \n\nAll your comments are essential as we continuously improve our services. Let us kindly inform you that apart from our continental daily breakfast, we also have a drinkbar which operates all day and welcome all the Guests who would like to get snacks. Otherwise, our colleagues are at your disposal with suggestions for nearby restaurants.\n\nWe hope to have another chance to welcome You back in the future. Thank You for choosing our hotel!\n\nWarm regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-19',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-16',
            numNights: 3,
            roomId: 7521705,
            roomType: {
              name: 'Triple Room',
              __typename: 'RoomTranslation',
              id: '7521705',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9e975f773862b8ad',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
            countryCode: 'pt',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Portugal',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Sara',
          },
          isApproved: true,
          reviewedDate: 1721160024,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'It was not possible to eat at the hotel.',
            lang: 'en',
            title: 'Very good',
            positiveText:
              'The size of the room and the staff.\r\nNear the train station the Spa and with transports at the door.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Valued Guest,\n\nWe are delighted to receive your excellent review about Star City Hotel***! It is amazing that You highlighted You found everything fantastic during your stay, from room to breakfast.\n\nOur Team treats our breakfast service&#39;s quality very seriously, we think a great day has to be started with serving fresh and comprehensive variety of meals for our kind Guests.\n\nIt is reassuring to know your overall experience was truly great. We eagerly await your next stay at Star City Hotel***!\n\nWith best regards,\nStar City Hotel*** Staff',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-06',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-04',
            numNights: 2,
            roomId: 7521702,
            roomType: {
              name: 'Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '7521702',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a2627cbbcd0994ec',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-o.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Otilia',
          },
          reviewedDate: 1720612293,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            positiveText: 'room, breakfast, everything',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
      ],
      timeOfYearFilter: [
        {
          count: 2951,
          name: 'All (2951)',
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Sep–Nov',
          count: 0,
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Dec–Feb',
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 7,
      nr_reviews: 2951,
    },
    review_score: 7.9,
    review_score_word: 'Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18040914,
    number_of_rooms: 1,
    stars: 3,
    address: '14 Istvan Street',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 2,
    location: {
      longitude: 19.0814334154129,
      latitude: 47.5047815303438,
    },
    zip: '1078',
    hotel_description:
      'Star City Hotel er beliggende i Budapest blot 400 m fra den romantiske bypark samt tog- og metrostationen Keleti. Her tilbydes gratis WiFi på alle områder samt ferieboliger med udsigt til den indre gårdhave eller en stille sidegade. Værelserne på Star City Hotel har også aircondition samt fladskærms-tv med satellitkanaler. Det er endvidere muligt at bestille sammenhængende ferieboliger. Der serveres dagligt morgenmad samt drinks og varme drikke i baren. Personalet er desuden gerne behjælpelig med information om byens seværdigheder. Som gæst får du også udleveret et gratis bykort ved ankomsten til hotellet. Den elegante Andrassy Avenue ligger blot 10 minutters gang fra Star City. Der er endvidere gode forbindelser til centrum i Budapest via den nærliggende metrostation.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Kæledyr tilladt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Møde-/festlokale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjvask',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjrens',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Strygning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Massage',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Biludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sightseeingskranke',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Hæveautomat findes inde på ejendommen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Concierge',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat ind-/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særlige diæter (efter forespørgsel)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fælles opholdsrum/tv-område',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Indendørs legeområde',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vin/champagne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport fra lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport til lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Café på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygmassage',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Nakkemassage',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fodmassage',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fuldkropsmassage',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Nøgleadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for levering af mad til værelser/enheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kontaktløs indtjekning/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Afskærmning mellem personale og gæster på relevante områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overnatningsstedet rengøres af professionelle rengøringsfimaer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Takeaway-beholdere til morgenmad',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikker dækning af mad ved levering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæsterne har adgang til mundbind',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468952278.jpg?k=0b7ca770246c516210f3ce34ef78cb940fbbd1d59dbf5c7bafcd7010b8b15a4f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/83069221.jpg?k=e191145c16f7f0f2a636e3ab7468e4f1288ca0ada857415c2560dbfef6e0d030&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504971.jpg?k=69e415913963143f6095b0cf11cf08a4519dbdc436994997c93d9fc20f37d653&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79518063.jpg?k=7aaf25abe16dbb47574c977b2af2658f0b39e0a1a316564199176d0d04c9d28c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17839820.jpg?k=4422cd35782f12a04c9232b9867bc3520bc3a5de1c72a0c3b13e23df2c181cd4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17826328.jpg?k=85f38f199586ec64c7f5b3964e24aca809a791173d72c2b9b5dab1abfec0b412&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17840057.jpg?k=2bfc84b25a5ea243c72dd602a6dbc4b9d0db4b259ae6e45bfc8caaa4e84318c0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/83068841.jpg?k=6b6d8b07e8e0dd1419b931c3712091ef2bf89ff9f1206f1d9628123c4f7a4576&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468951241.jpg?k=2aca134d6ce3b1dd56ba5dc90a35bfe8fe5145429bc499deda8fc0349195dfca&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504898.jpg?k=cff7ccaaf0ec1585ff7945ae46c2a7282be3e367188e4c8cd160a09f4293488c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17840375.jpg?k=3fc6d6582ee40fc44f322afe2fe08a0fbe174d382f873cc4d8ba3f88feeac765&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/32674174.jpg?k=2363679df172f0b97c727db6dfc32f97a3ca463f8be4843dcbf5a9cd6280484d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79518062.jpg?k=d7d41457fae9beefc7a52a6c7a1543b5782e54354b44e97391e333a80168c4cc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/32674221.jpg?k=13ed74f5b814254ab9992e2dc9b89c6bc84cf42c16b375caae60130110460c9b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504858.jpg?k=10c5b87842c19f155c5319aae4828a913d2a21c2e43e76a340f5cc3b80eb1f62&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504907.jpg?k=4edca590b3361604fac6340e9dfb3cb851b7d3471913c935a72909e1958229c6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504881.jpg?k=9e996538e585ebcdcf831e8b5e52459cccc3b39ef8751e57ccb7ffb0eae183c7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504832.jpg?k=6a62209dec7dedc9c5434442f0999054a3502d33ffc06740f9ae4ec9fcb6b81c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79513547.jpg?k=7bb70d3c52a3242b40312eba6ef800c4a8cc5e5eba3aaa97fbafa30510c9e283&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17839091.jpg?k=fbf6c5e5e8e5bd39ce80b1e4b19520a93fc4cb08aa65f265deec1d1c2991baee&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/32674286.jpg?k=51c8550b0424bf421ed26d338d4e7747aa84f923203e416a9d8c5d03022feac3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17839093.jpg?k=57e4f8d419053b74966e597054b051fc70111c5686bfc9f058a20556ea6e45c6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17839089.jpg?k=3bc40b3c2f5bca37179013cd636453b63fb975e0c3ebe25f26f3ace0132c68b5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17840315.jpg?k=c8505619801165a54bf53f31759588ae0300c6912ce7435bc7791941b254a2ad&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17840189.jpg?k=671ceaad2cda7a15a4d425e5c3b125ad99b15f4786999049a72b6ebc745a8e88&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/45412046.jpg?k=3fadac9cb2316d8259874abbda81c9188ccff3be2b90272c2b2db48cc3a87e28&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/53472714.jpg?k=c0a7698869fc4553d92b9d5e259cce09056f344300d3674809f97f5c5aa65892&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/36864729.jpg?k=8f3651d07029ea88e6bfc4c778959d8130c883cdc3146de7d2ccc6c7bde0e5d4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17842020.jpg?k=3adab31ae728ef34e0fad8f5ffa955a5148fb9be2fdef9fd295298fe798e428e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17841851.jpg?k=97d71bb60fe5998e1e2f3932cf9b0da81c2f1fbbf29c87fa46321d0cb6a76cbd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17841687.jpg?k=6a80c8b6150061fc5272e050d5c0d326a196c79b6342e7565f6acc45046845a2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/53472670.jpg?k=a26822a51724a725f56d699da5f1f01d4a00e89ee498871dc5f92778ff8ac54f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/17842013.jpg?k=40859968da1230d5b89c520a58a76716a75be76d765ee8860173c2b84c12ed43&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/53472642.jpg?k=0a808056a3610af1e195e433259fe5c2bce0825feefa60a1ecb96b3440785945&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504939.jpg?k=738ce23ed1d6616e0e85ef581398cbf01d7dae166b83a8f91941973d2fb2faae&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 2,
      rooms: [
        {
          max_n_people: 2,
          name: 'Twin/Double room',
          facilities: [],
          price: 149.210565,
          photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468952278.jpg?k=0b7ca770246c516210f3ce34ef78cb940fbbd1d59dbf5c7bafcd7010b8b15a4f&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/83069221.jpg?k=e191145c16f7f0f2a636e3ab7468e4f1288ca0ada857415c2560dbfef6e0d030&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79504971.jpg?k=69e415913963143f6095b0cf11cf08a4519dbdc436994997c93d9fc20f37d653&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/79518063.jpg?k=7aaf25abe16dbb47574c977b2af2658f0b39e0a1a316564199176d0d04c9d28c&o=&hp=1',
          ],
          breakfast_included: true,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'WEBBEDS',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0,
    price_without_discount: 149.210565,
    price_increased: true,
    price_decreased: false,
    price_diff: 15.08,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: "Dean's Home Budapest",
    street_address: 'Tuzolto street 50-56',
    city: 'Budapest',
    zip_code: '1094',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/deans-college-hotel-budapest.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 142.26,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 142.25809500000003,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 142.25809500000003,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 18.00320585360507,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346934997.jpg?k=98a708dbc626e4b8853a087e6f42f0ac0fb4db338fb42f1c913656d56432badd&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          name: 'All (8108)',
          count: 8108,
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Wonderful: 9+ (4851)',
          count: 4851,
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Good: 7-9 (2644)',
          count: 2644,
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Fair: 5-7 (406)',
          count: 406,
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 133,
          name: 'Poor: 3-5 (133)',
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Very Poor: 1-3 (74)',
          count: 74,
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          name: 'Room',
          isSelected: false,
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Location',
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          name: 'Clean',
          isSelected: false,
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Breakfast',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_breakfast',
          },
          isSelected: false,
          name: 'Breakfast',
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          isSelected: false,
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bus',
          isSelected: false,
          translation: {
            name: 'Bus',
            id: 'topic_bus',
            __typename: 'ReviewTopicTranslation',
          },
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          isSelected: false,
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          name: 'Kitchen',
          isSelected: false,
          translation: {
            name: 'Kitchen',
            id: 'topic_kitchen',
            __typename: 'ReviewTopicTranslation',
          },
          id: 261,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          name: 'Quiet',
          isSelected: false,
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Shower',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_shower',
          },
          name: 'Shower',
          isSelected: false,
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Noise',
          isSelected: false,
          translation: {
            name: 'Noise',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_noise',
          },
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Toilet',
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Loud',
            id: 'topic_loud',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Loud',
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Spa',
            id: 'topic_spa',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Spa',
          isSelected: false,
          id: 256,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Balcony',
          translation: {
            name: 'Balcony',
            id: 'topic_balcony',
            __typename: 'ReviewTopicTranslation',
          },
          id: 272,
          __typename: 'TopicFilter',
        },
        {
          name: 'Checkin',
          isSelected: false,
          translation: {
            name: 'Check-in',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_checkin',
          },
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Laundry',
            id: 'topic_laundry',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Laundry',
          id: 265,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Towel',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_towel',
          },
          name: 'Towel',
          isSelected: false,
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Heat',
          translation: {
            name: 'Heat',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_heat',
          },
          id: 291,
          __typename: 'TopicFilter',
        },
        {
          name: 'Coffee',
          isSelected: false,
          translation: {
            name: 'Coffee',
            id: 'topic_coffee',
            __typename: 'ReviewTopicTranslation',
          },
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Parking',
          translation: {
            name: 'Parking',
            id: 'topic_parking',
            __typename: 'ReviewTopicTranslation',
          },
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          name: 'Window',
          isSelected: false,
          translation: {
            name: 'Window',
            id: 'topic_window',
            __typename: 'ReviewTopicTranslation',
          },
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            id: 'topic_hot',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Hot',
          isSelected: false,
          id: 290,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          name: 'hotel_staff',
          translation: 'Staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.80970001220703,
          },
          value: 8.93562507629395,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            ufiScoreHigherBound: 9.61482429504395,
            __typename: 'UfiScoreAverage',
          },
          value: 8.60985946655273,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_clean',
          translation: 'Cleanliness',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 8.74172019958496,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 8.70290374755859,
          __typename: 'RatingScore',
        },
        {
          translation: 'Value for money',
          name: 'hotel_value',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 8.71510791778564,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 8.75611400604248,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            ufiScoreHigherBound: 8.67230033874512,
            __typename: 'UfiScoreAverage',
          },
          value: 9.02777767181396,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      customerTypeFilter: [
        {
          name: 'All (8108)',
          count: 8108,
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (1664)',
          count: 1664,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Couples (3409)',
          count: 3409,
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 1389,
          name: 'Groups of friends (1389)',
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Solo travelers (1646)',
          count: 1646,
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Business travelers (798)',
          count: 798,
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      languageFilter: [
        {
          name: 'All (8108)',
          count: 8108,
          countryFlag: null,
          value: '',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Danish (30)',
          count: 30,
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (2332)',
          count: 2332,
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          count: 637,
          name: 'German (637)',
          value: 'de',
          countryFlag: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (355)',
          count: 355,
          countryFlag: 'pl',
          value: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Spanish (280)',
          count: 280,
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 76,
          name: 'Chinese (76)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          count: 472,
          name: 'Russian (472)',
          value: 'ru',
          countryFlag: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 23,
          name: 'Swedish (23)',
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          count: 185,
          name: 'French (185)',
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 607,
          name: 'Italian (607)',
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          count: 188,
          name: 'Romanian (188)',
          value: 'ro',
          countryFlag: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          count: 120,
          name: 'Dutch (120)',
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Lithuanian (11)',
          count: 11,
          countryFlag: 'lt',
          value: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          count: 10,
          name: 'Norwegian (10)',
          value: 'no',
          countryFlag: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (15)',
          count: 15,
          countryFlag: 'kr',
          value: 'ko',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hungarian (1268)',
          count: 1268,
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Thai (2)',
          count: 2,
          countryFlag: 'th',
          value: 'th',
          __typename: 'LanguageFilter',
        },
        {
          count: 211,
          name: 'Ukrainian (211)',
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Arabic (43)',
          count: 43,
          countryFlag: 'sa',
          value: 'ar',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (124)',
          count: 124,
          countryFlag: 'tr',
          value: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Japanese (23)',
          count: 23,
          countryFlag: 'jp',
          value: 'ja',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (315)',
          count: 315,
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Portuguese (110)',
          count: 110,
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Bulgarian (30)',
          count: 30,
          countryFlag: 'bg',
          value: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (162)',
          count: 162,
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          count: 89,
          name: 'Croatian (89)',
          value: 'hr',
          countryFlag: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          count: 67,
          name: 'Serbian (67)',
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (7)',
          count: 7,
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Vietnamese (4)',
          value: 'vi',
          countryFlag: 'vn',
          __typename: 'LanguageFilter',
        },
        {
          count: 21,
          name: 'Finnish (21)',
          value: 'fi',
          countryFlag: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovak (176)',
          count: 176,
          countryFlag: 'sk',
          value: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Catalan (12)',
          count: 12,
          countryFlag: 'catalonia',
          value: 'ca',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovenian (30)',
          count: 30,
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          count: 58,
          name: 'Hebrew (58)',
          value: 'he',
          countryFlag: 'il',
          __typename: 'LanguageFilter',
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Maria Fernanda,\n\nThank you for giving us a perfect rating. I’m sure our entire hotel staff enjoyed catering to your needs as much as you enjoyed your stay. Take care!\n\nKind Thoughts,\nThe Dean’s College Hotel\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2023-06-24',
            __typename: 'BookingDetails',
            checkinDate: '2023-06-17',
            numNights: 7,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              id: '501923903',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '59e67c495ccefb48',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AAcHTtfTr2pRWzgcleUBTtUc6Y_ZwHAIx7jWrt5uIHeb=s96-c',
            countryCode: 've',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Venezuela',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Maria',
          },
          isApproved: true,
          reviewedDate: 1687899476,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'Everything was just PERFECT!',
            positiveText:
              'I really loved everything in this place. The room was amazing with everything I needed. So clean! The staff members were kind and when needing anything like hairdryer, electricity converter and cooking pot just asking for it at the reception was enough! I recommend this place 100%!',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-15',
            numNights: 3,
            roomType: {
              name: 'Superior Queen Room',
              __typename: 'RoomTranslation',
              id: '501923903',
            },
            roomId: 501923903,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ffbdc4e4dbd26935',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-i.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Ioana',
          },
          isApproved: true,
          reviewedDate: 1724329926,
          textDetails: {
            negativeText: 'The bathroom door, we didn’t like at all.',
            textTrivialFlag: 0,
            lang: 'en',
            positiveText: 'It’s cheap',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-24',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-17',
            numNights: 7,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              id: '501923903',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5be25eb27fd15798',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Family',
            username: 'Michele',
          },
          reviewedDate: 1724259406,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'Not being able to individually set my room temperature, as it was preset at a minimum temperature, I like a cool bedroom.',
            textTrivialFlag: 0,
            title: 'Great place to stay, very clean and comfortable.',
            positiveText:
              'Lovely big rooms, very clean and comfortable. \r\nClose to food shops, cafes and transport link. \r\nFabulous roof terrace.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Garrey,\nThank you for taking the time to post your review. We were delighted to read how much you enjoyed your stay with us and hope it&#39;s not too long before we have the pleasure of welcoming you back.\nBest Regards,\nThe Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-07',
            numNights: 5,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              __typename: 'RoomTranslation',
              id: '501923903',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5e4eb4cc4fb23383',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
            countryCode: 'ph',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Philippines',
            guestTypeTranslation: 'Couple',
            username: 'Garrey',
          },
          isApproved: true,
          reviewedDate: 1724131308,
          textDetails: {
            negativeText:
              'Its gets a bit dark in the surrounding area at night but safe.',
            textTrivialFlag: 0,
            title: 'Best for long stays.',
            positiveText: 'Location and the on site laundry facility.',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Daniel,    \nThank you for taking the time to post your review. We were delighted to read how much you enjoyed your stay with us. Your observation and review are very much appreciated. I hope we all have the pleasure of welcoming you back again soon.\nMany Thanks, \nThe Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-17',
            numNights: 1,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              __typename: 'RoomTranslation',
              id: '501923903',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'e8bff2a961130bbf',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Daniel',
          },
          isApproved: true,
          reviewedDate: 1724104675,
          textDetails: {
            negativeText: 'Some smell from the shower.',
            textTrivialFlag: 0,
            lang: 'en',
            title: null,
            positiveText:
              'Proximity to the metro. \nQuiet. \nReasonable price for Budapest. \nExcellent air conditioning.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Min,  \nThank you for your review, we are deeply delighted, because you mentioned how comfortable and well-located we are. We appreciate your positive feedback about our hotel and your observation and review are very helpful to us. I hope we all have the pleasure of welcoming you back again soon.\nRespectfully wishing you the best, \nYour Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-15',
            numNights: 3,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              __typename: 'RoomTranslation',
              id: '501923903',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '29cd709624c116ac',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'tw',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Taiwan',
            guestTypeTranslation: 'Group',
            username: 'Min',
          },
          reviewedDate: 1724011856,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'The AC during the first night was too cold for us, but after the second day it was getting better. So not a big issue.',
            lang: 'en',
            title: null,
            positiveText:
              'Location is good especially if you’re coming from the airport, after taking the bus and transfer to the metro, it’s just across from the hotel. The public spaces is very clean and it’s convenient with a supermarket downstairs and cafe nearby.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Agnes, \n\nFirst and foremost, I want to say thank you for your review and for taking the time to share your expressions, we are delighted to read that you enjoyed so many aspects of our hotel. \nIt is always a pleasure to read these comments and encouraging for all of the team here to see our guests enjoying the time with us as you did. We do take pride in catering to our guests’ needs the best way we can. \nI hope we all have the pleasure of welcoming you back again soon! :)\nWarmest Regards, \nThe Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-07-24',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-22',
            numNights: 2,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              id: '501923903',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '1d56f744ff2a8ff3',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/10214361081877391/picture?type=square&height=64&width=64',
            countryCode: 'mt',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Malta',
            guestTypeTranslation: 'Solo traveler',
            username: 'Agnes',
          },
          isApproved: true,
          reviewedDate: 1723916455,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'The bar was closed on the roof, we were allowed to take up anything but still. Would have been nice, even a non alcoholic bar 🤩',
            lang: 'en',
            title: 'This is where you want to stay in Budapest centre.',
            positiveText:
              'The style, the location, everything makes so much sense in the building. There is working space, chill area, desks, gym, laundry, a rooftop with an amazing sunset view.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Veselina, \n\nFirst and foremost, I want to say thank you for your review and for taking the time to share your expressions, we are delighted to read that you enjoyed so many aspects of our hotel. \nIt is always a pleasure to read these comments and encouraging for all of the team here to see our guests enjoying the time with us as you did. We do take pride in catering to our guests’ needs the best way we can. \nI hope we all have the pleasure of welcoming you back again soon! :)\nWarmest Regards, \nThe Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-11',
            numNights: 2,
            roomType: {
              name: 'Superior Queen Room',
              id: '501923903',
              __typename: 'RoomTranslation',
            },
            roomId: 501923903,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5a4a1d737f2f852e',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
            countryCode: 'bg',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Bulgaria',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Veselina',
          },
          reviewedDate: 1723669317,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Only the douche cabin leaks to the other part of the bathroom, but it wasn’t much of a problem, we put a towel in front.',
            positiveText:
              'Everyone was super nice and welcoming. The place is located 10-15 mins with the metro to the center. The room was very good, the beds are very comfortable. There is a 24/7 shop nearby, supermarket and coffee shops and places to eat.',
            title: 'Great place!!!',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Veronika, \nThank you for taking the time to post your review. We are delighted to read that you enjoyed so many aspects of our hotel. It is really encouraging for all of the team here to see our guests \nenjoying the time with us as you did. Your observation and review are very much appreciated. I hope we all have the pleasure of welcoming you back again soon.\nKind Thanks, \nThe Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-05',
            numNights: 3,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              id: '501923903',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'de52fd1800aa676f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
            countryCode: 'ua',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Ukraine',
            guestTypeTranslation: 'Family',
            username: 'Veronika',
          },
          reviewedDate: 1723659541,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing',
            lang: 'xu',
            title: null,
            positiveText:
              'We liked everything abt this hotel: location is right next to the metro station, 3 supermarkets, inner garden, rooftop, clean rooms, all necessary amenities.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Karla, \nI want to say thank you for your review and for taking the time to share your expressions. We respect your positive feedback about our hotel. I hope your next stay is just around the corner! Call or email us if there is anything we can help you with.\n\nYour Dean’s Home Budapest 😉\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-10',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-09',
            numNights: 1,
            roomId: 501923907,
            roomType: {
              name: 'Double Room with Extra Bed',
              __typename: 'RoomTranslation',
              id: '501923907',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '38fc3eec20732978',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United States of America',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Karla',
          },
          reviewedDate: 1723638198,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: 'Can’t think of anything to say!',
            textTrivialFlag: 0,
            positiveText:
              'It was very clean, staff was nice and great location.',
            title:
              'It was very clean, staff was nice and great location. Price was great.',
            lang: 'xu',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Frank,\nThank you for taking the time to post your review. We were delighted to read how much you enjoyed your stay with us and hope it&#39;s not too long before we have the pleasure of welcoming you back.\nBest Regards,\nThe Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-11',
            numNights: 2,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              id: '501923903',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'aae0389e1ff27676',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-f.png',
            countryCode: 'de',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Germany',
            guestTypeTranslation: 'Family',
            username: 'Frank',
          },
          reviewedDate: 1723634596,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            title: "I'll get back",
            positiveText:
              'It was really good situated, with the.Metro directly in front of the hotel, we could reach any point at any time.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Alexandru,  \nThank you for your review, we are deeply delighted, because you mentioned how comfortable and well-located we are. We appreciate your positive feedback about our hotel and your observation and review are very helpful to us. I hope we all have the pleasure of welcoming you back again soon.\nRespectfully wishing you the best, \nYour Dean&#39;s Home Budapest\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-12',
            numNights: 1,
            roomId: 501923903,
            roomType: {
              name: 'Superior Queen Room',
              id: '501923903',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd6c9481362310cb1',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Romania',
            guestTypeTranslation: 'Family',
            username: 'Alexandru',
          },
          reviewedDate: 1723618407,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'the water from the shower does not drain and stays there. Simple room. No tv but you have the city to explore.',
            lang: 'en',
            title: 'Good hotel, good value for money +++++',
            positiveText:
              'Location, clean room, great bed, many towels. Good value for the money, I have to recommend it, I would stay again.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Abdelkader, \n\nI appreciate your positive feedback about our hotel. We are delighted to read how much you have enjoyed your stay with us. It really is encouraging for all of the team here to see our guests enjoying their time as you did. Your observation and review are very helpful to us. \nI hope we all have the pleasure of welcoming you back again soon.\n\nCordially Yours, \nThe Dean&#39;s Home Budapest :)\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-09',
            numNights: 3,
            roomType: {
              name: 'Superior Queen Room',
              __typename: 'RoomTranslation',
              id: '501923903',
            },
            roomId: 501923903,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8f03c2590364c884',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJtEUMOpnQ0ZauIONIvepBbmOqHLPaEUXR6d_ienwld=s96-c',
            countryCode: 'gr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Greece',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Abdelkader',
          },
          reviewedDate: 1723489567,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing',
            positiveText: 'Everything',
            title: 'Perfect',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Maria, \n\nI want to say thank you for your review and for taking the time to share your expressions. We respect your positive feedback about our hotel. I hope your next stay is just around the corner! Call or email us if there is anything we can help you with.\n\nWarm regards,\nYour Dean’s Home Budapest 😉\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-11',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-10',
            numNights: 1,
            roomId: 501923909,
            roomType: {
              name: 'Budget Single Room',
              __typename: 'RoomTranslation',
              id: '501923909',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '295c1daf5b15aee3',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'dk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Denmark',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Maria',
          },
          isApproved: true,
          reviewedDate: 1723431840,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'Good location next to the metro station, reception 24/7',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Dorothy, \n\nThank you for your kind review and perfect rating. We are delighted that you mentioned how clean and well-located we are. We are pleased to hear that you enjoyed so many aspects of our hotel. If you&#39;re ever in Budapest, we would love to have you back!\n\nKind regards,\nDean&#39;s Home Budapest',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-07-02',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-25',
            numNights: 7,
            roomId: 501923901,
            roomType: {
              name: 'Superior Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '501923901',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ce3fded3e77fed8f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-d.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Dorothy',
          },
          isApproved: true,
          reviewedDate: 1723394244,
          textDetails: {
            negativeText:
              'You couldn’t eat or drink in the lounge area so not good to relax in evening',
            textTrivialFlag: 0,
            positiveText: 'Location and cleanliness',
            title: 'Enjoyable and cheap',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
      ],
      reviewsCount: 8108,
      timeOfYearFilter: [
        {
          count: 8108,
          name: 'All (8108)',
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 8108,
    },
    review_score: 8.6,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041438,
    number_of_rooms: 1,
    stars: 3,
    address: 'Tuzolto street 50-56',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 2,
    location: {
      longitude: 19.078467493393,
      latitude: 47.4814993733732,
    },
    zip: '1094',
    hotel_description:
      "Dean's Home Budapest har en god beliggenhed i centrum af Budapest og tilbyder værelser med aircondition, have, gratis wi-fi og terrasse. Overnatningsstedet ligger 2,8 km fra synagogen i Dohany-gaden, 3 km fra Blaha Lujza-pladsen og 3 km fra metrostationen Keleti Pályaudvar. Ejendommen er allergivenlig og ligger 1,8 km fra det ungarske nationalmuseum. Alle værelserne har skrivebord. Samtlige værelser har eget badeværelse med bruser og hårtørrer, og nogle af værelserne har køkken med mikrobølgeovn. Samtlige værelser på Dean's Home Budapest har sengelinned og håndklæder. Der serveres kontinental morgenmad. Du kan spille billard på dette 3-stjernede hotel, og der tilbydes cykeludlejning. Personalet i receptionen taler tysk, engelsk og ungarsk og står altid klar til at hjælpe. Keleti Station ligger 3,4 km fra Dean's Home Budapest, og den ungarske statsopera ligger 3,4 km derfra. Den nærmeste lufthavn er Budapest Ferenc Liszt Internationale Lufthavn, 11 km fra hotellet.",
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Have',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Terrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Handicapvenlig',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Spillelokale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Billardbord',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lydisolerede værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Allergivenligt værelse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Snackbar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Solterrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat ind-/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Automat (drikkevarer)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Automat (snacks/mellemmåltider)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Minimarked på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Dagligvarelevering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkeringshus',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kørestolsadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Toilet med armstøtter',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Højt toilet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lavthængende vask på badeværelset',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alarmsnor på badeværelset',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Café på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Havemøbler',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fitness',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera udenfor overnatningsstedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Cykeludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for levering af mad til værelser/enheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Etablerede procedurer til sundhedstjek af gæsterne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overnatningsstedet rengøres af professionelle rengøringsfimaer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overnatningsstedet tilbyder termometre til gæsterne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæsterne har adgang til mundbind',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346934997.jpg?k=98a708dbc626e4b8853a087e6f42f0ac0fb4db338fb42f1c913656d56432badd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589273607.jpg?k=bb88b202dc3597d6dd64e58961b49a1b8a1097f33c3691f644ed70d7366c2c1c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589274196.jpg?k=37938b30c4390f720932fd4957fb41cf106a26fdfdd4f213cc012c6d6962cb08&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589284110.jpg?k=610a55ba76f6f5ce1c699877a6466e5014e3629421611076388a82d5e3543067&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589282911.jpg?k=18d1e5f3427c44e161f4cbd424fcaf3f103f8b163d85f405b3ab3967e0fcc579&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589284141.jpg?k=91ea2dab4467493c2d5da228539bc430e154aaca70cf4c4fd422f9c9c721bc63&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589284138.jpg?k=84ce1b20f3bd1cf10fca47a68e8bff2d6b084bd8f43ec50b85d4f1023d6eba60&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589278129.jpg?k=73886bfd34ca17a6c67ac2108511c912dea2f9304d7962b4ea0a25e3b671b8bc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589279014.jpg?k=7ab47fb46764eca06e820b680ffd8602d346aeaf38c83722bd78fb2c707668cb&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589281733.jpg?k=5b56bb4fee0e6f38a0ded64e7b3fe45dd7de5fe33256622873420e777dc0f267&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589285882.jpg?k=2b003e761e767e6564097d0a22d85b3c9ecceada8f766753942c779ed8dd3e32&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589285878.jpg?k=1d2997e3f20785e8e586d9355a156e528a7dda9a41253200abec2b79f8b63303&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589274752.jpg?k=8ff1f67faba530b29c75a939be5efdf198dcf2206fc7a7ee8ec9cd7d191f6361&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589279416.jpg?k=e53890465596dcd137e64fcd30e9b9969b8063cc1c683f81b51d03f954978d70&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589277322.jpg?k=93eb32d50ddce54dc18f8ffd57710f9ad4b7f0397e0e638183c2b66c874e9fbc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589277308.jpg?k=63b4cb51024c1db5172011a3fa945e39c7deaefe09f50a47496b8de2f2156271&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346737212.jpg?k=5a50498402ba79c3afbdabfdc4f6b768772fd518c4f160d6e55c6dd04b974bc0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589276743.jpg?k=3045224fd86add71982377a23ce271aead6f5b9777864b1fb6dbc169ac3890cd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346737537.jpg?k=93e0baae774d02054d61cb1073641a775627a13ad9d8393e9b5080da3e73c399&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589280355.jpg?k=e1b96d6e5f59c033a4a203ddcfdb7026ae2f8af0eb3781cb2158054956c6e74b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589281125.jpg?k=cfd804d7a53e4024cb0b191a3495a999411509e8ddb53bf8f7875e830d5a4062&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346737480.jpg?k=82026ae61b310c2b190a0cf9e7c08cd5698d623d2de8ee2b23ab352c39e9d5c1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/402850172.jpg?k=823eb4c6b3f73b787457e9366c8fa60de04803f066e43dfbe1d319791840716f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529735604.jpg?k=a64af5324c73f3ac6427627bdd21484b43325e586890fefe42a792186d28f6b0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529736076.jpg?k=66588abfac953b4d4109578007cdb0f1e1973b6671fb53dab432b1b0206aabac&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346931607.jpg?k=721d43ca9a962d846d2aff815902e38470a040b1a1b04f79dfa884d09082c2ee&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346931912.jpg?k=d5602b7c66624ae7019078866d3c4c520704d7bd2347472b4abdbcb23bd35413&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346931904.jpg?k=a364af84fde43e98c762e63608bb26c50466b1a24df1ba1452b22464d2662d33&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346931891.jpg?k=9f79f532742fcfdf17b471cc5b5541f7f5cc9c9ed1b9c316dcc77e223f2ca5d6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346932650.jpg?k=733c52bc0e1ebeb3e27968932fcf10777936c3e244617bf099ba9839c53338fd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346932522.jpg?k=9d55c4d10dfa2ca1cbbbbe464b66bd8c5433bf5a766d039a7b29443a056bae8f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346932296.jpg?k=0096f6c3fbbb5a1808c4ea80eb96afb0f8b3f7ca41ebcbfc4ab668170a2323c6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346932665.jpg?k=f515015c444942351ba3305cc68f48e58fa91ee2a013eb60ef645fb4010a78ae&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346933986.jpg?k=365ddee73b837a54fc621b2b88de0ebfa22c2d7cbaba26d98a48194b0b9ef87e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346933887.jpg?k=27f94f3eb789721effbc29bf9fcaf5710b838f98a95eda2d7b299d91a585d457&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346935016.jpg?k=7ff5773cb638db9dfb24c12c4af96bd785b9ece2000194c6150455e1adb1f3b9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346934964.jpg?k=2696ac26b3ce23f2504d60331c055dbed061348edfb2375165b993f831c6ea95&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346925821.jpg?k=a0d46329e37ebf28830ca282047ada856a4162e224ebe73acecc75b1ee12a49e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346925913.jpg?k=a2932bac936f13584be35cd1d8ef498c64ed29b0ecf0c6fb6f0e34d3bde243cb&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529737358.jpg?k=1853e19ebd019151df4706fc4e913fcafc88c0edd523bd0ed5135998fdb1f7a1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529737359.jpg?k=beb7ff60df79fc14039564659f390aee4b7a0aaa68397db447b2ece24a1b5702&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529737846.jpg?k=39164d7525c580656ee2d628ef40df933c2318c4d1ac4d9054e63afe1dcab9cf&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529738015.jpg?k=d8777decc2bd161caa62e3a02ac1b7cedc599215b7896c4a46ab0f2bbd371562&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/562351740.jpg?k=d3da68f422ed4d3eb80d8854591af491a215f37f3fdf9ab2dd69c3380761f996&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/450240156.jpg?k=df661576524c3d5dc7447058182be3a3921e2b96f1f09ae5a4d1d3d5ffa17478&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 2,
      rooms: [
        {
          max_n_people: 2,
          name: 'None',
          facilities: [],
          price: 142.25809500000003,
          photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346934997.jpg?k=98a708dbc626e4b8853a087e6f42f0ac0fb4db338fb42f1c913656d56432badd&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/258280375.jpg?k=9005c33abe93abd3470a842e8814bb49668405049fafe5fb8d9c5e02d0cb477a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/450240156.jpg?k=df661576524c3d5dc7447058182be3a3921e2b96f1f09ae5a4d1d3d5ffa17478&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/346737637.jpg?k=a18daa0fe3c43097cb39267dc824571c3998c216082994105c6389d9fd4b2f76&o=&hp=1',
          ],
          breakfast_included: false,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'WEBBEDS',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0,
    price_without_discount: 142.25809500000003,
    price_increased: true,
    price_decreased: false,
    price_diff: 8.13,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Ibis Budapest Centrum',
    street_address: '1092, Budapest, Raday utca 6',
    city: 'Budapest',
    zip_code: '1092',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/ibis-budapest-centrum.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 173.81,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 173.8065,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 173.8065,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 17.974692552869733,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497528964.jpg?k=d06c0b8bf4f33cc0cb3d804997e7c229837dcc7642f0f27c4e8bbd6b33573375&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          name: 'All (935)',
          count: 935,
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Wonderful: 9+ (501)',
          count: 501,
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Good: 7-9 (362)',
          count: 362,
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 57,
          name: 'Fair: 5-7 (57)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (12)',
          count: 12,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Very Poor: 1-3 (3)',
          count: 3,
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          isSelected: false,
          translation: {
            name: 'Location',
            id: 'topic_location',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Breakfast',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_breakfast',
          },
          name: 'Breakfast',
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          name: 'Clean',
          isSelected: false,
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          translation: {
            name: 'Bathroom',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bathroom',
          },
          isSelected: false,
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          name: 'Bus',
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Bed',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bed',
          },
          name: 'Bed',
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Coffee',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_coffee',
          },
          name: 'Coffee',
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          name: 'Toilet',
          isSelected: false,
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          name: 'Quiet',
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          isSelected: false,
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Parking',
            id: 'topic_parking',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Parking',
          isSelected: false,
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Airport',
            id: 'topic_airport',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Airport',
          isSelected: false,
          id: 253,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'View',
          translation: {
            name: 'View',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_view',
          },
          id: 257,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          name: 'Hot',
          isSelected: false,
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Shower',
          isSelected: false,
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bar',
          translation: {
            name: 'Bar',
            id: 'topic_bar',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 271,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Check-in',
            id: 'topic_checkin',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Checkin',
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Lift',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_lift',
          },
          name: 'Lift',
          isSelected: false,
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Car',
            id: 'topic_car',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Car',
          isSelected: false,
          id: 288,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Window',
          translation: {
            name: 'Window',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_window',
          },
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Cold',
            id: 'topic_cold',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Cold',
          isSelected: false,
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Heat',
            id: 'topic_heat',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Heat',
          isSelected: false,
          id: 291,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Noise',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_noise',
          },
          name: 'Noise',
          isSelected: false,
          id: 252,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          translation: 'Staff',
          name: 'hotel_staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.80970001220703,
          },
          value: 9.03409099578857,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 8.27361583709717,
          __typename: 'RatingScore',
        },
        {
          translation: 'Cleanliness',
          name: 'hotel_clean',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 8.72964096069336,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 8.59663391113281,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 8.4110631942749,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            ufiScoreHigherBound: 9.3919506072998,
            __typename: 'UfiScoreAverage',
          },
          value: 9.46895408630371,
          __typename: 'RatingScore',
        },
        {
          translation: 'Free Wifi',
          name: 'hotel_free_wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 8.7890625,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      languageFilter: [
        {
          name: 'All (935)',
          count: 935,
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Danish (6)',
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (279)',
          count: 279,
          value: 'en',
          countryFlag: 'gb',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (90)',
          count: 90,
          value: 'de',
          countryFlag: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (29)',
          count: 29,
          value: 'pl',
          countryFlag: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          count: 57,
          name: 'Spanish (57)',
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 9,
          name: 'Chinese (9)',
          countryFlag: 'cn',
          value: 'zh',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Russian (33)',
          count: 33,
          value: 'ru',
          countryFlag: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Swedish (7)',
          count: 7,
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (26)',
          count: 26,
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 85,
          name: 'Italian (85)',
          countryFlag: 'it',
          value: 'it',
          __typename: 'LanguageFilter',
        },
        {
          count: 31,
          name: 'Romanian (31)',
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (18)',
          count: 18,
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Lithuanian (1)',
          count: 1,
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Norwegian (6)',
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (4)',
          count: 4,
          value: 'ko',
          countryFlag: 'kr',
          __typename: 'LanguageFilter',
        },
        {
          count: 42,
          name: 'Hungarian (42)',
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          count: 8,
          name: 'Ukrainian (8)',
          countryFlag: 'ua',
          value: 'uk',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Arabic (4)',
          countryFlag: 'sa',
          value: 'ar',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (48)',
          count: 48,
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Japanese (4)',
          countryFlag: 'jp',
          value: 'ja',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (25)',
          count: 25,
          value: 'cs',
          countryFlag: 'cz',
          __typename: 'LanguageFilter',
        },
        {
          count: 31,
          name: 'Portuguese (31)',
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Bulgarian (3)',
          countryFlag: 'bg',
          value: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (26)',
          count: 26,
          value: 'el',
          countryFlag: 'gr',
          __typename: 'LanguageFilter',
        },
        {
          count: 12,
          name: 'Croatian (12)',
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (4)',
          count: 4,
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (2)',
          count: 2,
          value: 'lv',
          countryFlag: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Finnish (5)',
          count: 5,
          value: 'fi',
          countryFlag: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Icelandic (1)',
          countryFlag: 'is',
          value: 'is',
          __typename: 'LanguageFilter',
        },
        {
          count: 14,
          name: 'Slovak (14)',
          countryFlag: 'sk',
          value: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovenian (4)',
          count: 4,
          value: 'sl',
          countryFlag: 'si',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hebrew (18)',
          count: 18,
          value: 'he',
          countryFlag: 'il',
          __typename: 'LanguageFilter',
        },
      ],
      customerTypeFilter: [
        {
          name: 'All (935)',
          count: 935,
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (107)',
          count: 107,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 461,
          name: 'Couples (461)',
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 157,
          name: 'Groups of friends (157)',
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 210,
          name: 'Solo travelers (210)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 136,
          name: 'Business travelers (136)',
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      reviewsCount: 935,
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Polina, \nThank you for your kind words! We are delighted to hear that you enjoyed the exceptional view, cleanliness, perfect location, and the lovely staff. Your satisfaction is our top priority. We look forward to welcoming you back soon! \nWith regards,\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: [
            {
              urls: [
                {
                  size: 'max1280x900',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/max1280x900/328758429.jpg?k=b1dd8fa7ac7b537b5cecd6380bcfb95d74c6b6abc06db7f9c6222c5d14c8d342&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square80',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/square80/328758429.jpg?k=b1dd8fa7ac7b537b5cecd6380bcfb95d74c6b6abc06db7f9c6222c5d14c8d342&o=',
                  __typename: 'ReviewPhotoUrl',
                },
                {
                  size: 'square160',
                  url: 'https://r-xx.bstatic.com/xdata/images/xphoto/square144/328758429.jpg?k=b1dd8fa7ac7b537b5cecd6380bcfb95d74c6b6abc06db7f9c6222c5d14c8d342&o=',
                  __typename: 'ReviewPhotoUrl',
                },
              ],
              id: 328758429,
              kind: 'PROPERTY',
              __typename: 'ReviewPhoto',
            },
          ],
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-04-01',
            __typename: 'BookingDetails',
            checkinDate: '2024-03-28',
            numNights: 4,
            roomId: 7530309,
            roomType: {
              name: 'Twin Room',
              id: '7530309',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a27d108f098c07a9',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/1438422966208612/picture?type=square&height=64&width=64',
            countryCode: 'il',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Israel',
            guestTypeTranslation: 'Couple',
            username: 'Polina',
          },
          isApproved: true,
          reviewedDate: 1713694626,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'View from the hotel window to the city\nCleanliness\nPerfect location\nLovely staff',
            lang: 'xu',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Gayathri,\n\nThank you for your kind words. We are delighted that you enjoyed our friendly staff, neat rooms, and convenient location. It was a pleasure to have you with us.\n\nWe look forward to welcoming you back soon.\n\nBest regards,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-01',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-29',
            numNights: 3,
            roomId: 7530308,
            roomType: {
              name: 'Standard Double Room',
              id: '7530308',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'ee7c3d66625f0743',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/469911685409373/picture?type=square&height=64&width=64',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Gayathri',
          },
          isApproved: true,
          reviewedDate: 1725864443,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'The hotel staff were friendly and helpful and the rooms very were neat. The hotel has very good transport connections and the area is a very nice area full of tourist shops and restaurants.',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              "Dear Zsolt,\n\nThank you for sharing your experience with us. We are delighted to hear that you enjoyed our great location, parking garage, and the convenience of our 24/7 reception desk and bar. We strive to meet our guests' expectations and are pleased to know we succeeded during your stay.\n\nWe look forward to welcoming you back on your next visit.\n\nWarm regards,\n\nAnna F\nGeneral Manager",
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-17',
            numNights: 1,
            roomId: 7530308,
            roomType: {
              name: 'Standard Double Room',
              id: '7530308',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '77e89452056176ab',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-z.png',
            countryCode: 'rs',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Serbia',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Zsolt',
          },
          reviewedDate: 1725395986,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              "Well, it's all good. Nothing special, but you know what to expect from a budget hotel in the city center. Great location, parking garage, which is always a dealmaker there for me. They have a 24/7 reception desk and a bar pretty much all night. Not less and not more than I expected. Wasn't there for the first time and I'll be back. :)",
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Rui,\n\nThank you for your kind words about our outstanding staff.\n\nWe look forward to welcoming you back soon.\n\nWarm regards,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-09-01',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-31',
            numNights: 1,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '7530308',
            },
            roomId: 7530308,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'caec531491a6b8eb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
            countryCode: 'at',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Austria',
            guestTypeTranslation: 'Family',
            username: 'Rui',
          },
          isApproved: true,
          reviewedDate: 1725219107,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing',
            positiveText: 'Outstanding staff',
            title: 'I will be back',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              "Dear Mary, \n\nThank you for your kind words and for being a loyal guest of ibis Budapest Centrum over the past couple of decades. We are delighted to hear that you enjoyed our clean and comfortable facilities, as well as our great location. It is always our pleasure to provide exceptional service to our guests, and we are thrilled that Monika was able to assist you efficiently during your recent stay. Your feedback about our staff's kindness and helpfulness is truly appreciated. We are glad that our central location near tram and underground lines has been convenient for you.\n\nWe look forward to welcoming you back on your next visit to Budapest. \n\nBest regards, \n\nAnna F\nGeneral Manager",
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-30',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-21',
            numNights: 9,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '7530308',
            },
            roomId: 7530308,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8ece96a2fff21064',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh4.googleusercontent.com/-JVt2hJJJhQ4/AAAAAAAAAAI/AAAAAAAAAAA/APJypA0vVJVBChT3OcFp-RrLKX2Lc6aJUg/s96-c/photo.jpg',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United States of America',
            guestTypeTranslation: 'Group',
            username: 'Mary',
          },
          reviewedDate: 1725046828,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'The staff is what I like most (I have stayed at this hotel almost yearly for the past couple of decades. They are always so helpful. This year I would like to shine a light on Monika, who quickly helped me get a refund for my cancellation of our last 3 nights due to my being ill and needing to return to the States. I have always had exceptional assistance from the crew at Ibis Centrum. The other big draw for me is location in the heart of Budapest and close to tram and underground lines.',
            lang: 'xu',
            title:
              'Clean, comfortable, great location and kind and helpful staff. What more could you ask?',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Said,\n\nThank you for your positive review. We are delighted to hear that you enjoyed your stay with us. Your kind words about our staff and convenient location are truly appreciated. We will look into the room lighting matter.\n\nBest regards,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-24',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-20',
            numNights: 4,
            roomType: {
              name: 'Standard Double Room',
              id: '7530308',
              __typename: 'RoomTranslation',
            },
            roomId: 7530308,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '344d10bf311e09c4',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United States of America',
            guestTypeTranslation: 'Couple',
            username: 'Said',
          },
          isApproved: true,
          reviewedDate: 1724595882,
          textDetails: {
            negativeText: 'Not efficient lighting in the room.',
            textTrivialFlag: 0,
            lang: 'xu',
            title: 'We enjoyed our stay, best 3 star hotel!',
            positiveText:
              'Staff were very friendly and accommodating. Great location near center of town and public transportation.\nBig thanks to Adel for helping and answering all our questions.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Marius,\n\nThank you for your positive review. We are delighted to hear that you enjoyed our great location, friendly staff, breakfast, and clean rooms. Please note that the charges for the fridge and water warmer are in line with our hotel policies.\n\nWe hope to welcome you back soon.\n\nSincerely,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-20',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-17',
            numNights: 3,
            roomId: 7530310,
            roomType: {
              name: 'Double Room with Sofa Bed',
              __typename: 'RoomTranslation',
              id: '7530310',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '64eb0f498c08c9cd',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Romania',
            guestTypeTranslation: 'Family',
            username: 'Marius',
          },
          isApproved: true,
          reviewedDate: 1724498861,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'fridge and water warmer are available only against a charge from reception',
            positiveText:
              'Very friendly staff at reception ,Great breakfast ,very clean room ,comfortable bed',
            title: 'great location and quality for the money paid',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Nuzha, \n\nThank you for your feedback. We are delighted that you appreciated our location, cleanliness, and friendly staff. We apologize for the inconvenience regarding the small bathroom size and the absence of a kettle in the room.\n\nWarm regards,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-17',
            numNights: 1,
            roomType: {
              name: 'Standard Double Room',
              id: '7530308',
              __typename: 'RoomTranslation',
            },
            roomId: 7530308,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c24e61d4752b7410',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocIcBMhnIgMPbKhR5oXT8LgAUJn8ArYYb_RmmZtMM_q6kMvd=s96-c',
            countryCode: 'il',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Israel',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Prof',
          },
          isApproved: true,
          reviewedDate: 1724352637,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'The path room is so small \r\nThere are no kettle in the room 😕',
            positiveText:
              'The location is excellent,  the rooms are clean  and the staff are friendly',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Gülşen Hüner,\n\nThank you for your positive feedback regarding our nice, comfortable, safe, and clean hotel. We are glad you enjoyed the cleanliness and comfort of your room as well as our convenient central location. We appreciate your feedback regarding the pricing and the additional charges for a kettle and mini fridge. Please accept our apologies for the inconvenience caused by the elevator issue. We will address this matter promptly.\n\nWe hope to welcome you back to ibis Budapest Centrum in the future.\n\nWarm regards,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-08-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-12',
            numNights: 4,
            roomId: 7530308,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '7530308',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8e35e0b99f657b71',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Turkey',
            guestTypeTranslation: 'Solo traveler',
            username: 'Gülşen',
          },
          isApproved: true,
          reviewedDate: 1723918981,
          textDetails: {
            negativeText:
              'A bit pricey considering Budapest prices and also you can’t have kettle and mini fridge at your room. (If you want, 7-8 euros per day) \nThere was some issues with one of the elevators so people had to wait the only elevator.',
            textTrivialFlag: 0,
            title: 'It was nice, comfortable, safe and clean.',
            lang: 'xu',
            positiveText:
              'The room was very clean and comfy. The location couldn’t be better. Right in the center. There was a smart tv, easy to use with many apps like youtube, disney+ etc.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Mcrristi,\n\nThank you for your positive feedback! We are thrilled to hear that you found everything exceptional during your stay. We look forward to welcoming you back soon.\n\nBest regards,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-12',
            numNights: 2,
            roomId: 7530308,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '7530308',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '88f34dda4790645d',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Mcrristi',
          },
          isApproved: true,
          reviewedDate: 1723701426,
          textDetails: {
            negativeText: '-',
            textTrivialFlag: 0,
            lang: 'en',
            title: null,
            positiveText: 'Everything',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Theresa,\n\nThank you for your kind words and positive feedback. We are delighted to hear that you had a perfect experience with us. Your satisfaction is our top priority, and we will continue to provide excellent service.\n\nWe look forward to welcoming you back soon.\n\nBest regards,\n\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-01',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-29',
            numNights: 2,
            roomId: 7530308,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '7530308',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '3daf09cc3fefc58a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/837604886577383/picture?type=square&height=64&width=64',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Theresa',
          },
          isApproved: true,
          reviewedDate: 1722268220,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Continue to do what you do best',
            positiveText: 'Everything was perfect',
            lang: 'en',
            title: 'Very satisfied',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Iluta,\n\nThank you for your positive review! We are delighted to hear that you enjoyed our friendly staff, parking facility, as well as the cleanliness of our hotel.\n\nWe look forward to welcoming you back soon. \n\nBest regards,\nAnna F\nGeneral Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-06-24',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-22',
            numNights: 2,
            roomType: {
              name: 'Standard Double Room',
              id: '7530308',
              __typename: 'RoomTranslation',
            },
            roomId: 7530308,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c97300aef7452c71',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/672239142920695/picture?type=square&height=64&width=64',
            countryCode: 'lv',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Latvia',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Iluta',
          },
          isApproved: true,
          reviewedDate: 1722251763,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'en',
            title: null,
            positiveText:
              'EverythinFriendly staff, parking included in the price, free coffee and water in the lobby, clean, fragrant.g was very good!',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              "Dear Teodora,\n\nThank you for recommending us and sharing your positive experience. We are delighted to hear that you enjoyed our convenient location, modern rooms, and good breakfast selection. We appreciate your feedback regarding the additional charges for the fridge and coffee in the room, and we will take it into consideration. We strive to offer a high-quality service that matches our guests' expectations.\n\nWarm regards,\n\nAnna F\nGeneral Manager",
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-22',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-18',
            numNights: 4,
            roomId: 7530308,
            roomType: {
              name: 'Standard Double Room',
              id: '7530308',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '57b1cade0dde6f2f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-t.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Teodora',
          },
          isApproved: true,
          reviewedDate: 1721709595,
          textDetails: {
            negativeText:
              'The fact that you have to pay daily for a fridge and coffer in the room is kind of annoying, due to the fact that the hotel is not cheap at all.',
            textTrivialFlag: 0,
            title: 'Nice stay, really recommend',
            lang: 'en',
            positiveText:
              'The location is perfect, near to the city centre. Also, many choices for eating near the hotel. The rooms are almost new, minimalistic. The breakfast is good.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-13',
            numNights: 1,
            roomType: {
              name: 'Standard Double Room',
              id: '7530308',
              __typename: 'RoomTranslation',
            },
            roomId: 7530308,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c0f70d5b09b25866',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'cn',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'China',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Marcos',
          },
          reviewedDate: 1721560021,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: '.',
            positiveText: 'Clean room\nNice breakfast',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-12',
            numNights: 2,
            roomType: {
              name: 'Standard Double Room',
              __typename: 'RoomTranslation',
              id: '7530308',
            },
            roomId: 7530308,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c1ede0cfcd1e3b12',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-a.png',
            countryCode: 'bg',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Bulgaria',
            guestTypeTranslation: 'Couple',
            username: 'Annie',
          },
          reviewedDate: 1721029955,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'The toilet in the room was too close to the bathroom wall.',
            positiveText:
              'Room was very clean, bed was comfortable, also breakfast was very nice.  Perfect location for exploring Budapest, plenty of shops and restaurants near by too. Nothing to complain about.',
            lang: 'en',
            title: 'Nice stay in Budapest',
            __typename: 'TextDetails',
          },
        },
      ],
      timeOfYearFilter: [
        {
          count: 935,
          name: 'All (935)',
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 935,
    },
    review_score: 8.5,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041399,
    number_of_rooms: 0,
    stars: 3,
    address: '1092, Budapest, Raday utca 6',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 0,
    location: {
      longitude: 19.0622824430466,
      latitude: 47.4885896259422,
    },
    zip: '1092',
    hotel_description:
      'Ibis Budapest Centrum ligger blot 50 m fra Kalvin Ter Metrostation (linje 3 og 4) og 300 m fra Ungarns Nationalmuseum. Hotellet har gratis WiFi og haveterrasse. Samtlige værelser har aircondition, eget badeværelse og satellit-tv. Budapest Centrum Ibis har døgnåben bar, som serverer lettere anretninger og et bredt udvalg af drinks. Der er blot få meter fra hotellet til adskillige restauranter og caféer. Hotellet ligger blot 50 m fra stoppesteder for sporvognslinje 47, 48 og 49.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kæledyr tilladt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Business-center',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjvask',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjrens',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Handicapvenlig',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Strygning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Hurtig ind-/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lydisolerede værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Allergivenligt værelse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Hæveautomat findes inde på ejendommen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Snackbar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fælles opholdsrum/tv-område',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkeringshus',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Handicapparkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vin/champagne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Café på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tyverialarm',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for levering af mad til værelser/enheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Etablerede procedurer til sundhedstjek af gæsterne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kontaktløs indtjekning/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Afskærmning mellem personale og gæster på relevante områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Takeaway-beholdere til morgenmad',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikker dækning af mad ved levering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overnatningsstedet tilbyder termometre til gæsterne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæsterne har adgang til mundbind',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497528964.jpg?k=d06c0b8bf4f33cc0cb3d804997e7c229837dcc7642f0f27c4e8bbd6b33573375&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499671507.jpg?k=06d779664f78cf8ea24334c3f70ed19f1300ec10ff0e7206ea0cf8fd26149d47&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064261.jpg?k=78ed5d71cb6e8a6f0707e4f70b6e11931824cc7e704fd87513e6ff91563348af&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064275.jpg?k=27b26d95119c77c7ac2c34f100ca05b5252df4413e006a93236ad94fb35296c9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064280.jpg?k=d4e79310e1b63dd71eedaa5197a0be3e97f38b017c8c8cab2520b0ef9275697b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064282.jpg?k=ae5ec493eb5340bbd069222a4d091d0d4353ce8d821b09f3a2ca99ab2014f18d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541385.jpg?k=ab99f514e4e66e0ef310e5158f930d10c5a096ea0c25d1c02cb3c2e0d62039dc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541389.jpg?k=ddb14e7c26d65661909c9a4e543c11aaa7e534d33435bf46c22a8b7c0c0fff66&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498104422.jpg?k=9288734a6875b1879df246b41458f476a125515bcc159ee339e4ccf3068db761&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498104421.jpg?k=fe5fdb5c804c6289a12c457c2d8755fbd763f777ba798200602d9aff7f5e0753&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499671514.jpg?k=cd331cd10c5206c419146c7e1b1835c47a434f5b22be3ab71892176fb2a64374&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/497528961.jpg?k=ee50d7d14e0aa72ffa696af96efc277d1a5d3fdcfce6bd90229fe27cf8fb1797&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499671521.jpg?k=16bfa3de9392f812e4a94a6eeab58fee105cef496c00d9de31cd16b38d71fe56&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541430.jpg?k=97c60f5d3a731cb00e67bec73f1f0f59babaed793c25ecbaccd6a5c4cf427bf5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541438.jpg?k=53b895b87fe3d996e605af27657687ea36f8e0f2b6e8eaf266bdab9c0b78f86d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541444.jpg?k=677bc2e83c9569a5f772d48d5e3ca889c0bada213ed486aa7c9b582fbdee8bf6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541451.jpg?k=d36b4ed7b889b70056aea97a9a954248ecb363e05b0fe4972f9813e92aa8c91a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541455.jpg?k=9600dbd0a98a717d1cf7dd12ddc0f73f9e92af7f97cd028d9fbdd9ee0ec3334d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/485541459.jpg?k=9c53206bc236d33f08623f468094783efa82b73acf062ae6aa3cd8384bde8c85&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499671522.jpg?k=4d17e7b35453774aaf26d52e0df797ac287226cac55796dc43f4901ecb61939c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064290.jpg?k=21fca07bc93920793e232757cef2bb21463a8a088c5255da91f0c708f3d045ad&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064301.jpg?k=4ab36cdf169af8ba39421201757368d42cef73c3de0fc1d41f3478e429ca7ccc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064304.jpg?k=e8c95fc4fda64bda9bb82eac104e6a36cfeacea13ed51edfe13ad24b2faf7cbc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499671523.jpg?k=96f7f262cf579376c26aa7c166979464c094e5fcec52e3f4e6b068544925f590&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499671526.jpg?k=6b082c9d7c6cd4defb98d151bb0385c4ed191b73b1eab0d89b6012c29dee98c3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499671531.jpg?k=fc795fcd447440e0a1526d5b74fdffa53c26046242bde6514e47c1fd79b78695&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/500148860.jpg?k=0ded6fc3f6f1ce7e9aa6ad53850a35a7b41d4e7d87cdc192edf6c519a729e9d0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/565984889.jpg?k=4b5551fb4be0a6ef395ef24fc2cb87101e22173d9e6472f896f54aca0de27a4f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498616629.jpg?k=12bd81339cff3d34e99edb8d19f0ea73347de31b2dc87d175370ca59864c0b81&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/499064306.jpg?k=6c4a04c6197b68aabe6c091c1cefee1a332bdfc3e0fa08e89c7c6a0511d2a31e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/565984902.jpg?k=2cefd1a101c872b12d06c7708a37c861729cfece1730e5416a9ff566a7b3d4d4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/565984908.jpg?k=32479b9eacb5f4c74725aba1a8ba9186d2c3be11ec61f5ed7bc09c51746a0532&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/449344238.jpg?k=657202292cd1bfbf9df50944e22a25955549e69f0f0330171a9382ae4629cdce&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/449344242.jpg?k=32b95e47096b2adb0a91aab3f2bb691a9b9476d2d9b80a5691c84e92e4776ab4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/490928039.jpg?k=5dd8c45496b4c490d7df5743dfd943cd452991728320800067ba8c75a6aaab45&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/490937092.jpg?k=70769f2e170c432130ee1e5c16d8034f2548dfb1ed391ea748cabbb1f2a01c83&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/449344183.jpg?k=b88f84c40f20c44483150f14914401eeb2a7825c13b0f50c27ef551c5ee879df&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/490927929.jpg?k=481ed53ca429b5b8a3cd70614b19db52547be1744b8b60317e3d72f1a8d0c138&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/490927944.jpg?k=27ca57095e5616299a3d24897f5ffe8f5edc4d467868d32519ca02964dfbe435&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498360636.jpg?k=4cd26776d041bd706d8c0e5be9c4b3da859240b733058be5d5e3decfbedfed46&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498360633.jpg?k=36280a71ca745a1fba7e85afec8e88b71c003fea9946f35109dc8e54131bc773&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498360654.jpg?k=e5c4736ff6c4f0d7e2f204b414020dced16230f79f065362181c97dbc767d582&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498360660.jpg?k=ddbc9d4d6f247da26494b1b53d038c097d49310bff942782cd0f24d9f6d82f1e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498360662.jpg?k=6306fff0ea5c73d6dc34655236f54c107e1d8dc7f9984a491daa04aac4a46191&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/498360680.jpg?k=58fab1837106b5c3ae543692f07a91a368de3bcd0dfc71fb8a6fce842e6789aa&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 0,
      max_n_people: 0,
      rooms: [],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'HOTELSTON',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0,
    price_without_discount: 173.8065,
    price_increased: true,
    price_decreased: false,
    price_diff: 39.68,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Full Moon Budapest',
    street_address: 'Szent István körút 11.',
    city: 'Budapest',
    zip_code: '1055',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/full-moon-design-hostel-budapest.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 170.5,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 170.4978,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 170.4978,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 17.776586245557056,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776431.jpg?k=cd8a428c9f10daac5846d0c4c63ce7bcbf3e819b866c8133c6414df01616c553&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          name: 'All (2054)',
          count: 2054,
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Wonderful: 9+ (649)',
          count: 649,
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 784,
          name: 'Good: 7-9 (784)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 335,
          name: 'Fair: 5-7 (335)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 160,
          name: 'Poor: 3-5 (160)',
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 126,
          name: 'Very Poor: 1-3 (126)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          name: 'Location',
          isSelected: false,
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Room',
          translation: {
            name: 'Room',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_room',
          },
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Noise',
            id: 'topic_noise',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Noise',
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Loud',
          translation: {
            name: 'Loud',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_loud',
          },
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Clean',
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Breakfast',
          isSelected: false,
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bed',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bed',
          },
          isSelected: false,
          name: 'Bed',
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Bathroom',
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bar',
            id: 'topic_bar',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Bar',
          id: 271,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Towel',
          translation: {
            name: 'Towel',
            id: 'topic_towel',
            __typename: 'ReviewTopicTranslation',
          },
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Lift',
          translation: {
            name: 'Lift',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_lift',
          },
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Shower',
          translation: {
            name: 'Shower',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_shower',
          },
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Window',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_window',
          },
          name: 'Window',
          isSelected: false,
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          name: 'Quiet',
          isSelected: false,
          translation: {
            name: 'Quiet',
            id: 'topic_quiet',
            __typename: 'ReviewTopicTranslation',
          },
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Toilet',
            id: 'topic_toilet',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Toilet',
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bus',
            id: 'topic_bus',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Bus',
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Cold',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_cold',
          },
          isSelected: false,
          name: 'Cold',
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Restaurant',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_restaurant',
          },
          name: 'Restaurant',
          isSelected: false,
          id: 273,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'View',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_view',
          },
          name: 'View',
          isSelected: false,
          id: 257,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Stairs',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_stairs',
          },
          name: 'Stairs',
          isSelected: false,
          id: 286,
          __typename: 'TopicFilter',
        },
        {
          name: 'Suite',
          isSelected: false,
          translation: {
            name: 'Suite',
            id: 'topic_suite',
            __typename: 'ReviewTopicTranslation',
          },
          id: 278,
          __typename: 'TopicFilter',
        },
        {
          name: 'Heat',
          isSelected: false,
          translation: {
            name: 'Heat',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_heat',
          },
          id: 291,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Check-in',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_checkin',
          },
          isSelected: false,
          name: 'Checkin',
          id: 298,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          translation: 'Staff',
          name: 'hotel_staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.80970001220703,
          },
          value: 8.68802165985107,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            ufiScoreHigherBound: 9.61482429504395,
            __typename: 'UfiScoreAverage',
          },
          value: 7.27764129638672,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_clean',
          translation: 'Cleanliness',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 7.69685029983521,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 7.65270948410034,
          __typename: 'RatingScore',
        },
        {
          translation: 'Value for money',
          name: 'hotel_value',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 7.67953777313232,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            ufiScoreHigherBound: 9.3919506072998,
            __typename: 'UfiScoreAverage',
          },
          value: 8.7825231552124,
          __typename: 'RatingScore',
        },
        {
          translation: 'Free Wifi',
          name: 'hotel_free_wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 7.97413778305054,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      customerTypeFilter: [
        {
          name: 'All (2054)',
          count: 2054,
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (658)',
          count: 658,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Couples (537)',
          count: 537,
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (576)',
          count: 576,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 283,
          name: 'Solo travelers (283)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Business travelers (116)',
          count: 116,
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      languageFilter: [
        {
          name: 'All (2054)',
          count: 2054,
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          count: 19,
          name: 'Danish (19)',
          value: 'da',
          countryFlag: 'dk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (531)',
          count: 531,
          value: 'en',
          countryFlag: 'gb',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (140)',
          count: 140,
          countryFlag: 'de',
          value: 'de',
          __typename: 'LanguageFilter',
        },
        {
          count: 87,
          name: 'Polish (87)',
          countryFlag: 'pl',
          value: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          count: 118,
          name: 'Spanish (118)',
          value: 'es',
          countryFlag: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 7,
          name: 'Chinese (7)',
          countryFlag: 'cn',
          value: 'zh',
          __typename: 'LanguageFilter',
        },
        {
          count: 119,
          name: 'Russian (119)',
          countryFlag: 'ru',
          value: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 23,
          name: 'Swedish (23)',
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          count: 67,
          name: 'French (67)',
          countryFlag: 'fr',
          value: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 246,
          name: 'Italian (246)',
          countryFlag: 'it',
          value: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (39)',
          count: 39,
          value: 'ro',
          countryFlag: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          count: 37,
          name: 'Dutch (37)',
          countryFlag: 'nl',
          value: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Lithuanian (1)',
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Norwegian (6)',
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (9)',
          count: 9,
          countryFlag: 'kr',
          value: 'ko',
          __typename: 'LanguageFilter',
        },
        {
          count: 238,
          name: 'Hungarian (238)',
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Ukrainian (46)',
          count: 46,
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Arabic (4)',
          countryFlag: 'sa',
          value: 'ar',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (19)',
          count: 19,
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Japanese (2)',
          value: 'ja',
          countryFlag: 'jp',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (87)',
          count: 87,
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          count: 35,
          name: 'Portuguese (35)',
          value: 'pt',
          countryFlag: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Bulgarian (4)',
          countryFlag: 'bg',
          value: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          count: 40,
          name: 'Greek (40)',
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Croatian (13)',
          count: 13,
          value: 'hr',
          countryFlag: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (16)',
          count: 16,
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Latvian (2)',
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Finnish (7)',
          count: 7,
          value: 'fi',
          countryFlag: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovak (53)',
          count: 53,
          value: 'sk',
          countryFlag: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Estonian (3)',
          countryFlag: 'ee',
          value: 'et',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Catalan (3)',
          count: 3,
          countryFlag: 'catalonia',
          value: 'ca',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovenian (5)',
          count: 5,
          value: 'sl',
          countryFlag: 'si',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hebrew (21)',
          count: 21,
          value: 'he',
          countryFlag: 'il',
          __typename: 'LanguageFilter',
        },
      ],
      reviewsCount: 2053,
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2023-05-28',
            __typename: 'BookingDetails',
            checkinDate: '2023-05-25',
            numNights: 3,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              __typename: 'RoomTranslation',
              id: '105684407',
            },
            roomId: 105684407,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '7b56bc78d4a161ce',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/10215559092705373/picture?type=square&height=64&width=64',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Family',
            username: 'Sangamesh',
          },
          reviewedDate: 1685302487,
          isApproved: true,
          textDetails: {
            negativeText: 'na',
            textTrivialFlag: 0,
            title: 'Excellent Trip',
            positiveText: 'Neat & Clean with good location',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-11',
            numNights: 2,
            roomId: 105684403,
            roomType: {
              name: 'Double Room',
              id: '105684403',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd785e1fb9eb1b358',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
            countryCode: 'hr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Croatia',
            guestTypeTranslation: 'Group',
            username: 'Rosana',
          },
          isApproved: true,
          reviewedDate: 1723576971,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            title: null,
            positiveText:
              'This was our second time in the hotel and it was again amazing experience!',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-05',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-02',
            numNights: 3,
            roomId: 105684403,
            roomType: {
              name: 'Double Room',
              __typename: 'RoomTranslation',
              id: '105684403',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '2b037bb766923d8c',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-b.png',
            countryCode: 'cr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Costa Rica',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Bry',
          },
          reviewedDate: 1722928497,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'In the beginning, we were receiving a room already in use. Then we received a really smaller room, but after complaining,  we received a bigger room, which was fine',
            textTrivialFlag: 0,
            title: 'Good location and service',
            positiveText:
              'Location, good access to public transportation, staff and breakfast service',
            lang: 'xu',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-30',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-28',
            numNights: 2,
            roomType: {
              name: 'Quadruple Room',
              __typename: 'RoomTranslation',
              id: '105684406',
            },
            roomId: 105684406,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '1039e0275e138cbf',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Turkey',
            guestTypeTranslation: 'Family',
            username: 'Ramazan',
          },
          isApproved: true,
          reviewedDate: 1722596845,
          textDetails: {
            negativeText: 'Nothing,',
            textTrivialFlag: 0,
            title: 'Good location and reasonable price',
            positiveText:
              'The location was very good. The staff was very friendly and helpful.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-04-27',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-25',
            numNights: 2,
            roomId: 105684403,
            roomType: {
              name: 'Double Room',
              __typename: 'RoomTranslation',
              id: '105684403',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9e7cdb609bb365d3',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Moises',
          },
          reviewedDate: 1721459196,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'I wish they had a bit more variety in the breakfast. Although, the staff were really friendly and sweet.',
            lang: 'en',
            title: 'Nice place to stay',
            positiveText:
              'The hotel was located well within the walking distance of major attractions. The room was located above the disco but we didn’t hear much noise. I wish the shower was a bit better and spacious.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-04-21',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-19',
            numNights: 2,
            roomId: 105684407,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              id: '105684407',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '52f2600bb8906da6',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/1133266786785351/picture?type=square&height=64&width=64',
            countryCode: 'lv',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Latvia',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Valerija',
          },
          isApproved: true,
          reviewedDate: 1720612571,
          textDetails: {
            negativeText:
              'There is a club in the same building, so if you don’t like to party choose another hotel or wear earplugs.',
            textTrivialFlag: 0,
            positiveText:
              'The location is amazing, very good breakfast. There is a club right next door, which had great music, so if you came to Budapest for partying - it is the best hotel to choose!',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-06-19',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-17',
            numNights: 2,
            roomId: 105684403,
            roomType: {
              name: 'Double Room',
              id: '105684403',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '942c6a71c87cf05a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
            countryCode: 'hr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Croatia',
            guestTypeTranslation: 'Group',
            username: 'Rosana',
          },
          reviewedDate: 1718858111,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'Firstly, I would like to point out that the lady at the desk was so nice and polite! The club is within the hotel so you can go and have fun if you want, you can hear bass in the room but nothing too loud. Love it and will definitely come back! :)',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-09',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-07',
            numNights: 2,
            roomId: 105684407,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              __typename: 'RoomTranslation',
              id: '105684407',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '6e5238dab68def67',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Slovakia',
            guestTypeTranslation: 'Family',
            username: 'Veronika',
          },
          reviewedDate: 1717959736,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Bad lamps were a bit too weak in the light power',
            lang: 'en',
            positiveText: 'The room style was nice',
            title:
              'We have been there couple of times and it’s very  nice everytime',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-05-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-25',
            numNights: 3,
            roomType: {
              name: 'Quadruple Room',
              id: '105684406',
              __typename: 'RoomTranslation',
            },
            roomId: 105684406,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'de2c07b0d962b5ca',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GisaxK0r3kGjXuzPZ21I5ZqEzdFD57gVezwBp-I=s96-c',
            countryCode: 'ie',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ireland',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Nolan',
          },
          isApproved: true,
          reviewedDate: 1717056146,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'The only thing we found was the aircon in the room was not working properly as it was very warm weather...but excellent otherwise',
            lang: 'en',
            positiveText:
              'Overall, we had a great time. Hotel was excellent and clean and would recommend to any group of people of any age',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-05-27',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-23',
            numNights: 4,
            roomId: 105684407,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              __typename: 'RoomTranslation',
              id: '105684407',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '07c3e4dd679be969',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Group',
            username: 'Gareth',
          },
          reviewedDate: 1716966641,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Room amenities such as tea/coffee would have been good',
            lang: 'en',
            title: 'Just ideal for our group stay in Budapest',
            positiveText: 'Good location and value for money.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-19',
            numNights: 4,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              __typename: 'RoomTranslation',
              id: '105684407',
            },
            roomId: 105684407,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'e437dbf5734c9118',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Kenneth',
          },
          reviewedDate: 1716886442,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            title: 'I would highly recommend this hotel',
            positiveText:
              'Staff were very friendly and helpful. Most comfortable hotel beds we have experienced. Location was perfect for all the main sites and 5 minutes from the river.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-04-30',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-27',
            numNights: 3,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              __typename: 'RoomTranslation',
              id: '105684407',
            },
            roomId: 105684407,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '6e2a25987f0502cb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AEdFTp4aI2zefpguLO34DYdgLu0Mt1c-n4oQvZQVI478=s96-c',
            countryCode: 'xk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Kosovo',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Adelina',
          },
          reviewedDate: 1715026332,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Very noisy at night time because there is a night club on the ground.\nI would recomend this hotel only if your room is on the first floor on the part where the reception is. Otherwise the rooms on the second and third floor are very noisy during the night every day of the week except Sunday til 6am. \nThere were no amenities, like shampoos. \nThere was no fridge in the room but you can use a fridge that was a shared one. \nThe pillow was not comfortable because it was to hard. \nThe girl that was at the reception on our last night of stay was not helpful at all. We asked her to book us a Bolt Taxi to the Budapest Deli station and she refused because she said they had a taxi they usually call, but she was not able to tell us how much would that cost us. And when we said can you call them and ask them how much would the transfer to the station be, she said no because the taxi driver is sleeping (it was 1am) hahahha. So we decided to not get a taxi at all and use public transport to get there. \nHaving the room on the first flour is i bit challenging for smokers as you should go outside the building for smoking, while the second and third flour have smoking area.',
            lang: 'en',
            positiveText:
              'It was very well located close to the metro station. The staff was very nice. Good access to public transport. The room was clean and big enough and the beds were comfortable. Good restaurants near by. The area where the hotel is located is very safe even during late night hours. \nThe staff was very helpfull, on the second day of our stay we had a problem with the curtains, they fell off and ceiling was 3 meters high so they could’t fix it during the day. After our request the staff changed our room from third floor to the first floor because it was Sunday and they couldn’t fix it. We were happy this happened to us because we got a better room and quite one.\nThe girl that was at the reception on our arrival was very helfull and kind. Also the young boy at the reception was very helpfull and kind with our requests.',
            title: 'Good place, good location, very noisy in the night',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-04-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-26',
            numNights: 2,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              id: '105684407',
              __typename: 'RoomTranslation',
            },
            roomId: 105684407,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '166f74c3af847263',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
            countryCode: 'rs',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Serbia',
            guestTypeTranslation: 'Group',
            username: 'Vigan',
          },
          reviewedDate: 1714332562,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Was very noisy during the night , disco in the first floor 🤦🏻‍♂️',
            lang: 'en',
            positiveText:
              'Worth it for the money , cuz was in the in city center and cheap.',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2023-12-03',
            __typename: 'BookingDetails',
            checkinDate: '2023-12-02',
            numNights: 1,
            roomId: 105684407,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              __typename: 'RoomTranslation',
              id: '105684407',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '38c221ef253ab2c4',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/xdata/images/xphoto/square64/39762728.jpg?k=829b1e10b35c565d509f7b462f50e439d89fb4dbd8b14684643d77b43bf16620&o=',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Turkey',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Ahmet',
          },
          reviewedDate: 1701797970,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            title: null,
            positiveText:
              'Location 10 \nComfort and Cleaning 10 \nPrice/ Performance 10 \nIf you like clubs, again it is 10',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2023-11-19',
            __typename: 'BookingDetails',
            checkinDate: '2023-11-17',
            numNights: 2,
            roomType: {
              name: 'Double Room with Extra Bed (3 Adults)',
              id: '105684407',
              __typename: 'RoomTranslation',
            },
            roomId: 105684407,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '09ba86c35977e2d2',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GiisokpdAwpfallZh-j5HxVmY_fP42SMWxflHy5=s96-c',
            countryCode: 'in',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'India',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Dinesh',
          },
          isApproved: true,
          reviewedDate: 1700461909,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Bit noisy sometimes because of the ground floor club.. Keeping soap in the bathroom will be nice.',
            lang: 'en',
            title: 'Comfortable place with good location',
            positiveText: 'The location, the staff, and the facility..',
            __typename: 'TextDetails',
          },
        },
      ],
      timeOfYearFilter: [
        {
          name: 'All (2054)',
          count: 2054,
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Jun–Aug',
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 7,
      nr_reviews: 2054,
    },
    review_score: 7.2,
    review_score_word: 'Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18040718,
    number_of_rooms: 0,
    stars: 3,
    address: 'Szent István körút 11.',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 0,
    location: {
      longitude: 19.0503200000001,
      latitude: 47.512051,
    },
    zip: '1055',
    hotel_description:
      "Located in the heart of Budapest and just around the corner from the banks of the Danube River, Full Moon Budapest offers air-conditioned, en suite rooms, and free WiFi access. Each private room at Full Moon is equipped with a flat-screen smart TV. Each room has an en-suite bathroom. Several supermarkets and restaurants can be found within the immediate vicinity of the Full Moon Budapest. Shops on nearby streets offer countless opportunities for shopping. The Morrisons Music Pub 2 is located inside the same building. All guests benefit from free access to this music pub. The Jászai Mari tér Tram Stop is 200 metres away, where trams stop 24 hours a day (line 4 and 6). The hotel is 450 metres from the Margaret Island, 900 metres from the Parliament, 1.3 km from the St. Stephen's Basilica and 1.5 km from the Chain Bridge. The WestEnd City Center Shopping Centre is 900 metres away.",
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Kæledyr tilladt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Møde-/festlokale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Terrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Strygning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lydisolerede værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sightseeingskranke',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Natklub/DJ',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat ind-/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særlige diæter (efter forespørgsel)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fælles køkken',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Skabe',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fælles opholdsrum/tv-område',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Børnevenlig buffet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Frugt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Havemøbler',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tyverialarm',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera udenfor overnatningsstedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kontaktløs indtjekning/udtjekning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Afskærmning mellem personale og gæster på relevante områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776431.jpg?k=cd8a428c9f10daac5846d0c4c63ce7bcbf3e819b866c8133c6414df01616c553&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779575.jpg?k=8b617d5f50efa1a56712d71a1e42ab671f0dd0b27f1638b509326987a0a4a5e8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339774974.jpg?k=83cae30900d2df1f12481afb521820a8926a698106233dce8fa6a660a3d2c054&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/70313084.jpg?k=4582787d48e138e55d96456200bec47ce121ffc431c6f65ae553c5e8cfce6878&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339777491.jpg?k=d9272858f40c7fd3d93764cfc57bf3cdc12ef7634694a161a2ed62ece3b55fec&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776427.jpg?k=e58af9ebd0d23beda7deb4a33f24b54386217477c7c9d03d78ea6a17ff259642&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339774721.jpg?k=0c58aa7d446ffcea03e8c910e8fe6905626fc587380c24947f6917e906fde604&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776418.jpg?k=15a8f3ae1837229005cb79b2e1d4705ae01bdb8400581c4ae78afa986214ef88&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776433.jpg?k=9e55897bfa9b1d5f0dbb0ae40cb549a194c45f0e5017160888c99a5a7fcd0b71&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776419.jpg?k=85cc5b9e163d095e48b85ac10a7f46f295587597b498c8e5fa2bfe1aab79a59d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/329070917.jpg?k=d0291da2040c8a029a8b387fc7329c72b676c488467dde8773c06e6b041d5c6f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339778315.jpg?k=38c74daf11884dad487fc209db6533d0526e3eaa0e51e54fff6f7acd40b0756e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339774726.jpg?k=aad5e81728dd3b65eb0a5f36c3c5918ab21105e66c4c899735eaf9b70d0c2f54&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339774719.jpg?k=7e35afea225f8544c6073f3d148461850a85276490637eb6191ecd4b6450dc98&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339774718.jpg?k=1505080aa09ca87af58b328eb45c1f6a4e16ca2f90e7827b608c9ded4b5d1171&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776434.jpg?k=a844ba12158efedcf94afe3793779c001f4300641f417a4313860867af96510b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776430.jpg?k=c9df38e8be3a13b95c16cf828b07748e5bbbeb16a67d31c5f70701d9da253a94&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776432.jpg?k=b5ebeabe8c73c63814875869575226abc407b826daa0b41d0f2819b2c9528afb&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776426.jpg?k=a286c595d3546433a3054ee9cb3861a8b312f14d7376646ef6f8c323d323c20b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776429.jpg?k=d967e5fca2726573d6a8c1f829fd29d260e80b8176e47c5b9d1f7e62dddf32f4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776417.jpg?k=c7745fcc484e6110caab46c7c923144c1888d2e9927d50d8049be14642e47780&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776422.jpg?k=8abfa2440e26c2ccba97b3d46c81a4f63d95ada227116f892dfc29b24c990873&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776421.jpg?k=6b8a722b6761fe92feabf55d02f75c9cd0a8d6fe5a6cab667c9eaf3bdc06b646&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776428.jpg?k=6ec944136cb085371afb3a745bdbd4f05253154e085529db981872a5ce24df14&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776423.jpg?k=b1137b7b895fcb7735b5bd903d0385c86ec8911f744e50959dc485e4b28a3a42&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776425.jpg?k=ca980b8b6392ffccf5a96e5addff423f3967ad421c7bd494b905eddc91fd1a78&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776424.jpg?k=e65c63362c75d084ab9ed003b33be51d6ac95dbb497d380079b9a8b44d9ac8f8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776415.jpg?k=950eda15ddb844541ac95a55aa701f350bd7454615e8447290355d2f034f5479&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776414.jpg?k=d549591f9b753d40ae3da1ee6eee66c4a33269b894ed8e46a98a954e52353ab5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776416.jpg?k=2ea114a655b4bfc9135a5747d5f4ddf65a0827b8b9b3745cc1f2165ff0611557&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776411.jpg?k=141f5c4e9b2f457a464a8e2eadd04febd1a735b41641522d47b6ba238c83780b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776412.jpg?k=3decf587e8481b454658a9e7636db6fabc3a2fd1e5476f9609c00c2ae8c2e0a4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339776413.jpg?k=ff3605ce491bdc1c95f900552b1b4ec4d62a51aab9f4b4477c052783ccb3871c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339777496.jpg?k=21213f1654dfb5e8f40612cbe8d18262147b8f91d90f4db578a7924444b1afaf&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339777490.jpg?k=64434b80d0abb82dc9676d764d4667b48e585a0cf6192172f4152d8865c1955e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339777487.jpg?k=b03b95aa1c92e8154b52e3fccb764cb4ef02f986ffc246c820794d45bcbfbe06&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779584.jpg?k=e2a02f6cc815078315cc837778d5c2dc6d848524aca04fb375ba37264fef92b2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779580.jpg?k=07995b6c5220847894cf592c1a96cdb4d85bb002a5ba36086ae6e7c9412714c0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779572.jpg?k=a16632a15dba1e5b366dd22e3a7c232eb104d77ab8c750e843b17666887bd7ca&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779571.jpg?k=4937795245f054de8528fc0264633e36917bdbd0672a767aba9bfc51f1bacd24&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779576.jpg?k=9174cd9b63a5a4bb8fe7ee8aba56fe35c72a793cd8190bf848dbe9bf9893271e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779577.jpg?k=99c4238d9bd9ba4581f0f14dfcc3c18d65fd2542b3e25a2f0a2c6475a626e07f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779568.jpg?k=da4ee04a43f0a74f75677c385dffdb093b78c6bff6922fc2ebf77dd19ba8ec8b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779570.jpg?k=6763576c4849002edd0405861c7b3a748c67bee4277f185bc53fb7916335a267&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/339779563.jpg?k=9541a7bc48aec7873f02713b03c5285c00362142033b8a51f40fe719124e67c1&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 0,
      max_n_people: 0,
      rooms: [],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'HOTELSTON',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0.41000000000000003,
    price_without_discount: 240.40189800000002,
    price_increased: true,
    price_decreased: false,
    price_diff: 36.37,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Corvin Plaza Apartments & Suites',
    street_address: 'Kisfaludy utca 3',
    city: 'Budapest',
    zip_code: '1082',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/corvin-plaza-apartments.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 159.45,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 159.45,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 159.45,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 17.765522703007395,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257998088.jpg?k=de9a3e74492706472b1b066dd7b3f302f4bb617f035b1fc235146ef6f8f4766f&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 1567,
          name: 'All (1567)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Wonderful: 9+ (825)',
          count: 825,
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 576,
          name: 'Good: 7-9 (576)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 107,
          name: 'Fair: 5-7 (107)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (34)',
          count: 34,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 25,
          name: 'Very Poor: 1-3 (25)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          isSelected: false,
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          name: 'Clean',
          isSelected: false,
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Kitchen',
          translation: {
            name: 'Kitchen',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_kitchen',
          },
          isSelected: false,
          id: 261,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          isSelected: false,
          translation: {
            name: 'Bathroom',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bathroom',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Towel',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_towel',
          },
          name: 'Towel',
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bus',
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          isSelected: false,
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          name: 'Quiet',
          isSelected: false,
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Noise',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_noise',
          },
          name: 'Noise',
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Shower',
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Loud',
          translation: {
            name: 'Loud',
            id: 'topic_loud',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          name: 'Checkin',
          translation: {
            name: 'Check-in',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_checkin',
          },
          isSelected: false,
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          name: 'Balcony',
          isSelected: false,
          translation: {
            name: 'Balcony',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_balcony',
          },
          id: 272,
          __typename: 'TopicFilter',
        },
        {
          name: 'Toilet',
          translation: {
            name: 'Toilet',
            id: 'topic_toilet',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Hot',
            id: 'topic_hot',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Hot',
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          name: 'Parking',
          translation: {
            name: 'Parking',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_parking',
          },
          isSelected: false,
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          name: 'View',
          translation: {
            name: 'View',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_view',
          },
          isSelected: false,
          id: 257,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Heat',
            id: 'topic_heat',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Heat',
          id: 291,
          __typename: 'TopicFilter',
        },
        {
          name: 'Cold',
          isSelected: false,
          translation: {
            name: 'Cold',
            id: 'topic_cold',
            __typename: 'ReviewTopicTranslation',
          },
          id: 285,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Window',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_window',
          },
          isSelected: false,
          name: 'Window',
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Luggage',
            id: 'topic_luggage',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Luggage',
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          name: 'Taxi',
          isSelected: false,
          translation: {
            name: 'Taxi',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_taxi',
          },
          id: 287,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          name: 'hotel_staff',
          translation: 'Staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 8.6051778793335,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 8.34304237365723,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_clean',
          translation: 'Cleanliness',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 8.52427196502686,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 8.55756855010986,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.25069999694824,
          },
          value: 8.6677417755127,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_location',
          translation: 'Location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 8.63357067108154,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 8.64035034179688,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      customerTypeFilter: [
        {
          count: 1567,
          name: 'All (1567)',
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 708,
          name: 'Families (708)',
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 177,
          name: 'Couples (177)',
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (622)',
          count: 622,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 60,
          name: 'Solo travelers (60)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Business travelers (79)',
          count: 79,
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      languageFilter: [
        {
          count: 1567,
          name: 'All (1567)',
          countryFlag: null,
          value: '',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Danish (8)',
          count: 8,
          value: 'da',
          countryFlag: 'dk',
          __typename: 'LanguageFilter',
        },
        {
          count: 431,
          name: 'English (431)',
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (69)',
          count: 69,
          value: 'de',
          countryFlag: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (66)',
          count: 66,
          value: 'pl',
          countryFlag: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Spanish (136)',
          count: 136,
          value: 'es',
          countryFlag: 'es',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Chinese (9)',
          count: 9,
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Russian (63)',
          count: 63,
          value: 'ru',
          countryFlag: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Swedish (13)',
          count: 13,
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (44)',
          count: 44,
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Italian (137)',
          count: 137,
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (87)',
          count: 87,
          value: 'ro',
          countryFlag: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (26)',
          count: 26,
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Lithuanian (1)',
          countryFlag: 'lt',
          value: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Norwegian (6)',
          count: 6,
          value: 'no',
          countryFlag: 'no',
          __typename: 'LanguageFilter',
        },
        {
          count: 5,
          name: 'Korean (5)',
          countryFlag: 'kr',
          value: 'ko',
          __typename: 'LanguageFilter',
        },
        {
          count: 196,
          name: 'Hungarian (196)',
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Thai (1)',
          count: 1,
          value: 'th',
          countryFlag: 'th',
          __typename: 'LanguageFilter',
        },
        {
          count: 33,
          name: 'Ukrainian (33)',
          countryFlag: 'ua',
          value: 'uk',
          __typename: 'LanguageFilter',
        },
        {
          count: 9,
          name: 'Arabic (9)',
          countryFlag: 'sa',
          value: 'ar',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (9)',
          count: 9,
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (63)',
          count: 63,
          value: 'cs',
          countryFlag: 'cz',
          __typename: 'LanguageFilter',
        },
        {
          count: 22,
          name: 'Portuguese (22)',
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Bulgarian (6)',
          count: 6,
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (21)',
          count: 21,
          value: 'el',
          countryFlag: 'gr',
          __typename: 'LanguageFilter',
        },
        {
          count: 14,
          name: 'Croatian (14)',
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (21)',
          count: 21,
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Latvian (3)',
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Finnish (2)',
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          count: 35,
          name: 'Slovak (35)',
          countryFlag: 'sk',
          value: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Estonian (1)',
          countryFlag: 'ee',
          value: 'et',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Catalan (2)',
          countryFlag: 'catalonia',
          value: 'ca',
          __typename: 'LanguageFilter',
        },
        {
          count: 8,
          name: 'Slovenian (8)',
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          count: 17,
          name: 'Hebrew (17)',
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
      ],
      reviewsCount: 1563,
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Guest,\nThank you for your nice comment.\nI hope to see you again.\nBest regards\nGábor Szabó\nFront Office Manager',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2022-08-01',
            __typename: 'BookingDetails',
            checkinDate: '2022-07-28',
            numNights: 4,
            roomType: {
              name: 'One-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '37863302',
            },
            roomId: 37863302,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'beb30dc3f6e00cba',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
            countryCode: 'ie',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Ireland',
            guestTypeTranslation: 'Group',
            username: 'Ross',
          },
          reviewedDate: 1659536478,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText: 'Big apartment and very clean, it was great overall!',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-21',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-17',
            numNights: 4,
            roomId: 37863302,
            roomType: {
              name: 'One-Bedroom Apartment',
              id: '37863302',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c8268e0e9a80cecf',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AAcHTteq785Wua86cWxAliYoIu3YEO0ZrgO6DezT1OY3hhex=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Alex',
          },
          reviewedDate: 1724413208,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Not all the rooms had fans/ac which made it very hot even at night',
            lang: 'en',
            positiveText: null,
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for the excellent rating! We are pleased that the location and the friendliness of the staff was to your liking! The AC in the apartments are crucial in these hot times! We are glad that you and your family had a great time with us and we are looking forward to host you again!',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-17',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-15',
            numNights: 2,
            roomType: {
              name: 'Two-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '37863303',
            },
            roomId: 37863303,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'dc53b66dd0fe0786',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh5.googleusercontent.com/-3r7DBfF4JLk/AAAAAAAAAAI/AAAAAAAAAAA/ACLGyWCvW9D4IeJnsR9XF31-UVJDf7FoWA/s96-c/photo.jpg',
            countryCode: 'si',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Slovenia',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Urkis',
          },
          reviewedDate: 1723966027,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              "Wery clean, teh staff was friendly, AC in apartment, nice to family's. Top location.\nhighly recomend it.",
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for the perfect rating! We&#39;re thrilled to hear that everything met your expectations. If there&#39;s anything else we can do for you or if you have any further feedback, please let us know.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-07',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-03',
            numNights: 4,
            roomType: {
              name: 'Two-Bedroom Apartment',
              id: '37863303',
              __typename: 'RoomTranslation',
            },
            roomId: 37863303,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'efa5a3b70797ab17',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AItbvmk8OZ_Fkjg1QE83WWPOYNMjcD-HDblE-O0MxSWY=s96-c',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Pasquale',
          },
          isApproved: true,
          reviewedDate: 1723103338,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'The glasswear',
            positiveText: 'The structure',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you so much for your wonderful feedback! We’re absolutely delighted to hear that you found our staff amazing. Our team works hard to ensure every guest feels welcomed and well cared for, so your kind words are greatly appreciated.\n\nIt’s rewarding to know that their efforts contributed to your positive experience. We’re committed to providing exceptional service and creating memorable stays for our guests.\n\nWe look forward to the pleasure of welcoming you back and providing another great experience.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-24',
            numNights: 4,
            roomId: 37863308,
            roomType: {
              name: 'Studio',
              id: '37863308',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '964ed26d7e5e67d7',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GisMEtLttHucac9gbtZ4najxFMnWOqBBmlE5YVq4w=s96-c',
            countryCode: 'xk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Kosovo',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Qarri',
          },
          isApproved: true,
          reviewedDate: 1722245773,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'The staff is amazing.\nBut the bed was very old and not comfortable.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your wonderful review! We’re delighted to hear that you enjoyed your stay and found it to be a great value, especially with the central location.\n\nIt’s fantastic to know that the location worked well for you. We look forward to the opportunity to welcome you back for another great stay.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-06-10',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-09',
            numNights: 1,
            roomType: {
              name: 'Two-Bedroom Apartment',
              id: '37863303',
              __typename: 'RoomTranslation',
            },
            roomId: 37863303,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '908c3281106275af',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-e.png',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United States of America',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Erika',
          },
          reviewedDate: 1721321781,
          isApproved: true,
          textDetails: {
            negativeText: 'Had to find my own parking',
            textTrivialFlag: 0,
            title:
              'It was a great stay for the price and a good central location',
            positiveText: 'Location was great',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your fantastic review! We are thrilled to hear that your stay at Corvin Plaza Apartments &amp; Suites exceeded your expectations. It’s wonderful to know that you found the room fully equipped with all the amenities you needed, including the kitchen, bathroom, balcony, and living area.\n\nWe’re also pleased to hear that our staff’s kindness and helpfulness contributed to your positive experience. It’s great to know that the convenient location near tram and bus stations made it easy for you to explore the center of Budapest.\n\nWe are honored to be your first choice when you return to Budapest and look forward to welcoming you back for another perfect stay.\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-15',
            numNights: 1,
            roomId: 37863308,
            roomType: {
              name: 'Studio',
              id: '37863308',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f7802359c0556ecd',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AAcHTtdZh-72poxNIvOpamgqJu3MITo4XNTtr2_35U8Q=s96-c',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Turkey',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Mustafa',
          },
          isApproved: true,
          reviewedDate: 1721192855,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Everything was perfect.',
            positiveText:
              'The hotel is so qualified and exceeded our expectations. Room is fully equipped in terms of kitchen, bathroom, balcony and living area. The staff is very kindly and helpful. Also, the location is close to tram and bus stations, so it is easy to access center from hotel. Corvin Plaza will be our first choice when we come to Budapest.',
            lang: 'en',
            title:
              'Very satisfied for stay in Corvin Plaza Apartments & Suites',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you so much for your perfect 10&#47;10 rating! We&#39;re thrilled to hear that you had such a positive experience. Your kind words motivate our team to continue delivering exceptional service. We look forward to welcoming you back soon!',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-07',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-06',
            numNights: 1,
            roomId: 37863313,
            roomType: {
              name: 'Deluxe Two-Bedroom Apartment',
              id: '37863313',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '58f03ee6e03ffb55',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-f.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Romania',
            guestTypeTranslation: 'Family',
            username: 'Florin',
          },
          isApproved: true,
          reviewedDate: 1720432668,
          helpfulVotesCount: 1,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Parking 25E/night\n50E Warranty',
            positiveText: 'Open space',
            lang: 'en',
            title: 'Good',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your kind words and positive feedback. We are delighted to hear that you enjoyed your stay and found everything to be stunning. It&#39;s wonderful to know that you appreciated the cleanliness, lighting, and the view from the balcony, as well as the comfort of the sofa bed. Our team is especially pleased to hear that you found them kind and accommodating. We strive to provide clear information to our guests, and we appreciate your understanding regarding these policies. We are glad to hear that the temperature in your room was comfortable even without the use of the air conditioning. Thank you for choosing to stay with us, and we hope to have the pleasure of welcoming you back in the future.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-06',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-05',
            numNights: 1,
            roomType: {
              name: 'Studio',
              id: '37863308',
              __typename: 'RoomTranslation',
            },
            roomId: 37863308,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '89137eb0c5d908e9',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GjdL8NYcRJ4S_0otp_blAX89BsRHqrHfIge7Ks=s96-c',
            countryCode: 'hu',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Hungary',
            guestTypeTranslation: 'Couple',
            username: 'S',
          },
          isApproved: true,
          reviewedDate: 1720378679,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'We liked everything, although I did not read the important information before making the booking and we were surprised by the automated message that you had to pay for the AC if you wanted to use it (although the temperature was just fine, considering we were on the 8th floor) and that you also need to pay 20k HUF deposit, which you will get back when you check out.',
            positiveText:
              'Everything was stunning. It was sparkling clean, the room well lit, nice view from the balcony, and even though we had a sofa bed it was actually comfortable. The staff was very kind.',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your feedback. We are delighted to hear that you were pleasantly surprised by the size of the apartment and that it matched the pictures. It&#39;s wonderful to know that you found our location great and that overall, your stay in Budapest was enjoyable. Your positive comments mean a lot to us, and we strive to provide accurate representations of our accommodations to ensure our guests have a satisfying experience. Thank you for choosing to stay with us. We look forward to welcoming you back on your next visit to Budapest.',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-07-03',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-02',
            numNights: 1,
            roomType: {
              name: 'Two-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '37863303',
            },
            roomId: 37863303,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd0e749605bf2438f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJyqiEXTajH_ITGzfatIQaKjvBUDi0sSSvbJ2r8J=s96-c',
            countryCode: 'ua',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ukraine',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Томенко',
          },
          reviewedDate: 1720032612,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "I didn't like the fact that air conditioning was not included in price. Also, the soundproofing wasn't good. We could hear each other's words from different rooms, and there was something like a building site or repairs being done nearby.",
            positiveText:
              'We were pleasantly surprised by the size of the apartment and how similar it looked to the pictures. The location is great as well. Overall, it was a nice place to stay in Budapest',
            lang: 'en',
            title: 'Nice apartment in Budapest',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 1,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your feedback, we are happy that you found our apartment  spacious and had a great time with us. The AC usage is not built into the price of the apartment, because the guests can decide wether they would like to use the extra service or not. We are looking forward to welcome you on your next stay!',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-06-26',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-24',
            numNights: 2,
            roomId: 37863302,
            roomType: {
              name: 'One-Bedroom Apartment',
              id: '37863302',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '3e723d25e6a494ff',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GhlkusPUhn-EnGR8Mg34vjBrkZgdmlrgGGkw3DjuA=s96-c',
            countryCode: 'bg',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Bulgaria',
            guestTypeTranslation: 'Group',
            username: 'Victoria',
          },
          isApproved: true,
          reviewedDate: 1719512768,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'You have to pay to use the AC - being on the last floor, it was quite hot but sleeping on an open roof window did it for 2 nights.',
            lang: 'en',
            positiveText: 'Good location and a very spacious apartment!',
            title: 'Very good value for money!',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your positive feedback! We&#39;re delighted to hear that you found our accommodations to be top-notch, with a great location close to amenities. We strive to provide a clean and comfortable environment for all our guests, and it&#39;s wonderful to know that we met your expectations. Should your travels bring you back this way, we look forward to welcoming you again for another excellent stay!',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-12',
            numNights: 2,
            roomId: 37863313,
            roomType: {
              name: 'Deluxe Two-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '37863313',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '33fafd96e9e65f9a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/10212773759293253/picture?type=square&height=64&width=64',
            countryCode: 'ie',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ireland',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Michelle',
          },
          isApproved: true,
          reviewedDate: 1718394250,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'Comfortable and quiet',
            lang: 'en',
            positiveText: 'Very clean and close to amenities.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your wonderful review! We&#39;re thrilled to hear that you found our apartment to be very clean, fully furnished, and ideal for your family trip. Our team takes great pride in providing exceptional service, and it&#39;s rewarding to know that their friendliness and helpfulness made a positive impact on your stay. We appreciate your recommendation and look forward to hosting you and your family again in the future!',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-10',
            numNights: 3,
            roomId: 37863303,
            roomType: {
              name: 'Two-Bedroom Apartment',
              id: '37863303',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9e6e546cbe4de0c6',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJquSjaOBVcIN8h8VP-29A-9HR-tlaOZN2xSx4yDquUj6ZZZQeC=s96-c',
            countryCode: 'de',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Germany',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Minh',
          },
          reviewedDate: 1718310407,
          isApproved: true,
          textDetails: {
            negativeText:
              'Nothing. With this price this place is totally a perfect choice. I can’t complain about anything. :)',
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'The apartment is very clean, fully furnished and perfect for a family trip. The staff are extremely friendly and always ready to help at all times. I can highly recommend.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Thank you for your feedback! We&#39;re pleased that you enjoyed our friendly reception, clean and spacious apartment, and convenient location. Providing a welcoming atmosphere and maintaining cleanliness are top priorities for us, and it&#39;s rewarding to hear that we met your expectations. Should your travels bring you back to this area, we would be delighted to welcome you again for another enjoyable stay!',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-09',
            numNights: 3,
            roomType: {
              name: 'Deluxe Two-Bedroom Apartment',
              id: '37863313',
              __typename: 'RoomTranslation',
            },
            roomId: 37863313,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'd43e23cf18c58570',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocJUhQN18C6lhQLcN6AZiTBNIPruIduUVfeJdPrM0Oq_=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Nicola',
          },
          reviewedDate: 1718259174,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title:
              'We loved Budapest it is a beautiful city to visit.  Felt very safe and welcomed.',
            lang: 'en',
            positiveText:
              'Friendly reception.  Very clean and spacious apartment.   A good location.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'We&#39;re absolutely delighted to receive a perfect score from you! It&#39;s truly rewarding to know that we were able to meet and exceed your expectations during your stay. Your satisfaction is our utmost priority, and we&#39;re committed to maintaining the high standard of service that earned us this rating.\n\nIf there are any specific aspects of your experience that stood out to you or any suggestions you have for how we can continue to improve, we&#39;d love to hear them. Your feedback helps us ensure that every guest enjoys a memorable and exceptional stay with us.\n\nThank you once again for choosing to stay with us and for taking the time to share your feedback. We&#39;re already looking forward to your next visit, and we promise to make it just as wonderful as this one!',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-06-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-03',
            numNights: 5,
            roomId: 37863302,
            roomType: {
              name: 'One-Bedroom Apartment',
              id: '37863302',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'b1315363a88c9b1b',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocK8ag8wH0EdIq2YBv4-oY4ehErSGotQYWL_W0fSKhay=s96-c',
            countryCode: 'be',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Belgium',
            guestTypeTranslation: 'Solo traveler',
            username: 'Sisty',
          },
          isApproved: true,
          reviewedDate: 1718005938,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: 'NOTHING',
            textTrivialFlag: 0,
            title: 'NICE',
            positiveText: 'EVERYTHING',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      timeOfYearFilter: [
        {
          name: 'All (1567)',
          count: 1567,
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Mar–May',
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Dec–Feb',
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 1567,
    },
    review_score: 8.3,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041331,
    number_of_rooms: 0,
    stars: 3,
    address: 'Kisfaludy utca 3',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 0,
    location: {
      longitude: 19.0720725059509,
      latitude: 47.4889158691568,
    },
    zip: '1082',
    hotel_description:
      'Located at Kisfaludy Street just around the corner from the vibrant Grand Boulevard, Corvin Plaza Apartments & Suites features modern, stylish accommodation units and free Wi-Fi in the whole building. It is 300 metres from the Corvin-Negyed M3 Metro Stop and the tram no. 4-6. An LCD TV, a sofa bed, and a dining area are standard facilities in each apartment. The kitchens are fully equipped and include basic cooking ingredients like salt and pepper. The bathrooms are coming with a hairdryer. Air conditioning is available in some units on request and for surcharge. A playground for children is also featured in the courtyard of the building. Numerous restaurants, cafés and bars can be found in the nearest vicinity of the Corvin Plaza, as well as within walking distance. Corvin Sétány Shopping Centre is 400 metres away, and the central Váci Street and Vörösmarty Square can be reached in a 20-minute walk. Private parking is possible on site. The reception offers tickets for a wide range of sightseeing tours, to the thermal baths, concerts and other cultural programs.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Kæledyr tilladt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Have',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Terrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tøjvask',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Solterrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fælles opholdsrum/tv-område',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Udendørs legeredskaber',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Havemøbler',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Nøgleadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for levering af mad til værelser/enheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Afskærmning mellem personale og gæster på relevante områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikker dækning af mad ved levering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til sundhedspersonale',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257998088.jpg?k=de9a3e74492706472b1b066dd7b3f302f4bb617f035b1fc235146ef6f8f4766f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257999843.jpg?k=522a173d622ac91dd88f4472ca7081a66f1faf948a1ea55880200d7fb9d5d1c5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529115615.jpg?k=cfdc95b75947da60aa81af30ce22d29bf2b7818594193673c66f9b4370474b0b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533747309.jpg?k=362060b50db3b842ee7d2321c4b97b03e00dabe2632daeb897601bd5f543444a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589848406.jpg?k=8f2a7502e1ccde2256912a9f7776a37fe9a8c21f2ba52169d76e963b7d66c9d8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/106474690.jpg?k=826a264bb0547d342359af9b5a3ac621996cb86f0f71a346ed5e3eb2e65fbeef&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/106474695.jpg?k=d05f8c0551d0a0c783d5990ef1f7af0eff6cac3241f609d4a3b1651cea12e53c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257999064.jpg?k=0a72b8acd1f0c5ce2da776a41ab9cb95d741cd43cb248e9e3299fba9c804098e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529115606.jpg?k=fb9189b545de0fc1bd3ae3770e683f7fd33a8a2941710d84810e249434dc1f96&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257998094.jpg?k=780a214b8b049bfc7294fd3927f9f4000b6578d9e041ecd00ec4a141395f55b3&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533749904.jpg?k=799aacc5f15fa5adc02b64156d61af0c334810b01c69ae17aa6c08548c3745e0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533747310.jpg?k=854546a4778c8752569d44ad156c55c67a5da48a79efa25fff457e9d6279c1bc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151786379.jpg?k=d52105030e6755439df05ea5c0bfb5440ed2c61a99e3df5747348ad672a323d6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257999849.jpg?k=7f1e9c1c77f4755d9bf34fd2dfae8f68f11232099db5df00a8422b7d353241fd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/529115613.jpg?k=2d2ce43d2e39667effcb84c04326e6f319c16d174f588c21e72eb7691b8115ec&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151789780.jpg?k=6da21a27ddd611b6ee46cbd2fb18d6652a2cb136bed00ae937010520a764980c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151786046.jpg?k=96f593849273bdd1e40abbb78533a2cb7a2a3af6bcdd3583e1de5e57bafec0a1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257998072.jpg?k=85caad5b90c422e8dd03d9ae17a72103747d7a6df141b5433404b012bbaac871&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/258001450.jpg?k=3f02c7beddaaba297445ce3cee50453ef156999bd3d49780efed6da8d835b919&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/258001992.jpg?k=217cf145616252d501c17cc44a2a9ca78e9dfadf5614c8093aeef106d58cb266&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/258001662.jpg?k=fade72d2ea88eadd17de8fabc06c3bc1bb4f05e8f77497cfff27c433658bb9b5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/215326253.jpg?k=6124cab86799c212561183a061988488beb73fb75b7903e164f88e6389be55e7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/257999060.jpg?k=4c0131f330369ad4d9c7945d2c4b8a0eeeab74d38650ae267c951dd8cc4d02c1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/175861990.jpg?k=6f5bfc419f0c99f077a3960ad3b8c92e520c8db49f1531a44de36fe7b27ddd0a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151788470.jpg?k=2c493d894b8000352af5080056c3904469b1fac010364b40e4d89ef38d6260a7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/13257726.jpg?k=a747c9e752820e0f2ac3c1ecb619a0e2fe40f4e4e244e0f363469fc585a9612e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151788431.jpg?k=e41c53870be7acb427ec411d4efccd10033007ad6779f1dd8251685f00e8c4b2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151788444.jpg?k=2a34199fa4aecb66ce92b4c374fbeea608fefa53b14058d231cf40fc29458300&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/151788487.jpg?k=e757eeaa410302dc32ba777b6c7dde3003cd0492582d25eb51622411758e44da&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28206962.jpg?k=ce0de70c13ddd623178801903f94f4dc2c47394ace2c8e080dd00be10dffbf66&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533755551.jpg?k=db02006108971a1c5a514928441f30a37e9c480bd999452ae4c301f128e37d54&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/106474712.jpg?k=78d4795d1bdd36b39f04a08ab78954b56a00648bd434b33c8580bbbae0332ecc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28208347.jpg?k=12366e0bc806fbeae627ee68fb5dba16620b4650cc818100705fbaed28f4a264&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/49374684.jpg?k=c34fd626e27f6d0211ddeb222a6ed63a4b84275589cf21389d8ecfaa29688aa0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/13288456.jpg?k=1bfd8ddda1bde079904a2f1ed9c069f3dfce4ef6d86123f3823088db8d989a8f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/13288666.jpg?k=a423c99dba5861f6e6cc801cb2e67790efc379d781ff1e3306ce123c558accc9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/49374691.jpg?k=e3af34aa5c0a8b4354dd5842c000333331e7c357fc3930d28d322d825d09b517&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/106474698.jpg?k=d1cc1cf98fd2147313fe8ad92dbc0e329e9ec89de40f77fdcd783f4929f7843d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/106474701.jpg?k=70d74d1e4f777a7b59252b47f38f61a0792ef43145307830958ca925a09470c5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533747953.jpg?k=55adffb4b9b8637b56d0da565278c78cb30491fea0ae8338be68b86b42f02c73&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533747950.jpg?k=eb08fa217d5e8cce4fd495d6e0e81c8dc444f4f4b9e408947e91682df9c2a3ad&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533753879.jpg?k=8c2d293c8ef815457b1269d68aad07b533f5ec26bc7b3e493cba5869bff33258&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/533753881.jpg?k=d39a1f1d9422fc8e48d17a38fe7f6b609859a736fde0a3acca852348ca247cc2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589819058.jpg?k=9350fe5e6bc269ec099966ed423cf4c608edda8d406f009b603cdd9d15cd148c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/589819057.jpg?k=8ad46325de64f74addad2a70f5010e49833b802c6253ac9c5631767964fab36e&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 0,
      max_n_people: 0,
      rooms: [],
    },
    all_rooms_available: [],
    accomodation_type: 'apartment',
    provider: 'BOOKING',
    late_checkin: false,
    additional_policies: {},
    late_arrival: false,
    discount: 0,
    price_without_discount: 159.45,
    price_increased: true,
    price_decreased: false,
    price_diff: 25.32,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Lord Residence',
    street_address: 'Lovag utca 8.',
    city: 'Budapest',
    zip_code: '1066',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/lord-apartments.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 187.41,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 187.408,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 187.408,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 17.665893520509808,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560514.jpg?k=7e497a8d0970ef7172209c47a6386f592427fc0cbf66d3969c945d9ed420a822&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          name: 'All (1183)',
          count: 1183,
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 612,
          name: 'Wonderful: 9+ (612)',
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 437,
          name: 'Good: 7-9 (437)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 90,
          name: 'Fair: 5-7 (90)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (27)',
          count: 27,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 17,
          name: 'Very Poor: 1-3 (17)',
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          name: 'Location',
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          isSelected: false,
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          name: 'Clean',
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          translation: {
            name: 'Bed',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bed',
          },
          isSelected: false,
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Room',
            id: 'topic_room',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Kitchen',
          translation: {
            name: 'Kitchen',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_kitchen',
          },
          isSelected: false,
          id: 261,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Bathroom',
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          isSelected: false,
          name: 'Quiet',
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Balcony',
            id: 'topic_balcony',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Balcony',
          id: 272,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Towel',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_towel',
          },
          isSelected: false,
          name: 'Towel',
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          name: 'Parking',
          isSelected: false,
          translation: {
            name: 'Parking',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_parking',
          },
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          name: 'Shower',
          isSelected: false,
          translation: {
            name: 'Shower',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_shower',
          },
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          name: 'Toilet',
          isSelected: false,
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Check-in',
            id: 'topic_checkin',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Checkin',
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Noise',
            id: 'topic_noise',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Noise',
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          name: 'Wifi',
          translation: {
            name: 'WiFi',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_wifi',
          },
          isSelected: false,
          id: 247,
          __typename: 'TopicFilter',
        },
        {
          name: 'Loud',
          translation: {
            name: 'Loud',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_loud',
          },
          isSelected: false,
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          name: 'Coffee',
          translation: {
            name: 'Coffee',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_coffee',
          },
          isSelected: false,
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          name: 'Hot',
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Luggage',
            id: 'topic_luggage',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Luggage',
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          translation: {
            name: 'Car',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_car',
          },
          name: 'Car',
          id: 288,
          __typename: 'TopicFilter',
        },
        {
          name: 'Window',
          translation: {
            name: 'Window',
            id: 'topic_window',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          name: 'Lift',
          translation: {
            name: 'Lift',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_lift',
          },
          isSelected: false,
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bus',
          isSelected: false,
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          id: 267,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          translation: 'Staff',
          name: 'hotel_staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.80970001220703,
          },
          value: 8.41810321807861,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 8.16025638580322,
          __typename: 'RatingScore',
        },
        {
          translation: 'Cleanliness',
          name: 'hotel_clean',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            ufiScoreHigherBound: 9.74524974822998,
            __typename: 'UfiScoreAverage',
          },
          value: 8.46842956542969,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.63462543487549,
          },
          value: 8.39102554321289,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.25069999694824,
          },
          value: 8.40947914123535,
          __typename: 'RatingScore',
        },
        {
          translation: 'Location',
          name: 'hotel_location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 9.190110206604,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 8.67230033874512,
          },
          value: 8.13829803466797,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      languageFilter: [
        {
          name: 'All (1183)',
          count: 1183,
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          count: 12,
          name: 'Danish (12)',
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          count: 366,
          name: 'English (366)',
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (56)',
          count: 56,
          value: 'de',
          countryFlag: 'de',
          __typename: 'LanguageFilter',
        },
        {
          count: 52,
          name: 'Polish (52)',
          countryFlag: 'pl',
          value: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          count: 62,
          name: 'Spanish (62)',
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Chinese (8)',
          count: 8,
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          count: 78,
          name: 'Russian (78)',
          countryFlag: 'ru',
          value: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Swedish (4)',
          count: 4,
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (37)',
          count: 37,
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Italian (85)',
          count: 85,
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          count: 32,
          name: 'Romanian (32)',
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (15)',
          count: 15,
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          count: 3,
          name: 'Lithuanian (3)',
          countryFlag: 'lt',
          value: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Norwegian (3)',
          count: 3,
          value: 'no',
          countryFlag: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (2)',
          count: 2,
          value: 'ko',
          countryFlag: 'kr',
          __typename: 'LanguageFilter',
        },
        {
          count: 137,
          name: 'Hungarian (137)',
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Ukrainian (30)',
          count: 30,
          value: 'uk',
          countryFlag: 'ua',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Arabic (5)',
          count: 5,
          value: 'ar',
          countryFlag: 'sa',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (9)',
          count: 9,
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          count: 48,
          name: 'Czech (48)',
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          count: 10,
          name: 'Portuguese (10)',
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Bulgarian (7)',
          count: 7,
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          count: 13,
          name: 'Greek (13)',
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          count: 21,
          name: 'Croatian (21)',
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Serbian (21)',
          count: 21,
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (1)',
          count: 1,
          value: 'lv',
          countryFlag: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Finnish (1)',
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          count: 40,
          name: 'Slovak (40)',
          countryFlag: 'sk',
          value: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Catalan (1)',
          countryFlag: 'catalonia',
          value: 'ca',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovenian (6)',
          count: 6,
          value: 'sl',
          countryFlag: 'si',
          __typename: 'LanguageFilter',
        },
        {
          count: 17,
          name: 'Hebrew (17)',
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
      ],
      customerTypeFilter: [
        {
          count: 1183,
          name: 'All (1183)',
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (378)',
          count: 378,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Couples (404)',
          count: 404,
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 274,
          name: 'Groups of friends (274)',
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Solo travelers (127)',
          count: 127,
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Business travelers (81)',
          count: 81,
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2023-08-09',
            __typename: 'BookingDetails',
            checkinDate: '2023-08-07',
            numNights: 2,
            roomId: 30286911,
            roomType: {
              name: 'Two-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '30286911',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '7a7d453d1621148a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'il',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Israel',
            guestTypeTranslation: 'Group',
            username: 'Maii',
          },
          isApproved: true,
          reviewedDate: 1692093632,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              "It was an excellent stay, it could've been cheaper but we had a great time",
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'I liked the space in the rooms, the location was awesome, it was quiet and in a prime location .\nThe bath was nice and the little balcony as well',
            lang: 'xu',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-27',
            numNights: 1,
            roomType: {
              name: 'Superior Apartment',
              id: '30286910',
              __typename: 'RoomTranslation',
            },
            roomId: 30286910,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '2b03c67566ceec07',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'cz',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Czech Republic',
            guestTypeTranslation: 'Family',
            username: 'Muratssu',
          },
          isApproved: true,
          reviewedDate: 1722279281,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              'Good Location.\r\nEverything was organized well.\r\nRoom was good with air conditioning.',
            title: 'We are satisfied with the hotel.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-11',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-09',
            numNights: 2,
            roomType: {
              name: 'Two-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '30286911',
            },
            roomId: 30286911,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'fb1cb67058fa784f',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
            countryCode: 'ba',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Bosnia and Herzegovina',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Jelena',
          },
          reviewedDate: 1717760709,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Mattresses should be exchanged.',
            lang: 'en',
            positiveText:
              'Location is great! It is really nice that there is a parking to rend under the building.',
            title: 'Great location',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-02',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-30',
            numNights: 3,
            roomId: 30286911,
            roomType: {
              name: 'Two-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '30286911',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '289de98b18c9f277',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-k.png',
            countryCode: 'pl',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Poland',
            guestTypeTranslation: 'Family',
            username: 'Krzysztof',
          },
          reviewedDate: 1717425630,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Wifi was very poor, but all the rest was  very good 🙂',
            title: null,
            lang: 'en',
            positiveText: 'Very nice apartment in perfect location.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-05-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-23',
            numNights: 5,
            roomId: 30286908,
            roomType: {
              name: 'One-Bedroom Apartment with Balcony (2 Adults)',
              id: '30286908',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '14466456633e6661',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GhqsM277HdzLVq2Zc_554gaD04FqAD5Ym179Kielg',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Solo traveler',
            username: 'Krisztina',
          },
          isApproved: true,
          reviewedDate: 1717244737,
          textDetails: {
            negativeText: 'Nothing comes to mind.',
            textTrivialFlag: 0,
            title:
              'I love staying here - this was my third time staying with Lord Residence :)',
            positiveText: 'I liked the location.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-28',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-24',
            numNights: 4,
            roomType: {
              name: 'Superior Apartment',
              id: '30286910',
              __typename: 'RoomTranslation',
            },
            roomId: 30286910,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '2ba657ea00b526bb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AEdFTp4oEwUTETZ1rNipIjI_CtEX37AGiNzlnhhbdcypOg=s96-c',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Giada',
          },
          reviewedDate: 1717152836,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              "Maybe an extra trash bag would have been useful, since we stayed 4 days and accumulated a bit of waste due to take out and grocery shopping. \r\n\r\nAlso the shower-head was a bit hard to place in the middle of the bathtub cause it's weirdly attached to the left wall but we managed by taking it out.\r\n\r\nBut overall a great experience! Loved the place.",
            lang: 'en',
            positiveText:
              'The whole condo was really beautiful and central, and the apartment was very big and it had all it was needed. It was only at 20 minutes by walk from the Parliament and we reached a lot of spots by foot.',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-05-15',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-11',
            numNights: 4,
            roomId: 30286911,
            roomType: {
              name: 'Two-Bedroom Apartment',
              id: '30286911',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8855a7377112b001',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJz5WSOBeYnoo0EnInZA_W4T5bh-e4n2a7Ju-jFX=s96-c',
            countryCode: 'cy',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Cyprus',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Isidorou',
          },
          isApproved: true,
          reviewedDate: 1716115336,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Everything was just amazing!',
            title: 'Low price, Best quality !',
            lang: 'en',
            positiveText:
              'The apartment was very clean! We had our own towels, they had us coffee and everything we needed at first! It was a 10 minute walk from everything! It was 2 minutes walk to the trams trains and buses! we are very pleased! Definitely recommend if you want a safe place to stay and a quiet place! we loved it! We took our keys from the reception! He was amazing. He explained many things! On our next trip there i hope we find this again available!!!! Thank you for everything! Love from Cyprus🇨🇾❤️',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-05-14',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-10',
            numNights: 4,
            roomId: 30286908,
            roomType: {
              name: 'One-Bedroom Apartment with Balcony (2 Adults)',
              id: '30286908',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'b74270ea5a79d286',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh5.googleusercontent.com/-gBmnCnubvaA/AAAAAAAAAAI/AAAAAAAAAdg/danyC6NJaYI/s96-c/photo.jpg',
            countryCode: 'ba',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Bosnia and Herzegovina',
            avatarColor: null,
            guestTypeTranslation: 'Solo traveler',
            username: 'Edita',
          },
          reviewedDate: 1715939988,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Tv channels',
            lang: 'en',
            positiveText: 'Location.security.',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-05-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-09',
            numNights: 3,
            roomType: {
              name: 'Superior Apartment',
              __typename: 'RoomTranslation',
              id: '30286910',
            },
            roomId: 30286910,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'fe4f94d9c989a973',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Shanti',
          },
          isApproved: true,
          reviewedDate: 1715629004,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            positiveText: 'Very clean rooms, comfortable bed and location',
            lang: 'en',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-04-05',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-02',
            numNights: 3,
            roomType: {
              name: 'Superior Apartment',
              id: '30286910',
              __typename: 'RoomTranslation',
            },
            roomId: 30286910,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'b786dfd4d25846bf',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/002020.893759da23084abab16c504aefd7b322.1432/picture?type=square&height=64&width=64',
            countryCode: 'sk',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Slovakia',
            guestTypeTranslation: 'Family',
            username: 'Martin',
          },
          isApproved: true,
          reviewedDate: 1712473309,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'Reception is located in different address than the apartment and doesn’t accept credit cards for parking payment which is unpleasant if you dont have any cash on you.',
            title: null,
            lang: 'xu',
            positiveText:
              'Great location, apartment is good size and is situated in quiet part of city centre. Very nice place to stay in and has also a parking space for a fee.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-03-01',
            __typename: 'BookingDetails',
            checkinDate: '2024-02-28',
            numNights: 2,
            roomType: {
              name: 'Superior Apartment',
              id: '30286910',
              __typename: 'RoomTranslation',
            },
            roomId: 30286910,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '373b47a2590c19d9',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-q.png',
            countryCode: 'ua',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Ukraine',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Qazi',
          },
          reviewedDate: 1711625448,
          isApproved: true,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'It was an excellent stay at Lord Residence',
            positiveText:
              'The check-in process was super smooth, the rooms were perfect for the price we paid.',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-03-27',
            __typename: 'BookingDetails',
            checkinDate: '2024-03-13',
            numNights: 14,
            roomId: 30286901,
            roomType: {
              name: 'Superior Studio',
              __typename: 'RoomTranslation',
              id: '30286901',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '0d3d6e6b6c0f59f7',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-v.png',
            countryCode: 'ie',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Ireland',
            guestTypeTranslation: 'Solo traveler',
            username: 'Victoria',
          },
          isApproved: true,
          reviewedDate: 1711574024,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'N/A',
            title: null,
            lang: 'en',
            positiveText:
              'Good location, well equipped and quiet studio apartment. Very clean and comfortable room. Regular room service providing clean towels every 3 days.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-03-17',
            __typename: 'BookingDetails',
            checkinDate: '2024-03-14',
            numNights: 3,
            roomId: 30286910,
            roomType: {
              name: 'Superior Apartment',
              id: '30286910',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '8f150829bfb10002',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJyMSGLhgJCVplZtwS1fWl_smJ5s7VyM7zVZ9HVS=s96-c',
            countryCode: 'ie',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Ireland',
            guestTypeTranslation: 'Solo traveler',
            username: 'Alessio',
          },
          reviewedDate: 1710705904,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'N/a',
            lang: 'en',
            positiveText: 'Big, bright and central',
            title: 'Enyojable',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-03-02',
            __typename: 'BookingDetails',
            checkinDate: '2024-02-29',
            numNights: 2,
            roomType: {
              name: 'Superior Apartment',
              id: '30286910',
              __typename: 'RoomTranslation',
            },
            roomId: 30286910,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a1ea2c4b3fab0deb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-d.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Romania',
            guestTypeTranslation: 'Family',
            username: 'Dana',
          },
          isApproved: true,
          reviewedDate: 1709453756,
          textDetails: {
            negativeText: 'A kitchen towel would have been useful.',
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'Great location, shops, cafes and restaurants nearby. 20 minutes walk from the central area. \nThe apartament was spacious, clean and had underground  parking. The building has an elevator.',
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-02-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-02-20',
            numNights: 3,
            roomType: {
              name: 'Two-Bedroom Apartment',
              id: '30286911',
              __typename: 'RoomTranslation',
            },
            roomId: 30286911,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c05eb898c47bfd4a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJy5xbM380V0n2EeqHZQerbEHE_G3MmhRMbPftBv=s96-c',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Dani',
          },
          isApproved: true,
          reviewedDate: 1708720022,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: 'Great value for money.',
            positiveText:
              'Nice spacious apartment for a family of 5 (with 3 young kids!). Would recommend.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewsCount: 1183,
      timeOfYearFilter: [
        {
          count: 1183,
          name: 'All (1183)',
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Mar–May',
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Sep–Nov',
          count: 0,
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Dec–Feb',
          count: 0,
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 1183,
    },
    review_score: 8.3,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041294,
    number_of_rooms: 1,
    stars: 3,
    address: 'Lovag utca 8.',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 2,
    location: {
      longitude: 19.0573418140411,
      latitude: 47.5065064394728,
    },
    zip: '1066',
    hotel_description:
      'Lord Residence ligger bare 5 minutters gang fra metrostationen Opera og Andrassy Avenue. Der er gratis wi-fi. Samtlige lejligheder har aircondition og fladskærms-tv med kabelkanaler. De fleste af ferieboligerne har egen balkon. Køkkenet er komplet. Den karakteristiske bygning har vundet 2 arkitekturpriser. Butikscentret WestEnd, togstationen Nyugati og Operahuset ligger bare 5 minutter fra Lord Residence til fods. Der tilbydes privat lufthavnstransport efter anmodning og mod tillægsgebyr. Det tager 40 minutter at køre til Liszt Ferenc Internationale Lufthavn.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Have',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Terrasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Biludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Concierge',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkeringshus',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport fra lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport til lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera udenfor overnatningsstedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560514.jpg?k=7e497a8d0970ef7172209c47a6386f592427fc0cbf66d3969c945d9ed420a822&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179038943.jpg?k=5fc326cd4ed731d0fa47c5e7b1a18144e7dd3ca1b0c9f775a3253a1014a9d0e7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560438.jpg?k=af6120a65118e27c22917486cc144e8c5fc252aec22bf3ffcb8eab80d8409f9a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/47506128.jpg?k=c9e07404f964a09361a7c180df4faee6b1a51454a97b92ad5f23e25b20df826c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560711.jpg?k=aa923ca12dfffde3face2c8184f919e79a77d274bd1914a5086ef819a2889f99&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28572327.jpg?k=68850870180cab1932ea44e9eb90ae6708e6007873397c20049e9fbf349d5308&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737601.jpg?k=93472542467a288cdc2fe6948cd8548e653501c9bb33ff1c28905a8db0a415eb&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560513.jpg?k=2eb7486dfebe3b4b3eab77daac6d7c0803c88beec73b36b7ee40faa52f8fe2b0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560224.jpg?k=4a97635d5886bd5b8d72e85425d837ebdb2d9f4fca7838b6f1d004d6d4f4d6ec&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204738271.jpg?k=52d3b519746ecb30d9e5ebde515b93596bbaaa3a2fbd9e1c4c0cfd7620a584a5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737920.jpg?k=24a86f62039bcf8a50230f1b95187fb7d2772fbc534f6f52073672003e2ac839&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737712.jpg?k=db8e987d9ec346c2c0064d137360bb52030df7afe96157d7b1c3312bf8cbb566&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737726.jpg?k=68c52f7caaf10fd64cdcd90115d0f60e91df7e0fe07befb9dcec616ee9232889&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737731.jpg?k=cf0b71aaf9a4b5d4ea3b6b4db264bdf39bdfb9e3d2cca0e2d669b2ea6182ce7c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737608.jpg?k=624d38c6fedeebd3a4b88afb0d6a113ddc2d3b334bc03ac66a124dce3a3fc196&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560321.jpg?k=fb652b1db267d33aa34422ffc3f6fc756dab6a4417c5fc948a748ae2e40eded4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737383.jpg?k=abb3fd1ed48135f7f7da2f6f5e65c436fe01c5623c4bc8fa623c697b5476b90c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204737394.jpg?k=14ee28eb66ce6e465dfc0d03cafab413ac6925e03fd6396c012794549e833207&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179039903.jpg?k=af13f4a8193c80a21e26f611e7bcce79c830ce504112f2314e94e19645c0c26a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179039821.jpg?k=5a659f12efadb6c0085a8bcda6056d221c9e68da0459e5e453e08adb3c5cf882&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179039808.jpg?k=6f5c2bb018d9a0a7942a9147c3a5c732ca38e3e8577f57f951431934a290155a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179039782.jpg?k=fa9dfee1d1933994a20972f6ac93e61e6227383510b60035c676d316fa86b0a1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204738260.jpg?k=3a46bdf06e5938d145320db81d1143d143a09396fac87f3388377728fc90b3e7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560435.jpg?k=3220c5d24f53394eb83b53936f0b691aab66e5a31410d5523e3b6a7c82a9f1ce&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178957584.jpg?k=2a3472eba10de771900de149c64756dbe02b0c3ae4551c962e26e23d0ec9d844&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179038598.jpg?k=3ffeaed302fa1b631084f83d294efc3b41727a7fc90b248afa377e5ab3276186&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179038954.jpg?k=d99bfb1de763bf4abc4204b592103c20059f01354f9766d5aaf964aeeab596b8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179038576.jpg?k=f8932f8e20de791e31ded7f3df00f53a1db620f9b4c874989dc74e4385e0653c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560241.jpg?k=2c2a18384a32b4dbdd286e8821cca8d5997b0aa245892c6925870b255a7e3971&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560230.jpg?k=bc3c63a8ad2729c8292195b61a425ce6a3fc406ab6389443a317913317ed263b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/204738605.jpg?k=0e3730ef0f7dbe35b9c64825550ed1b85a861e75df157735c4e5263b8d6c8b3e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178958028.jpg?k=c3a762a598ed81bd6096fdd9606b3e48302ad30bf2032d6f81e3c7f627455c2b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178958031.jpg?k=8569679836ed94b765e3dc3ac3324f4459544d508eea3b9dad75b57e3b7a4b4a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178958034.jpg?k=9f31aab551154a7e1718f4cddbe6cf85cefc955ffa9c5c4781ae91dd47e794c2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178957893.jpg?k=26baed98e8f1bd1c857f5ad646c29665d3f418e566e4e1826b9fd8f10f9611a1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178957895.jpg?k=d081c20f7bdf3999838de3441e037d9c85c3d46a04940d12395e885358b73241&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178957899.jpg?k=a3df471930a8ddbe0833467aab8f4bf7ad09a16e37ba81bc008486713c236d42&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178957908.jpg?k=f28eb943ff8d47ccf9c62969308c6db8c6c27f9b0720a2718dc44f30d98e2b41&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/178957581.jpg?k=022abd2c58756545c13fce6603156c93068e2bab37019b6fa60cd535da082de8&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560356.jpg?k=51a774359cc1680360aa7266bea7dc67525b9fa59055df5fe3b66d1e15230da1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560621.jpg?k=563c8ea035a925312fce3acabba3e92a6064a1796063aba51a86cada2076b430&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/92678881.jpg?k=26cce0c8ec1c67cc133a8f2dc348701cdcc808bf5edf1ecf83ea3bb29a5833af&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560896.jpg?k=eafbdc8b8734018009f15e73340c9df3b6d1feddb230989aa34ac8c127dd642d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560668.jpg?k=0e2f8f22a8ba0df2bfb34723b2d0a600ee91c671e8170c079449bdbc9d925d45&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560148.jpg?k=8b74b35916326de6daa3376d30e11d74e7101b1b77c1c5fa02735a4055338d3e&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 2,
      rooms: [
        {
          max_n_people: 2,
          name: 'Studio Double',
          facilities: [],
          price: 187.408,
          photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560514.jpg?k=7e497a8d0970ef7172209c47a6386f592427fc0cbf66d3969c945d9ed420a822&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/179038943.jpg?k=5fc326cd4ed731d0fa47c5e7b1a18144e7dd3ca1b0c9f775a3253a1014a9d0e7&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/28560438.jpg?k=af6120a65118e27c22917486cc144e8c5fc252aec22bf3ffcb8eab80d8409f9a&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/47506128.jpg?k=c9e07404f964a09361a7c180df4faee6b1a51454a97b92ad5f23e25b20df826c&o=&hp=1',
          ],
          breakfast_included: false,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'apartment',
    provider: 'HOTELSTON',
    late_checkin: false,
    additional_policies: {},
    late_arrival: false,
    discount: 0.395,
    price_without_discount: 261.43416,
    price_increased: true,
    price_decreased: false,
    price_diff: 53.28,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Prince Apartments',
    street_address: 'Kisfaludy utca 18-20.',
    city: 'Budapest',
    zip_code: '1082',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/mango.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 172.53,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 172.52550000000002,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 172.52550000000002,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 17.112530839163416,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175100.jpg?k=466bc74ddbb3764464c990116e1d8d30d6fa8d2ccd6dbe9c19e13593f4dbdc5c&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 2543,
          name: 'All (2543)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 1484,
          name: 'Wonderful: 9+ (1484)',
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 863,
          name: 'Good: 7-9 (863)',
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Fair: 5-7 (140)',
          count: 140,
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (33)',
          count: 33,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Very Poor: 1-3 (23)',
          count: 23,
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          isSelected: false,
          name: 'Location',
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          name: 'Clean',
          isSelected: false,
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Room',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_room',
          },
          isSelected: false,
          name: 'Room',
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          isSelected: false,
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Kitchen',
            id: 'topic_kitchen',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Kitchen',
          id: 261,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Parking',
            id: 'topic_parking',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Parking',
          isSelected: false,
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bus',
          isSelected: false,
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bathroom',
          isSelected: false,
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Noise',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_noise',
          },
          name: 'Noise',
          isSelected: false,
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Quiet',
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          name: 'Loud',
          isSelected: false,
          translation: {
            name: 'Loud',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_loud',
          },
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Towel',
            id: 'topic_towel',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Towel',
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Check-in',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_checkin',
          },
          isSelected: false,
          name: 'Checkin',
          id: 298,
          __typename: 'TopicFilter',
        },
        {
          name: 'Coffee',
          isSelected: false,
          translation: {
            name: 'Coffee',
            id: 'topic_coffee',
            __typename: 'ReviewTopicTranslation',
          },
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Balcony',
            id: 'topic_balcony',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Balcony',
          isSelected: false,
          id: 272,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Car',
          translation: {
            name: 'Car',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_car',
          },
          id: 288,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Window',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_window',
          },
          name: 'Window',
          isSelected: false,
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'WiFi',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_wifi',
          },
          isSelected: false,
          name: 'Wifi',
          id: 247,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Shower',
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Toilet',
          translation: {
            name: 'Toilet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_toilet',
          },
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          name: 'Lift',
          isSelected: false,
          translation: {
            name: 'Lift',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_lift',
          },
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Luggage',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_luggage',
          },
          isSelected: false,
          name: 'Luggage',
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          name: 'Heat',
          isSelected: false,
          translation: {
            name: 'Heat',
            id: 'topic_heat',
            __typename: 'ReviewTopicTranslation',
          },
          id: 291,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          name: 'hotel_staff',
          translation: 'Staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 9.07534217834473,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_services',
          translation: 'Facilities',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.61482429504395,
          },
          value: 8.6003589630127,
          __typename: 'RatingScore',
        },
        {
          translation: 'Cleanliness',
          name: 'hotel_clean',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 8.70222949981689,
          __typename: 'RatingScore',
        },
        {
          translation: 'Comfort',
          name: 'hotel_comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.63462543487549,
          },
          value: 8.68216323852539,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.25069999694824,
          },
          value: 8.75149536132812,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_location',
          translation: 'Location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 8.70359325408936,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            ufiScoreHigherBound: 8.67230033874512,
            __typename: 'UfiScoreAverage',
          },
          value: 8.46491241455078,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      customerTypeFilter: [
        {
          count: 2543,
          name: 'All (2543)',
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (1138)',
          count: 1138,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 650,
          name: 'Couples (650)',
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 579,
          name: 'Groups of friends (579)',
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 176,
          name: 'Solo travelers (176)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 154,
          name: 'Business travelers (154)',
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      languageFilter: [
        {
          count: 2543,
          name: 'All (2543)',
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          count: 4,
          name: 'Danish (4)',
          countryFlag: 'dk',
          value: 'da',
          __typename: 'LanguageFilter',
        },
        {
          count: 683,
          name: 'English (683)',
          value: 'en',
          countryFlag: 'gb',
          __typename: 'LanguageFilter',
        },
        {
          count: 120,
          name: 'German (120)',
          value: 'de',
          countryFlag: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (160)',
          count: 160,
          value: 'pl',
          countryFlag: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Spanish (138)',
          count: 138,
          countryFlag: 'es',
          value: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 34,
          name: 'Chinese (34)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Russian (209)',
          count: 209,
          value: 'ru',
          countryFlag: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 11,
          name: 'Swedish (11)',
          countryFlag: 'se',
          value: 'sv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (59)',
          count: 59,
          value: 'fr',
          countryFlag: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 163,
          name: 'Italian (163)',
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (170)',
          count: 170,
          value: 'ro',
          countryFlag: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          count: 22,
          name: 'Dutch (22)',
          value: 'nl',
          countryFlag: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Lithuanian (2)',
          count: 2,
          value: 'lt',
          countryFlag: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Norwegian (2)',
          count: 2,
          value: 'no',
          countryFlag: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (9)',
          count: 9,
          value: 'ko',
          countryFlag: 'kr',
          __typename: 'LanguageFilter',
        },
        {
          count: 248,
          name: 'Hungarian (248)',
          value: 'hu',
          countryFlag: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Thai (2)',
          count: 2,
          countryFlag: 'th',
          value: 'th',
          __typename: 'LanguageFilter',
        },
        {
          count: 66,
          name: 'Ukrainian (66)',
          countryFlag: 'ua',
          value: 'uk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Arabic (19)',
          count: 19,
          value: 'ar',
          countryFlag: 'sa',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Turkish (23)',
          count: 23,
          countryFlag: 'tr',
          value: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Japanese (2)',
          value: 'ja',
          countryFlag: 'jp',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (80)',
          count: 80,
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Portuguese (34)',
          count: 34,
          countryFlag: 'pt',
          value: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 19,
          name: 'Bulgarian (19)',
          countryFlag: 'bg',
          value: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (51)',
          count: 51,
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Croatian (45)',
          count: 45,
          countryFlag: 'hr',
          value: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          count: 55,
          name: 'Serbian (55)',
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (1)',
          count: 1,
          value: 'lv',
          countryFlag: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          count: 1,
          name: 'Vietnamese (1)',
          countryFlag: 'vn',
          value: 'vi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovak (57)',
          count: 57,
          value: 'sk',
          countryFlag: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Catalan (5)',
          count: 5,
          value: 'ca',
          countryFlag: 'catalonia',
          __typename: 'LanguageFilter',
        },
        {
          count: 15,
          name: 'Slovenian (15)',
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          count: 28,
          name: 'Hebrew (28)',
          countryFlag: 'il',
          value: 'he',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Indonesian (2)',
          count: 2,
          countryFlag: 'id',
          value: 'id',
          __typename: 'LanguageFilter',
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Jonathan,\n\nThank you so much for taking the time to leave such an amazing review on our property!\nWe are happy to hear your expectations were met and your stay was pleasant in our apartments. \nWe appreciate all the kind words and hope to see you back in the future!\nLooking forward to seeing you soon!\nBest wishes, \nPrince Reception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2023-04-09',
            __typename: 'BookingDetails',
            checkinDate: '2023-04-06',
            numNights: 3,
            roomType: {
              name: 'Studio with Garden View',
              __typename: 'RoomTranslation',
              id: '80972931',
            },
            roomId: 80972931,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '9e4824c1feda48d0',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United States of America',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Jonathan',
          },
          reviewedDate: 1683565940,
          isApproved: true,
          textDetails: {
            negativeText:
              "It's about a mile, maybe a little more from the city center, this isn't a surprise, only if you feel like taking a stroll around the city center you are probably going to need to take the bus (easy) or an Uber.",
            textTrivialFlag: 0,
            lang: 'en',
            title: 'Great place.',
            positiveText:
              "It's a nice quiet apartment not too far from town.  We cooked breakfast each morning on the stove.  It has all the amenities of an apartment.",
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Ovidiu,\n\nThank you for leaving a great review!\nWe are glad to hear you had a great experience with us!\nWe really hope you will choose our apartments again in the future!\nLooking forward to meeting you one more time!\n\nBest wishes,\nReception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-08-06',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-02',
            numNights: 4,
            roomId: 80972905,
            roomType: {
              name: 'One-Bedroom Apartment',
              id: '80972905',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a977bf2f6873ffad',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-o.png',
            countryCode: 'ru',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Russia',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Ovidiu',
          },
          isApproved: true,
          reviewedDate: 1723015815,
          textDetails: {
            negativeText: 'Everything was fine, nothing to complain about.',
            textTrivialFlag: 0,
            title: 'It was a very nice trip. I enjoyed it with my friends.',
            positiveText:
              'The apartment has a good location, with acces to the metro station, bus, superrmarket.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Katia, Thank you for leaving a great review! We are glad to hear you had a great experience with us! We really hope you will choose our apartments again in the future! Looking forward to meeting you one more time! Best wishes, Reception',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-06-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-22',
            numNights: 1,
            roomId: 80972903,
            roomType: {
              name: 'Studio',
              id: '80972903',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '40c334691458fe19',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-GyZjwqUbb-M/AAAAAAAAAAI/AAAAAAAAAAA/ACnBePaK7bqEc8UWHNaXXa6xjt2ozV5VaQ/s96-c/photo.jpg',
            countryCode: 'pt',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Portugal',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Katia',
          },
          isApproved: true,
          reviewedDate: 1721826340,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'Wonderful place, very equiped and excelent location. Peace and quite close to very turistic atractions.\r\nWelcome excelent by the owner.',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Ayalon Levy, Thank you for leaving a great review! We are glad to hear you had a great experience with us! We really hope you will choose our apartments again in the future! Looking forward to meeting you one more time! Best wishes, Reception',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-22',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-18',
            numNights: 4,
            roomId: 80972913,
            roomType: {
              name: 'One-Bedroom Apartment',
              id: '80972913',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '4a7d82ff9982ba8b',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GjsFZ1BLYwZuSTBT7h4wtSCyqDOxR5UqBjq-h-eww=s96-c',
            countryCode: 'il',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Israel',
            guestTypeTranslation: 'Family',
            username: 'Ayalonlevy',
          },
          reviewedDate: 1721727685,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Not something that comes to my mind',
            lang: 'en',
            title: 'Great stay',
            positiveText:
              'The location is super close to public transport and to everything we need. The stuff was super nice and responsive for any request or question. The apartment was great',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Mauricio, Thank you for leaving a great review! We are glad to hear you had a great experience with us! We really hope you will choose our apartments again in the future! Looking forward to meeting you one more time! Best wishes, Reception',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-22',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-20',
            numNights: 2,
            roomType: {
              name: 'One-Bedroom Apartment',
              id: '80972905',
              __typename: 'RoomTranslation',
            },
            roomId: 80972905,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5465f42938392199',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'us',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United States of America',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Mauricio',
          },
          reviewedDate: 1721679881,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'Clean, responsive host company, good location. Comfortable',
            title: 'Great value',
            lang: 'xu',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-21',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-19',
            numNights: 2,
            roomId: 80972905,
            roomType: {
              name: 'One-Bedroom Apartment',
              id: '80972905',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'febcb378fe9fb0cd',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50',
            countryCode: 'fi',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Finland',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Changyang',
          },
          isApproved: true,
          reviewedDate: 1721573841,
          textDetails: {
            textTrivialFlag: 0,
            negativeText:
              'There is no air conditioning in the bedroom, and many information were sent to email instead of through booking. Some instructions provided to check in were outdated, for example, how to open the door downstairs. The coffee machine is very dirty and I did not use.',
            lang: 'en',
            positiveText:
              'Good place, taking taxi is not expensive to airport, walking is also good experience nearby.',
            title: 'Overall, good place to stay overnight in a good location.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Mihai,\n\nThank you so much for taking the time to leave such an amazing review on our property!\nWe are happy to read your expectations were met and your stay waspleasant in our apartments. \nWe appreciate all the kind words and hope to see you back in the future!\nLooking forward to seeing you soon!\n\nBest wishes, \nReception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-07-02',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-30',
            numNights: 2,
            roomId: 80972931,
            roomType: {
              name: 'Studio with Garden View',
              __typename: 'RoomTranslation',
              id: '80972931',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '0959276569330f0a',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-m.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Mihai',
          },
          isApproved: true,
          reviewedDate: 1719947015,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            title: null,
            positiveText: 'Spacious apartment, private parking',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Jelena,\n\nThank you for leaving such a great review!\nWe appreciate all the kind words and are happy your time in Budapest was pleasant. \nWe are sorry for all the inconvenience you experienced during your stay, we will make sure to get all the needed improvements. \nWe hope you will find everything perfect the next time you visit us!\nLooking forward to seeing you again, hopefully soon!\n\nBest Regards,\nReception',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-19',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-15',
            numNights: 4,
            roomType: {
              name: 'Studio',
              id: '80972903',
              __typename: 'RoomTranslation',
            },
            roomId: 80972903,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'b876bc5690555ff5',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GgAUvCjth-_61HlhFCZUu8BhG2zph5W8nSs95S4PA=s96-c',
            countryCode: 'rs',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Serbia',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Jelena',
          },
          isApproved: true,
          reviewedDate: 1718447974,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Internet was not working',
            lang: 'en',
            title: null,
            positiveText: 'Location',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Sandra,\n\nThank you for leaving a great review!\nWe are glad to hear you had a great experience with us!\nWe really hope you will choose our apartments again in the future!\nLooking forward to meeting you one more time!\n\nBest wishes,\nReception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-21',
            numNights: 2,
            roomId: 80972903,
            roomType: {
              name: 'Studio',
              __typename: 'RoomTranslation',
              id: '80972903',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'acf7b305175e916b',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Sandra',
          },
          reviewedDate: 1718269391,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing',
            title: 'Great',
            positiveText: 'Great',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Roland,\n\nThank you so much for taking the time to leave such an amazing review on our property!\nWe are happy to read your expectations were met and your stay was pleasant in our apartments. \nWe appreciate all the kind words and hope to see you back in the future!\nLooking forward to seeing you soon!\n\nBest wishes, \nReception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-06-07',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-05',
            numNights: 2,
            roomType: {
              name: 'Studio',
              __typename: 'RoomTranslation',
              id: '80972903',
            },
            roomId: 80972903,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'a516c6dffdf148f7',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-r.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Solo traveler',
            username: 'Roland',
          },
          isApproved: true,
          reviewedDate: 1717756370,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: 'Noise which woke me a few times on second night.',
            textTrivialFlag: 0,
            lang: 'en',
            positiveText:
              "The communication with the staff before, during and after the stay was very welcoming and professional.  The welcome on the day was the nicest I have ever had, personally from the member of staff and also via a note in the apartment with some helpful tips about Budapest and Hungary.  \n\nThe apartment is well located, within 25 minutes walking distance of Keletti Station where I arrived. It is about the same length of time to the main sights on the Danube. It is also an eight minute walk from two metro stations - Corvin and Rakoczi. A tram stop is closer. My only query about the neighbourhood is the road is rather run down and some of the locals were either drunk or drugged.\n\nThe apartment was well-decorated and spotlessly clean. It was also spacious with defined sleeping, dining and kitchen areas.  A comfy armchair would have been welcomed. It was also well-equipped for a short stay, with some cooking utensils, etc. Tea and real coffee is generously provided. Very handy is the washing machine, for which you are kindly provided with a soap powder capsule. A clothes horse and an ironing board would have been helpful (you are provided with an iron). I would have also liked some instructions for the TV, with a list of any non-Hungarian speaking channels. \n\nThe bed was comfortable and I had a very good first night's sleep. Unfortunately, other residents were very noisy coming home in the early hours and I was also woken on my second night by the sound of the refuse collectors. \n\nThe price was very reasonable and I would happily stay here again.",
            title: 'Good value, with great staff',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Alexandra,\n\nThank you for leaving a great review!\nWe are glad to hear you had a great experience with us!\nWe really hope you will choose our apartments again in the future!\nLooking forward to meeting you one more time!\n\nBest wishes,\nPrince Reception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-05-22',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-20',
            numNights: 2,
            roomType: {
              name: 'Studio with Garden View',
              id: '80972931',
              __typename: 'RoomTranslation',
            },
            roomId: 80972931,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5d29e4d4cf10b981',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a-/AOh14GjyKmYWk3jFY3l5l7IUVKvJ12a0mM3vLXP5KUug=s96-c',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Alexandra',
          },
          reviewedDate: 1716586592,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            positiveText:
              'The apartment has everything you need for a "home-like" stay, including a coffee machine and an iron. We felt very well here.',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear A.M,\nThank you so much for leaving an outstanding review on our property! \nWe appreciate all your kind words and your trust in us! \nWe are more than happy to read your stay was pleasant and your time in Budapest was spent in comfort! \nLooking forward to meeting you again, hopefully very soon!\nKind Regards, \nPrince Reception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-23',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-13',
            numNights: 10,
            roomId: 80972903,
            roomType: {
              name: 'Studio',
              __typename: 'RoomTranslation',
              id: '80972903',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '3c2ad839e622ffd1',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh6.googleusercontent.com/-mUMHdxYFzX4/AAAAAAAAAAI/AAAAAAAAAAA/AB6qoq3JDbqHP6y36wzqLSEmY_zQFt768A/s96-c/photo.jpg',
            countryCode: 'fr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'France',
            guestTypeTranslation: 'Family',
            username: 'A',
          },
          isApproved: true,
          reviewedDate: 1716497290,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            lang: 'xu',
            positiveText:
              'The location was perfect . The apartment was very nice and functional.',
            title: null,
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Look,\n\nThank you for leaving a great review!\nWe are glad to hear you had a great experience with us!\nWe really hope you will choose our apartments again in the future!\nLooking forward to meeting you one more time!\n\nBest wishes,\nPrince Reception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-10',
            numNights: 6,
            roomId: 80972903,
            roomType: {
              name: 'Studio',
              __typename: 'RoomTranslation',
              id: '80972903',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '3b01d087fb956c47',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-l.png',
            countryCode: 'il',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Israel',
            guestTypeTranslation: 'Family',
            username: 'Look',
          },
          isApproved: true,
          reviewedDate: 1715886430,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'All was ok',
            positiveText: 'Good location. Very clean apartment',
            title: null,
            lang: 'xu',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Antoniu,\n\nThank you for leaving a great review!\nWe are glad to hear you had a great experience with us!\nWe really hope you will choose our apartments again in the future!\nLooking forward to meeting you one more time!\n\nBest wishes,\nReception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-05-13',
            __typename: 'BookingDetails',
            checkinDate: '2024-05-11',
            numNights: 2,
            roomId: 80972905,
            roomType: {
              name: 'One-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '80972905',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '604cae3edc075072',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Antoniu',
          },
          isApproved: true,
          reviewedDate: 1715659363,
          textDetails: {
            negativeText: null,
            textTrivialFlag: 0,
            title: null,
            positiveText:
              'Nice apartment, very friendly staff and great location in the city.\nThe underground parking was very useful. ( paid separatly )',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Jonathon,\n\nThank you for taking the effort and time to leave us a review!\nWe are happy to hear you had a great experience with us and we hope we made your time in Budapest more pleasant!\nWe are also sorry for the inconvenience, hope it didn’t affect much on your comfort!\nWe hope to see you back again!\n\nKind Regards, \nReception\n',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-04-15',
            __typename: 'BookingDetails',
            checkinDate: '2024-04-12',
            numNights: 3,
            roomId: 80972905,
            roomType: {
              name: 'One-Bedroom Apartment',
              __typename: 'RoomTranslation',
              id: '80972905',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f99415eddaddf632',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Jonathon',
          },
          reviewedDate: 1715584441,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'The stretched hose in the shower, just buy a slightly longer one 🤣',
            textTrivialFlag: 0,
            lang: 'en',
            positiveText: 'Very clean and everything you need.',
            title: 'Great apartment in a great location',
            __typename: 'TextDetails',
          },
        },
      ],
      reviewsCount: 2543,
      timeOfYearFilter: [
        {
          name: 'All (2543)',
          count: 2543,
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Jun–Aug',
          count: 0,
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Sep–Nov',
          count: 0,
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Dec–Feb',
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 2543,
    },
    review_score: 8.6,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041429,
    number_of_rooms: 1,
    stars: 3,
    address: 'Kisfaludy utca 18-20.',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 2,
    location: {
      longitude: 19.0722119808197,
      latitude: 47.4881872565201,
    },
    zip: '1082',
    hotel_description:
      'Situated in Budapest and with the Danube River reachable in 1 km, Prince Apartments offers accommodation with modern facilities, as well as a helpful front desk, a garden and a business centre. Free WiFi is available in all areas. Most of the apartments come with a balcony and a garden view. Some of the units contain a seating area with a sofa bed, a flat-screen satellite TV and a DVD-player. Each also includes a well-fitted kitchenette with a microwave. Shuttle transports can be arranged at an additional cost. Other surcharged services available for guests include luggage storage, dry cleaning and ironing service. The nearest tram stop is reachable within 200 metres and the metro line 3 is located 400 metres away. The Corvin Plaza is situated 200 metres away and the Historical Museum can be reached within 900 metres. The Grand Market Hall and the Gellért Thermal Bath are in a radius of 1.8 km from the apartments.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkeringshus',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport fra lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport til lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Nøgleadgang',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175100.jpg?k=466bc74ddbb3764464c990116e1d8d30d6fa8d2ccd6dbe9c19e13593f4dbdc5c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/519476356.jpg?k=12e2263fce1c8922878feee1dea90ddee7fec4814f4888f38ab2c6a735f3cb25&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/431152611.jpg?k=3f1f5e0c6de172c6d76bab2d762e571bdae1cebcede06ad491396a2663e5a9b9&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175101.jpg?k=2108432b6f63dc3da3ef700b45a30602f6414ccd3d23beb773032b192a53b127&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504686757.jpg?k=982510bb35818401d20cae6db8703dc480ff932f5e183fa0b54ad53b79d77107&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/427326324.jpg?k=34e5a7618970d8895aebefa8b05496efa135d1cb35463cd573fb472f3143b2cc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504686714.jpg?k=6262391864824473dff9b0c1a2e3dd2361a5fcf683188a0f5827d47ad7abdcff&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175092.jpg?k=6899972b621361aa17d4f8243b50b9f64c85ff99c216f855bfa986ea14052c00&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175089.jpg?k=51e316fc09dc77f3fa3a5c961a2ed67b39187df65146ee1a34accd4024317725&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175097.jpg?k=81d18aa34feec8e27455d647b4d1e7aa979c44463a819f9f3ffce661f4f95722&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175086.jpg?k=9b92ee19717d49e3e1f9c23838e86e18a51626befe85d70c2465a0e9ad15ab7e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504686781.jpg?k=772cff62dd27a8c2c0c3b3209f161363440b62977137b676718d088fcb5264db&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/216854624.jpg?k=bbf39c6fe5b828380083bcd6f632bae92a3515885134fa680fed2c6acb319506&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/431152605.jpg?k=e02d2b2102575e1cfb2ff02c1244efbdc21b79a060680f35bc69c4741fe7108d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/26230154.jpg?k=548fa0e36b11ccfdc497a4583d87290db12e47d5e6fa323918897113f7d4f083&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504686717.jpg?k=f3724b747d268546ad0343a67dcd4d498beeb2ee887c7d4050a332045757b905&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/427326273.jpg?k=8d8534f30f3ac1470043e8bf8de3e57e350e032219d439a77eecfd6ae9da235c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/427326315.jpg?k=94258c2710882bd994b29b8fe59fa8983db38c4f1363aaf9325e37362fd05b2a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/427326300.jpg?k=88143d5769ef7ab1bb67fdd9df32c57807188228f93f3857d05305c62e577f84&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/532795818.jpg?k=6a2b8e10a8ce31583acfc66a2f2ad0637d2c4c5058d3e4f00cceaa424da00900&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/532795817.jpg?k=b6cba4277835b8edf3b6b85af52792b6ccb86580cd82fc028a10306d5909aa63&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/426833839.jpg?k=02a55907022076ac3caf89cad5256d5338b90b4c84ec2292465f541861f25b9b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/426833840.jpg?k=2ec619575ee61bfe7d3895d096c0999d23c4b32c8d7bdc924ea39585faea0df4&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/433618068.jpg?k=e7d0e48415218a13036ee336d38adb447c7decf0e8055f3d6c85547059bb3b86&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/426833838.jpg?k=f40177f4b95fefdaff89ec46a35cc9b87f6ef5c66ee6c5ada1813027f8557c85&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/427326306.jpg?k=b0e0af972cac8e9538484396653bc1a61ba76fa24214c0c21fee5312dc8b4022&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/412751493.jpg?k=c29f0047167326e24d1ffb152171439611aa1638b5ee106a89a2465a2653ec58&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/412751594.jpg?k=8f4162a59ba095abfa2af989244c544466ac89b9cc980b18925bedea4e679c9d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516854.jpg?k=b1a02af6b69d5204369b55763d871e71cfc043be6954f2b21d78834cd3f25450&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516820.jpg?k=f3cef61f91203c45bab40913b5d033cc984f69bec11ae4d258b0747d5f4fcd22&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/248756883.jpg?k=e450b75b27d22e87ca697d7f0323fb99af0705e0ac28bc0d6beed3d6c469bc5c&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/248757049.jpg?k=1c09d05de407b3904b044f930ae2837e443073124b5c240b6df8bb0a75dcaf86&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516853.jpg?k=11fa3f03e6100bf18fc9d8b938443eb4574f5e8ff55b168c8b0d197737a817dc&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516818.jpg?k=51d2aa77eeec8fc31e4bdcd6f9a21149a4aeabeb71485ef22a61d16effee2647&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516823.jpg?k=49073a46e7047efb203604eb37eadae738fb0fd9b0fe4668e2677299dd15d5b6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504685190.jpg?k=3a6268e1be1b40008020dbb98fc72f37ce6af5ea3d7a0aac2a37840dd93aaafe&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516863.jpg?k=4e7e55136c09ea3e97b3285edb9d3bb7b1cc2f5f5ff2563f61cdd39ce6d53e0b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/211866301.jpg?k=5238a01c116fd553b5eb0b35a9fd10df3b083aa49580d85414983a096f36cd40&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504686739.jpg?k=541efe11f8d8b3cf07dd078b3f07145813e0e97f43e0310447d52878d97ea74e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/504685193.jpg?k=c5b49589b1bbfd1ab3dd8e1a5c1e4048ab1e507d48a4096a389ae562392a2dd1&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/227775943.jpg?k=d3163d524eb376637abb7635cf2441566bab9c429ed000b765650bc3ca0fdc96&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/431152588.jpg?k=bb3400976be18de23265f92e1721132cd3b7861138d4f49415803a26719855e2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/26230631.jpg?k=fe2281156946feccc5c94e799fb8f94fea98eae98b081ac0722aa4e40f94f7e0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516833.jpg?k=0f71b63acbc85cc06cedb49bfc90cd47f0ddb3ccc1e55fdbf093c2092646987b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/118516849.jpg?k=9bb5a96ce932d2b54a4a0869d90b501a743b7346170e259d6fe85999bd5fc289&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 1,
      max_n_people: 2,
      rooms: [
        {
          max_n_people: 2,
          name: 'Studio 2 Pax',
          facilities: [],
          price: 172.52550000000002,
          photo: [
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175100.jpg?k=466bc74ddbb3764464c990116e1d8d30d6fa8d2ccd6dbe9c19e13593f4dbdc5c&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/519476356.jpg?k=12e2263fce1c8922878feee1dea90ddee7fec4814f4888f38ab2c6a735f3cb25&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/431152611.jpg?k=3f1f5e0c6de172c6d76bab2d762e571bdae1cebcede06ad491396a2663e5a9b9&o=&hp=1',
            'https://cf.bstatic.com/xdata/images/hotel/max1280x900/505175101.jpg?k=2108432b6f63dc3da3ef700b45a30602f6414ccd3d23beb773032b192a53b127&o=&hp=1',
          ],
          breakfast_included: false,
          half_board: false,
          full_board: false,
          all_inclusive: false,
        },
      ],
    },
    all_rooms_available: [],
    accomodation_type: 'apartment',
    provider: 'HOTELSTON',
    late_checkin: false,
    additional_policies: {},
    late_arrival: false,
    discount: 0,
    price_without_discount: 172.52550000000002,
    price_increased: true,
    price_decreased: false,
    price_diff: 38.4,
  },
  {
    id: -10,
    trip_id: 43646104,
    purchase_id: null,
    name: 'Medos Hotel',
    street_address: 'Jókai tér 9.',
    city: 'Budapest',
    zip_code: '1061',
    country: '',
    nights_at: 3,
    check_in_date: '2024-11-18',
    check_out_date: '2024-11-21',
    total_amount_of_people: 1,
    affiliate_url:
      'https://www.booking.com/hotel/hu/medosz.html?affiliate_id=2105899&aid=2105899&no_rooms=1&checkin=2024-11-18&checkout=2024-11-21&group_adults=1&group_children=0',
    price_total: 218.89,
    price_total_desc: 'Price for all the hotels in trip',
    price_hotel: 218.89075,
    price_hotel_desc: 'Price of the new hotel',
    price_per_passenger: 218.89075,
    currency_code: 'EUR',
    position: 0,
    hotel_rating: 16.15089603331583,
    photo_url:
      'https://cf.bstatic.com/xdata/images/hotel/max1280x900/517166765.jpg?k=c8183fdc090a5bf434b86e3fc35cfee3a9203d14c73fb7e2436ea8a2a9b030a0&o=&hp=1',
    reviews: {
      reviewScoreFilter: [
        {
          count: 9349,
          name: 'All (9349)',
          value: 'ALL',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 4398,
          name: 'Wonderful: 9+ (4398)',
          value: 'REVIEW_ADJ_SUPERB',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Good: 7-9 (4203)',
          count: 4203,
          value: 'REVIEW_ADJ_GOOD',
          __typename: 'ReviewScoreFilter',
        },
        {
          count: 585,
          name: 'Fair: 5-7 (585)',
          value: 'REVIEW_ADJ_AVERAGE_PASSABLE',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Poor: 3-5 (116)',
          count: 116,
          value: 'REVIEW_ADJ_POOR',
          __typename: 'ReviewScoreFilter',
        },
        {
          name: 'Very Poor: 1-3 (47)',
          count: 47,
          value: 'REVIEW_ADJ_VERY_POOR',
          __typename: 'ReviewScoreFilter',
        },
      ],
      topicFilters: [
        {
          translation: {
            name: 'Location',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_location',
          },
          isSelected: false,
          name: 'Location',
          id: 249,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Breakfast',
          translation: {
            name: 'Breakfast',
            id: 'topic_breakfast',
            __typename: 'ReviewTopicTranslation',
          },
          id: 245,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Room',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_room',
          },
          name: 'Room',
          isSelected: false,
          id: 270,
          __typename: 'TopicFilter',
        },
        {
          name: 'Clean',
          isSelected: false,
          translation: {
            name: 'Clean',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_clean',
          },
          id: 276,
          __typename: 'TopicFilter',
        },
        {
          name: 'Bed',
          isSelected: false,
          translation: {
            name: 'Bed',
            id: 'topic_bed',
            __typename: 'ReviewTopicTranslation',
          },
          id: 254,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bathroom',
            id: 'topic_bathroom',
            __typename: 'ReviewTopicTranslation',
          },
          name: 'Bathroom',
          isSelected: false,
          id: 255,
          __typename: 'TopicFilter',
        },
        {
          name: 'View',
          isSelected: false,
          translation: {
            name: 'View',
            id: 'topic_view',
            __typename: 'ReviewTopicTranslation',
          },
          id: 257,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Toilet',
          translation: {
            name: 'Toilet',
            id: 'topic_toilet',
            __typename: 'ReviewTopicTranslation',
          },
          id: 280,
          __typename: 'TopicFilter',
        },
        {
          name: 'Shower',
          isSelected: false,
          translation: {
            name: 'Shower',
            id: 'topic_shower',
            __typename: 'ReviewTopicTranslation',
          },
          id: 263,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bus',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_bus',
          },
          isSelected: false,
          name: 'Bus',
          id: 267,
          __typename: 'TopicFilter',
        },
        {
          name: 'Quiet',
          isSelected: false,
          translation: {
            name: 'Quiet',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_quiet',
          },
          id: 258,
          __typename: 'TopicFilter',
        },
        {
          name: 'Noise',
          isSelected: false,
          translation: {
            name: 'Noise',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_noise',
          },
          id: 252,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Loud',
          translation: {
            name: 'Loud',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_loud',
          },
          id: 275,
          __typename: 'TopicFilter',
        },
        {
          name: 'Window',
          isSelected: false,
          translation: {
            name: 'Window',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_window',
          },
          id: 289,
          __typename: 'TopicFilter',
        },
        {
          name: 'Towel',
          isSelected: false,
          translation: {
            name: 'Towel',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_towel',
          },
          id: 281,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Suite',
            id: 'topic_suite',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Suite',
          id: 278,
          __typename: 'TopicFilter',
        },
        {
          isSelected: false,
          name: 'Coffee',
          translation: {
            name: 'Coffee',
            id: 'topic_coffee',
            __typename: 'ReviewTopicTranslation',
          },
          id: 296,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Hot',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_hot',
          },
          isSelected: false,
          name: 'Hot',
          id: 290,
          __typename: 'TopicFilter',
        },
        {
          name: 'Balcony',
          isSelected: false,
          translation: {
            name: 'Balcony',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_balcony',
          },
          id: 272,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Parking',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_parking',
          },
          isSelected: false,
          name: 'Parking',
          id: 246,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Luggage',
            __typename: 'ReviewTopicTranslation',
            id: 'topic_luggage',
          },
          isSelected: false,
          name: 'Luggage',
          id: 259,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Lift',
            id: 'topic_lift',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Lift',
          id: 260,
          __typename: 'TopicFilter',
        },
        {
          translation: {
            name: 'Bar',
            id: 'topic_bar',
            __typename: 'ReviewTopicTranslation',
          },
          isSelected: false,
          name: 'Bar',
          id: 271,
          __typename: 'TopicFilter',
        },
      ],
      ratingScores: [
        {
          translation: 'Staff',
          name: 'hotel_staff',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.64957523345947,
            ufiScoreHigherBound: 9.80970001220703,
            __typename: 'UfiScoreAverage',
          },
          value: 8.70295429229736,
          __typename: 'RatingScore',
        },
        {
          translation: 'Facilities',
          name: 'hotel_services',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.05185031890869,
            ufiScoreHigherBound: 9.61482429504395,
            __typename: 'UfiScoreAverage',
          },
          value: 8.15843486785889,
          __typename: 'RatingScore',
        },
        {
          translation: 'Cleanliness',
          name: 'hotel_clean',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.15104961395264,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.74524974822998,
          },
          value: 8.45007038116455,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_comfort',
          translation: 'Comfort',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.17277526855469,
            ufiScoreHigherBound: 9.63462543487549,
            __typename: 'UfiScoreAverage',
          },
          value: 8.43294048309326,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_value',
          translation: 'Value for money',
          ufiScoresAverage: {
            ufiScoreLowerBound: 6.86039972305298,
            ufiScoreHigherBound: 9.25069999694824,
            __typename: 'UfiScoreAverage',
          },
          value: 8.6158447265625,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_location',
          translation: 'Location',
          ufiScoresAverage: {
            ufiScoreLowerBound: 8.0154504776001,
            __typename: 'UfiScoreAverage',
            ufiScoreHigherBound: 9.3919506072998,
          },
          value: 9.40812873840332,
          __typename: 'RatingScore',
        },
        {
          name: 'hotel_free_wifi',
          translation: 'Free Wifi',
          ufiScoresAverage: {
            ufiScoreLowerBound: 7.32770013809204,
            ufiScoreHigherBound: 8.67230033874512,
            __typename: 'UfiScoreAverage',
          },
          value: 8.65625,
          __typename: 'RatingScore',
        },
      ],
      __typename: 'ReviewListFrontendResult',
      customerTypeFilter: [
        {
          name: 'All (9349)',
          count: 9349,
          value: 'ALL',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Families (2164)',
          count: 2164,
          value: 'FAMILIES',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 4647,
          name: 'Couples (4647)',
          value: 'COUPLES',
          __typename: 'CustomerTypeFilter',
        },
        {
          name: 'Groups of friends (1957)',
          count: 1957,
          value: 'GROUP_OF_FRIENDS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 581,
          name: 'Solo travelers (581)',
          value: 'SOLO_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
        {
          count: 298,
          name: 'Business travelers (298)',
          value: 'BUSINESS_TRAVELLERS',
          __typename: 'CustomerTypeFilter',
        },
      ],
      languageFilter: [
        {
          count: 9349,
          name: 'All (9349)',
          value: '',
          countryFlag: null,
          __typename: 'LanguageFilter',
        },
        {
          count: 71,
          name: 'Danish (71)',
          value: 'da',
          countryFlag: 'dk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'English (1819)',
          count: 1819,
          countryFlag: 'gb',
          value: 'en',
          __typename: 'LanguageFilter',
        },
        {
          name: 'German (785)',
          count: 785,
          countryFlag: 'de',
          value: 'de',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Polish (318)',
          count: 318,
          countryFlag: 'pl',
          value: 'pl',
          __typename: 'LanguageFilter',
        },
        {
          count: 871,
          name: 'Spanish (871)',
          value: 'es',
          countryFlag: 'es',
          __typename: 'LanguageFilter',
        },
        {
          count: 28,
          name: 'Chinese (28)',
          value: 'zh',
          countryFlag: 'cn',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Russian (326)',
          count: 326,
          countryFlag: 'ru',
          value: 'ru',
          __typename: 'LanguageFilter',
        },
        {
          count: 86,
          name: 'Swedish (86)',
          value: 'sv',
          countryFlag: 'se',
          __typename: 'LanguageFilter',
        },
        {
          name: 'French (356)',
          count: 356,
          countryFlag: 'fr',
          value: 'fr',
          __typename: 'LanguageFilter',
        },
        {
          count: 1437,
          name: 'Italian (1437)',
          value: 'it',
          countryFlag: 'it',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Romanian (197)',
          count: 197,
          countryFlag: 'ro',
          value: 'ro',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Dutch (220)',
          count: 220,
          countryFlag: 'nl',
          value: 'nl',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Lithuanian (24)',
          count: 24,
          countryFlag: 'lt',
          value: 'lt',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Norwegian (27)',
          count: 27,
          countryFlag: 'no',
          value: 'no',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Korean (19)',
          count: 19,
          countryFlag: 'kr',
          value: 'ko',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Hungarian (390)',
          count: 390,
          countryFlag: 'hu',
          value: 'hu',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Thai (2)',
          count: 2,
          countryFlag: 'th',
          value: 'th',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Ukrainian (65)',
          count: 65,
          countryFlag: 'ua',
          value: 'uk',
          __typename: 'LanguageFilter',
        },
        {
          count: 6,
          name: 'Arabic (6)',
          value: 'ar',
          countryFlag: 'sa',
          __typename: 'LanguageFilter',
        },
        {
          count: 193,
          name: 'Turkish (193)',
          value: 'tr',
          countryFlag: 'tr',
          __typename: 'LanguageFilter',
        },
        {
          count: 13,
          name: 'Japanese (13)',
          value: 'ja',
          countryFlag: 'jp',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Czech (470)',
          count: 470,
          countryFlag: 'cz',
          value: 'cs',
          __typename: 'LanguageFilter',
        },
        {
          count: 329,
          name: 'Portuguese (329)',
          value: 'pt',
          countryFlag: 'pt',
          __typename: 'LanguageFilter',
        },
        {
          count: 36,
          name: 'Bulgarian (36)',
          value: 'bg',
          countryFlag: 'bg',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Greek (472)',
          count: 472,
          countryFlag: 'gr',
          value: 'el',
          __typename: 'LanguageFilter',
        },
        {
          count: 81,
          name: 'Croatian (81)',
          value: 'hr',
          countryFlag: 'hr',
          __typename: 'LanguageFilter',
        },
        {
          count: 54,
          name: 'Serbian (54)',
          value: 'sr',
          countryFlag: 'rs',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Latvian (17)',
          count: 17,
          countryFlag: 'lv',
          value: 'lv',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Vietnamese (1)',
          count: 1,
          countryFlag: 'vn',
          value: 'vi',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Finnish (56)',
          count: 56,
          countryFlag: 'fi',
          value: 'fi',
          __typename: 'LanguageFilter',
        },
        {
          count: 2,
          name: 'Icelandic (2)',
          value: 'is',
          countryFlag: 'is',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovak (249)',
          count: 249,
          countryFlag: 'sk',
          value: 'sk',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Estonian (7)',
          count: 7,
          countryFlag: 'ee',
          value: 'et',
          __typename: 'LanguageFilter',
        },
        {
          count: 28,
          name: 'Catalan (28)',
          value: 'ca',
          countryFlag: 'catalonia',
          __typename: 'LanguageFilter',
        },
        {
          name: 'Slovenian (58)',
          count: 58,
          countryFlag: 'si',
          value: 'sl',
          __typename: 'LanguageFilter',
        },
        {
          count: 195,
          name: 'Hebrew (195)',
          value: 'he',
          countryFlag: 'il',
          __typename: 'LanguageFilter',
        },
      ],
      sorters: [
        {
          name: 'Most relevant',
          value: 'MOST_RELEVANT',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Newest first',
          value: 'NEWEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Oldest first',
          value: 'OLDEST_FIRST',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Highest scores',
          value: 'SCORE_DESC',
          __typename: 'ReviewSorter',
        },
        {
          name: 'Lowest scores',
          value: 'SCORE_ASC',
          __typename: 'ReviewSorter',
        },
      ],
      reviewCard: [
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: true,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2023-11-19',
            __typename: 'BookingDetails',
            checkinDate: '2023-11-16',
            numNights: 3,
            roomType: {
              name: 'Economy Twin Room',
              __typename: 'RoomTranslation',
              id: '18522615',
            },
            roomId: 18522615,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'c0bc47ce9a0d2edf',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-h.png',
            countryCode: 'cz',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Czech Republic',
            guestTypeTranslation: 'Group',
            username: 'Hector',
          },
          reviewedDate: 1700581157,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: 'Everything works perfectly',
            textTrivialFlag: 0,
            positiveText:
              'Breakfast is Amazing here ! So far I totally recommend this hotel, it is a real 3 stars place',
            title:
              'One of the best 3 stars hotels in Budapest, for the year 2023',
            lang: 'xu',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-09-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-09-12',
            numNights: 6,
            roomType: {
              name: 'Superior Double Room with Balcony',
              id: '18522613',
              __typename: 'RoomTranslation',
            },
            roomId: 18522613,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '63e844df50aa82bb',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-b.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Solo traveler',
            username: 'Brian',
          },
          reviewedDate: 1726745756,
          isApproved: true,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              'Good location, fairly central, about 15 minuets walk from the Basilica and five minutes from a Hop-on-Hop-off bus route (bus tickets can be bought in hotel), \r\nGood international television coverage in English language television on Deutsche Welle and TRT (Turkish TV).\r\nGood choice for breakfast, helpful staff.',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-09-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-09-12',
            numNights: 6,
            roomType: {
              name: 'Superior Double Room',
              __typename: 'RoomTranslation',
              id: '18522617',
            },
            roomId: 18522617,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '4b518346bc20aba7',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh4.googleusercontent.com/-waXz-LMgD5o/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3reuhIe5UDysShAQaz55WJnUOQR7AQ/mo/photo.jpg',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Gabor',
          },
          isApproved: true,
          reviewedDate: 1726725912,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Nothing - everything was good.',
            title: 'A super stay in an excellent hotel.',
            positiveText:
              'Very comfortable room, helpful staff and excellent location. Any help required was attended to within minutes. Good breakfast too.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-09-15',
            __typename: 'BookingDetails',
            checkinDate: '2024-09-13',
            numNights: 2,
            roomId: 18522604,
            roomType: {
              name: 'Comfort Double or Twin Room',
              id: '18522604',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '81c7d2db45aa5434',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/AATXAJz9cehl1rpiipYY3svu4q35kqfVgi02LDTcuu29=s96-c',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Italy',
            guestTypeTranslation: 'Couple',
            username: 'Palazzo',
          },
          reviewedDate: 1726561913,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText: 'Excellent location',
            title:
              'Comfortable and spacious room. Good sweet and savory breakfast, friendly staff',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-09-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-09-12',
            numNights: 4,
            roomId: 18522615,
            roomType: {
              name: 'Economy Twin Room',
              id: '18522615',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'db3e3a8552276558',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh5.googleusercontent.com/-SZGe8Qvg1hU/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucloqQ8Yi8Ct5qdzvzmfsDFqPeo_9g/s96-c/photo.jpg',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Potts',
          },
          isApproved: true,
          reviewedDate: 1726523052,
          textDetails: {
            negativeText: 'Had no concerns with the property.',
            textTrivialFlag: 0,
            positiveText:
              'Did exactly what it said on the tin. Simple, clean rooms that had all that was required. An excellent breakfast option. Great location for exploring. Would recommend booking the Hop On Hop Off sightseeing bus at reception. Bus stop 5 mins walk from hotel.',
            title:
              'Highly recommend if travelling on a budget. Great value stay. Excellent breakfast option.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'SOLO_TRAVELLERS',
            checkoutDate: '2024-09-09',
            __typename: 'BookingDetails',
            checkinDate: '2024-09-08',
            numNights: 1,
            roomType: {
              name: 'Comfort Double or Twin Room',
              __typename: 'RoomTranslation',
              id: '18522604',
            },
            roomId: 18522604,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '14506f4371983dee',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-j.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'United Kingdom',
            guestTypeTranslation: 'Solo traveler',
            username: 'Joe',
          },
          isApproved: true,
          reviewedDate: 1725955016,
          textDetails: {
            negativeText: 'N/A',
            textTrivialFlag: 0,
            lang: 'en',
            title: 'Would stay again',
            positiveText:
              'Great size room, huge window with great view. Quiet location but still central with good transport links. Breakfast was fresh with lots of options.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-09-08',
            __typename: 'BookingDetails',
            checkinDate: '2024-09-06',
            numNights: 2,
            roomType: {
              name: 'Superior Double Room',
              __typename: 'RoomTranslation',
              id: '18522617',
            },
            roomId: 18522617,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '4859891c0697af54',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-c.png',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Romania',
            guestTypeTranslation: 'Couple',
            username: 'Cristina',
          },
          isApproved: true,
          reviewedDate: 1725903332,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: '-',
            textTrivialFlag: 0,
            lang: 'en',
            positiveText:
              'Everything was amazing. The breakfast was varied and very tasty. The room was very clean and cozy. We will happily visit you again!',
            title: 'Awesome',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-09-05',
            __typename: 'BookingDetails',
            checkinDate: '2024-09-02',
            numNights: 3,
            roomId: 18522604,
            roomType: {
              name: 'Comfort Double or Twin Room',
              id: '18522604',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5baca41bf2e7e1b5',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-g.png',
            countryCode: 'ca',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Canada',
            guestTypeTranslation: 'Couple',
            username: 'George',
          },
          isApproved: true,
          reviewedDate: 1725688941,
          textDetails: {
            negativeText: 'Room was a bit small.',
            textTrivialFlag: 0,
            lang: 'en',
            title: 'Delightful.',
            positiveText: 'All of the above.',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-07-12',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-08',
            numNights: 4,
            roomId: 18522604,
            roomType: {
              name: 'Comfort Double or Twin Room',
              id: '18522604',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '467720d458d6785d',
          uvcUrl: null,
          guestDetails: {
            avatarUrl: null,
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Group',
            username: 'Emma',
          },
          reviewedDate: 1725461588,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              "Nothing, everything was great. Couldn't have asked for better value for money.",
            textTrivialFlag: 0,
            positiveText:
              'Staff were really friendly and helpful. Room and bathroom were always cleaned to a high standard and a decent size. The air con worked well which was great during the heatwave that we had. Great proximity to attractions in the city. Fridge at reception for snack and drinks - they even put the Euros on in the reception!',
            title: 'Fantastic value for money',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-29',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-25',
            numNights: 4,
            roomType: {
              name: 'Family Double Room',
              id: '18522618',
              __typename: 'RoomTranslation',
            },
            roomId: 18522618,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'dc327510c661d163',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-i.png',
            countryCode: 'tr',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Turkey',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'İdemhür',
          },
          reviewedDate: 1725322866,
          isApproved: true,
          textDetails: {
            negativeText:
              'We stayed for 4 nights, our towels were not replaced.\nIf you sleep with the windows open at night, you might hear noise from people on the street.',
            textTrivialFlag: 0,
            title: 'Overall, it is definitely recommended.',
            positiveText:
              'The location is right in the city center, the neighborhood is lively. Also it is very easy to get everywhere with public transportation.\nThe hotel building was well-maintained, and the staff were attentive.',
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          bookingDetails: {
            customerType: 'GROUP_OF_FRIENDS',
            checkoutDate: '2024-06-18',
            __typename: 'BookingDetails',
            checkinDate: '2024-06-15',
            numNights: 3,
            roomId: 18522615,
            roomType: {
              name: 'Economy Twin Room',
              id: '18522615',
              __typename: 'RoomTranslation',
            },
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '01558b1e9e8e63e0',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh3.googleusercontent.com/a/ACg8ocI1RbH8hbpj_xg3MK5sndjr9t6ZegrZfWZJ8KUVhdhbtpw=s96-c',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'Romania',
            guestTypeTranslation: 'Group',
            username: 'Miroslava',
          },
          reviewedDate: 1725309648,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText:
              'i did not have any problems with this place. not sure if i would recomend to change something.',
            textTrivialFlag: 0,
            lang: 'en',
            title: null,
            positiveText:
              'very nice place. pretty small, but very comfortable and clean. items on the breakfast can change every day. soft bad and very nice view from the window. i would defenetly recomend this hotel.',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Anil Kumar,\nThank you so much for taking the time to share your positive experience at our hotel! We are thrilled to hear that you enjoyed your stay with us.\nIt warms our hearts to know that our team&#39;s efforts to create a welcoming and comfortable environment did not go unnoticed. We strive to provide top-notch service, and your kind words validate our commitment to guest satisfaction.\nThank you for choosing Medos Hotel. We genuinely appreciate your positive review, and we can&#39;t wait to have the pleasure of hosting you again in the future.\nBest regards,\nYour Medos Team',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-29',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-26',
            numNights: 3,
            roomType: {
              name: 'Comfort Double or Twin Room',
              id: '18522604',
              __typename: 'RoomTranslation',
            },
            roomId: 18522604,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '4071d20cbb386971',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://lh6.googleusercontent.com/-mc9p2ceKd7I/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdFnW1FY2YnC8VAgyo4Rkjg4Tbkbg/photo.jpg',
            countryCode: 'in',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            avatarColor: null,
            countryName: 'India',
            guestTypeTranslation: 'Couple',
            username: 'Anil',
          },
          reviewedDate: 1725059899,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            negativeText: 'Breakfast not included',
            textTrivialFlag: 0,
            positiveText:
              'Location is just couple of minutes away from all public transport and the HOHO bus stop too.\nNice location surrounding the hotel with multi cuisine restaurants',
            title: 'Awesome',
            lang: 'en',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: {
            reply:
              'Dear Iungu,\nlet us thank you for your positive review about Hotel Medos. Regarding the parking we kindly inform you that we have just a limited number of parking places in our in-house garage and pre-booking is essential. But this information is clearly highlighted on all web-platforms. When you inquired about the parking, ours was already full but we offered you 2 alternative parking possibilities nearby. All in all, thank you again and we wish you all the best. Kind regards Your Medos Team',
            __typename: 'PropertyReplyData',
          },
          photos: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-08-26',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-25',
            numNights: 1,
            roomType: {
              name: 'Comfort Double or Twin Room',
              id: '18522604',
              __typename: 'RoomTranslation',
            },
            roomId: 18522604,
          },
          positiveHighlights: null,
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '5d9370e03fe52b23',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://graph.facebook.com/v2.9/2245653275532629/picture?type=square&height=64&width=64',
            countryCode: 'ro',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Romania',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Lungu',
          },
          reviewedDate: 1725027765,
          isApproved: true,
          helpfulVotesCount: 0,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'We did not like that we have not parking,.',
            positiveText:
              'It was OK, exception parking, we were forced in the night to find parking.',
            title: null,
            lang: 'xu',
            __typename: 'TextDetails',
          },
        },
        {
          reviewScore: 10,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'FAMILIES',
            checkoutDate: '2024-08-16',
            __typename: 'BookingDetails',
            checkinDate: '2024-08-13',
            numNights: 3,
            roomType: {
              name: 'Family Room',
              __typename: 'RoomTranslation',
              id: '18522605',
            },
            roomId: 18522605,
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: 'f31ffee36f4af172',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-s.png',
            countryCode: 'it',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'Italy',
            avatarColor: null,
            guestTypeTranslation: 'Family',
            username: 'Salvatore',
          },
          isApproved: true,
          reviewedDate: 1724047658,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: null,
            lang: 'en',
            positiveText:
              'Perfect location, excellent service. I had an easy and confortable stay . \nWe had a great stay and enjoyed the friendly service',
            title: null,
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
        {
          reviewScore: 9,
          __typename: 'ReviewCard',
          isReviewerChoice: false,
          negativeHighlights: null,
          partnerReply: null,
          photos: null,
          positiveHighlights: null,
          bookingDetails: {
            customerType: 'COUPLES',
            checkoutDate: '2024-07-22',
            __typename: 'BookingDetails',
            checkinDate: '2024-07-18',
            numNights: 4,
            roomId: 18522604,
            roomType: {
              name: 'Comfort Double or Twin Room',
              id: '18522604',
              __typename: 'RoomTranslation',
            },
          },
          editUrl: null,
          isTranslatable: false,
          reviewUrl: '068e32fcfa5b5cae',
          uvcUrl: null,
          guestDetails: {
            avatarUrl:
              'https://xx.bstatic.com/static/img/review/avatars/ava-p.png',
            countryCode: 'gb',
            __typename: 'GuestDetails',
            anonymous: false,
            showCountryFlag: true,
            countryName: 'United Kingdom',
            avatarColor: null,
            guestTypeTranslation: 'Couple',
            username: 'Paul',
          },
          isApproved: true,
          reviewedDate: 1723973296,
          textDetails: {
            textTrivialFlag: 0,
            negativeText: 'Had everything we needed',
            positiveText: 'Location is fantastic',
            title: null,
            lang: 'en',
            __typename: 'TextDetails',
          },
          helpfulVotesCount: 0,
        },
      ],
      reviewsCount: 9349,
      timeOfYearFilter: [
        {
          name: 'All (9349)',
          count: 9349,
          value: 'ALL',
          __typename: 'TimeOfYearFilter',
        },
        {
          name: 'Mar–May',
          count: 0,
          value: '_03_05',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Jun–Aug',
          value: '_06_08',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Sep–Nov',
          value: '_09_11',
          __typename: 'TimeOfYearFilter',
        },
        {
          count: 0,
          name: 'Dec–Feb',
          value: '_12_02',
          __typename: 'TimeOfYearFilter',
        },
      ],
      review_score: 8,
      nr_reviews: 9349,
    },
    review_score: 8.3,
    review_score_word: 'Very Good',
    distances: null,
    currency: 'EUR',
    booking_id: 18041285,
    number_of_rooms: 0,
    stars: 3,
    address: 'Jókai tér 9.',
    checkin_checkout_times: {
      checkout_from: null,
      checkout_to: '10:00',
      checkin_from: '16:00',
      checkin_to: '19:00',
    },
    max_number_of_people: 0,
    location: {
      longitude: 19.0612980723381,
      latitude: 47.5053595261668,
    },
    zip: '1061',
    hotel_description:
      'Medos Hotel, som blev totaltrenoveret i 2013, ligger på gaden Andrássy út, kun 100 m fra Liszt Ferenc-pladsen og metrostationen Oktogon. Der tilbydes gratis wi-fi. Samtlige værelser har fladskærms-tv og eget badeværelse med badekar eller bruser. De har alle aircondition, og nogle af værelserne har egen balkon med byudsigt. Hotel Medosz ligger 5-10 minutters gang fra de fleste af Budapests største seværdigheder, herunder operahuset, Donau og Sankt Stefans Basilika. Der tilbydes privat parkering i nærheden af hotellet, mod tillægsgebyr.',
    hotel_facilities: [
      {
        hotel_facility_type_id: 0,
        name: 'Parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Kæledyr tilladt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Møde-/festlokale',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Døgnåben reception',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Ikkeryger-værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Familieværelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Strygning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Internetservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Elevator',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værdiboks',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lydisolerede værelser',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Biludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sightseeingskranke',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Varme',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fax/fotokopiering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Bagageopbevaring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Allergivenligt værelse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gratis wi-fi',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Rygning forbudt på alle fælles- og privatområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aircondition',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Særskilt rygezone',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Hæveautomat findes inde på ejendommen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Snackbar',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Concierge',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Lufthavnstransport (ekstra gebyr)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Daglig rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkering på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Privat parkering',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Wi-fi tilgængeligt på alle områder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Parkeringshus',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vin/champagne',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport fra lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transport til lufthavnen',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Café på stedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Transportservice',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikkerhedsvagt døgnet rundt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang med nøglekort',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Tyverialarm',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Røgalarmer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera på fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Overvågningskamera udenfor overnatningsstedet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brandslukkere',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Cykeludlejning',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Brug af rengøringsmidler der er effektive mod coronavirus (COVID-19)',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Vask af linned, håndklæder og vasketøj i overensstemmelse med de lokale myndigheders retningslinjer',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Værelser/enheder desinficeres mellem hvert ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Aflåsning af værelser/enheder efter rengøring',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Fysisk afstand i spiseområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for levering af mad til værelser/enheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Personalet følger alle sikkerhedsprocedurer fremsat af de lokale myndigheder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Delte kontorartikler, f.eks. trykte menukort, magasiner, kuglepenne og papir, er fjernet',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Håndsprit i værelser/enheder og fællesområder',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Adgang til førstehjælpskasse',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for kontantløs betaling',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Regler om fysisk afstand bliver fulgt',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Mulighed for faktura',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Alle tallerkener, bestik, glas og lignende er blevet desinficeret',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Gæster kan fravælge rengøring af deres værelser/enheder under deres ophold',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Takeaway-beholdere til morgenmad',
      },
      {
        hotel_facility_type_id: 0,
        name: 'Sikker dækning af mad ved levering',
      },
    ],
    hotel_photos: [
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/517166765.jpg?k=c8183fdc090a5bf434b86e3fc35cfee3a9203d14c73fb7e2436ea8a2a9b030a0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/195771267.jpg?k=ac1ba770ef25cbcc26500ef04ea5ff12d7c22d8862eba6cfc8221a5ac6fbe88f&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/598096731.jpg?k=1b688571ab8e5915e2ea229a2815f512601606f1a4d9d89d09150d0354d37307&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/577124838.jpg?k=5a04ce643922189ba806c328158c288665ca1d026205be12fc615a944c537f26&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/577125814.jpg?k=93119214c85fb1f18799bb5b9577c64d86af73fbb73c281b35755a0d97b21f07&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/454402280.jpg?k=dec6ac0fe8b36e55646ed7bacff074e981f75549607d4d96824382fa5b4f5bd5&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/517166755.jpg?k=4aa293d8152dec15a9e6563cc0a0fe26e63176c1a5a0209d0e12d85caf86c758&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/247562137.jpg?k=4f16d1a1a67ed169a32839eddd65c3cd24041c8f357b68c3b56902e8ad963dbd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217468995.jpg?k=5f7a4407a5faac1b95ebaf8407153cfc3ed07f57b94213100f31497efbc55660&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468306839.jpg?k=9476df76fc78e5ea52793db6743420ec58fceddb70d114ebb425003fa8c86279&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468306876.jpg?k=e7b582e1e6d0033b058d153bb47fae09bf7b54d0d3e0882a54b870ae26ed76d7&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/454401983.jpg?k=a0a9e30925be16fc7ddc3b503384fc8fe6cd3299da5a1ff025c87244c828d8dd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468306872.jpg?k=5e8021d8002db1cff9b427e5b642b8d44d21dec4bf9f72a694bcef33c4726182&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/454402276.jpg?k=fe1ee307ae7f169e1cea287d168b467abba07903002e60ab1eaf638576466bd0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/454402003.jpg?k=b1974c8a87e63400412883887e816354312a0fdd4baaa43f49cf414219af5097&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/247562118.jpg?k=3ebebe58d1c7ccd3a118235ba6615ddeda7df68a2a2f6358dd3c7a3f688e5b50&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/517163408.jpg?k=de6e80c7e16d342d7d06bf62b318933a6b09fce1d7a43a7ef8205eb8d375dbc2&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/468306845.jpg?k=60aa8adb5379a9df6907ff1c72e7eefa680131866c23df4aa1965994ba20f62e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72435474.jpg?k=0c1efbbefb3c8ab5a296a94e1f9ca021cf478adff056932a5bafd99c561b6282&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/247562160.jpg?k=5eccd8a84dee661f867127114bdca1fb43aa857502d3585cbc3aded04e95095a&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/247562178.jpg?k=7aa8f7547657b68cd6b00bff3a23ba37fb1a6134f0b8bcbcde5dc59f2979b2c0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/247562197.jpg?k=4699dd5a5fc7fb5874227f0995c9245908c0e560edd01ca36f54d016637b9b9b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/218550119.jpg?k=9e060632af8834fa5ff53aa4c03c4b3af375bb770794e891c514278d8faffabd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217468985.jpg?k=97226398fcb0341d0e0618802b92c0999e5f3e5604bf2d6885f0a787212e5f80&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469002.jpg?k=21c0d54206e128623126ee5efbabbcd8fdef418cff76a652ef16568d04901711&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469010.jpg?k=4257685770069b642fe4d2525a7a28495b4a113cf431421a9bab8272d5b7e7bf&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469024.jpg?k=ba2722e785f17477e5b0c5721fe633a0d4d292bfae3130444f42feb5b4469930&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469064.jpg?k=451d12f3095f25a0913bf9518026077d968ad4bddf26ac0f447a1f08f7937d71&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469086.jpg?k=70c2effce52afbde40b6f442058a445f8206ae71340510e13fefb4fc2b65cfdd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469103.jpg?k=65a0c135fe68cccf06286e83c298b0bd47d409618ed449e47e0a2230c3721994&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469114.jpg?k=b768c4b6b540f02519011371d13efa5dad624d4858d35ba50cab9f41c61b685e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/217469124.jpg?k=a40a630051ec833c73d7e20da9b45f77208f35b024b65dcb25b1d85c111ce955&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/195771343.jpg?k=a603fdd67d769d9d2c03c605abc447122535a1c9bfe8769b435ff69ea90a631e&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/218549154.jpg?k=33bac63bf2c7c56d55f5b02337dd5376534f83cd81bef652e8f269a5bf3244e0&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/5600739.jpg?k=e6d4839e158a83d1730439666d0d503bcb2cdb30c2ebd2692053a66c2ce7da6b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/147993524.jpg?k=bb68bab7125ab848465a86b36fcd2e725fdcb3243aed1ca089dc3a67782ef839&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72435468.jpg?k=15346bebcfc36cb1065c3d9e2f9cfb1571cd65f0200ad30cef8920d49d5e7106&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/140090944.jpg?k=b3b007c88345f3ae9f8e48307d132beeda90d37079dae0f7dc69daf8c3708356&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72435480.jpg?k=cad085e051922315307ad6cd3c9d6aa87d8d09281146fe8c153781519ef9cfc6&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72435464.jpg?k=a55d061fce2b057bf48688100c7185953f4e49cdf0d85fc38d0cc9d357ddcb37&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72435472.jpg?k=a26ecd44aa5f5c924937a2ad1a2201616d5e9bfd8c5220a86f06b907b826496d&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/140090998.jpg?k=f90afa4117853cc704e3abe0767e4c21ad2e6c9db282e35c19f46d9976c17fea&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/12225395.jpg?k=948912fbc861523c22d1a4d501c1258ef05aea484523132cda1203f6ac24910b&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/12225397.jpg?k=0ba8db687a1ec5dcf7705a1a5ded4885e084b826e1a2d5df8dfe68834c4423cd&o=&hp=1',
      },
      {
        url_original:
          'https://cf.bstatic.com/xdata/images/hotel/max1280x900/119434342.jpg?k=824491bbe2ea68e84a6b671e61ffe0b741d82d499c958cfc00457acd2ea3d2bb&o=&hp=1',
      },
    ],
    room_data: {
      number_of_rooms: 0,
      max_n_people: 0,
      rooms: [],
    },
    all_rooms_available: [],
    accomodation_type: 'hotel',
    provider: 'HOTELSTON',
    late_checkin: true,
    additional_policies: {},
    late_arrival: false,
    discount: 0.32499999999999996,
    price_without_discount: 290.03024374999995,
    price_increased: true,
    price_decreased: false,
    price_diff: 84.76,
  },
] as HotelDetails[]
