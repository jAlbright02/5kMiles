import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const backendURL = import.meta.env.MODE === 'development' ? '' : 'https://youshouldntfindthis.jamesalbright.website';

export default function Bikes() {
  const [bikes, setBikes] = useState<any[]>([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBikes = async () => {
        try {
            
            const res = await fetch(`${backendURL}/api/bikes`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            })

            if (res.ok) {
                const bikeList = await res.json();
                console.log(bikeList);
                setBikes(bikeList);
            } else {
                navigate('/');
            }

        } catch (err) {
            console.error('Failed to fetch bikes:', err);
            navigate('/');
        }
    };

    fetchBikes();
  }, [navigate]);

  return (
    <div className='bike-grid'>
        {bikes.map((bike, idx) => (
            <div key={idx} className='bike-card'>
                <img src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6PKLRtitCbXG4fWCl3e_vVJz_uR_Nfs9AvA9uOzVTAJomCHy6qU8MWFoom-MADzKbiOLp-Y5bKeIm5b463-5qmF2Ai2k5jSas8as7RIp8TdOydz5U1PzYxZkGdk9df58S_18VdjT8Zp9C/s1600/2009_fz6-s2_abs_graphite20dnmg_ps2004_1.png'/>
                <div className='bike-card-content'>
                    <h3>{bike.make} {bike.model} {bike.year}</h3>
                    <p>Some text here to fill it out</p>
                </div>
            </div> 
        ))
        }
    </div>
  );
}
