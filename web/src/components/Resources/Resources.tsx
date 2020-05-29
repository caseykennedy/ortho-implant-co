// Resources

// ___________________________________________________________________

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import GoogleMapReact from 'google-map-react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { Text, Heading, Box, Flex } from '../../elements'

import Marker from './Marker'
import ImgMatch from '../ImgMatch'
import Icon from '../Icons'

import * as S from './styles.scss'
import theme from '../../../config/theme'

// ___________________________________________________________________

type QueryShape = {
  allSanityJobPost: {
    edges: {
      node: {
        id: string
        link: string
        title: string
      }
    }[]
  }
}

const JobPost: React.FC = () => {
  const data: QueryShape = useStaticQuery(graphql`
    query JobPostQuery {
      allSanityJobPost {
        edges {
          node {
            id
            link
            title
          }
        }
      }
    }
  `)
  const jobs = data.allSanityJobPost.edges
  return (
    <>
      {jobs.map(({ node: job }) => (
        <S.JobPost
          as="a"
          key={job.id}
          href={job.link}
          target="_blank"
          width={[1, 1 / 3]}
        >
          {job.title}
          <Text mt={7}>
            <Icon name="nextArrow" />
          </Text>
        </S.JobPost>
      ))}
    </>
  )
}

const Resources: React.FC = () => {
  return (
    <S.Resources>
      <S.PageTitle width={[1]}>
        <Box className="title" width={[1, 1 / 2]}>
          <Heading as="h2">Resources</Heading>
          <Flex as="nav" mt={4}>
            <Text mr={4}>
              <AnchorLink href="#contact">contact</AnchorLink>
            </Text>
            <AnchorLink href="#careers">careers</AnchorLink>
          </Flex>
        </Box>
        <Box className="image" width={[1, 1 / 2]}>
          <ImgMatch src="cactus.jpg" altText="Cahuilla Casino Hotel" />
        </Box>
      </S.PageTitle>

      <S.Contact id="contact">
        <Flex width={[1, 2 / 3]} className="content">
          <Box>
            <Heading as="h3" mt={3} mb={8}>
              Contact Us
            </Heading>
          </Box>
          <Flex width={1} flexWrap="wrap">
            <Box width={[1, 1 / 3]} mb={[6, 0]}>
              <Heading as="h5">Tel / Fax</Heading>
              <a href="#">951-763-5549</a> — Tel
              <br />
              <a href="#">951-763-2808</a> — Fax
            </Box>
            <Box width={[1, 1 / 3]} mb={[6, 0]}>
              <Heading as="h5">Address</Heading>
              <a href="#">
                52701 CA Hwy 371
                <br />
                Anza, CA 92539
              </a>
            </Box>
            <Box width={[1, 1 / 3]}>
              <Heading as="h5">Email</Heading>
              <a href="#">info@cahuilla.net</a>
            </Box>
          </Flex>
        </Flex>

        <Box bg="black" width={[1, 1 / 3]} className="map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBhFPTf9XXJ9x7SPjnyG7Vg8KaEPxKwBro'
            }}
            defaultCenter={{
              lat: 33.5407404,
              lng: -116.7422544
            }}
            defaultZoom={10}
            yesIWantToUseGoogleMapApiInternals={true}
          >
            <Marker lat={33.5407404} lng={-116.7422544} text="Test" />
          </GoogleMapReact>
        </Box>
      </S.Contact>

      <S.Careers id="careers">
        <Flex width={[1, 6 / 8]} className="content">
          <Heading as="h3" mt={3} mb={8}>
            Career Opportunities
          </Heading>
          <Flex flexWrap="wrap">
            <JobPost />
          </Flex>
        </Flex>

        <Box bg="black" width={[1, 2 / 8]} className="image">
          <ImgMatch src="lone-mtn.jpg" altText="Cahuilla Casino Hotel" />
        </Box>
      </S.Careers>
    </S.Resources>
  )
}

export default Resources
