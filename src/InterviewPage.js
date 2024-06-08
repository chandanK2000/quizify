import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InterviewPage.css';
import { jsPDF } from 'jspdf';
import { Button } from 'react-bootstrap';
import { FaDownload, FaEye, FaEyeSlash } from 'react-icons/fa'; 

const InterviewPage = () => {
  const { subject } = useParams();
  const [interviewData, setInterviewData] = useState([]);
  const [visibleAnswers, setVisibleAnswers] = useState({});

  useEffect(() => {
    const fetchInterviewData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/interviews/${subject}`);
        if (!response.ok) {
          throw new Error('Failed to fetch interview data');
        }
        const data = await response.json();
        setInterviewData(data);

        // Initialize visibleAnswers to show all answers by default
        const initialVisibleAnswers = {};
        data.forEach((interview) => {
          interview.questions.forEach((item) => {
            initialVisibleAnswers[item._id] = true;
          });
        });
        setVisibleAnswers(initialVisibleAnswers);
      } catch (error) {
        console.error('Error fetching interview data:', error);
      }
    };

    fetchInterviewData();
  }, [subject]);

  // Calculate the total number of questions
  const totalQuestions = interviewData.reduce((acc, interview) => acc + interview.questions.length, 0);

  const toggleAnswerVisibility = (questionId) => {
    setVisibleAnswers((prevVisibleAnswers) => ({
      ...prevVisibleAnswers,
      [questionId]: !prevVisibleAnswers[questionId],
    }));
  };

  //download pdf functionality
  const downloadPDF = () => {
    const doc = new jsPDF();
    let yOffset = 10;
    const pageWidth = doc.internal.pageSize.width - 20; // Adjusted for left margin

    interviewData.forEach((interview, index) => {
      doc.setFontSize(14);
      doc.text(`Interview ${index + 1} - ${subject.toUpperCase()}`, 10, yOffset);
      yOffset += 10;

      interview.questions.forEach((item, idx) => {
        doc.setFontSize(12);

        // Draw question
        const questionText = `Q.${index * interview.questions.length + idx + 1}: ${item.question}`;
        doc.text(questionText, 10, yOffset);

        // Calculate height of question text
        const questionTextHeight = doc.getTextDimensions(questionText).h;

        // Increment yOffset
        yOffset += questionTextHeight + 5;

        // Draw answer with text wrapping
        const answerText = `Ans: ${item.answer}`;
        const splitAnswer = doc.splitTextToSize(answerText, pageWidth);
        doc.text(splitAnswer, 15, yOffset);

        // Calculate height of answer text
        const answerTextHeight = doc.getTextDimensions(splitAnswer).h;

        // Increment yOffset
        yOffset += answerTextHeight + 10;
      });

      // Add space between interviews
      yOffset += 10;
    });

    doc.save(`${subject}_interview_questions.pdf`);
  };



  return (
    <div className="interview-container">
      <div className='headings'>
        <div>
          <h1 className="interview-heading">Top {totalQuestions} {subject.toUpperCase()} Interview Questions and Answers For Freshers & Experienced (With PDF)</h1>
          <h4 className="interview-subheading">Technical Interview Questions</h4>
        </div>
        <div>
          <Button className="download-pdf-button" onClick={downloadPDF}><FaDownload /> Download PDF</Button>

        </div>
      </div>
      

      {interviewData !== null && interviewData.length > 0 ? (
        <ol className="interview-list">
          {interviewData.map((interview, index) => (
            <li key={index} className="interview-item">
              <ul className="question-list">
                {interview.questions.map((item, idx) => (
                  <li key={idx} className="question-item">
                    <strong className="question-label">Q.{index * interview.questions.length + idx + 1}:</strong> {item.question}
                    <br />
                    <button
                      className="toggle-button"
                      onClick={() => toggleAnswerVisibility(item._id)}
                    >
                      {visibleAnswers[item._id] ? <><FaEyeSlash />  Hide Answer</> : <><FaEye />  Show Answer</>}
                    </button> 
                    {visibleAnswers[item._id] && (
                      <div className='answer_container'>
                        <strong className="answer-label">Ans:</strong> <span className="answer_background">{item.answer}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      ) : interviewData === null ? (
        <p className="loading-message">Loading...</p>
      ) : (
        <p className="no-data-message">No interview data available for {subject}</p>
      )}
    
    </div>
  );
};

export default InterviewPage;
