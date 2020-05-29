// Account:

// ___________________________________________________________________

import React from 'react'

import Moment from 'react-moment'

// @ts-ignore
import { login, logout, isAuthenticated, getProfile } from '../../../utils/auth'

import { Text, Heading, Box, Flex } from '../../../elements'
import Icon from '../../Icons'
import MountainLarge from '../../MountainLarge'

import * as S from './styles.scss'
import theme from '../../../../config/theme'

// ___________________________________________________________________

const Account: React.FC = () => {
  const user = getProfile()
  return (
    <S.Aside width={[1, 3 / 10]}>
      <S.User>
        <S.WelcomeBox width={[1]}>
          <div className="decorator">
            <MountainLarge />
          </div>
          <div className="inner">
            <Heading as="h3" mt={10} mb={0}>
              Welcome{user.nickname && `, ${user.nickname}`}
            </Heading>
          </div>
        </S.WelcomeBox>

        <Flex width={1} px={4} py={4}>
          <Box as="img" src={user.picture} alt="avatar" width={1 / 4} pr={4} />
          <Text as="p" fontSize={1} lineHeight={1.8} width={3 / 4}>
            {user.nickname}
            <br />
            {user.email}
            <br />
            <Text as="span" fontSize={1}>
              Joined: <Moment format="MM/DD/YYYY">{user.updated_at}</Moment>
            </Text>
          </Text>
        </Flex>
      </S.User>
      <S.Tools>
        {/* {JSON.stringify(user, null, 2)} */}
        <Box className="updates">
          <Text as="p" fontSize={3}>
            Get alerts sent directly to your phone
          </Text>
          <Text as="p" fontSize={1} mt={8}>
            Text "Cahuilla" to <span className="t-underline">31996</span>
          </Text>
        </Box>
        <a href="#logout">
          Take a survey
          <div className="ico">
            <Icon name="document" />
          </div>
        </a>
        {!isAuthenticated() ? (
          <span>log in</span>
        ) : (
          <a
            className="sign-out"
            href="#logout"
            onClick={e => {
              logout()
              e.preventDefault()
            }}
          >
            Sign Out
            <div className="ico">
              <Icon name="nextArrow" />
            </div>
          </a>
        )}
      </S.Tools>
    </S.Aside>
  )
}

export default Account
