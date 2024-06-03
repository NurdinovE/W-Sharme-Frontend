import { PageTemplate } from '@/widgets/page-template'
import hands from '../../../src/assets/hands.svg'
import lupa from '../../../src/assets/lupa.svg'
import two from '../../../src/assets/two.svg'
import cls from './chat.module.scss'
// import { useEffect, useState } from 'react'
// import icon from '@/assets/bellIcon.svg'
export function Chat() {
  // let [data, setData] = useState(null)
  // async function postData() {
  //   let url
  //   let info = {
  //     phoneNumber: 123123123,
  //     password: 123123,
  //     confirmPassword: 123123
  //   }
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'no-cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(info) // body data type must match "Content-Type" header
  //   })
  //   setData(response.json()) // parses JSON response into native JavaScript objects
  //   return console.log(data)
  // }
  // // 3. Create out useEffect function
  // useEffect(() => {
  //   postData()
  // }, [])
  // console.log(data)
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
            <img src={hands} alt="" />
            <h2>Nastya</h2>
            <p>был(а) вчера в 23:42</p>
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
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
