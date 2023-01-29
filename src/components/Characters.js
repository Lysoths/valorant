import { Link } from "react-router-dom";

const Characters = ({ newData }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {newData &&
        newData.map((item) => (
          <div className='col' key={item.uuid}>
            <div className='card h-100'>
              <img src={item.bustPortrait} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{item.displayName}</h5>
                <p className='card-text  '>{item.description}</p>
              </div>
              <div className='card-footer'>
                <Link
                  className='btn btn-danger w-100'
                  to={`/detay/${item.uuid}`}
                >
                  Detaylar
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Characters;
