import { PageTemplate } from '@/widgets/page-template'
import { Text, Center, SimpleGrid, Button } from '@mantine/core'
// import icon from '@/assets/bellIcon.svg'
export function HomePage() {
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
