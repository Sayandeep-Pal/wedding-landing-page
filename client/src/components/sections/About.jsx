import React from 'react'
import Button from '../ui/Button'

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50 text-white dark:bg-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
                <p className="text-muted-foreground">
                  With over 10 years of experience in the wedding industry, we specialize in creating personalized,
                  memorable celebrations that reflect your unique love story. Our dedicated team of professionals is
                  committed to making your wedding day everything you've dreamed of and more.
                </p>
                <p className="text-muted-foreground">
                  We believe that every wedding should be as unique as the couple themselves. That's why we work closely
                  with you to understand your vision, preferences, and budget to create a tailor-made wedding experience
                  that exceeds your expectations.
                </p>
                <Button variant="outline" className="mt-4">
                  Learn More About Us
                </Button>
              </div>
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/023/458/240/small_2x/bride-and-groom-s-hands-illustration-ai-generative-free-photo.jpg" alt="Wedding couple" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
