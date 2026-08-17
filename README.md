# tone-ladder

Copyright (C) 2026 Abbe Andersson Vass

*Made in collaboration with Anna Andersson Vass*

## Description

tone-ladder is an educational tool for generating short musical melodies and displaying them on a tonal ladder to help practice tonal relationships. As visual guidance, the complete tonal ladder is displayed as a staircase next to the generated melodies.

The melodies are generated based on a set of rules managed on the settings page (`/tone-ladder/settings`). These rules are as follows:
- The first tone is either decided by the user or random. If it's random, then the initial tone combination will be selected randomly instead of being one that starts with a specific tone. Practically this means that tones that aren't in the first position of any combination will never be the first tone of a melody if the first tone is set to random.
- The number of tones in a melody is either decided by the user or random. A melody can be at least 4 tones and at most 15.
- Tone combinations will be put together to form the melody. The user can choose which combinations are used from the combinations provided in `src/defs/toneCombinations.ts`. The same combination will never repeatedly be used multiple times after each other without anything else in between. More combinations will result in more differing melodies.
- The maximum difference between two tones in the melody is set by the user. Chosen tone combinations with larger difference than this between its tones will not be used, neither will combinations which first tone is to far of the previous tone.
- Beginning with the start tone, if it's not random, possible combinations will be randomly picked and added to the melody until it has the decided length.
- If there's at any point in the generating process not any tone combinations that fit as the next part of the melody, for example if there's no combination that begins with the melody's start tone or if there's only space for a single tone more in the melody, then a single random tone will be added instead that's within the maximum tonal difference.

The project has a few prepared settings packages (*presets*). These can be selected on the settings page and will update the current settings. A user can save their own preferred settings as a settings package locally in their browser by writing a name for the package in the first input field on the page and click the adjacent *Save* button.

This preoject is only available through [github-pages](https://abbevass.github.io/tone-ladder/) (if you don't host it locally) so **all changes are stored locally** and can not be accessed from another browser.

## Data storage

The website stores the users current settings, latest generated melody and saved settings packages for user convenience. All this data is stored locally in the browser and does not get shared with anyone. The website does not store any further history of melodies or settings, besides if you save your settings as a settings package or download the stored data by clicking the button for downloading debug data on the home page (`/tone-ladder/`).

If you wish to delete all stored data, you can do this by deleting the browsing data for this website.

## AI declaration

*GPT-5 mini* have been used in `src/styles/svg.css` to tweek the CSS and responsiveness of the SVGs and their containers on the home page to make them scale correctly.

## License

The tone-ladder project is licensed under the terms of the MIT License. See the file LICENSE for the full license text.
