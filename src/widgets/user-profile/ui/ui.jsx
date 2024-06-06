import React, { useState } from 'react'
import defaultProfile from '@/assets/profile.png'
import settings from '@/assets/setting.svg'
import cls from './ui.module.scss'
import { UserSettings } from '../../../entities/profile/profile-settings/user-settings'
import { UserEdit } from '../../../entities/profile/profile-edit/user-edit'
import { useNavigate } from 'react-router-dom'

export const UserProfile = ({ userData, isEdit }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const navigate = useNavigate()

  const pageLoad = () => {
    if (isSettingsOpen || isEdit) {
      return <UserSettings userData={userData} />
    } else if (isEditOpen || isEdit) {
      return <UserEdit />
    } else {
      return (
        <div className={cls.community}>
          <div className={cls.community_block}>
            <img src={defaultProfile} alt="" />
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
                <button
                  onClick={() => {
                    setIsEditOpen(!isEditOpen)
                    navigate('/account/edit')
                  }}
                >
                  Редактировать профиль
                </button>
              </div>
              <div className={cls.follow}>
                <div className={cls.fol}>
                  <h3>Публикаций</h3>
                  <p>{userData?.stories.length}</p>
                </div>
                <div className={cls.low}>
                  <h3>Подписок</h3>
                  <p>{userData?.subscriptions.length}</p>
                </div>
                <div className={cls.low}>
                  <h3>Подписчиков</h3>
                  <p>{userData?.followers.length}</p>
                </div>
              </div>
              <div className={cls.region}>
                <p>{userData?.city}</p>
              </div>
              <p className={cls.text}>{userData?.aboutYourself}</p>
              <div className={cls.block_rows}>
                <div className={cls.row}>
                  <p>Маникюр</p>
                </div>
                <div className={cls.row}>
                  <p>Педикюр</p>
                </div>
                <div className={cls.row}>
                  <p>Брови</p>
                </div>
                <div className={cls.row}>
                  <p>Ресницы</p>
                </div>
                <div className={cls.row}>
                  <p>Стрижка</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cls.settings}
            onClick={() => {
              setIsSettingsOpen(!isSettingsOpen)
              navigate('/account/settings')
            }}
          >
            <img src={settings} alt="settings" />
          </div>
        </div>
      )
    }
  }
  return <>{pageLoad()}</>
}
