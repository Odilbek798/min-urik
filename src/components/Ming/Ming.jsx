import React from 'react'
import s from './Ming.module.scss'

const Ming = () => {
  return (
    <>
    <section className={s.station}>
        <div className="container">
          {/* Фоновое видео */}
          <div className={s.videoWrapper}>
            <video
              className={s.videoBackground}
              autoPlay
              loop
              muted
              playsInline
              src="./ming-urik-fon.mp4"
              type="video/mp4"
            />
          </div>

          <div className={s.oybek}>
            <div className={s.text}>
              <h3>История станции метро "Ойбек"</h3>
              <p>
              Минг Урик - это конечная станция Юнусабадской линии Ташкентского метрополитена. Она была открыта в 2001 году.
               Станция колонного типа
               c двумя подземными вестибюлями. c нее можно перейти на станцию "Айбек" Узбекистанской линии.
              </p>
              
              
            </div>
            <div className={s.image}>
              <img src="./ming-orik.jpg" alt="Метро Ойбек" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ming