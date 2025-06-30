import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  padding: 2.5rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  border-radius: 24px;
  box-shadow: 0 8px 40px rgba(108, 92, 231, 0.12);
  margin: 2rem auto;
  width: 95%;
  max-width: 1200px;
  border: 1px solid rgba(255,255,255,0.3);
  backdrop-filter: blur(10px);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  background: linear-gradient(90deg, #6c5ce7, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.5px;
`;

const Subtitle = styled.p`
  color: #636e72;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ChartContainer = styled.div`
  width: 100%;
  height: 380px;
  margin: 2rem 0;
  position: relative;
`;

const PulseCircle = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(108,92,231,0.1) 0%, rgba(108,92,231,0) 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const CitySelector = styled.select`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #dcdde1;
  background: white;
  color: #2d3436;
  font-weight: 500;
`;

export const LifestyleMeter = () => {
  const [lifestyleData, setLifestyleData] = useState([]);
  const [city, setCity] = useState('Tokyo');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/lifestyle?city=${city}`)
      .then((res) => {
        const raw = res.data;

        const formatted = [
          { metric: 'Internet', score: raw.internet },
          { metric: 'Safety', score: raw.safety },
          { metric: 'Nightlife', score: raw.nightlife },
          { metric: 'Wellness', score: raw.mental_wellness },
          { metric: 'Cost', score: raw.cost },
          { metric: 'Community', score: raw.community },
        ];

        setLifestyleData(formatted);
      })
      .catch((err) => {
        console.error('Error fetching lifestyle data:', err);
      });
  }, [city]);

  return (
    <Container>
      <Header>
        <Title>Nomad Lifestyle Score</Title>
        <Subtitle>
          Our vibrant rating system evaluates what truly matters for digital nomads - 
          combining hard data with community experiences
        </Subtitle>
        <CitySelector value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="Tokyo">Tokyo</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Bali">Bali</option>
        </CitySelector>
      </Header>

      <ChartContainer>
        <PulseCircle />
        <ResponsiveContainer>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={lifestyleData}>
            <PolarGrid stroke="#e0e3e6" gridType="circle" />
            <PolarAngleAxis 
              dataKey="metric" 
              tick={{ fill: '#2d3436', fontSize: 12, fontWeight: 600 }}
            />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#6c5ce7"
              fill="#6c5ce7"
              fillOpacity={0.2}
              strokeWidth={2}
              animationDuration={1800}
            />
            <Tooltip 
              contentStyle={{
                background: 'rgba(255,255,255,0.95)',
                borderRadius: '12px',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)',
                backdropFilter: 'blur(10px)',
                fontSize: '14px'
              }}
              itemStyle={{
                color: '#6c5ce7',
                fontWeight: 600
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  );
};
