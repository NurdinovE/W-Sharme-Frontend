import hands from '../../../src/assets/hands.svg'
import like from '../../../src/assets/like.svg'
import comment from '../../../src/assets/comment-1.svg'
import podel from '../../../src/assets/podel.svg'
import zvezda from '../../../src/assets/zvezda.svg'
import krug from '../../../src/assets/krug.svg'
import geo from '../../../src/assets/geo.svg'
import manikur from '../../../src/assets/manikur.svg'
import pedikur from '../../../src/assets/pedikur.svg'
import brovi from '../../../src/assets/brovi.svg'
import resnisy from '../../../src/assets/resnisy.svg'
import strijka from '../../../src/assets/strijka.svg'
import cls from './community.module.scss'
import { PageTemplate } from '../../widgets/page-template'

export function Community() {
  return (
    <PageTemplate>
      <div className={cls.community}>
        <div className={cls.community_block}>
          <img src={krug} alt="" />
          <div className={cls.community_row}>
            <div className={cls.leomanic}>
              <div className={cls.zvezda}>
                <h2>Leomanic</h2>
                <div className={cls.row}>
                  <img src={zvezda} alt="" />
                  <p>
                    9.4 <span>/10</span>
                  </p>
                </div>
              </div>
              <button>Подписаться</button>
            </div>
            <div className={cls.follow}>
              <div className={cls.fol}>
                <h3>Публикаций</h3>
                <p>2102</p>
              </div>
              <div className={cls.low}>
                <h3>Публикаций</h3>
                <p>2102</p>
              </div>
            </div>
            <div className={cls.region}>
              <img src={geo} alt="" />
              <p>Москва, Россия</p>
            </div>
            <p className={cls.text}>
              Всем привет, мы публикуем самые трендовые и красивые дизайны для твоего маникюра!
            </p>
            <div className={cls.block_rows}>
              <div className={cls.row}>
                <img src={manikur} alt="" />
                <p>Маникюр</p>
              </div>
              <div className={cls.row}>
                <img src={pedikur} alt="" />
                <p>Педикюр</p>
              </div>
              <div className={cls.row}>
                <img src={brovi} alt="" />
                <p>Брови</p>
              </div>
              <div className={cls.row}>
                <img src={resnisy} alt="" />
                <p>Ресницы</p>
              </div>
              <div className={cls.row}>
                <img src={strijka} alt="" />
                <p>Стрижка</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.community_chat}>
          <div className={cls.chat}>
            <img src={hands} alt="" />
            <div className={cls.chat_row}>
              <h3>Чат Комьюнити</h3>
              <p>6 участников</p>
            </div>
          </div>
          <div className={cls.chat}>
            <img src={hands} alt="" />
            <div className={cls.chat_row}>
              <h3>Чат Комьюнити</h3>
              <p>6 участников</p>
            </div>
          </div>
        </div>
        <div className={cls.main_block}>
          <div className={cls.main_block_row}>
            <div className={cls.row}>
              <img src={hands} alt="" />
              <div className={cls.content}>
                <h3>Ella Ivanova</h3>
                <p>22 мар в 08:39</p>
              </div>
            </div>
            <button>Подписаться</button>
          </div>
          <p>Нет ничего более удивительного, чем мастерство маникюриста, который обладает умением</p>
          <div className={cls.icon_rows}>
            <div className={cls.likes}>
              <img src={like} alt="" />
              <p>258</p>
            </div>
            <div className={cls.likes}>
              <img src={comment} alt="" />
              <p>32</p>
            </div>
            <div className={cls.likes}>
              <img src={podel} alt="" />
              <p>6</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
