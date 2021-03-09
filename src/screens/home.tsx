import React, { useEffect } from 'react'
import { Title } from '../styles/common'
import { CardActionArea, CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { VivaceContainer } from '../components/app-bar'
import { appStore } from '../stores/app'

const cardItems: Array<{ title: string, src: string }> = [
  {
    title: '9기 Four-mall 연주회',
    src: 'https://firebasestorage.googleapis.com/v0/b/vivacepiano-fb077.appspot.com/o/9th_four_mall_1.jpg?alt=media&token=a5b22b1c-d3c7-4bb5-873c-f0babb816f02',
  },
  {
    title: '8기 정기연주회',
    src: 'https://firebasestorage.googleapis.com/v0/b/vivacepiano-fb077.appspot.com/o/8th_concert2.jpg?alt=media&token=de7b9dff-18c7-4620-a764-8c0d13f6aa8a',
  },
  {
    title: '7기 정기연주회',
    src: 'https://firebasestorage.googleapis.com/v0/b/vivacepiano-fb077.appspot.com/o/7th_concert2.jpg?alt=media&token=6036e3b5-3d77-42b8-9910-74d08ff89714',
  }
]

const HomeScreen = () => {
  useEffect(() => {
    appStore.title = 'VIVACE'
  }, [])

  return (
    <VivaceContainer>
      <Title>
        Popular Activity
      </Title>
      <Carousel
        autoPlay
        centerMode
        infiniteLoop
        interval={4000}
        showIndicators
        axis='horizontal'
      >
        {cardItems.map((item) =>
          <ConcertGalleryItem
            title={item.title}
            image={item.src}
            key={item.title}
          />
        )}
      </Carousel>
    </VivaceContainer>
  )
}

const ConcertGalleryItem: React.FC<{ title: string, image: string }> = ({ title, image }) => (
  <Paper elevation={0} square style={{ aspectRatio: '1.78' }}>
    <CardActionArea>
      <CardMedia
        title={title}
        image={image}
        style={{ aspectRatio: '1.5' }}
      />
      <CardContent style={{ position: 'absolute' }}>
        <Typography variant='h6' component='h2' gutterBottom>
          {title}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Paper>
)

export default HomeScreen
