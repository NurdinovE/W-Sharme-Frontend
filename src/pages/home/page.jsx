import { PageTemplate } from '@/widgets/page-template'
import cls from './home.module.scss'
// import homepng from '../../../src/assets/home.svg'
// import chat from '../../../src/assets/message.svg'
// import piupls from '../../../src/assets/piupils.svg'
// import mikr from '../../../src/assets/microgon.svg'
// import questions from '../../../src/assets/vopros.svg'
// import chel from '../../../src/assets/chel.svg'
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
import photoaparat from '../../../src/assets/photoaparat.svg'
import lupa from '../../../src/assets/lupa.svg'
import tochki from '../../../src/assets/tochki.svg'
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
        {/* <div className={cls.home}>
          <div className={cls.home_sidebar}>
            <div className={cls.sidebar_content}>
              <img src={homepng} alt="" />
              <p>Главная</p>
            </div>
            <div className={cls.sidebar_content}>
              <img src={chat} alt="" />
              <p>Чат</p>
            </div>
            <div className={cls.sidebar_content}>
              <img src={piupls} alt="" />
              <p>Сообщества</p>
            </div>
            <div className={cls.sidebar_content}>
              <img src={mikr} alt="" />
              <p>Объявления</p>
            </div>
            <div className={cls.sidebar_content}>
              <img src={questions} alt="" />
              <p>Вопрос</p>
            </div>
            <div className={cls.sidebar_content}>
              <img src={chel} alt="" />
              <p>Профиль</p>
            </div>
          </div>
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
        </div> */}

        {/* // Сообщества */}

        {/* <div className={cls.community}>
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
        </div> */}

        {/* Админ сообщества */}

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
            <div className={cls.buttons_row}>
              <button className={cls.red}>Редактировать Сообщество</button>
              <button className={cls.chat}>Чат</button>
            </div>
          </div>
          <div className={cls.all_rows}>
            <div className={cls.content}>
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
              <div className={cls.new}>
                <p>Что у вас нового?</p>
                <img src={photoaparat} alt="" />
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
            <div className={cls.piupls}>
              <h3>Участники сообщества</h3>
              <u>Редакторы сообщества</u>
              <div className={cls.search}>
                <img src={lupa} alt="" />
                <input type="text" placeholder="Поиск" />
              </div>
              <div className={cls.content_rows}>
                <div className={cls.ro}>
                  <img src={hands} alt="" />
                  <div className={cls.names}>
                    <h3>Nasya</h3>
                    <p>с 12.02.2024</p>
                  </div>
                </div>
                <img className={cls.toch} src={tochki} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
