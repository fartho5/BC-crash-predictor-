// pages/index.js import { useState } from 'react';

export default function Home() { const [lastResults, setLastResults] = useState([2.31, 1.05, 3.22, 1.89, 2.75]); const [prediction, setPrediction] = useState(null);

const predictNext = () => { // Dummy logic for prediction based on average const avg = lastResults.reduce((a, b) => a + b, 0) / lastResults.length; const next = (avg + Math.random()).toFixed(2); setPrediction(next); };

return ( <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', background: '#f0f0f0', minHeight: '100vh' }}> <h1 style={{ color: '#222' }}>BC Crash Predictor</h1> <p>Enter recent crash values (last 5 rounds):</p> <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}> {lastResults.map((val, index) => ( <input key={index} type="number" value={val} onChange={(e) => { const newResults = [...lastResults]; newResults[index] = parseFloat(e.target.value); setLastResults(newResults); }} style={{ width: '60px', padding: '5px' }} /> ))} </div> <button onClick={predictNext} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#222', color: 'white', border: 'none', borderRadius: '5px' }}> Predict Next Crash </button>

{prediction && (
    <div style={{ marginTop: '20px', fontSize: '18px' }}>
      <strong>Predicted Next Crash:</strong> <span>{prediction}x</span>
    </div>
  )}
</div>

); }

