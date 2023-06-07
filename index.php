<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio</title>

    
    <!-- Dependencias-->
    <link rel="stylesheet" href="node_modules/eins-modal/dist/css/eins-modal.min.css">

    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
    <div class="navbar">
                <nav>
                    <ul>
                        <li><a href="#inicio">Inicio</a></li>
                        <li><a href="#briefcase">Portafolio</a></li>
                        <li><a href="#about-me">Sobre mí</a></li>
                    </ul>
                </nav>
            </div>
    </header>

    <section>
        <div class="hero" id="inicio">
          <div class="container">
            

            <img src="img/fondo_header.jpg" alt="">
        </div>
        </div><!-- Fin de container -->


        <div class="profile">
            <div class="square"></div>
            <div class="circle-trans"></div>
            <div class="circle"></div>
            <div class="profile-img">
                <img src="img/Rafa.png">
            </div>

            <div class="square-text">Rafael Antonio Irabien Criollo</div>
            <div class="square-text2"><span>ING. Desarrollo y Gestión de Software</span></div>
            <div class="contact-icon">
                <a href="https://github.com/RafaelIrabien/" target="_blank"><img src="img/github.svg" alt=""></a>
                <a href=""><img src="img/linkedin.svg" alt=""></a>
                <a data-modal-id="message"><img src="img/message.svg" alt=""></a>
            </div>

            <div class="square-text3">
                <a href="#about-me">
                    <span>Sobre mí</span>
                </a>
            </div>    
            
        </div>
    </section>


    <!-- Sección de Portafolio -->
    <section class="briefcase" id="briefcase">
        <div class="briefcase-section container">
            <h2><span>Portafolio</span></h2>
            <div class="briefcase-grid">
                <div><a data-modal-id="gestor"><img src="img/Gestor de archivos.png" alt=""></a></div>
                <div><a data-modal-id="portafolio"><img src="img/Portafoli.png" alt=""></a></div>
            </div>
        </div>
    </section>

    
    <!-- Sección de Habilidades -->
    <section class="skills">
        <div class="skill container">
        <div class="knowledge-part">
            <h2><span>Conocimientos</span></h2>
            <div class="knowledge">
                <div>
                    <img src="img/html-icon.png" alt="">
                    <h3>HTML</h3>
                </div>
         
                <div>
                    <img src="img/css-icon.png" alt="">
                    <h3>CSS</h3>
                </div>
           
                <div>
                    <img src="img/js-icon.png" alt="">
                    <h3>JavaScript</h3>
                </div>

                <div>
                    <img id="PHP" src="img/php2.png" alt="">
                    <h3>PHP</h3>
                </div>

                <div>
                    <img id="MYSQL" src="img/mysql.png" alt="">
                    <h3>MySQL</h3>
                </div>
            </div>
        </div>

        <div class="tools-part">
            <h2><span>Herramientas</span></h2>
            <div class="tools">
                <div>
                    <img src="img/github-icon.png" alt="">
                    <h3>GitHub</h3>
                </div>
                <div>
                    <img src="img/vsc-icon.png" alt="">
                    <h3>Visual Studio</h3>
                </div>
            </div>
        </div>
        </div>
    </section>


    <!-- Sección de Sobre mi -->
    <section class="about" id="about-me">
        <div class="about-flex container">
            <div class="about-info">
                <p>Actualmente graduado como Ingeniero en Desarrollo y Gestión de Software. 
                    Apasionado por el desarrollo y el diseño de aplicaciones web. Preparado para utilizar mis habilidades y pasión para impulsar la misión de una compañía. 
                    Aporto una actitud positiva y la voluntad y motivación para aprender nuevas cosas.
                </p>
            </div>

            <div class="social">
                <a href=""><img src="img/github.svg" alt=""></a>
                <a href=""><img src="img/linkedin.svg" alt=""></a>
                <a data-modal-id="message"><img src="img/message.svg" alt=""></a>
            </div>
        </div>
    </section>



                   <!-- MODALS -->

    <!-- Modal Gestor -->
    <div id="gestor" class="eins-modal" data-options="openTransition: expandIn; openDuration: 200;">
        <div class="eins-modal-content">
            <div class="eins-modal-close"></div>
                <div class="pw-content">
                    <div class="eins-modal-preview">
                        <img src="img/Gestor de archivos.png" alt="">
                    </div>
                  <div class="eins-modal-text">
                        <p>Descripción</p>
                    
                    <div class="eins-modal-text-2">
                        <span>ENLACE: </span><a href=" https://arturohernandezwolbrie.com.mx/Plataforma/index.php">https://arturohernandezwolbrie.com.mx/Plataforma/index.php
                       </a>
                    </div>
                    <div class="eins-modal-text-3">
                        <span>Tecnologías Usadas:</span>
                        <div class="eins-modal-tec">
                            <img src="img/html-icon.png" alt="">
                            <img src="img/css-icon.png" alt="">
                            <img src="img/js-icon.png" alt="">
                            <img id="php" src="img/php2.png" alt="">
                            <img id="mysql" src="img/mysql.png" alt="">
                        </div>
                    </div>
                  </div>
                </div>
        </div>
    </div>

    <!-- Modal Portafolio -->
    <div id="portafolio" class="eins-modal" data-options="openTransition: expandIn; openDuration: 200;">
        <div class="eins-modal-content">
            <div class="eins-modal-close"></div>
            EJEMPLO DE PRUEBA

            <button class="eins-modal-close-button">OK</button>
        </div>
    </div>




    <!-- Formulario -->
    <div id="message" class="eins-modal" data-options="openTransition: expandIn; openDuration: 200;">
        <div class="eins-modal-content">
            <div class="eins-modal-close"></div>
            
            <form action="https://formspree.io/f/xrgvwljv" method="POST" class="form">
                <label>
                    Tu Correo Electrónico:
                    <input type="email" name="email">
                </label>

                <label>
                    Tu Mensaje:
                    <textarea name="message"></textarea>
                </label>

                <button type="submit">Enviar</button>
            </form>

           
        </div>
    </div>


    <script src="node_modules/eins-modal/dist/js/eins-modal.min.js"></script>
    
</body>
</html>