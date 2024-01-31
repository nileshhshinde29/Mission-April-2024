import React from 'react'

function GlimpseOfPast() {
    return (
        <div><div class="sticky-top">
            <div>qqqqq</div>
            <div>qqqqq</div>
            <div>qqqqq</div>
            <div>qqqqq</div>
            <div>qqqqq</div>
        </div>
            <div className="container">
                <div className='row'>
                    {
                        Array(18).fill().map((item, index) => (
                            <div key={index} className="col-4 mb-3">
                                <div className="card">
                                    <div className="card-header">Header</div>
                                    <div className="card-body">
                                        <h5 className="card-title">Primary card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default GlimpseOfPast