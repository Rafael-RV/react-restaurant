import React from 'react';


export const Footer = () => {
    const footerStyle = {
        backgroundColor: 'rgb(226, 115, 115)',
        color: 'white',
        paddingTop: '10px' ,


    };

    return (
        <footer  style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <h4>Información de contacto</h4>
                        <p>Dirección: Calle Principal, Ciudad</p>
                        <p>Teléfono: (123) 456-7890</p>
                        <p>Email: ejemplo@email.com</p>
                    </div>

                    <div className="col-md-6">

                        <div className="row">
                          
                            <div className="col-md-6">
                                <h5>Reservaciones</h5>
                            </div>
                          
                            <div className="col-md-6">
                                <h5>Sobre Nosotros</h5>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    );
};


