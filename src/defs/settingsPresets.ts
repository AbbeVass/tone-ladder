import type { SettingsPreset } from "../interfaces/SettingsPreset.interface";

export const SETTINGS_PRESETS: SettingsPreset[] = [
  {
    "label": "Inspired by J.Jersild",
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
      "maxToneDiff": 3
    }
  },
  {
    "label": "Triads step 1",
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
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 9
      },
      "maxToneDiff": 8
    }
  },
  {
    "label": "Triads step 2",
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
          0,
          3,
          5
        ],
        [
          10,
          7,
          5
        ],
        [
          5,
          3,
          0
        ],
        [
          7,
          5,
          10
        ],
        [
          3,
          5,
          0
        ],
        [
          7,
          10,
          5
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 12
      },
      "maxToneDiff": 8
    }
  },
  {
    "label": "Triads step 3",
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
          0,
          3,
          5
        ],
        [
          10,
          7,
          5
        ],
        [
          5,
          3,
          0
        ],
        [
          7,
          5,
          10
        ],
        [
          3,
          5,
          0
        ],
        [
          7,
          10,
          5
        ],
        [
          10,
          5,
          7
        ],
        [
          5,
          10,
          7
        ],
        [
          5,
          0,
          3
        ],
        [
          0,
          5,
          3
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 12
      },
      "maxToneDiff": 8
    }
  },
  {
    "label": "Melodic movement step 1",
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
        "length": 12
      },
      "maxToneDiff": 2
    }
  },
  {
    "label": "Melodic movement step 2",
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
          5,
          7
        ],
        [
          3,
          6
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
          6,
          3
        ],
        [
          0,
          3
        ],
        [
          7,
          3
        ]
      ],
      "melodyLength": {
        "random": false,
        "length": 12
      },
      "maxToneDiff": 3
    }
  }
];