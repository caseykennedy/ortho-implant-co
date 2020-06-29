// JobBoard Component:

// ___________________________________________________________________

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image/withIEPolyfill'

import ImgMatch from '../ImgMatch'
import Icon from '../Icons'
import BlockContent from '../BlockContent'

import * as S from './styles.scss'
import { Box, Flex, Heading, Text, AnimatedBox } from '../../elements'
import theme from '../../../config/theme'

// ___________________________________________________________________

type JobPostShape = {
  jobs: {
    edges: {
      node: JobPostQuery
    }[]
  }
}

type JobData = {
  job: JobPostQuery
}

type JobPostQuery = {
  _rawExcerpt: string
  _rawBody: string
  publishedAt: string
  title: string
  slug: {
    current: string
  }
}

const JobPost: React.FC<JobData> = ({ job }) => {
  return (
    <Link to={`/careers/${job.slug.current}`} className="t--link">
      {job.title}
      <Icon name="nextArrow" />
    </Link>
  )
}

const JobBoard = () => {
  const data: JobPostShape = useStaticQuery(graphql`
    query JobPostQuery {
      jobs: allSanityJobPost {
        edges {
          node {
            _rawExcerpt
            _rawBody
            publishedAt
            title
            slug {
              current
            }
          }
        }
      }
    }
  `)
  const jobPosts = data.jobs.edges
  // console.log('---_- Notions -_---')
  // console.log(jobPosts)
  return (
    <S.JobBoard as="section">
      <Box bg="black" width={[0, 2 / 10, 2 / 8]}>
        <ImgMatch src="office-space.png" altText="" />
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
            There might be different departments, but we work together to break
            conventional organizational boundaries.
          </Text>
        </Box>

        <Box width={1} className="postings">
          {jobPosts.map(({ node: job }, idx) => (
            <JobPost job={job} key={idx} />
          ))}
        </Box>
      </Box>
    </S.JobBoard>
  )
}

export default JobBoard
