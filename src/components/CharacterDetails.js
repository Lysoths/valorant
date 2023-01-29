import { useParams } from "react-router-dom";

const CharacterDetails = ({ newData }) => {
  const karakter = useParams();
  if (newData.filter((item) => item.uuid === karakter.karakter)) {
    return (
      <div>
        {newData &&
          newData
            .filter((item) => item.uuid === karakter.karakter)
            .map((ele) => (
              <div key={ele.uuid}>
                <div className='card mb-3 mt-4'>
                  <div className='row g-0'>
                    <div className='col-md-4 '>
                      <img
                        src={ele.fullPortrait}
                        className='img-fluid rounded-start'
                        alt='...'
                      />
                    </div>
                    <div className='col-md-8'>
                      <div className='card-body'>
                        <h5 className='card-title'>{ele.displayName}</h5>
                        <p className='card-text'>
                          <strong>Rol : </strong>
                          {ele.role.displayName}
                        </p>
                        <p className='card-text'>
                          <strong>Açıklama : </strong>
                          {ele.role.description}
                        </p>
                        <audio
                          className='card-footer w-100 mt-3  bg-transparent'
                          controls
                          src={ele.voiceLine.mediaList[0].wave}
                        ></audio>
                      </div>
                    </div>

                    <div className='accordion' id='accordionExample'>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingOne'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseOne'
                            aria-expanded='false'
                            aria-controls='collapseOne'
                          >
                            {ele.abilities[0].displayName}
                          </button>
                        </h2>
                        <div
                          id='collapseOne'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <strong>{ele.abilities[0].description}</strong>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingTwo'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            {ele.abilities[1].displayName}
                          </button>
                        </h2>
                        <div
                          id='collapseTwo'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingTwo'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <strong>{ele.abilities[1].description}</strong>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingThree'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            {ele.abilities[2].displayName}
                          </button>
                        </h2>
                        <div
                          id='collapseThree'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingThree'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <strong>{ele.abilities[2].description}</strong>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingFour'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseFour'
                            aria-expanded='false'
                            aria-controls='collapseFour'
                          >
                            {ele.abilities[3].displayName}
                          </button>
                        </h2>
                        <div
                          id='collapseFour'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingFour'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <strong>{ele.abilities[3].description}</strong>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    );
  }
  return <div>Aradığınız karaktere ulaşılamadı</div>;
};

export default CharacterDetails;
