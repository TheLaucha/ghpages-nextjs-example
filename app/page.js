import Image from "next/image"
import styles from "./page.module.css"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import Card from "@/components/Card"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <!-- SOBRE MI --> */}
      <section class='container' id='sobre-mi'>
        <h2 class='section__title'>Sobre mi</h2>
        <div class='about_me_image'>
          <img src='./assets/foto_4.jpg' alt='' class='about_me_img' />
        </div>
        <div class='about_me_info'>
          <p class='about_me_info_title'>
            Hola mi nombre es <span class='text-yellow'>Nicolas Aguirre.</span>
          </p>
          <p>
            Soy un apasionado
            <span class='text-yellow'>
              del mundo del entrenamiento, la nutrición deportiva, la ciencia y me gusta mucho leer.
            </span>
            Desde que tengo conciencia siempre realice diferentes tipos de deportes hasta que a la
            edad de 13 años me interese por el gimnasio y la nutrición donde comencé a dedicarme al
            <span class='text-yellow'>100%.</span>
          </p>
          <p>
            Soy de Buenos Aires Argentina, tengo 24 años y estudio la
            <span class='text-yellow'>
              Licenciatura en Nutrición en la Universidad de La Plata.
            </span>
          </p>
          <p>
            Actualmente cuento con varias
            <span class='text-yellow'>formaciones deportivas</span> como lo son:
          </p>
          <ul class='training_list'>
            <li>
              <span class='material-icons'>check</span>Planificación dietética para la Puesta a
              Punto en culturismo natural ( ECN )
            </li>
            <li>
              <span class='material-icons'>check</span>Entrenador para culturismo natural ( ECN )
            </li>
            <li>
              <span class='material-icons'>check</span>Especialista en hipertrofia ( escuela high
              fitness )
            </li>
            <li>
              <span class='material-icons'>check</span>Biomecánica humana ( fisioterapia en
              movimiento )
            </li>
            <li>
              <span class='material-icons'>check</span>Biomecanica en el entrenamiento de fuerza (
              academia IFBB )
            </li>
            <li>
              <span class='material-icons'>check</span>Profesor de boxeo recreativo ( ENADE )
            </li>
            <li>
              <span class='material-icons'>check</span>Entrenador personal y preparador físico (
              ENADE )
            </li>
            <li>
              <span class='material-icons'>check</span>Entrenador por la academia powerexplosive
            </li>
            <li>
              <span class='material-icons'>check</span>Antropometria ( certificación oficial ISAK
              NIVEL 1 )
            </li>
            <li>
              <span class='material-icons'>check</span>
              Cuento con 3 talleres de Nutrición en calculo calórico, Oxidación de las grasas y
              Programación y planificación del entrenamiento y 1 congreso internacional de nutricion
              ( Nutri Tucuman ).
            </li>
            <li>
              <span class='material-icons'>check</span>
              Preparador de físico culturismo y fitness de competencia (FMA)
            </li>
            <li>
              <span class='material-icons'>check</span>
              Certificación PUESTA A PUNTO para culturismo (Mariano Segovia)
            </li>
          </ul>
        </div>
      </section>
      {/* <!-- TODO LO QUE TENES QUE SABER --> */}
      <section class='container' id='informacion'>
        <h2 class='section__title'>Todo lo que necesitas saber de los planes</h2>
        <div class='card__container'>
          <div class='card'>
            <h4 class='card__title'>PLAN DE NUTRICIÓN</h4>
            <div class='card__value'>
              <div class='card__info'>
                <p>
                  EL PLAN DE NUTRICIÓN ES <span class='text-pink'>100% PERSONALIZADO</span>,
                  ADAPTADO A TU CONTEXTO Y OBJETIVOS CON EL FIN DE PODER CONSEGUIR RENDIR MEJOR EN
                  TUS ENTRENAMIENTOS, DISMINUIR EL PORCENTAJE DE GRASA O AUMENTAR MASA MUSCULAR.
                </p>
                <p>
                  SE CALCULAN TANTO LAS <span class='text-pink'>CALORÍAS</span> COMO LOS
                  <span class='text-pink'>MACRONUTRIENTES</span> Y SE PAUTAN LOS ALIMENTOS EN BASE A
                  TU ESTILO DE VIDA, CON SUS GRAMOS Y DISPONIBILIDAD HORARIA PARA QUE TENGAS TODO A
                  LA MEDIDA SIN NINGUNA PREOCUPACIÓN Y QUE SEA UN PLAN SENCILLO DE REALIZAR.
                </p>
              </div>
            </div>
          </div>
          <div class='card'>
            <h4 class='card__title'>PLAN DE ENTRENAMIENTO</h4>
            <div class='card__value'>
              <div class='card__info'>
                <p>
                  RUTINA PERSONALIZADA, ADAPTADA 100% A VOS, A TU CONTEXTO Y OBJETIVOS, YA SEA
                  <span class='text-pink'>GANAR FUERZA Y MASA MUSCULAR O PERDER GRASA.</span>
                </p>
                <p>
                  CON ESTE PLAN TENDRÁS TODAS LAS VARIABLES DEL ENTRENAMIENTO (SERIES, REPETICIONES,
                  INTENSIDAD, DESCANSO, SELECCIÓN DE EJERCICIOS, ETC) PAUTADAS A TU MEDIDA PARA QUE
                  PUEDAS LOGRAR PROGRESAR EN CADA ENTRENAMIENTO Y SACAR TU MEJOR VERSIÓN.
                </p>
                <p>
                  <span class='text-pink'>
                    VAS A APRENDER TODO SOBRE CADA EJERCICIO POR MEDIO DE VIDEOS
                  </span>
                  , EN DONDE VAS A TENER EXPLICADA LA BIOMECÁNICA EN CADA UNO DE ELLOS PARA NO
                  LESIONARTE Y PODER APLICAR UNA BUENA SOBRECARGA PROGRESIVA.
                </p>
              </div>
            </div>
          </div>
          <div class='card'>
            <h4 class='card__title'>SEGUIMIENTO Y REVISIONES</h4>
            <div class='card__value'>
              <div class='card__info'>
                <p>
                  DE COMIENZO SE HARÁN <span class='text-pink'>CHEQUEOS FÍSICOS</span> Y SE TOMARÁ
                  DE NUEVO EL PESO CADA 15 DÍAS PARA OBSERVAR QUE TODO ESTÉ YENDO DE FORMA CORRECTA
                  Y DE ESTA MANERA SABER SI HAY QUE MODIFICAR ALGO DEL PLAN.
                </p>
                <p>DESPUÉS DEL PRIMER MES, LOS CHEQUEOS SE REALIZARÁN DE FORMA SEMANAL.</p>
                <p>
                  AL FINAL DE CADA MES SE JUNTARA TODO PARA EVALUAR EL PROGRESO Y DE ESTA FORMA
                  DETERMINAR SI SE ESTÁ YENDO POR BUEN CAMINO O SI HAY QUE MODIFICAR ALGO DEL PLAN.
                </p>
              </div>
            </div>
          </div>
          <div class='card'>
            <h4 class='card__title'>CONTACTO Y SOPORTE</h4>
            <div class='card__value'>
              <div class='card__info'>
                <p>
                  TODAS LAS DUDAS O CONSULTAS QUE TENGAS LAS VAS A PODER HACER POR MEDIO DE
                  WHATSAPP, EN EL CUAL,
                  <span class='text-pink'>SE RESPONDERA AL INSTANTE</span> PARA SOLUCIONARTE LO QUE
                  NECESITES.
                </p>
                <p>
                  TODAS LAS DUDAS/CONSULTAS SON SIEMPRE BIENVENIDAS, ASÍ QUE NO TENGAS MIEDO DE
                  PREGUNTAR, TODO ES PARA AYUDARTE.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ASESORIAS --> */}
      <section class='container' id='asesorias'>
        <h2 class='section__title'>Asesorias</h2>
        <div class='select__country'>
          <button class='btn_select__country btn_home active' id='argentina'>
            <img class='flag_icon' src='./assets/argentina.svg' alt='' />
            <span>Soy de argentina</span>
            <img class='flag_icon' src='./assets/argentina.svg' alt='' />
          </button>
          <button class='btn_select__country btn_home' id='world' disabled>
            <img class='flag_icon' src='./assets/earth.svg' alt='' />
            <span>
              Soy de otro pais <small>(Proximamente)</small>
            </span>
            <img class='flag_icon' src='./assets/earth.svg' alt='' />
          </button>
        </div>
        <div class='card__container'>
          <div class='card'>
            <h4 class='card__title'>PLAN ONLINE BÁSICO</h4>
            <div class='card__value' id='precio_argentina'>
              <p class='card__info'>
                <span class='material-icons'>done_all</span>PLAN DE NUTRICIÓN O ENTRENAMIENTO
                PERSONALIZADO
              </p>
              <p class='card__info'>
                <span class='material-icons'>done_all</span>MODIFICACIONES DEL PLAN CADA 4 SEMANAS
              </p>
              <p class='card__info'>
                <span class='material-icons'>done_all</span>CONTACTO Y RESOLUCIÓN DE DUDAS VIA
                WHATSAPP
              </p>
              <button
                class='precio btn_home btn_open_modal'
                id='precio_mensual_1'
                data-target='modal'
              >
                $...
              </button>
              <button
                class='precio btn_home btn_open_modal'
                id='precio_trimestral_1'
                data-target='modal'
              >
                $...
              </button>
            </div>
            <footer class='card__footer'></footer>
          </div>
          <div class='card'>
            <h4 class='card__title'>PLAN ONLINE PREMIUM</h4>
            <div class='card__value'>
              <p class='card__info'>
                <span class='material-icons'>done_all</span>PLAN DE NUTRICIÓN Y ENTRENAMIENTO
                PERSONALIZADO
              </p>
              <p class='card__info'>
                <span class='material-icons'>done_all</span>MODIFICACIONES DEL PLAN CADA 4 SEMANAS
              </p>
              <p class='card__info'>
                <span class='material-icons'>done_all</span>CHEQUEOS FÍSICOS Y PESO CADA 15 DIAS VIA
                WHATSAPP
              </p>
              <p class='card__info'>
                <span class='material-icons'>done_all</span>CONTACTO Y RESOLUCIÓN DE DUDAS VIA
                WHATSAPP
              </p>
              <button
                class='precio btn_home btn_open_modal'
                id='precio_mensual_2'
                data-target='modal'
              >
                $...
              </button>
              <button
                class='precio btn_home btn_open_modal'
                id='precio_trimestral_2'
                data-target='modal'
              >
                $...
              </button>
            </div>
            <footer class='card__footer'></footer>
          </div>
        </div>
        <a
          href='https://api.whatsapp.com/send?phone=+5491144088053&text=HOLA%20BUEN%20DIA'
          class='btn_home btn_wsp'
          target='_blank'
        >
          <img class='wsp_icon' src='./assets/wsp.png' alt='whatsapp icon' />
          <span>WHATSAPP</span>
          <img class='wsp_icon' src='./assets/wsp.png' alt='whatsapp icon' />
        </a>
        <div id='modal' class='modal'>
          <div class='modal-content'>
            <div class='modal-header'>
              <div class='wrapper'>
                <a data-text='N'></a>
                <a data-text='A'></a>
              </div>
              <span class='material-icons close'> cancel </span>
            </div>
            <p>
              <b>Nombres:</b> Nicolas Aguirre Dal Lago
            </p>
            <p>
              <b>CVU:</b> 0000003100073656968903
            </p>
            <p>
              <b>Alias:</b> nicolas.fitness
            </p>
            <p>
              <b>CUIT:</b> 20413995311
            </p>
            <p>
              <b>Banco:</b> Mercado Pago
            </p>
            <p>
              Realizada la transferencia enviar el comprobante por whatsapp: <b>+54-9-1144088053</b>
            </p>
            <a
              href='https://api.whatsapp.com/send?phone=+5491144088053&text=HOLA%20BUEN%20DIA'
              class='btn_home btn_wsp'
            >
              <img class='wsp_icon' src='./assets/wsp.png' alt='whatsapp icon' />
              <span>WHATSAPP</span>
              <img class='wsp_icon' src='./assets/wsp.png' alt='whatsapp icon' />
            </a>
          </div>
        </div>
      </section>
      {/* <!-- PASOS --> */}
      <section class='container' id='pasos'>
        <h2 class='section__title'>Pasos a seguir para obtener tu plan</h2>
        <div class='card__container'>
          <div class='card'>
            <h4 class='card__title'>
              1 - Elige el plan. <span class='material-icons'>category</span>
            </h4>
            <div class='card__value'>
              <div class='card__info'>
                <p>UNA VEZ QUE ELIJAS TU PLAN, SELECCIONA SI QUERES EL PLAN MENSUAL O TRIMESTRAL</p>
              </div>
            </div>
          </div>
          <div class='card'>
            <h4 class='card__title'>
              2 - Haz la compra. <span class='material-icons'>payments</span>
            </h4>
            <div class='card__value'>
              <p class='card__info'>
                UNA VEZ QUE HAYAS ELEGIDO EL PLAN, SOLAMENTE TENES QUE DAR CLICK EN EL BOTÓN PARA
                QUE TE DIRIJA A REALIZAR EL PAGO
              </p>
            </div>
          </div>
          <div class='card'>
            <h4 class='card__title'>
              3 - Contacto.<span class='material-icons'>phone_in_talk</span>
            </h4>
            <div class='card__value'>
              <p class='card__info'>
                UNA VEZ REALIZADO EL PAGO, ENVIA EL COMPROBANTE DE PAGO AL WHATSAPP PARA PODER
                MANDARTE EL FORMULARIO QUE DEBERÁS COMPLETAR Y PODER COMENZAR CON EL ARMADO DEL PLAN
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* RESULTADOS */}
      <section class='container' id='Resultados'>
        <h2 class='section__title'>Resultados</h2>
        <div class='gallery'>
          <img src='./assets/foto_1.jpeg' alt='foto de una persona mostrando su cambio fisico' />
          <img src='./assets/foto_2.jpeg' alt='foto de una persona mostrando su cambio fisico' />
          <img src='./assets/foto_3.jpeg' alt='foto de una persona mostrando su cambio fisico' />
        </div>
      </section>
      <Footer></Footer>
    </main>
  )
}
