import { useParams } from 'react-router';
import './Profiles.css';
import userData from '../../userData';


//http://wallpapere.org/wp-content/uploads/2012/02/black-and-white-city-night.png
const Profile = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className='firstDiv'>
      <div>
        {userData.map(element => {
          if (element.id == id) {
            return (
              <div>
                <img className='AuthorImage' src={element.image} alt="Pictures" />
                <div className='AuthorName'>{element.name}</div>
                <p className='AuthorResume'>{element.resume}</p>
              </div>
            )
          }
        })}
      </div>
    </div>

  )
}

export default Profile