import { PageTemplate } from '@/widgets/page-template'
import cls from './home.module.scss'
import hands from '../../../src/assets/hands.svg'
import like from '../../../src/assets/like.svg'
import comment from '../../../src/assets/comment-1.svg'
import podel from '../../../src/assets/podel.svg'
// import { Text, Center, SimpleGrid, Button } from '@mantine/core'
// import icon from '@/assets/bellIcon.svg'
export function HomePage() {
  /* Задачи:
        Сверстай Home Page,
      Примечания:
        Я добавил UI библиотеку Mantine,
        если хочешь используй ее можешь пошарится на их сайте. 
        Или же делать по своей методике    
*/
  return (
    <PageTemplate>
      <div className="container">
        <div className={cls.home}>
          <div className={cls.home_main}>
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
              <p>Нет ничего более удивительного</p>
              <img src={hands} alt="" />
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
              <div className={cls.comentes}>
                <p>10 КОМЕНТАРИЕВ</p>
                <hr />
                <div className={cls.comentes_block}>
                  <img src={hands} alt="" />
                  <div className={cls.comentes_rows}>
                    <h3>Толя Громов</h3>
                    <p>Все супер! Хочу записаться. Можете сказать сколько стоило этот маникюр?</p>
                    <div className={cls.side}>
                      <div className={cls.side_row}>
                        <p>1 апреля в 14:40 </p>
                        <u>Ответить</u>
                      </div>
                      <div className={cls.likes}>
                        <p>15</p>
                        <img src={like} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
