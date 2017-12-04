//Q1 2017 QUARTERLY REPORT
//Data collected on 04/14/17

//Data for mandate summary chart 
var mandateChartData =   [
  //all
    [
      {
        "status": "Potential",
        "equity": 56,
        "fixedIncome": 57,
        "realEstate": 48,
        "privateEquity": 45,
        "alts": 67,
        "multiAsset": 13,
        "other": 11
      },
      {
        "status": "New",
        "equity": 51,
        "fixedIncome": 36,
        "realEstate": 5,
        "privateEquity": 7,
        "alts": 10,
        "multiAsset": 20,
        "other": 5
      },
      {
        "status": "Completed",
        "equity": 103,
        "fixedIncome": 86,
        "realEstate": 94,
        "privateEquity": 199,
        "alts": 89,
        "multiAsset": 24,
        "other": 8
      }
    ],
    //US
    [
        {
          "status": "Potential",
          "equity": 45,
          "fixedIncome": 27,
          "realEstate": 22,
          "privateEquity": 30,
          "alts": 26,
          "multiAsset": 4,
          "other": 2
        },
        {
          "status": "New",
          "equity": 31,
          "fixedIncome": 15,
          "realEstate": 5,
          "privateEquity": 6,
          "alts": 9,
          "multiAsset": 11,
          "other": 1
        },
        {
          "status": "Completed",
          "equity": 85,
          "fixedIncome": 45,
          "realEstate": 63,
          "privateEquity": 183,
          "alts": 52,
          "multiAsset": 14,
          "other": 6
        }
    ],
    //Europe
    [
      {
        "status": "Potential",
        "equity": 7,
        "fixedIncome": 11,
        "realEstate": 13,
        "privateEquity": 4,
        "alts": 15,
        "multiAsset": 4,
        "other": 3
      },
      {
        "status": "New",
        "equity": 13,
        "fixedIncome": 19,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 1,
        "multiAsset": 8,
        "other": 4
      },
      {
        "status": "Completed",
        "equity": 12,
        "fixedIncome": 30,
        "realEstate": 19,
        "privateEquity": 14,
        "alts": 29,
        "multiAsset": 6,
        "other": 2
      }
    ],
    //Asia
  [
    {
      "status": "New",
      "equity": 5,
      "fixedIncome": 2,
      "realEstate": 0,
      "privateEquity": 1,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "status": "Completed",
      "equity": 1,
      "fixedIncome": 8,
      "realEstate": 9,
      "privateEquity": 1,
      "alts": 6,
      "multiAsset": 2,
      "other": 0
    }
  ],
  //Oceania
  [
    {
      "status": "Potential",
      "equity": 0,
      "fixedIncome": 1,
      "realEstate": 1,
      "privateEquity": 1,
      "alts": 1,
      "multiAsset": 0,
      "other": 0
    },
    {
      "status": "New",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 1,
      "other": 0
    },
    {
      "status": "Completed",
      "equity": 2,
      "fixedIncome": 1,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 2,
      "multiAsset": 1,
      "other": 0
    }
  ]
    ];
//Q1 2017 combo chart 2 data: investment regions
var comboRegionQData = [
//all
  [
      {
        "class":"US",
        "number":277,
        "value":32239.18
      },
      {
        "class":"Global",
        "number":195,
        "value":39890.53
      },
      {
        "class":"Europe",
        "number":64,
        "value":4601.31
      },
      {
        "class":"Asia",
        "number":25,
        "value":6372.95
      },
      {
        "class":"Other Americas",
        "number":24,
        "value":2588
      },
      {
        "class":"Emerging Markets",
        "number":12,
        "value":1309.43
      },
      {
        "class":"Other",
        "number":6,
        "value":1516.8
      }
      ],
   //US
    [
        {
          "class": "US",
          "number": 268,
          "value": 31703.18
        },
        {
          "class": "Global",
          "number": 97,
          "value": 24182.34
        },
        {
          "class": "Other Americas",
          "number": 24,
          "value": 2588
        },
        {
          "class": "International (Other)",
          "number": 23,
          "value": 2663.81
        },
        {
          "class": "Asia",
          "number": 14,
          "value": 1235
        },
        {
          "class": "Europe",
          "number": 13,
          "value": 919.9
        },
        {
          "class": "Emerging Markets",
          "number": 9,
          "value": 1291.9
        }
    ],
    //Europe
    [
        {
          "class": "Global",
          "number": 59,
          "value": 10308.92
        },
        {
          "class": "Europe",
          "number": 47,
          "value": 3575.15
        },
        {
          "class": "Emerging Markets",
          "number": 3,
          "value": 17.53
        },
        {
          "class": "Asia",
          "number": 3,
          "value": 0
        }
    ],
    //Asia
    [
        {
          "class": "US",
          "number": 8,
          "value": 536
        },
        {
          "class": "Global",
          "number": 7,
          "value": 343.13
        },
        {
          "class": "Oceania",
          "number": 4,
          "value": 1403.82
        },
        {
          "class": "Asia",
          "number": 3,
          "value": 2554.35
        },
        {
          "class": "Europe",
          "number": 3,
          "value": 0
        },
        {
          "class": "International (Other)",
          "number": 2,
          "value": 760
        }
    ],
    //Oceania
    [
        {
          "class": "Global",
          "number": 6,
          "value": 670.34
        }
    ]
  ];

//Q1 2017 combo chart 2 data: asset class
var comboClassQData = [
  //all regions
    [
    {
      "class": "Private Equity",
      "number": 199,
      "value": 13698.44
    },
    {
      "class": "Equity",
      "number": 103,
      "value": 31034.39
    },
    {
      "class": "Real Estate",
      "number": 94,
      "value": 8609.15
    },
    {
      "class": "Alternatives",
      "number": 89,
      "value": 18012.92
    },
    {
      "class": "Fixed Income",
      "number": 86,
      "value": 8507.43
    },
    {
      "class": "Mutli Asset",
      "number": 24,
      "value": 8523.74
    },
    {
      "class": "Other",
      "number": 8,
      "value": 132.13
    }
  ],
  //US
  [
    {
      "class": "Private Equity",
      "number": 183,
      "value": 12956.9
    },
    {
      "class": "Equity",
      "number": 85,
      "value": 20580.1
    },
    {
      "class": "Real Estate",
      "number": 63,
      "value": 4984
    },
    {
      "class": "Alternatives",
      "number": 52,
      "value": 15660.1
    },
    {
      "class": "Fixed Income",
      "number": 45,
      "value": 5238
    },
    {
      "class": "Mutli Asset",
      "number": 14,
      "value": 5120.03
    },
    {
      "class": "Other",
      "number": 6,
      "value": 45
    }
  ],
  //Europe
  [
    {
      "class": "Fixed Income",
      "number": 30,
      "value": 1564.43
    },
    {
      "class": "Alternatives",
      "number": 29,
      "value": 2317.54
    },
    {
      "class": "Real Estate",
      "number": 19,
      "value": 1166.25
    },
    {
      "class": "Private Equity",
      "number": 14,
      "value": 651.21
    },
    {
      "class": "Equity",
      "number": 12,
      "value": 8003.95
    },
    {
      "class": "Mutli Asset",
      "number": 6,
      "value": 111.09
    },
    {
      "class": "Other",
      "number": 2,
      "value": 87.13
    }
  ],
  //Asia
  [
    {
      "class": "Real Estate",
      "number": 9,
      "value": 1869.04
    },
    {
      "class": "Fixed Income",
      "number": 8,
      "value": 500
    },
    {
      "class": "Alternatives",
      "number": 6,
      "value": 35.28
    },
    {
      "class": "Mutli Asset",
      "number": 2,
      "value": 3139.85
    },
    {
      "class": "Private Equity",
      "number": 1,
      "value": 53.13
    },
    {
      "class": "Equity",
      "number": 1,
      "value": 0
    }
  ],
  //Oceania
  [
    {
      "class": "Equity",
      "number": 2,
      "value": 350.34
    },
    {
      "class": "Alternatives",
      "number": 2,
      "value": 0
    },
    {
      "class": "Fixed Income",
      "number": 1,
      "value": 320
    },
    {
      "class": "Mutli Asset",
      "number": 1,
      "value": 0
    }
  ]
  ];

//Q1 2017 combo chart 2 data: asset classes - year
var comboClassYData = [
  //all
    [
      {
        "class": "Private Equity",
        "number": 762,
        "value": 66397.64
      },
      {
        "class": "Real Estate",
        "number": 404,
        "value": 40909.84
      },
      {
        "class": "Equity",
        "number": 381,
        "value": 100247.97
      },
      {
        "class": "Alternatives",
        "number": 347,
        "value": 61576.34
      },
      {
        "class": "Fixed Income",
        "number": 316,
        "value": 64729.09
      },
      {
        "class": "Mutli Asset",
        "number": 65,
        "value": 23951.5
      },
      {
        "class": "Other",
        "number": 26,
        "value": 936.83
      }
  ],
  //US
  [
    {
      "class": "Private Equity",
      "number": 712,
      "value": 60767.95
    },
    {
      "class": "Equity",
      "number": 313,
      "value": 58618.64
    },
    {
      "class": "Real Estate",
      "number": 299,
      "value": 25368.53
    },
    {
      "class": "Alternatives",
      "number": 266,
      "value": 40692.35
    },
    {
      "class": "Fixed Income",
      "number": 219,
      "value": 36922.77
    },
    {
      "class": "Mutli Asset",
      "number": 24,
      "value": 9182.63
    },
    {
      "class": "Other",
      "number": 19,
      "value": 702
    }
  ],
  //Europe
  [
    {
      "class": "Fixed Income",
      "number": 68,
      "value": 24439.63
    },
    {
      "class": "Equity",
      "number": 40,
      "value": 11168.53
    },
    {
      "class": "Real Estate",
      "number": 61,
      "value": 7478.11
    },
    {
      "class": "Mutli Asset",
      "number": 29,
      "value": 5123.03
    },
    {
      "class": "Private Equity",
      "number": 37,
      "value": 3428.64
    },
    {
      "class": "Alternatives",
      "number": 55,
      "value": 3378
    },
    {
      "class": "Other",
      "number": 7,
      "value": 234.83
    }
  ],
  //Asia
  [
    {
      "class": "Real Estate",
      "number": 9,
      "value": 1869.04
    },
    {
      "class": "Fixed Income",
      "number": 8,
      "value": 500
    },
    {
      "class": "Alternatives",
      "number": 6,
      "value": 35.28
    },
    {
      "class": "Mutli Asset",
      "number": 2,
      "value": 3139.85
    },
    {
      "class": "Private Equity",
      "number": 1,
      "value": 53.13
    },
    {
      "class": "Equity",
      "number": 1,
      "value": 0
    }
  ],
  //Oceania
  [
    {
      "class": "Equity",
      "number": 8,
      "value": 2392.38
    },
    {
      "class": "Alternatives",
      "number": 8,
      "value": 298.1
    },
    {
      "class": "Private Equity",
      "number": 3,
      "value": 546.54
    },
    {
      "class": "Fixed Income",
      "number": 1,
      "value": 320
    },
    {
      "class": "Mutli Asset",
      "number": 1,
      "value": 0
    },
    {
      "class": "Real Estate",
      "number": 1,
      "value": 0
    }
  ]
  ];

//Q1 2017 combo chart 2 data: investment regions - year
var comboRegionYData = [
  //all
  [
    {
      "class": "US",
      "number": 944,
      "value": 110375.44
    },
    {
      "class": "Global",
      "number": 733,
      "value": 173867.82
    },
    {
      "class": "Europe",
      "number": 245,
      "value": 23182.03
    },
    {
      "class": "Other Americas",
      "number": 193,
      "value": 16641.2
    },
    {
      "class": "Asia",
      "number": 98,
      "value": 18762.58
    },
    {
      "class": "Emerging Markets",
      "number": 68,
      "value": 11974.65
    },
    {
      "class": "Other",
      "number": 20,
      "value": 3945.49
    }
  ],
  //US
  [
    {
      "class": "US",
      "number": 921,
      "value": 104659.47
    },
    {
      "class": "Global",
      "number": 429,
      "value": 72683.84
    },
    {
      "class": "Other Americas",
      "number": 189,
      "value": 16467.98
    },
    {
      "class": "Europe",
      "number": 113,
      "value": 11508.49
    },
    {
      "class": "International (Other)",
      "number": 86,
      "value": 11582.38
    },
    {
      "class": "Emerging Markets",
      "number": 57,
      "value": 10243.81
    },
    {
      "class": "Asia",
      "number": 57,
      "value": 5108.9
    }
  ],
  //Europe
  [
    {
      "class": "Global",
      "number": 167,
      "value": 43829.72
    },
    {
      "class": "Europe",
      "number": 113,
      "value": 10375.9
    },
    {
      "class": "Emerging Markets",
      "number": 9,
      "value": 518.4
    },
    {
      "class": "Asia",
      "number": 4,
      "value": 100
    },
    {
      "class": "US",
      "number": 2,
      "value": 214.23
    },
    {
      "class": "International (Other)",
      "number": 2,
      "value": 212.52
    }
  ],
  //Asia
  [
    {
      "class": "Asia",
      "number": 26,
      "value": 9395.08
    },
    {
      "class": "Global",
      "number": 26,
      "value": 6479.33
    },
    {
      "class": "US",
      "number": 18,
      "value": 4981.67
    },
    {
      "class": "Europe",
      "number": 15,
      "value": 890.86
    },
    {
      "class": "International (Other)",
      "number": 13,
      "value": 4925.42
    },
    {
      "class": "Oceania",
      "number": 4,
      "value": 1403.82
    }
  ],
  //Oceania
  [
    {
      "class": "Global",
      "number": 12,
      "value": 1640.08
    },
    {
      "class": "Oceania",
      "number": 6,
      "value": 584.43
    },
    {
      "class": "Emerging Markets",
      "number": 1,
      "value": 1212.44
    },
    {
      "class": "US",
      "number": 1,
      "value": 70.07
    },
    {
      "class": "Asia",
      "number": 1,
      "value": 50
    },
    {
      "class": "International (Other)",
      "number": 1,
      "value": 0
    }
  ]
  ];

//Q1 2017 cluster chart 1 data: number of mandates
var clusterNumQData = [
  //all
    [
      {
        "region": "US",
        "equity": 55,
        "fixedIncome": 37,
        "realEstate": 52,
        "privateEquity": 97,
        "alts": 22,
        "multiAsset": 8,
        "other": 6
      },
      {
        "region": "Global",
        "equity": 34,
        "fixedIncome": 33,
        "realEstate": 10,
        "privateEquity": 53,
        "alts": 48,
        "multiAsset": 15,
        "other": 2
      },
      {
        "region": "Europe",
        "equity": 3,
        "fixedIncome": 10,
        "realEstate": 22,
        "privateEquity": 16,
        "alts": 13,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Asia",
        "equity": 6,
        "fixedIncome": 0,
        "realEstate": 6,
        "privateEquity": 12,
        "alts": 0,
        "multiAsset": 1,
        "other": 0
      },
      {
        "region": "OtherAmericas",
        "equity": 0,
        "fixedIncome": 2,
        "realEstate": 1,
        "privateEquity": 19,
        "alts": 2,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Emerging Markets",
        "equity": 4,
        "fixedIncome": 4,
        "realEstate": 0,
        "privateEquity": 1,
        "alts": 3,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Other",
        "equity": 1,
        "fixedIncome": 0,
        "realEstate": 3,
        "privateEquity": 1,
        "alts": 1,
        "multiAsset": 0,
        "other": 0
      }
    ],
    //US
    [
      {
        "region": "US",
        "equity": 55,
        "fixedIncome": 31,
        "realEstate": 49,
        "privateEquity": 97,
        "alts": 22,
        "multiAsset": 8,
        "other": 6
      },
      {
        "region": "Global",
        "equity": 9,
        "fixedIncome": 9,
        "realEstate": 7,
        "privateEquity": 42,
        "alts": 25,
        "multiAsset": 5,
        "other": 0
      },
      {
        "region": "OtherAmericas",
        "equity": 0,
        "fixedIncome": 2,
        "realEstate": 1,
        "privateEquity": 19,
        "alts": 2,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "International (Other)",
        "equity": 16,
        "fixedIncome": 1,
        "realEstate": 1,
        "privateEquity": 4,
        "alts": 0,
        "multiAsset": 1,
        "other": 0
      },
      {
        "region": "Asia",
        "equity": 1,
        "fixedIncome": 0,
        "realEstate": 1,
        "privateEquity": 12,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Europe",
        "equity": 1,
        "fixedIncome": 0,
        "realEstate": 4,
        "privateEquity": 8,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Emerging Markets",
        "equity": 3,
        "fixedIncome": 2,
        "realEstate": 0,
        "privateEquity": 1,
        "alts": 3,
        "multiAsset": 0,
        "other": 0
      }
    ],
    //Europe
    [
      {
        "region": "Global",
        "equity": 8,
        "fixedIncome": 18,
        "realEstate": 1,
        "privateEquity": 6,
        "alts": 18,
        "multiAsset": 6,
        "other": 2
      },
      {
        "region": "Europe",
        "equity": 2,
        "fixedIncome": 10,
        "realEstate": 16,
        "privateEquity": 8,
        "alts": 11,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Asia",
        "equity": 1,
        "fixedIncome": 0,
        "realEstate": 2,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Emerging Markets",
        "equity": 1,
        "fixedIncome": 2,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      }
    ],
    //Asia
    [
      {
        "region": "US",
        "equity": 0,
        "fixedIncome": 5,
        "realEstate": 3,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Global",
        "equity": 0,
        "fixedIncome": 2,
        "realEstate": 1,
        "privateEquity": 1,
        "alts": 3,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Oceania",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 3,
        "privateEquity": 0,
        "alts": 1,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Asia",
        "equity": 1,
        "fixedIncome": 0,
        "realEstate": 1,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 1,
        "other": 0
      },
      {
        "region": "Europe",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 1,
        "privateEquity": 0,
        "alts": 2,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "International",
        "equity": 0,
        "fixedIncome": 1,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 1,
        "other": 0
      }
    ],
    //Oceania
    [
      {
        "region": "Global",
        "equity": 2,
        "fixedIncome": 1,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 2,
        "multiAsset": 1,
        "other": 0
      }
    ]
  ];

//Q1 2017 cluster chart 2 data: value of mandates
var clusterValueQData = [
  //all
  [
    {
      "region": "Global",
      "equity": 16143.34,
      "fixedIncome": 2810.76,
      "realEstate": 1377,
      "privateEquity": 4070.28,
      "alts": 14134.13,
      "multiAsset": 1267.89,
      "other": 87.13
    },
    {
      "region": "US",
      "equity": 11874.58,
      "fixedIncome": 4205,
      "realEstate": 3762,
      "privateEquity": 5832,
      "alts": 1804.6,
      "multiAsset": 4716,
      "other": 45
    },
    {
      "region": "Asia",
      "equity": 2300,
      "fixedIncome": 0,
      "realEstate": 548.1,
      "privateEquity": 985,
      "alts": 0,
      "multiAsset": 2539.85,
      "other": 0
    },
    {
      "region": "Europe",
      "equity": 23.79,
      "fixedIncome": 1054.14,
      "realEstate": 1503.51,
      "privateEquity": 830.96,
      "alts": 1188.91,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "OtherAmericas",
      "equity": 0,
      "fixedIncome": 120,
      "realEstate": 50,
      "privateEquity": 1868,
      "alts": 550,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Other",
      "equity": 75.78,
      "fixedIncome": 0,
      "realEstate": 1368.54,
      "privateEquity": 37.2,
      "alts": 35.28,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Emerging Markets",
      "equity": 616.9,
      "fixedIncome": 317.53,
      "realEstate": 0,
      "privateEquity": 75,
      "alts": 300,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //US
  [
    {
      "region": "US",
      "equity": 11874.58,
      "fixedIncome": 4105,
      "realEstate": 3326,
      "privateEquity": 5832,
      "alts": 1804.6,
      "multiAsset": 4716,
      "other": 45
    },
    {
      "region": "Global",
      "equity": 5413.84,
      "fixedIncome": 658,
      "realEstate": 1300,
      "privateEquity": 3419,
      "alts": 13005.5,
      "multiAsset": 386,
      "other": 0
    },
    {
      "region": "International (Other)",
      "equity": 2474.78,
      "fixedIncome": 55,
      "realEstate": 27,
      "privateEquity": 89,
      "alts": 0,
      "multiAsset": 18.03,
      "other": 0
    },
    {
      "region": "OtherAmericas",
      "equity": 0,
      "fixedIncome": 120,
      "realEstate": 50,
      "privateEquity": 1868,
      "alts": 550,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Emerging Markets",
      "equity": 616.9,
      "fixedIncome": 300,
      "realEstate": 0,
      "privateEquity": 75,
      "alts": 300,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Asia",
      "equity": 200,
      "fixedIncome": 0,
      "realEstate": 50,
      "privateEquity": 985,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Europe",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 231,
      "privateEquity": 688.9,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //Europe
  [
    {
      "region": "Global",
      "equity": 7980.16,
      "fixedIncome": 492.76,
      "realEstate": 0,
      "privateEquity": 509.15,
      "alts": 1128.63,
      "multiAsset": 111.09,
      "other": 87.13
    },
    {
      "region": "Europe",
      "equity": 23.79,
      "fixedIncome": 1054.14,
      "realEstate": 1166.25,
      "privateEquity": 142.06,
      "alts": 1188.91,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Emerging Markets",
      "equity": 0,
      "fixedIncome": 17.53,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //Asia
  [
    {
      "region": "Asia",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 14.5,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 2539.85,
      "other": 0
    },
    {
      "region": "Oceania",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 1368.54,
      "privateEquity": 0,
      "alts": 35.28,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "International",
      "equity": 0,
      "fixedIncome": 160,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 600,
      "other": 0
    },
    {
      "region": "US",
      "equity": 0,
      "fixedIncome": 100,
      "realEstate": 436,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Global",
      "equity": 0,
      "fixedIncome": 240,
      "realEstate": 50,
      "privateEquity": 53.13,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //Oceania
  [
    {
      "region": "Global",
      "equity": 350.34,
      "fixedIncome": 320,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    }
  ]
  ];

//Q1 2017 cluster chart 1 data: number of mandates - year
var clusterNumYData = [
  //all
  [
    {
      "region": "US",
      "equity": 176,
      "fixedIncome": 163,
      "realEstate": 192,
      "privateEquity": 271,
      "alts": 109,
      "multiAsset": 17,
      "other": 16
    },
    {
      "region": "Global",
      "equity": 133,
      "fixedIncome": 109,
      "realEstate": 76,
      "privateEquity": 193,
      "alts": 178,
      "multiAsset": 36,
      "other": 8
    },
    {
      "region": "Europe",
      "equity": 11,
      "fixedIncome": 20,
      "realEstate": 77,
      "privateEquity": 95,
      "alts": 33,
      "multiAsset": 7,
      "other": 2
    },
    {
      "region": "Other Americas",
      "equity": 0,
      "fixedIncome": 4,
      "realEstate": 20,
      "privateEquity": 154,
      "alts": 12,
      "multiAsset": 3,
      "other": 0
    },
    {
      "region": "Asia",
      "equity": 16,
      "fixedIncome": 4,
      "realEstate": 34,
      "privateEquity": 37,
      "alts": 5,
      "multiAsset": 2,
      "other": 0
    },
    {
      "region": "Emerging Markets",
      "equity": 43,
      "fixedIncome": 15,
      "realEstate": 0,
      "privateEquity": 4,
      "alts": 6,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Other",
      "equity": 2,
      "fixedIncome": 1,
      "realEstate": 5,
      "privateEquity": 8,
      "alts": 4,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //US
  [
    {
      "region": "US",
      "equity": 173,
      "fixedIncome": 154,
      "realEstate": 185,
      "privateEquity": 269,
      "alts": 107,
      "multiAsset": 17,
      "other": 16
    },
    {
      "region": "Global",
      "equity": 35,
      "fixedIncome": 50,
      "realEstate": 48,
      "privateEquity": 158,
      "alts": 129,
      "multiAsset": 6,
      "other": 3
    },
    {
      "region": "Other Americas",
      "equity": 0,
      "fixedIncome": 3,
      "realEstate": 20,
      "privateEquity": 154,
      "alts": 12,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Europe",
      "equity": 2,
      "fixedIncome": 1,
      "realEstate": 27,
      "privateEquity": 78,
      "alts": 5,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "International (Other)",
      "equity": 62,
      "fixedIncome": 3,
      "realEstate": 2,
      "privateEquity": 15,
      "alts": 3,
      "multiAsset": 1,
      "other": 0
    },
    {
      "region": "Asia",
      "equity": 2,
      "fixedIncome": 0,
      "realEstate": 17,
      "privateEquity": 34,
      "alts": 4,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Emerging Markets",
      "equity": 39,
      "fixedIncome": 8,
      "realEstate": 0,
      "privateEquity": 4,
      "alts": 6,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //Europe
  [
    {
      "region": "Global",
      "equity": 27,
      "fixedIncome": 44,
      "realEstate": 14,
      "privateEquity": 20,
      "alts": 35,
      "multiAsset": 22,
      "other": 5
    },
    {
      "region": "Europe",
      "equity": 8,
      "fixedIncome": 16,
      "realEstate": 43,
      "privateEquity": 17,
      "alts": 20,
      "multiAsset": 7,
      "other": 2
    },
    {
      "region": "Emerging Markets",
      "equity": 2,
      "fixedIncome": 7,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Asia",
      "equity": 2,
      "fixedIncome": 0,
      "realEstate": 2,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "International (Other)",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 2,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "US",
      "equity": 1,
      "fixedIncome": 1,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //Asia
  [
    {
      "region": "Asia",
      "equity": 8,
      "fixedIncome": 4,
      "realEstate": 10,
      "privateEquity": 3,
      "alts": 0,
      "multiAsset": 1,
      "other": 0
    },
    {
      "region": "Global",
      "equity": 2,
      "fixedIncome": 7,
      "realEstate": 8,
      "privateEquity": 4,
      "alts": 4,
      "multiAsset": 1,
      "other": 0
    },
    {
      "region": "US",
      "equity": 2,
      "fixedIncome": 7,
      "realEstate": 7,
      "privateEquity": 2,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Europe",
      "equity": 0,
      "fixedIncome": 3,
      "realEstate": 4,
      "privateEquity": 0,
      "alts": 8,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "International (Other)",
      "equity": 0,
      "fixedIncome": 4,
      "realEstate": 1,
      "privateEquity": 0,
      "alts": 2,
      "multiAsset": 4,
      "other": 0
    },
    {
      "region": "Oceania",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 3,
      "privateEquity": 0,
      "alts": 1,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Emerging Markets",
      "equity": 1,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Other Americas",
      "equity": 0,
      "fixedIncome": 1,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    }
  ],
  //Oceania
  [
    {
      "region": "Global",
      "equity": 6,
      "fixedIncome": 1,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 4,
      "multiAsset": 1,
      "other": 0
    },
    {
      "region": "Oceania",
      "equity": 1,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 3,
      "alts": 2,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Asia",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 1,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "Emerging Markets",
      "equity": 1,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "International (Other)",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 1,
      "privateEquity": 0,
      "alts": 0,
      "multiAsset": 0,
      "other": 0
    },
    {
      "region": "US",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 1,
      "multiAsset": 0,
      "other": 0
    }
  ]
  ];

//Q1 2017 cluster chart 2 data: value of mandates - year
var clusterValueYData = [
    //all
    [
      {
        "region": "Global",
        "equity": 53135.54,
        "fixedIncome": 33826.04,
        "realEstate": 9378.89,
        "privateEquity": 19186.02,
        "alts": 44611.78,
        "multiAsset": 13242.42,
        "other": 487.13
      },
      {
        "region": "US",
        "equity": 28607.72,
        "fixedIncome": 26843,
        "realEstate": 15060.5,
        "privateEquity": 19614.2,
        "alts": 12369.42,
        "multiAsset": 7578.6,
        "other": 302
      },
      {
        "region": "Europe",
        "equity": 1134.48,
        "fixedIncome": 1891.61,
        "realEstate": 7729.12,
        "privateEquity": 9485.34,
        "alts": 2356.37,
        "multiAsset": 437.41,
        "other": 147.7
      },
      {
        "region": "Asia",
        "equity": 7804.39,
        "fixedIncome": 198.84,
        "realEstate": 5021.12,
        "privateEquity": 2933.38,
        "alts": 265,
        "multiAsset": 2539.85,
        "other": 0
      },
      {
        "region": "Other Americas",
        "equity": 0,
        "fixedIncome": 190,
        "realEstate": 1071.83,
        "privateEquity": 14135.55,
        "alts": 1090.6,
        "multiAsset": 153.22,
        "other": 0
      },
      {
        "region": "Emerging Markets",
        "equity": 9490.06,
        "fixedIncome": 1675.18,
        "realEstate": 0,
        "privateEquity": 199.41,
        "alts": 610,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Other",
        "equity": 75.78,
        "fixedIncome": 104.42,
        "realEstate": 2648.38,
        "privateEquity": 843.74,
        "alts": 273.17,
        "multiAsset": 0,
        "other": 0
      }
    ],
    //US
    [
      {
        "region": "US",
        "equity": 25152.05,
        "fixedIncome": 25958.77,
        "realEstate": 14354.5,
        "privateEquity": 19464.2,
        "alts": 11849.35,
        "multiAsset": 7578.6,
        "other": 302
      },
      {
        "region": "Global",
        "equity": 14480.84,
        "fixedIncome": 8889,
        "realEstate": 6207,
        "privateEquity": 14854,
        "alts": 26267,
        "multiAsset": 1586,
        "other": 400
      },
      {
        "region": "Other Americas",
        "equity": 0,
        "fixedIncome": 170,
        "realEstate": 1071.83,
        "privateEquity": 14135.55,
        "alts": 1090.6,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Europe",
        "equity": 1000,
        "fixedIncome": 25,
        "realEstate": 2168.3,
        "privateEquity": 8204.79,
        "alts": 110.4,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "International (Other)",
        "equity": 9233.35,
        "fixedIncome": 598,
        "realEstate": 127,
        "privateEquity": 1056,
        "alts": 550,
        "multiAsset": 18.03,
        "other": 0
      },
      {
        "region": "Emerging Markets",
        "equity": 8152.4,
        "fixedIncome": 1282,
        "realEstate": 0,
        "privateEquity": 199.41,
        "alts": 610,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Asia",
        "equity": 600,
        "fixedIncome": 0,
        "realEstate": 1439.9,
        "privateEquity": 2854,
        "alts": 215,
        "multiAsset": 0,
        "other": 0
      }
    ],
    //Europe
    [
      {
        "region": "Global",
        "equity": 10808.83,
        "fixedIncome": 22170.84,
        "realEstate": 2232.37,
        "privateEquity": 2148.09,
        "alts": 1696.84,
        "multiAsset": 4685.62,
        "other": 87.13,
        "Grand Total": 43829.72
      },
      {
        "region": "Europe",
        "equity": 134.48,
        "fixedIncome": 1661.38,
        "realEstate": 5033.22,
        "privateEquity": 1280.55,
        "alts": 1681.16,
        "multiAsset": 437.41,
        "other": 147.7,
        "Grand Total": 10375.9
      },
      {
        "region": "Emerging Markets",
        "equity": 125.22,
        "fixedIncome": 393.18,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0,
        "Grand Total": 518.4
      },
      {
        "region": "US",
        "equity": 0,
        "fixedIncome": 214.23,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0,
        "Grand Total": 214.23
      },
      {
        "region": "International (Other)",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 212.52,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0,
        "Grand Total": 212.52
      },
      {
        "region": "Asia",
        "equity": 100,
        "fixedIncome": 0,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0,
        "Grand Total": 100
      }
    ],
    //Asia
    [
      {
        "region": "Asia",
        "equity": 4854.39,
        "fixedIncome": 198.84,
        "realEstate": 1722.62,
        "privateEquity": 79.38,
        "alts": 0,
        "multiAsset": 2539.85,
        "other": 0
      },
      {
        "region": "Global",
        "equity": 88.2,
        "fixedIncome": 403.2,
        "realEstate": 600,
        "privateEquity": 1387.93,
        "alts": 1000,
        "multiAsset": 3000,
        "other": 0
      },
      {
        "region": "US",
        "equity": 3455.67,
        "fixedIncome": 670,
        "realEstate": 706,
        "privateEquity": 150,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "International (Other)",
        "equity": 0,
        "fixedIncome": 664.42,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 441,
        "multiAsset": 3800,
        "other": 0
      },
      {
        "region": "Oceania",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 1368.54,
        "privateEquity": 0,
        "alts": 35.28,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Europe",
        "equity": 0,
        "fixedIncome": 205.23,
        "realEstate": 120.82,
        "privateEquity": 0,
        "alts": 564.81,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Other Americas",
        "equity": 0,
        "fixedIncome": 20,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      }
    ],
    //Oceania
    [
      {
        "region": "Global",
        "equity": 1179.94,
        "fixedIncome": 320,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 140.14,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Emerging Markets",
        "equity": 1212.44,
        "fixedIncome": 0,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Oceania",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 0,
        "privateEquity": 546.54,
        "alts": 37.89,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "US",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 70.07,
        "multiAsset": 0,
        "other": 0
      },
      {
        "region": "Asia",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 50,
        "multiAsset": 0,
        "other": 0
      }
    ]
    ];

//data for mekko chart 1 - # mandates by asset class Q
var mekkoNumberQData = [
  //all
  [
    {
      "quarter": "Q2",
      "equity": 129,
      "fixedIncome": 90,
      "realEstate": 98,
      "privateEquity": 199,
      "alts": 101,
      "Mutli Asset": 11,
      "other": 7,
      "total": 635
    },
    {
      "quarter": "Q3",
      "equity": 67,
      "fixedIncome": 61,
      "realEstate": 113,
      "privateEquity": 169,
      "alts": 82,
      "Mutli Asset": 14,
      "other": 6,
      "total": 512
    },
    {
      "quarter": "Q4",
      "equity": 82,
      "fixedIncome": 79,
      "realEstate": 99,
      "privateEquity": 195,
      "alts": 75,
      "Mutli Asset": 16,
      "other": 5,
      "total": 551
    },
    {
      "quarter": "Q1",
      "equity": 103,
      "fixedIncome": 86,
      "realEstate": 94,
      "privateEquity": 199,
      "alts": 89,
      "Mutli Asset": 24,
      "other": 8,
      "total": 603
    }
  ],
  //US
    [
      {
        "quarter": "Q2",
        "equity": 110,
        "fixedIncome": 71,
        "realEstate": 86,
        "privateEquity": 196,
        "alts": 94,
        "Mutli Asset": 2,
        "other": 6,
        "total": 565
      },
      {
        "quarter": "Q3",
        "equity": 52,
        "fixedIncome": 49,
        "realEstate": 78,
        "privateEquity": 150,
        "alts": 59,
        "Mutli Asset": 2,
        "other": 5,
        "total": 395
      },
      {
        "quarter": "Q4",
        "equity": 66,
        "fixedIncome": 54,
        "realEstate": 72,
        "privateEquity": 183,
        "alts": 61,
        "Mutli Asset": 6,
        "other": 2,
        "total": 444
      },
      {
        "quarter": "Q1",
        "equity": 85,
        "fixedIncome": 45,
        "realEstate": 63,
        "privateEquity": 183,
        "alts": 52,
        "Mutli Asset": 14,
        "other": 6,
        "total": 448
      }
    ],
    //Europe
    [
      {
        "quarter": "Q2",
        "equity": 14,
        "fixedIncome": 17,
        "realEstate": 7,
        "privateEquity": 3,
        "alts": 5,
        "Mutli Asset": 5,
        "other": 1,
        "total": 52
      },
      {
        "quarter": "Q3",
        "equity": 6,
        "fixedIncome": 10,
        "realEstate": 18,
        "privateEquity": 16,
        "alts": 13,
        "Mutli Asset": 10,
        "other": 1,
        "total": 74
      },
      {
        "quarter": "Q4",
        "equity": 8,
        "fixedIncome": 11,
        "realEstate": 17,
        "privateEquity": 4,
        "alts": 8,
        "Mutli Asset": 8,
        "other": 3,
        "total": 59
      },
      {
        "quarter": "Q1",
        "equity": 12,
        "fixedIncome": 30,
        "realEstate": 19,
        "privateEquity": 14,
        "alts": 29,
        "Mutli Asset": 6,
        "other": 2,
        "total": 112
      }
    ],
    //Asia
    [
      {
        "quarter": "Q2",
        "equity": 5,
        "fixedIncome": 2,
        "realEstate": 5,
        "privateEquity": 0,
        "alts": 0,
        "Mutli Asset": 3,
        "other": 0,
        "total": 15
      },
      {
        "quarter": "Q3",
        "equity": 3,
        "fixedIncome": 2,
        "realEstate": 11,
        "privateEquity": 3,
        "alts": 5,
        "Mutli Asset": 1,
        "other": 0,
        "total": 25
      },
      {
        "quarter": "Q4",
        "equity": 4,
        "fixedIncome": 14,
        "realEstate": 8,
        "privateEquity": 5,
        "alts": 4,
        "Mutli Asset": 0,
        "other": 0,
        "total": 35
      },
      {
        "quarter": "Q1",
        "equity": 1,
        "fixedIncome": 8,
        "realEstate": 9,
        "privateEquity": 1,
        "alts": 6,
        "Mutli Asset": 2,
        "other": 0,
        "total": 27
      }
    ],
    //Oceania
    [
      {
        "quarter": "Q2",
        "equity": 0,
        "fixedIncome": 0,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 0,
        "Mutli Asset": 0,
        "other": 0,
        "total": 0
      },
      {
        "quarter": "Q3",
        "equity": 5,
        "fixedIncome": 0,
        "realEstate": 1,
        "privateEquity": 0,
        "alts": 4,
        "Mutli Asset": 0,
        "other": 0,
        "total": 10
      },
      {
        "quarter": "Q4",
        "equity": 1,
        "fixedIncome": 0,
        "realEstate": 0,
        "privateEquity": 3,
        "alts": 2,
        "Mutli Asset": 0,
        "other": 0,
        "total": 6
      },
      {
        "quarter": "Q1",
        "equity": 2,
        "fixedIncome": 1,
        "realEstate": 0,
        "privateEquity": 0,
        "alts": 2,
        "Mutli Asset": 1,
        "other": 0,
        "total": 6
      }
    ]
  ];

//data for mekko chart 2 - value of mandates by asset class Q
var mekkoValueQData = [
  //all
  [
    {
      "quarter": "Q2",
      "equity": 24175.23,
      "fixedIncome": 10752,
      "realEstate": 8375.42,
      "privateEquity": 20226.66,
      "alts": 25886.34,
      "Mutli Asset": 5477.24,
      "other": 400,
      "total": 95292.89
    },
    {
      "quarter": "Q3",
      "equity": 11033.66,
      "fixedIncome": 14020.35,
      "realEstate": 15378.56,
      "privateEquity": 18505.62,
      "alts": 9171.34,
      "Mutli Asset": 4171.75,
      "other": 230,
      "total": 72511.28
    },
    {
      "quarter": "Q4",
      "equity": 34004.69,
      "fixedIncome": 31449.31,
      "realEstate": 8546.71,
      "privateEquity": 13966.92,
      "alts": 8505.74,
      "Mutli Asset": 5778.77,
      "other": 174.7,
      "total": 102426.84
    },
    {
      "quarter": "Q1",
      "equity": 31034.39,
      "fixedIncome": 8507.43,
      "realEstate": 8609.15,
      "privateEquity": 13698.44,
      "alts": 18012.92,
      "Mutli Asset": 8523.74,
      "other": 132.13,
      "total": 88518.2
    }
  ],
  //US
  [
    {
      "quarter": "Q2",
      "equity": 17500.74,
      "fixedIncome": 10355.87,
      "realEstate": 7485.2,
      "privateEquity": 19451.37,
      "alts": 10512.35,
      "Mutli Asset": 1525,
      "other": 400,
      "total": 67230.53
    },
    {
      "quarter": "Q3",
      "equity": 7108,
      "fixedIncome": 13325.4,
      "realEstate": 6876.43,
      "privateEquity": 15378.69,
      "alts": 6558.9,
      "Mutli Asset": 120,
      "other": 230,
      "total": 49597.42
    },
    {
      "quarter": "Q4",
      "equity": 13429.8,
      "fixedIncome": 8003.5,
      "realEstate": 6022.9,
      "privateEquity": 12980.99,
      "alts": 7961,
      "Mutli Asset": 2417.6,
      "other": 27,
      "total": 50842.79
    },
    {
      "quarter": "Q1",
      "equity": 20580.1,
      "fixedIncome": 5238,
      "realEstate": 4984,
      "privateEquity": 12956.9,
      "alts": 15660.1,
      "Mutli Asset": 5120.03,
      "other": 45,
      "total": 64584.13
    }
  ],
  //Europe
  [
    {
      "quarter": "Q2",
      "equity": 242.18,
      "fixedIncome": 303.13,
      "realEstate": 305.76,
      "privateEquity": 775.29,
      "alts": 407.19,
      "Mutli Asset": 733.42,
      "other": 0,
      "total": 2766.97
    },
    {
      "quarter": "Q3",
      "equity": 605.87,
      "fixedIncome": 506.75,
      "realEstate": 4672.29,
      "privateEquity": 1792.13,
      "alts": 435.26,
      "Mutli Asset": 1001.75,
      "other": 0,
      "total": 9014.05
    },
    {
      "quarter": "Q4",
      "equity": 2316.53,
      "fixedIncome": 22065.32,
      "realEstate": 1333.81,
      "privateEquity": 210.01,
      "alts": 218.01,
      "Mutli Asset": 3276.77,
      "other": 147.7,
      "total": 29568.15
    },
    {
      "quarter": "Q1",
      "equity": 8003.95,
      "fixedIncome": 1564.43,
      "realEstate": 1166.25,
      "privateEquity": 651.21,
      "alts": 2317.54,
      "Mutli Asset": 111.09,
      "other": 87.13,
      "total": 13901.6
    }
  ],
  //Asia
  [
    {
      "quarter": "Q2",
      "equity": 6432.31,
      "fixedIncome": 93,
      "realEstate": 584.46,
      "privateEquity": 0,
      "alts": 0,
      "Mutli Asset": 3200,
      "other": 0,
      "total": 10309.77
    },
    {
      "quarter": "Q3",
      "equity": 1277.75,
      "fixedIncome": 188.2,
      "realEstate": 1550,
      "privateEquity": 1334.8,
      "alts": 1749.15,
      "Mutli Asset": 3000,
      "other": 0,
      "total": 9099.9
    },
    {
      "quarter": "Q4",
      "equity": 688.2,
      "fixedIncome": 1380.49,
      "realEstate": 514.48,
      "privateEquity": 229.38,
      "alts": 256.66,
      "Mutli Asset": 0,
      "other": 0,
      "total": 3069.21
    },
    {
      "quarter": "Q1",
      "equity": 0,
      "fixedIncome": 500,
      "realEstate": 1869.04,
      "privateEquity": 53.13,
      "alts": 35.28,
      "Mutli Asset": 3139.85,
      "other": 0,
      "total": 5597.3
    }
  ],
  //Oceania
  [
    {
      "quarter": "Q2",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "Mutli Asset": 0,
      "other": 0,
      "total": 0
    },
    {
      "quarter": "Q3",
      "equity": 2042.04,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 228.03,
      "Mutli Asset": 0,
      "other": 0,
      "total": 2270.07
    },
    {
      "quarter": "Q4",
      "equity": 0,
      "fixedIncome": 0,
      "realEstate": 0,
      "privateEquity": 546.54,
      "alts": 70.07,
      "Mutli Asset": 0,
      "other": 0,
      "total": 616.61
    },
    {
      "quarter": "Q1",
      "equity": 350.34,
      "fixedIncome": 320,
      "realEstate": 0,
      "privateEquity": 0,
      "alts": 0,
      "Mutli Asset": 0,
      "other": 0,
      "total": 670.34
    }
  ]
  ];

//data for mekko chart 3 - 3 years number
var mekkoNumberYData = [
  //all
  [
    {
      "quarter": 2015,
      "equity": 396,
      "fixedIncome": 297,
      "realEstate": 460,
      "privateEquity": 679,
      "alts": 329,
      "Mutli Asset": 107,
      "other": 25,
      "total": 2293
    },
    {
      "quarter": 2016,
      "equity": 325,
      "fixedIncome": 263,
      "realEstate": 420,
      "privateEquity": 808,
      "alts": 331,
      "Mutli Asset": 93,
      "other": 28,
      "total": 2268
    },
    {
      "quarter": 2017,
      "equity": 381,
      "fixedIncome": 316,
      "realEstate": 404,
      "privateEquity": 762,
      "alts": 347,
      "Mutli Asset": 65,
      "other": 26,
      "total": 2301
    }
  ],
  //US
  [
    {
      "quarter": 2015,
      "equity": 286,
      "fixedIncome": 217,
      "realEstate": 371,
      "privateEquity": 650,
      "alts": 287,
      "Mutli Asset": 68,
      "other": 12,
      "total": 1891
    },
    {
      "quarter": 2016,
      "equity": 265,
      "fixedIncome": 194,
      "realEstate": 371,
      "privateEquity": 791,
      "alts": 288,
      "Mutli Asset": 50,
      "other": 12,
      "total": 1971
    },
    {
      "quarter": 2017,
      "equity": 313,
      "fixedIncome": 219,
      "realEstate": 299,
      "privateEquity": 712,
      "alts": 266,
      "Mutli Asset": 24,
      "other": 19,
      "total": 1852
    }
  ],
  //Europe
  [
    {
      "quarter": 2015,
      "equity": 62,
      "fixedIncome": 68,
      "realEstate": 67,
      "privateEquity": 22,
      "alts": 25,
      "Mutli Asset": 26,
      "other": 8,
      "total": 278
    },
    {
      "quarter": 2016,
      "equity": 39,
      "fixedIncome": 43,
      "realEstate": 43,
      "privateEquity": 12,
      "alts": 33,
      "Mutli Asset": 32,
      "other": 6,
      "total": 208
    },
    {
      "quarter": 2017,
      "equity": 40,
      "fixedIncome": 68,
      "realEstate": 61,
      "privateEquity": 37,
      "alts": 55,
      "Mutli Asset": 29,
      "other": 7,
      "total": 297
    }
  ],
  //Asia
  [
    {
      "quarter": 2015,
      "equity": 24,
      "fixedIncome": 5,
      "realEstate": 10,
      "privateEquity": 3,
      "alts": 6,
      "Mutli Asset": 3,
      "other": 2,
      "total": 53
    },
    {
      "quarter": 2016,
      "equity": 10,
      "fixedIncome": 12,
      "realEstate": 2,
      "privateEquity": 2,
      "alts": 6,
      "Mutli Asset": 6,
      "other": 1,
      "total": 39
    },
    {
      "quarter": 2017,
      "equity": 13,
      "fixedIncome": 26,
      "realEstate": 33,
      "privateEquity": 9,
      "alts": 15,
      "Mutli Asset": 6,
      "other": 0,
      "total": 102
    }
  ],
  //Oceania
  [
    {
      "quarter": 2015,
      "equity": 19,
      "fixedIncome": 3,
      "realEstate": 7,
      "privateEquity": 0,
      "alts": 6,
      "Mutli Asset": 1,
      "other": 1,
      "total": 37
    },
    {
      "quarter": 2016,
      "equity": 9,
      "fixedIncome": 8,
      "realEstate": 1,
      "privateEquity": 2,
      "alts": 2,
      "Mutli Asset": 4,
      "other": 8,
      "total": 34
    },
    {
      "quarter": 2017,
      "equity": 8,
      "fixedIncome": 1,
      "realEstate": 1,
      "privateEquity": 3,
      "alts": 8,
      "Mutli Asset": 1,
      "other": 0,
      "total": 22
    }
  ]
  ];

//data for mekko chart 4 - 3 years value
var mekkoValueYData = [
  //all
  [
    {
      "quarter": 2015,
      "equity": 109412.76,
      "fixedIncome": 66693.19,
      "realEstate": 42018,
      "privateEquity": 50943.29,
      "alts": 36246.8,
      "Mutli Asset": 43860.35,
      "other": 9596.18,
      "total": 358770.57
    },
    {
      "quarter": 2016,
      "equity": 226150.57,
      "fixedIncome": 49450.02,
      "realEstate": 58456.08,
      "privateEquity": 71819.87,
      "alts": 38995.48,
      "Mutli Asset": 36977.56,
      "other": 7484.05,
      "total": 489333.63
    },
    {
      "quarter": 2017,
      "equity": 100247.97,
      "fixedIncome": 64729.09,
      "realEstate": 40909.84,
      "privateEquity": 66397.64,
      "alts": 61576.34,
      "Mutli Asset": 23951.5,
      "other": 936.83,
      "total": 358749.21
    }
  ],
  //US
  [
    {
      "quarter": 2015,
      "equity": 82419.83,
      "fixedIncome": 47861.1,
      "realEstate": 29298.27,
      "privateEquity": 47785.95,
      "alts": 27847.2,
      "Mutli Asset": 28760.8,
      "other": 8564,
      "total": 272537.15
    },
    {
      "quarter": 2016,
      "equity": 188686.74,
      "fixedIncome": 25701.5,
      "realEstate": 35804.28,
      "privateEquity": 68725.42,
      "alts": 33635.91,
      "Mutli Asset": 23605.4,
      "other": 5223,
      "total": 381382.25
    },
    {
      "quarter": 2017,
      "equity": 58618.64,
      "fixedIncome": 36922.77,
      "realEstate": 25368.53,
      "privateEquity": 60767.95,
      "alts": 40692.35,
      "Mutli Asset": 9182.63,
      "other": 702,
      "total": 232254.87
    }
  ],
  //Europe
  [
    {
      "quarter": 2015,
      "equity": 15407.37,
      "fixedIncome": 18433.56,
      "realEstate": 6868.65,
      "privateEquity": 1595.11,
      "alts": 3417.51,
      "Mutli Asset": 4890.58,
      "other": 875.58,
      "total": 51488.36
    },
    {
      "quarter": 2016,
      "equity": 33028.07,
      "fixedIncome": 22430.28,
      "realEstate": 22572.62,
      "privateEquity": 1858.59,
      "alts": 4196.38,
      "Mutli Asset": 12589.47,
      "other": 1625.56,
      "total": 98300.97
    },
    {
      "quarter": 2017,
      "equity": 11168.53,
      "fixedIncome": 24439.63,
      "realEstate": 7478.11,
      "privateEquity": 3428.64,
      "alts": 3378,
      "Mutli Asset": 5123.03,
      "other": 234.83,
      "total": 55250.77
    }
  ],
  //Asia
  [
    {
      "quarter": 2015,
      "equity": 7282.03,
      "fixedIncome": 203,
      "realEstate": 2269.45,
      "privateEquity": 1104.8,
      "alts": 3465.8,
      "Mutli Asset": 100,
      "other": 0,
      "total": 14425.08
    },
    {
      "quarter": 2016,
      "equity": 3648.66,
      "fixedIncome": 23.23,
      "realEstate": 0,
      "privateEquity": 1014.3,
      "alts": 13.19,
      "Mutli Asset": 705.62,
      "other": 0,
      "total": 5405
    },
    {
      "quarter": 2017,
      "equity": 8398.26,
      "fixedIncome": 2161.69,
      "realEstate": 4517.98,
      "privateEquity": 1617.31,
      "alts": 2041.09,
      "Mutli Asset": 9339.85,
      "other": 0,
      "total": 28076.18
    }
  ],
  //Oceania
  [
    {
      "quarter": 2015,
      "equity": 3288.5,
      "fixedIncome": 193.53,
      "realEstate": 982.87,
      "privateEquity": "",
      "alts": 613.8,
      "Mutli Asset": 87.14,
      "other": 0,
      "total": 5165.84
    },
    {
      "quarter": 2016,
      "equity": 787.1,
      "fixedIncome": 1195.01,
      "realEstate": 79.18,
      "privateEquity": 109.87,
      "alts": 200,
      "Mutli Asset": 77.07,
      "other": 608.49,
      "total": 3056.72
    },
    {
      "quarter": 2017,
      "equity": 2392.38,
      "fixedIncome": 320,
      "realEstate": 0,
      "privateEquity": 546.54,
      "alts": 298.1,
      "Mutli Asset": 0,
      "other": 0,
      "total": 3557.02
    }
  ]
  ];

//average mandate size region Q data
var avgSizeRegionQData = [
  //all
  [
    {
      "class": "Global",
      "average": 309.68
    },
    {
      "class": "Asia",
      "average": 303.47
    },
    {
      "class": "Oceania",
      "average": 295.92
    },
    {
      "class": "Emerging Markets",
      "average": 145.49
    },
    {
      "class": "US",
      "average": 142.65
    },
    {
      "class": "other Americas",
      "average": 107.83
    },
    {
      "class": "Europe",
      "average": 86.82
    }
  ],
  //US
  [
    {
      "class": "Global",
      "average": 274.8
    },
    {
      "class": "Emerging Markets",
      "average": 161.49
    },
    {
      "class": "US",
      "average": 141.53
    },
    {
      "class": "other Americas",
      "average": 107.83
    },
    {
      "class": "Asia",
      "average": 88.21
    },
    {
      "class": "Europe",
      "average": 76.66
    },
    {
      "class": "Oceania",
      "average": 75.78
    }
  ],
  //Europe
  [
    {
      "class": "Global",
      "average": 490.9
    },
    {
      "class": "Europe",
      "average": 89.38
    },
    {
      "class": "Emerging Markets",
      "average": 17.53
    }
  ],
  //Asia
  [
    {
      "class": "Asia",
      "average": 1277.18
    },
    {
      "class": "International",
      "average": 380
    },
    {
      "class": "Oceania",
      "average": 350.96
    },
    {
      "class": "US",
      "average": 268
    },
    {
      "class": "Global",
      "average": 85.78
    }
  ],
  //Oceania
  [
    {
      "class": "Global",
      "average": 223.45
    }
  ]
];

//data for bar chart 2 - avg mandate size by asset class Q
var avgSizeClassQData = [
  //all
  [
    {
      "class": "Mutli Asset",
      "average": 774.89
    },
    {
      "class": "Equity",
      "average": 477.45
    },
    {
      "class": "Alternatives",
      "average": 272.92
    },
    {
      "class": "Fixed Income",
      "average": 163.6
    },
    {
      "class": "Real Estate",
      "average": 101.28
    },
    {
      "class": "Private Equity",
      "average": 70.61
    },
    {
      "class": "Other",
      "average": 33.03
    }
  ],
  //US
  [
    {
      "class": "Mutli Asset",
      "average": 853.34
    },
    {
      "class": "Equity",
      "average": 367.5
    },
    {
      "class": "Alternatives",
      "average": 326.25
    },
    {
      "class": "All",
      "average": 166.03
    },
    {
      "class": "Fixed Income",
      "average": 154.06
    },
    {
      "class": "Real Estate",
      "average": 81.7
    },
    {
      "class": "Private Equity",
      "average": 71.59
    },
    {
      "class": "Other",
      "average": 15
    }
  ],
  //Europe
  [
    {
      "class": "Equity",
      "average": 2000.99
    },
    {
      "class": "Alternatives",
      "average": 136.33
    },
    {
      "class": "Fixed Income",
      "average": 130.37
    },
    {
      "class": "Other",
      "average": 87.13
    },
    {
      "class": "Real Estate",
      "average": 77.75
    },
    {
      "class": "Private Equity",
      "average": 59.2
    },
    {
      "class": "Mutli Asset",
      "average": 55.55
    }
  ],
  //Asia
  [
    {
      "class": "Alternatives",
      "average": 35.28
    },
    {
      "class": "Private Equity",
      "average": 53.13
    },
    {
      "class": "Fixed Income",
      "average": 125
    },
    {
      "class": "Real Estate",
      "average": 311.51
    },
    {
      "class": "Mutli Asset",
      "average": 1569.93
    }
  ],
  //Oceania
  [
    {
      "class": "Fixed Income",
      "average": 320
    },
    {
      "class": "Equity",
      "average": 175.17
    }
  ]
];

//average mandate size region Y data
var avgSizeRegionYData = [
  //all
  [
    {
      "class": "Global",
      "average": 282.64
    },
    {
      "class": "Oceania",
      "average": 229.34
    },
    {
      "class": "Emerging Markets",
      "average": 217.72
    },
    {
      "class": "Asia",
      "average": 213.21
    },
    {
      "class": "US",
      "average": 137.8
    },
    {
      "class": "Europe",
      "average": 113.08
    },
    {
      "class": "Other Americas",
      "average": 87.59
    }
  ],
  //US
  [
    {
      "class": "Emerging Markets",
      "average": 204.88
    },
    {
      "class": "Global",
      "average": 179.91
    },
    {
      "class": "US",
      "average": 132.65
    },
    {
      "class": "Europe",
      "average": 102.75
    },
    {
      "class": "Asia",
      "average": 89.63
    },
    {
      "class": "Other Americas",
      "average": 88.54
    },
    {
      "class": "Oceania",
      "average": 75.78
    }
  ],
  //Europe
  [
    {
      "class": "Global",
      "average": 684.84
    },
    {
      "class": "US",
      "average": 214.23
    },
    {
      "class": "International",
      "average": 212.52
    },
    {
      "class": "Emerging Markets",
      "average": 129.6
    },
    {
      "class": "Europe",
      "average": 128.1
    },
    {
      "class": "Asia",
      "average": 100
    }
  ],
  //Asia
  [
    {
      "class": "US",
      "average": 553.52
    },
    {
      "class": "Asia",
      "average": 469.75
    },
    {
      "class": "Global",
      "average": 381.14
    },
    {
      "class": "Oceania",
      "average": 350.96
    },
    {
      "class": "Europe",
      "average": 89.09
    },
    {
      "class": "OtherAmericas",
      "average": 20
    }
  ],
  //Oceania
  [
    {
      "class": "Emerging Markets",
      "average": 1212.44
    },
    {
      "class": "Global",
      "average": 205.01
    },
    {
      "class": "Oceania",
      "average": 146.11
    },
    {
      "class": "US",
      "average": 70.07
    },
    {
      "class": "Asia",
      "average": 50
    }
  ]
];

//data for bar chart 2 - avg mandate size by asset class Y
var avgSizeClassYData = [
  //all
  [
    {
      "class": "Mutli Asset",
      "average": 647.34
    },
    {
      "class": "Equity",
      "average": 404.23
    },
    {
      "class": "Fixed Income",
      "average": 288.97
    },
    {
      "class": "Alternatives",
      "average": 201.89
    },
    {
      "class": "Real Estate",
      "average": 112.7
    },
    {
      "class": "Other",
      "average": 104.09
    },
    {
      "class": "Private Equity",
      "average": 89.24
    }
  ],
  //US
  [
    {
      "class": "Mutli Asset",
      "average": 612.18
    },
    {
      "class": "Equity",
      "average": 273.92
    },
    {
      "class": "Fixed Income",
      "average": 206.27
    },
    {
      "class": "Alternatives",
      "average": 158.34
    },
    {
      "class": "Other",
      "average": 100.29
    },
    {
      "class": "Real Estate",
      "average": 86.58
    },
    {
      "class": "Private Equity",
      "average": 86.2
    }
  ],
  //Europe
  [
    {
      "class": "Fixed Income",
      "average": 977.59
    },
    {
      "class": "Equity",
      "average": 930.71
    },
    {
      "class": "Mutli Asset",
      "average": 426.92
    },
    {
      "class": "Real Estate",
      "average": 182.39
    },
    {
      "class": "Private Equity",
      "average": 126.99
    },
    {
      "class": "Other",
      "average": 117.42
    },
    {
      "class": "Alternatives",
      "average": 102.36
    }
  ],
  //Asia
  [
    {
      "class": "Mutli Asset",
      "average": 1556.64
    },
    {
      "class": "Equity",
      "average": 839.83
    },
    {
      "class": "Alternatives",
      "average": 255.14
    },
    {
      "class": "Real Estate",
      "average": 225.9
    },
    {
      "class": "Private Equity",
      "average": 202.16
    },
    {
      "class": "Fixed Income",
      "average": 120.09
    }
  ],
  //Oceania
  [
    {
      "class": "Equity",
      "average": 341.77
    },
    {
      "class": "Fixed Income",
      "average": 320
    },
    {
      "class": "Private Equity",
      "average": 182.18
    },
    {
      "class": "Alternatives",
      "average": 74.53
    }
  ]
];