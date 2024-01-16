import './AboutStyle.css';

function About(props){
    return (
        <>
            {/* <div className='section'> */}
                <div className='section2'>
                    <h2 className="heading">{props.heading}</h2>
                    <p className='heading-subinfo'>{props.info}</p>
                </div>
            {/* </div> */}
        </>
    )
}

export default About; 