import { useState } from 'react'
import { Title, Button, Input, Paper, Text } from '@mantine/core'
import classes from '../register-form/register-form.module.css'
// import { NavLink } from 'react-router-dom'

export function ProfileDataForm({ handleAddDoc }) {
  const [name, SetName] = useState('')
  const [username, SetUsername] = useState('')
  const [city, SetCity] = useState('')

  const handleAdd = e => {
    e.preventDefault()
    handleAddDoc(name, username, city)
  }

  const handleNameChange = event => SetName(event.target.value)
  const handleUsernameChange = event => SetUsername(event.target.value)
  const handleCityChange = event => SetCity(event.target.value)

  return (
    <Paper className={classes.register_wrapper}>
      <Title order={2} ta="center" mb={'40px'} fz={'38px'} ff={'gteestiprodisplay'}>
        Данные профиля
      </Title>
      <Text mb={'20px'} fw={500} ff={'gteestiprodisplay'}>
        Заполните личные данные, чтобы иметь доступ к своим заказам и результатам в приложении
      </Text>
      <form onSubmit={handleAdd}>
        <Input
          name="name"
          placeholder="Введите ФИО"
          required
          size="md"
          mb={'10px'}
          styles={{
            input: {
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#f3f3f3',
              height: '50px'
            }
          }}
          // error={errors.username}
          onChange={event => handleNameChange(event)}
          //   className={classes.input}
          // value={username}
        />
        <Input
          name="name"
          placeholder="Придумайте имя пользователя"
          required
          size="md"
          mb={'10px'}
          styles={{
            input: {
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#f3f3f3',
              height: '50px'
            }
          }}
          // error={errors.username}
          onChange={event => handleUsernameChange(event)}
          //   className={classes.input}
          // value={username}
        />
        <Input
          name="name"
          placeholder="Ваш город"
          required
          size="md"
          styles={{
            input: {
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#f3f3f3',
              height: '50px'
            }
          }}
          // error={errors.username}
          onChange={event => handleCityChange(event)}
          //   className={classes.input}
          // value={username}
        />
        <Button
          fullWidth
          size="lg"
          type="submit"
          styles={{
            root: {
              backgroundColor: '#BA75FE',
              transition: '0.3s',
              marginTop: '30px',
              '&:hover': {
                backgroundColor: '#BA75FE90'
              }
            }
          }}
        >
          Далее
        </Button>
      </form>
    </Paper>
  )
}
