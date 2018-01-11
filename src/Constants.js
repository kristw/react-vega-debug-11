/*
 *
 * Constants
 *
 */
export const treeSpec = {
  "width": 300,
  "height": 300,

  "data": [
    {
      "name": "tree",
      "transform": [
        {
          "type": "stratify",
          "key": "id",
          "parentKey": "parent"
        },
        {
          "type": "tree",
          "method": "tidy",
          "size": [{ "signal": "height" }, { "signal": "width" }],
          "as": ["y", "x", "depth", "children"]
        }
      ]
    },
    {
      "name": "links",
      "source": "tree",
      "transform": [
        {
          "type": "treelinks",
          "key": "id"
        },
        {
          "type": "linkpath",
          "orient": "horizontal",
          "shape": "diagonal"
        }
      ]
    }
  ],

  "scales": [
    {
      "name": "color",
      "type": "ordinal",
      "range": { "scheme": "category20" }
    }
  ],

  "marks": [
    {
      "type": "path",
      "from": { "data": "links" },
      "encode": {
        "update": {
          "path": { "field": "path" },
          "stroke": { "value": "#ccc" }
        }
      }
    },
    {
      "type": "symbol",
      "from": { "data": "tree" },
      "key": "id",
      "interactive": true,
      "encode": {
        "enter": {
          "size": { "value": 400 },
          "stroke": { "value": "black" }
        },
        "update": {
          "x": { "field": "x" },
          "y": { "field": "y" },
          "fill": { "scale": "color", "field": "level" }
        }
      }
    }
  ]
};

export const treeOne = [
  {
    "id": "1"
  }, {
    "id": "2",
    "parent": "1"
  }, {
    "id": "3",
    "parent": "1"
  }, {
    "id": "4",
    "parent": "1"
  }, {
    "id": "5",
    "parent": "1"
  }
];


export const treeTwo = [
  {
    "id": "10"
  }, {
    "id": "11",
    "parent": "10"
  }, {
    "id": "3",
    "parent": "10"
  }
];