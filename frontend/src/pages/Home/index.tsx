import React from 'react';

import Presentation from '../../ui/partials/index/_presentation';
import Advantages from '../../ui/partials/index/_advantages';
import FrequentQuestions from '../../ui/partials/index/_frequent-questions';

function Home() {
  return (
    <>
        <head>
            <title>e-diaristas - Home</title>
        </head>
        <div>
            <Presentation />
            <Advantages />
            <FrequentQuestions />
        </div>
    </>
  )
}

export default Home;