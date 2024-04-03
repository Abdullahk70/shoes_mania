import React, { useState, useEffect } from 'react';
import './TeamTable.css';

const mockData = [
  { name: 'Team A', scores: [10, 15, 20, 25, 30, 35, 40] },
  { name: 'Team B', scores: [20, 25, 30, 35, 40, 45, 50] },
  { name: 'Team C', scores: [30, 35, 40, 45, 50, 55, 60] },
  { name: 'Team D', scores: [40, 45, 50, 55, 60, 65, 70] },
];

const TeamTable = () => {
  const [visibleColumns, setVisibleColumns] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleColumns(prev => (prev < mockData[0].scores.length ? prev + 1 : prev));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="team-table">
      <table style={{marginTop:"200px"}}>
        <thead>
          <tr>
            <th>Team</th>
            {mockData[0].scores.slice(0, visibleColumns).map((_, index) => (
              <th key={index}>Round {index + 1}</th>

            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((team, teamIndex) => (
            <tr key={teamIndex}>
              <td>{team.name}</td>
              {team.scores.slice(0, visibleColumns).map((score, index) => (
                <td key={index}>
                  <ScoreAnimation score={score} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ScoreAnimation = ({ score }) => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 200);
  
      return () => clearTimeout(timeout);
    }, []);
  
    return <div className={`score ${isVisible ? 'visible' : ''}`}>{score}</div>;
  };
  

export default TeamTable;