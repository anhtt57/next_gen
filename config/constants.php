<?php

return [
    'config' => [
        'app_id' => env('FACEBOOK_APP_ID', '1658843870852837'),
        'app_secret' => env('FACEBOOK_APP_KEY', 'bd82f5bb8e4ac44d8a13a5b0d01b221f'),
        'default_graph_version' => env('FACEBOOK_APP_VERSION', 'v2.11'),
    ],

    //FINDVIET
    'USERNAME_FINDVIET' => '0999000002',
    'PASSWORD_FINDVIET' => '000000',
    'SECRETKEY_FINDVIET' => '123456789012345678901234',
    'HASHKEY_FINDVIET' => 'finviet@#2017',
    'CART_TYPE' => [
        'MBF',
        'VNP',
        'VTE',
        'VNM',
        'VCOIN',
        'VTCPRO'
    ],
    'FINDVIET_URL' => 'https://sandbox.finviet.com.vn:9000/api/usecard',

    //array product cost usd
    'COST_DEFAULT_USD' => [0.99, 4.99, 14.99, 29.99, 49.99, 99.99],

    //company name to rend product default
    'COMPANY_NAME' => 'KNI',

    //exchange rate
    'EXCHANGE_RATE' => 22500,

    //exchange rate game money
    'EXCHANGE_RATE_GAME_COIN' => 100
];