import React from 'react';

import Crossword from '@jaredreisinger/react-crossword';

const data = {
  across: {
    1: {
        clue: "A joining enzyme",
        answer: "LIGASE",
        row: 3,
        col: 2,
      },

    3: {
        clue: "Molecule of energy",
        answer: "ATP",
        row: 7,
        col: 3,
      },

    5: {
        clue: "A family of DNA sequences in prokaryotic organisms",
        answer: "CRISPR",
        row: 5,
        col: 0,
      },
    },

  down: {
    2: {
        clue: "When two chromosomes meet",
        answer: "CHIASMA",
        row: 1,
        col: 3,
      },

    4: {
        clue: "First cloned animal",
        answer: "SHEEP",
        row: 0,
        col: 7,
      },
    },
};

export default function CrosswordPage() {
  return <Crossword data={data} />;
}
