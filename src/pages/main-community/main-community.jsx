import { PageTemplate } from '../../widgets/page-template/ui/page-template'
import manikur from '../../../src/assets/manikur.svg'
import pedikur from '../../../src/assets/pedikur.svg'
import brovi from '../../../src/assets/brovi.svg'
import resnisy from '../../../src/assets/resnisy.svg'
import strijka from '../../../src/assets/strijka.svg'
import lupa from '../../../src/assets/lupa.svg'
import hands from '../../../src/assets/hands.svg'
import cls from './maincommunity.module.scss'

export function MainCommunity() {
  return (
    <PageTemplate>
      <h1 className={cls.text}>Сообщества</h1>
      <div className={cls.main_community}>
        <div className={cls.community}>
          <div className={cls.image_row}>
            <div>
              <img src={manikur} alt="" />
              <p>Маникюр</p>
            </div>
            <div>
              <img src={pedikur} alt="" />
              <p>Педикюр</p>
            </div>
            <div>
              <img src={brovi} alt="" />
              <p>Брови</p>
            </div>
            <div>
              <img src={resnisy} alt="" />
              <p>Ресницы</p>
            </div>
            <div>
              <img src={strijka} alt="" />
              <p>Стрижка</p>
            </div>
          </div>
          <div className={cls.button_row}>
            <div className={cls.row}>
              <button>Все сообщества</button>
              <button>Управляемые</button>
            </div>
            <button>Создать сообщество</button>
          </div>
          <div className={cls.input_row}>
            <img src={lupa} alt="" />
            <input type="text" placeholder="Поиск сообщества" />
          </div>
          <h2>Результаты поиска</h2>
          <div className={cls.users}>
            <div className={cls.row}>
              <img src={hands} alt="" />
              <div>
                <h3>Комьюнити</h3>
                <p>Маникюр, 152 участников</p>
              </div>
            </div>
            <button>Подписаться</button>
          </div>
        </div>
        <div className={cls.community_users}>
          <h2>Рекомендуемые Сообщества</h2>
          <div className={cls.user}>
            <img src={hands} alt="" />
            <div>
              <h3>Комьюнити</h3>
              <p>Маникюр, 152 участников</p>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
