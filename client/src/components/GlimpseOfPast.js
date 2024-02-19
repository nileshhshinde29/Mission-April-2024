import React, { useEffect, useState } from 'react'
import { getMoments } from '../services/moments.services'
import { useNavigate } from 'react-router-dom'

function GlimpseOfPast() {

    const [data, setData] = useState([])
    const navigate = useNavigate()

    const getAllData = () => {

        getMoments().then((res) => setData(res.data))
            .catch((e) => console.log(e))


    }

    useEffect(() => {
        getAllData()
    }, [])



    return (
        <div >
            <div className="container">
                <div className='row'>
                    {
                        data.map((item, index) => (
                            <div key={index} className="col-4 mb-3">
                                <div className="card">
                                    <div className="card-header">{item.title}  <button className="" onClick={() => navigate('/add')}>edit</button></div>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.description}</h5>
                                        <p className="card-text">{item.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default GlimpseOfPast