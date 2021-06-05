import React from 'react'
import Suzuya from '../images/suzuya.jpg'
export default () => (
    <div className="course py-5 px-2" id="about">
        <div className="d-flex flex-wrap justify-content-center">
            <div className="col-md-6 text-center pr-md-5 pr-0">
                <img src={Suzuya} className="img-fluid course-img" alt="Suzuya" width="80%" />

            </div>
            <div className="col-md-4 my-auto pl-md-5 pl-0">
                <h2><strong>
                    <strong>New Updates Everyday</strong>
                </strong></h2>
                <p className="pb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure hic vitae
                facilis
                deleniti. Ducimus dolor perspiciatis vero consequuntur unde dolorum quas aspernatur, hic
                        incidunt facilis illum odio distinctio. Voluptas!</p>

                <a href="" className="course-live py-3 px-md-4 px-5">Live</a>
                <a href="" className="course-recorded py-3 px-4 px-md-2 mx-3">Recorded</a>

            </div>
        </div>
    </div>
);

