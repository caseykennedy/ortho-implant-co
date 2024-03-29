// JobBoard Component:

import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import Icon from '../Icons'

import useJobPost from '@/hooks/useJobPost'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '@/components/elements'
import theme from '../../../config/theme'

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
    <S.JobBoard as="section" id="careers">
      <Box bg="black" width={[0, 2 / 10, 2 / 8]}>
        <StaticImage src="../../images/landon-engineer.jpg" alt="An OIC engineer in his natural habitat." />
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
            {!jobPosts[0].node.title
              ? 'We are not currently hiring.'
              : 'We are currently seeking to fill the following positions:'}
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
