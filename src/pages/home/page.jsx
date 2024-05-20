import { PageTemplate } from '@/widgets/page-template'
import { Text, Center, SimpleGrid, Button } from '@mantine/core'
// import { useEffect, useState } from 'react'
// import icon from '@/assets/bellIcon.svg'
export function HomePage() {
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
      <div className="container">
        <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs" style={{ position: 'absolute' }}>
          <Button variant="transparent">
            {/* leftIcon={`${icon}`} */}
            Button 1
          </Button>
          <Button variant="transparent">Button 1</Button>
          <Button variant="transparent">Button 1</Button>
          <Button variant="transparent">Button 1</Button>
          <Button variant="transparent">Button 1</Button>
        </SimpleGrid>
        <Center>
          <Text>Добро пожаловать!</Text>
        </Center>
      </div>
    </PageTemplate>
  )
}
