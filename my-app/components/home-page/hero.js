import classes from './hero.module.css'
import Image from 'next/image'

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                src='/images/site/Tshireletso.jpg' 
                alt="Hero image" 
                width={300} 
                height={300}
                />
                </div>
            <h1>Hi, My name is Tshireletso</h1>
            <p>I blog about web devlopment especially fronted frameworks like React</p>
        </section>
    )
}

export default Hero; 