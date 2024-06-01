import React, { useState, useEffect } from 'react';

const FetchApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/questions/css/set1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Questions</h2>
      {data && (
        <ul>
          {data.map((question, index) => (
            <li key={index}>{question.question}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchApi;
