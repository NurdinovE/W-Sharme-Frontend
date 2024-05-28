import homepng from '../../../../src/assets/home.svg'
import chat from '../../../../src/assets/message.svg'
import piupls from '../../../../src/assets/piupils.svg'
import mikr from '../../../../src/assets/microgon.svg'
import questions from '../../../../src/assets/vopros.svg'
import chel from '../../../../src/assets/chel.svg'
import cls from './sidebar.module.scss'

export function Sidebar() {
  return (
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
  )
}
