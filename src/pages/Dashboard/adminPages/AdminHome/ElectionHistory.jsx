import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingSpinner from '../../../shared/LoadingSpinner';

const ElectionHistory = () => {
  const {user} = useContext(AuthContext)
  const [elections, setElections] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(`${import.meta.env.VITE_URL}/all-elections/admin/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        setElections(data)
        setLoading(false)
      })
  }, [])
  if (loading) {
    return <LoadingSpinner />
  }
  if (!Array.isArray(elections) || elections.length === 0) {
    return <p>No election data available.</p>;
  }
  const statusCounts = {
    completed: 0,
    pending: 0,
    ongoing: 0,
    published: 0,
  };

  elections.forEach(election => {
    statusCounts[election.status]++;
  });

  const pieData = Object.entries(statusCounts).map(([status, count]) => ({
    name: status,
    value: count,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className='bg-white p-8 mt-8 rounded shadow text-slate-700 overflow-hidden'>
      <h2 className='text-2xl font-semibold mb-4 uppercase'>Election History</h2>
      <div className='flex items-center justify-center'>
        <ResponsiveContainer width='80%' height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              outerRadius={100}
              fill='#8884d8'
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className='flex justify-center mt-4'>
        {pieData.map((entry, index) => (
          <div key={index} className='text-center mx-4'>
            <div style={{ backgroundColor: COLORS[index % COLORS.length] }} className='w-4 h-4 mx-auto rounded-full'></div>
            <p className='mt-1'>{entry.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectionHistory;
