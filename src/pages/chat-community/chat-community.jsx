import { PageTemplate } from '@/widgets/page-template'
import hands from '../../../src/assets/hands.svg'
import lupa from '../../../src/assets/lupa.svg'
import two from '../../../src/assets/two.svg'
import screpka from '../../../src/assets/screpka.svg'
import arrow from '../../../src/assets/Arrow 4.svg'
import cls from './chatcommunity.module.scss'

export function ChatCommunity() {
  return (
    <PageTemplate>
      <div className={cls.buttons}>
        <button>Чат</button>
        <button>Чат сообществ</button>
      </div>
      <div className={cls.chat}>
        <div className={cls.chat_users}>
          <div className={cls.input_row}>
            <img src={lupa} alt="" />
            <input type="text" placeholder="Поиск" />
          </div>
          <div className={cls.users_row}>
            <img src={hands} alt="" />
            <div className={cls.user_content}>
              <div className={cls.user}>
                <h2>Bella</h2>
                <p>Привет, как дела</p>
              </div>
              <div className={cls.true}>
                <img src={two} alt="" />
                <p>17:54</p>
              </div>
            </div>
          </div>
          <div className={cls.users_row}>
            <img src={hands} alt="" />
            <div className={cls.user_content}>
              <div className={cls.user}>
                <h2>Bella</h2>
                <p>Привет, как дела</p>
              </div>
              <div className={cls.true}>
                <img src={two} alt="" />
                <p>17:54</p>
              </div>
            </div>
          </div>
          <div className={cls.users_row}>
            <img src={hands} alt="" />
            <div className={cls.user_content}>
              <div className={cls.user}>
                <h2>Bella</h2>
                <p>Привет, как дела</p>
              </div>
              <div className={cls.true}>
                <img src={two} alt="" />
                <p>17:54</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cls.chat_message}>
          <div className={cls.user}>
            <div className={cls.use_row}>
              <img src={hands} alt="" />
              <h2>Чат сообщества LeoManic</h2>
            </div>
            <button>Перейти в сообщество</button>
          </div>
          <div className={cls.message}>
            <div className={cls.number}>
              <div className={cls.num}>
                <p>18 апреля</p>
              </div>
            </div>
            <div className={cls.message_content}>
              <img src={hands} alt="" />
              <div className={cls.mes}>
                <div className={cls.row}>
                  <h3>Nastya</h3>
                  <p>Опишите Ваше состояние, что Вас беспокоит? </p>
                </div>
                <p className={cls.time}>00:49</p>
              </div>
            </div>
            <div className={cls.message_request}>
              <div className={cls.con}>
                <div className={cls.content}>
                  <img src={two} alt="" />
                  <div className={cls.requs}>
                    <p>Здравствуйте, болит живот</p>
                  </div>
                </div>
                <p className={cls.time}>00:49</p>
              </div>
            </div>
            <div className={cls.chat_block}>
              <img src={screpka} alt="" />
              <input type="text" placeholder="Напишите сообщение..." />
              <div className={cls.krug}>
                <img src={arrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
