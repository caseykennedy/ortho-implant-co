// JobBoard Component:

// ___________________________________________________________________

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import ImgMatch from '../ImgMatch'
import Icon from '../Icons'
import BlockContent from '../BlockContent'

import useJobPost from '../../hooks/useJobPost'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

const JobPost: React.FC<JobData> = ({ job }) => {
  const slug = job.slug.current
  return (
    <Link to={`/careers/${slug}`} className="t--link">
      {job.title}
      <Icon name="nextArrow" />
    </Link>
  )
}

const JobBoard = () => {
  const jobPosts = useJobPost()
  // console.log('---_- Notions -_---')
  // console.log(jobPosts)
  return (
    <S.JobBoard as="section">
      <Box bg="black" width={[0, 2 / 10, 2 / 8]}>
        <ImgMatch src="office-space.png" altText="OIC office" />
      </Box>

      <Box p={theme.gutter.axis} width={[1, 8 / 10, 6 / 8]}>
        <Box width={[1, 8 / 10, 2 / 3]} mb={[7, 8]}>
          <Heading as="h5" color="white">
            Join the team
          </Heading>
          <Heading as="h3" fontSize={3} fontWeight={400}>
            At OIC, it's about working with us – being part of the team.
          </Heading>
          <Text as="p" fontSize={2}>
            We are currently seeking to fill the following positions:
          </Text>
        </Box>

        <Box width={1} className="posts">
          {jobPosts.map(({ node: job }, idx) => (
            <JobPost job={job} key={idx} />
          ))}
        </Box>
      </Box>
    </S.JobBoard>
  )
}

export default JobBoard
