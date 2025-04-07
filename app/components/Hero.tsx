'use client'

import { Button, Typography } from '@mui/material'
import Section from './shared/Section'
import { useThemeMode } from './ThemeModeProvider'

const Hero = () => {
  const { mode } = useThemeMode();
  return (
      <Section gradient={mode} type={0} id='hero'>
          <Typography variant='h1'>Welcome to My Portfolio</Typography>
          <Typography variant='body1' sx={{ marginBottom: "2rem"}}>I'm a passionate developer creating amazing web experiences</Typography>
          <Button
          variant='contained'
            className="px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 active:scale-95 transition-all"
          >
            View My Work
          </Button>
      </Section>
  )
}

export default Hero

