const Map = ({ mapData }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {mapData &&
        mapData.map((item) => (
          <div className='col' key={item.uuid}>
            <div className='card h-100'>
              <img src={item.splash} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{item.displayName}</h5>
                <p className='card-text  '>{item.description}</p>
              </div>
              <div className='card-footer'>
                <small className='text-muted'>
                  Koordinat : {item.coordinates}
                </small>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Map;
