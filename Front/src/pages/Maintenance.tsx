import {useState } from 'react';
// import { useNavigate } from 'react-router-dom';

//const backendURL = import.meta.env.MODE === 'development' ? '' : 'https://youshouldntfindthis.jamesalbright.website';

type MaintenanceTask = {
  task: string;
  interval: number;
  previousMileage: number;
};

const defaultTasks: MaintenanceTask[] = [
  { task: "Chain Lube", interval: 800, previousMileage: 0 },
  { task: "Oil Change", interval: 5000, previousMileage: 0 },
  { task: "Brakes", interval: 10000, previousMileage: 0 },
  { task: "Air Filter", interval: 12000, previousMileage: 0 },
  { task: "Coolant Replacement", interval: 24000, previousMileage: 0 },
  { task: "Spark Plugs", interval: 16000, previousMileage: 0 },
  { task: "Tire Pressure", interval: 1000, previousMileage: 0 },
  { task: "Battery Check", interval: 6000, previousMileage: 0 },
  { task: "Fork Oil", interval: 20000, previousMileage: 0 },
  { task: "Chain Replacement", interval: 20000, previousMileage: 0 },
];


export default function MaintenanceSchedule() {
  const [tasks, setTasks] = useState(defaultTasks);
  
  const handleUpdate = (index: number, newValue: string) => {
    const updated = [...tasks];
    if (newValue === "") {
        updated[index].previousMileage = 0;
    } else {
        const num = Number(newValue);
        if (!isNaN(num)) updated[index].previousMileage = num;
    }
    setTasks(updated);
  };


  //const navigate = useNavigate();

  return (
    <div className="maintenance-schedule">
        <h2 className="schedule-title">Maintenance Schedule</h2>
        <div className="card-list">
        {tasks.map((task, idx) => (
            <div className="task-card" key={idx}>
            <div className="card-row">
                <strong>Task:</strong> <span>{task.task}</span>
            </div>
            <div className="card-row">
                <strong>Previous Mileage:</strong>
                <input
                type="number"
                value={task.previousMileage === 0 ? "" : task.previousMileage}
                onChange={(e) => handleUpdate(idx, e.target.value)}
                />
            </div>
            <div className="card-row">
                <strong>Interval:</strong> <span>{task.interval} km</span>
            </div>
            <div className="card-row">
                <strong>Next Due:</strong>{" "}
                <span>{task.previousMileage + task.interval} km</span>
            </div>
            <div className="card-row">
                <button onClick={() => console.log('aa')}>Save</button>
            </div>
            </div>
        ))}
        </div>
    </div>
    );
}

/*
Maintenance Sheet

Bike
VIN

Date
Maintenance Performed
Mileage
Cost
Notes
*/
