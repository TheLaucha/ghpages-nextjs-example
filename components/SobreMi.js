import React from "react"

const SobreMi = () => {
  return (
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
          <span class='text-yellow'>Licenciatura en Nutrición en la Universidad de La Plata.</span>
        </p>
        <p>
          Actualmente cuento con varias
          <span class='text-yellow'>formaciones deportivas</span> como lo son:
        </p>
        <ul class='training_list'>
          <li>
            <span class='material-icons'>check</span>Planificación dietética para la Puesta a Punto
            en culturismo natural ( ECN )
          </li>
          <li>
            <span class='material-icons'>check</span>Entrenador para culturismo natural ( ECN )
          </li>
          <li>
            <span class='material-icons'>check</span>Especialista en hipertrofia ( escuela high
            fitness )
          </li>
          <li>
            <span class='material-icons'>check</span>Biomecánica humana ( fisioterapia en movimiento
            )
          </li>
          <li>
            <span class='material-icons'>check</span>Biomecanica en el entrenamiento de fuerza (
            academia IFBB )
          </li>
          <li>
            <span class='material-icons'>check</span>Profesor de boxeo recreativo ( ENADE )
          </li>
          <li>
            <span class='material-icons'>check</span>Entrenador personal y preparador físico ( ENADE
            )
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
            Programación y planificación del entrenamiento y 1 congreso internacional de nutricion (
            Nutri Tucuman ).
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
  )
}

export default SobreMi
