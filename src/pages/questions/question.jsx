import { PageTemplate } from '../../widgets/page-template'
import lupa from '../../../src/assets/lupa.svg'
import manikur from '../../../src/assets/manikur.svg'
import pedikur from '../../../src/assets/pedikur.svg'
import brovi from '../../../src/assets/brovi.svg'
import resnisy from '../../../src/assets/resnisy.svg'
import strijka from '../../../src/assets/strijka.svg'
import hands from '../../../src/assets/hands.svg'
import jurok from '../../../src/assets/jurok.svg'
import arrow from '../../../src/assets/Arrow 4.svg'
import cls from './question.module.scss'

export function Question() {
  return (
    <PageTemplate>
      <div className={cls.question}>
        <div className={cls.question_block}>
          <h1>Вопросы и ответы</h1>
          <div className={cls.rows}>
            <img src={lupa} alt="" />
            <input type="text" placeholder="Поиск" />
          </div>
          <div className={cls.row_button}>
            <div className={cls.row}>
              <button className={cls.quest}>Мои вопросы</button>
              <button className={cls.otvet}>Мои ответы</button>
            </div>
            <button className={cls.zadat}>Задать вопрос</button>
          </div>
          <h2>Категории</h2>
          <div className={cls.row_img}>
            <div>
              <img src={manikur} alt="" />
              <p>Маникюр</p>
            </div>
            <div>
              <img src={pedikur} alt="" />
              <p>Маникюр</p>
            </div>
            <div>
              <img src={brovi} alt="" />
              <p>Маникюр</p>
            </div>
            <div>
              <img src={resnisy} alt="" />
              <p>Маникюр</p>
            </div>
            <div>
              <img src={strijka} alt="" />
              <p>Маникюр</p>
            </div>
          </div>
        </div>
        <div className={cls.question_blok}>
          <div className={cls.blok_row}>
            <img src={hands} alt="" />
            <div className={cls.row}>
              <h3>Irina</h3>
              <p>Посоветуйте каким гель-лаком пользоваться?</p>
            </div>
          </div>
          <div className={cls.block_row}>
            <p>сегодня в 15:53</p>
            <u className={cls.skryt}>Скрыть ответы</u>
            <u>Ответить</u>
          </div>
          <hr />
          <p className={cls.otvet}>3 ответа</p>
          <div className={cls.blok_rows}>
            <img src={hands} alt="" />
            <div className={cls.rowss}>
              <div className={cls.rowi}>
                <h3>Irina</h3>
                <p>Все супер! Хочу записаться. Можете сказать сколько стоило этот маникюр?</p>
              </div>
              <div className={cls.block_row_content}>
                <div className={cls.row}>
                  <p>сегодня в 15:53</p>
                  <u>Ответить</u>
                </div>
                <div className={cls.likes}>
                  <p>15</p>
                  <img src={jurok} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={cls.input_row}>
            <input type="text" placeholder="Ваш коментарий" />
            <div className={cls.krug}>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className={cls.blok_rows_wraper}>
            <img src={hands} alt="" />
            <div className={cls.rowss}>
              <div className={cls.rowi}>
                <h3>Irina</h3>
                <p>Все супер! Хочу записаться. Можете сказать сколько стоило этот маникюр?</p>
              </div>
              <div className={cls.block_row_content}>
                <div className={cls.row}>
                  <p>сегодня в 15:53</p>
                  <u>Ответить</u>
                </div>
                <div className={cls.likes}>
                  <p>15</p>
                  <img src={jurok} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className={cls.blok_rows}>
            <img src={hands} alt="" />
            <div className={cls.rowss}>
              <div className={cls.rowi}>
                <h3>Irina</h3>
                <p>Все супер! Хочу записаться. Можете сказать сколько стоило этот маникюр?</p>
              </div>
              <div className={cls.block_row_content}>
                <div className={cls.row}>
                  <p>сегодня в 15:53</p>
                  <u>Ответить</u>
                </div>
                <div className={cls.likes}>
                  <p>15</p>
                  <img src={jurok} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
