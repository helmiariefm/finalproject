import React, {Component} from 'react';
import './App.css';
import jb from './images/jb.gif';
import header from './images/header.png';
import layout from './images/layout.jpg';
import Button from './buttons/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick/lib/slider';

class App extends Component {  
  render(){
    function handleNavmenu(){
      const navMenu = document.querySelector('#navMenu');
      if(navMenu.classList.contains('flex')){
          navMenu.classList.remove('flex');
          navMenu.classList.add('hidden')
      }else{
          navMenu.classList.add('flex');
          navMenu.classList.remove('hidden');
      }
    }

    var settings = {
      className: "center",
      centerMode: true,
      centerPadding: "0px",
      dots: true,
      infinite: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 2000      
    };

    function handleToggle(){
      const body = document.querySelector('#body')
      const isActive = body.classList.contains('bg-white')

      if(isActive){
          body.classList.remove('bg-white')
          body.classList.add('dark')
      } else {
          body.classList.add('bg-white')
          body.classList.remove('dark')
      }
    }
    return (
      <div className='dark:bg-zinc-800'>
      <div id='body' className='bg-white dark:bg-zinc-800'>
        <header className='bg-white dark:bg-zinc-800 h-16 md:flex md:justify-around'>        
          <img src={header} alt='sponsor' className='hidden md:block w-[440px] h-9 my-auto'/>
          <nav className="my-auto md:hidden">          
            <button onClick={handleNavmenu}>
              <img className="w-7" src="http://cdn.onlinewebfonts.com/svg/img_545657.png" alt="menu"/>
            </button>
          </nav>
          <nav id='navMenu' className='hidden md:block md:my-5'>
            <div className='my-auto flex gap-2 md:gap-4 text-gray-500'>
              <button className='text-sm md:text-base font-bold dark:text-slate-100'>
                <a href='#news'>NEWS</a>
              </button>
              <button className='text-sm md:text-base font-bold dark:text-slate-100'>
                <a href={'./pages/BuyTickets.jsx'}>TICKETS</a>
              </button>
              <button className='text-sm md:text-base font-bold dark:text-slate-100'>
                <a href='#gallery'>GALLERY</a>
              </button>
              <button className='text-sm md:text-base font-bold dark:text-slate-100'>
                <a href='#contact'>CONTACT</a>
              </button>
              <div className='grid grid-cols-3'>
                <div className='m-1 place-self-end'>
                    <img className="w-7" src="./sun.png" alt="sun"/>
                </div>

                <button onClick={handleToggle}>
                    <div className='darkModeToggle bg-amber-200 dark:bg-zinc-300'>
                        <div className='switcher bg-amber-400 dark:bg-zinc-500'></div>
                    </div>
                </button>
        
                <div className='m-1 pl-2 md:pl-0'>
                    <img className='w-7' src='./moon.png' alt="moon"/>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <img src={jb} alt='main banner'/>
        <div className='dark:bg-zinc-800 h-20'></div>
        <div className='dark:bg-zinc-800'>
        <div className='mx-7 md:mx-24 dark:bg-zinc-800 dark:text-slate-100'>
          <h1 id='news' className='text-center text-3xl font-bold -mt-1 mb-9'>News</h1>
          <p className='text-lg'>
            Jakarta, Indonesia (March 29, 2022) - Justin Bieber announced new dates for his much-anticipated Justice World Tour, including Jakarta on November 2nd and 3rd, 2022 at Stadion Madya, Gelora Bung Karno. Kicking off on October 22nd, Bieber will hit Kuala Lumpur, Jakarta, Nagoya, Osaka and Tokyo. The entire world tour spans more than 100 dates throughout 2022 and 2023 in North America, South America, Europe, the UK, Australia, New Zealand, South Africa, Asia and the Middle East, with more shows to be announced in Asia very soon.
            <br/>
            <br/>
            AEG Presents Asia, PK Entertainment and Sound Rhythm are thrilled to announce that due to overwhelming demand, tickets for Justin Bieber’s much-anticipated Justice World Tour in Jakarta this November 3rd, 2022 have sold out. To keep up with fans demand, PK Entertainment is pleased to announce an additional date in Jakarta on Wednesday, November 2nd, 2022. Tickets will go on sale at 10.00 a.m. (GMT+7) on April 2, 2022 exclusively at www.justinbieberinjakarta.com and Blibli. Ticket purchases can only be made using BCA credit/debit cards, or by transfer to BCA virtual account.
            <br/>
            <br/>
            The new dates come on the heels of his recently announced international shows, starting in May 2022 in Mexico and will then continue on to Scandinavia for festival shows in August; South America, South Africa and the Middle East in September & October, and then over to Asia, Australia and New Zealand in October, November & December before moving to the UK and Europe in early 2023. Each evening promises to be a celebration for both Justin and his fans, who have been looking forward to these new shows since the pandemic sidelined the previously announced 2020 dates.
            <br/>
            <br/>
            The ‘Justice World Tour,’ promoted by AEG Presents, is Justin’s first global outing since 2016/2017’s ‘Purpose World Tour’. Described by The Times of London as “mesmerizing”, Bieber played to 2.7 million fans over the course of his 2016-2017 run, with the finale seen by 65,000 fans at London’s British Summer Time Hyde Park festival.
            <br/>
            <br/>
            On New Year’s Eve 2020, Justin livestreamed his first full performance in 3 years from Los Angeles, electrifying and reconnecting with fans around the world.
            <br/>
            <br/>
            “We’ve been working hard to create the best show we’ve ever done, and we can’t wait to share it with fans around the world. I’ll see you soon,” said Bieber.
            <br/>
            <br/>
            The ‘Justice World Tour’ is named after Justin’s latest smash hit album ‘Justice’. Released in April 2021, it debuted as the most streamed album in 117 countries. The album and its tracks have taken the already global pop phenomenon to new heights.
            <br/>
            <br/>
            ‘Justice' has amassed nearly 9 billion streams worldwide, arriving on the back of huge international hits ‘Anyone’, ‘Lonely’ and ‘Holy’, which had already gathered 2 billion streams prior to the album’s release. Another breakout smash hit from the album immediately followed, with ‘Peaches’ racking up over 2.5 billion streams so far. The Kid LAROI duet ‘Stay’, was released in July this year and became the fastest song ever to hit 1 billion streams on Spotify.
            <br/>
            <br/>
            In an unprecedented career that started when he was 13 years old, Bieber has released 6 studio albums and holds 32 Guinness World Records, 21 Billboard Music Awards, 2 BRIT Awards, 18 American Music Awards and 21 MTV Europe Music Awards. He has sold over 80 million albums and last year broke Elvis Presley’s record as the youngest solo artist to have 8 albums reach Number 1 on the Billboard 200 charts. In August, he broke the all-time record for monthly listeners on Spotify with over 83 million.
            <br/>
            <br/>
            Recently named Artist Of The Year at the MTV Video Music Awards and nominated for a field-leading 8 MTV EMA Awards, Bieber remains the Number 1 artist on both YouTube and Spotify worldwide, cementing his place as one of the biggest pop stars of the 21st century.
          
          </p>
          
          <hr className='flex justify-center items-center m-auto mt-16 bg-gray-500 md:w-full h-[3px]'/>
          
          <h1 className='text-center text-3xl font-bold mt-16 mb-9'>Videos</h1>
          <div className='md:flex md:justify-around mx-11'>
            <iframe className='rounded-xl mb-3 w-60 h-36 md:w-[560px] md:h-[315px]' src="https://www.youtube.com/embed/Fp8msa5uYsc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <iframe className='rounded-xl w-60 h-36 md:w-[560px] md:h-[315px]' src="https://www.youtube.com/embed/tQ0yjYUFKAE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          
          <hr className='flex justify-center items-center m-auto mt-16 bg-gray-500 md:w-full h-[3px]'/>
          
          <h1 className='text-center text-3xl font-bold mt-16 mb-9'>Layout</h1>
          <img src={layout} alt='layout'/>
          <Button text={'BUY TICKETS'}/>
  
          <hr className='flex justify-center items-center m-auto mt-14 bg-gray-500 md:w-full h-[3px]'/>
  
          <h1 id='gallery' className='text-center text-xl md:text-3xl font-bold mt-7 mb-11'>Gallery</h1>
          <div className='-rotate-6'>
          <Slider {...settings}>
            <img className='px-3 rounded-lg' src='./1.jpg' alt='1'/>
            <img className='px-3 rounded-lg' src='./2.jpg' alt='2'/>
            <img className='px-3 rounded-lg' src='./3.jpg' alt='3'/>
            <img className='px-3 rounded-lg' src='./4.jpg' alt='4'/>
            <img className='px-3 rounded-lg' src='./5.jpg' alt='5'/>
            <img className='px-3 rounded-lg' src='./6.jpg' alt='6'/>
          </Slider>
          </div>

          <hr className='flex justify-center items-center m-auto mt-28 bg-gray-500 md:w-full h-[3px]'/>
  
          <h1 className='text-center text-2xl md:text-3xl font-bold mt-14 mb-11'>Sponsors</h1>
          <img src='./SPONSOR.PNG' alt='sponsor'/>

          <h1 id='contact' className='text-center text-2xl md:text-3xl font-bold mt-14 mb-11'>Customer Service Info</h1>
          <p>For more information about ticket purchase, wheelchair accessible seating and international purchase, please contact: </p>
          <p className='font-bold text-sm my-2'>Loket.com</p>
          <p>
            Whatsapp: 021-2128-2127 <br/>
            Phone: 021-8060-0822 <br/>
            Email: support@loket.com <br/>
          </p>

          <h1 className='text-center text-xl md:text-xl font-bold mt-14'>
            Copyright <br/>
            <span className='text-sm md:text-sm'>© 2022 PK ENTERTAINMENT GROUP INDONESIA. ALL RIGHTS RESERVED.</span>
          </h1>          
        </div>
        </div>
      </div>
      </div>
    );

  }  
}

export default App;
