// Rethink Section:

// ___________________________________________________________________

import React from 'react'

// Hooks
import useHomePage from '../../../hooks/useHomePage'

// Components
import BlockContent from '../../BlockContent'

// Theme
import Button from '../../../elements/Button'
import { Box, Flex, Heading, Text } from '../../../elements'
import theme from '../../../../config/theme'
import * as S from './styles.scss'

// ___________________________________________________________________

const TabsPanel: React.FC<{ panels: RethinkPanelShape }> = ({ panels }) => {
  return (
    <Flex width={1}>
      <S.ButtonGroup>
        {panels.map((panel, idx) => (
          <S.Tab key={idx}>
            <Heading as="h4">
              <mark>{panel.tag}</mark>{' '}
              <Text
                as="span"
                fontFamily="body"
                fontSize={0}
                style={{ float: 'right' }}
              >
                for {panel.title}
              </Text>
            </Heading>
            {panel._rawMessage && (
              <BlockContent blocks={panel._rawMessage || []} />
            )}
          </S.Tab>
        ))}
      </S.ButtonGroup>
    </Flex>
  )
}

// ___________________________________________________________________

const Rethink = () => {
  const data = useHomePage()

  return (
    <S.Rethink bg="background" style={{ position: 'relative', zIndex: 99 }}>
      <Box width={[1, 1 / 2]} className="rethink__message">
        <div className="sticky">
          <Heading as="h5" color="tertiary">
            {data.rethink.title}
          </Heading>
          <Heading
            as="h2"
            fontSize={3}
            dangerouslySetInnerHTML={{ __html: data.rethink.heading }}
          />
          {/* <S.Decorator>
          <Hexagons />
        </S.Decorator> */}
        </div>
        <Box style={{ position: 'absolute', bottom: theme.space[7] }}>
          <Button to={`/rethink`} invert={true}>
            Rethink Ortho
          </Button>
        </Box>
      </Box>

      <Box width={[1, 1 / 2]} className="rethink__values">
        <TabsPanel panels={data.rethink.tabPanels} />
      </Box>
    </S.Rethink>
  )
}

export default Rethink
