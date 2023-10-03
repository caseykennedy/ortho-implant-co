// Rethink Section:

import React from 'react'

// Hooks
import useHomePage from '@/hooks/useHomePage'

// Components
import BlockContent from '@/components/BlockContent'

// Theme
import Button from '@/components/elements/Button'
import { Box, Flex, Heading, Text } from '@/components/elements'
import * as S from './styles.scss'

const TabsPanel: React.FC<{ panels: RethinkPanelShape }> = ({ panels }) => {
  return (
    <Flex width={1}>
      <S.ButtonGroup>
        {panels.map((panel, idx) => (
          <S.Tab key={idx}>
            <Heading as="h4">
              <mark>{panel.tag}</mark>{' '}
              <Text as="span" fontFamily="body" fontSize={0} style={{ float: 'right' }}>
                for {panel.title}
              </Text>
            </Heading>
            {panel._rawMessage && <BlockContent blocks={panel._rawMessage || []} />}
          </S.Tab>
        ))}
      </S.ButtonGroup>
    </Flex>
  )
}

const Rethink = () => {
  const data = useHomePage()

  return (
    <S.Rethink bg="background" style={{ position: 'relative', zIndex: 99 }}>
      <Flex width={[1, 1 / 2]} className="rethink__message">
        <div className="sticky">
          <Heading as="h5" color="tertiary">
            {data.rethink.title}
          </Heading>
          <Heading as="h2" fontSize={3} dangerouslySetInnerHTML={{ __html: data.rethink.heading }} />
          {/* <S.Decorator>
          <Hexagons />
        </S.Decorator> */}
        </div>
        <Box>
          <Button to={`/rethink`} invert={true}>
            Rethink Ortho
          </Button>
        </Box>
      </Flex>

      <Box width={[1, 1 / 2]} className="rethink__values">
        <TabsPanel panels={data.rethink.tabPanels} />
      </Box>
    </S.Rethink>
  )
}

export default Rethink
