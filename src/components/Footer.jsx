import React from 'react';


export const Footer = () => {
    const footerStyle = {
        backgroundColor: 'rgb(226, 115, 115)',
        color: 'white',
        

    };

    return (
        <footer className="footer" style={footerStyle}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">

                        <h4>Información de contacto</h4>
                        <p>Dirección: Calle Principal, Ciudad</p>
                        <p>Teléfono: (123) 456-7890</p>
                        <p>Email: ejemplo@email.com</p>
                    </div>
                  
                    <div className="col-md-6">
                       
                            <h5 className='Fh5'> Inicio</h5>
                            <h5 className='Fh5'> Reservaciones</h5>
                            <h5 className='Fh5'> Menús</h5>
                            <h5 className='Fh5'> Contacto</h5>
                        
                    </div>
                </div>
            </div>
        </footer>
    );
};


