import { Link } from 'react-router-dom';

function HomeView() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <h1>Home</h1>
        <Link to="/animator">
          <button>Animator</button>
        </Link>
      </div>
    );
  }
  
  export default HomeView;