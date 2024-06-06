import cls from '../../../widgets/user-profile/ui/ui.module.scss'

export const UserEdit = () => {
  return (
    <div className={cls.community}>
      <div className={cls.community_block}>
        {/* <img src={defaultProfile} alt="" /> */}
        <div className={cls.community_row}>
          <div className={cls.leomanic}>
            <div className={cls.zvezda}>
              {/* <h2>{userData?.name}</h2> */}
              <div className={cls.row}>
                {/* <img src={zvezda} alt="" /> */}
                <p>{/* {userData?.rating} <span>/10</span> */}</p>
              </div>
            </div>
          </div>
          User Edit page
          <div className={cls.region}>{/* <p>{userData?.city}</p> */}</div>
          {/* <p className={cls.text}>{userData?.aboutYourself}</p> */}
        </div>
      </div>
    </div>
  )
}
