import type { SettingsPreset } from "../interfaces/SettingsPreset.interface";

export const SETTINGS_PRESETS: SettingsPreset[] = [
  {
    "label": "Melodi stegvis rörelse",
    "settings": {
      "startTone": {
        "random": false,
        "index": 3
      },
      "toneCombinationsPool": [
        [
          7,
          8
        ],
        [
          0,
          1
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          3
        ],
        [
          5,
          6
        ],
        [
          5,
          4
        ],
        [
          6,
          7
        ],
        [
          6,
          5
        ],
        [
          7,
          6
        ],
        [
          8,
          9
        ],
        [
          1,
          2
        ],
        [
          8,
          7
        ],
        [
          1,
          0
        ],
        [
          9,
          10
        ],
        [
          2,
          3
        ],
        [
          9,
          8
        ],
        [
          2,
          1
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 1,
      "highlightedTones": [
        0,
        3,
        7,
        10
      ],
      "helpLines": [
        0,
        3,
        7,
        10
      ]
    }
  },
  {
    "label": "Melodi terssprång",
    "settings": {
      "startTone": {
        "random": false,
        "index": 3
      },
      "toneCombinationsPool": [
        [
          7,
          8
        ],
        [
          0,
          1
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          3
        ],
        [
          5,
          6
        ],
        [
          5,
          4
        ],
        [
          6,
          7
        ],
        [
          6,
          5
        ],
        [
          7,
          6
        ],
        [
          8,
          9
        ],
        [
          1,
          2
        ],
        [
          8,
          7
        ],
        [
          1,
          0
        ],
        [
          9,
          10
        ],
        [
          2,
          3
        ],
        [
          9,
          8
        ],
        [
          2,
          1
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 10
      },
      "maxToneDiff": 2,
      "highlightedTones": [
        3,
        10
      ],
      "helpLines": [
        10,
        3
      ]
    }
  },
  {
    "label": "Melodi kvartssprång",
    "settings": {
      "startTone": {
        "random": false,
        "index": 3
      },
      "toneCombinationsPool": [
        [
          7,
          8
        ],
        [
          0,
          1
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          3
        ],
        [
          5,
          6
        ],
        [
          5,
          4
        ],
        [
          6,
          7
        ],
        [
          6,
          5
        ],
        [
          7,
          6
        ],
        [
          8,
          9
        ],
        [
          1,
          2
        ],
        [
          8,
          7
        ],
        [
          1,
          0
        ],
        [
          9,
          10
        ],
        [
          2,
          3
        ],
        [
          9,
          8
        ],
        [
          2,
          1
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          3,
          5,
          7
        ],
        [
          5,
          7
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          10
        ],
        [
          0,
          3
        ],
        [
          7,
          5
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 10
      },
      "maxToneDiff": 3,
      "highlightedTones": [
        3,
        10
      ],
      "helpLines": [
        10,
        3
      ]
    }
  },
  {
    "label": "Melodi slumpad startton",
    "settings": {
      "startTone": {
        "random": true,
        "index": 3
      },
      "toneCombinationsPool": [
        [
          7,
          8
        ],
        [
          0,
          1
        ],
        [
          3,
          4
        ],
        [
          4,
          5
        ],
        [
          4,
          3
        ],
        [
          5,
          6
        ],
        [
          5,
          4
        ],
        [
          6,
          7
        ],
        [
          6,
          5
        ],
        [
          7,
          6
        ],
        [
          8,
          9
        ],
        [
          1,
          2
        ],
        [
          8,
          7
        ],
        [
          1,
          0
        ],
        [
          9,
          10
        ],
        [
          2,
          3
        ],
        [
          9,
          8
        ],
        [
          2,
          1
        ],
        [
          3,
          5,
          7
        ],
        [
          3,
          5,
          0
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          5,
          7
        ],
        [
          5,
          3
        ],
        [
          5,
          0
        ],
        [
          6,
          3
        ],
        [
          7,
          10
        ],
        [
          0,
          3
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 12
      },
      "maxToneDiff": 4,
      "highlightedTones": [
        3,
        10
      ],
      "helpLines": [
        10,
        3
      ]
    }
  },
  {
    "label": "Inspirerad av J.Jersild",
    "settings": {
      "startTone": {
        "random": false,
        "index": 3
      },
      "toneCombinationsPool": [
        [
          0,
          3
        ],
        [
          1,
          0
        ],
        [
          2,
          3
        ],
        [
          6,
          5
        ],
        [
          8,
          7
        ],
        [
          7,
          10
        ],
        [
          9,
          10
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 3,
      "highlightedTones": [
        3,
        10
      ],
      "helpLines": [
        10,
        3
      ]
    }
  },
  {
    "label": "Intervall från grundton",
    "settings": {
      "startTone": {
        "random": true,
        "index": 7
      },
      "toneCombinationsPool": [
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          3,
          6
        ],
        [
          3,
          7
        ],
        [
          3,
          8
        ],
        [
          3,
          9
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 10
      },
      "maxToneDiff": 8,
      "helpLines": [
        3
      ],
      "highlightedTones": [
        3
      ]
    }
  },
  {
    "label": "Treklanger 1 - tonika",
    "settings": {
      "startTone": {
        "random": true,
        "index": 7
      },
      "toneCombinationsPool": [
        [
          3,
          5,
          7
        ],
        [
          7,
          5,
          3
        ],
        [
          5,
          7,
          10
        ],
        [
          3,
          7,
          5
        ],
        [
          7,
          3,
          5
        ],
        [
          5,
          7,
          3
        ],
        [
          5,
          3,
          7
        ],
        [
          10,
          7,
          5
        ],
        [
          0,
          3,
          5
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 8,
      "highlightedTones": [
        3,
        10
      ],
      "helpLines": [
        10,
        3
      ]
    }
  },
  {
    "label": "Treklanger grundläge (utom 7:e steget)",
    "settings": {
      "startTone": {
        "random": true,
        "index": 7
      },
      "toneCombinationsPool": [
        [
          3,
          5,
          7
        ],
        [
          4,
          6,
          8
        ],
        [
          5,
          7,
          9
        ],
        [
          6,
          8,
          10
        ],
        [
          0,
          2,
          4
        ],
        [
          1,
          3,
          5
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 8,
      "helpLines": [
        3,
        10
      ],
      "highlightedTones": [
        3,
        10,
        7,
        0
      ]
    }
  },
  {
    "label": "Treklanger grundläge (med 7:e steget)",
    "settings": {
      "startTone": {
        "random": true,
        "index": 7
      },
      "toneCombinationsPool": [
        [
          3,
          5,
          7
        ],
        [
          4,
          6,
          8
        ],
        [
          5,
          7,
          9
        ],
        [
          6,
          8,
          10
        ],
        [
          0,
          2,
          4
        ],
        [
          1,
          3,
          5
        ],
        [
          2,
          4,
          6
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 8,
      "helpLines": [
        3,
        10
      ],
      "highlightedTones": [
        3,
        10,
        7,
        0
      ]
    }
  },
  {
    "label": "Treklanger närmsta vägen (utom 7:e steget)",
    "settings": {
      "startTone": {
        "random": true,
        "index": 7
      },
      "toneCombinationsPool": [
        [
          3,
          5,
          7
        ],
        [
          4,
          6,
          8
        ],
        [
          3,
          6,
          8
        ],
        [
          3,
          5,
          8
        ],
        [
          2,
          4,
          7
        ],
        [
          2,
          5,
          7
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 8,
      "helpLines": [
        3,
        10
      ],
      "highlightedTones": []
    }
  },
  {
    "label": "Treklanger närmsta vägen (med 7:e steget)",
    "settings": {
      "startTone": {
        "random": true,
        "index": 7
      },
      "toneCombinationsPool": [
        [
          3,
          5,
          7
        ],
        [
          4,
          6,
          8
        ],
        [
          3,
          6,
          8
        ],
        [
          3,
          5,
          8
        ],
        [
          2,
          4,
          7
        ],
        [
          2,
          5,
          7
        ],
        [
          2,
          4,
          6
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 8,
      "helpLines": [
        3,
        10
      ],
      "highlightedTones": []
    }
  }
];