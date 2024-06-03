import lupa from '../../../src/assets/lupa.svg'
import manikur from '../../../src/assets/manikur.svg'
import zvezda from '../../../src/assets/zvezda.svg'
import hands from '../../../src/assets/hands.svg'
import { PageTemplate } from '../../widgets/page-template'
import cls from './announcement.module.scss'

export function Announcement() {
  return (
    <PageTemplate>
      <div className={cls.announ_button}>
        <button>Поиск</button>
        <button>Мои объявления</button>
        <button>Создать</button>
      </div>
      <div className={cls.announ_block}>
        <div className={cls.input_row}>
          <img src={lupa} alt="" />
          <input type="text" placeholder="Поиск" />
        </div>
        <h3>Категории</h3>
        <div className={cls.announ_row}>
          <div>
            <img src={manikur} alt="" />
            <p>Маникюр</p>
          </div>
          <div>
            <img src={manikur} alt="" />
            <p>Маникюр</p>
          </div>
          <div>
            <img src={manikur} alt="" />
            <p>Маникюр</p>
          </div>
          <div>
            <img src={manikur} alt="" />
            <p>Маникюр</p>
          </div>
          <div>
            <img src={manikur} alt="" />
            <p>Маникюр</p>
          </div>
        </div>
        <div className={cls.button_row}>
          <button>Рейтинг</button>
          <button>Рядом</button>
          <button>Открыто</button>
        </div>
      </div>
      <div className={cls.announ_image}>
        <h3>Бонус</h3>
        <p>Ногтевая студия, Салон красоты, Парихмакерская</p>
        <div className={cls.image_row}>
          <img src={zvezda} alt="" />
          <p>
            4.2 <span>/5</span>
          </p>
          <h3>(345)</h3>
        </div>
        <div className={cls.rows}>
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
        </div>
        <h2>Открыто до 22:00</h2>
        <button>Смотреть</button>
        <hr />
        <h3>Бонус</h3>
        <p>Ногтевая студия, Салон красоты, Парихмакерская</p>
        <div className={cls.image_row}>
          <img src={zvezda} alt="" />
          <p>
            4.2 <span>/5</span>
          </p>
          <h3>(345)</h3>
        </div>
        <div className={cls.rows}>
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
          <img src={hands} alt="" />
        </div>
        <h2>Открыто до 22:00</h2>
        <button>Смотреть</button>
        <hr />
      </div>
    </PageTemplate>
  )
}
