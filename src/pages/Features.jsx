import featuresData from '../assets/data/features.json';

const Card = ({ label = 'Super Fast', desc = 'Lorem, ipsum dolr adipisicing elit. Molestias, eaque?', icon = 'material-symbols:check-circle-rounded' }) => {

  return (
    <div className="col-lg-5 card p-3">
      <div className="mb-3">
        <span style={{ fontSize: '3rem', color: '#4F5876' }} className="iconify" data-icon={icon} />
      </div>
      <div className="">
        <h5 className=" fw-bold">{label}</h5>
        <p className="mb-0">{desc}</p>
      </div>
    </div>
  )
}

const Features = () => {

  return (
    <div id='features' className='pages container-fluid px-sm-5 text-center'>
      <div>
        <h1 className="mb-3">Features</h1>
        <p className="m-auto mb-5" style={{ maxWidth: '30rem' }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur laborum impedit id aperiam iure ab, dolorem non ducimus consequuntur earum.
        </p>

        <div className="row justify-content-center gap-3 mx-3">
          {featuresData.data.map(({ id, ...e }) => <Card key={id} {...e} />)}
        </div>
      </div>
    </div>
  )
}

export default Features