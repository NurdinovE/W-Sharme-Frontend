import cls from '../../../widgets/user-profile/ui/ui.module.scss'
import { useState } from 'react'

export const UserSettings = ({ userData }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className={cls.community}>
        <div className={cls.community_block}>
          {/* < img src={defaultProfile} alt="" /> */}
          <div className={cls.community_row}>
            <div className={cls.leomanic}>
              <div className={cls.zvezda}>
                <h2>{userData?.name}</h2>
                <div className={cls.row}>
                  {/* <img src={zvezda} alt="" /> */}
                  <p>
                    {userData?.rating} <span>/10</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={cls.region}>
              <p>{userData?.city}</p>
            </div>
            <p className={cls.text}>{userData?.aboutYourself}</p>
          </div>
        </div>
      </div>
      <p>Учетные данные</p>
      <label htmlFor="phone">
        Телефон
        <input
          id="phoneNumber"
          type="phone"
          name="phone"
          disabled
          placeholder="Your phone"
          mask="+7 (999) 999-99-99"
          defaultValue={'+79998887766'}
        />
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            document.getElementById('phoneNumber').toggleAttribute('disabled')
          }}
        >
          {!isOpen ? 'disable' : 'able'}
        </button>
      </label>

      {/* <InputBase
        disabled
        label="Телефон"
        placeholder="Your phone"
        component={InputMask}
        mask="+7 (999) 999-99-99"
        defaultValue={'+79998887766'}
      /> */}
    </>
  )
}
