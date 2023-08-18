import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <img
      className="logo"
      alt="logo"
      src="https://foodvilla.no/src/img/logo.png"
    />
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
// lets create Dynamically
const restaurantList = [
//   {
//     name: "Macdonalds",
//     image:
//       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
//     cuisins: ["Burgers", "American"],
//     rating: "4.2",
//   },
// ********************swiggy data*******************
            {
              "info": {
                "id": "276000",
                "name": "Domino's Pizza",
                "cloudinaryImageId": "ewscwbiy5ctfaowtpu47",
                "locality": "Dhanori",
                "areaName": "Lohegaon",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Pizzas",
                  "Italian",
                  "Pastas",
                  "Desserts"
                ],
                "avgRating": 3.9,
                "feeDetails": {
                  "restaurantId": "276000",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3400
                },
                "parentId": "2456",
                "avgRatingString": "3.9",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 25,
                  "serviceability": "SERVICEABLE",
                  "slaString": "25 mins",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-19 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/dominos-pizza-dhanori-lohegaon-pune-276000",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "364761",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Dhanori",
                "areaName": "Dhanori",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Pizzas"
                ],
                "avgRating": 3.5,
                "feeDetails": {
                  "restaurantId": "364761",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3400
                },
                "parentId": "721",
                "avgRatingString": "3.5",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 19,
                  "lastMileTravel": 0.7,
                  "serviceability": "SERVICEABLE",
                  "slaString": "19 mins",
                  "lastMileTravelString": "0.7 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-19 01:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-dhanori-pune-364761",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "608346",
                "name": "McDonald's",
                "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
                "locality": "Lohagaon",
                "areaName": "Aero-Mall",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Burgers",
                  "Beverages",
                  "Cafe",
                  "Desserts"
                ],
                "avgRating": 4.3,
                "feeDetails": {
                  "restaurantId": "608346",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 4400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 4400
                },
                "parentId": "630",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 22,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "22 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-19 02:45:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "40% OFF",
                  "subHeader": "UPTO ₹80"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-lohagaon-aero-mall-pune-608346",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "667424",
                "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
                "cloudinaryImageId": "909daf097e30cd01d8fd121ddc6de2f6",
                "locality": "BK Paul Temple Road",
                "areaName": "Lohgaon",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Desserts",
                  "Ice Cream",
                  "Ice Cream Cakes"
                ],
                "avgRating": 4.5,
                "feeDetails": {
                  "restaurantId": "667424",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3400
                },
                "parentId": "582",
                "avgRatingString": "4.5",
                "totalRatingsString": "50+",
                "sla": {
                  "deliveryTime": 11,
                  "lastMileTravel": 0.4,
                  "serviceability": "SERVICEABLE",
                  "slaString": "11 mins",
                  "lastMileTravelString": "0.4 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-18 23:19:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-bk-paul-temple-road-lohgaon-pune-667424",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "155435",
                "name": "The Good Bowl",
                "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
                "locality": "Dhanori",
                "areaName": "Lohegaon",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Biryani",
                  "North Indian",
                  "Pastas",
                  "Punjabi",
                  "Desserts",
                  "Beverages"
                ],
                "avgRating": 4,
                "feeDetails": {
                  "restaurantId": "155435",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3400
                },
                "parentId": "7918",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 18,
                  "lastMileTravel": 1.3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "18 mins",
                  "lastMileTravelString": "1.3 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-19 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/the-good-bowl-dhanori-lohegaon-pune-155435",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "321122",
                "name": "BOX8 - Desi Meals",
                "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
                "locality": "Kutwal Colony",
                "areaName": "Dhanori",
                "costForTwo": "₹250 for two",
                "cuisines": [
                  "North Indian",
                  "Biryani",
                  "Thalis",
                  "Home Food"
                ],
                "avgRating": 4.2,
                "feeDetails": {
                  "restaurantId": "321122",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 3400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 3400
                },
                "parentId": "10655",
                "avgRatingString": "4.2",
                "totalRatingsString": "1K+",
                "sla": {
                  "deliveryTime": 17,
                  "lastMileTravel": 0.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "12-22 mins",
                  "lastMileTravelString": "0.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-19 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹75"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/box8-desi-meals-kutwal-colony-dhanori-pune-321122",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "5928",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "Phoenix Market city",
                "areaName": "Viman Nagar",
                "costForTwo": "₹350 for two",
                "cuisines": [
                  "Burgers",
                  "American"
                ],
                "avgRating": 3.7,
                "feeDetails": {
                  "restaurantId": "5928",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 5900
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 5900
                },
                "parentId": "166",
                "avgRatingString": "3.7",
                "totalRatingsString": "10K+",
                "sla": {
                  "deliveryTime": 47,
                  "lastMileTravel": 5.8,
                  "serviceability": "SERVICEABLE",
                  "slaString": "47 mins",
                  "lastMileTravelString": "5.8 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-18 23:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "EVERY ITEM",
                  "subHeader": "@ ₹129"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-phoenix-market-city-viman-nagar-pune-5928",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "686339",
                "name": "The Belgian Waffle Co.",
                "cloudinaryImageId": "100dc929a7db5a595769325f1f3c90a9",
                "locality": "SURVEY NUMBER-225",
                "areaName": "Viman Nagar",
                "costForTwo": "₹200 for two",
                "cuisines": [
                  "Waffle",
                  "Desserts",
                  "Ice Cream"
                ],
                "avgRating": 4.3,
                "veg": true,
                "feeDetails": {
                  "restaurantId": "686339",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 4400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 4400
                },
                "parentId": "2233",
                "avgRatingString": "4.3",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 26,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "26 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-19 02:00:00",
                  "opened": true
                },
                "badges": {
                  
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-survey-number-225-viman-nagar-pune-686339",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            },
            {
              "info": {
                "id": "642658",
                "name": "Starbucks Coffee",
                "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
                "locality": "New Airport Road",
                "areaName": "Viman Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                  "Beverages",
                  "Cafe",
                  "Snacks",
                  "Desserts",
                  "Bakery",
                  "Ice Cream"
                ],
                "avgRating": 4,
                "feeDetails": {
                  "restaurantId": "642658",
                  "fees": [
                    {
                      "name": "BASE_DISTANCE",
                      "fee": 4400
                    },
                    {
                      "name": "BASE_TIME"
                    },
                    {
                      "name": "ANCILLARY_SURGE_FEE"
                    }
                  ],
                  "totalFee": 4400
                },
                "parentId": "195515",
                "avgRatingString": "4.0",
                "totalRatingsString": "100+",
                "sla": {
                  "deliveryTime": 23,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "23 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseTime": "2023-08-18 23:00:00",
                  "opened": true
                },
                "badges": {
                  "textExtendedBadges": [
                    {
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available",
                      "fontColor": "#7E808C"
                    }
                  ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                  "entityBadges": {
                    "imageBased": {
                      
                    },
                    "textBased": {
                      
                    },
                    "textExtendedBadges": {
                      "badgeObject": [
                        {
                          "attributes": {
                            "description": "",
                            "fontColor": "#7E808C",
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available"
                          }
                        }
                      ]
                    }
                  }
                },
                "aggregatedDiscountInfoV3": {
                  "header": "50% OFF",
                  "subHeader": "UPTO ₹100"
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {
                    "text": "BENEFITS",
                    "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                  },
                  "freedelMessage": "FREE DELIVERY"
                },
                "orderabilityCommunication": {
                  "title": {
                    
                  },
                  "subTitle": {
                    
                  },
                  "message": {
                    
                  },
                  "customIcon": {
                    
                  }
                },
                "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {
                      
                    },
                    "video": {
                      
                    }
                  }
                },
                "reviewsSummary": {
                  
                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {
                  
                }
              },
              "analytics": {
                "context": "seo-data-cef8e3c1-477b-45be-b276-227f1052c04d"
              },
              "cta": {
                "link": "https://www.swiggy.com/restaurants/starbucks-coffee-new-airport-road-viman-nagar-pune-642658",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
              },
              "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
            }


];

const RestaurantCard = ({name, cuisines, areaName, cloudinaryImageId}) => {
    // desturcturing objects
    // const {name, cuisines, areaName, cloudinaryImageId} =restaurant.info;
  return (
    // // this is hardcoded
    // <div className="card">
    //     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4" />
    //     <h2>BurgerKing</h2>
    //     <h3>Burgers, American</h3>
    //     <h4>4.2 stars</h4>
    // </div>
    // **********************************************************
    //    created using dynamically props

    <div className="card">
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="restaurantList">
      <RestaurantCard  {...restaurantList[0].info} />
      <RestaurantCard {...restaurantList[1].info} />
      <RestaurantCard {...restaurantList[2].info} />
      <RestaurantCard {...restaurantList[3].info} />
      <RestaurantCard {...restaurantList[4].info} />
      <RestaurantCard {...restaurantList[5].info} />
      <RestaurantCard {...restaurantList[6].info} />
      <RestaurantCard {...restaurantList[7].info} />
      <RestaurantCard {...restaurantList[8].info} />
      
    </div>
  );
};
const Footer = () => {
  return (
    <>
      <h1>Food Villa</h1>
    </>
  );
};
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
