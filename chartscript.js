//chart cloner function
AmCharts.cloneObject = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

//stacked chart graphs1 - equity
var stackedGraphs1 = new AmCharts.AmGraph();
 stackedGraphs1.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs1.fillAlphas = 0.8;
 stackedGraphs1.labelText = "[[value]]";
 stackedGraphs1.lineAlpha = 0.3;
 stackedGraphs1.title = "Equity";
 stackedGraphs1.type = "column";
 stackedGraphs1.color = "#000000";
 stackedGraphs1.fillColors = "#2D43AC";
 stackedGraphs1.fillAlphas = 0.7;
 stackedGraphs1.valueField = "equity";

//stacked chart graphs2 - fixed income
var stackedGraphs2 = new AmCharts.AmGraph();
 stackedGraphs2.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs2.fillAlphas = 0.8;
 stackedGraphs2.labelText = "[[value]]";
 stackedGraphs2.lineAlpha = 0.3;
 stackedGraphs2.title = "Fixed Income";
 stackedGraphs2.type = "column";
 stackedGraphs2.color = "#000000";
 stackedGraphs2.fillColors = "#FDDC33";
 stackedGraphs2.fillAlphas = 0.7;
 stackedGraphs2.valueField = "fixedIncome";

//stacked chart graphs3 - real estate
var stackedGraphs3 = new AmCharts.AmGraph();
 stackedGraphs3.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs3.fillAlphas = 0.8;
 stackedGraphs3.labelText = "[[value]]";
 stackedGraphs3.lineAlpha = 0.3;
 stackedGraphs3.title = "Real Estate";
 stackedGraphs3.type = "column";
 stackedGraphs3.color = "#000000";
 stackedGraphs3.fillColors = "#00FA9A";
 stackedGraphs3.fillAlphas = 0.7;
 stackedGraphs3.valueField = "realEstate";

//stacked chart graphs4 - private equity
var stackedGraphs4 = new AmCharts.AmGraph();
 stackedGraphs4.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs4.fillAlphas = 0.8;
 stackedGraphs4.labelText = "[[value]]";
 stackedGraphs4.lineAlpha = 0.3;
 stackedGraphs4.title = "Private Equity";
 stackedGraphs4.type = "column";
 stackedGraphs4.color = "#000000";
 stackedGraphs4.fillColors = "#DC143C";
 stackedGraphs4.fillAlphas = 0.7;
 stackedGraphs4.valueField = "privateEquity";

 //stacked chart graphs5 - Alternatives
var stackedGraphs5 = new AmCharts.AmGraph();
 stackedGraphs5.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs5.fillAlphas = 0.8;
 stackedGraphs5.labelText = "[[value]]";
 stackedGraphs5.lineAlpha = 0.3;
 stackedGraphs5.title = "Alternatives";
 stackedGraphs5.type = "column";
 stackedGraphs5.color = "#000000";
 stackedGraphs5.fillColors = "#FF1493";
 stackedGraphs5.fillAlphas = 0.7;
 stackedGraphs5.valueField = "alts";

 //stacked chart graphs6 - multi asset
var stackedGraphs6 = new AmCharts.AmGraph();
 stackedGraphs6.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs6.fillAlphas = 0.8;
 stackedGraphs6.labelText = "[[value]]";
 stackedGraphs6.lineAlpha = 0.3;
 stackedGraphs6.title = "Multi Asset";
 stackedGraphs6.type = "column";
 stackedGraphs6.color = "#000000";
 stackedGraphs6.fillColors = "#CCB078";
 stackedGraphs6.fillAlphas = 0.7;
 stackedGraphs6.valueField = "multiAsset";

 //stacked chart graphs7 - other
var stackedGraphs7 = new AmCharts.AmGraph();
 stackedGraphs7.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs7.fillAlphas = 0.8;
 stackedGraphs7.labelText = "[[value]]";
 stackedGraphs7.lineAlpha = 0.3;
 stackedGraphs7.title = "Other";
 stackedGraphs7.type = "column";
 stackedGraphs7.color = "#000000";
 stackedGraphs7.fillColors = "#383638";
 stackedGraphs7.fillAlphas = 0.7;
 stackedGraphs7.valueField = "other";

  //stacked chart graphs8 - hedge funds
var stackedGraphs8 = new AmCharts.AmGraph();
 stackedGraphs8.balloonText = "<b>[[category]]</b><br><span style='font-size:14px'>[[title]]: <b>[[value]]</b></span>";
 stackedGraphs8.fillAlphas = 0.8;
 stackedGraphs8.labelText = "[[value]]";
 stackedGraphs8.lineAlpha = 0.3;
 stackedGraphs8.title = "Hedge Funds";
 stackedGraphs8.type = "column";
 stackedGraphs8.color = "#000000";
 stackedGraphs8.fillColors = "#556B2F";
 stackedGraphs8.fillAlphas = 0.7;
 stackedGraphs8.valueField = "hedgeFunds";

//top mandate graph
var topMandateGraph = new AmCharts.AmGraph();
	topMandateGraph.balloonText = "<b>[[type]];</b> awarded to [[managers]]";
	topMandateGraph.labelText = "$[[amount]]M";
	topMandateGraph.fillColors = "#0DB949";
	topMandateGraph.fillAlphas = 1;
	topMandateGraph.lineAlpha = 0.2;
	topMandateGraph.title = "mandate size amount";
	topMandateGraph.type = "column";
	topMandateGraph.valueField = "amount";

//combo chart graph 1 - columns
var comboColumnGraph = new AmCharts.AmGraph();
	comboColumnGraph.valueAxis = "v1";
	comboColumnGraph.alphaField = "alpha";
	comboColumnGraph.fillColors = "#383638";
	comboColumnGraph.lineAlpha = 0;
	comboColumnGraph.fillAlphas = 0.7;
	comboColumnGraph.title = "# of mandates";
	comboColumnGraph.type = "column";
	comboColumnGraph.valueField = "number";
	comboColumnGraph.dashLengthField = "dashLengthColumn";

//combo chart graph 2 - line
var comboLineGraph = new AmCharts.AmGraph();
	comboLineGraph.valueAxis = "v2";
	comboLineGraph.balloonText = "<span style='font-size:12px;'>[[title]] of [[category]] mandates:<br><span style='font-size:20px;'>$[[value]] million</span> [[additional]]</span>";
	comboLineGraph.bullet = "round";
	comboLineGraph.bulletSize = 7;
	comboLineGraph.bulletBorderAlpha = 1;
	comboLineGraph.bulletColor = "#FFFFFF";
	comboLineGraph.useLineColorForBulletBorder = true;
	comboLineGraph.bulletBorderThickness = 3;
	comboLineGraph.fillAlphas = 0;
	comboLineGraph.lineAlpha = 1;
	comboLineGraph.lineThickness = 2;
	comboLineGraph.title = "disclosed value";
	comboLineGraph.valueField = "value";
	comboLineGraph.dashLengthField = "dashLengthLine";

//bar charts graph
var barChartGraph = new AmCharts.AmGraph();
	barChartGraph.balloonText = "[[category]]: <b>$[[value]]M</b>";
	barChartGraph.fillAlphas = 0.9;
	barChartGraph.fillColors = "#383638";
	barChartGraph.lineAlpha = 0;
	barChartGraph.type = "column";
	barChartGraph.valueField = "average";

//qMandateChart value Axis (100% stacked)
var qMandateValueAxis = new AmCharts.ValueAxis();
	qMandateValueAxis.stackType = "100%";
	qMandateValueAxis.axisAlpha = 0.5;
	qMandateValueAxis.gridAlpha = 0.2;
	qMandateValueAxis.dashLength = 1;
	qMandateValueAxis.unit = "%";

//topMandate value axis
var topMandateValueAxis = new AmCharts.ValueAxis();
	topMandateValueAxis.title = "mandate size, USD millions";
	topMandateValueAxis.minimum = 0;

//stacked charts value axis 1 - number
var stackedValueAxis1 = new AmCharts.ValueAxis();
	stackedValueAxis1.stackType = "regular";
	stackedValueAxis1.axisAlpha = 0.3;
	stackedValueAxis1.gridColor = "grey";
	stackedValueAxis1.gridAlpha = 0.4;
	stackedValueAxis1.title = "# of mandates";

//stacked charts value axis 2 - value
var stackedValueAxis2 = new AmCharts.ValueAxis();
	stackedValueAxis2.stackType = "regular";
	stackedValueAxis2.axisAlpha = 0.3;
	stackedValueAxis2.gridColor = "grey";
	stackedValueAxis2.gridAlpha = 0.2;
	stackedValueAxis2.title = "value ($millions)";

//combo chart value axis 1 - number
var comboColumnAxis = new AmCharts.ValueAxis();
	comboColumnAxis.id = "v1";
	comboColumnAxis.axisAlpha = 0;
	comboColumnAxis.position = "left";
	comboColumnAxis.title = "# of mandates";

//combo chart value axis 2 - value
var comboLineAxis = new AmCharts.ValueAxis();
	comboLineAxis.id = "v2";
	comboLineAxis.axisAlpha = 0;
	comboLineAxis.position = "right";
	comboLineAxis.title = "disclosed value ($millions)";

//bar chart value axis
var barChartValueAxis = new AmCharts.ValueAxis();
	barChartValueAxis.minimum = 0;
	barChartValueAxis.gridColor = "white";
	barChartValueAxis.gridAlpha = 0.5;
	barChartValueAxis.dashLength = 0.5;
	barChartValueAxis.title = "$millions";

//mekko value axis
var mekkoValueAxis = new AmCharts.ValueAxis();
	mekkoValueAxis.stackType = "100% stacked";
	mekkoValueAxis.gridAlpha = 0.1;
	mekkoValueAxis.unit = "%";
	mekkoValueAxis.axisAlpha = 0;

//Data for mandate summary chart 
var mandateChartData =   [
//all
    [
        {
            "equity": 48,
            "fixedIncome": 33,
            "realEstate": 38,
            "privateEquity": 40,
            "alts": 45,
            "hedgeFunds": 8,
            "multiAsset": 15,
            "other": 8,
            "status": "Potential"
        },
        {
            "equity": 40,
            "fixedIncome": 29,
            "realEstate": 13,
            "privateEquity": 13,
            "alts": 11,
            "hedgeFunds": 4,
            "multiAsset": 20,
            "other": 14,
            "status": "New"
        },
        {
            "equity": 91,
            "fixedIncome": 87,
            "realEstate": 102,
            "privateEquity": 214,
            "alts": 87,
            "hedgeFunds": 37,
            "multiAsset": 18,
            "other": 5,
            "status": "Completed"
        }
    ],
     //US
    [
        {
            "equity": 37,
            "fixedIncome": 17,
            "realEstate": 22,
            "privateEquity": 21,
            "alts": 12,
            "hedgeFunds": 7,
            "multiAsset": 4,
            "other": 3,
            "status": "Potential"
        },
        {
            "equity": 31,
            "fixedIncome": 15,
            "realEstate": 10,
            "privateEquity": 3,
            "alts": 7,
            "hedgeFunds": 2,
            "multiAsset": 15,
            "other": 2,
            "status": "New"
        },
        {
            "equity": 62,
            "fixedIncome": 62,
            "realEstate": 70,
            "privateEquity": 172,
            "alts": 49,
            "hedgeFunds": 36,
            "multiAsset": 7,
            "other": 3,
            "status": "Completed"
        }
    ],
     //Europe
    [
        {
            "equity": 3,
            "fixedIncome": 4,
            "realEstate": 5,
            "privateEquity": 5,
            "alts": 7,
            "hedgeFunds": 0,
            "multiAsset": 7,
            "other": 1,
            "status": "Potential"
        },
        {
            "equity": 7,
            "fixedIncome": 9,
            "realEstate": 1,
            "privateEquity": 4,
            "alts": 2,
            "hedgeFunds": 1,
            "multiAsset": 3,
            "other": 12,
            "status": "New"
        },
        {
            "equity": 21,
            "fixedIncome": 12,
            "realEstate": 24,
            "privateEquity": 32,
            "alts": 28,
            "hedgeFunds": 0,
            "multiAsset": 9,
            "other": 1,
            "status": "Completed"
        }
    ],
     //Asia
    [
        {
            "equity": 5,
            "fixedIncome": 12,
            "realEstate": 10,
            "privateEquity": 10,
            "alts": 18,
            "hedgeFunds": 1,
            "multiAsset": 4,
            "other": 1,
            "status": "Potential"
        },
        {
            "equity": 2,
            "fixedIncome": 4,
            "realEstate": 2,
            "privateEquity": 6,
            "alts": 1,
            "hedgeFunds": 1,
            "multiAsset": 1,
            "other": 0,
            "status": "New"
        },
        {
            "equity": 3,
            "fixedIncome": 10,
            "realEstate": 5,
            "privateEquity": 5,
            "alts": 6,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "other": 0,
            "status": "Completed"
        }
    ],
     
    //Oceania
    [
        {
            "equity": 1,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 2,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "other": 0,
            "status": "Potential"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "other": 0,
            "status": "New"
        },
        {
            "equity": 5,
            "fixedIncome": 3,
            "realEstate": 0,
            "privateEquity": 3,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "other": 1,
            "status": "Completed"
        }
    ]
];
//top mandates chart data
var  topMandateData = [
	//all
	[
	  {
	    "fund": "Fonds de Reserve Pour les Retraites (FRR)",
	    "amount": 5313.02,
	    "type": "Global Passive Equity",
	    "managers": "Amundi Asset Management, Candriam Luxembourg and Robeco Institutional Asset Management"
	  },
	  {
	    "fund": "Maryland 529",
	    "amount": 4700,
	    "type": "US Multi Asset",
	    "managers": "T. Rowe Price"
	  },
	  {
	    "fund": "Alliance Trust",
	    "amount": 4507.84,
	    "type": "Global Equity",
	    "managers": "Eight asset managers"
	  },
	  {
	    "fund": "Ohio Bureau of Workers Compensation",
	    "amount": 3000,
	    "type": "US Passive Equity",
	    "managers": "Mellon Capital Management"
	  },
	  {
	    "fund": "Labor Retirement Fund",
	    "amount": 2539.85,
	    "type": "Taiwan Multi Asset",
	    "managers": "Seven asset managers"
	  }
	],
	//US
	[
	  {
	    "fund": "Maryland 529",
	    "amount": 4700,
	    "type": "US Multi Asset",
	    "managers": "T. Rowe Price"
	  },
	  {
	    "fund": "Alliance Trust",
	    "amount": 4507.84,
	    "type": "Global Equity",
	    "managers": "Eight asset managers"
	  },
	  {
	    "fund": "Ohio Bureau of Workers Compensation",
	    "amount": 3000,
	    "type": "US Passive Equity",
	    "managers": "Mellon Capital Management"
	  },
	  {
	    "fund": "State of Wisconsin Investment Board",
	    "amount": 1985,
	    "type": "Global Hedge Funds",
	    "managers": "D.E. Shaw Group, Marshall Wace Asset Management, Coastland Capital, Stone Milliner Asset Management, Alliance Bernstein & Investcorp"
	  },
	  {
	    "fund": "South Carolina Retirement System Investment Commission",
	    "amount": 1146,
	    "type": "International Equity",
	    "managers": "Man Numeric Investors and Algert Global"
	  }
	],
	//Europe
	[
	  {
	    "fund": "Fonds de Reserve Pour les Retraites (FRR)",
	    "amount": 5313.02,
	    "type": "Global Passive Equity",
	    "managers": "Amundi Asset Management, Candriam Luxembourg and Robeco Institutional Asset Management"
	  },
	  {
	    "fund": "HSBC UK Pension Scheme",
	    "amount": 2504.36,
	    "type": "Global Passive Equity",
	    "managers": "Legal & General Investment Management"
	  },
	  {
	    "fund": "PensionDanmark",
	    "amount": 571.28,
	    "type": "Global Real Assets",
	    "managers": "Copenhagen Infrastructure III fund"
	  },
	  {
	    "fund": "APG",
	    "amount": 473.32,
	    "type": "Europe Real Assets",
	    "managers": "3i"
	  },
	  {
	    "fund": "Ente Nazionale di Previdenza ed Assistenza dei Medici e degli Odontoiatri",
	    "amount": 470.73,
	    "type": "UK Real Estate",
	    "managers": "Antirion"
	  }
	],
	//Asia
	[
	  {
	    "fund": "Labor Retirement Fund",
	    "amount": 2539.85,
	    "type": "Taiwan Multi Asset",
	    "managers": "Seven asset managers"
	  },
	  {
	    "fund": "GIC",
	    "amount": 606.22,
	    "type": "Australia Real Estate",
	    "managers": "Charter Hall Group and Primewest"
	  },
	  {
	    "fund": "Public Service Pension Fund",
	    "amount": 600,
	    "type": "International Multi Asset",
	    "managers": "AllianceBernstein, JPMorgan Asset Management and Schroders"
	  },
	  {
	    "fund": "Korea Postal Savings",
	    "amount": 436,
	    "type": "US Real Estate",
	    "managers": "TIAA, Prudential Financial and New York Life Insurance"
	  },
	  {
	    "fund": "Government Employees Pension Service",
	    "amount": 160,
	    "type": "International Fixed Income",
	    "managers": "Apollo Global Management and Cerberus Capital Management"
	  }
	],
	//Oceania
	[
	  {
	    "fund": "Victorian Superannuation Fund (VicSuper)",
	    "amount": 320,
	    "type": "Global Fixed Income",
	    "managers": "Colchester Global Investors"
	  },
	  {
	    "fund": "NZ Super Fund",
	    "amount": 175.17,
	    "type": "Global Equity",
	    "managers": "AQR Capital Management"
	  },
	  {
	    "fund": "NZ Super Fund",
	    "amount": 175.17,
	    "type": "Global Equity (Low-Volatility)",
	    "managers": "AQR Capital Management"
	  }
	]
	];
//avg mandate size region Q data
var avgSizeRegionQData = [
    //all
    [
        {
            "average": 615.78,
            "class": "Emerging Markets"
        },
        {
            "average": 377.8091,
            "class": "Global"
        },
        {
            "average": 227.3033,
            "class": "Oceania"
        },
        {
            "average": 199.1329,
            "class": "U.S."
        },
        {
            "average": 157.4294,
            "class": "Asia"
        },
        {
            "average": 96.918,
            "class": "International / Other"
        },
        {
            "average": 96.5395,
            "class": "Europe"
        },
        {
            "average": 60.0192,
            "class": "Other Americas"
        }
    ], 
    //US
    [
        {
            "average": 662.4444,
            "class": "Emerging Markets"
        },
        {
            "average": 202.532,
            "class": "U.S."
        },
        {
            "average": 120.5777,
            "class": "Global"
        },
        {
            "average": 100.5833,
            "class": "Asia"
        },
        {
            "average": 91.5545,
            "class": "International / Other"
        },
        {
            "average": 80.4,
            "class": "Europe"
        },
        {
            "average": 75,
            "class": "Oceania"
        },
        {
            "average": 60.0192,
            "class": "Other Americas"
        }
    ],
    //Europe 
    [
        {
            "average": 213.845,
            "class": "Global"
        },
        {
            "average": 195.8,
            "class": "Emerging Markets"
        },
        {
            "average": 168.78,
            "class": "U.S."
        },
        {
            "average": 106.3247,
            "class": "Europe"
        },
        {
            "average": 11.67,
            "class": "International / Other"
        }
    ],
     //Asia
    [
        {
            "average": 625.37,
            "class": "Global"
        },
        {
            "average": 380.6233,
            "class": "Asia"
        },
        {
            "average": 145,
            "class": "International / Other"
        },
        {
            "average": 64,
            "class": "Europe"
        },
        {
            "average": 57.5,
            "class": "U.S."
        }
    ],
     //Oceania
    [
        {
            "average": 5766.03,
            "class": "Global"
        },
        {
            "average": 303.455,
            "class": "Oceania"
        },
        {
            "average": 200,
            "class": "U.S."
        }
    ]
];

var avgSizeClassQData = [
    //all
    [
    {
        "average": 1946.7808,
        "class": "Multi Asset"
    },
    {
        "average": 306.1114,
        "class": "Fixed Income"
    },
    {
        "average": 267.2873,
        "class": "Equity"
    },
    {
        "average": 262.3378,
        "class": "Real Estate"
    },
    {
        "average": 163.3976,
        "class": "Private Equity"
    },
    {
        "average": 61.8857,
        "class": "Hedge Funds"
    }
],
//US
[
    {
        "average": 901.5,
        "class": "Multi Asset"
    },
    {
        "average": 295.5312,
        "class": "Fixed Income"
    },
    {
        "average": 283.1309,
        "class": "Real Estate"
    },
    {
        "average": 242.1366,
        "class": "Equity"
    },
    {
        "average": 84.9724,
        "class": "Private Equity"
    },
    {
        "average": 60.7647,
        "class": "Hedge Funds"
    }
],
 //Europe
[
    {
        "average": 300.3014,
        "class": "Equity"
    },
    {
        "average": 221.5075,
        "class": "Real Estate"
    },
    {
        "average": 190.474,
        "class": "Multi Asset"
    },
    {
        "average": 140.3744,
        "class": "Fixed Income"
    },
    {
        "average": 38.5469,
        "class": "Private Equity"
    }
],
//Asia
[
    {
        "average": 566.9956,
        "class": "Fixed Income"
    },
    {
        "average": 537.375,
        "class": "Equity"
    },
    {
        "average": 183.56,
        "class": "Private Equity"
    },
    {
        "average": 100,
        "class": "Hedge Funds"
    },
    {
        "average": 45.8,
        "class": "Real Estate"
    }
],
//Oceania
[
    {
        "average": 17000,
        "class": "Multi Asset"
    },
    {
        "average": 276.89,
        "class": "Equity"
    },
    {
        "average": 137.165,
        "class": "Fixed Income"
    }
]
];

//average mandate size region Y data
var avgSizeRegionYData = [
    //all
    [
        {
            "average": 420.4674,
            "class": "International / Other"
        },
        {
            "average": 315.3499,
            "class": "Global"
        },
        {
            "average": 268.5473,
            "class": "Emerging Markets"
        },
        {
            "average": 203.3167,
            "class": "Oceania"
        },
        {
            "average": 183.7451,
            "class": "Asia"
        },
        {
            "average": 146.5916,
            "class": "U.S."
        },
        {
            "average": 111.078,
            "class": "Europe"
        },
        {
            "average": 70.9882,
            "class": "Other Americas"
        }
    ],
     //US
    [
        {
            "average": 253.6658,
            "class": "Emerging Markets"
        },
        {
            "average": 160.1179,
            "class": "International / Other"
        },
        {
            "average": 146.0215,
            "class": "U.S."
        },
        {
            "average": 131.1912,
            "class": "Global"
        },
        {
            "average": 97.2505,
            "class": "Asia"
        },
        {
            "average": 91.0694,
            "class": "Europe"
        },
        {
            "average": 75,
            "class": "Oceania"
        },
        {
            "average": 71.5019,
            "class": "Other Americas"
        }
    ],
    //Europe
    [
        {
            "average": 724.4126,
            "class": "Global"
        },
        {
            "average": 377.1804,
            "class": "Europe"
        },
        {
            "average": 220.0767,
            "class": "Emerging Markets"
        },
        {
            "average": 173.9736,
            "class": "U.S."
        },
        {
            "average": 29.7867,
            "class": "International / Other"
        },
        {
            "average": 20,
            "class": "Asia"
        }
    ],
    //Asia
    [
        {
            "average": 1992.175,
            "class": "International / Other"
        },
        {
            "average": 467.9048,
            "class": "Global"
        },
        {
            "average": 396.9276,
            "class": "Asia"
        },
        {
            "average": 278.4867,
            "class": "Oceania"
        },
        {
            "average": 156.9636,
            "class": "U.S."
        },
        {
            "average": 88.0938,
            "class": "Europe"
        },
        {
            "average": 20,
            "class": "Other Americas"
        }
    ],
    //Oceania
    [
        {
            "average": 1614.2758,
            "class": "Global"
        },
        {
            "average": 1271.82,
            "class": "Emerging Markets"
        },
        {
            "average": 219.9125,
            "class": "Oceania"
        },
        {
            "average": 137.165,
            "class": "U.S."
        }
    ]
];

//data for bar chart 2 - avg mandate size by asset class Y
var avgSizeClassYData = [
//all
    [
        {
            "average": 1045.0256,
            "class": "Multi Asset"
        },
        {
            "average": 417.0813,
            "class": "Equity"
        },
        {
            "average": 331.4442,
            "class": "Fixed Income"
        },
        {
            "average": 153.5206,
            "class": "Real Estate"
        },
        {
            "average": 123.7063,
            "class": "Hedge Funds"
        },
        {
            "average": 100.259,
            "class": "Private Equity"
        }
    ],
    //US
    [
        {
            "average": 682.8884,
            "class": "Multi Asset"
        },
        {
            "average": 250.7238,
            "class": "Equity"
        },
        {
            "average": 232.9695,
            "class": "Fixed Income"
        },
        {
            "average": 133.6439,
            "class": "Real Estate"
        },
        {
            "average": 115.0178,
            "class": "Hedge Funds"
        },
        {
            "average": 77.6489,
            "class": "Private Equity"
        }
    ],
    //Europe
    [
        {
            "average": 1296.0429,
            "class": "Fixed Income"
        },
        {
            "average": 1096.8669,
            "class": "Equity"
        },
        {
            "average": 151.8967,
            "class": "Private Equity"
        },
        {
            "average": 151.5747,
            "class": "Multi Asset"
        },
        {
            "average": 128.5863,
            "class": "Real Estate"
        }
    ],
    //ASia
    [
        {
            "average": 2313.3078,
            "class": "Equity"
        },
        {
            "average": 2046.0233,
            "class": "Multi Asset"
        },
        {
            "average": 550,
            "class": "Hedge Funds"
        },
        {
            "average": 282.6088,
            "class": "Fixed Income"
        },
        {
            "average": 171.2024,
            "class": "Real Estate"
        },
        {
            "average": 153.6133,
            "class": "Private Equity"
        }
    ],
     //Oceania
    [
        {
            "average": 8678.85,
            "class": "Multi Asset"
        },
        {
            "average": 311.7127,
            "class": "Equity"
        },
        {
            "average": 198.11,
            "class": "Fixed Income"
        },
        {
            "average": 193.25,
            "class": "Private Equity"
        },
        {
            "average": 148.66,
            "class": "Hedge Funds"
        }
    ]
];
//Q2 2017 combo chart 1 data: investment regions
var comboRegionQData = [
    //all
    [
        {
            "number": 275,
            "value": 45999.71,
            "class": "U.S."
        },
        {
            "number": 190,
            "value": 58938.22,
            "class": "Global"
        },
        {
            "number": 90,
            "value": 4151.2,
            "class": "Europe"
        },
        {
            "number": 27,
            "value": 1560.5,
            "class": "Other Americas"
        },
        {
            "number": 22,
            "value": 1453.77,
            "class": "International / Other"
        },
        {
            "number": 19,
            "value": 2518.87,
            "class": "Asia"
        },
        {
            "number": 10,
            "value": 6157.8,
            "class": "Emerging Markets"
        },
        {
            "number": 8,
            "value": 681.91,
            "class": "Oceania"
        }
    ],
    //US
    [
        {
            "number": 254,
            "value": 44557.03,
            "class": "U.S."
        },
        {
            "number": 119,
            "value": 13384.13,
            "class": "Global"
        },
        {
            "number": 27,
            "value": 1560.5,
            "class": "Other Americas"
        },
        {
            "number": 24,
            "value": 1929.6,
            "class": "Europe"
        },
        {
            "number": 15,
            "value": 1007.1,
            "class": "International / Other"
        },
        {
            "number": 12,
            "value": 1207,
            "class": "Asia"
        },
        {
            "number": 9,
            "value": 5962,
            "class": "Emerging Markets"
        },
        {
            "number": 1,
            "value": 75,
            "class": "Oceania"
        }
    ],
     //Europe
    [
        {
            "number": 64,
            "value": 1807.52,
            "class": "Europe"
        },
        {
            "number": 46,
            "value": 6843.04,
            "class": "Global"
        },
        {
            "number": 14,
            "value": 1012.68,
            "class": "U.S."
        },
        {
            "number": 2,
            "value": 11.67,
            "class": "International / Other"
        },
        {
            "number": 1,
            "value": 195.8,
            "class": "Emerging Markets"
        }
    ],
     //Asia
    [
        {
            "number": 14,
            "value": 5002.96,
            "class": "Global"
        },
        {
            "number": 6,
            "value": 1141.87,
            "class": "Asia"
        },
        {
            "number": 5,
            "value": 435,
            "class": "International / Other"
        },
        {
            "number": 4,
            "value": 230,
            "class": "U.S."
        },
        {
            "number": 1,
            "value": 64,
            "class": "Europe"
        }
    ],
     //Oceania
    [
        {
            "number": 8,
            "value": 17298.09,
            "class": "Global"
        },
        {
            "number": 5,
            "value": 606.91,
            "class": "Oceania"
        },
        {
            "number": 1,
            "value": 200,
            "class": "U.S."
        }
    ]
];

//Q2 2017 combo chart 2 data: asset class
var comboClassQData = [
    //all
    [
        {
            "number": 214,
            "value": 30228.56,
            "class": "Private Equity"
        },
        {
            "number": 102,
            "value": 21774.04,
            "class": "Real Estate"
        },
        {
            "number": 91,
            "value": 16037.24,
            "class": "Equity"
        },
        {
            "number": 87,
            "value": 21121.69,
            "class": "Fixed Income"
        },
        {
            "number": 87,
            "value": 6210.95,
            "class": "Other Alternatives"
        },
        {
            "number": 37,
            "value": 2166,
            "class": "Hedge Funds"
        },
        {
            "number": 18,
            "value": 23361.37,
            "class": "Multi Asset"
        },
        {
            "number": 5,
            "value": 562.13,
            "class": "Other"
        }
    ],
     //US
    [
        {
            "number": 172,
            "value": 14360.33,
            "class": "Private Equity"
        },
        {
            "number": 70,
            "value": 19252.9,
            "class": "Real Estate"
        },
        {
            "number": 62,
            "value": 14481.03,
            "class": "Fixed Income"
        },
        {
            "number": 62,
            "value": 9927.6,
            "class": "Equity"
        },
        {
            "number": 49,
            "value": 4183.5,
            "class": "Other Alternatives"
        },
        {
            "number": 36,
            "value": 2066,
            "class": "Hedge Funds"
        },
        {
            "number": 7,
            "value": 5409,
            "class": "Multi Asset"
        },
        {
            "number": 3,
            "value": 2,
            "class": "Other"
        }
    ],
     //Europe
    [
        {
            "number": 32,
            "value": 501.11,
            "class": "Private Equity"
        },
        {
            "number": 28,
            "value": 617.45,
            "class": "Other Alternatives"
        },
        {
            "number": 24,
            "value": 1772.06,
            "class": "Real Estate"
        },
        {
            "number": 21,
            "value": 4204.22,
            "class": "Equity"
        },
        {
            "number": 12,
            "value": 1263.37,
            "class": "Fixed Income"
        },
        {
            "number": 9,
            "value": 952.37,
            "class": "Multi Asset"
        },
        {
            "number": 1,
            "value": 560.13,
            "class": "Other"
        }
    ],
     //Asia
    [
        {
            "number": 10,
            "value": 5102.96,
            "class": "Fixed Income"
        },
        {
            "number": 6,
            "value": 0,
            "class": "Other Alternatives"
        },
        {
            "number": 5,
            "value": 367.12,
            "class": "Private Equity"
        },
        {
            "number": 5,
            "value": 229,
            "class": "Real Estate"
        },
        {
            "number": 3,
            "value": 1074.75,
            "class": "Equity"
        },
        {
            "number": 1,
            "value": 100,
            "class": "Hedge Funds"
        }
    ],
     //Oceania
    [
        {
            "number": 5,
            "value": 830.67,
            "class": "Equity"
        },
        {
            "number": 3,
            "value": 274.33,
            "class": "Fixed Income"
        },
        {
            "number": 3,
            "value": 0,
            "class": "Private Equity"
        },
        {
            "number": 2,
            "value": 17000,
            "class": "Multi Asset"
        },
        {
            "number": 1,
            "value": 0,
            "class": "Other"
        }
    ]
];

//Q2 2017 combo chart 2 data: asset classes - year
var comboClassYData =[
    //all
    [
        {
            "number": 1008,
            "value": 125922.19,
            "class": "U.S."
        },
        {
            "number": 633,
            "value": 153575.38,
            "class": "Global"
        },
        {
            "number": 237,
            "value": 17994.63,
            "class": "Europe"
        },
        {
            "number": 120,
            "value": 8305.62,
            "class": "Other Americas"
        },
        {
            "number": 92,
            "value": 30694.12,
            "class": "International / Other"
        },
        {
            "number": 91,
            "value": 14883.35,
            "class": "Asia"
        },
        {
            "number": 52,
            "value": 11010.44,
            "class": "Emerging Markets"
        },
        {
            "number": 16,
            "value": 1829.85,
            "class": "Oceania"
        }
    ],
     //US
    [
        {
            "number": 938,
            "value": 118715.48,
            "class": "U.S."
        },
        {
            "number": 389,
            "value": 47622.41,
            "class": "Global"
        },
        {
            "number": 117,
            "value": 8151.22,
            "class": "Other Americas"
        },
        {
            "number": 83,
            "value": 7467.69,
            "class": "Europe"
        },
        {
            "number": 68,
            "value": 8966.6,
            "class": "International / Other"
        },
        {
            "number": 55,
            "value": 5348.78,
            "class": "Asia"
        },
        {
            "number": 43,
            "value": 9131.97,
            "class": "Emerging Markets"
        },
        {
            "number": 1,
            "value": 75,
            "class": "Oceania"
        }
    ],
     //Europe
    [
        {
            "number": 140,
            "value": 53606.53,
            "class": "Global"
        },
        {
            "number": 43,
            "value": 9429.51,
            "class": "Europe"
        },
        {
            "number": 14,
            "value": 1913.71,
            "class": "U.S."
        },
        {
            "number": 9,
            "value": 660.23,
            "class": "Emerging Markets"
        },
        {
            "number": 5,
            "value": 89.36,
            "class": "International / Other"
        },
        {
            "number": 2,
            "value": 20,
            "class": "Asia"
        },
        {
            "number": 1,
            "value": 0,
            "class": "Other Americas"
        }
    ],
     //Asia
    [
        {
            "number": 44,
            "value": 10761.81,
            "class": "Global"
        },
        {
            "number": 26,
            "value": 2197.49,
            "class": "U.S."
        },
        {
            "number": 24,
            "value": 6747.77,
            "class": "Asia"
        },
        {
            "number": 14,
            "value": 19921.75,
            "class": "International / Other"
        },
        {
            "number": 9,
            "value": 704.75,
            "class": "Europe"
        },
        {
            "number": 3,
            "value": 835.46,
            "class": "Oceania"
        },
        {
            "number": 1,
            "value": 20,
            "class": "Other Americas"
        }
    ],
     //Oceania
    [
        {
            "number": 21,
            "value": 19371.31,
            "class": "Global"
        },
        {
            "number": 9,
            "value": 879.65,
            "class": "Oceania"
        },
        {
            "number": 2,
            "value": 274.33,
            "class": "U.S."
        },
        {
            "number": 1,
            "value": 1271.82,
            "class": "Emerging Markets"
        },
        {
            "number": 1,
            "value": 0,
            "class": "International / Other"
        }
    ]

];

//Q2 2017 combo chart 2 data: investment regions - year
var comboRegionYData = [
    //all
    [
        {
            "number": 758,
            "value": 71584.93,
            "class": "Private Equity"
        },
        {
            "number": 400,
            "value": 52964.62,
            "class": "Real Estate"
        },
        {
            "number": 327,
            "value": 87587.08,
            "class": "Equity"
        },
        {
            "number": 309,
            "value": 74906.39,
            "class": "Fixed Income"
        },
        {
            "number": 248,
            "value": 20339.03,
            "class": "Other Alternatives"
        },
        {
            "number": 110,
            "value": 12865.46,
            "class": "Hedge Funds"
        },
        {
            "number": 73,
            "value": 42846.05,
            "class": "Multi Asset"
        },
        {
            "number": 24,
            "value": 1122.02,
            "class": "Other"
        }
    ], 
    //US
    [
        {
            "number": 674,
            "value": 51714.17,
            "class": "Private Equity"
        },
        {
            "number": 277,
            "value": 35950.22,
            "class": "Real Estate"
        },
        {
            "number": 249,
            "value": 40617.25,
            "class": "Equity"
        },
        {
            "number": 208,
            "value": 38672.93,
            "class": "Fixed Income"
        },
        {
            "number": 138,
            "value": 13628.9,
            "class": "Other Alternatives"
        },
        {
            "number": 104,
            "value": 11616.8,
            "class": "Hedge Funds"
        },
        {
            "number": 28,
            "value": 12974.88,
            "class": "Multi Asset"
        },
        {
            "number": 16,
            "value": 304,
            "class": "Other"
        }
    ],
     //Europe
    [
        {
            "number": 52,
            "value": 36289.2,
            "class": "Fixed Income"
        },
        {
            "number": 37,
            "value": 3709.47,
            "class": "Other Alternatives"
        },
        {
            "number": 30,
            "value": 2273.62,
            "class": "Multi Asset"
        },
        {
            "number": 30,
            "value": 2057.38,
            "class": "Real Estate"
        },
        {
            "number": 26,
            "value": 17549.87,
            "class": "Equity"
        },
        {
            "number": 23,
            "value": 1822.76,
            "class": "Private Equity"
        },
        {
            "number": 14,
            "value": 2017.04,
            "class": "Other"
        },
        {
            "number": 2,
            "value": 0,
            "class": "Hedge Funds"
        }
    ],
    //Asia
    [
        {
            "number": 35,
            "value": 7065.22,
            "class": "Fixed Income"
        },
        {
            "number": 31,
            "value": 3595.25,
            "class": "Real Estate"
        },
        {
            "number": 22,
            "value": 1088.2,
            "class": "Other Alternatives"
        },
        {
            "number": 14,
            "value": 20819.77,
            "class": "Equity"
        },
        {
            "number": 13,
            "value": 1382.52,
            "class": "Private Equity"
        },
        {
            "number": 4,
            "value": 6138.07,
            "class": "Multi Asset"
        },
        {
            "number": 2,
            "value": 1100,
            "class": "Hedge Funds"
        }
    ],
    //Oceania
    [
        {
            "number": 14,
            "value": 3428.84,
            "class": "Equity"
        },
        {
            "number": 5,
            "value": 74.33,
            "class": "Other Alternatives"
        },
        {
            "number": 4,
            "value": 17357.7,
            "class": "Multi Asset"
        },
        {
            "number": 4,
            "value": 594.33,
            "class": "Fixed Income"
        },
        {
            "number": 4,
            "value": 193.25,
            "class": "Private Equity"
        },
        {
            "number": 1,
            "value": 148.66,
            "class": "Hedge Funds"
        },
        {
            "number": 1,
            "value": 0,
            "class": "Other"
        },
        {
            "number": 1,
            "value": 0,
            "class": "Real Estate"
        }
    ]
];
//Q2 2017 cluster chart 1 data: number of mandates
var clusterNumQData = [
  //all
    [
        {
            "equity": 37,
            "fixedIncome": 47,
            "realEstate": 62,
            "privateEquity": 86,
            "alts": 30,
            "hedgeFunds": 8,
            "multiAsset": 4,
            "Other": 1,
            "total": 275,
            "region": "U.S."
        },
        {
            "equity": 23,
            "fixedIncome": 31,
            "realEstate": 6,
            "privateEquity": 54,
            "alts": 32,
            "hedgeFunds": 27,
            "multiAsset": 14,
            "Other": 3,
            "total": 190,
            "region": "Global"
        },
        {
            "equity": 7,
            "fixedIncome": 3,
            "realEstate": 24,
            "privateEquity": 38,
            "alts": 17,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "Other": 0,
            "total": 90,
            "region": "Europe"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 5,
            "privateEquity": 18,
            "alts": 4,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 27,
            "region": "Other Americas"
        },
        {
            "equity": 16,
            "fixedIncome": 1,
            "realEstate": 1,
            "privateEquity": 2,
            "alts": 1,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 1,
            "total": 22,
            "region": "International / Other"
        },
        {
            "equity": 2,
            "fixedIncome": 1,
            "realEstate": 4,
            "privateEquity": 12,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 19,
            "region": "Asia"
        },
        {
            "equity": 5,
            "fixedIncome": 3,
            "realEstate": 0,
            "privateEquity": 1,
            "alts": 0,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "Other": 0,
            "total": 10,
            "region": "Emerging Markets"
        },
        {
            "equity": 1,
            "fixedIncome": 1,
            "realEstate": 0,
            "privateEquity": 3,
            "alts": 3,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 8,
            "region": "Oceania"
        }
    ],
    //US
    [
        {
            "equity": 37,
            "fixedIncome": 44,
            "realEstate": 53,
            "privateEquity": 82,
            "alts": 25,
            "hedgeFunds": 8,
            "multiAsset": 4,
            "Other": 1,
            "total": 254,
            "region": "U.S."
        },
        {
            "equity": 8,
            "fixedIncome": 13,
            "realEstate": 5,
            "privateEquity": 44,
            "alts": 19,
            "hedgeFunds": 26,
            "multiAsset": 3,
            "Other": 1,
            "total": 119,
            "region": "Global"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 5,
            "privateEquity": 18,
            "alts": 4,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 27,
            "region": "Other Americas"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 4,
            "privateEquity": 18,
            "alts": 0,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "Other": 0,
            "total": 24,
            "region": "Europe"
        },
        {
            "equity": 13,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 1,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 1,
            "total": 15,
            "region": "International / Other"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 3,
            "privateEquity": 8,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 12,
            "region": "Asia"
        },
        {
            "equity": 4,
            "fixedIncome": 3,
            "realEstate": 0,
            "privateEquity": 1,
            "alts": 0,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "Other": 0,
            "total": 9,
            "region": "Emerging Markets"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 1,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1,
            "region": "Oceania"
        }
    ],
    //Europe
    [
        {
            "equity": 7,
            "fixedIncome": 2,
            "realEstate": 18,
            "privateEquity": 20,
            "alts": 17,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 64,
            "region": "Europe"
        },
        {
            "equity": 11,
            "fixedIncome": 9,
            "realEstate": 1,
            "privateEquity": 8,
            "alts": 7,
            "hedgeFunds": 0,
            "multiAsset": 9,
            "Other": 1,
            "total": 46,
            "region": "Global"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 5,
            "privateEquity": 4,
            "alts": 4,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 14,
            "region": "U.S."
        },
        {
            "equity": 2,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 2,
            "region": "International / Other"
        },
        {
            "equity": 1,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1,
            "region": "Emerging Markets"
        }
    ],
    //Asia
    [
        {
            "equity": 0,
            "fixedIncome": 8,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 5,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "Other": 0,
            "total": 14,
            "region": "Global"
        },
        {
            "equity": 2,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 4,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 6,
            "region": "Asia"
        },
        {
            "equity": 1,
            "fixedIncome": 1,
            "realEstate": 1,
            "privateEquity": 1,
            "alts": 1,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 5,
            "region": "International / Other"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 3,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 4,
            "region": "U.S."
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 1,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1,
            "region": "Europe"
        }
    ],
    //Oceania
    [
        {
            "equity": 4,
            "fixedIncome": 1,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "Other": 1,
            "total": 8,
            "region": "Global"
        },
        {
            "equity": 1,
            "fixedIncome": 1,
            "realEstate": 0,
            "privateEquity": 3,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 5,
            "region": "Oceania"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1,
            "region": "U.S."
        }
    ]
  ];
//Q2 2017 cluster chart 2 data: value of mandates
var clusterValueQData = [
    //all
    [
        {
            "equity": 6910.39,
            "fixedIncome": 7912.45,
            "realEstate": 1025,
            "privateEquity": 18798.76,
            "alts": 3925.12,
            "hedgeFunds": 1481,
            "multiAsset": 18325.37,
            "Other": 560.13,
            "total": 58938.22,
            "region": "Global"
        },
        {
            "equity": 1136.5,
            "fixedIncome": 12038.24,
            "realEstate": 18694.7,
            "privateEquity": 6846.66,
            "alts": 1712.61,
            "hedgeFunds": 535,
            "multiAsset": 5036,
            "Other": 0,
            "total": 45999.71,
            "region": "U.S."
        },
        {
            "equity": 4977.8,
            "fixedIncome": 855,
            "realEstate": 0,
            "privateEquity": 250,
            "alts": 0,
            "hedgeFunds": 75,
            "multiAsset": 0,
            "Other": 0,
            "total": 6157.8,
            "region": "Emerging Markets"
        },
        {
            "equity": 513.45,
            "fixedIncome": 91.67,
            "realEstate": 1474.34,
            "privateEquity": 1828.52,
            "alts": 168.22,
            "hedgeFunds": 75,
            "multiAsset": 0,
            "Other": 0,
            "total": 4151.2,
            "region": "Europe"
        },
        {
            "equity": 1074.75,
            "fixedIncome": 50,
            "realEstate": 345,
            "privateEquity": 1049.12,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 2518.87,
            "region": "Asia"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 200,
            "privateEquity": 1030.5,
            "alts": 330,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1560.5,
            "region": "Other Americas"
        },
        {
            "equity": 891.77,
            "fixedIncome": 100,
            "realEstate": 35,
            "privateEquity": 425,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 2,
            "total": 1453.77,
            "region": "International / Other"
        },
        {
            "equity": 532.58,
            "fixedIncome": 74.33,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 75,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 681.91,
            "region": "Oceania"
        }
    ],
    //US
    [
        {
            "equity": 1136.5,
            "fixedIncome": 11686.03,
            "realEstate": 17689.5,
            "privateEquity": 6787.5,
            "alts": 1686.5,
            "hedgeFunds": 535,
            "multiAsset": 5036,
            "Other": 0,
            "total": 44557.03,
            "region": "U.S."
        },
        {
            "equity": 3129,
            "fixedIncome": 1810,
            "realEstate": 1015,
            "privateEquity": 3584.13,
            "alts": 2092,
            "hedgeFunds": 1381,
            "multiAsset": 373,
            "Other": 0,
            "total": 13384.13,
            "region": "Global"
        },
        {
            "equity": 4782,
            "fixedIncome": 855,
            "realEstate": 0,
            "privateEquity": 250,
            "alts": 0,
            "hedgeFunds": 75,
            "multiAsset": 0,
            "Other": 0,
            "total": 5962,
            "region": "Emerging Markets"
        },
        {
            "equity": 0,
            "fixedIncome": 80,
            "realEstate": 173.4,
            "privateEquity": 1601.2,
            "alts": 0,
            "hedgeFunds": 75,
            "multiAsset": 0,
            "Other": 0,
            "total": 1929.6,
            "region": "Europe"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 200,
            "privateEquity": 1030.5,
            "alts": 330,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1560.5,
            "region": "Other Americas"
        },
        {
            "equity": 0,
            "fixedIncome": 50,
            "realEstate": 175,
            "privateEquity": 982,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1207,
            "region": "Asia"
        },
        {
            "equity": 880.1,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 125,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 2,
            "total": 1007.1,
            "region": "International / Other"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 75,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 75,
            "region": "Oceania"
        }
    ],
    //Europe
    [
        {
            "equity": 3483.3,
            "fixedIncome": 1199.49,
            "realEstate": 10,
            "privateEquity": 214.63,
            "alts": 423.12,
            "hedgeFunds": 0,
            "multiAsset": 952.37,
            "Other": 560.13,
            "total": 6843.04,
            "region": "Global"
        },
        {
            "equity": 513.45,
            "fixedIncome": 11.67,
            "realEstate": 886.86,
            "privateEquity": 227.32,
            "alts": 168.22,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1807.52,
            "region": "Europe"
        },
        {
            "equity": 0,
            "fixedIncome": 52.21,
            "realEstate": 875.2,
            "privateEquity": 59.16,
            "alts": 26.11,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1012.68,
            "region": "U.S."
        },
        {
            "equity": 195.8,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 195.8,
            "region": "Emerging Markets"
        },
        {
            "equity": 11.67,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 11.67,
            "region": "International / Other"
        }
    ],
    //Asia
    [
        {
            "equity": 0,
            "fixedIncome": 4902.96,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 100,
            "multiAsset": 0,
            "Other": 0,
            "total": 5002.96,
            "region": "Global"
        },
        {
            "equity": 1074.75,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 67.12,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1141.87,
            "region": "Asia"
        },
        {
            "equity": 0,
            "fixedIncome": 100,
            "realEstate": 35,
            "privateEquity": 300,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 435,
            "region": "International / Other"
        },
        {
            "equity": 0,
            "fixedIncome": 100,
            "realEstate": 130,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 230,
            "region": "U.S."
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 64,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 64,
            "region": "Europe"
        }
    ],
    //Oceania
    [
        {
            "equity": 298.09,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 17000,
            "Other": 0,
            "total": 17298.09,
            "region": "Global"
        },
        {
            "equity": 532.58,
            "fixedIncome": 74.33,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 606.91,
            "region": "Oceania"
        },
        {
            "equity": 0,
            "fixedIncome": 200,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 200,
            "region": "U.S."
        }
    ]
];

//Q2 2017 cluster chart 1 data: number of mandates - year
var clusterNumYData = [
  //all
  [
        {
            "equity": 143,
            "fixedIncome": 161,
            "realEstate": 217,
            "privateEquity": 331,
            "alts": 82,
            "hedgeFunds": 39,
            "multiAsset": 22,
            "Other": 13,
            "region": "U.S."
        },
        {
            "equity": 70,
            "fixedIncome": 103,
            "realEstate": 62,
            "privateEquity": 176,
            "alts": 104,
            "hedgeFunds": 66,
            "multiAsset": 43,
            "Other": 9,
            "region": "Global"
        },
        {
            "equity": 12,
            "fixedIncome": 19,
            "realEstate": 73,
            "privateEquity": 92,
            "alts": 37,
            "hedgeFunds": 1,
            "multiAsset": 2,
            "Other": 1,
            "region": "Europe"
        },
        {
            "equity": 0,
            "fixedIncome": 3,
            "realEstate": 13,
            "privateEquity": 93,
            "alts": 9,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "Other": 0,
            "region": "Other Americas"
        },
        {
            "equity": 57,
            "fixedIncome": 6,
            "realEstate": 8,
            "privateEquity": 12,
            "alts": 6,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "Other": 1,
            "region": "International/Other"
        },
        {
            "equity": 13,
            "fixedIncome": 3,
            "realEstate": 25,
            "privateEquity": 45,
            "alts": 2,
            "hedgeFunds": 1,
            "multiAsset": 2,
            "Other": 0,
            "region": "Asia"
        },
        {
            "equity": 29,
            "fixedIncome": 13,
            "realEstate": 0,
            "privateEquity": 5,
            "alts": 2,
            "hedgeFunds": 3,
            "multiAsset": 0,
            "Other": 0,
            "region": "Emerging Markets"
        },
        {
            "equity": 3,
            "fixedIncome": 1,
            "realEstate": 2,
            "privateEquity": 4,
            "alts": 6,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Oceania"
        }
    ],
  //US
  [
        {
            "equity": 138,
            "fixedIncome": 147,
            "realEstate": 191,
            "privateEquity": 322,
            "alts": 68,
            "hedgeFunds": 39,
            "multiAsset": 20,
            "Other": 13,
            "region": "U.S."
        },
        {
            "equity": 28,
            "fixedIncome": 48,
            "realEstate": 43,
            "privateEquity": 147,
            "alts": 53,
            "hedgeFunds": 60,
            "multiAsset": 8,
            "Other": 2,
            "region": "Global"
        },
        {
            "equity": 0,
            "fixedIncome": 2,
            "realEstate": 13,
            "privateEquity": 93,
            "alts": 9,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Other Americas"
        },
        {
            "equity": 2,
            "fixedIncome": 2,
            "realEstate": 17,
            "privateEquity": 59,
            "alts": 2,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "Other": 0,
            "region": "Europe"
        },
        {
            "equity": 53,
            "fixedIncome": 1,
            "realEstate": 1,
            "privateEquity": 10,
            "alts": 2,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 1,
            "region": "International/Other"
        },
        {
            "equity": 2,
            "fixedIncome": 1,
            "realEstate": 12,
            "privateEquity": 38,
            "alts": 1,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "Other": 0,
            "region": "Asia"
        },
        {
            "equity": 26,
            "fixedIncome": 7,
            "realEstate": 0,
            "privateEquity": 5,
            "alts": 2,
            "hedgeFunds": 3,
            "multiAsset": 0,
            "Other": 0,
            "region": "Emerging Markets"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 1,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Oceania"
        }
    ],
  //Europe
  [
        {
            "equity": 15,
            "fixedIncome": 36,
            "realEstate": 10,
            "privateEquity": 13,
            "alts": 26,
            "hedgeFunds": 2,
            "multiAsset": 25,
            "Other": 13,
            "region": "Global"
        },
        {
            "equity": 5,
            "fixedIncome": 7,
            "realEstate": 13,
            "privateEquity": 5,
            "alts": 9,
            "hedgeFunds": 0,
            "multiAsset": 3,
            "Other": 1,
            "region": "Europe"
        },
        {
            "equity": 2,
            "fixedIncome": 2,
            "realEstate": 5,
            "privateEquity": 3,
            "alts": 2,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "U.S."
        },
        {
            "equity": 2,
            "fixedIncome": 6,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 1,
            "Other": 0,
            "region": "Emerging Markets"
        },
        {
            "equity": 2,
            "fixedIncome": 1,
            "realEstate": 1,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 1,
            "Other": 0,
            "region": "International/Other"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 1,
            "privateEquity": 1,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Asia"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 1,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Other Americas"
        }
    ],
  //Asia
  [
        {
            "equity": 4,
            "fixedIncome": 16,
            "realEstate": 8,
            "privateEquity": 3,
            "alts": 10,
            "hedgeFunds": 2,
            "multiAsset": 1,
            "Other": 0,
            "region": "Global"
        },
        {
            "equity": 1,
            "fixedIncome": 8,
            "realEstate": 10,
            "privateEquity": 2,
            "alts": 5,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "U.S."
        },
        {
            "equity": 7,
            "fixedIncome": 2,
            "realEstate": 6,
            "privateEquity": 7,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "Other": 0,
            "region": "Asia"
        },
        {
            "equity": 2,
            "fixedIncome": 5,
            "realEstate": 2,
            "privateEquity": 1,
            "alts": 3,
            "hedgeFunds": 0,
            "multiAsset": 1,
            "Other": 0,
            "region": "International/Other"
        },
        {
            "equity": 0,
            "fixedIncome": 3,
            "realEstate": 3,
            "privateEquity": 0,
            "alts": 3,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Europe"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 2,
            "privateEquity": 0,
            "alts": 1,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Oceania"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Other Americas"
        }
    ],
  //Oceania
  [
        {
            "equity": 4,
            "fixedIncome": 16,
            "realEstate": 8,
            "privateEquity": 3,
            "alts": 10,
            "hedgeFunds": 2,
            "multiAsset": 1,
            "Other": 0,
            "region": "Global"
        },
        {
            "equity": 1,
            "fixedIncome": 8,
            "realEstate": 10,
            "privateEquity": 2,
            "alts": 5,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "U.S."
        },
        {
            "equity": 7,
            "fixedIncome": 2,
            "realEstate": 6,
            "privateEquity": 7,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "Other": 0,
            "region": "Asia"
        },
        {
            "equity": 2,
            "fixedIncome": 5,
            "realEstate": 2,
            "privateEquity": 1,
            "alts": 3,
            "hedgeFunds": 0,
            "multiAsset": 1,
            "Other": 0,
            "region": "International/Other"
        },
        {
            "equity": 0,
            "fixedIncome": 3,
            "realEstate": 3,
            "privateEquity": 0,
            "alts": 3,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Europe"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 2,
            "privateEquity": 0,
            "alts": 1,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Oceania"
        },
        {
            "equity": 0,
            "fixedIncome": 1,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "region": "Other Americas"
        }
    ]
  ];
//Q2 2017 cluster chart 2 data: value of mandates - year
var clusterValueYData = [
    //all
    [
        {
            "equity": 30904.17,
            "fixedIncome": 39207.5,
            "realEstate": 7839.73,
            "privateEquity": 28607.14,
            "alts": 9719.8,
            "hedgeFunds": 8394.66,
            "multiAsset": 28246.56,
            "Other": 655.82,
            "total": 153575.38,
            "region": "Global"
        },
        {
            "equity": 16555.83,
            "fixedIncome": 31058.56,
            "realEstate": 31518.73,
            "privateEquity": 25010.49,
            "alts": 6077.56,
            "hedgeFunds": 4090.8,
            "multiAsset": 11308.22,
            "Other": 302,
            "total": 125922.19,
            "region": "U.S."
        },
        {
            "equity": 25500.43,
            "fixedIncome": 817.09,
            "realEstate": 1600.1,
            "privateEquity": 1058.2,
            "alts": 1097.5,
            "hedgeFunds": 0,
            "multiAsset": 618.8,
            "Other": 2,
            "total": 30694.12,
            "region": "International/Other"
        },
        {
            "equity": 1513.45,
            "fixedIncome": 1566.66,
            "realEstate": 6653.56,
            "privateEquity": 6115.13,
            "alts": 1908.63,
            "hedgeFunds": 75,
            "multiAsset": 0,
            "Other": 162.2,
            "total": 17994.63,
            "region": "Europe"
        },
        {
            "equity": 4303.11,
            "fixedIncome": 157.4,
            "realEstate": 4008.22,
            "privateEquity": 3736.55,
            "alts": 60,
            "hedgeFunds": 80,
            "multiAsset": 2538.07,
            "Other": 0,
            "total": 14883.35,
            "region": "Asia"
        },
        {
            "equity": 8198.02,
            "fixedIncome": 1884.85,
            "realEstate": 0,
            "privateEquity": 452.57,
            "alts": 250,
            "hedgeFunds": 225,
            "multiAsset": 0,
            "Other": 0,
            "total": 11010.44,
            "region": "Emerging Markets"
        },
        {
            "equity": 0,
            "fixedIncome": 140,
            "realEstate": 544.62,
            "privateEquity": 6411.6,
            "alts": 1075,
            "hedgeFunds": 0,
            "multiAsset": 134.4,
            "Other": 0,
            "total": 8305.62,
            "region": "Other Americas"
        },
        {
            "equity": 612.07,
            "fixedIncome": 74.33,
            "realEstate": 799.66,
            "privateEquity": 193.25,
            "alts": 150.54,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1829.85,
            "region": "Oceania"
        }
    ],
     //US
    [
        {
            "equity": 15528.25,
            "fixedIncome": 29477.93,
            "realEstate": 28191.5,
            "privateEquity": 24258.9,
            "alts": 5558.5,
            "hedgeFunds": 4090.8,
            "multiAsset": 11307.6,
            "Other": 302,
            "total": 118715.48,
            "region": "U.S."
        },
        {
            "equity": 9047,
            "fixedIncome": 7391,
            "realEstate": 4972,
            "privateEquity": 11221.13,
            "alts": 6178,
            "hedgeFunds": 7146,
            "multiAsset": 1667.28,
            "Other": 0,
            "total": 47622.41,
            "region": "Global"
        },
        {
            "equity": 6730.4,
            "fixedIncome": 1474,
            "realEstate": 0,
            "privateEquity": 452.57,
            "alts": 250,
            "hedgeFunds": 225,
            "multiAsset": 0,
            "Other": 0,
            "total": 9131.97,
            "region": "Emerging Markets"
        },
        {
            "equity": 7711.6,
            "fixedIncome": 55,
            "realEstate": 27,
            "privateEquity": 721,
            "alts": 450,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 2,
            "total": 8966.6,
            "region": "International/Other"
        },
        {
            "equity": 0,
            "fixedIncome": 120,
            "realEstate": 544.62,
            "privateEquity": 6411.6,
            "alts": 1075,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 8151.22,
            "region": "Other Americas"
        },
        {
            "equity": 1000,
            "fixedIncome": 105,
            "realEstate": 1195.2,
            "privateEquity": 5060.09,
            "alts": 32.4,
            "hedgeFunds": 75,
            "multiAsset": 0,
            "Other": 0,
            "total": 7467.69,
            "region": "Europe"
        },
        {
            "equity": 600,
            "fixedIncome": 50,
            "realEstate": 1019.9,
            "privateEquity": 3588.88,
            "alts": 10,
            "hedgeFunds": 80,
            "multiAsset": 0,
            "Other": 0,
            "total": 5348.78,
            "region": "Asia"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 75,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 75,
            "region": "Oceania"
        }
    ],
    //EURope
    [
        {
            "equity": 16456.67,
            "fixedIncome": 28320.73,
            "realEstate": 1144.87,
            "privateEquity": 995.94,
            "alts": 2579.12,
            "hedgeFunds": 0,
            "multiAsset": 2254.36,
            "Other": 1854.84,
            "total": 53606.53,
            "region": "Global"
        },
        {
            "equity": 778.62,
            "fixedIncome": 6874.4,
            "realEstate": 203.26,
            "privateEquity": 290.92,
            "alts": 1119.65,
            "hedgeFunds": 0,
            "multiAsset": 0.46,
            "Other": 162.2,
            "total": 9429.51,
            "region": "Europe"
        },
        {
            "equity": 129.23,
            "fixedIncome": 548.63,
            "realEstate": 689.25,
            "privateEquity": 535.9,
            "alts": 10.7,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1913.71,
            "region": "U.S."
        },
        {
            "equity": 155.33,
            "fixedIncome": 504.9,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 660.23,
            "region": "Emerging Markets"
        },
        {
            "equity": 30.02,
            "fixedIncome": 40.54,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 18.8,
            "Other": 0,
            "total": 89.36,
            "region": "International/Other"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 20,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 20,
            "region": "Asia"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 0,
            "region": "Other Americas"
        }
    ],
    //Asia
    [
        {
            "equity": 17777.16,
            "fixedIncome": 762.09,
            "realEstate": 35,
            "privateEquity": 300,
            "alts": 447.5,
            "hedgeFunds": 0,
            "multiAsset": 600,
            "Other": 0,
            "total": 19921.75,
            "region": "International/Other"
        },
        {
            "equity": 89.5,
            "fixedIncome": 5187.46,
            "realEstate": 600,
            "privateEquity": 784.85,
            "alts": 0,
            "hedgeFunds": 1100,
            "multiAsset": 3000,
            "Other": 0,
            "total": 10761.81,
            "region": "Global"
        },
        {
            "equity": 2753.11,
            "fixedIncome": 107.4,
            "realEstate": 1201.52,
            "privateEquity": 147.67,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 2538.07,
            "Other": 0,
            "total": 6747.77,
            "region": "Asia"
        },
        {
            "equity": 200,
            "fixedIncome": 770,
            "realEstate": 836,
            "privateEquity": 150,
            "alts": 241.49,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 2197.49,
            "region": "U.S."
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 799.66,
            "privateEquity": 0,
            "alts": 35.8,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 835.46,
            "region": "Oceania"
        },
        {
            "equity": 0,
            "fixedIncome": 218.27,
            "realEstate": 123.07,
            "privateEquity": 0,
            "alts": 363.41,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 704.75,
            "region": "Europe"
        },
        {
            "equity": 0,
            "fixedIncome": 20,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 20,
            "region": "Other Americas"
        }
    ],
    //Oceania
    [
        {
            "equity": 1544.95,
            "fixedIncome": 320,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 148.66,
            "multiAsset": 17357.7,
            "Other": 0,
            "total": 19371.31,
            "region": "Global"
        },
        {
            "equity": 1271.82,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 1271.82,
            "region": "Emerging Markets"
        },
        {
            "equity": 612.07,
            "fixedIncome": 74.33,
            "realEstate": 0,
            "privateEquity": 193.25,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 879.65,
            "region": "Oceania"
        },
        {
            "equity": 0,
            "fixedIncome": 200,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 74.33,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 274.33,
            "region": "U.S."
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "privateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "Other": 0,
            "total": 0,
            "region": "International/Other"
        }
    ]
];
//data for mekko chart 1 - # mandates by asset class Q
var mekkoNumberQData = [
  //all
      [
        {
            "equity": 66,
            "fixedIncome": 58,
            "realEstate": 111,
            "priviateEquity": 157,
            "alts": 54,
            "hedgeFunds": 27,
            "multiAsset": 14,
            "other": 6,
            "total": 493,
            "quarter": "Q3 2016"
        },
        {
            "equity": 80,
            "fixedIncome": 79,
            "realEstate": 98,
            "priviateEquity": 189,
            "alts": 43,
            "hedgeFunds": 27,
            "multiAsset": 17,
            "other": 5,
            "total": 538,
            "quarter": "Q4 2016"
        },
        {
            "equity": 90,
            "fixedIncome": 85,
            "realEstate": 89,
            "priviateEquity": 198,
            "alts": 64,
            "hedgeFunds": 19,
            "multiAsset": 24,
            "other": 8,
            "total": 577,
            "quarter": "Q1 2017"
        },
        {
            "equity": 91,
            "fixedIncome": 87,
            "realEstate": 102,
            "priviateEquity": 214,
            "alts": 87,
            "hedgeFunds": 37,
            "multiAsset": 18,
            "other": 5,
            "total": 641,
            "quarter": "Q2 2017"
        }
    ],
      //US
    [
        {
            "equity": 51,
            "fixedIncome": 46,
            "realEstate": 76,
            "priviateEquity": 140,
            "alts": 35,
            "hedgeFunds": 22,
            "multiAsset": 2,
            "other": 5,
            "total": 377,
            "quarter": "Q3 2016"
        },
        {
            "equity": 64,
            "fixedIncome": 54,
            "realEstate": 71,
            "priviateEquity": 180,
            "alts": 28,
            "hedgeFunds": 27,
            "multiAsset": 7,
            "other": 2,
            "total": 433,
            "quarter": "Q4 2016"
        },
        {
            "equity": 72,
            "fixedIncome": 46,
            "realEstate": 60,
            "priviateEquity": 182,
            "alts": 26,
            "hedgeFunds": 19,
            "multiAsset": 12,
            "other": 6,
            "total": 423,
            "quarter": "Q1 2017"
        },
        {
            "equity": 62,
            "fixedIncome": 62,
            "realEstate": 70,
            "priviateEquity": 172,
            "alts": 49,
            "hedgeFunds": 36,
            "multiAsset": 7,
            "other": 3,
            "total": 461,
            "quarter": "Q2 2017"
        }
    ],
    //EUR
    [
        {
            "equity": 6,
            "fixedIncome": 10,
            "realEstate": 9,
            "priviateEquity": 4,
            "alts": 10,
            "hedgeFunds": 2,
            "multiAsset": 4,
            "other": 2,
            "total": 47,
            "quarter": "Q3 2016"
        },
        {
            "equity": 2,
            "fixedIncome": 9,
            "realEstate": 5,
            "priviateEquity": 7,
            "alts": 4,
            "hedgeFunds": 0,
            "multiAsset": 6,
            "other": 2,
            "total": 35,
            "quarter": "Q4 2016"
        },
        {
            "equity": 9,
            "fixedIncome": 25,
            "realEstate": 10,
            "priviateEquity": 8,
            "alts": 15,
            "hedgeFunds": 0,
            "multiAsset": 15,
            "other": 4,
            "total": 86,
            "quarter": "Q1 2017"
        },
        {
            "equity": 9,
            "fixedIncome": 8,
            "realEstate": 6,
            "priviateEquity": 4,
            "alts": 8,
            "hedgeFunds": 0,
            "multiAsset": 5,
            "other": 6,
            "total": 46,
            "quarter": "Q2 2017"
        }
    ],
    //ASIA
    [
        {
            "equity": 3,
            "fixedIncome": 2,
            "realEstate": 11,
            "priviateEquity": 2,
            "alts": 4,
            "hedgeFunds": 1,
            "multiAsset": 1,
            "other": 0,
            "total": 24,
            "quarter": "Q3 2016"
        },
        {
            "equity": 5,
            "fixedIncome": 14,
            "realEstate": 7,
            "priviateEquity": 5,
            "alts": 4,
            "hedgeFunds": 0,
            "multiAsset": 1,
            "other": 0,
            "total": 36,
            "quarter": "Q4 2016"
        },
        {
            "equity": 3,
            "fixedIncome": 9,
            "realEstate": 8,
            "priviateEquity": 1,
            "alts": 8,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "other": 0,
            "total": 31,
            "quarter": "Q1 2017"
        },
        {
            "equity": 3,
            "fixedIncome": 10,
            "realEstate": 5,
            "priviateEquity": 5,
            "alts": 6,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "other": 0,
            "total": 30,
            "quarter": "Q2 2017"
        }
    ],
    //Oceania
    [
        {
            "equity": 5,
            "fixedIncome": 0,
            "realEstate": 1,
            "priviateEquity": 0,
            "alts": 1,
            "hedgeFunds": 1,
            "multiAsset": 0,
            "other": 0,
            "total": 8,
            "quarter": "Q3 2016"
        },
        {
            "equity": 1,
            "fixedIncome": 0,
            "realEstate": 0,
            "priviateEquity": 1,
            "alts": 2,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "other": 0,
            "total": 4,
            "quarter": "Q4 2016"
        },
        {
            "equity": 3,
            "fixedIncome": 1,
            "realEstate": 0,
            "priviateEquity": 0,
            "alts": 2,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "other": 0,
            "total": 8,
            "quarter": "Q1 2017"
        },
        {
            "equity": 5,
            "fixedIncome": 3,
            "realEstate": 0,
            "priviateEquity": 3,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 2,
            "other": 1,
            "total": 14,
            "quarter": "Q2 2017"
        }
    ]
    
];
//data for mekko chart 2 - value of mandates by asset class Q
var mekkoValueQData = [
//all
    [
        {
            "equity": 11110.76,
            "fixedIncome": 11668.17,
            "realEstate": 15311.24,
            "priviateEquity": 14688.99,
            "alts": 4366.37,
            "hedgeFunds": 4363.66,
            "multiAsset": 4214.26,
            "other": 230,
            "total": 65953.45,
            "quarter": "Q3 2016"
        },
        {
            "equity": 34189.68,
            "fixedIncome": 33600.44,
            "realEstate": 8420.35,
            "priviateEquity": 12944.58,
            "alts": 3776.56,
            "hedgeFunds": 2164,
            "multiAsset": 6719.49,
            "other": 189.2,
            "total": 102004.3,
            "quarter": "Q4 2016"
        },
        {
            "equity": 26249.4,
            "fixedIncome": 8516.09,
            "realEstate": 7458.99,
            "priviateEquity": 13722.8,
            "alts": 5985.15,
            "hedgeFunds": 4171.8,
            "multiAsset": 8550.93,
            "other": 140.69,
            "total": 74795.85,
            "quarter": "Q1 2017"
        },
        {
            "equity": 16037.24,
            "fixedIncome": 21121.69,
            "realEstate": 21774.04,
            "priviateEquity": 30228.56,
            "alts": 6210.95,
            "hedgeFunds": 2166,
            "multiAsset": 23361.37,
            "other": 562.13,
            "total": 121461.98,
            "quarter": "Q2 2017"
        }
    ],
    //(USMekkoValueQ1)
    [
        {
            "equity": 7058,
            "fixedIncome": 10950.4,
            "realEstate": 6420.42,
            "priviateEquity": 12061.85,
            "alts": 2838.9,
            "hedgeFunds": 3215,
            "multiAsset": 120,
            "other": 230,
            "total": 42894.57,
            "quarter": "Q3 2016"
        },
        {
            "equity": 12459.8,
            "fixedIncome": 8003.5,
            "realEstate": 5747.9,
            "priviateEquity": 12360.09,
            "alts": 3172,
            "hedgeFunds": 2164,
            "multiAsset": 2635.6,
            "other": 27,
            "total": 46569.89,
            "quarter": "Q4 2016"
        },
        {
            "equity": 11171.85,
            "fixedIncome": 5238,
            "realEstate": 4529,
            "priviateEquity": 12931.9,
            "alts": 3434.5,
            "hedgeFunds": 4171.8,
            "multiAsset": 4810.28,
            "other": 45,
            "total": 46332.33,
            "quarter": "Q1 2017"
        },
        {
            "equity": 9927.6,
            "fixedIncome": 14481.03,
            "realEstate": 19252.9,
            "priviateEquity": 14360.33,
            "alts": 4183.5,
            "hedgeFunds": 2066,
            "multiAsset": 5409,
            "other": 2,
            "total": 69682.36,
            "quarter": "Q2 2017"
        }
    ],
    //(EURMekkoValueQ1)
    [
        {
            "equity": 371.89,
            "fixedIncome": 1282.47,
            "realEstate": 1129.86,
            "priviateEquity": 693.32,
            "alts": 1354.21,
            "hedgeFunds": 0,
            "multiAsset": 130.99,
            "other": 416.95,
            "total": 5379.69,
            "quarter": "Q3 2016"
        },
        {
            "equity": 0,
            "fixedIncome": 24042.84,
            "realEstate": 97.16,
            "priviateEquity": 914.78,
            "alts": 23.53,
            "hedgeFunds": 0,
            "multiAsset": 280.65,
            "other": 162.2,
            "total": 25521.16,
            "quarter": "Q4 2016"
        },
        {
            "equity": 11469.14,
            "fixedIncome": 9160.08,
            "realEstate": 830.36,
            "priviateEquity": 164.66,
            "alts": 2028.61,
            "hedgeFunds": 0,
            "multiAsset": 1113.12,
            "other": 99.19,
            "total": 24865.16,
            "quarter": "Q1 2017"
        },
        {
            "equity": 5708.84,
            "fixedIncome": 1803.81,
            "realEstate": 0,
            "priviateEquity": 50,
            "alts": 303.12,
            "hedgeFunds": 0,
            "multiAsset": 748.86,
            "other": 1338.7,
            "total": 9953.33,
            "quarter": "Q2 2017"
        }
    ],
    //(ASIAMekkoValueQ1) 
    [
        {
            "equity": 1278.36,
            "fixedIncome": 189.5,
            "realEstate": 1550,
            "priviateEquity": 726.5,
            "alts": 785.91,
            "hedgeFunds": 1000,
            "multiAsset": 3000,
            "other": 0,
            "total": 8530.27,
            "quarter": "Q3 2016"
        },
        {
            "equity": 18466.66,
            "fixedIncome": 1392.76,
            "realEstate": 516.09,
            "priviateEquity": 230.55,
            "alts": 266.49,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "other": 0,
            "total": 20872.55,
            "quarter": "Q4 2016"
        },
        {
            "equity": 0,
            "fixedIncome": 380,
            "realEstate": 1300.16,
            "priviateEquity": 58.35,
            "alts": 35.8,
            "hedgeFunds": 0,
            "multiAsset": 3138.07,
            "other": 0,
            "total": 4912.38,
            "quarter": "Q1 2017"
        },
        {
            "equity": 1074.75,
            "fixedIncome": 5102.96,
            "realEstate": 229,
            "priviateEquity": 367.12,
            "alts": 0,
            "hedgeFunds": 100,
            "multiAsset": 0,
            "other": 0,
            "total": 6873.83,
            "quarter": "Q2 2017"
        }
    ],
    //(AUSMekkoValueQ1)
    [
        {
            "equity": 2147.04,
            "fixedIncome": 0,
            "realEstate": 0,
            "priviateEquity": 0,
            "alts": 0,
            "hedgeFunds": 148.66,
            "multiAsset": 0,
            "other": 0,
            "total": 2295.7,
            "quarter": "Q3 2016"
        },
        {
            "equity": 0,
            "fixedIncome": 0,
            "realEstate": 0,
            "priviateEquity": 193.25,
            "alts": 74.33,
            "hedgeFunds": 0,
            "multiAsset": 0,
            "other": 0,
            "total": 267.58,
            "quarter": "Q4 2016"
        },
        {
            "equity": 451.13,
            "fixedIncome": 320,
            "realEstate": 0,
            "priviateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 357.7,
            "other": 0,
            "total": 1128.83,
            "quarter": "Q1 2017"
        },
        {
            "equity": 830.67,
            "fixedIncome": 274.33,
            "realEstate": 0,
            "priviateEquity": 0,
            "alts": 0,
            "hedgeFunds": 0,
            "multiAsset": 17000,
            "other": 0,
            "total": 18105,
            "quarter": "Q2 2017"
        }
    ]
];
//data for mekko chart 3 - 3 years number
var mekkoNumberYData = [
//all
    [
        {
            "quarter": 2015,
            "equity": 443,
            "fixedIncome": 335,
            "realEstate": 491,
            "priviateEquity": 783,
            "alts": 220,
            "hedgeFunds": 135,
            "multiAsset": 104,
            "other": 34,
            "total": 2545
        },
        {
            "quarter": 2016,
            "equity": 332,
            "fixedIncome": 265,
            "realEstate": 403,
            "priviateEquity": 758,
            "alts": 182,
            "hedgeFunds": 140,
            "multiAsset": 82,
            "other": 21,
            "total": 2183
        },
        {
            "quarter": 2017,
            "equity": 327,
            "fixedIncome": 309,
            "realEstate": 400,
            "priviateEquity": 758,
            "alts": 248,
            "hedgeFunds": 110,
            "multiAsset": 73,
            "other": 24,
            "total": 2249
        }
    ],
    //(USMekkoNumY1)
    [
        {
            "quarter": 2015,
            "equity": 341,
            "fixedIncome": 241,
            "realEstate": 411,
            "priviateEquity": 754,
            "alts": 182,
            "hedgeFunds": 128,
            "multiAsset": 67,
            "other": 14,
            "total": 2138
        },
        {
            "quarter": 2016,
            "equity": 270,
            "fixedIncome": 200,
            "realEstate": 351,
            "priviateEquity": 738,
            "alts": 149,
            "hedgeFunds": 131,
            "multiAsset": 35,
            "other": 13,
            "total": 1887
        },
        {
            "quarter": 2017,
            "equity": 249,
            "fixedIncome": 208,
            "realEstate": 277,
            "priviateEquity": 674,
            "alts": 138,
            "hedgeFunds": 104,
            "multiAsset": 28,
            "other": 16,
            "total": 1694
        }
    ],
    //(EURMekkoNumY1)
    [
        {
            "quarter": 2015,
            "equity": 62,
            "fixedIncome": 75,
            "realEstate": 60,
            "priviateEquity": 22,
            "alts": 23,
            "hedgeFunds": 4,
            "multiAsset": 30,
            "other": 10,
            "total": 286
        },
        {
            "quarter": 2016,
            "equity": 44,
            "fixedIncome": 45,
            "realEstate": 43,
            "priviateEquity": 17,
            "alts": 28,
            "hedgeFunds": 8,
            "multiAsset": 33,
            "other": 5,
            "total": 223
        },
        {
            "quarter": 2017,
            "equity": 46,
            "fixedIncome": 61,
            "realEstate": 80,
            "priviateEquity": 64,
            "alts": 76,
            "hedgeFunds": 3,
            "multiAsset": 34,
            "other": 7,
            "total": 371
        }
    ],
    //(ASIAMekkoNumY1) 
    [
        {
            "quarter": 2015,
            "equity": 18,
            "fixedIncome": 5,
            "realEstate": 10,
            "priviateEquity": 5,
            "alts": 9,
            "hedgeFunds": 1,
            "multiAsset": 4,
            "other": 1,
            "total": 53
        },
        {
            "quarter": 2016,
            "equity": 13,
            "fixedIncome": 14,
            "realEstate": 5,
            "priviateEquity": 0,
            "alts": 2,
            "hedgeFunds": 0,
            "multiAsset": 9,
            "other": 1,
            "total": 44
        },
        {
            "quarter": 2017,
            "equity": 14,
            "fixedIncome": 35,
            "realEstate": 31,
            "priviateEquity": 13,
            "alts": 22,
            "hedgeFunds": 2,
            "multiAsset": 4,
            "other": 0,
            "total": 121
        }
    ],
    //(AUSMekkoNumY1)
    [
        {
            "quarter": 2015,
            "equity": 17,
            "fixedIncome": 9,
            "realEstate": 7,
            "priviateEquity": 0,
            "alts": 3,
            "hedgeFunds": 2,
            "multiAsset": 1,
            "other": 8,
            "total": 47
        },
        {
            "quarter": 2016,
            "equity": 4,
            "fixedIncome": 2,
            "realEstate": 1,
            "priviateEquity": 2,
            "alts": 0,
            "hedgeFunds": 1,
            "multiAsset": 4,
            "other": 1,
            "total": 15
        },
        {
            "quarter": 2017,
            "equity": 14,
            "fixedIncome": 4,
            "realEstate": 1,
            "priviateEquity": 4,
            "alts": 5,
            "hedgeFunds": 1,
            "multiAsset": 4,
            "other": 1,
            "total": 34
        }
    ]
];
//data for mekko chart 3 - 3 years value
var mekkoValueYData = [
//all
    [
        {
            "quarter": 2015,
            "equity": 264943.83,
            "fixedIncome": 70702.22,
            "realEstate": 44385.7,
            "priviateEquity": 62941.39,
            "alts": 26096.81,
            "hedgeFunds": 13449.23,
            "multiAsset": 54523.87,
            "other": 12341.24,
            "total": 549384.29
        },
        {
            "quarter": 2016,
            "equity": 80289.91,
            "fixedIncome": 36602.95,
            "realEstate": 59140.04,
            "priviateEquity": 66749.46,
            "alts": 39382.02,
            "hedgeFunds": 16747.58,
            "multiAsset": 30648.63,
            "other": 5032.01,
            "total": 334592.6
        },
        {
            "quarter": 2017,
            "equity": 87587.08,
            "fixedIncome": 74906.39,
            "realEstate": 52964.62,
            "priviateEquity": 71584.93,
            "alts": 20339.03,
            "hedgeFunds": 12865.46,
            "multiAsset": 42846.05,
            "other": 1122.02,
            "total": 364215.58
        }
    ],
    //(USMekkoValueY1)
    [
        {
            "quarter": 2015,
            "equity": 237010.7,
            "fixedIncome": 36568.7,
            "realEstate": 32673.23,
            "priviateEquity": 58756.7,
            "alts": 17292.2,
            "hedgeFunds": 13132.8,
            "multiAsset": 36922.5,
            "other": 9175,
            "total": 441531.83
        },
        {
            "quarter": 2016,
            "equity": 39578.39,
            "fixedIncome": 26109.37,
            "realEstate": 34059.45,
            "priviateEquity": 63697.44,
            "alts": 15250.18,
            "hedgeFunds": 15833.88,
            "multiAsset": 14317.2,
            "other": 4870,
            "total": 213715.91
        },
        {
            "quarter": 2017,
            "equity": 40617.25,
            "fixedIncome": 38672.93,
            "realEstate": 35950.22,
            "priviateEquity": 51714.17,
            "alts": 13628.9,
            "hedgeFunds": 11616.8,
            "multiAsset": 12974.88,
            "other": 304,
            "total": 205479.15
        }
    ],
    //(EURMekkoValueY1)
    [
        {
            "quarter": 2015,
            "equity": 20155.36,
            "fixedIncome": 32374.68,
            "realEstate": 6382.81,
            "priviateEquity": 1714.44,
            "alts": 4243.02,
            "hedgeFunds": 228.99,
            "multiAsset": 7360.52,
            "other": 2527.94,
            "total": 74987.76
        },
        {
            "quarter": 2016,
            "equity": 31830.57,
            "fixedIncome": 10376.88,
            "realEstate": 24402.98,
            "priviateEquity": 2820.32,
            "alts": 7904.36,
            "hedgeFunds": 713.7,
            "multiAsset": 12345.68,
            "other": 135.01,
            "total": 90529.5
        },
        {
            "quarter": 2017,
            "equity": 21871.22,
            "fixedIncome": 27688.91,
            "realEstate": 9664.28,
            "priviateEquity": 3257.79,
            "alts": 3847.86,
            "hedgeFunds": 0,
            "multiAsset": 6241,
            "other": 818.02,
            "total": 73389.08
        }
    ],
    //(ASIAMekkoValueY1)
    [
        {
            "quarter": 2015,
            "equity": 5140.2,
            "fixedIncome": 200,
            "realEstate": 2111.47,
            "priviateEquity": 2139.25,
            "alts": 3398.15,
            "hedgeFunds": 0,
            "multiAsset": 149.44,
            "other": 0,
            "total": 13138.51
        },
        {
            "quarter": 2016,
            "equity": 8372.02,
            "fixedIncome": 116.7,
            "realEstate": 593.62,
            "priviateEquity": 0,
            "alts": 14827.48,
            "hedgeFunds": 0,
            "multiAsset": 3883.99,
            "other": 0,
            "total": 27793.81
        },
        {
            "quarter": 2017,
            "equity": 20819.77,
            "fixedIncome": 7065.22,
            "realEstate": 3595.25,
            "priviateEquity": 1382.52,
            "alts": 1088.2,
            "hedgeFunds": 1100,
            "multiAsset": 6138.07,
            "other": 0,
            "total": 41189.03
        }
    ],
    //(AUSMekkoValueY1)
    [
        {
            "quarter": 2015,
            "equity": 1621.91,
            "fixedIncome": 1456.75,
            "realEstate": 1027.34,
            "priviateEquity": 0,
            "alts": 397.44,
            "hedgeFunds": 87.44,
            "multiAsset": 91.41,
            "other": 638.3,
            "total": 5320.59
        },
        {
            "quarter": 2016,
            "equity": 508.93,
            "fixedIncome": 0,
            "realEstate": 83.99,
            "priviateEquity": 115.26,
            "alts": 0,
            "hedgeFunds": 200,
            "multiAsset": 81.76,
            "other": 0,
            "total": 989.94
        },
        {
            "quarter": 2017,
            "equity": 3428.84,
            "fixedIncome": 594.33,
            "realEstate": 0,
            "priviateEquity": 193.25,
            "alts": 74.33,
            "hedgeFunds": 148.66,
            "multiAsset": 17357.7,
            "other": 0,
            "total": 21797.11
        }
    ]
];


//DECLARE CHARTS; CLONE GRAPHS & AXES FOR THEM
//build quarterly mandate chart
var qMandateChart = new AmCharts.AmSerialChart();
	qMandateChart.dataProvider = mandateChartData[0];
	qMandateChart.rotate = true;
	qMandateChart.startDuration = 0;
	qMandateChart.categoryField = "status";
	qMandateChart.columnWidth = 0.7;
	qMandateChart.titles = [
		{  "text": "Mandates reported in Q2 2017"  }
		];
	qMandateChart.legend = {
	        "horizontalGap": 0,
	        "verticalGap": 0,
	        "maxColumns": 5,
	        "labelWidth": 100,
	        "valueWidth": 5,
	        "position": "bottom",
	        "useGraphSettings": true,
	        "markerSize": 10,
	        "fontSize": 10
	    };

	qMandateChart.categoryAxis = {
	        "gridPosition": "start",
	        "axisAlpha": 0,
	        "gridAlpha": 0,
	        "position": "left"
	    };
	qMandateChart["export"] = {
	  "enabled": true
	};
//clone stackedGraphs1 - stackedGraphs7
var qMandateGraph1 = AmCharts.cloneObject(stackedGraphs1);
var qMandateGraph2 = AmCharts.cloneObject(stackedGraphs2);
var qMandateGraph3 = AmCharts.cloneObject(stackedGraphs3);
var qMandateGraph4 = AmCharts.cloneObject(stackedGraphs4);
var qMandateGraph5 = AmCharts.cloneObject(stackedGraphs5);
var qMandateGraph6 = AmCharts.cloneObject(stackedGraphs6);
var qMandateGraph7 = AmCharts.cloneObject(stackedGraphs7);
var qMandateGraph8 = AmCharts.cloneObject(stackedGraphs8);

//clone qMandateValueAxis
var qMandateAxis1 = AmCharts.cloneObject(qMandateValueAxis);

//build top mandates chart
var topMandatesQchart = new AmCharts.AmSerialChart();
	topMandatesQchart.rotate = true;
	topMandatesQchart.dataProvider = topMandateData[0];
	topMandatesQchart.categoryField = "fund";
	topMandatesQchart.categoryAxis = {
        "gridPosition": "start",
        "fillAlpha": 0.05,
        "position": "left",
        "ignoreAxisWidth": true,
        "autoWrap": true
    };
    topMandatesQchart.marginLeft = 175;
    topMandatesQchart.titles = [
     { text: "Five largest mandates: Q2 2017",
       size: 15  },
       { text: "Hover over bars to see detail",
        size: 11,
        bold: false}
    ];
    topMandatesQchart["export"] = {
	  "enabled": true
	};
//clone top mandates graph
var topMandateQGraph = AmCharts.cloneObject(topMandateGraph);
//clone top mandates axis
var topMandateQAxis = AmCharts.cloneObject(topMandateValueAxis);

//build combo chart 1 - region Q
var comboRegionQchart = new AmCharts.AmSerialChart();
	comboRegionQchart.dataProvider = comboRegionQData[0];
	comboRegionQchart.addClassNames = true;
	comboRegionQchart.synchronizeGrid = true;
	comboRegionQchart.autoMargins = false;
	comboRegionQchart.marginLeft = 70;
	comboRegionQchart.marginRight = 80;
	comboRegionQchart.marginTop = 50;
	comboRegionQchart.marginBottom = 50;
	comboRegionQchart.startDuration = 1;
	comboRegionQchart.categoryField = "class";
	comboRegionQchart.titles = [
		{	"text": "Completed mandates by investment region: Q2 2017"}];
	comboRegionQchart.categoryAxis = {
	    "gridPosition": "start",
	    "axisAlpha": 0,
	    "tickLength": 0,
	    "autoWrap": true,
	    "fontSize": 10
  	};
  	comboRegionQchart["export"] = {
  		"enabled": true
		};
	comboRegionQchart.legend = {
	        "horizontalGap": 0,
	        "verticalGap": 0,
	        "maxColumns": 5,
	        "labelWidth": 100,
	        "valueWidth": 5,
	        
	        "useGraphSettings": true,
	        "markerSize": 10,
	        "fontSize": 10
	    };
//clone combo graph1 and graph2
var comboRegionGraph1 = AmCharts.cloneObject(comboColumnGraph);
var comboRegionGraph2 = AmCharts.cloneObject(comboLineGraph);
//clone combo value axis 1 and 2
var comboRegionAxis1 = AmCharts.cloneObject(comboColumnAxis);
var comboRegionAxis2 = AmCharts.cloneObject(comboLineAxis);
//build combo chart 2 - asset class Q
var comboClassQchart = new AmCharts.AmSerialChart();
	comboClassQchart.dataProvider = comboClassQData[0];
	comboClassQchart.addClassNames = true;
	comboClassQchart.synchronizeGrid = true;
	comboClassQchart.autoMargins = false;
	comboClassQchart.marginLeft = 70;
	comboClassQchart.marginRight = 80;
	comboClassQchart.marginTop = 50;
	comboClassQchart.marginBottom = 50;
	comboClassQchart.startDuration = 1;
	comboClassQchart.categoryField = "class";
	comboClassQchart.titles = [
		{	"text": "Completed mandates by asset class: Q2 2017"}];
	comboClassQchart.categoryAxis = {
	    "gridPosition": "start",
	    "axisAlpha": 0,
	    "tickLength": 0,
	    "autoWrap": true,
	    "fontSize": 10
  	};
  	comboClassQchart["export"] = {
  		"enabled": true
		};
	comboClassQchart.legend = {
	        "horizontalGap": 0,
	        "verticalGap": 0,
	        "maxColumns": 5,
	        "labelWidth": 100,
	        "valueWidth": 5,
	        
	        "useGraphSettings": true,
	        "markerSize": 10,
	        "fontSize": 10
	    };
//clone combo graph1 and graph2
var comboClassGraph1 = AmCharts.cloneObject(comboColumnGraph);
var comboClassGraph2 = AmCharts.cloneObject(comboLineGraph);
comboClassGraph1.fillColors = "#2D43AC";
//clone combo value axis 1 and 2
var comboClassAxis1 = AmCharts.cloneObject(comboColumnAxis);
var comboClassAxis2 = AmCharts.cloneObject(comboLineAxis);

//build combo chart 3 - region Y
var comboRegionYchart = new AmCharts.AmSerialChart();
	comboRegionYchart.dataProvider = comboRegionYData[0];
	comboRegionYchart.addClassNames = true;
	comboRegionYchart.synchronizeGrid = true;
	comboRegionYchart.autoMargins = false;
	comboRegionYchart.marginLeft = 70;
	comboRegionYchart.marginRight = 90;
	comboRegionYchart.marginTop = 50;
	comboRegionYchart.marginBottom = 50;
	comboRegionYchart.startDuration = 1;
	comboRegionYchart.categoryField = "class";
	comboRegionYchart.titles = [
		{	"text": "Completed mandates by investment region: Year ending 6/30/2017"}];
	comboRegionYchart.categoryAxis = {
	    "gridPosition": "start",
	    "axisAlpha": 0,
	    "tickLength": 0,
	    "autoWrap": true,
	    "fontSize": 10
  	};
  	comboRegionYchart["export"] = {
  		"enabled": true
		};
	comboRegionYchart.legend = {
	        "horizontalGap": 0,
	        "verticalGap": 0,
	        "maxColumns": 5,
	        "labelWidth": 100,
	        "valueWidth": 5,
	        
	        "useGraphSettings": true,
	        "markerSize": 10,
	        "fontSize": 10
	    };
//clone combo graph1 and graph2
var comboRegionYGraph1 = AmCharts.cloneObject(comboColumnGraph);
var comboRegionYGraph2 = AmCharts.cloneObject(comboLineGraph);
//clone combo value axis 1 and 2
var comboRegionYAxis1 = AmCharts.cloneObject(comboColumnAxis);
var comboRegionYAxis2 = AmCharts.cloneObject(comboLineAxis);

//build combo chart 4 - asset class Y
var comboClassYchart = new AmCharts.AmSerialChart();
	comboClassYchart.dataProvider = comboClassYData[0];
	comboClassYchart.addClassNames = true;
	comboClassYchart.synchronizeGrid = true;
	comboClassYchart.autoMargins = false;
	comboClassYchart.marginLeft = 70;
	comboClassYchart.marginRight = 90;
	comboClassYchart.marginTop = 50;
	comboClassYchart.marginBottom = 50;
	comboClassYchart.startDuration = 1;
	comboClassYchart.categoryField = "class";
	comboClassYchart.titles = [
		{	"text": "Completed mandates by asset class: Year ending 6/30/2017"}];
	comboClassYchart.categoryAxis = {
	    "gridPosition": "start",
	    "axisAlpha": 0,
	    "tickLength": 0,
	    "autoWrap": true,
	    "fontSize": 10
  	};
  	comboClassYchart["export"] = {
  		"enabled": true
		};
	comboClassYchart.legend = {
	        "horizontalGap": 0,
	        "verticalGap": 0,
	        "maxColumns": 5,
	        "labelWidth": 100,
	        "valueWidth": 5,
	        
	        "useGraphSettings": true,
	        "markerSize": 10,
	        "fontSize": 10
	    };
//clone combo graph1 and graph2
var comboClassYGraph1 = AmCharts.cloneObject(comboColumnGraph);
var comboClassYGraph2 = AmCharts.cloneObject(comboLineGraph);
comboClassYGraph1.fillColors = "#2D43AC";
//clone combo value axis 1 and 2
var comboClassYAxis1 = AmCharts.cloneObject(comboColumnAxis);
var comboClassYAxis2 = AmCharts.cloneObject(comboLineAxis);
//build average mandate size investment region Q chart
var avgSizeRegionQchart = new AmCharts.AmSerialChart();
	avgSizeRegionQchart.dataProvider = avgSizeRegionQData[0];
	avgSizeRegionQchart.categoryField = "class";
	avgSizeRegionQchart.startDuration = 1;
	avgSizeRegionQchart.sequencedAnimation = true;
	avgSizeRegionQchart.marginBottom = 45;
	avgSizeRegionQchart.titles = [
      {text: "Average mandate amount"},
      {text: "by investment region: Q2 2017"}
    	];
	avgSizeRegionQchart.gridAboveGraphs = true;
	avgSizeRegionQchart.categoryAxis = 
      {
        "gridPosition": "start",
        "fillAlpha": 0.05,
        "position": "left",
        "ignoreAxisWidth": true,
        "autoWrap": true
    	};
    avgSizeRegionQchart["export"] = {
  		"enabled": true
		};
//clone bar graph
var avgRegionQGraph = AmCharts.cloneObject(barChartGraph);
//clone bar axis
var avgRegionQAxis = AmCharts.cloneObject(barChartValueAxis);
//build average mandate size investment region Q chart
var avgSizeClassQchart = new AmCharts.AmSerialChart();
	avgSizeClassQchart.dataProvider = avgSizeClassQData[0];
	avgSizeClassQchart.categoryField = "class";
	avgSizeClassQchart.startDuration = 1;
	avgSizeClassQchart.sequencedAnimation = true;
	avgSizeClassQchart.marginBottom = 45;
	avgSizeClassQchart.titles = [
      {text: "Average mandate amount"},
      {text: "by asset class: Q2 2017"}
    	];
	avgSizeClassQchart.gridAboveGraphs = true;
	avgSizeClassQchart.categoryAxis = 
      {
        "gridPosition": "start",
        "fillAlpha": 0.05,
        "position": "left",
        "ignoreAxisWidth": true,
        "autoWrap": true
    	};
    avgSizeClassQchart["export"] = {
  		"enabled": true
		};
//clone bar graph
var avgClassQGraph = AmCharts.cloneObject(barChartGraph);
	avgClassQGraph.fillColors = "#2D43AC";
//clone bar axis
var avgClassQAxis = AmCharts.cloneObject(barChartValueAxis);

//build stacked bar chart 1 - clusterNumQchart
var clusterNumQchart = new AmCharts.AmSerialChart();
	clusterNumQchart.dataProvider = clusterNumQData[0];
	clusterNumQchart.titles = [
		{ "text": "Completed mandates by asset class and investment region"},
		{ "text": "Q2 2017"}];
	clusterNumQchart.autoMargins = false;
	clusterNumQchart.marginLeft = 70;
	clusterNumQchart.marginRight = 45;
	clusterNumQchart.marginTop = 50;
	clusterNumQchart.marginBottom = 50;
	clusterNumQchart.legend = {
       "horizontalGap": 0,
        "verticalGap": 0,
        "fontSize": 10,
        "labelWidth": 100,
        "valueWidth": 1,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10
    };
    clusterNumQchart.categoryField = "region";
    clusterNumQchart.categoryAxis = {
    "gridPosition": "start",
    "gridAlpha": 0,
    
    "fillAlpha": 0.05,
    "autoWrap": true
  	};
  	clusterNumQchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var clusterNumQGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var clusterNumQGraph2 = AmCharts.cloneObject(stackedGraphs2);
	var clusterNumQGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var clusterNumQGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var clusterNumQGraph5 = AmCharts.cloneObject(stackedGraphs5);
	var clusterNumQGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var clusterNumQGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var clusterNumQGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var clusterNumQaxis = AmCharts.cloneObject(stackedValueAxis1);

//build stacked bar chart 2 - clusterValueQchart
var clusterValueQchart = new AmCharts.AmSerialChart();
	clusterValueQchart.dataProvider = clusterValueQData[0];
	clusterValueQchart.titles = [
		{ "text": "Completed mandates by asset class and investment region"},
		{ "text": "Q2 2017"}];
	clusterValueQchart.autoMargins = false;
	clusterValueQchart.marginLeft = 80;
	clusterValueQchart.marginRight = 45;
	clusterValueQchart.marginTop = 50;
	clusterValueQchart.marginBottom = 50;
	clusterValueQchart.legend = {
       "horizontalGap": 0,
        "verticalGap": 0,
        "fontSize": 10,
        "labelWidth": 100,
        "valueWidth": 1,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10
    };
    clusterValueQchart.categoryField = "region";
    clusterValueQchart.categoryAxis = {
    "gridPosition": "start",
    "gridAlpha": 0,
    "fillAlpha": 0.05,
    "autoWrap": true
  	};
  	clusterValueQchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var clusterValueQGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var clusterValueQGraph2 = AmCharts.cloneObject(stackedGraphs2);
	var clusterValueQGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var clusterValueQGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var clusterValueQGraph5 = AmCharts.cloneObject(stackedGraphs5);
	var clusterValueQGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var clusterValueQGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var clusterValueQGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var clusterValueQaxis = AmCharts.cloneObject(stackedValueAxis2);

//build stacked bar chart 1 - clusterNumQchart
var clusterNumYchart = new AmCharts.AmSerialChart();
	clusterNumYchart.dataProvider = clusterNumYData[0];
	clusterNumYchart.titles = [
		{ "text": "Completed mandates by asset class and investment region"},
		{ "text": "Year ending 6/30/2017"}];
	clusterNumYchart.autoMargins = false;
	clusterNumYchart.marginLeft = 70;
	clusterNumYchart.marginRight = 45;
	clusterNumYchart.marginTop = 50;
	clusterNumYchart.marginBottom = 50;
	clusterNumYchart.legend = {
       "horizontalGap": 0,
        "verticalGap": 0,
        "fontSize": 10,
        "labelWidth": 100,
        "valueWidth": 1,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10
    };
    clusterNumYchart.categoryField = "region";
    clusterNumYchart.categoryAxis = {
    "gridPosition": "start",
    "gridAlpha": 0,
    "fillAlpha": 0.05,
    "autoWrap": true
  	};
  	clusterNumYchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var clusterNumYGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var clusterNumYGraph2 = AmCharts.cloneObject(stackedGraphs2);
	var clusterNumYGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var clusterNumYGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var clusterNumYGraph5 = AmCharts.cloneObject(stackedGraphs5);
	var clusterNumYGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var clusterNumYGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var clusterNumYGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var clusterNumYaxis = AmCharts.cloneObject(stackedValueAxis1);

//build stacked bar chart 2 - clusterValueQchart
var clusterValueYchart = new AmCharts.AmSerialChart();
	clusterValueYchart.dataProvider = clusterValueYData[0];
	clusterValueYchart.titles = [
		{ "text": "Completed mandates by asset class and investment region"},
		{ "text": "Year ending 6/30/2017"}];
	clusterValueYchart.autoMargins = false;
	clusterValueYchart.marginLeft = 80;
	clusterValueYchart.marginRight = 45;
	clusterValueYchart.marginTop = 50;
	clusterValueYchart.marginBottom = 50;
	clusterValueYchart.legend = {
       "horizontalGap": 0,
        "verticalGap": 0,
        "fontSize": 10,
        "labelWidth": 100,
        "valueWidth": 1,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10
    };
    clusterValueYchart.categoryField = "region";
    clusterValueYchart.categoryAxis = {
    "gridPosition": "start",
    "gridAlpha": 0,
    "fillAlpha": 0.05,
    "autoWrap": true
  	};
  	clusterValueYchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var clusterValueYGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var clusterValueYGraph2 = AmCharts.cloneObject(stackedGraphs2);
	var clusterValueYGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var clusterValueYGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var clusterValueYGraph5 = AmCharts.cloneObject(stackedGraphs5);
	var clusterValueYGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var clusterValueYGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var clusterValueYGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var clusterValueYaxis = AmCharts.cloneObject(stackedValueAxis2);
//build mekko chart 1 - number of mandates by asset class 4 quarters
var mekkoNumberQchart = new AmCharts.AmSerialChart();
	mekkoNumberQchart.dataProvider = mekkoNumberQData[0];
	mekkoNumberQchart.categoryField = "quarter";
	mekkoNumberQchart.categoryAxis = {
        "gridAlpha": 0.1,
        "axisAlpha": 0,
        "fillAlpha": 0.05,
        "widthField": "total",
        "gridPosition": "start"
    };
    mekkoNumberQchart.legend = {
        "horizontalGap": 0,
        "verticalGap": 0,
        "maxColumns": 8,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10,
        "fontSize": 10
    };
    mekkoNumberQchart.titles = [
    	{ "text": "Number of mandates by asset class: Q2 2016 - Q2 2017"}];
    mekkoNumberQchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var mekkoNumberQGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var mekkoNumberQGraph2= AmCharts.cloneObject(stackedGraphs2);
	var mekkoNumberQGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var mekkoNumberQGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var mekkoNumberQGraph5= AmCharts.cloneObject(stackedGraphs5);
	var mekkoNumberQGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var mekkoNumberQGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var mekkoNumberQGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var mekkoNumberQaxis = AmCharts.cloneObject(mekkoValueAxis);
//build mekko chart 2 - value of mandates by asset class 4 quarters
var mekkoValueQchart = new AmCharts.AmSerialChart();
	mekkoValueQchart.categoryField = "quarter";
	mekkoValueQchart.dataProvider = mekkoValueQData[0];
	mekkoValueQchart.categoryAxis = {
        "gridAlpha": 0.1,
        "axisAlpha": 0,
        "widthField": "total",
        "gridPosition": "start"
    };
    mekkoValueQchart.legend = {
        "horizontalGap": 0,
        "verticalGap": 0,
        "maxColumns": 8,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10,
        "fontSize": 10
    };
    mekkoValueQchart.titles = [
    	{ "text": "Disclosed value ($m) of Completed mandates by asset class: Q2 2016 - Q2 2017"}];
    mekkoValueQchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var mekkoValueQGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var mekkoValueQGraph2= AmCharts.cloneObject(stackedGraphs2);
	var mekkoValueQGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var mekkoValueQGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var mekkoValueQGraph5= AmCharts.cloneObject(stackedGraphs5);
	var mekkoValueQGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var mekkoValueQGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var mekkoValueQGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var mekkoValueQaxis = AmCharts.cloneObject(mekkoValueAxis);
//build mekko chart 3 - number of mandates by asset class 3 years
var mekkoNumberYchart = new AmCharts.AmSerialChart();
	mekkoNumberYchart.dataProvider = mekkoNumberYData[0];
	mekkoNumberYchart.categoryField = "quarter";
	mekkoNumberYchart.categoryAxis = {
        "gridAlpha": 0.1,
        "axisAlpha": 0,
        "widthField": "total",
        "gridPosition": "start"
    };
    mekkoNumberYchart.legend = {
        "horizontalGap": 0,
        "verticalGap": 0,
        "maxColumns": 8,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10,
        "fontSize": 10
    };
    mekkoNumberYchart.titles = [
    	{ "text": "Number of mandates by asset class: 2015 - 2017*"},
    	{ "text": "*12 months ending June 30"}];
    mekkoNumberYchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var mekkoNumberYGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var mekkoNumberYGraph2= AmCharts.cloneObject(stackedGraphs2);
	var mekkoNumberYGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var mekkoNumberYGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var mekkoNumberYGraph5= AmCharts.cloneObject(stackedGraphs5);
	var mekkoNumberYGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var mekkoNumberYGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var mekkoNumberYGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var mekkoNumberYaxis = AmCharts.cloneObject(mekkoValueAxis);
//build mekko chart 4 - value of mandates by asset class 3 years
var mekkoValueYchart = new AmCharts.AmSerialChart();
	mekkoValueYchart.categoryField = "quarter";
	mekkoValueYchart.dataProvider = mekkoValueYData[0];
	mekkoValueYchart.categoryAxis = {
        "gridAlpha": 0.1,
        "axisAlpha": 0,
        "widthField": "total",
        "gridPosition": "start"
    };
    mekkoValueYchart.legend = {
        "horizontalGap": 0,
        "verticalGap": 0,
        "maxColumns": 8,
        "position": "bottom",
        "useGraphSettings": true,
        "markerSize": 10,
        "fontSize": 10
    };
    mekkoValueYchart.titles = [
    	{ "text": "Disclosed value ($m) of Completed mandates by asset class: 2015 - 2017"},
    	{ "text": "*12 months ending June 30"}];
    mekkoValueYchart["export"] = {
  		"enabled": true
		};
	//clone stacked graphs 1 - 7
	var mekkoValueYGraph1 = AmCharts.cloneObject(stackedGraphs1);
	var mekkoValueYGraph2= AmCharts.cloneObject(stackedGraphs2);
	var mekkoValueYGraph3 = AmCharts.cloneObject(stackedGraphs3);
	var mekkoValueYGraph4 = AmCharts.cloneObject(stackedGraphs4);
	var mekkoValueYGraph5= AmCharts.cloneObject(stackedGraphs5);
	var mekkoValueYGraph6 = AmCharts.cloneObject(stackedGraphs6);
	var mekkoValueYGraph7 = AmCharts.cloneObject(stackedGraphs7);
	var mekkoValueYGraph8 = AmCharts.cloneObject(stackedGraphs8);
	//clone stacked axis
	var mekkoValueYaxis = AmCharts.cloneObject(mekkoValueAxis);
//READY FUNCTION!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
AmCharts.ready(function() {
	//mandate summary chart
	qMandateChart.addValueAxis(qMandateAxis1);
	qMandateChart.addGraph(qMandateGraph1);
	qMandateChart.addGraph(qMandateGraph2);
	qMandateChart.addGraph(qMandateGraph3);
	qMandateChart.addGraph(qMandateGraph4);
	qMandateChart.addGraph(qMandateGraph8);
	qMandateChart.addGraph(qMandateGraph5);
	qMandateChart.addGraph(qMandateGraph6);
	qMandateChart.addGraph(qMandateGraph7);


	//top mandates Q chart
	topMandatesQchart.addGraph(topMandateQGraph);
	topMandatesQchart.addValueAxis(topMandateValueAxis);
	//combo region Q chart
	comboRegionQchart.addGraph(comboRegionGraph1);
	comboRegionQchart.addGraph(comboRegionGraph2);
	comboRegionQchart.addValueAxis(comboRegionAxis1);
	comboRegionQchart.addValueAxis(comboRegionAxis2);
	//combo asset class Q chart
	comboClassQchart.addGraph(comboClassGraph1);
	comboClassQchart.addGraph(comboClassGraph2);
	comboClassQchart.addValueAxis(comboClassAxis1);
	comboClassQchart.addValueAxis(comboClassAxis2);
	//avg mandate size region Q chart
	avgSizeRegionQchart.addValueAxis(avgRegionQAxis);
	avgSizeRegionQchart.addGraph(avgRegionQGraph);
	//avg mandate size region Q chart
	avgSizeClassQchart.addValueAxis(avgClassQAxis);
	avgSizeClassQchart.addGraph(avgClassQGraph);
	//combo region Y chart
	comboRegionYchart.addGraph(comboRegionYGraph1);
	comboRegionYchart.addGraph(comboRegionYGraph2);
	comboRegionYchart.addValueAxis(comboRegionYAxis1);
	comboRegionYchart.addValueAxis(comboRegionYAxis2);
	//combo asset class Y chart
	comboClassYchart.addGraph(comboClassYGraph1);
	comboClassYchart.addGraph(comboClassYGraph2);
	comboClassYchart.addValueAxis(comboClassYAxis1);
	comboClassYchart.addValueAxis(comboClassYAxis2);
	//stacked chart Q number chart
	clusterNumQchart.addGraph(clusterNumQGraph1);
	clusterNumQchart.addGraph(clusterNumQGraph2);
	clusterNumQchart.addGraph(clusterNumQGraph3);
	clusterNumQchart.addGraph(clusterNumQGraph4);
	clusterNumQchart.addGraph(clusterNumQGraph8);
	clusterNumQchart.addGraph(clusterNumQGraph5);
	clusterNumQchart.addGraph(clusterNumQGraph6);
	clusterNumQchart.addGraph(clusterNumQGraph7);
	clusterNumQchart.addValueAxis(clusterNumQaxis);
	//stacked chart Q value chart
	clusterValueQchart.addGraph(clusterValueQGraph1);
	clusterValueQchart.addGraph(clusterValueQGraph2);
	clusterValueQchart.addGraph(clusterValueQGraph3);
	clusterValueQchart.addGraph(clusterValueQGraph4);
	clusterValueQchart.addGraph(clusterValueQGraph8);
	clusterValueQchart.addGraph(clusterValueQGraph5);
	clusterValueQchart.addGraph(clusterValueQGraph6);
	clusterValueQchart.addGraph(clusterValueQGraph7);
	clusterValueQchart.addValueAxis(clusterValueQaxis);
	//stacked chart y number chart
	clusterNumYchart.addGraph(clusterNumYGraph1);
	clusterNumYchart.addGraph(clusterNumYGraph2);
	clusterNumYchart.addGraph(clusterNumYGraph3);
	clusterNumYchart.addGraph(clusterNumYGraph4);
	clusterNumYchart.addGraph(clusterNumYGraph8);
	clusterNumYchart.addGraph(clusterNumYGraph5);
	clusterNumYchart.addGraph(clusterNumYGraph6);
	clusterNumYchart.addGraph(clusterNumYGraph7);
	clusterNumYchart.addValueAxis(clusterNumYaxis);
	//stacked chart Y value chart
	clusterValueYchart.addGraph(clusterValueYGraph1);
	clusterValueYchart.addGraph(clusterValueYGraph2);
	clusterValueYchart.addGraph(clusterValueYGraph3);
	clusterValueYchart.addGraph(clusterValueYGraph4);
	clusterValueYchart.addGraph(clusterValueYGraph8);
	clusterValueYchart.addGraph(clusterValueYGraph5);
	clusterValueYchart.addGraph(clusterValueYGraph6);
	clusterValueYchart.addGraph(clusterValueYGraph7);
	clusterValueYchart.addValueAxis(clusterValueYaxis);
	//mekko chart Q number chart
	mekkoNumberQchart.addGraph(mekkoNumberQGraph1);
	mekkoNumberQchart.addGraph(mekkoNumberQGraph2);
	mekkoNumberQchart.addGraph(mekkoNumberQGraph3);
	mekkoNumberQchart.addGraph(mekkoNumberQGraph4);
	mekkoNumberQchart.addGraph(mekkoNumberQGraph8);
	mekkoNumberQchart.addGraph(mekkoNumberQGraph5);
	mekkoNumberQchart.addGraph(mekkoNumberQGraph6);
	mekkoNumberQchart.addGraph(mekkoNumberQGraph7);
	mekkoNumberQchart.addValueAxis(mekkoNumberQaxis);
	//mekko chart Q value chart
	mekkoValueQchart.addGraph(mekkoValueQGraph1);
	mekkoValueQchart.addGraph(mekkoValueQGraph2);
	mekkoValueQchart.addGraph(mekkoValueQGraph3);
	mekkoValueQchart.addGraph(mekkoValueQGraph4);
	mekkoValueQchart.addGraph(mekkoValueQGraph8);
	mekkoValueQchart.addGraph(mekkoValueQGraph5);
	mekkoValueQchart.addGraph(mekkoValueQGraph6);
	mekkoValueQchart.addGraph(mekkoValueQGraph7);
	mekkoValueQchart.addValueAxis(mekkoValueQaxis);
	//mekko chart Y number chart
	mekkoNumberYchart.addGraph(mekkoNumberYGraph1);
	mekkoNumberYchart.addGraph(mekkoNumberYGraph2);
	mekkoNumberYchart.addGraph(mekkoNumberYGraph3);
	mekkoNumberYchart.addGraph(mekkoNumberYGraph4);
	mekkoNumberYchart.addGraph(mekkoNumberYGraph8);
	mekkoNumberYchart.addGraph(mekkoNumberYGraph5);
	mekkoNumberYchart.addGraph(mekkoNumberYGraph6);
	mekkoNumberYchart.addGraph(mekkoNumberYGraph7);
	mekkoNumberYchart.addValueAxis(mekkoNumberYaxis);
	//mekko chart Y value chart
	mekkoValueYchart.addGraph(mekkoValueYGraph1);
	mekkoValueYchart.addGraph(mekkoValueYGraph2);
	mekkoValueYchart.addGraph(mekkoValueYGraph3);
	mekkoValueYchart.addGraph(mekkoValueYGraph4);
	mekkoValueYchart.addGraph(mekkoValueYGraph8);
	mekkoValueYchart.addGraph(mekkoValueYGraph5);
	mekkoValueYchart.addGraph(mekkoValueYGraph6);
	mekkoValueYchart.addGraph(mekkoValueYGraph7);
	mekkoValueYchart.addValueAxis(mekkoValueYaxis);
	//write charts
	qMandateChart.write("qMandateChartdiv");
	topMandatesQchart.write("topMandatesQchartdiv")
	avgSizeRegionQchart.write("avgSizeRegionQchartdiv");
	avgSizeClassQchart.write("avgSizeClassQchartdiv");
	comboRegionQchart.write("comboRegionQchartdiv");
	comboClassQchart.write("comboClassQchartdiv");
	comboRegionYchart.write("comboRegionYchartdiv");
	comboClassYchart.write("comboClassYchartdiv");
	clusterNumQchart.write("clusterNumQchartdiv");
	clusterValueQchart.write("clusterValueQchartdiv");
	clusterNumYchart.write("clusterNumYchartdiv");
	clusterValueYchart.write("clusterValueYchartdiv");
	mekkoNumberQchart.write("mekkoNumberQchartdiv");
	mekkoValueQchart.write("mekkoValueQchartdiv");
	mekkoNumberYchart.write("mekkoNumberYchartdiv");
	mekkoValueYchart.write("mekkoValueYchartdiv");
});
//change data function
function selectDataset(d) {
    qMandateChart.dataProvider = mandateChartData[d];
    qMandateChart.validateData();
    topMandatesQchart.dataProvider = topMandateData[d];
    topMandatesQchart.validateData();
    avgSizeRegionQchart.dataProvider = avgSizeRegionQData[d];
    avgSizeRegionQchart.validateData();
    avgSizeClassQchart.dataProvider = avgSizeClassQData[d];
    avgSizeClassQchart.validateData();
    comboRegionQchart.dataProvider = comboRegionQData[d];
    comboRegionQchart.validateData();
    comboClassQchart.dataProvider = comboClassQData[d];
    comboClassQchart.validateData();
    comboRegionYchart.dataProvider = comboRegionYData[d];
    comboRegionYchart.validateData();
    comboClassYchart.dataProvider = comboClassYData[d];
    comboClassYchart.validateData();
    clusterNumQchart.dataProvider = clusterNumQData[d];
    clusterNumQchart.validateData();
    clusterValueQchart.dataProvider = clusterValueQData[d];
    clusterValueQchart.validateData();
    clusterNumYchart.dataProvider = clusterNumYData[d];
    clusterNumYchart.validateData();
    clusterValueYchart.dataProvider = clusterValueYData[d];
    clusterValueYchart.validateData();
    mekkoNumberQchart.dataProvider = mekkoNumberQData[d];
    mekkoNumberQchart.validateData();
    mekkoValueQchart.dataProvider = mekkoValueQData[d];
    mekkoValueQchart.validateData();
    mekkoNumberYchart.dataProvider = mekkoNumberYData[d];
    mekkoNumberYchart.validateData();
    mekkoValueYchart.dataProvider = mekkoNumberYData[d];
    mekkoValueYchart.validateData();
}