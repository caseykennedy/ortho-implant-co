// Announcements:

// ___________________________________________________________________

// Core
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// Libraries
import Slider from 'react-slick'

// Components
import MountainMed from '../MountainMed'
import Icon from '../Icons'

// Styles
import * as S from './styles.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Elements
import { Box, Heading, Text } from '../../elements'

// Theme
import theme from '../../../config/theme'

// ___________________________________________________________________

type QueryShape = {
  allSanityAnnouncement: {
    edges: {
      node: {
        message: string
        _updatedAt: string
        _id: string
      }
    }[]
  }
}

type SlickProps = {
  className?: string
  onClick?:
    | ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)
    | undefined
}

// ___________________________________________________________________

// tslint:disable-next-line: function-name
function SampleNextArrow(props: SlickProps) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <Icon name="carat" color={theme.colors.white} />
    </div>
  )
}
// tslint:disable-next-line: function-name
function SamplePrevArrow(props: SlickProps) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <Icon name="carat" color={theme.colors.white} />
    </div>
  )
}

const Announcements: React.FC = () => {
  const data: QueryShape = useStaticQuery(graphql`
    query AnnouncementsQuery {
      allSanityAnnouncement {
        edges {
          node {
            message
            _updatedAt(formatString: "MMMM DD, YYYY")
            _id
          }
        }
      }
    }
  `)
  const query = data.allSanityAnnouncement.edges

  // Slick settings
  const settings = {
    fade: true,
    autoplaySpeed: 6000,
    speed: 1200,
    accessibility: true,
    infinite: true,
    arrows: false,
    dots: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
  return (
    <S.Announcements>
      <Box className="decorator">
        <MountainMed />
      </Box>
      <S.Inner>
        <Box mb={[8, 8]}>
          <Heading as="h3">Announcements</Heading>
        </Box>
        <Slider {...settings}>
          {query.map(({ node: item }) => (
            <div key={item._id}>
              <Text
                as="p"
                color="white"
                className="announcement"
              >
                {item.message}
              </Text>
              <Text as="p" fontSize={1} color="white">
                {item._updatedAt}
              </Text>
            </div>
          ))}
        </Slider>
      </S.Inner>
    </S.Announcements>
  )
}

export default Announcements

// ___________________________________________________________________
