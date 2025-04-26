import React from 'react'
import Button from '../ui/Button'

const Gallery = () => {
    return (
        <section id="gallery" className="py-16 md:py-24 bg-muted/50 text-white dark:bg-slate-800">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Wedding Gallery</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-shadow-white">
                        Browse through our collection of beautiful weddings we've had the pleasure to organize.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWqN0zF8ElvGTgE1ECxUjktoEDPQVcFRfzQ&s',
                        'https://images.zola.com/488c089c-3330-4cce-97e7-900701f0ee89',
                        'https://images.unsplash.com/photo-1587271636175-90d58cdad458?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwd2VkZGluZyUyMGRlY29yfGVufDB8fDB8fHww',
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_fDhNWVp1aEGetPb6L2R1guk1eWXlCwIX579Zfiv26ZAMYnRVmWSkOpLPquChJt5Hp7E&usqp=CAU',
                        'https://t4.ftcdn.net/jpg/00/41/18/63/360_F_41186371_hH1bEJH3qYYDspcxLrguJgiFcXC7L7ss.jpg',
                        'https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/Indian-Wedding-Couple-Portrait-The-Fern-Hotels-and-Resorts-1024x683.jpg',
                    ].map((src, index) => (
                        <div key={index} className="relative w-full h-64 overflow-hidden rounded-3xl">
                            <img
                                src={src}
                                alt="Wedding gallery image"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <Button variant="outline">View Full Gallery</Button>
                </div>
            </div>
        </section>
    )
}

export default Gallery
