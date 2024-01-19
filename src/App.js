import './App.css';
import React, { useState } from 'react';

function App() {
  const [form, setForm] = useState({
    day: null,
    month: null,
    year: null,
  })
  const [diff, setDiff] = useState({
    day: "--",
    month: "--",
    year: "--",
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    let objectDate = new Date()
    let currentDay = objectDate.getDate();
    let currentMonth = objectDate.getMonth() + 1;
    let currentYear = objectDate.getFullYear();

    setDiff({
      year: Math.abs(form.year - currentYear),
      month: Math.abs(form.month - currentMonth),
      day: Math.abs(form.day - currentDay),
    })
  }

  return (
    <div className="App">
      <div className='wrapper'>
       <form className='form flex' onSubmit={handleSubmit}>
          <div className='inputs day flex'>
            <label  id='day'>DAY</label>
            <input 
              onChange={(e) => setForm({ ...form, day: e.target.value })}
              value={form.day} 
              type="text" 
              id='day' 
              placeholder='DD' 
              maxlength="2"
            />
          </div>
          <div className='inputs month flex'>
            <label  id='month'>MONTH</label>
            <input 
              onChange={(e) => setForm({ ...form, month: e.target.value })} 
              value={form.month} 
              type="text" 
              id='month' 
              placeholder='MM' 
              maxlength="2"
            />
          </div>
          <div className='inputs year flex'>
            <label  id='year'>YEAR</label>
            <input 
              onChange={(e) => setForm({ ...form, year: e.target.value })} 
              value={form.year} 
              type="text" 
              id='year' 
              placeholder='YYYY' 
              maxlength="4"
            />
          </div>
          <button type="submit" className='btn'><svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg></button>
        </form>
        <div className='result'>
         <h1 className='show-year'><span>{diff.year}</span> years</h1>
         <h1 className='show-month'><span>{diff.month}</span> months</h1>
         <h1 className='show-days'><span>{diff.day}</span> days</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
