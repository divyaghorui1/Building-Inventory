// Vega-Lite specification
var spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "title": "Relationship between Year Acquired and Year Constructed",
    "description": "A scatter plot showing the relationship between year acquired and year constructed.",
    "data": {
      "url": "https://raw.githubusercontent.com/divyaghorui1/Assignment-3/main/building_inventory.csv"
    },
    "transform": [
      {
        "filter": "datum['Year Acquired'] !== '0' && datum['Year Constructed'] !== '0'"
      }
    ],
    "mark": "circle",
    "encoding": {
      "x": {
        "field": "Year Acquired",
        "type": "quantitative",
        "title": "Year Acquired",
        "scale": {"zero": false}
      },
      "y": {
        "field": "Year Constructed",
        "type": "quantitative",
        "title": "Year Constructed",
        "scale": {"zero": false}
      }
    }
};

// Embed the Vega-Lite visualization into the 'vis' div
vegaEmbed('#vis', spec);
