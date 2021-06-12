import React from 'react';
import './Carusel.css'
const Carusel = () => {
    return (
        <div>
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active frstSlider text-center">
                        <h1 className='text-light' style={{marginTop:'10%', fontSize:'70px'}}>RLAB</h1>
                        <h2 className='text-light'>Your First choice</h2>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam ducimus <br />  
                            perspiciatis totam dolores vitae quo esse porro repudiandae voluptate, eos, <br />
                            voluptatem provident, mollitia atque. Aut ducimus corporis eligendi alias.</p>
                    </div>
                    <div class="carousel-item secondSlider text-center">
                        <h1 className='text-light' style={{marginTop:'10%', fontSize:'70px'}}>Electric Devices</h1>
                        <h2 className='text-light'>Your choice</h2>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam ducimus <br />  
                            perspiciatis totam dolores vitae quo esse porro repudiandae voluptate, eos, <br />
                            voluptatem provident, mollitia atque. Aut ducimus corporis eligendi alias.</p>
                    </div>
                    <div class="carousel-item thirdSlider text-center">
                    <h1 className='text-light' style={{marginTop:'10%', fontSize:'70px'}}>IOT Devices</h1>
                        <h2 className='text-light'>Your IOT</h2>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error magnam ducimus <br />  
                            perspiciatis totam dolores vitae quo esse porro repudiandae voluptate, eos, <br />
                            voluptatem provident, mollitia atque. Aut ducimus corporis eligendi alias.</p>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carusel;