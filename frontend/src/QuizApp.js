import React, { useState } from 'react';

function QuizApp() {
  const [topic, setTopic] = useState(null);
  const [set, setSet] = useState(null);

  function loadTopic(topic) {
    setTopic(topic);
    setSet(null); // Reset set when a new topic is selected
  }

  function loadSet(set) {
    setSet(set);
  }

  return (
    <div>
      <ul>
        <li><button onClick={() => loadTopic('html')}>HTML</button></li>
        <li><button onClick={() => loadTopic('css')}>CSS</button></li>
        <li><button onClick={() => loadTopic('bootstrap')}>Bootstrap</button></li>
      </ul>
      {topic && (
        <div>
          <h2>{topic.toUpperCase()}</h2>
          <ul>
            <li><button onClick={() => loadSet(1)}>Set 1</button></li>
            <li><button onClick={() => loadSet(2)}>Set 2</button></li>
            {/* Add more sets as needed */}
          </ul>
        </div>
      )}
      {set && (
        <div>
          <h2>{topic.toUpperCase()} - Set {set}</h2>
          <p>This is the quiz for {topic} - Set {set}</p>
        </div>
      )}
    </div>
  );
}

export default QuizApp;
