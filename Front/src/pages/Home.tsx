import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToAdmin = () => {
    navigate('/admin');
  };

  return (
    <div>
      <button onClick={goToAdmin}>
        Go to Admin
      </button>
    </div>
  );
};

export default Home;
