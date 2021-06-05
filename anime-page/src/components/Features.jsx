import React from 'react'
import superthumb from "../images/superthumb.jpg"


export default () => (
    <div className="features px-5 py-5" id="contents">
        <h2 className="text-center"><strong><strong>BEST ANIMES AT YOUR FINGER TIPS...</strong></strong></h2>


        <div className="d-flex flex-wrap">
            <div className="col-md-4 col-12 p-2">
                <div className="card text-center py-4 my-2">
                    <div className="card-body">
                        <img src={superthumb} width="30%" alt="..." />
                        <p className="card-text pt-2 fs-6 font-monospace mt-3 fw-bold">Jujutsu Kaisen</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 p-2">
                <div className="card text-center py-4 my-2">
                    <div className="card-body">
                        <img src={superthumb} width="30%" alt="..." />
                        <p className="card-text pt-2 fs-6 font-monospace mt-3 fw-bold">My Hero Academia</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 p-2">
                <div className="card text-center py-4 my-2">
                    <div className="card-body">
                        <img src={superthumb} width="30%" alt="..." />
                        <p className="card-text pt-2 fs-6 font-monospace mt-3 fw-bold">Blue Excortist</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 p-2">
                <div className="card text-center py-4 my-2">
                    <div className="card-body">
                        <img src={superthumb} width="30%" alt="..." />
                        <p className="card-text pt-2 fs-6 font-monospace mt-3 fw-bold">Demon Slayer</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 p-2">
                <div className="card text-center py-4 my-2">
                    <div className="card-body">
                        <img src={superthumb} width="30%" alt="..." />
                        <p className="card-text pt-2 fs-6 font-monospace mt-3 fw-bold">Tokyo Ghoul</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 p-2">
                <div className="card text-center py-4 my-2">
                    <div className="card-body">
                        <img src={superthumb} width="30%" alt="..." />
                        <p className="card-text pt-2 fs-6 font-monospace mt-3 fw-bold">Full Metal Alchemist</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)