import * as React from "react"
import '@fontsource/rubik'
import styled from "styled-components"
import './styles.css'
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Helmet } from "react-helmet"
import { useEffect } from "react"


export const LogoStyled = styled.div`
    font-size: 46px;
    font-family: "Rubik", "sans-serif";
    color: black;
    padding: 8px;
    justify-self: center;
`
export const Logo = () => {
  return <LogoStyled><b>&lt;H</b><span style={{ color: 'rgb(241, 151, 32)' }}>old</span><b>TML/&gt;</b></LogoStyled>
}
 
const IndexPage = () => {

  // const
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.classList.contains('slide-L-target')) {
          entry.target.classList.add('slide-L-on', entry.isIntersecting);
        } else if (entry.target.classList.contains('slide-R-target')) {
          entry.target.classList.add('slide-R-on', entry.isIntersecting);
        }
        if (!entry.isIntersecting) {
          entry.target.classList.remove('slide-L-on', 'slide-R-on');
        }
      });
    },{ threshold: 0.8 }); 

    const domTargets = [
      ...document.querySelectorAll('.slide-L-target'),
      ...document.querySelectorAll('.slide-R-target'),
    ];

    domTargets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      domTargets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <main>

      <div class="mainWrapper">
        <Helmet>
          {/* <meta name="description" content="Diseño web para bares y restaurantes" /> */}
          {/* <meta property="og:image" content="https://holdtml.cl/landing-v1/src/images/Untitled.webp" /> */}
        </Helmet>
        <section className="headline">
          <Logo className="logo-head"></Logo>
          {/* <StaticImage src='../images/HoldTML-logo.jpg' /> */}
          <h1>Diseño Web <span>Gratis</span> para bares y restaurantes</h1>
          <div className="whats_the_catch">

            <div className="catch_CTA">
              <h2>Sin Costo? =&gt;</h2>
              <div className="scarecity">
                <p className="adjustable-f-size">Tenemos cupos limitados para esta oferta, y solo trabajamos con 1 cliente a la vez, así que si te interesa, contactanos pronto para reservar tu cupo</p>
                <button onClick={() => scrollTo("#calendly")} className="redeem_btn">me interesa</button>
              </div>
            </div>

            <div className="catch_list">
              <h3>Si, no hay costo para esta oferta mientras estés dispuesto a</h3>
              <ul className='catch_list_wrapper'>
                <li className="catch_list_item adjustable-f-size">Darnos un review y testimonio honesto de tu experiencia</li>
                <li className="catch_list_item adjustable-f-size">Contestar un formulario, para ayudarnos a mejorar nuestro servicio</li>
                <li className="catch_list_item adjustable-f-size">Referirnos a alguien que puede beneficiar de nuestros servicios, en caso de que lo veas pertinente</li>
              </ul>
            </div>
          </div>
        </section>


        <div className="line-break" />
        <section>
          <div className='solution de-que-es'>
            <h1>De que se trata?</h1>
            <p className="adjustable-f-size">El tema aquí es un plan para aumentar la cantidad y mejorar la conversión de visitas por medios web. <br/>
            Que significa esto?, simplemente que más gente se interese en ir a comer/tomar después de ver algo por internet de tu local. Esto lo lograremos a través de múltiples medios que están listados abajo por si te interesa averiguar más de ellos. Además de esto, también tenemos un enfoque en aumentar la frecuencia de tus clientes, para que puedas tener una fuente de ingresos más recurrente.
            </p>
          </div>
        </section>


        <section className="solution">
          <div className="solution_webdev">
            <div className="title-wrapper">
              <h2>Sitios Web programados en <a target='_blank' href='https://gatsbyjs.com' className="text-atag">Gatsby</a></h2>
              <a target='_blank' href='https://gatsbyjs.com'><StaticImage src="../images/icon-gatsby.png" className="gatsby-logo" alt="gatsby logo"></StaticImage></a>
            </div>

            <div className="paragraph-wrapper solution-block">
              <StaticImage src="../images/ssg-host-flow.jpg" className="code-img slide-L-target solution-img" alt="code editor, with gatsby code"></StaticImage>
              <p className="slide-R-target adjustable-f-size">Sitios web extremadamente rápidos, gracias a un modelo de generación estática</p>
            </div>

            <div className='insights-wrapper solution-block'>
              <p className="slide-L-target adjustable-f-size">Optimización, accesibilidad en múltiples dispositivos y velocidad que verificamos con <a target="_blank" href='https://pagespeed.web.dev' className="text-atag">google page speed insights</a></p>
              <a href="https://pagespeed.web.dev" target="_blank">
                <StaticImage src="../images/google-pagespeed-insights-logo.png" className="insights-logo slide-R-target solution-img" alt="page speed insights example"></StaticImage>
              </a>
            </div>
          </div>

          <div className="mail-prismic-wrapper fade-in">
            <div className="solution_prismic solution-block">
            <a href="https://prismic.io" target="_blank"><StaticImage src="../images/prismic-logo.png" className="prismic-img slide-L-target solution-img" alt="logo prismic"></StaticImage></a>
              <p className="slide-R-target adjustable-f-size">Podrás editar el contenido del sitio a gusto, sin necesidad de escribir código gracias a que integramos de <a href="https://prismic.io" target="_blank" className="text-atag">prismic.io</a></p>
            </div>

            <div className="solution_email solution-block">
              <p className="slide-L-target adjustable-f-size">Mejoraremos tu retención de clientes, informándolos de tus ofertas y descuentos con correos automatizados</p>
              <a href="https://mailerlite.com" target="_blank">
                <StaticImage src="../images/mailerlite-logo.jpg" className="email-img slide-R-target solution-img" alt="logo email"></StaticImage>
              </a>
            </div>
          </div>

          <div className="solution_GMB solution-block">
            <StaticImage src="../images/google-my-business-logo.png" className='gmb-img slide-L-target solution-img' ></StaticImage>
            <p className="slide-R-target adjustable-f-size">Incrementamos búsquedas locales con optimización de GMB (Google my business)</p>
          </div>

        </section>
        <div className="line-break" />
        <section className="audience">
          <h3>Para quien es este servicio?</h3>
          <p className="adjustable-f-size">Nuestro servicio es ideal para bares y restaurantes en concepción y san pedro de la paz</p>
          <div className="map-imbed" dangerouslySetInnerHTML={{ __html: '<iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d25548.267636835168!2d-73.07018214282225!3d-36.829698205105316!3m2!1i1024!2i768!4f13.1!2m1!1sbares!5e0!3m2!1ses-419!2scl!4v1700429366341!5m2!1ses-419!2scl" width="100%" height="100%" style="border: 0; border-radius: 14px; box-shadow: rgba(2, 1, 0, 0.14) 0px 1px 41px 2px; margin-bottom: 10px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' }} />
        </section>


        <section className="identity">
          <StaticImage src="../images/imagen-interior.jpg" className="benjamin-img slide-L-target" ></StaticImage>
          <p className="adjustable-f-size slide-R-target">Yo soy Benjamín Astudillo, un joven desarrollador web y empresario que lleva más de 2 años estudiando y practicando para mejorar mis servicios</p>
        </section>


        <section id="calendly">
          <h2 className="slide-R-target">Coordina una videollamada sin atados, para discutir si te interesa nuestro servicio</h2>
          <div class="calendly-responsive-wrapper">
            <Helmet>
              <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
            </Helmet>
            <div id="calendly-imbed">
              <div class="calendly-inline-widget" data-url="https://calendly.com/holdtml-benjamin/reunion-inicial?primary_color=df7b1e" style={{ minWidth: '320px', height: '92dvh', width: '100%', margin: ' 0px 0px 120px 0px', padding: '0px' }}></div>
            </div>
          </div>
        </section>
      </div>
 
    </main>
  )
}

export default IndexPage

// export const Head = () => <title>HoldTML</title>
export const Head = () => {
  return(
    <>
      <title>HoldTML</title>
      <meta name='description' content='Diseño web para bares y restaurantes' />
      <meta property='og:image' content='../images/Untitled.jpg' />
    </>
  )
}
