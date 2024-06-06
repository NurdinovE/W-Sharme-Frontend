import { createStyles, Header, Group, Button, Input, UnstyledButton } from '@mantine/core'
import { Link, NavLink } from 'react-router-dom'
import HeaderLogo from '../../../assets/logo.svg'
import bell from '../../../assets/bellIcon.svg'
import { IconSearch } from '@tabler/icons-react'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../../app/firebase/firebase-config'
import defaultProfile from '@/assets/profile.png'

const useStyles = createStyles(theme => ({
  header: {
    borderBottom: 0,
    margin: 0,
    padding: '15px 0',
    boxShadow: '0px -5px 20px 0 #D9D9D9',

    ['@media (max-width: 1000px)']: {
      backgroundColor: 'black'
    }
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
        0.1
      )
    }
  },
  linkLabel: {
    marginRight: 5
  }
}))

export function HeaderMenu() {
  // const links = [
  //   { link: '/', label: 'Домой' },
  //   { link: '/32', label: 'До4234мой' },
  //   { link: '/234', label: 'До23мой' },
  //   { link: '/234', label: 'Дом324ой' }
  // ]
  // const [opened, { toggle }] = useDisclosure(false)
  const { classes } = useStyles()
  const [isActive, setIsActive] = useState(false)
  const [user] = useAuthState(auth)

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = () => {
    setIsActive(false)
  }

  // const items = links.map(link => {
  //   return (
  //     <NavLink key={link.label} to={link.link} className={classes.link}>
  //       {link.label}
  //     </NavLink>
  //   )
  // })

  return (
    <Header className={classes.header} mb={4}>
      <div className="container">
        <div className={classes.inner}>
          <Group spacing={5} className={classes.links}>
            <UnstyledButton w="45px" h="45px">
              <Link to="/">
                <img src={HeaderLogo} alt="Logotype" style={{ width: '100%' }} />
              </Link>
            </UnstyledButton>
            <Input
              icon={<IconSearch stroke={2} width={'20px'} height={'20px'} color="#A2A8B0" />}
              ml={'35px'}
              pl={0}
              w={'310px'}
              size="lg"
              radius="md"
              placeholder={isActive ? '' : 'Поиск'}
              onFocus={handleFocus}
              onBlur={handleBlur}
              styles={() => ({
                input: {
                  '&:focus-within': {
                    border: '1px solid #BA75FE'
                  },
                  '&:hover': {
                    border: '1px solid #BA75FE'
                  },
                  '&::placeholder': {
                    fontSize: '16px',
                    fontWeight: 600,
                    color: 'A2A8B0'
                  },
                  '&': {
                    fontWeight: 600,
                    fontSize: '16px',
                    backgroundColor: '#F3F3F3',
                    border: '1px solid transparent',
                    paddingLeft: '40px'
                  }
                }
              })}
            />
            <UnstyledButton ml={'10px'} w={'30px'} h={'30px'}>
              <img src={bell} alt="" />
            </UnstyledButton>
          </Group>
          <Group className={classes.hiddenMobile}>
            {user ? (
              <>
                <button className="sign-out" onClick={() => auth.signOut()}>
                  Sign Out
                </button>
                <a href="/profile">
                  <img src={defaultProfile} alt="DefaultImg" />
                </a>
              </>
            ) : (
              <>
                <Button variant="default">
                  <NavLink to="/login">Войти</NavLink>
                </Button>
                <Button>
                  <NavLink to="/register">Регистрация</NavLink>
                </Button>
              </>
            )}
          </Group>
          {/* <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" color="#000" />
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {styles => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition> */}
        </div>
      </div>
    </Header>
  )
}
